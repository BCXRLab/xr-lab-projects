import * as THREE from 'three';
import { DECK_H, kick, tempoBps } from './common.js';

// Waveform Ribbon: the live time-domain waveform traced along the upstage arc (r 2.3 m, 140
// degrees) about 2.5 m up, as a glowing ribbon with three fading echoes below it. One mesh,
// additive vertex colours. Amplitude, thickness, and colour follow energy/bass; a spectrum
// overlay keeps quiet tracks moving. Reduced motion halves the amplitude and freezes hue.
export const name = 'Waveform Ribbon';
const S = 192, R = 2.3, Y = 2.5, AMP = 0.78;
const A0 = THREE.MathUtils.degToRad(200), A1 = THREE.MathUtils.degToRad(340);
const LINES = [ // [y offset, half width, brightness]  core, glow, echoes
  [0, 0.012, 1], [0, 0.06, 0.25], [-0.28, 0.01, 0.45], [-0.52, 0.008, 0.28], [-0.74, 0.006, 0.16]];
const HIST = [0, 0, 2, 5, 9]; // which history frame each line shows (echoes lag behind)

export function create(parent, opts = {}) {
  const root = new THREE.Group(); root.name = 'viz-waveform-ribbon';
  const nV = LINES.length * S * 2;
  const pos = new Float32Array(nV * 3), colr = new Float32Array(nV * 3), idx = [];
  for (let l = 0; l < LINES.length; l++) for (let i = 0; i < S - 1; i++) {
    const a = (l * S + i) * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute('color', new THREE.BufferAttribute(colr, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setIndex(idx);
  const mat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(geo, mat); mesh.frustumCulled = false; root.add(mesh);
  parent.add(root);

  const disp = new Float32Array(S), hist = Array.from({ length: 10 }, () => new Float32Array(S));
  const cosA = new Float32Array(S), sinA = new Float32Array(S), bright = new Float32Array(LINES.length).fill(0.3);
  for (let i = 0; i < S; i++) { const a = A0 + i / (S - 1) * (A1 - A0); cosA[i] = Math.cos(a); sinA[i] = Math.sin(a); }
  const ds = R * (A1 - A0) / (S - 1), col = new THREE.Color();
  let peak = 0.2, hue = 0.5, histT = 0;

  function update(levels, waveform, dt, reduced) {
    const bass = Math.min(1, levels.bass || 0), energy = Math.min(1, levels.energy || 0);
    const bps = reduced ? 0 : tempoBps(levels);
    const L = levels.bands, nb = L.length;
    // Downsample, auto-gain, plus a spectrum overlay so quiet waveforms still move.
    const n = waveform.length, step = n / S; let pk = 0;
    for (let i = 0; i < n; i++) pk = Math.max(pk, Math.abs(waveform[i]));
    peak = Math.max(pk, peak * Math.exp(-dt * 2.6), 0.04);
    const gain = Math.min(14, 1.2 / peak) * (reduced ? 0.45 : 1.35), k = 1 - Math.exp(-dt * (reduced ? 6 : 32));
    const amp = AMP * (reduced ? 0.42 : 1 + energy * 0.35 + bass * 0.15);
    for (let i = 0; i < S; i++) {
      let s = 0; for (let j = Math.floor(i * step); j < Math.floor((i + 1) * step); j++) s += waveform[j] || 0;
      const band = L[Math.floor(i / (S - 1) * (nb - 1))] || 0;
      const taper = Math.sin(Math.PI * i / (S - 1));                     // pinned at the arc ends
      const wave = THREE.MathUtils.clamp(s / step * gain, -1.25, 1.25);
      const target = (wave * 0.75 + (band * 2 - 1) * 0.5 + bass * 0.2) * taper;
      disp[i] += (target - disp[i]) * k;
    }
    histT += dt;
    if (histT > (reduced ? 0.08 : 0.035)) { histT = 0; const last = hist.pop(); last.set(disp); hist.unshift(last); }
    if (!reduced) hue = (hue + dt * (bps ? bps * 0.07 : 0.06 + energy * 0.14)) % 1;
    const lift = reduced ? 0 : bass * 0.22;
    const rad = R * (reduced ? 1 : 1 + bass * 0.03);
    for (let l = 0; l < LINES.length; l++) {
      const [yo, hw0, b0] = LINES[l], src = HIST[l] === 0 ? disp : hist[HIST[l]];
      const hw = hw0 * (reduced ? 1 : 1 + energy * 1.15 + bass * 0.45);
      bright[l] = kick(bright[l], b0 * ((reduced ? 0.5 : 0.28) + energy * (reduced ? 0.25 : 1.2) + bass * 0.4), dt, reduced);
      col.setHSL((hue + l * 0.08) % 1, 1, 0.62).multiplyScalar(Math.min(2.6, bright[l] * 2));
      for (let i = 0; i < S; i++) {
        const y = THREE.MathUtils.clamp(Y + yo + lift + src[i] * amp, DECK_H + 0.12, 4.4);
        // ribbon thickness perpendicular to the curve in the (arc length, height) plane
        const dy = (src[Math.min(S - 1, i + 1)] - src[Math.max(0, i - 1)]) * amp, dx = ds * 2;
        const inv = 1 / Math.hypot(dx, dy), nt = -dy * inv * hw, ny = dx * inv * hw; // tangent / up components
        const tx = -sinA[i], tz = cosA[i];                                           // arc tangent
        const v = (l * S + i) * 2;
        for (let s = 0; s < 2; s++) {
          const sg = s ? -1 : 1, o = (v + s) * 3;
          pos[o] = cosA[i] * rad + tx * nt * sg; pos[o + 1] = y + ny * sg; pos[o + 2] = sinA[i] * rad + tz * nt * sg;
          colr[o] = col.r; colr[o + 1] = col.g; colr[o + 2] = col.b;
        }
      }
    }
    geo.attributes.position.needsUpdate = true; geo.attributes.color.needsUpdate = true;
  }
  function dispose() { parent.remove(root); geo.dispose(); mat.dispose(); }
  return { name, root, update, dispose, get brightness() { return bright; } };
}
