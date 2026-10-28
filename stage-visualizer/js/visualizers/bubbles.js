import * as THREE from 'three';
import { smoothTo, pulse, DECK_H } from './common.js';

export const name = 'Bubbles';

// Many small copies of the Bubble film, scattered through the stage volume.
// Stage frame: x = cos(a) * r, z = sin(a) * r. a = 90° is downstage (+z).
// Each one is about a fifth of the big bubble. Music scales the whole bubble,
// the same way as Bubble. The beat clock is not used.
// A bubble fades out, then appears somewhere else and fades in. The jump
// happens only while it is invisible, and the fade is rate-capped.
const COUNT = 16;
const FIFTH = 0.2;
const MIN_R = 0.72;
const MAX_R = 2.05;
const MIN_Y = 1.05;
const MAX_Y = 2.35;

const VERT = `
  uniform float uTime;
  uniform float uMotion;
  uniform float uTension;
  uniform float uSqueeze;
  uniform float uRippleAmt;
  varying vec3 surface;
  varying vec3 viewPosition;
  void main() {
    vec3 d = normalize(position);
    float lobes = sin(d.x * 3.6 + d.y * 2.4 + uTime * 2.0)
      * cos(d.z * 3.2 - d.y * 1.8 - uTime * 1.55);
    float ripple = sin(d.x * 10.0 - d.z * 7.0 + d.y * 6.0 + uTime * 6.0);
    float radius = 0.88 * (1.0 + uTension * 0.17
      + lobes * (0.075 + uTension * 0.15) * uMotion
      + ripple * 0.022 * uTension * uRippleAmt);
    vec3 p = vec3(
      d.x * radius * (1.0 + uSqueeze),
      d.y * radius * (1.0 - uSqueeze * 1.4),
      d.z * radius
    );
    p *= min(1.0, 1.18 / length(p));
    surface = p;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    viewPosition = mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = `
  uniform float phase;
  uniform float glow;
  uniform float uFade;
  varying vec3 surface;
  varying vec3 viewPosition;
  void main() {
    vec3 n = normalize(cross(dFdx(viewPosition), dFdy(viewPosition)));
    vec3 eye = normalize(-viewPosition);
    float facing = max(0.0, dot(n, eye));
    float rim = pow(1.0 - facing, 2.6);
    float film = surface.y * 2.1 + surface.x * 0.8
      + sin(surface.z * 3.0 + phase) * 0.6 + facing * 3.0;
    vec3 rainbow = 0.52 + 0.48 * cos(film + vec3(0.0, 2.1, 4.2));
    vec3 reflected = reflect(-eye, n);
    float softbox = pow(max(0.0, dot(reflected, normalize(vec3(-0.5, 0.8, 1.0)))), 32.0);
    float streak = pow(max(0.0, dot(reflected, normalize(vec3(0.8, -0.2, 0.7)))), 70.0);
    vec3 color = rainbow * (0.4 + rim * 1.8) * glow;
    color += vec3(0.8, 0.95, 1.0) * (softbox * 1.6 + streak * 0.85);
    float alpha = clamp(0.24 + rim * 0.72 + softbox * 0.6 + streak * 0.35, 0.0, 0.96);
    gl_FragColor = vec4(color * uFade, alpha * uFade);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

// One home wedge per bubble, so the field stays all the way around the stage.
// A jump picks a new radius and height in that wedge. x = cos(a) * r,
// z = sin(a) * r, so a = 90° is downstage.
function scatter(i, salt = 0) {
  const base = ((i % COUNT) / COUNT) * Math.PI * 2;
  const a = base + (Math.random() - 0.5) * 0.85;
  const outer = (i + salt) % 2 === 0;
  const high = (Math.floor(salt / 2) + i) % 2 === 0;
  let r = outer ? 1.4 + Math.random() * 0.6 : MIN_R + Math.random() * 0.55;
  let y = high ? 1.85 + Math.random() * 0.45 : MIN_Y + Math.random() * 0.55;
  let x = Math.cos(a) * r;
  let z = Math.sin(a) * r;
  // Side towers sit near x = ±2.55, z = -0.45. Pull those spots inward.
  const dx = Math.abs(Math.abs(x) - 2.55);
  const dz = Math.abs(z + 0.45);
  if (dx < 0.75 && dz < 0.65) {
    const rad = Math.hypot(x, z) || 1;
    const pull = 1.55;
    x *= pull / rad;
    z *= pull / rad;
  }
  r = Math.hypot(x, z);
  if (r > MAX_R) { x *= MAX_R / r; z *= MAX_R / r; }
  if (r < MIN_R && r > 0) { x *= MIN_R / r; z *= MIN_R / r; }
  y = Math.min(MAX_Y, Math.max(MIN_Y, y));
  return { x, y, z };
}

function makeMaterial() {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.FrontSide,
    uniforms: {
      phase: { value: 0 },
      glow: { value: 0.65 },
      uFade: { value: 1 },
      uTime: { value: 0 },
      uMotion: { value: 1 },
      uTension: { value: 0 },
      uSqueeze: { value: 0 },
      uRippleAmt: { value: 0.3 },
    },
    vertexShader: VERT,
    fragmentShader: FRAG,
  });
}

