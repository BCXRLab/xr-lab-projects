import * as THREE from 'three';
import { AudioEngine } from './audio.js?v=20261015b';
import { createStage } from './stage.js';
import { VISUALIZERS } from './visualizers/index.js?v=20261015a';
import { createWristPanel } from './xr-panel.js';
import { runQa } from './qa.js';
import { MobileControls } from './mobile-controls.js';
import { createDesktopView } from './desktop-view.js';
import { loadSettings, applyDom, effectiveReduced, announce, paintCaptions, bindSettingsForm } from './settings.js';

const BANDS = 64;
const $ = id => document.getElementById(id);
const status = msg => { $('status').textContent = msg; };
const pageParams = new URLSearchParams(location.search);

// ---------- renderer / scene ----------
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.xr.enabled = true;
renderer.xr.setReferenceSpaceType('local-floor');
renderer.domElement.style.touchAction = 'none';
renderer.domElement.setAttribute('role', 'img');
renderer.domElement.setAttribute('aria-label', 'Audio-reactive concert stage');
renderer.domElement.setAttribute('aria-describedby', 'stage-desc');
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const VR_BG = new THREE.Color(0x020308);
scene.background = VR_BG;
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.05, 100);
camera.position.set(0, 1.7, 0); // audience seat, ~6 m back from centre stage
const STAGE_DIST = 6;
scene.add(new THREE.HemisphereLight(0x8899cc, 0x101018, 0.6));

const audio = new AudioEngine(BANDS);
const stage = createStage();
stage.group.position.set(0, 0, -STAGE_DIST);
scene.add(stage.group);
const wrist = createWristPanel({
  onSlider(id, value) { setIntensity(id, value); },
});
const settings = loadSettings();
applyDom(settings);
const view = createDesktopView(camera, renderer);
const mobile = new MobileControls();
audio.setVolume(settings.volume / 100);

const TEST = { title: 'Built-in test signal (no audio file)', file: null, credit: 'Synthesized in the browser.' };
const SYSTEM = {
  title: 'System audio (other apps)',
  file: null,
  source: 'system',
  credit: 'Listens to music already playing in other apps. Press Play, choose a whole screen, and turn on "Also share system audio." The picture is not shown or saved, and this page does not play that sound back.',
};
const DEFAULT_TRACKS = [
  { title: 'Classical: Gymnopédie No. 1 (Satie)', file: 'audio/satie-gymnopedie-1.ogg',
    credit: 'Gymnopédie No. 1 by Erik Satie, performed by Robin Alciatore, courtesy of Musopen (musopen.com). Public domain.' },
  { title: 'Synthwave: Eighties Action (Kevin MacLeod)', file: 'audio/eighties-action.mp3',
    credit: '"Eighties Action" Kevin MacLeod (incompetech.com). Licensed under Creative Commons: By Attribution 3.0. https://creativecommons.org/licenses/by/3.0/' },
  { title: 'Electronic: EDM Detection Mode (Kevin MacLeod)', file: 'audio/edm-detection-mode.mp3',
    credit: '"EDM Detection Mode" Kevin MacLeod (incompetech.com). Licensed under Creative Commons: By Attribution 3.0. https://creativecommons.org/licenses/by/3.0/' },
];
let tracks = [...DEFAULT_TRACKS, TEST, SYSTEM];

// ---------- visualizers: only the active one exists in the scene and gets updated ----------
let vizIndex = 0, viz = null;
const vizListeners = [];
function setVisualizer(i) {
  const n = VISUALIZERS.length;
  vizIndex = ((i % n) + n) % n;
  if (viz) viz.dispose();
  viz = VISUALIZERS[vizIndex].create(stage.group, { bands: BANDS });
  const sel = $('viz');
  if (sel && sel.value !== String(vizIndex)) sel.value = String(vizIndex);
  vizListeners.forEach(f => f(vizIndex));
  refreshPanel();
}

const vizSel = $('viz');
VISUALIZERS.forEach((v, i) => {
  const o = document.createElement('option');
  o.value = i; o.textContent = v.name; vizSel.appendChild(o);
});
vizSel.addEventListener('change', () => setVisualizer(+$('viz').value));
setVisualizer(+(pageParams.get('viz') || 0));

