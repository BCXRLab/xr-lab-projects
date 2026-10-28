import * as THREE from 'three';

// Shared stage geometry limits. The stage group's origin is the floor at centre stage and its
// front (+z) faces the audience. Every visualizer must stay upstage (stage-local z < 0) and inside
// the deck footprint (horizontal radius <= DECK_R), so nothing ever blocks the view of the performer.
export const DECK_R = 2.8;
export const DECK_H = 0.5;
// Upstage arc, in the x = cos(a) * r, z = sin(a) * r convention: a = 270 deg is straight upstage (-z).
export const ARC_START = THREE.MathUtils.degToRad(270 - 80);
export const ARC_LEN = THREE.MathUtils.degToRad(160);

export function arcAngle(u, start = ARC_START, len = ARC_LEN) { return start + u * len; }

// One-pole smoothing toward a target with separate rise and fall rates (1/s). Used for every
// brightness value so light changes are smooth ramps, never hard flashes (photosensitivity).
// maxRate caps the change per second, so a full swing always takes a fraction of a second.
export function smoothTo(cur, target, dt, rise = 6, fall = 3, maxRate = Infinity) {
  const k = 1 - Math.exp(-dt * (target > cur ? rise : fall));
  const step = (target - cur) * k, cap = maxRate * dt;
  return cur + Math.max(-cap, Math.min(cap, step));
}

// Brightness rates: normal and reduced motion (softer, slower pulses). Tuned against square-wave
// input from 0.5 to 10 Hz: at most 1.5 flashes (10% swings) in any 1 s window, fewer with reduced motion.
export const PULSE = { rise: 3, fall: 1.5, maxRate: 0.3 };
export const PULSE_REDUCED = { rise: 1.5, fall: 1, maxRate: 0.15 };
export const pulse = (cur, target, dt, reduced) => {
  const R = reduced ? PULSE_REDUCED : PULSE;
  return smoothTo(cur, target, dt, R.rise, R.fall, R.maxRate);
};

// Punchier band follow for Laser / LED Wall / Ribbon. Still smoothed (no hard strobe);
// a full 0..1 swing takes ~0.35 s. Reduced motion keeps the slow cap.
export const KICK = { rise: 18, fall: 9, maxRate: 2.6 };
export const KICK_REDUCED = { rise: 2, fall: 1.2, maxRate: 0.2 };
export const kick = (cur, target, dt, reduced) => {
  const R = reduced ? KICK_REDUCED : KICK;
  return smoothTo(cur, target, dt, R.rise, R.fall, R.maxRate);
};

// How hard this frame should bump. Once tempo locks, `levels.beat` is a full
// peak on every grid beat, including rests. Weight it by the current level so
// a quiet bar, like the space between piano notes, does not keep bumping.
// Reduced motion keeps a small fraction so the hit is still there, but gentle.
export function beatDrive(levels, reduced) {
  const b = Math.max(0, (levels && levels.beat) || 0);
  const body = Math.min(1, Math.max((levels && levels.bass) || 0, (levels && levels.energy) || 0));
  const weight = body * body;
  const punch = b * weight;
  return reduced ? Math.min(0.22, punch * 0.16) : punch;
}

// Beats per second once tempo has locked, otherwise 0 so callers keep their idle rate.
export function tempoBps(levels) {
  const bpm = (levels && levels.bpm) || 0;
  return (bpm > 45 && bpm < 210) ? bpm / 60 : 0;
}