export function create(parent) {
  const root = new THREE.Group();
  root.name = 'viz-bubbles';
  const geometry = new THREE.SphereGeometry(1, 48, 32);
  const bubbles = [];
  for (let i = 0; i < COUNT; i++) {
    const material = makeMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = 'small-bubble';
    mesh.frustumCulled = false;
    const at = scatter(i);
    mesh.position.set(at.x, at.y, at.z);
    root.add(mesh);
    bubbles.push({
      mesh,
      material,
      fade: 1,
      phase: 'hold',
      left: 1.2 + i * 0.45 + Math.random() * 1.4,
      jitter: 0.86 + Math.random() * 0.28,
      timeOff: Math.random() * 12,
    });
  }
  parent.add(root);

  let time = 0, pressure = 0, energy = 0, swell = 0, motion = 1, light = 0.65, pauseBlend = 0;

  function jump(b, i) {
    const at = scatter(i, 1 + Math.floor(Math.random() * 6));
    b.mesh.position.set(at.x, at.y, at.z);
  }

  function update(levels, waveform, dt, reduced) {
    dt = Math.max(0, Math.min(dt, 0.1));
    motion = smoothTo(motion, reduced ? 0.18 : 1, dt, 3, 3, 2);
    time += dt * (reduced ? 0.22 : 1);
    pressure = smoothTo(pressure, THREE.MathUtils.clamp(levels.bass || 0, 0, 1), dt, 5, 2, reduced ? 0.2 : 1.5);
    energy = smoothTo(energy, THREE.MathUtils.clamp(levels.energy || 0, 0, 1), dt, 4, 2, reduced ? 0.15 : 0.8);
    const heard = Math.min(1.25, (levels.bass || 0) * 0.7 + (levels.energy || 0) * 0.45);
    swell = smoothTo(swell, heard, dt, reduced ? 1.5 : 9, reduced ? 1 : 4, reduced ? 0.25 : 3.2);
    pauseBlend = smoothTo(pauseBlend, levels.paused ? 1 : 0, dt, 3, 4, 1.1);
    const drive = 1 - pauseBlend;
    // Same scale law as Bubble, then one fifth. Pause returns to the quiet fifth.
    const big = (reduced ? 0.94 + swell * 0.21 : 0.5 + swell * 0.63) * drive + 0.5 * pauseBlend;
    const scale = big * FIFTH;
    const breath = 0.5 - 0.5 * Math.cos(time * 1.35);
    const tension = (breath * 0.55 + pressure * drive * 0.45) * motion;
    const squeeze = Math.sin(time * 2.2) * 0.065 * motion;
    const rippleAmt = 0.3 + energy * drive;
    const fadeCap = reduced ? 0.28 : 0.8;
    light = pulse(light, 0.65 + energy * drive * 0.25 + Math.min(swell, 1) * drive * 0.12, dt, reduced);

    for (let i = 0; i < bubbles.length; i++) {
      const b = bubbles[i];
      if (levels.paused) {
        b.phase = 'hold';
        b.left = Math.max(b.left, 3);
        b.fade = smoothTo(b.fade, 1, dt, 2, 2, 0.7);
      } else {
        const target = b.phase === 'out' ? 0 : 1;
        b.fade = smoothTo(b.fade, target, dt, 8, 8, fadeCap);
        if (b.phase === 'hold') {
          b.left -= dt;
          if (b.left <= 0) b.phase = 'out';
        } else if (b.phase === 'out' && b.fade < 0.04) {
          jump(b, i);
          b.phase = 'in';
        } else if (b.phase === 'in' && b.fade > 0.97) {
          b.phase = 'hold';
          b.left = (reduced ? 9 : 3.2) + Math.random() * (reduced ? 8 : 4.2);
        }
      }
      b.mesh.scale.setScalar(scale * b.jitter);
      const u = b.material.uniforms;
      u.uFade.value = b.fade;
      u.uTime.value = time + b.timeOff;
      u.phase.value = (time + b.timeOff) * 0.16;
      u.glow.value = light;
      u.uMotion.value = motion;
      u.uTension.value = tension;
      u.uSqueeze.value = squeeze;
      u.uRippleAmt.value = rippleAmt;
    }
  }

  function dispose() {
    parent.remove(root);
    geometry.dispose();
    for (let i = 0; i < bubbles.length; i++) bubbles[i].material.dispose();
  }

  update({ bass: 0, energy: 0 }, null, 0, false);
  return { name, root, update, dispose, get brightness() { return [light]; } };
}