// Dark-space extras for VR / desktop only
const vrWorld = new THREE.Group();
{
  const grid = new THREE.GridHelper(40, 40, 0x1a2244, 0x0d1122); vrWorld.add(grid);
  const N = 1500, p = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const v = new THREE.Vector3().randomDirection().multiplyScalar(30 + Math.random() * 20);
    v.y = Math.abs(v.y); p.set([v.x, v.y, v.z], i * 3);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(p, 3));
  vrWorld.add(new THREE.Points(g, new THREE.PointsMaterial({ size: 0.08, color: 0x8899ff })));
}
scene.add(vrWorld);

// AR placement reticle
const reticle = new THREE.Mesh(new THREE.RingGeometry(0.15, 0.2, 48).rotateX(-Math.PI / 2),
  new THREE.MeshBasicMaterial({ color: 0x66ffcc }));
reticle.matrixAutoUpdate = false; reticle.visible = false; scene.add(reticle);

// ---------- tracks ----------
function fillTrackSelect() {
  const sel = $('track');
  const keep = sel.value;
  sel.innerHTML = '';
  tracks.forEach((t, i) => {
    const o = document.createElement('option');
    o.value = i; o.textContent = t.title; sel.appendChild(o);
  });
  if ([...sel.options].some(o => o.value === keep)) sel.value = keep;
  showCredit();
}
fillTrackSelect();
fetch('./tracks.json').then(r => {
  if (!r.ok) throw new Error('tracks.json ' + r.status);
  return r.json();
}).then(list => {
  if (Array.isArray(list) && list.length) tracks = [...list, TEST, SYSTEM];
  fillTrackSelect();
}).catch(err => {
  status('Using built-in track list. (' + err.message + ')');
}).finally(() => {
  checkXR();
  if (pageParams.has('qa')) {
    const issues = runQa(stage, viz);
    status(issues.length ? 'QA: ' + issues.join('; ') : 'QA PASS: ' + VISUALIZERS[vizIndex].name);
  }
});
// Music button only. Track changes must not set this, or a paused show starts the next song.
let musicOn = false;
audio.whenSystemEnds = () => {
  musicOn = false;
  audio.holdSilence = true;
  status('System audio share ended.');
  refreshPanel();
};
$('track').addEventListener('change', () => { showCredit(); if (musicOn) playSelected(); });
function currentTrack() { return tracks[+$('track').value] || TEST; }
function showCredit() { const t = currentTrack(); $('credit').textContent = t ? t.credit : ''; refreshPanel(); }
function playStatus(track) { return track?.source === 'system' ? 'Listening to system audio' : 'Playing'; }
function selectTrackByKey(key) {
  const i = tracks.findIndex(t => audio.trackKey(t) === key);
  if (i >= 0) $('track').value = String(i);
  showCredit();
}
async function playSelected() {
  if (!musicOn) return;
  const track = currentTrack();
  if (track?.source === 'system' && !audio.isSystemLive()) {
    status('Choose a whole screen and turn on "Also share system audio." The picture is not shown.');
  }
  try { await audio.play(track); status(playStatus(track)); refreshPanel(); }
  catch (e) {
    // A cancelled share leaves the song that was already playing.
    if (audio.isPlaying) selectTrackByKey(audio.loadedKey);
    else { musicOn = false; audio.holdSilence = true; }
    status('Audio failed: ' + e.message);
    refreshPanel();
  }
}
async function togglePlay() {
  if (musicOn) {
    musicOn = false;
    audio.holdSilence = true;
    try { await audio.pause(); status('Paused'); }
    catch (e) { status('Audio failed: ' + e.message); }
  } else {
    musicOn = true;
    audio.holdSilence = false;
    const track = currentTrack();
    if (track?.source === 'system' && !audio.isSystemLive()) {
      status('Choose a whole screen and turn on "Also share system audio." The picture is not shown.');
    }
    try { await audio.toggle(track); status(playStatus(track)); }
    catch (e) { musicOn = false; audio.holdSilence = true; status('Audio failed: ' + e.message); }
  }
  refreshPanel();
}
function stepTrack(dir) {
  const n = tracks.length; if (!n) return;
  $('track').value = String((+$('track').value + dir + n) % n);
  showCredit();
  if (musicOn) playSelected();
}
$('play').addEventListener('click', togglePlay);

