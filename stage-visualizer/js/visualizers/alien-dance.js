import * as THREE from 'three';
import { DECK_H, smoothTo, pulse } from './common.js';

export const name = 'Alien Dance';

// A procedural performer: no external models, textures, or runtime dependencies.
export function create(parent) {
  const root = new THREE.Group(); root.name = 'viz-alien-dance'; parent.add(root);
  const actor = new THREE.Group(); actor.position.y = DECK_H; root.add(actor);
  const replaced = ['performer', 'halo'].map(n => parent.getObjectByName(n)).filter(Boolean);
  const visibility = replaced.map(o => o.visible);
  replaced.forEach(o => { o.visible = false; });
  const geometries = new Set(), materials = new Set();
  const geo = g => { geometries.add(g); return g; };
  const mat = m => { materials.add(m); return m; };
  const holograms = [];
  function hologram(color, opacity = 1) {
    const m = mat(new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { tint: { value: new THREE.Color(color) }, clock: { value: 0 }, strength: { value: 0.85 }, opacity: { value: opacity } },
      vertexShader: `
        varying vec3 n; varying vec3 eyeDir; varying float height;
        void main() {
          vec4 p = modelViewMatrix * vec4(position, 1.0);
          n = normalize(normalMatrix * normal); eyeDir = -p.xyz;
          height = (modelMatrix * vec4(position, 1.0)).y;
          gl_Position = projectionMatrix * p;
        }
      `,
      fragmentShader: `
        uniform vec3 tint; uniform float clock; uniform float strength; uniform float opacity;
        varying vec3 n; varying vec3 eyeDir; varying float height;
        void main() {
          float rim = pow(1.0 - abs(dot(normalize(n), normalize(eyeDir))), 2.0);
          // Soft scan lines drift slowly, with no on/off flicker.
          float phase = height * 110.0 - clock * 1.8;
          float aa = 1.0 - smoothstep(0.8, 3.0, fwidth(phase));
          float lines = (0.5 + 0.5 * sin(phase)) * aa;
          float sweep = pow(0.5 + 0.5 * sin(height * 3.4 - clock * 0.7), 8.0);
          vec3 color = tint * (0.5 + rim * 1.0 + lines * 0.24 + sweep * 0.22) * strength;
          float alpha = (0.22 + rim * 0.48 + lines * 0.10) * opacity;
          gl_FragColor = vec4(color, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
    }));
    holograms.push(m); return m;
  }
  const skin = hologram(0x55eeff);
  const suit = hologram(0x3985ff, 0.9);
  const trim = hologram(0xb6faff);
  const eye = mat(new THREE.MeshBasicMaterial({ color: 0x021020, transparent: true, opacity: 0.82, depthWrite: false }));
  const white = hologram(0xffffff);
  const gold = mat(new THREE.MeshStandardMaterial({ color: 0xffd45b, emissive: 0xffad24, emissiveIntensity: 0.85, roughness: 0.3, metalness: 0.25 }));
  const sphere = geo(new THREE.SphereGeometry(1, 24, 16));
  const cylinder = geo(new THREE.CylinderGeometry(1, 1, 1, 10));
  function oval(group, material, xyz, scale) {
    const m = new THREE.Mesh(sphere, material); m.position.set(...xyz); m.scale.set(...scale); group.add(m); return m;
  }
  function bone(material, radius) {
    const m = new THREE.Mesh(cylinder, material); actor.add(m); return { mesh: m, radius };
  }
  const up = new THREE.Vector3(0, 1, 0), delta = new THREE.Vector3();
  function connect(b, a, z) {
    delta.subVectors(z, a); b.mesh.position.copy(a).add(z).multiplyScalar(0.5);
    const length = delta.length();
    b.mesh.quaternion.setFromUnitVectors(up, delta.normalize());
    b.mesh.scale.set(b.radius, length, b.radius);
  }
  const torso = oval(actor, suit, [0, 1.04, 0], [0.31, 0.43, 0.23]);
  oval(actor, trim, [0, 1.36, 0], [0.29, 0.07, 0.23]);
  oval(actor, gold, [0, 1.12, 0.225], [0.09, 0.09, 0.025]);
  const head = new THREE.Group(); head.position.y = 1.72; actor.add(head);
  oval(head, skin, [0, 0, 0], [0.46, 0.46, 0.34]);
  for (const side of [-1, 1]) {
    const e = oval(head, eye, [side * 0.19, 0.025, 0.29], [0.14, 0.21, 0.072]); e.rotation.z = -side * 0.25;
    oval(head, white, [side * 0.19 - 0.035, 0.10, 0.353], [0.035, 0.047, 0.015]);
    oval(head, skin, [side * 0.40, -0.06, 0], [0.16, 0.13, 0.10]);
  }
  // Small curved smile, kept in front of the head's lower face.
  const smilePath = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.095, -0.20, 0.303), new THREE.Vector3(0, -0.235, 0.312), new THREE.Vector3(0.095, -0.20, 0.303),
  ]);
  head.add(new THREE.Mesh(geo(new THREE.TubeGeometry(smilePath, 12, 0.012, 6, false)), eye));
  const limbs = [-1, 1].map(side => ({
    side, upper: bone(suit, 0.075), forearm: bone(skin, 0.055),
    thigh: bone(suit, 0.10), shin: bone(trim, 0.075),
    hand: oval(actor, skin, [0, 0, 0], [0.09, 0.105, 0.07]),
    foot: oval(actor, suit, [0, 0, 0], [0.14, 0.10, 0.23]),
    elbow: oval(actor, trim, [0, 0, 0], [0.085, 0.085, 0.085]),
  }));
  // Clone only the character, before adding the first dancer's star. Geometry
  // is shared, but each dancer has independent pose nodes and hologram colors.
  const buddy = actor.clone(true); buddy.name = 'alien-wave-dancer'; root.add(buddy);
  actor.name = 'alien-star-dancer';
  actor.scale.setScalar(0.83); buddy.scale.setScalar(0.83);
  const sources = [], copies = [], twins = new Map();
  actor.traverse(o => sources.push(o)); buddy.traverse(o => copies.push(o));
  sources.forEach((o, i) => twins.set(o, copies[i]));
  const buddyPalette = new Map([[skin, hologram(0xff82ee)], [suit, hologram(0x955aff, 0.9)], [trim, hologram(0xffc3ff)], [gold, hologram(0xffc3ff)]]);
  buddy.traverse(o => { if (o.isMesh && buddyPalette.has(o.material)) o.material = buddyPalette.get(o.material); });
  const buddyHead = twins.get(head), buddyTorso = twins.get(torso);
  const buddyLimbs = limbs.map(l => ({
    side: l.side,
    upper: { mesh: twins.get(l.upper.mesh), radius: l.upper.radius },
    forearm: { mesh: twins.get(l.forearm.mesh), radius: l.forearm.radius },
    thigh: { mesh: twins.get(l.thigh.mesh), radius: l.thigh.radius },
    shin: { mesh: twins.get(l.shin.mesh), radius: l.shin.radius },
    hand: twins.get(l.hand), foot: twins.get(l.foot), elbow: twins.get(l.elbow),
  }));
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const a = Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 0.115 : 0.255;
    if (i === 0) shape.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    else shape.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  shape.closePath();
  const starGeometry = geo(new THREE.ExtrudeGeometry(shape, { depth: 0.065, bevelEnabled: true, bevelThickness: 0.018, bevelSize: 0.018, bevelSegments: 2, steps: 1 }));
  starGeometry.translate(0, 0, -0.0325);
  const star = new THREE.Group(); star.name = 'shared-star'; star.scale.setScalar(0.83); root.add(star);
  const starBody = new THREE.Mesh(starGeometry, gold); star.add(starBody);
  const glowMat = mat(new THREE.MeshBasicMaterial({ color: 0xffd365, transparent: true, opacity: 0.10, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }));
  const glow = new THREE.Mesh(starGeometry, glowMat); glow.scale.setScalar(1.35); star.add(glow);
  const sparkles = Array.from({ length: 7 }, () => {
    const s = new THREE.Mesh(starGeometry, gold); s.scale.setScalar(0.065); root.add(s); return s;
  });
  const ringMat = mat(new THREE.MeshBasicMaterial({ color: 0x55eeff, transparent: true, opacity: 0.4, depthWrite: false, side: THREE.DoubleSide }));
  const buddyRingMat = mat(ringMat.clone()); buddyRingMat.color.setHex(0xff82ee);
  const ringGeometry = geo(new THREE.RingGeometry(0.61, 0.64, 64));
  const ring = new THREE.Mesh(ringGeometry, ringMat), buddyRing = new THREE.Mesh(ringGeometry, buddyRingMat);
  const projectors = [[], []];
  for (const [r, x] of [[ring, -0.85], [buddyRing, 0.85]]) {
    r.rotation.x = -Math.PI / 2; r.position.set(x, DECK_H + 0.012, 0); root.add(r);
    const inner = new THREE.Mesh(ringGeometry, r.material); inner.rotation.x = -Math.PI / 2;
    inner.scale.setScalar(0.70); inner.position.copy(r.position); root.add(inner);
    projectors[x < 0 ? 0 : 1].push(r, inner);
  }
  // Low-opacity projection volumes fade upward from each floor emitter.
  const beamGeometry = geo(new THREE.CylinderGeometry(0.58, 0.08, 1.95, 32, 1, true));
  const beamMaterials = [];
  for (const [x, color] of [[-0.85, 0x55eeff], [0.85, 0xff82ee]]) {
    const beamMaterial = mat(new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, side: THREE.DoubleSide,
      forceSinglePass: true, blending: THREE.AdditiveBlending,
      uniforms: { tint: { value: new THREE.Color(color) }, glow: { value: 0.85 } },
      vertexShader: `varying vec2 vUv; void main() {
        vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
      fragmentShader: `uniform vec3 tint; uniform float glow; varying vec2 vUv;
        void main() {
          float fade = pow(1.0 - vUv.y, 1.5);
          gl_FragColor = vec4(tint, fade * 0.075 * glow);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    }));
    const beam = new THREE.Mesh(beamGeometry, beamMaterial);
    beam.position.set(x, DECK_H + 0.975 + 0.015, 0); root.add(beam); beamMaterials.push(beamMaterial);
    projectors[x < 0 ? 0 : 1].push(beam);
  }
  const shoulder = new THREE.Vector3(), elbow = new THREE.Vector3(), hand = new THREE.Vector3();
  // A fixed pool of short afterimages keeps the show lightweight in XR.
  const trailSources = [...limbs, ...buddyLimbs].flatMap(l => [l.hand, l.foot]);
  const trailHistory = trailSources.map(() => Array.from({ length: 5 }, () => new THREE.Matrix4()));
  const trailLayers = Array.from({ length: 4 }, (_, age) => {
    const material = mat(new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true,
      opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    const mesh = new THREE.InstancedMesh(sphere, material, trailSources.length);
    mesh.name = 'hologram-trail-' + age; mesh.frustumCulled = false;
    trailSources.forEach((source, i) => mesh.setColorAt(i, new THREE.Color(i < 4 ? 0x55eeff : 0xff82ee)));
    root.add(mesh); return mesh;
  });
  const burstMaterial = mat(new THREE.MeshBasicMaterial({ color: 0xffd365, transparent: true,
    opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  const burst = new THREE.InstancedMesh(starGeometry, burstMaterial, 16);
  burst.name = 'catch-celebration'; burst.frustumCulled = false; burst.visible = false; root.add(burst);
  const burstOrigin = new THREE.Vector3(), effectPose = new THREE.Object3D(), trailMatrix = new THREE.Matrix4();
  let trailClock = 0, trailReady = false, burstAge = 2, lastOwner = 'cyan', catches = 0;
  const hip = new THREE.Vector3(), knee = new THREE.Vector3(), foot = new THREE.Vector3();
  const leftGrip = new THREE.Vector3(0.62, 1.55, 0.30), rightGrip = new THREE.Vector3(-0.62, 1.55, 0.30);
  const leftAnchor = new THREE.Vector3(), rightAnchor = new THREE.Vector3(), rightTarget = new THREE.Vector3();
  const crown = new THREE.Vector3(0, 2.65, -0.05), inverseLeft = new THREE.Matrix4(), inverseRight = new THREE.Matrix4();
  const handTarget = new THREE.Vector3(), sparkleOffset = new THREE.Vector3();
  limbs[1].hand.name = 'cyan-catch-hand'; buddyLimbs[0].hand.name = 'pink-catch-hand';
  const smooth = (a, b, x) => { const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  let time = 0, dance = 0, phrase = 0, starSpin = 0, drive = 0, motion = 1, light = 0.85;
  // Alternate a flat backward slide with a raised-heel forward reset.
  const moonFoot = new THREE.Vector3();
  const waveElbow = new THREE.Vector3();
  function robotWaveArm(side, center, crest, blend, amount) {
    const lift = x => Math.exp(-(((center + x * 0.83 - crest) / 0.28) ** 2)) * 0.34 * amount;
    shoulder.y += lift(side * 0.28) * blend;
    handTarget.set(side * 0.76, 1.25 + lift(side * 0.76), 0.10);
    hand.lerp(handTarget, blend);
    waveElbow.set(side * 0.51, 1.25 + lift(side * 0.51), 0.03);
    elbow.lerp(waveElbow, blend);
  }
  function moonwalkFoot(limb, dancer, phase, blend, amount) {
    const stride = phase + (limb.side < 0 ? Math.PI : 0);
    const heel = smooth(-0.25, 0.25, -Math.sin(stride)) * 0.70 * amount * blend;
    limb.foot.rotation.x = heel;
    const soleHeight = Math.hypot(0.10 * Math.cos(heel), 0.23 * Math.sin(heel));
    moonFoot.set(limb.side * 0.23, soleHeight - (dancer.position.y - DECK_H) / 0.83,
      0.10 + Math.cos(stride) * 0.27 * amount);
    foot.lerp(moonFoot, blend);
    foot.y = Math.max(foot.y, moonFoot.y);
  }
  function update(levels, waveform, dt, reduced) {
    dt = Math.max(0, Math.min(dt, 0.1));
    const energy = THREE.MathUtils.clamp(Math.max(levels.energy || 0, levels.bass || 0), 0, 1);
    // Pause freezes the phrase and lets the size of the movement settle.
    // The tempo grid is not a bounce. The routine follows detected tempo only while playing.
    const paused = !!levels.paused;
    drive = smoothTo(drive, paused ? 0 : energy, dt, paused ? 3 : 7, paused ? 4 : 3, paused ? 1.1 : 2);
    motion = smoothTo(motion, reduced ? 0.18 : 1, dt, 4, 4, 2);
    const step = paused ? 0 : dt;
    time += step * (reduced ? 0.3 : 1);
    const bpm = levels.bpm || 0;
    const bps = bpm > 45 && bpm < 210 ? bpm / 60 : 1.2;
    dance += step * Math.PI * 2 * bps;
    phrase += step * bps * (reduced ? 0.3 : 1) / 32;
    const cycle = phrase % 1;
    const moonwalk = smooth(0.01, 0.035, cycle) * (1 - smooth(0.17, 0.20, cycle));
    const glide = smooth(0.02, 0.18, cycle) * (1 - smooth(0.20, 0.32, cycle));
    const moonPhase = phrase * 32 * Math.PI;
    const together = smooth(0.76, 0.82, cycle) * (1 - smooth(0.94, 1, cycle));
    const robotWave = smooth(0.80, 0.82, cycle) * (1 - smooth(0.92, 0.94, cycle));
    const waveCrest = THREE.MathUtils.lerp(-1.80, 1.80, smooth(0.82, 0.92, cycle));
    const leftReach = Math.max(1 - smooth(0.18, 0.25, cycle),
      smooth(0.50, 0.60, cycle) * (1 - smooth(0.72, 0.80, cycle)), smooth(0.94, 1, cycle));
    const rightReach = smooth(0.22, 0.30, cycle) * (1 - smooth(0.48, 0.55, cycle));
    const fumble = Math.floor(phrase) % 2 === 1 && cycle >= 0.30 && cycle < 0.40
      ? Math.sin((cycle - 0.30) / 0.10 * Math.PI) ** 2 : 0;
    // Alternate a short solo and its response before the shared finishing move.
    const call = smooth(0.02, 0.04, cycle) * (1 - smooth(0.12, 0.17, cycle));
    const response = smooth(0.34, 0.37, cycle) * (1 - smooth(0.44, 0.48, cycle));
    const cyanSolo = smooth(0.61, 0.63, cycle) * (1 - smooth(0.69, 0.72, cycle));
    const catchHop = (start) => cycle > start && cycle < start + 0.045
      ? Math.sin((cycle - start) / 0.045 * Math.PI) * 0.16 * drive * motion : 0;
    const bounce = (0.5 - 0.5 * Math.cos(dance)) * drive * 0.045;
    actor.position.set(-0.85 + Math.sin(dance * 0.5) * drive * 0.10 * motion, DECK_H + bounce * motion, 0);
    actor.rotation.y = Math.sin(dance * 0.5) * drive * 0.14 * motion;
    torso.scale.y = 0.43;
    head.rotation.z = (Math.sin(dance * 0.5 + 0.5) * drive * 0.10 - leftReach * 0.08) * motion;
    const groove = dance * 0.5 + Math.PI / 2, amount = drive * motion;
    buddy.position.set(0.85 + THREE.MathUtils.lerp(Math.sin(groove) * amount * 0.13, Math.sin(dance * 0.5) * amount * 0.10, together),
      DECK_H + bounce * motion, -0.08);
    buddy.rotation.y = THREE.MathUtils.lerp(Math.sin(groove) * amount * 0.35, actor.rotation.y, together);
    buddyHead.rotation.set(Math.sin(dance) * amount * 0.06, -0.2 * motion, (Math.sin(groove + 1) * amount * 0.16 + fumble * 0.2 * motion) * (1 - together));
    buddyTorso.scale.y = 0.43;
    // Reveal the footwork with a slight turn; ease home during the first toss.
    for (const [i, dancer] of [actor, buddy].entries()) {
      dancer.position.z -= glide * 0.70 * amount;
      dancer.position.y = THREE.MathUtils.lerp(dancer.position.y, DECK_H, moonwalk);
      dancer.rotation.y = THREE.MathUtils.lerp(dancer.rotation.y, -0.65 * motion, moonwalk);
      for (const emitter of projectors[i]) emitter.position.z = dancer.position.z;
    }
    torso.rotation.x = buddyTorso.rotation.x = moonwalk * 0.12 * amount;
    actor.position.y += catchHop(0.60);
    buddy.position.y += catchHop(0.30);
    // Cyan's moonwalk/disco challenge gets a pink twist-and-kick answer.
    buddy.rotation.y += Math.sin(dance * 0.5) * response * amount * 0.45;
    torso.rotation.z = -Math.sin(dance * 0.5) * cyanSolo * amount * 0.12;
    buddyTorso.rotation.z = Math.sin(dance) * response * amount * 0.14;
    // Evaluate both moving hands in stage space. A caught star is attached
    // exactly to that hand; throws follow a smooth arc between the two grips.
    rightTarget.copy(rightGrip); rightTarget.x += fumble * 0.16 * motion; rightTarget.y -= fumble * 0.38 * motion;
    actor.updateMatrix(); buddy.updateMatrix();
    inverseLeft.copy(actor.matrix).invert(); inverseRight.copy(buddy.matrix).invert();
    leftAnchor.copy(leftGrip).applyMatrix4(actor.matrix); rightAnchor.copy(rightTarget).applyMatrix4(buddy.matrix);
    let owner = 'air', action;
    function toss(from, to, start, end) {
      const u = smooth(start, end, cycle);
      star.position.copy(from).lerp(to, u);
      star.position.y += 4 * u * (1 - u) * (reduced ? 0.30 : 0.85);
    }
    if (cycle < 0.18) { star.position.copy(leftAnchor); owner = 'cyan'; action = moonwalk > 0.5 ? 'moonwalk' : 'cyan-solo'; }
    else if (cycle < 0.30) { toss(leftAnchor, rightAnchor, 0.18, 0.30); action = 'pass-to-pink'; }
    else if (cycle < 0.48) { star.position.copy(rightAnchor); owner = 'pink'; action = fumble > 0 ? 'playful-fumble' : 'pink-response'; }
    else if (cycle < 0.60) { toss(rightAnchor, leftAnchor, 0.48, 0.60); action = 'pass-to-cyan'; }
    else if (cycle < 0.72) { star.position.copy(leftAnchor); owner = 'cyan'; action = 'cyan-catch'; }
    else if (cycle < 0.80) { star.position.copy(leftAnchor).lerp(crown, smooth(0.72, 0.80, cycle)); action = 'star-lift'; }
    else if (cycle < 0.94) { star.position.copy(crown); action = robotWave > 0.5 ? 'robot-wave' : 'synchronized-dance'; }
    else { star.position.copy(crown).lerp(leftAnchor, smooth(0.94, 1, cycle)); action = 'star-return'; }
    root.userData.action = action; root.userData.starOwner = owner; root.userData.synchronized = together;
    root.userData.moonwalk = moonwalk;
    root.userData.robotWave = robotWave;
    root.userData.battleLead = response > 0.3 ? 'pink' : (call > 0.3 || cyanSolo > 0.3) ? 'cyan' : 'duet';
    // Both aliens follow the star with their gaze, then face the audience for the duet.
    head.rotation.y = Math.atan2(star.position.x - actor.position.x, 2.5) * 0.7 * motion * (1 - together);
    buddyHead.rotation.y = Math.atan2(star.position.x - buddy.position.x, 2.5) * 0.7 * motion * (1 - together);
    head.rotation.y += response * 0.28 * motion;
    buddyHead.rotation.y -= cyanSolo * 0.28 * motion;
    head.rotation.z += Math.exp(-(((waveCrest + 0.85) / 0.40) ** 2)) * 0.18 * amount * robotWave;
    buddyHead.rotation.z += Math.exp(-(((waveCrest - 0.85) / 0.40) ** 2)) * 0.18 * amount * robotWave;
    starSpin += step * (owner === 'air' ? 1.4 : 0.12) * motion;
    star.rotation.set(0, Math.sin(time) * 0.22 * motion, starSpin);
    for (const limb of limbs) {
      const s = limb.side, step = Math.sin(dance + (s < 0 ? Math.PI : 0)) * drive * motion;
      shoulder.set(s * 0.28, 1.28, 0);
      hand.set(s * (0.53 + step * 0.12), 0.91 + (0.5 + step * 0.5) * 0.26, 0.15);
      hand.y += (s < 0 ? call : 0) * (0.35 + 0.25 * Math.sin(dance)) * amount;
      handTarget.set(s * 0.56, 1.40 + 0.25 * motion, 0.18);
      hand.lerp(handTarget, together);
      if (s > 0) {
        // Keep the star held while the free arm balances the glide.
        handTarget.copy(leftGrip);
        if (cycle >= 0.94) handTarget.copy(star.position).applyMatrix4(inverseLeft);
        hand.lerp(handTarget, leftReach);
      }
      if (s < 0) {
        handTarget.set(-0.47, 0.97, 0.12 + Math.sin(moonPhase) * 0.12 * amount);
        hand.lerp(handTarget, moonwalk);
        handTarget.set(-0.66, 1.40 + (0.5 + 0.5 * Math.sin(dance)) * 0.40 * amount, 0.20);
        hand.lerp(handTarget, cyanSolo);
      }
      elbow.copy(shoulder).lerp(hand, 0.5); elbow.x += s * 0.13; elbow.z -= 0.07;
      robotWaveArm(s, -0.85, waveCrest, robotWave, amount);
      connect(limb.upper, shoulder, elbow); connect(limb.forearm, elbow, hand);
      limb.elbow.position.copy(elbow); limb.hand.position.copy(hand);
      hip.set(s * 0.16, 0.78, 0);
      foot.set(s * 0.23 + step * 0.07, 0.10 + Math.max(0, step) * 0.065, 0.10 + step * 0.10);
      moonwalkFoot(limb, actor, moonPhase, moonwalk, amount);
      knee.copy(hip).lerp(foot, 0.5); knee.z += 0.10;
      connect(limb.thigh, hip, knee); connect(limb.shin, knee, foot); limb.foot.position.copy(foot);
    }
    // Pink answers cyan's raised-arm phrase, then both settle into the same
    // Shared steps and a hands-up finish before the next exchange.
    for (const limb of buddyLimbs) {
      const s = limb.side, wave = Math.sin(groove + s * 1.2);
      const ownStep = Math.sin(dance + s * Math.PI / 2) * amount;
      const sameStep = Math.sin(dance + (s < 0 ? Math.PI : 0)) * amount;
      const step = THREE.MathUtils.lerp(ownStep, sameStep, together);
      shoulder.set(s * 0.28, 1.28, 0);
      hand.set(s * (0.55 + Math.cos(groove + s) * amount * 0.11), 1.30 + wave * amount * 0.65, 0.16 + Math.cos(groove + s) * amount * 0.14);
      if (s > 0) hand.y += response * (0.20 + 0.15 * Math.sin(dance)) * amount;
      handTarget.set(s * 0.56, 1.40 + 0.25 * motion, 0.18);
      hand.lerp(handTarget, together);
      handTarget.set(s * 0.47, 0.97, 0.12 + Math.sin(moonPhase + Math.PI) * s * 0.12 * amount);
      hand.lerp(handTarget, moonwalk);
      if (s > 0) {
        handTarget.set(0.52 + Math.cos(dance * 0.5) * 0.16 * amount,
          1.20 + Math.sin(dance * 0.5) * 0.50 * amount, 0.25);
        hand.lerp(handTarget, response);
      }
      if (s < 0) hand.lerp(rightTarget, rightReach);
      elbow.copy(shoulder).lerp(hand, 0.5); elbow.x += s * 0.13; elbow.z -= 0.07;
      robotWaveArm(s, 0.85, waveCrest, robotWave, amount);
      connect(limb.upper, shoulder, elbow); connect(limb.forearm, elbow, hand);
      limb.hand.position.copy(hand); limb.hand.rotation.z = wave * amount * 0.5; limb.elbow.position.copy(elbow);
      hip.set(s * 0.16, 0.78, 0);
      foot.set(s * THREE.MathUtils.lerp(0.25, 0.23, together) + step * THREE.MathUtils.lerp(0.11, 0.07, together),
        0.10 + Math.max(0, step) * THREE.MathUtils.lerp(0.10, 0.065, together),
        0.10 + step * THREE.MathUtils.lerp(-0.17, 0.10, together));
      moonwalkFoot(limb, buddy, moonPhase + Math.PI, moonwalk, amount);
      const kick = Math.max(0, Math.sin(dance * 0.5 + (s < 0 ? Math.PI : 0))) * response * amount;
      foot.y += kick * 0.24; foot.z += kick * 0.32;
      knee.copy(hip).lerp(foot, 0.5); knee.z += 0.13;
      connect(limb.thigh, hip, knee); connect(limb.shin, knee, foot);
      limb.foot.position.copy(foot); limb.foot.rotation.y = step * 0.40 * (1 - together) * (1 - moonwalk);
    }
    light = pulse(light, 0.85 + together * 0.15 + drive * 0.15, dt, reduced);
    gold.emissiveIntensity = light;
    for (let i = 0; i < sparkles.length; i++) {
      const a = time * 0.7 + i * Math.PI * 2 / sparkles.length;
      const r = owner === 'air' ? 0.32 : 0.27;
      sparkleOffset.set(Math.cos(a) * r, Math.sin(a) * r, -0.08);
      sparkles[i].position.copy(star.position).add(sparkleOffset);
      sparkles[i].rotation.z = -a;
    }
    for (const m of holograms) { m.uniforms.clock.value = time; m.uniforms.strength.value = light; }
    for (const m of beamMaterials) m.uniforms.glow.value = light;
    ringMat.opacity = buddyRingMat.opacity = 0.35 + (light - 0.85) * 0.2;
    // Catch bursts are triggered once on landing, with a soft fade, never a flash.
    if (step > 0) {
      burstAge += step;
      if (lastOwner === 'air' && owner !== 'air') {
        burstAge = 0; burstOrigin.copy(star.position); catches++;
      }
      lastOwner = owner;
    }
    root.userData.catches = catches;
    const progress = Math.min(1, burstAge / 0.9);
    burst.visible = progress < 1 && drive > 0.05;
    burstMaterial.opacity = Math.sin(progress * Math.PI) * 0.65 * drive * (reduced ? 0.30 : 1);
    for (let i = 0; i < 16; i++) {
      const a = i * Math.PI * 2 / 16, radius = (0.12 + progress * 0.48) * (reduced ? 0.35 : 1);
      effectPose.position.copy(burstOrigin).add(sparkleOffset.set(Math.cos(a) * radius,
        Math.sin(a) * radius * 0.65 + progress * 0.12, Math.sin(a * 3) * radius * 0.3));
      effectPose.rotation.set(0, 0, a + progress); effectPose.scale.setScalar(0.07 * (1 - progress * 0.6));
      effectPose.updateMatrix(); burst.setMatrixAt(i, effectPose.matrix);
    }
    burst.instanceMatrix.needsUpdate = true;
    if (step > 0 || !trailReady) {
      trailClock += step;
      if (trailClock >= 0.05 || !trailReady) {
        trailClock %= 0.05;
        trailSources.forEach((source, i) => {
          source.updateMatrix(); trailMatrix.multiplyMatrices(source.parent.matrix, source.matrix);
          const history = trailHistory[i];
          if (!trailReady) history.forEach(matrix => matrix.copy(trailMatrix));
          else { for (let j = 4; j > 0; j--) history[j].copy(history[j - 1]); history[0].copy(trailMatrix); }
        });
        trailReady = true;
      }
    }
    trailLayers.forEach((layer, age) => {
      layer.visible = !reduced && drive > 0.10;
      layer.material.opacity = (4 - age) * 0.025 * drive;
      trailHistory.forEach((history, i) => layer.setMatrixAt(i, history[age + 1]));
      layer.instanceMatrix.needsUpdate = true;
    });
  }
  update({}, null, 0, false);
  function dispose() {
    parent.remove(root);
    replaced.forEach((o, i) => { o.visible = visibility[i]; });
    trailLayers.forEach(layer => layer.dispose()); burst.dispose();
    geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose());
  }
  return { name, root, update, dispose, get brightness() { return [light]; } };
}
