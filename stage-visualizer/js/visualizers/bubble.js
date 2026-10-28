import * as THREE from 'three';
import { smoothTo, pulse, DECK_H } from './common.js';

export const name = 'Bubble';

// One elastic soap film centered horizontally, behind the performer.
// The swirl stays on its own clock. Music only scales the whole bubble.
export function create(parent) {
  const root = new THREE.Group();
  root.name = 'viz-bubble';
  root.position.set(0, 1.7, -1.2);
  const geometry = new THREE.SphereGeometry(1, 64, 40);
  const position = geometry.attributes.position;
  position.setUsage(THREE.DynamicDrawUsage);
  const directions = new Float32Array(position.array);
  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.FrontSide,
    uniforms: { phase: { value: 0 }, glow: { value: 0.65 } },
    vertexShader: `
      varying vec3 surface;
      varying vec3 viewPosition;
      void main() {
        surface = position;
        vec4 p = modelViewMatrix * vec4(position, 1.0);
        viewPosition = p.xyz;
        gl_Position = projectionMatrix * p;
      }
    `,
    fragmentShader: `
      uniform float phase;
      uniform float glow;
      varying vec3 surface;
      varying vec3 viewPosition;
      void main() {
        // Derivatives keep reflections attached to the actual wobbling film.
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
        gl_FragColor = vec4(color, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.frustumCulled = false;
  root.add(mesh);
  parent.add(root);
  let time = 0, pressure = 0, energy = 0, swell = 0, motion = 1, light = 0.65, pauseBlend = 0;

  function update(levels, waveform, dt, reduced) {
    dt = Math.max(0, Math.min(dt, 0.1));
    // Soften transitions into accessibility modes, including existing deformations.
    motion = smoothTo(motion, reduced ? 0.18 : 1, dt, 3, 3, 2);
    time += dt * (reduced ? 0.22 : 1);
    pressure = smoothTo(pressure, THREE.MathUtils.clamp(levels.bass || 0, 0, 1), dt, 5, 2, reduced ? 0.2 : 1.5);
    energy = smoothTo(energy, THREE.MathUtils.clamp(levels.energy || 0, 0, 1), dt, 4, 2, reduced ? 0.15 : 0.8);
    // Whole-object scale. Nothing playing sits at half the original film.
    // A full level at the 100% Reactivity slider grows to about 1.15, fifteen
    // percent past that film. The slider can push a little past that. Bass and
    // energy are already multiplied by the slider. The beat clock is not used.
    const heard = Math.min(1.25, (levels.bass || 0) * 0.7 + (levels.energy || 0) * 0.45);
    swell = smoothTo(swell, heard, dt, reduced ? 1.5 : 9, reduced ? 1 : 4, reduced ? 0.25 : 3.2);
    // While paused, pull back to the quiet film even if a stale level is still set.
    // Playback clears the flag and the live scale returns.
    pauseBlend = smoothTo(pauseBlend, levels.paused ? 1 : 0, dt, 3, 4, 1.1);
    const drive = 1 - pauseBlend;
    const scale = (reduced ? 0.94 + swell * 0.21 : 0.5 + swell * 0.63) * drive + 0.5 * pauseBlend;
    // A slow inhale builds tension. Traveling lobes and small ripples make the
    // membrane feel close to bursting, then it relaxes without a flash or cut.
    const breath = 0.5 - 0.5 * Math.cos(time * 1.35);
    const tension = (breath * 0.55 + pressure * drive * 0.45) * motion;
    const squeeze = Math.sin(time * 2.2) * 0.065 * motion;
    root.scale.setScalar(scale);
    // Lift only if a large scale would sink through the deck. Half size stays put.
    const lowest = 1.7 - 1.18 * scale;
    root.position.y = 1.7 + Math.max(0, DECK_H + 0.06 - lowest);
    for (let i = 0; i < position.count; i++) {
      const o = i * 3, x = directions[o], y = directions[o + 1], z = directions[o + 2];
      const lobes = Math.sin(x * 3.6 + y * 2.4 + time * 2.0)
        * Math.cos(z * 3.2 - y * 1.8 - time * 1.55);
      const ripple = Math.sin(x * 10.0 - z * 7.0 + y * 6.0 + time * 6.0);
      const radius = 0.88 * (1 + tension * 0.17
        + lobes * (0.075 + tension * 0.15) * motion
        + ripple * 0.022 * tension * (0.3 + energy * drive));
      let px = x * radius * (1 + squeeze);
      let py = y * radius * (1 - squeeze * 1.4);
      let pz = z * radius;
      const limit = Math.min(1, 1.18 / Math.hypot(px, py, pz));
      position.setXYZ(i, px * limit, py * limit, pz * limit);
    }
    position.needsUpdate = true;
    material.uniforms.phase.value = time * 0.16;
    light = pulse(light, 0.65 + energy * drive * 0.25 + Math.min(swell, 1) * drive * 0.12, dt, reduced);
    material.uniforms.glow.value = light;
  }

  // Initialize the constrained mesh before its first render or QA pass.
  update({ bass: 0, energy: 0 }, null, 0, false);
  function dispose() {
    parent.remove(root);
    geometry.dispose();
    material.dispose();
  }
  return { name, root, update, dispose, get brightness() { return [light]; } };
}