// ---------- XR sessions ----------
let hitSource = null, placed = false, mode = 'desktop';
async function checkXR() {
  if (!navigator.xr) { status(window.isSecureContext ? 'WebXR is not available in this browser. Desktop preview only.' : 'WebXR needs HTTPS or localhost. Desktop preview only.'); return; }
  const [ar, vr] = await Promise.all([
    navigator.xr.isSessionSupported('immersive-ar').catch(() => false),
    navigator.xr.isSessionSupported('immersive-vr').catch(() => false)]);
  $('enter-ar').disabled = !ar; $('enter-vr').disabled = !vr;
  status(`Ready. AR ${ar ? 'available' : 'not available'}, VR ${vr ? 'available' : 'not available'}.`);
}

async function enter(kind) {
  // The headset session cannot open the system-audio share dialog. Start that from desktop Play.
  const systemNeedsShare = currentTrack()?.source === 'system' && !audio.isSystemLive();
  if (!systemNeedsShare) {
    musicOn = true; // entering XR is an explicit play gesture
    audio.holdSilence = false;
    playSelected(); // the click is the user gesture that unlocks audio
  }
  const init = kind === 'ar'
    ? { requiredFeatures: ['local-floor'], optionalFeatures: ['hit-test'] }
    : { requiredFeatures: ['local-floor'] };
  try {
    const session = await navigator.xr.requestSession(kind === 'ar' ? 'immersive-ar' : 'immersive-vr', init);
    mode = kind;
    session.addEventListener('end', onEnd);
    await renderer.xr.setSession(session);
    document.body.classList.add('xr-presenting');
    settingsForm.close();
    wrist.setPage('main');
    menuUserSet = false;
    attachMenu(controllerByHand('left') || controllerByHand('right'));
    mobile.refreshVisibility();
    if (kind === 'ar') {
      scene.background = null; vrWorld.visible = false;
      placed = false; stage.group.visible = false;
      await bindHitTest(session);
      if (!hitSource) placeFallback();
    } else {
      scene.background = VR_BG; vrWorld.visible = true;
      resetStage(); stage.group.visible = true;
    }
  } catch (e) { status(`Could not start ${kind.toUpperCase()}: ${e.message}`); }
}
function resetStage() { stage.group.position.set(0, 0, -STAGE_DIST); stage.group.rotation.set(0, 0, 0); }
function placeFallback() { resetStage(); stage.group.visible = true; placed = true; }
function onEnd() {
  hitSource?.cancel?.(); hitSource = null; reticle.visible = false; mode = 'desktop';
  document.body.classList.remove('xr-presenting');
  wrist.setPage('main');
  menuUserSet = false;
  attachMenu(null);
  mobile.refreshVisibility();
  scene.background = VR_BG; vrWorld.visible = true; stage.group.visible = true; resetStage();
}

async function bindHitTest(session) {
  hitSource?.cancel?.(); hitSource = null;
  const aimer = aimingController();
  const space = aimer?.userData.targetRaySpace;
  if (!space) return;
  // Start the ray a little past the controller body so hit-test does not pick the
  // controller or the user's hand as a surface.
  const opts = { space };
  try {
    if (typeof XRRay === 'function') {
      opts.offsetRay = new XRRay({ x: 0, y: 0, z: -0.20, w: 1 }, { x: 0, y: 0, z: -1, w: 0 });
    }
  } catch { /* keep space-only */ }
  try { hitSource = await session.requestHitTestSource(opts); }
  catch {
    try { hitSource = await session.requestHitTestSource({ space }); }
    catch { hitSource = null; }
  }
}
$('enter-ar').addEventListener('click', () => enter('ar'));
$('enter-vr').addEventListener('click', () => enter('vr'));

// AR placement: floor hit-test, or the controller ray ∩ y=0 out to 40 m.
// Trigger on the wrist panel never places. +z of the stage faces the viewer.
const _eye = new THREE.Vector3(), _dir = new THREE.Vector3(), _hit = new THREE.Vector3(), _quat = new THREE.Quaternion();
const _hitPos = new THREE.Vector3(), _headPos = new THREE.Vector3(), _ctrlPos = new THREE.Vector3();
const _poseM = new THREE.Matrix4(), _poseQ = new THREE.Quaternion();
const _flatQ = new THREE.Quaternion(), _reticleScale = new THREE.Vector3();
const controllers = [];
let menuHost = null, menuUserSet = false, sliderUsed = false;
const rayLineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1.4)]);

