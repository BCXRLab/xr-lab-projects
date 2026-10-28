import * as THREE from 'three';

// Desktop / tablet audience camera. Default is the seated sway looking at the stage.
// WASD or the virtual stick walks on the floor; Q/E yaw, R/F pitch, swipe, or right-mouse looks.
// Forward and right are read from the camera every frame (y-up, right = forward × up).

const EYE = 1.7;
const SPEED = 2.6;
const MAX_R = 16;
const UP = new THREE.Vector3(0, 1, 0);
const STAGE_DIST = 6;
const UI_BLOCK = '.virtual-joystick, #ui, #settings, #chrome, .fab, .skip, .captions, button, a, input, select, textarea, label, dialog';

export function createDesktopView(camera, renderer) {
  const fwd = new THREE.Vector3();
  const right = new THREE.Vector3();
  let x = 0, z = 0, yaw = 0, pitch = 0;
  let driven = false;
  const keys = new Set();
  let lookId = null, lookX = 0, lookY = 0, looking = false, didDrag = false;

  function reset() {
    driven = false;
    x = 0; z = 0; yaw = 0; pitch = 0;
    keys.clear();
    looking = false; lookId = null; didDrag = false;
  }

  function takeControl() {
    if (driven) return;
    driven = true;
    x = camera.position.x;
    z = camera.position.z;
    camera.getWorldDirection(fwd);
    const horiz = Math.hypot(fwd.x, fwd.z) || 1;
    yaw = Math.atan2(-fwd.x, -fwd.z);           // -z front
    pitch = -Math.atan2(fwd.y, horiz);          // +x rotation looks down
  }

  function look(dx, dy, sens) {
    takeControl();
    yaw -= dx * sens;
    pitch = THREE.MathUtils.clamp(pitch - dy * sens, -1.15, 1.15);
  }

  function applyLook(dt) {
    let dyaw = 0, dpitch = 0;
    if (keys.has('KeyQ')) dyaw += 1;
    if (keys.has('KeyE')) dyaw -= 1;
    if (keys.has('KeyR')) dpitch -= 1;
    if (keys.has('KeyF')) dpitch += 1;
    if (!dyaw && !dpitch) return;
    takeControl();
    yaw += dyaw * 1.4 * dt;
    pitch = THREE.MathUtils.clamp(pitch + dpitch * 1.0 * dt, -1.15, 1.15);
  }

  function applyMove(mx, my, dt) {
    if (!mx && !my) return;
    takeControl();
    camera.getWorldDirection(fwd);
    fwd.y = 0;
    if (fwd.lengthSq() < 1e-8) fwd.set(0, 0, -1);
    fwd.normalize();
    right.crossVectors(fwd, UP);                // forward × up = right
    x += (fwd.x * my + right.x * mx) * SPEED * dt;
    z += (fwd.z * my + right.z * mx) * SPEED * dt;
    const r = Math.hypot(x, z);
    if (r > MAX_R) { x *= MAX_R / r; z *= MAX_R / r; }
  }

  function sampleKeys() {
    let mx = 0, my = 0;
    if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
    if (keys.has('KeyW') || keys.has('ArrowUp')) my += 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) my -= 1;
    if (mx && my) { const n = Math.hypot(mx, my); mx /= n; my /= n; }
    return { moveX: mx, moveY: my };
  }

  function isTyping(el) {
    const tag = el?.tagName;
    return tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA' || el?.isContentEditable;
  }

  function onKeyDown(e) {
    if (renderer.xr.isPresenting || isTyping(e.target)) return;
    if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyQ', 'KeyE', 'KeyR', 'KeyF',
         'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
      keys.add(e.code);
      e.preventDefault();
    }
  }
  function onKeyUp(e) { keys.delete(e.code); }

  function uiBlock(t) { return Boolean(t?.closest?.(UI_BLOCK)); }

  function onLookDown(e) {
    if (renderer.xr.isPresenting || uiBlock(e.target)) return;
    const touch = e.pointerType === 'touch' || e.pointerType === 'pen';
    if (e.button === 2) {
      looking = true; didDrag = true; lookId = e.pointerId; lookX = e.clientX; lookY = e.clientY;
      e.preventDefault();
      return;
    }
    if (e.button !== 0) return;
    if (!touch && !(navigator.maxTouchPoints > 1)) return;
    looking = true; didDrag = false; lookId = e.pointerId; lookX = e.clientX; lookY = e.clientY;
  }
  function onLookMove(e) {
    if (!looking || e.pointerId !== lookId || renderer.xr.isPresenting) return;
    const dx = e.clientX - lookX, dy = e.clientY - lookY;
    if (!didDrag && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) didDrag = true;
    if (!didDrag && e.buttons !== 2) return;
    const mx = e.movementX || dx, my = e.movementY || dy;
    lookX = e.clientX; lookY = e.clientY;
    const sens = (e.pointerType === 'touch' || e.pointerType === 'pen') ? 0.0045 : 0.0024;
    look(mx, my, sens);
  }
  function onLookUp(e) {
    if (e && lookId != null && e.pointerId !== lookId) return;
    looking = false; lookId = null;
  }

  addEventListener('keydown', onKeyDown);
  addEventListener('keyup', onKeyUp);
  addEventListener('blur', () => keys.clear());
  addEventListener('contextmenu', e => { if (!uiBlock(e.target)) e.preventDefault(); });
  addEventListener('pointerdown', onLookDown);
  addEventListener('pointermove', onLookMove);
  addEventListener('pointerup', onLookUp);
  addEventListener('pointercancel', onLookUp);

  function update(time, swayOn) {
    if (!driven && swayOn) {
      const a = Math.sin(time * (Math.PI * 2 / 8)) * THREE.MathUtils.degToRad(12);
      camera.position.set(Math.sin(a) * STAGE_DIST, EYE, -STAGE_DIST + Math.cos(a) * STAGE_DIST);
      camera.lookAt(0, 1.2, -STAGE_DIST);
      return;
    }
    if (!driven) {
      camera.position.set(0, EYE, 0);
      camera.lookAt(0, 1.2, -STAGE_DIST);
      return;
    }
    camera.position.set(x, EYE, z);
    camera.rotation.set(pitch, yaw, 0, 'YXZ');
  }

  return {
    reset, applyMove, applyLook, sampleKeys, update,
    get driven() { return driven; },
    get position() { return { x, z, yaw, pitch }; },
  };
}
