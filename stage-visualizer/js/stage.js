import * as THREE from 'three';
import { DECK_R, DECK_H, pulse, smoothTo } from './visualizers/common.js';

// The concert stage and the pieces shared by every visualizer: deck, performer placeholder,
// halo and front light. The group's origin is the floor at centre stage; the front (+z) faces
// the audience. Visualizers are added to `group` by main.js, one at a time.
//
// Sightline rules (checked by QA): everything downstage (z > 0) tops out at or below the deck
// height (0.5 m); tall pieces (speakers, truss) are upstage (z < 0) at the far sides; the riser
// sits behind the bar arc. Low poly, few draw calls, no shadows.
const D = THREE.MathUtils.degToRad;
const TOP_R = DECK_R - 0.04;           // deck body; the LED edge strip sits on the fascia out to DECK_R
const NOTCH = [D(60), D(120)];          // front step notch (x = cos a * r, z = sin a * r; a = 90 deg is +z)
const STEP_IN = 2.3;                    // inner edge of the steps

// Builds closed annular sectors ("arc bands") into one geometry with two groups:
// 0 = sides (plain matte), 1 = tops (panel texture, planar UVs). Optional per-vertex colour.
class Builder {
  constructor() { this.g = [[], []]; }
  quad(group, a, b, c, d, n, col) { // a,b,c,d counter-clockwise seen from the normal side
    const arr = this.g[group];
    for (const p of [a, b, c, a, c, d]) arr.push(p[0], p[1], p[2], n[0], n[1], n[2], col[0], col[1], col[2]);
  }
  band(r0, r1, y0, y1, a0, a1, seg, col = [1, 1, 1], faces = { top: 1, outer: 1, inner: 1, ends: 1 }) {
    const P = (r, a, y) => [Math.cos(a) * r, y, Math.sin(a) * r];
    for (let i = 0; i < seg; i++) {
      const u0 = a0 + (a1 - a0) * i / seg, u1 = a0 + (a1 - a0) * (i + 1) / seg, um = (u0 + u1) / 2;
      const no = [Math.cos(um), 0, Math.sin(um)];
      if (faces.top) this.quad(1, P(r0, u0, y1), P(r0, u1, y1), P(r1, u1, y1), P(r1, u0, y1), [0, 1, 0], col);
      if (faces.outer) this.quad(0, P(r1, u0, y0), P(r1, u0, y1), P(r1, u1, y1), P(r1, u1, y0), no, col);
      if (faces.inner && r0 > 0) this.quad(0, P(r0, u1, y0), P(r0, u1, y1), P(r0, u0, y1), P(r0, u0, y0), [-no[0], 0, -no[2]], col);
    }
    if (faces.ends) {
      const e0 = [Math.sin(a0), 0, -Math.cos(a0)], e1 = [-Math.sin(a1), 0, Math.cos(a1)];
      this.quad(0, P(r0, a0, y0), P(r0, a0, y1), P(r1, a0, y1), P(r1, a0, y0), e0, col);
      this.quad(0, P(r1, a1, y0), P(r1, a1, y1), P(r0, a1, y1), P(r0, a1, y0), e1, col);
    }
  }
  box(cx, cy, cz, sx, sy, sz, col) { // axis-aligned box
    const x0 = cx - sx / 2, x1 = cx + sx / 2, y0 = cy - sy / 2, y1 = cy + sy / 2, z0 = cz - sz / 2, z1 = cz + sz / 2;
    this.quad(0, [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1], col);
    this.quad(0, [x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1], col);
    this.quad(0, [x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [1, 0, 0], col);
    this.quad(0, [x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [-1, 0, 0], col);
    this.quad(0, [x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], [0, 1, 0], col);
  }
  build() {
    const all = [...this.g[0], ...this.g[1]], n = all.length / 9;
    const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), col = new Float32Array(n * 3), uv = new Float32Array(n * 2);
    for (let i = 0; i < n; i++) {
      pos.set(all.slice(i * 9, i * 9 + 3), i * 3); nor.set(all.slice(i * 9 + 3, i * 9 + 6), i * 3); col.set(all.slice(i * 9 + 6, i * 9 + 9), i * 3);
      uv[i * 2] = pos[i * 3] / (2 * DECK_R) + 0.5; uv[i * 2 + 1] = 0.5 - pos[i * 3 + 2] / (2 * DECK_R);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    const nSide = this.g[0].length / 9;
    g.addGroup(0, nSide, 0); g.addGroup(nSide, n - nSide, 1);
    g.computeBoundingSphere();
    return g;
  }
}

// Procedural deck texture: dark matte boards with subtle panel seams (512 px, generated once).
function deckTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 512;
  const x = c.getContext('2d');
  x.fillStyle = '#1d2029'; x.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 2500; i++) { // faint grain
    const v = 24 + Math.random() * 12 | 0; x.fillStyle = `rgb(${v},${v + 1},${v + 5})`;
    x.fillRect(Math.random() * 512, Math.random() * 512, 2 + Math.random() * 6, 1);
  }
  x.strokeStyle = '#353a48'; x.lineWidth = 2;
  const step = 512 / 8; // ~0.7 m panels
  for (let i = 1; i < 8; i++) {
    x.beginPath(); x.moveTo(i * step, 0); x.lineTo(i * step, 512); x.stroke();
    for (let j = 0; j < 8; j++) { // staggered cross seams
      const y = (j + (i % 2) * 0.5) * step; x.beginPath(); x.moveTo((i - 1) * step, y); x.lineTo(i * step, y); x.stroke();
    }
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

export function createStage() {
  const group = new THREE.Group();

  // --- Deck: half-round thrust front with a two-step notch, fascia lip, matte panelled top ---
  const deckB = new Builder();
  const body = [0.55, 0.58, 0.66], lip = [1.3, 1.3, 1.35], stepC = [0.8, 0.8, 0.85];
  deckB.band(0, TOP_R, 0, DECK_H, NOTCH[1], NOTCH[0] + Math.PI * 2, 84, body);                 // main deck
  deckB.band(0, STEP_IN, 0, DECK_H, NOTCH[0], NOTCH[1], 12, body, { top: 1, outer: 0, inner: 0, ends: 0 });
  deckB.band(STEP_IN - 0.001, STEP_IN, 0, DECK_H, NOTCH[0], NOTCH[1], 12, lip, { top: 0, outer: 1, inner: 0, ends: 0 }); // top riser face
  deckB.band(STEP_IN, 2.53, 0, DECK_H * 2 / 3, NOTCH[0], NOTCH[1], 12, stepC);                 // upper step
  deckB.band(2.53, TOP_R, 0, DECK_H / 3, NOTCH[0], NOTCH[1], 12, stepC);                       // lower step
  deckB.band(TOP_R - 0.001, TOP_R + 0.01, DECK_H - 0.035, DECK_H, NOTCH[1], NOTCH[0] + Math.PI * 2, 84, lip, { top: 1, outer: 1, inner: 0, ends: 1 }); // lip
  const sideMat = new THREE.MeshStandardMaterial({ color: 0x262b3d, roughness: 0.9, metalness: 0.1, vertexColors: true, side: THREE.DoubleSide });
  const topMat = new THREE.MeshStandardMaterial({ color: 0xffffff, map: deckTexture(), roughness: 0.95, metalness: 0.0, vertexColors: true, side: THREE.DoubleSide });
  const deck = new THREE.Mesh(deckB.build(), [sideMat, topMat]); deck.name = 'deck'; group.add(deck);

  // --- Upstage riser: a low plinth behind the bar arc (bars end at r 2.03), under the LED wall line ---
  const riserB = new Builder();
  riserB.band(2.45, 2.75, DECK_H, DECK_H + 0.12, D(200), D(340), 36, [0.9, 0.9, 1]);
  const riser = new THREE.Mesh(riserB.build(), [sideMat, topMat]); riser.name = 'riser'; group.add(riser);

  // --- LED edge strip on the front fascia, below the deck top; pulses gently with the bass ---
  const stripB = new Builder(), S = { top: 0, outer: 1, inner: 0, ends: 0 };
  stripB.band(TOP_R + 0.012, TOP_R + 0.014, DECK_H - 0.1, DECK_H - 0.05, D(0), NOTCH[0], 24, [1, 1, 1], S);
  stripB.band(TOP_R + 0.012, TOP_R + 0.014, DECK_H - 0.1, DECK_H - 0.05, NOTCH[1], D(180), 24, [1, 1, 1], S);
  stripB.band(2.53 + 0.004, 2.535, DECK_H / 3 - 0.03, DECK_H / 3 - 0.01, NOTCH[0], NOTCH[1], 12, [1, 1, 1], S); // step nosing
  stripB.band(TOP_R + 0.004, TOP_R + 0.006, DECK_H / 3 - 0.04, DECK_H / 3 - 0.02, NOTCH[0], NOTCH[1], 12, [1, 1, 1], S);
  const stripMat = new THREE.MeshBasicMaterial({ color: 0x3399ff, side: THREE.DoubleSide });
  const strip = new THREE.Mesh(stripB.build(), stripMat); strip.name = 'edge-strip'; group.add(strip);

  // --- Side speaker stacks with truss towers and a header truss (upstage, far sides): one mesh ---
  const rigB = new Builder(), cab = [0.18, 0.18, 0.2], grille = [0.05, 0.05, 0.06], truss = [0.75, 0.77, 0.82];
  const SX = 2.55, SZ = -0.45, T = 0.22, TOP = 3.4;
  for (const sx of [-SX, SX]) {
    rigB.box(sx, DECK_H + 0.225, SZ, 0.5, 0.45, 0.36, cab);            // sub
    rigB.box(sx, DECK_H + 0.65, SZ, 0.4, 0.4, 0.34, cab);              // top box
    rigB.box(sx, DECK_H + 0.225, SZ + 0.185, 0.4, 0.34, 0.01, grille); // grilles (front faces, still z < 0)
    rigB.box(sx, DECK_H + 0.65, SZ + 0.175, 0.3, 0.3, 0.01, grille);
    for (const dx of [-T / 2, T / 2]) for (const dz of [-T / 2, T / 2]) rigB.box(sx + dx, (DECK_H + 0.85 + TOP) / 2, SZ + dz, 0.03, TOP - DECK_H - 0.85, 0.03, truss);
    for (let y = DECK_H + 1.1; y < TOP; y += 0.45) { rigB.box(sx, y, SZ - T / 2, T, 0.025, 0.025, truss); rigB.box(sx, y, SZ + T / 2, T, 0.025, 0.025, truss); }
  }
  for (const dy of [0, -0.22]) for (const dz of [-T / 2, T / 2]) rigB.box(0, TOP + dy, SZ + dz, 2 * SX + T, 0.03, 0.03, truss); // header chords
  for (let x = -SX + 0.3; x < SX; x += 0.4) rigB.box(x, TOP - 0.11, SZ, 0.025, 0.22, T, truss);
  const rigMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0.4, vertexColors: true, side: THREE.DoubleSide });
  const rig = new THREE.Mesh(rigB.build(), rigMat); rig.name = 'rig'; group.add(rig);