function controllerByHand(hand) {
  return controllers.find(c => c.userData.handedness === hand) || null;
}
function aimingController() {
  if (menuHost) {
    return controllers.find(c => c !== menuHost && c.userData.targetRaySpace) || null;
  }
  return controllerByHand('right') || controllerByHand('left');
}
function attachMenu(controller) {
  if (wrist.group.parent) wrist.group.parent.remove(wrist.group);
  menuHost = controller || null;
  if (controller) {
    wrist.layoutOnHand(controller.userData.handedness);
    controller.add(wrist.group);
    wrist.group.visible = true;
  } else {
    scene.add(wrist.group);
    wrist.group.visible = false;
  }
  const session = renderer.xr.getSession();
  if (mode === 'ar' && session) bindHitTest(session);
}
function toggleMenu(controller) {
  if (!controller) return;
  menuUserSet = true;
  if (menuHost === controller && wrist.group.visible) attachMenu(null);
  else attachMenu(controller);
}

function placeFromController(controller) {
  controller.getWorldPosition(_eye);
  controller.getWorldQuaternion(_quat);
  _dir.set(0, 0, -1).applyQuaternion(_quat);
  let x, z, floorY;
  if (reticle.visible) {
    _hit.setFromMatrixPosition(reticle.matrix);
    x = _hit.x; z = _hit.z; floorY = _hit.y;
  } else if (rayFloorPoint(controller, _hit)) {
    x = _hit.x; z = _hit.z; floorY = _hit.y;
  } else {
    return;
  }
  stage.group.position.set(x, floorY, z);
  const vx = _eye.x - x, vz = _eye.z - z;
  stage.group.rotation.set(0, Math.atan2(vx, vz), 0);
  stage.group.visible = true; placed = true;
}

function onSelectStart(controller) {
  sliderUsed = wrist.beginDrag(controller);
}
function onSelectEnd() {
  if (wrist.endDrag()) sliderUsed = true;
}
function onSelect(controller) {
  if (sliderUsed || wrist.dragging) { sliderUsed = false; return; }
  const action = wrist.tryClick(controller);
  if (action) { handlePanel(action); return; }
  if (wrist.hitsPanel(controller)) return;
  if (mode !== 'ar') return;
  // Place on the floor ring (hit-test or ray ∩ y=0). Hidden ring = hand/body/wall.
  if (reticle.visible) placeFromController(controller);
}

function handlePanel(action) {
  if (action === 'prevTrack') stepTrack(-1);
  else if (action === 'nextTrack') stepTrack(1);
  else if (action === 'play') togglePlay();
  else if (action === 'prevViz') setVisualizer(vizIndex - 1);
  else if (action === 'nextViz') setVisualizer(vizIndex + 1);
  else if (action === 'settings') wrist.setPage('settings');
  else if (action === 'back') wrist.setPage('main');
  else if (action === 'toggleReduced') {
    settings.reducedFollowOs = false;
    settings.reducedMotion = !effectiveReduced(settings);
    settingsForm.emit();
  } else if (action === 'toggleContrast') {
    settings.highContrast = !settings.highContrast; settingsForm.emit();
  } else if (action === 'toggleCaptions') {
    settings.captions = !settings.captions; settingsForm.emit();
  } else if (action === 'toggleSoft') {
    settings.softVisuals = !settings.softVisuals; settingsForm.emit();
  } else if (action === 'togglePause') {
    settings.pauseVisuals = !settings.pauseVisuals; settingsForm.emit();
  }
}

function setIntensity(id, pct) {
  const el = $(id);
  if (!el) return;
  const v = Math.max(+el.min, Math.min(+el.max, Math.round(pct)));
  if (el.value === String(v)) { refreshPanel(); return; }
  el.value = String(v);
  el.dispatchEvent(new Event('input'));
  refreshPanel();
}

