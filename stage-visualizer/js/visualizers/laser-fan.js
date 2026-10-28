import * as THREE from 'three';
import { DECK_H, kick, tempoBps } from './common.js';

// Laser Fan: 8 beams fired from a bar of emitters upstage of the performer (z = -1), aimed up
// and back. Additive glow. Sweep speed, length, thickness, and brightness follow the music.
// |phi| stays within +/-60 deg of straight back (outer beams use the full spread+sweep; inner
// beams add a leftover wobble). Every beam leans backward so both ends stay at z < -1 and
// length is capped at LEN so r stays inside the deck. Reduced motion freezes the sweep.
export const name = 'Laser Fan';
const N = 8, EMIT_Z = -1.0, EMIT_Y = DECK_H + 0.06, LEN = 3.0;
const ELEV = THREE.MathUtils.degToRad(68);      // above horizontal, leaning back (-z)
const SPREAD = THREE.MathUtils.degToRad(35);     // fan half-spread at rest
const SWEEP = THREE.MathUtils.degToRad(25);      // sweep amplitude (SPREAD+SWEEP = 60 deg)
const WOBBLE = THREE.MathUtils.degToRad(14);     // extra inner-beam yaw, zero at the outer pair
const PERIOD = 4;                                // seconds per full sweep at idle energy

export function create(parent, opts = {}) {
  const root = new THREE.Group(); root.name = 'viz-laser-fan';
  const mk = (rTop, rBot) => { const g = new THREE.CylinderGeometry(rTop, rBot, 1, 6, 1, true); g.translate(0, 0.5, 0); return g; };
  const coreGeo = mk(0.006, 0.01), glowGeo = mk(0.08, 0.022);
  const add = { transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide };
  const coreMat = new THREE.MeshBasicMaterial({ ...add, opacity: 1 });
  const glowMat = new THREE.MeshBasicMaterial({ ...add, opacity: 0.55 });
  const cores = new THREE.InstancedMesh(coreGeo, coreMat, N), glows = new THREE.InstancedMesh(glowGeo, glowMat, N);
  const dotGeo = new THREE.SphereGeometry(0.035, 8, 6), dotMat = new THREE.MeshBasicMaterial({ ...add, opacity: 1 });
  const dots = new THREE.InstancedMesh(dotGeo, dotMat, N);
  for (const m of [cores, glows, dots]) { m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); m.frustumCulled = false; root.add(m); }
  const tmp = new THREE.Object3D(), col = new THREE.Color(), up = new THREE.Vector3(0, 1, 0), dir = new THREE.Vector3();
  const bright = new Float32Array(N).fill(0.3), ex = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    ex[i] = (i / (N - 1) - 0.5) * 1.68;
    tmp.position.set(ex[i], EMIT_Y, EMIT_Z); tmp.quaternion.identity(); tmp.scale.set(1, 1, 1); tmp.updateMatrix();
    dots.setMatrixAt(i, tmp.matrix); dots.setColorAt(i, col.setRGB(1, 1, 1)); cores.setColorAt(i, col); glows.setColorAt(i, col);
  }
  parent.add(root);
  let phase = 0, hue = 0.55;

  function update(levels, waveform, dt, reduced) {
    const bass = Math.min(1, levels.bass || 0), energy = Math.min(1, levels.energy || 0);
    const high = Math.min(1, levels.high || 0);
    const bps = reduced ? 0 : tempoBps(levels);
    if (!reduced) {
      // One full sweep every two beats once tempo is known. Idle rate until then.
      const hz = bps ? bps / 2 : (0.7 + energy * 2.4) / PERIOD;
      phase += dt * Math.PI * 2 * hz;
      hue = (hue + dt * (bps ? bps * 0.04 : 0.06 + energy * 0.18 + high * 0.08)) % 1;
    }
    const L = levels.bands, per = L.length / N, nW = waveform.length;
    const elev = ELEV - (reduced ? 0 : bass * 0.6 * THREE.MathUtils.degToRad(8));
    const emitY = EMIT_Y + (reduced ? 0 : bass * 0.03);
    for (let i = 0; i < N; i++) {
      let v = 0; for (let b = Math.floor(i * per); b < Math.floor((i + 1) * per); b++) v = Math.max(v, L[b] || 0);
      v = Math.min(1, v);
      const wf = nW ? Math.abs(waveform[Math.floor(i / N * nW)] || 0) : 0;
      bright[i] = kick(bright[i], (reduced ? 0.35 : 0.08) + v * (reduced ? 0.35 : 1.1) + bass * (reduced ? 0.1 : 0.3) + wf * 0.3, dt, reduced);
      const u = i / (N - 1) - 0.5;
      const wob = reduced ? 0 : (1 - Math.abs(u) * 2) * WOBBLE * Math.sin(phase * 1.85 + i * 0.9);
      const phi = u * 2 * SPREAD + SWEEP * (reduced ? 0.35 : 1) * Math.sin(phase + u * 1.2) + wob;
      const h = Math.cos(elev);
      dir.set(Math.sin(phi) * h, Math.sin(elev), -Math.cos(phi) * h);            // always leans back (-z)
      const len = LEN * (reduced ? 0.72 : THREE.MathUtils.clamp(0.42 + v * 0.36, 0.42, 1));
      const thick = reduced ? 1 : 1 + v * 1.8 + wf * 0.6;
      tmp.position.set(ex[i], emitY, EMIT_Z); tmp.quaternion.setFromUnitVectors(up, dir);
      tmp.scale.set(thick, len, thick); tmp.updateMatrix();
      cores.setMatrixAt(i, tmp.matrix);
      tmp.scale.set(thick * 1.3, len, thick * 1.3); tmp.updateMatrix();
      glows.setMatrixAt(i, tmp.matrix);
      const dotS = reduced ? 1 : 0.75 + bright[i] * 1.6;
      tmp.quaternion.identity(); tmp.scale.set(dotS, dotS, dotS); tmp.updateMatrix();
      dots.setMatrixAt(i, tmp.matrix);
      col.setHSL((hue + u * 0.28 + v * 0.12 + 1) % 1, 1, 0.64).multiplyScalar(Math.min(2.8, bright[i] * 2.15));
      cores.setColorAt(i, col); glows.setColorAt(i, col); dots.setColorAt(i, col);
    }
    for (const m of [cores, glows, dots]) { m.instanceMatrix.needsUpdate = true; m.instanceColor.needsUpdate = true; }
  }
  function dispose() {
    parent.remove(root);
    [coreGeo, glowGeo, dotGeo, coreMat, glowMat, dotMat, cores, glows, dots].forEach(o => o.dispose());
  }
  return { name, root, update, dispose, get brightness() { return bright; } };
}
