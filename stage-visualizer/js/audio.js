// Web Audio analysis. Only same-origin files are used (served from this folder), so no CORS setup is needed.

// Mean of FFT bins from f0..f1 Hz, as 0..1. `bins` are the byte magnitudes from an AnalyserNode.
export function bandMean(bins, sampleRate, f0, f1) {
  const n = bins.length;
  const nyquist = sampleRate / 2;
  let i0 = Math.max(0, Math.floor(f0 / nyquist * n));
  let i1 = Math.min(n, Math.ceil(f1 / nyquist * n));
  if (i1 <= i0) i1 = Math.min(n, i0 + 1);
  let s = 0;
  for (let i = i0; i < i1; i++) s += bins[i];
  return (s / (i1 - i0)) / 255;
}

// Onset tracker. `env` jumps to 1 on a real peak and fades. `beat` follows `env`
// until tempo locks, then it is a peak on every grid beat. `bpm` is the tempo.
// `phase` is 0 on the beat and rises to 1.
export function createBeatTracker() {
  return {
    beat: 0, bpm: 0, phase: 0, env: 0,
    prev: 0, prevFlux: 0, prevPrevFlux: 0,
    time: 0, lastBeat: -1, quiet: 0,
    flux: [], intervals: [],
  };
}

export function stepBeat(s, energy, dt) {
  dt = Math.max(0, Math.min(dt, 0.1));
  if (!Number.isFinite(energy)) energy = 0;
  energy = Math.max(0, Math.min(1, energy));
  const flux = Math.max(0, energy - s.prev);
  s.prev = energy;
  s.time += dt;
  s.flux.push(flux);
  // ~1.2 s of history. 60 fps keeps this under about 80 samples.
  const maxHist = 80;
  if (s.flux.length > maxHist) s.flux.splice(0, s.flux.length - maxHist);
  let mean = 0;
  for (let i = 0; i < s.flux.length; i++) mean += s.flux[i];
  mean /= s.flux.length || 1;
  let varsum = 0;
  for (let i = 0; i < s.flux.length; i++) {
    const d = s.flux[i] - mean;
    varsum += d * d;
  }
  const std = Math.sqrt(varsum / (s.flux.length || 1));
  const thresh = Math.max(0.035, mean + std * 1.45);
  const since = s.lastBeat < 0 ? 99 : s.time - s.lastBeat;
  const armed = s.flux.length > 20;
  const peak = armed && s.prevFlux > s.prevPrevFlux && s.prevFlux >= flux
    && s.prevFlux > thresh && since >= 0.28;
  s.prevPrevFlux = s.prevFlux;
  s.prevFlux = flux;

  if (peak) {
    if (s.lastBeat >= 0) {
      let interval = s.time - s.lastBeat;
      if (s.bpm >= 55) {
        const period = 60 / s.bpm;
        if (interval > period * 1.6 && interval < period * 2.5) interval *= 0.5;
      }
      if (interval >= 0.3 && interval <= 1.15) {
        s.intervals.push(interval);
        if (s.intervals.length > 8) s.intervals.shift();
        const sorted = s.intervals.slice().sort((a, b) => a - b);
        const med = sorted[sorted.length >> 1];
        const next = Math.max(55, Math.min(200, 60 / med));
        s.bpm = s.bpm ? s.bpm * 0.6 + next * 0.4 : next;
      }
    }
    s.lastBeat = s.time;
    s.phase = 0;
    s.env = 1;
  } else {
    s.env *= Math.exp(-dt * 7);
  }

  let wrapped = false;
  if (s.bpm >= 55) {
    s.phase += dt * (s.bpm / 60);
    if (s.phase >= 1) {
      s.phase -= Math.floor(s.phase);
      wrapped = true;
    }
  }
  if (peak) s.phase = 0;

  if (mean < 0.008) {
    s.quiet += dt;
    if (s.quiet > 0.8) {
      s.bpm *= Math.exp(-dt * 2.5);
      if (s.bpm < 40) { s.bpm = 0; s.phase = 0; wrapped = false; }
    }
  } else s.quiet = 0;

  const locked = s.intervals.length >= 3 && s.bpm >= 55 && s.bpm <= 200;
  const grid = locked ? Math.pow(Math.max(0, 1 - s.phase), 2) : 0;
  s.beat = locked ? Math.max(grid, wrapped ? 1 : 0) : s.env;
  return s;
}