function refreshPanel() {
  const t = currentTrack();
  const playing = audio.isPlaying;
  wrist.setInfo({
    title: t?.title || '',
    credit: t?.credit || '',
    vizName: VISUALIZERS[vizIndex].name,
    playing,
    settings: {
      reduced: effectiveReduced(settings),
      contrast: settings.highContrast,
      captions: settings.captions,
      soft: settings.softVisuals,
      pause: settings.pauseVisuals,
      react: +($('reactivity')?.value || 100),
      bright: +($('brightness')?.value || 100),
    },
  });
  const playLabel = playing ? 'Pause' : 'Play on desktop';
  $('play').textContent = playLabel;
  const fab = $('play-fab');
  if (fab) {
    fab.textContent = playing ? 'Pause' : 'Play';
    fab.setAttribute('aria-label', playing ? 'Pause' : 'Play');
    fab.hidden = !document.body.classList.contains('hud-hidden');
  }
  const cap = (t?.title || 'Stage Visualizer') + ' · ' + VISUALIZERS[vizIndex].name + ' · ' + (playing ? 'Playing' : 'Paused');
  paintCaptions(cap);
  if (cap !== refreshPanel._ann) { refreshPanel._ann = cap; announce(cap); }
}

for (let i = 0; i < 2; i++) {
  const c = renderer.xr.getController(i);
  c.addEventListener('connected', ev => {
    const src = ev.data;
    c.userData.handedness = src.handedness;
    c.userData.targetRaySpace = src.targetRaySpace;
    if (renderer.xr.isPresenting && src.handedness === 'left' && !menuUserSet) attachMenu(c);
    if (mode === 'ar' && renderer.xr.getSession()) bindHitTest(renderer.xr.getSession());
  });
  c.addEventListener('disconnected', () => {
    if (menuHost === c) {
      const other = controllers.find(x => x !== c && x.userData.handedness);
      attachMenu(other || null);
    }
    c.userData.handedness = '';
    c.userData.targetRaySpace = null;
  });
  c.addEventListener('selectstart', () => onSelectStart(c));
  c.addEventListener('selectend', () => onSelectEnd());
  c.addEventListener('select', () => onSelect(c));
  c.add(new THREE.Line(rayLineGeo, new THREE.LineBasicMaterial({ color: 0x66ffcc })));
  scene.add(c);
  controllers.push(c);
}
scene.add(wrist.group); // fallback parent until left controller connects

const padPrev = new WeakMap();
function pollGamepad(session) {
  if (!session) return;
  for (const src of session.inputSources) {
    const gp = src.gamepad; if (!gp) continue;
    const primary = !!gp.buttons[4]?.pressed;
    const secondary = !!gp.buttons[5]?.pressed;
    const grip = !!gp.buttons[1]?.pressed;
    const prev = padPrev.get(src) || { primary: false, secondary: false, grip: false };
    if (primary && !prev.primary) stepTrack(1);
    if (grip && !prev.grip && !wrist.dragging) setVisualizer(vizIndex + 1);
    if (secondary && !prev.secondary) {
      const c = controllerByHand(src.handedness);
      if (c) toggleMenu(c);
    }
    padPrev.set(src, { primary, secondary, grip });
  }
}

// ---------- HUD hide + settings + intensity ----------
const hudBtn = $('toggle-hud');
function setHudHidden(on) {
  document.body.classList.toggle('hud-hidden', on);
  hudBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
  hudBtn.textContent = on ? 'Show' : 'Hide';
  hudBtn.setAttribute('aria-label', on ? 'Show controls' : 'Hide controls');
  if (!on) $('ui')?.removeAttribute('inert');
  else $('ui')?.setAttribute('inert', '');
  const fab = $('play-fab');
  if (fab) fab.hidden = !on;
}
hudBtn.addEventListener('click', () => setHudHidden(!document.body.classList.contains('hud-hidden')));
$('play-fab')?.addEventListener('click', togglePlay);
document.querySelector('a.skip[href="#ui"]')?.addEventListener('click', () => setHudHidden(false));
addEventListener('keydown', e => {
  if (e.code !== 'KeyH' || e.repeat) return;
  if (!settings.hideShortcut) return;
  const tag = e.target?.tagName;
  if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA' || e.target?.isContentEditable) return;
  setHudHidden(!document.body.classList.contains('hud-hidden'));
});

const settingsForm = bindSettingsForm(settings, {
  onChange() {
    audio.setVolume(settings.volume / 100);
    refreshPanel();
    const hud = $('toggle-hud');
    if (hud) {
      if (settings.hideShortcut) hud.setAttribute('aria-keyshortcuts', 'h');
      else hud.removeAttribute('aria-keyshortcuts');
    }
  },
  onResetView() { view.reset(); announce('View reset to the audience seat.'); },
  onResetAll() { audio.setVolume(settings.volume / 100); view.reset(); announce('Settings restored to defaults.'); refreshPanel(); },
});
if (!settings.hideShortcut) hudBtn.removeAttribute('aria-keyshortcuts');

