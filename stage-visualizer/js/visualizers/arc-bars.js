import * as THREE from 'three';
import { DECK_H, ARC_START, ARC_LEN, smoothTo, PULSE, PULSE_REDUCED, tempoBps } from './common.js';

// Arc Bars: 64 spectrum bars in the 160-degree upstage arc, a glowing floor arc that
// breathes with the bass, and rising particles driven by the highs. One InstancedMesh for the bars.
export const name = 'Arc Bars';
const BAR_R = 2.0, BAR_MAX = 2.2;

export function create(parent, opts = {}) {
  const bands = opts.bands || 64;
  const root = new THREE.Group(); root.name = 'viz-arc-bars';
  const tmp = new THREE.Object3D(), col = new THREE.Color();

  const barGeo = new THREE.BoxGeometry(0.06, 1, 0.06); barGeo.translate(0, 0.5, 0);
  const barMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const bars = new THREE.InstancedMesh(barGeo, barMat, bands);
  bars.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  const angles = new Float32Array(bands), heights = new Float32Array(bands), glow = new Float32Array(bands);
  for (let i = 0; i < bands; i++) {
    angles[i] = ARC_START + (i / (bands - 1)) * ARC_LEN;
    heights[i] = 0.02; glow[i] = 0.3;
    bars.setColorAt(i, col.setRGB(0.2, 0.3, 0.6));
  }
  bars.frustumCulled = false; root.add(bars);

  // Floor arc. After rotation.x = -PI/2, local +y points to -z, so thetaStart 10 deg + 160 deg stays upstage.
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x55aaff, transparent: true, opacity: 0.7, side: THREE.DoubleSide, depthWrite: false });
  const ring = new THREE.Mesh(new THREE.RingGeometry(2.3, 2.4, 96, 1, THREE.MathUtils.degToRad(10), ARC_LEN), ringMat);
  ring.rotation.x = -Math.PI / 2; ring.position.y = DECK_H + 0.006; root.add(ring);

  // Rising particles in the upstage arc only
  const P = 400, pos = new Float32Array(P * 3), speed = new Float32Array(P);
  for (let i = 0; i < P; i++) {
    const r = 1.6 + Math.random() * 1.0, a = ARC_START + 0.02 + Math.random() * (ARC_LEN - 0.04);
    pos[i * 3] = Math.cos(a) * r; pos[i * 3 + 1] = DECK_H + 0.05 + Math.random() * 2.5; pos[i * 3 + 2] = Math.sin(a) * r;
    speed[i] = 0.2 + Math.random() * 0.6;
  }
  const pGeo = new THREE.BufferGeometry(); pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pMat = new THREE.PointsMaterial({ size: 0.025, color: 0xaaddff, transparent: true, opacity: 0.6, depthWrite: false });
  const particles = new THREE.Points(pGeo, pMat); particles.frustumCulled = false; root.add(particles);

  parent.add(root);
  let hue = 0.6, ringB = 0.4, pB = 0.4;

  function update(levels, waveform, dt, reduced) {
    const L = levels.bands, R = reduced ? PULSE_REDUCED : PULSE;
    const hMax = reduced ? BAR_MAX * 0.6 : BAR_MAX;
    const bps = reduced ? 0 : tempoBps(levels);
    for (let i = 0; i < bands; i++) {
      const v = L[i] || 0;
      heights[i] = reduced
        ? smoothTo(heights[i], 0.02 + v * hMax, dt, 4, 2)
        : Math.min(BAR_MAX, 0.02 + v * hMax);
      glow[i] = smoothTo(glow[i], (reduced ? 0.45 : 0.35) + v * (reduced ? 0.35 : 0.65), dt, R.rise, R.fall, R.maxRate);
      tmp.position.set(Math.cos(angles[i]) * BAR_R, DECK_H, Math.sin(angles[i]) * BAR_R);
      tmp.rotation.set(0, -angles[i], 0);
      tmp.scale.set(1, heights[i], 1); tmp.updateMatrix();
      bars.setMatrixAt(i, tmp.matrix);
      col.setHSL((hue + i / bands * 0.25) % 1, 0.8, 0.5).multiplyScalar(glow[i] * 1.4);
      bars.setColorAt(i, col);
    }
    bars.instanceMatrix.needsUpdate = true; bars.instanceColor.needsUpdate = true;
    if (!reduced) hue = (hue + dt * (0.01 + (bps || levels.mid) * 0.05)) % 1;
    const s = 1 + Math.min(0.08, levels.bass * (reduced ? 0.02 : 0.05));
    ring.scale.set(s, s, 1);
    ringB = smoothTo(ringB, 0.4 + levels.bass * (reduced ? 0.2 : 0.45), dt, R.rise, R.fall, R.maxRate);
    ringMat.color.setHSL(hue, 0.9, 0.55); ringMat.opacity = ringB;
    const arr = pGeo.attributes.position.array, sp = reduced ? 0.25 : 1;
    for (let i = 0; i < P; i++) {
      arr[i * 3 + 1] += dt * speed[i] * (0.2 + levels.high * 2.5) * sp * (reduced ? 1 : 0.7 + (bps || 1) * 0.45);
      if (arr[i * 3 + 1] > DECK_H + 2.7) arr[i * 3 + 1] = DECK_H + 0.05;
    }
    pGeo.attributes.position.needsUpdate = true;
    pB = smoothTo(pB, 0.3 + levels.high * (reduced ? 0.3 : 0.5), dt, R.rise, R.fall, R.maxRate);
    pMat.opacity = pB;
  }

  function dispose() {
    parent.remove(root);
    barGeo.dispose(); barMat.dispose(); bars.dispose();
    ring.geometry.dispose(); ringMat.dispose(); pGeo.dispose(); pMat.dispose();
  }
  return { name, root, update, dispose, get brightness() { return [...glow, ringB, pB]; } }; // QA: 0..1 light levels
}