export class AudioEngine {
  constructor(bands = 64) {
    this.bands = bands;
    this.ctx = null;
    this.analyser = null;
    this.onset = null;
    this.el = null;
    this.srcNode = null;
    this.testNodes = null;
    this.monitor = null; // analyser -> monitor -> speakers. System listen sets this to 0 so we do not echo.
    this.systemStream = null;
    this.systemNode = null;
    this.whenSystemEnds = null;
    this.levels = new Float32Array(bands); // smoothed 0..1 per band
    this.waveform = new Float32Array(1024); // latest time-domain samples, -1..1
    this.beats = createBeatTracker();
    // beat follows the hit until tempo locks, then the grid. onset is the hit envelope only.
    this.info = { bands: this.levels, bass: 0, mid: 0, high: 0, energy: 0, beat: 0, bpm: 0, phase: 0, onset: 0 };
    this.bass = 0; this.mid = 0; this.high = 0; this.energy = 0;
    this.live = false; // true once non-zero bins have been seen
    this._vol = 1;
    this.testGain = null;
    this.outputOn = false; // user pressed play; pause clears this before the context finishes suspending
    this.loadedKey = '';
    this.holdSilence = false; // render loop forces silence while the user is paused
  }
  setVolume(v) {
    this._vol = Math.max(0, Math.min(1, v));
    if (this.el) this.el.volume = this._vol;
    if (this.testGain && this.outputOn) this.testGain.gain.value = 0.25 * this._vol;
  }
  ensureContext() {
    if (this.ctx) return;
    this.ctx = new AudioContext();
    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 2048;              // 1024 bins
    this.analyser.smoothingTimeConstant = 0.6;
    // Files and the test signal are heard through this gain. System listen mutes it.
    this.monitor = this.ctx.createGain();
    this.monitor.gain.value = 1;
    this.analyser.connect(this.monitor);
    this.monitor.connect(this.ctx.destination);
    this.bins = new Uint8Array(this.analyser.frequencyBinCount);
    // Unsmoothed tap for onsets. The display analyser stays smoothed so the
    // spectrum does not flicker. This one is not connected to the speakers.
    this.onset = this.ctx.createAnalyser();
    this.onset.fftSize = 1024;
    this.onset.smoothingTimeConstant = 0;
    this.onsetBins = new Uint8Array(this.onset.frequencyBinCount);
    this.el = new Audio();
    this.el.loop = true;
    this.el.preload = 'auto';
    this.el.volume = this._vol;
    this.srcNode = this.ctx.createMediaElementSource(this.el);
    this.srcNode.connect(this.analyser);
    this.srcNode.connect(this.onset);
  }
  trackKey(track) {
    if (track?.source === 'system') return 'system';
    return !track || track.file == null ? 'test' : track.file;
  }
  setHeard(heard) {
    if (!this.monitor || !this.ctx) return;
    this.monitor.gain.setValueAtTime(heard ? 1 : 0, this.ctx.currentTime);
  }
  isSystemLive() {
    return !!this.systemStream?.getAudioTracks().some(t => t.readyState === 'live');
  }
  get isPlaying() {
    return !!this.outputOn;
  }
  // Must be called from a user gesture (click / Enter XR).
  async play(track) {
    this.ensureContext();
    await this.ctx.resume();
    const key = this.trackKey(track);
    // Keep the current song playing until the share dialog succeeds.
    if (key === 'system' && this.loadedKey === 'system' && this.isSystemLive()) {
      this.stopElementAndTest();
      this.setHeard(false);
      this.outputOn = true;
      return;
    }
    if (key === 'system') {
      const stream = await this.captureSystemAudio();
      this.stop();
      this.attachSystem(stream);
      this.loadedKey = key;
      this.outputOn = true;
      return;
    }
    this.stop();
    this.loadedKey = key;
    this.setHeard(true);
    if (key === 'test') { this.startTestSignal(); this.outputOn = true; return; }
    this.el.src = track.file; // relative path, same origin
    await this.el.play();
    this.outputOn = true;
  }
  async pause() {
    // Synchronous so the next frame eases visuals even if suspend is still resolving.
    this.outputOn = false;
    this.holdSilence = true;
    if (this.el && !this.el.paused) this.el.pause();
    if (this.testGain && this.ctx) {
      try { this.testGain.gain.setValueAtTime(0, this.ctx.currentTime); } catch { /* context already stopped */ }
    }
    if (this.ctx && this.ctx.state === 'running') await this.ctx.suspend();
  }
  async toggle(track) {
    this.ensureContext();
    if (this.outputOn) {
      await this.pause();
      return false;
    }
    this.holdSilence = false;
    const key = this.trackKey(track);
    if (key === 'system' && key === this.loadedKey && this.isSystemLive()) {
      await this.ctx.resume();
      this.setHeard(false);
      this.outputOn = true;
      return true;
    }
    if (key === this.loadedKey && this.testNodes) {
      await this.ctx.resume();
      this.setHeard(true);
      if (this.testGain) this.testGain.gain.setValueAtTime(0.25 * this._vol, this.ctx.currentTime);
      this.outputOn = true;
      return true;
    }
    if (key === this.loadedKey && this.el && this.el.src && this.el.paused) {
      await this.ctx.resume();
      this.setHeard(true);
      await this.el.play();
      this.outputOn = true;
      return true;
    }
    await this.play(track);
    return true;
  }
  stopElementAndTest() {
    if (this.el) this.el.pause();
    if (this.testNodes) { this.testNodes.forEach(n => { try { n.stop?.(); n.disconnect(); } catch {} }); this.testNodes = null; }
    this.testGain = null;
  }
  stopSystem() {
    const stream = this.systemStream;
    this.systemStream = null;
    if (this.systemNode) { try { this.systemNode.disconnect(); } catch { /* already disconnected */ } this.systemNode = null; }
    // Clear our handle before stop(), so the ended event does not look like the user hung up.
    if (stream) stream.getTracks().forEach(t => { try { t.stop(); } catch { /* track already ended */ } });
  }
  stop() {
    this.outputOn = false;
    this.stopElementAndTest();
    this.stopSystem();
    this.setHeard(true);
  }
  // Edge and Chrome can hear other apps only through the screen-share dialog.
  // A video track is required by the API. It stays alive and is never shown:
  // stopping it ends the audio tap on Chromium. Nothing is recorded.
  async captureSystemAudio() {
    if (!navigator.mediaDevices?.getDisplayMedia) {
      throw new Error('This browser cannot listen to other apps. Use desktop Edge or Chrome.');
    }
    let stream;
    try {
      stream = await navigator.mediaDevices.getDisplayMedia({
        video: { displaySurface: 'monitor' },
        audio: {
          suppressLocalAudioPlayback: false,
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false,
        },
        systemAudio: 'include',
        selfBrowserSurface: 'exclude',
        monitorTypeSurfaces: 'include',
      });
    } catch (err) {
      const name = err?.name || '';
      if (name === 'NotAllowedError' || name === 'AbortError') {
        throw new Error('Share was cancelled. Press Play, choose a whole screen, and turn on system audio.');
      }
      if (name === 'NotSupportedError' || name === 'NotFoundError') {
        throw new Error('No system audio from this browser. Use desktop Edge or Chrome and share a whole screen.');
      }
      throw err;
    }
    if (!stream.getAudioTracks().length) {
      stream.getTracks().forEach(t => { try { t.stop(); } catch { /* already ended */ } });
      throw new Error('That share had no audio. Choose a whole screen and turn on "Also share system audio."');
    }
    return stream;
  }
  attachSystem(stream) {
    this.setHeard(false);
    this.systemStream = stream;
    this.systemNode = this.ctx.createMediaStreamSource(stream);
    this.systemNode.connect(this.analyser);
    if (this.onset) this.systemNode.connect(this.onset);
    const onEnded = () => {
      if (this.systemStream !== stream) return;
      if (stream.getAudioTracks().some(t => t.readyState === 'live')) return;
      this.outputOn = false;
      this.stopSystem();
      this.whenSystemEnds?.();
    };
    stream.getAudioTracks().forEach(t => t.addEventListener('ended', onEnded));
  }
  // Built-in synthetic beat so the stage can be tested with no audio files at all.
  startTestSignal() {
    const c = this.ctx, t0 = c.currentTime + 0.05, out = c.createGain();
    out.gain.value = 0.25 * this._vol; out.connect(this.analyser);
    if (this.onset) out.connect(this.onset);
    this.testGain = out;
    const nodes = [out];
    const bpm = 120, beat = 60 / bpm;
    for (let i = 0; i < 480; i++) {           // ~4 minutes
      const t = t0 + i * beat;
      const k = c.createOscillator(), kg = c.createGain();
      k.frequency.setValueAtTime(120, t); k.frequency.exponentialRampToValueAtTime(40, t + 0.2);
      kg.gain.setValueAtTime(0.9, t); kg.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      k.connect(kg).connect(out); k.start(t); k.stop(t + 0.32); nodes.push(k);
      if (i % 2 === 1) {
        const h = c.createOscillator(), hg = c.createGain();
        h.type = 'square'; h.frequency.value = 6000 + (i % 4) * 500;
        hg.gain.setValueAtTime(0.08, t); hg.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
        h.connect(hg).connect(out); h.start(t); h.stop(t + 0.1); nodes.push(h);
      }
    }
    const pad = c.createOscillator(); pad.type = 'sawtooth'; pad.frequency.value = 220;
    const pg = c.createGain(); pg.gain.value = 0.04; pad.connect(pg).connect(out); pad.start(t0); nodes.push(pad);
    this.testNodes = nodes;
    this.testEnd = t0 + 480 * beat;
  }
  // Ease the published levels back to silence without touching the tempo lock.
  // A paused context keeps the last FFT frame, which would freeze the show mid-hit.
  releaseToSilence(dt) {
    const keep = Math.exp(-Math.max(0, Math.min(dt, 0.1)) * 2.5);
    const L = this.levels;
    for (let i = 0; i < L.length; i++) L[i] *= keep;
    const w = this.waveform;
    for (let i = 0; i < w.length; i++) w[i] *= keep;
    const B = this.bands;
    const avg = (a, z) => { let s = 0; for (let i = a; i < z; i++) s += L[i]; return (z > a) ? s / (z - a) : 0; };
    this.bass = avg(0, Math.floor(B * 0.2));
    this.mid = avg(Math.floor(B * 0.2), Math.floor(B * 0.6));
    this.high = avg(Math.floor(B * 0.6), B);
    this.energy = (this.bass + this.mid + this.high) / 3;
    const o = this.info;
    o.bass = this.bass; o.mid = this.mid; o.high = this.high; o.energy = this.energy;
    o.beat = (o.beat || 0) * keep;
    o.bpm = (o.bpm || 0) * keep;
    o.phase = (o.phase || 0) * keep;
    // Fade the hit envelope too, so a resume does not replay a frozen peak.
    this.beats.env *= keep;
    o.onset = this.beats.env;
    if (o.bpm < 0.5) { o.bpm = 0; o.phase = 0; }
    if (o.beat < 0.01) o.beat = 0;
    if (o.onset < 0.01) { o.onset = 0; this.beats.env = 0; }
  }
  // Call once per frame. dt in seconds.
  update(dt) {
    if (!this.analyser) return;
    // The browser share chip can end the tap without a reliable ended event.
    if (this.outputOn && this.loadedKey === 'system' && !this.isSystemLive()) {
      this.outputOn = false;
      this.stopSystem();
      this.whenSystemEnds?.();
    }
    if (this.holdSilence || !this.isPlaying) { this.releaseToSilence(dt); return; }
    if (this.testNodes && this.ctx.currentTime > this.testEnd - 0.5) { this.stop(); this.startTestSignal(); } // loop the test beat
    this.analyser.getByteFrequencyData(this.bins);
    this.analyser.getFloatTimeDomainData(this.waveform);
    const n = this.bins.length, B = this.bands;
    const nyquist = this.ctx.sampleRate / 2;
    let sum = 0;
    for (let b = 0; b < B; b++) {
      // log-spaced bands from ~30 Hz to ~16 kHz
      const f0 = 30 * Math.pow(16000 / 30, b / B), f1 = 30 * Math.pow(16000 / 30, (b + 1) / B);
      let i0 = Math.floor(f0 / nyquist * n), i1 = Math.max(i0 + 1, Math.ceil(f1 / nyquist * n));
      let m = 0; for (let i = i0; i < i1 && i < n; i++) m = Math.max(m, this.bins[i]);
      const v = m / 255; sum += m;
      // attack fast, release slow: smooth motion, no flicker (photosensitivity)
      const cur = this.levels[b], k = v > cur ? 1 - Math.exp(-dt * 18) : 1 - Math.exp(-dt * 4);
      this.levels[b] = cur + (v - cur) * k;
    }
    if (sum > 0) this.live = true;
    const avg = (a, z) => { let s = 0; for (let i = a; i < z; i++) s += this.levels[i]; return s / (z - a); };
    this.bass = avg(0, Math.floor(B * 0.2));
    this.mid = avg(Math.floor(B * 0.2), Math.floor(B * 0.6));
    this.high = avg(Math.floor(B * 0.6), B);
    this.energy = (this.bass + this.mid + this.high) / 3;
    if (this.onset) {
      this.onset.getByteFrequencyData(this.onsetBins);
      const rate = this.ctx.sampleRate;
      const bassE = bandMean(this.onsetBins, rate, 40, 180);
      const snapE = bandMean(this.onsetBins, rate, 180, 450);
      stepBeat(this.beats, Math.min(1, bassE * 0.85 + snapE * 0.4), dt);
    }
    const o = this.info;
    o.bass = this.bass; o.mid = this.mid; o.high = this.high; o.energy = this.energy;
    o.beat = this.beats.beat; o.bpm = this.beats.bpm; o.phase = this.beats.phase;
    o.onset = this.beats.env;
  }
}