const reactSlider = $('reactivity');
const brightSlider = $('brightness');
const scaledInfo = { bands: new Float32Array(BANDS), bass: 0, mid: 0, high: 0, energy: 0, beat: 0, bpm: 0, phase: 0, onset: 0 };
const scaledWave = new Float32Array(1024);
function bindSlider(el, readout) {
  const paint = () => {
    readout.textContent = el.value + '%';
    el.setAttribute('aria-valuenow', el.value);
    el.setAttribute('aria-valuetext', el.value + ' percent');
  };
  el.addEventListener('input', paint); paint();
}
bindSlider(reactSlider, $('reactivity-val'));
bindSlider(brightSlider, $('brightness-val'));

// Ease the snapshot pause took toward silence. Same release as a paused track.
function releaseScaled(dt) {
  const keep = Math.exp(-Math.max(0, Math.min(dt, 0.1)) * 2.5);
  const bands = scaledInfo.bands;
  for (let i = 0; i < bands.length; i++) bands[i] *= keep;
  scaledInfo.bass *= keep;
  scaledInfo.mid *= keep;
  scaledInfo.high *= keep;
  scaledInfo.energy *= keep;
  scaledInfo.beat *= keep;
  scaledInfo.bpm *= keep;
  scaledInfo.phase *= keep;
  scaledInfo.onset *= keep;
  for (let i = 0; i < scaledWave.length; i++) scaledWave[i] *= keep;
}
function driveLevels(react) {
  const src = audio.info, L = src.bands, out = scaledInfo.bands;
  for (let i = 0; i < L.length; i++) out[i] = L[i] * react;
  scaledInfo.bass = src.bass * react;
  scaledInfo.mid = src.mid * react;
  scaledInfo.high = src.high * react;
  scaledInfo.energy = src.energy * react;
  // Beat strength follows the Reactivity slider. Tempo is a rate, so BPM is
  // passed through while the slider is up and cleared when the music is muted.
  scaledInfo.beat = (src.beat || 0) * react;
  scaledInfo.bpm = react > 0 ? (src.bpm || 0) : 0;
  scaledInfo.phase = react > 0 ? (src.phase || 0) : 0;
  scaledInfo.onset = (src.onset || 0) * react;
  const w = audio.waveform, n = Math.min(w.length, scaledWave.length);
  for (let i = 0; i < n; i++) scaledWave[i] = w[i] * react;
  return scaledInfo;
}

// Hit-test poses are column-major 4x4: translation m[12,13,14], Y-axis m[4,5,6].
// Far floors can sit a little off y=0 (slope / tracking), so y tolerance grows with distance.
function poseIsFloor(pose, controller) {
  const m = pose.transform.matrix;
  const upY = m[5];
  if (upY < 0.5) return false;
  _hitPos.set(m[12], m[13], m[14]);
  renderer.xr.getCamera().getWorldPosition(_headPos);
  const horiz = Math.hypot(_hitPos.x - _headPos.x, _hitPos.z - _headPos.z);
  const yTol = 0.45 + 0.1 * horiz;
  if (_hitPos.y > yTol || _hitPos.y < -0.4) return false;
  if (horiz < 0.7) return false;
  if (controller) {
    controller.getWorldPosition(_ctrlPos);
    if (_ctrlPos.distanceTo(_hitPos) < 0.85) return false;
  }
  return true;
}

function pickFloorPose(hits, ref, controller) {
  for (let i = 0; i < hits.length; i++) {
    const pose = hits[i].getPose(ref);
    if (pose && poseIsFloor(pose, controller)) return pose;
  }
  return null;
}

// Controller local forward is −z. Ray ∩ y=0: t = −origin.y / dir.y, dir.y < 0.
function rayFloorPoint(controller, out) {
  controller.getWorldPosition(_eye);
  controller.getWorldQuaternion(_quat);
  _dir.set(0, 0, -1).applyQuaternion(_quat);
  if (_dir.y >= -0.02) return 0;
  const t = -_eye.y / _dir.y;
  if (t < 0.85 || t > 40) return 0;
  out.copy(_eye).addScaledVector(_dir, t);
  out.y = 0;
  renderer.xr.getCamera().getWorldPosition(_headPos);
  if (Math.hypot(out.x - _headPos.x, out.z - _headPos.z) < 0.7) return 0;
  if (_eye.distanceTo(out) < 0.85) return 0;
  return t;
}

