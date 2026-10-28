import * as THREE from 'three';
import { DECK_H, smoothTo, pulse } from './common.js';

// Deck Ripples: rings on the deck that travel outward from the performer.
// Stage frame: x = cos(a) * r, z = sin(a) * r. a = 90° is downstage (+z),
// a = 270° is straight upstage (0, -r). The sheet is a full ring. It starts
// just outside the performer's feet and stops before the front steps, the
// upstage riser, and the side speakers. It stays a few centimetres above the
// deck, so it covers the floor without blocking the performer.
// Bass and energy set how tall and wide the wash is. That slow wash is the piano.
// A real hit (levels.onset) throws one more ring outward only when the floor is
// already full, which is songs 2 and 3. A slow piano note stays the wash.
// The tempo grid (levels.beat) is not used.
export const name = 'Deck Ripples';

const R0 = 0.4;
const NR = 32, NA = 96;
const BASE_Y = DECK_H + 0.04;

// Largest radius that is still on the deck top at this angle.
function outerRadius(deg) {
  const d = (deg % 360 + 360) % 360;
  let r = 2.42;
  if (d >= 60 && d <= 120) r = 2.12;          // front steps begin at r 2.3
  if (d >= 200 && d <= 340) r = Math.min(r, 2.26); // riser begins at r 2.45
  const around = (target) => { const w = Math.abs(d - target) % 360; return Math.min(w, 360 - w); };
  if (around(190) < 16 || around(350) < 16) r = Math.min(r, 2.12); // speaker stacks
  return r;
}

export function create(parent) {
  const root = new THREE.Group();
  root.name = 'viz-deck-ripples';
  const n = NA * (NR + 1);
  const pos = new Float32Array(n * 3);
  const colors = new Float32Array(n * 3);
  const rad = new Float32Array(n);
  const ang = new Float32Array(n);
  const mask = new Float32Array(n);
  for (let j = 0; j < NA; j++) {
    const a = (j / NA) * Math.PI * 2;
    const r1 = outerRadius(a * 180 / Math.PI);
    for (let i = 0; i <= NR; i++) {
      const u = i / NR;
      const r = R0 + (r1 - R0) * u;
      const k = j * (NR + 1) + i;
      rad[k] = r;
      ang[k] = a;
      // Fade at the feet and at the outer edge. No side fade: the ring is closed.
      mask[k] = Math.pow(Math.sin(Math.PI * u), 0.55);
      pos[k * 3] = Math.cos(a) * r;
      pos[k * 3 + 1] = BASE_Y;
      pos[k * 3 + 2] = Math.sin(a) * r;
    }
  }
  const idx = [];
  for (let j = 0; j < NA; j++) {
    const j1 = (j + 1) % NA;
    for (let i = 0; i < NR; i++) {
      const a = j * (NR + 1) + i;
      const b = a + 1;
      const c = j1 * (NR + 1) + i;
      const d = c + 1;
      // +y normal: (inner, angle) → (inner, next angle) → (outer, same angle).
      idx.push(a, c, b, b, c, d);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setIndex(idx);
  const mat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide, // thin floor sheet, seen from the audience and from above
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.name = 'deck-ripples';
  root.add(mesh);
  parent.add(root);

  const col = new THREE.Color();
  const rings = [];
  let phase = 0, swell = 0, glow = 0.25, hue = 0.52, pauseBlend = 0, prevOnset = 0;

  function update(levels, waveform, dt, reduced) {
    dt = Math.max(0, Math.min(dt, 0.1));
    // A moderate note, not only a full peak, should reach the floor.
    const raw = Math.min(1.25, (levels.bass || 0) * 0.85 + (levels.energy || 0) * 0.55);
    const heard = raw <= 0 ? 0 : Math.min(1.25, Math.pow(raw, 0.72) * 1.35);
    swell = smoothTo(swell, heard, dt, reduced ? 1.2 : 5, reduced ? 0.8 : 2.4, reduced ? 0.2 : 1.8);
    pauseBlend = smoothTo(pauseBlend, levels.paused ? 1 : 0, dt, 3, 4, 1.1);
    const drive = 1 - pauseBlend;
    const body = Math.min(1, swell) * drive;
    // Quiet stays low. A real note lifts the crests and widens the rings.
    const amp = (reduced ? 0.005 + body * 0.02 : 0.012 + body * 0.13);
    const freq = reduced ? 3.6 : 6.6 - body * 2.6;
    phase += dt * (reduced ? 0.12 : 0.42 + body * 0.55);
    hue = (hue + dt * (reduced ? 0.008 : 0.015 + body * 0.03)) % 1;
    const glowTarget = Math.min(1, reduced ? 0.2 + body * 0.22 : 0.32 + body * 0.68);
    glow = pulse(glow, glowTarget, dt, reduced);

    // Traveling rings from real hits. Born at the feet, moving outward.
    // Songs 2 and 3 hold this floor at full. The piano's slow notes do not,
    // so they keep the wash. The tempo grid is not read.
    const onset = Math.max(0, Math.min(2, levels.onset || 0));
    const fading = reduced || drive < 0.55;
    for (let i = rings.length - 1; i >= 0; i--) {
      const ring = rings[i];
      ring.r += dt * ring.speed;
      if (fading) ring.amp *= Math.exp(-dt * 4);
      if (ring.r > 2.75 || ring.amp < 0.03) rings.splice(i, 1);
    }
    if (!reduced && drive > 0.6 && body > 0.97 && prevOnset < 0.72 && onset >= 0.72) {
      rings.push({ r: R0, amp: body * body, speed: 0.85 + body * 1.15 });
      if (rings.length > 5) rings.shift();
    }
    prevOnset = onset;

    for (let k = 0; k < n; k++) {
      // The second term uses sin(angle) so the ring stays continuous all the way around.
      const wave = Math.sin(rad[k] * freq - phase) * 0.92
        + Math.sin(rad[k] * freq * 0.45 - phase * 0.6 + Math.sin(ang[k] * 2) * 0.7) * 0.08;
      const crest = wave * 0.5 + 0.5;
      const m = mask[k];
      let burst = 0;
      for (let i = 0; i < rings.length; i++) {
        const d = (rad[k] - rings[i].r) / 0.22;
        burst += Math.exp(-d * d) * rings[i].amp;
      }
      if (burst > 1) burst = 1;
      // Extra height stays under the 25 cm cap even on a full crest (0.54 + 0.142 + 0.045).
      const extra = Math.min(0.045, burst * 0.05);
      pos[k * 3 + 1] = BASE_Y + crest * amp * m + extra * m;
      // The band is local. The sheet's overall glow still goes through pulse().
      const light = glow * m * (0.1 + Math.pow(crest, 1.15) * 2.5 + burst * 0.85);
      col.setHSL(hue, 0.92, 0.62);
      colors[k * 3] = col.r * light;
      colors[k * 3 + 1] = col.g * light;
      colors[k * 3 + 2] = col.b * light;
    }
    geo.attributes.position.needsUpdate = true;
    geo.attributes.color.needsUpdate = true;
  }

  function dispose() {
    parent.remove(root);
    geo.dispose();
    mat.dispose();
  }
  update({ bass: 0, energy: 0 }, null, 0, false);
  return { name, root, update, dispose, get brightness() { return [glow]; } };
}
