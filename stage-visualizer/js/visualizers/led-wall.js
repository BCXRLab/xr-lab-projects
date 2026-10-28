import * as THREE from 'three';
import { DECK_H, kick, tempoBps } from './common.js';

// LED Wall: a curved backdrop of 28 x 12 cells at r 2.6 m behind the performer (a 140-degree
// upstage arc standing on the riser), drawn as one InstancedMesh. Spectrum columns run left to
// right, bass piles up in the centre, and a traveling highlight rides the energy. Lit cells
// scale and push a few centimetres along the arc radius (still inside the deck). Reduced motion
// freezes the drift and softens the column pulses.
export const name = 'LED Wall';
const COLS = 28, ROWS = 12, R = 2.6, Y0 = DECK_H + 0.26, ROW_H = 0.2;
const A0 = THREE.MathUtils.degToRad(200), A1 = THREE.MathUtils.degToRad(340);

export function create(parent, opts = {}) {
  const root = new THREE.Group(); root.name = 'viz-led-wall';
  const colW = R * (A1 - A0) / COLS;
  const geo = new THREE.PlaneGeometry(colW * 0.86, ROW_H * 0.86);
  const mat = new THREE.MeshBasicMaterial({
    color: 0xffffff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const cells = new THREE.InstancedMesh(geo, mat, COLS * ROWS);
  cells.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  const tmp = new THREE.Object3D(), col = new THREE.Color();
  for (let c = 0; c < COLS; c++) {
    const a = A0 + (c + 0.5) / COLS * (A1 - A0);
    for (let r = 0; r < ROWS; r++) {
      tmp.position.set(Math.cos(a) * R, Y0 + (r + 0.5) * ROW_H, Math.sin(a) * R);
      tmp.rotation.set(0, Math.atan2(-Math.cos(a), -Math.sin(a)), 0); // face centre stage / the audience
      tmp.updateMatrix(); cells.setMatrixAt(c * ROWS + r, tmp.matrix);
      cells.setColorAt(c * ROWS + r, col.setRGB(0.05, 0.05, 0.1));
    }
  }
  cells.frustumCulled = false; root.add(cells);
  parent.add(root);
  const bright = new Float32Array(COLS * ROWS).fill(0.08);
  let t = 0, hue = 0.62;

  function update(levels, waveform, dt, reduced) {
    const bass = Math.min(1, levels.bass || 0), energy = Math.min(1, levels.energy || 0);
    const mid = Math.min(1, levels.mid || 0);
    const bps = reduced ? 0 : tempoBps(levels);
    if (!reduced) {
      t += dt * (bps ? 1.1 + bps * 1.35 : 1.5 + energy * 2.4);
      hue = (hue + dt * (bps ? bps * 0.035 : 0.045 + mid * 0.14 + energy * 0.06)) % 1;
    }
    const L = levels.bands, nb = L.length, nW = waveform.length;
    const bloom = reduced ? bass * 0.1 : bass * 0.6 + energy * 0.22;
    const bounce = reduced ? 0 : bass * 0.05;
    for (let c = 0; c < COLS; c++) {
      const m = Math.abs(c + 0.5 - COLS / 2) / (COLS / 2);             // 0 centre .. 1 edge
      const spec = Math.floor(c / (COLS - 1) * (nb - 1));
      const bassBand = Math.floor(m * (nb - 1) * 0.45);
      const wf = nW ? Math.abs(waveform[Math.floor(c / COLS * nW)] || 0) : 0;
      const v = Math.min(1.15, Math.max(L[spec] || 0, L[bassBand] || 0, L[Math.min(nb - 1, spec + 1)] || 0, wf * 0.9));
      const top = Math.pow(Math.max(0, v), reduced ? 1 : 0.48) * ROWS * (reduced ? 0.65 : 1.1)
        + (reduced ? 0 : bass * 1.1 * (1 - m));
      for (let r = 0; r < ROWS; r++) {
        const k = c * ROWS + r;
        const lit = THREE.MathUtils.clamp(top - r, 0, 1);
        const travel = 0.5 + 0.5 * Math.sin(c * 0.55 - t * 2.6 + r * 0.18);
        const field = 0.025 + 0.07 * Math.sin(c * 0.45 + r * 0.3 + t * 1.2) + bloom * (1 - r / ROWS) * (0.35 + travel);
        bright[k] = kick(bright[k], field + lit * (reduced ? 0.4 : 1.3), dt, reduced);
        const pop = Math.min(2.9, bright[k] * (reduced ? 1.15 : 2.4));
        col.setHSL((hue + r / ROWS * 0.22 + m * 0.1 + v * 0.08) % 1, 0.95, 0.6).multiplyScalar(pop);
        cells.setColorAt(k, col);
        const a = A0 + (c + 0.5) / COLS * (A1 - A0);
        const grow = reduced ? 1 : 1 + lit * 0.6 + bass * 0.12;
        const rr = R + (reduced ? 0 : lit * 0.06);
        tmp.position.set(Math.cos(a) * rr, Y0 + (r + 0.5) * ROW_H + bounce, Math.sin(a) * rr);
        tmp.rotation.set(0, Math.atan2(-Math.cos(a), -Math.sin(a)), 0);
        tmp.scale.set(grow, grow, 1); tmp.updateMatrix();
        cells.setMatrixAt(k, tmp.matrix);
      }
    }
    cells.instanceMatrix.needsUpdate = true;
    cells.instanceColor.needsUpdate = true;
  }
  function dispose() { parent.remove(root); geo.dispose(); mat.dispose(); cells.dispose(); }
  return { name, root, update, dispose, get brightness() { return bright; } };
}