function showReticleAt(pos, quat) {
  renderer.xr.getCamera().getWorldPosition(_headPos);
  const dist = _headPos.distanceTo(pos);
  const s = Math.min(10, Math.max(1, dist / 5));
  _reticleScale.set(s, 1, s);
  reticle.matrix.compose(pos, quat, _reticleScale);
  reticle.visible = true;
}

function updateReticle(frame) {
  if (mode !== 'ar' || wrist.dragging) { reticle.visible = false; return; }
  const aimer = aimingController();
  if (frame && hitSource && aimer && !wrist.hitsPanel(aimer)) {
    const hits = frame.getHitTestResults(hitSource);
    const ref = renderer.xr.getReferenceSpace();
    const pose = (hits.length && ref) ? pickFloorPose(hits, ref, aimer) : null;
    if (pose) {
      _poseM.fromArray(pose.transform.matrix);
      _hitPos.setFromMatrixPosition(_poseM);
      _poseQ.setFromRotationMatrix(_poseM);
      showReticleAt(_hitPos, _poseQ);
      return;
    }
  }
  const aimers = [];
  if (aimer) aimers.push(aimer);
  for (const c of controllers) {
    if (c !== aimer && c.userData.handedness) aimers.push(c);
  }
  for (const c of aimers) {
    if (wrist.hitsPanel(c)) continue;
    if (rayFloorPoint(c, _hit)) {
      showReticleAt(_hit, _flatQ);
      return;
    }
  }
  reticle.visible = false;
}

// ---------- loop ----------
const clock = new THREE.Clock();
let pauseSettle = null;
window.__stageDebug = {
  audio, stage, renderer, VISUALIZERS, setVisualizer, settings, view, mobile,
  runQa: () => runQa(stage, viz),
  get viz() { return viz; }, get mode() { return mode; }, get vizIndex() { return vizIndex; },
};
renderer.setAnimationLoop((t, frame) => {
  const dt = Math.min(clock.getDelta(), 0.1), time = clock.getElapsedTime();
  // Silence follows the play button, not the analyser. A paused context otherwise
  // keeps the last loud frame and the look never comes back down.
  audio.holdSilence = !musicOn;
  audio.update(dt);
  const reduced = effectiveReduced(settings);
  const vizReduced = reduced || settings.softVisuals;
  const react = (+reactSlider.value || 0) / 100;
  const intensity = (+brightSlider.value || 0) / 100;
  const info = driveLevels(react);
  // Rest while the song is paused. Pressing play clears this and the look reacts again.
  info.paused = !musicOn;
  if (!musicOn && settings.pauseVisuals) {
    if (pauseSettle == null) pauseSettle = 0;
    pauseSettle += dt;
    releaseScaled(dt);
    // Ease back to the quiet look, then slow to a stop and hold that rest pose.
    const motion = pauseSettle < 3.2 ? 1 : Math.max(0, 1 - (pauseSettle - 3.2) / 0.7);
    if (motion > 0) {
      const mdt = dt * motion;
      stage.update(info, mdt, vizReduced, intensity);
      viz.update(info, scaledWave, mdt, vizReduced);
    }
  } else {
    pauseSettle = null;
    stage.update(info, dt, vizReduced, intensity);
    viz.update(info, scaledWave, dt, vizReduced);
  }
  wrist.paint();
  if (renderer.xr.isPresenting) {
    pollGamepad(renderer.xr.getSession());
    wrist.updateDrag();
    const aimer = aimingController();
    if (aimer) wrist.hover(aimer);
    else if (menuHost) wrist.hover(menuHost);
    updateReticle(frame);
  } else {
    reticle.visible = false;
  }
  if (!renderer.xr.isPresenting) {
    const stick = mobile.sample();
    const keys = view.sampleKeys();
    view.applyLook(dt);
    view.applyMove(stick.moveX + keys.moveX, stick.moveY + keys.moveY, dt);
    view.update(time, settings.cameraSway && !reduced);
  }
  renderer.render(scene, camera);
});
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight);
});