  // Performer placeholder (the volumetric performer comes in Test 2)
  const perfMat = new THREE.MeshStandardMaterial({ color: 0x8899bb, transparent: true, opacity: 0.35, emissive: 0x223355 });
  const performer = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 1.1, 8, 16), perfMat);
  performer.name = 'performer'; performer.position.set(0, DECK_H + 0.77, 0); group.add(performer);

  // Shared vertical halo behind the performer, facing the audience (torus lies in the XY plane)
  const haloMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25, side: THREE.DoubleSide, depthWrite: false });
  const halo = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.02, 8, 96), haloMat);
  halo.name = 'halo'; halo.position.set(0, 2.2, -2.2); group.add(halo);

  // Shared front light, above and downstage, lighting the performer (no shadows)
  const light = new THREE.PointLight(0x88aaff, 2, 8, 1.5);
  light.position.set(0, 3, 1.5); group.add(light);

  let hue = 0.6, lightN = 0, haloO = 0.2, perfE = 0.3, edge = 0.5;
  const stripHSL = new THREE.Color();
  function update(levels, dt, reduced, intensity = 1) {
    const g = Math.max(0, intensity);
    if (!reduced) hue = (hue + dt * (0.01 + levels.mid * 0.05)) % 1;
    lightN = pulse(lightN, levels.bass * (reduced ? 0.4 : 1), dt, reduced);
    light.intensity = (1 + lightN * 3) * g; light.color.setHSL(hue, 0.7, 0.6);
    const bpm = levels.bpm || 0;
    const spin = (!reduced && bpm > 45 && bpm < 210) ? (bpm / 60) * 0.45 : (0.2 + levels.energy * 1.5);
    halo.rotation.z += dt * spin * (reduced ? 0 : 1); // frozen with reduced motion
    haloO = pulse(haloO, 0.15 + levels.high * (reduced ? 0.25 : 0.45), dt, reduced);
    haloMat.opacity = Math.min(1, haloO * g);
    perfE = pulse(perfE, 0.3 + levels.energy * (reduced ? 0.5 : 1), dt, reduced);
    perfMat.emissiveIntensity = perfE * g;
    performer.rotation.y += dt * 0.3 * (reduced ? 0.25 : 1);
    // Edge strip: capped 0.45..0.8, slow smoothed ramps; static (fixed level, fixed hue) with reduced motion.
    edge = reduced ? smoothTo(edge, 0.5, dt, 1, 1, 0.1) : pulse(edge, 0.45 + Math.min(1, levels.bass) * 0.35, dt, false);
    stripMat.color.copy(stripHSL.setHSL(hue, 0.85, 0.5)).multiplyScalar(edge * 1.25 * g);
  }
  return { group, performer, halo, deck, riser, strip, rig, update, get edgeBrightness() { return edge; },
    get brightness() { return [edge, lightN, haloO, perfE]; } }; // QA: 0..1 light levels
}
