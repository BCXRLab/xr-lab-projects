import * as THREE from 'three';

// Wrist control panel for XR. Aim with the other controller's ray; hold trigger to
// click buttons or drag the reactivity / brightness sliders.
// Main page: tracks, visualizers, sliders. Settings page: accessibility toggles.

const CW = 560, CH = 520;
const W = 0.32, H = 0.297;
function r3(x, y, w, h) {
  return {
    x: ((x + w * 0.5) / CW - 0.5) * W,
    y: (0.5 - (y + h * 0.5) / CH) * H,
    w: w / CW * W,
    h: h / CH * H,
  };
}

const MAIN = [
  { id: 'prevTrack', label: 'Prev track', ...r3(16, 150, 168, 50) },
  { id: 'play', label: 'Play/Pause', ...r3(196, 150, 168, 50) },
  { id: 'nextTrack', label: 'Next track', ...r3(376, 150, 168, 50) },
  { id: 'prevViz', label: 'Prev viz', ...r3(16, 210, 168, 50) },
  { id: 'settings', label: 'Settings', ...r3(196, 210, 168, 50) },
  { id: 'nextViz', label: 'Next viz', ...r3(376, 210, 168, 50) },
];
const SLIDERS = [
  { id: 'reactivity', label: 'Reactivity', ...r3(16, 286, 528, 52) },
  { id: 'brightness', label: 'Brightness', ...r3(16, 360, 528, 52) },
];
const SETTINGS = [
  { id: 'toggleReduced', label: 'Reduced motion', ...r3(16, 110, 252, 52) },
  { id: 'toggleContrast', label: 'High contrast', ...r3(292, 110, 252, 52) },
  { id: 'toggleCaptions', label: 'Captions', ...r3(16, 176, 252, 52) },
  { id: 'toggleSoft', label: 'Soft visuals', ...r3(292, 176, 252, 52) },
  { id: 'togglePause', label: 'Pause visuals', ...r3(16, 242, 252, 52) },
  { id: 'back', label: 'Back', ...r3(292, 242, 252, 52) },
];

function makeCanvas() {
  const c = document.createElement('canvas');
  c.width = CW; c.height = CH;
  return c;
}

export function createWristPanel(hooks = {}) {
  const group = new THREE.Group();
  group.name = 'wrist-panel';
  group.visible = false;

  const canvas = makeCanvas();
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.LinearFilter;
  const plate = new THREE.Mesh(
    new THREE.PlaneGeometry(W, H),
    new THREE.MeshBasicMaterial({ map: tex, transparent: false, side: THREE.DoubleSide }),
  );
  plate.position.z = 0;
  group.add(plate);

  const idle = new THREE.MeshBasicMaterial({ color: 0x1a4a8c, transparent: true, opacity: 0.15 });
  const hoverMat = new THREE.MeshBasicMaterial({ color: 0xf2c01e, transparent: true, opacity: 0.45 });
  const pages = { main: [], settings: [] };
  function addBtns(defs, key) {
    for (const def of defs) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(def.w, def.h), idle.clone());
      m.position.set(def.x, def.y, 0.002);
      m.userData.uiButton = true;
      m.userData.action = def.id;
      m.userData.label = def.label;
      m.visible = key === 'main';
      group.add(m);
      pages[key].push(m);
    }
  }
  addBtns(MAIN, 'main');
  addBtns(SETTINGS, 'settings');

  const sliderMeshes = [];
  for (const def of SLIDERS) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(def.w, def.h), idle.clone());
    m.position.set(def.x, def.y, 0.002);
    m.userData.slider = true;
    m.userData.sliderId = def.id;
    m.userData.trackW = def.w;
    m.userData.label = def.label;
    m.visible = true;
    group.add(m);
    pages.main.push(m);
    sliderMeshes.push(m);
  }

  group.position.set(0.02, 0.09, 0.03);
  group.rotation.set(-0.85, 0, 0);

  let page = 'main';
  let title = '', credit = '', vizName = '', playing = false, dirty = true;
  let opts = { reduced: false, contrast: false, captions: false, soft: false, pause: false, react: 100, bright: 100 };
  const ctx = canvas.getContext('2d');

  function setPage(p) {
    page = p === 'settings' ? 'settings' : 'main';
    pages.main.forEach(m => { m.visible = page === 'main'; });
    pages.settings.forEach(m => { m.visible = page === 'settings'; });
    dirty = true;
  }

  function setInfo(info) {
    if (info.title !== undefined) title = info.title;
    if (info.credit !== undefined) credit = info.credit;
    if (info.vizName !== undefined) vizName = info.vizName;
    if (info.playing !== undefined) playing = info.playing;
    if (info.settings) opts = { ...opts, ...info.settings };
    dirty = true;
  }

  function paint() {
    if (!dirty) return;
    dirty = false;
    const x = ctx;
    const hi = opts.contrast;
    x.fillStyle = hi ? '#000' : '#0a1220'; x.fillRect(0, 0, CW, CH);
    x.fillStyle = hi ? '#ff0' : '#00aeef'; x.fillRect(0, 0, CW, 6);
    const ink = hi ? '#fff' : '#e8ecf4';
    const mute = hi ? '#eee' : '#8fa3c7';
    if (page === 'main') {
      x.fillStyle = ink; x.font = 'bold 26px system-ui,sans-serif';
      x.fillText(clip(x, title || 'Stage Visualizer', 528), 16, 44);
      x.fillStyle = mute; x.font = '16px system-ui,sans-serif';
      x.fillText(clip(x, credit || '', 528), 16, 70);
      x.fillStyle = hi ? '#ff0' : '#aab720'; x.font = 'bold 20px system-ui,sans-serif';
      x.fillText(vizName || '', 16, 100);
      x.font = 'bold 18px system-ui,sans-serif';
      drawBtn(x, 16, 150, 168, 50, 'Prev track', hi);
      drawBtn(x, 196, 150, 168, 50, playing ? 'Pause' : 'Play', hi);
      drawBtn(x, 376, 150, 168, 50, 'Next track', hi);
      drawBtn(x, 16, 210, 168, 50, 'Prev viz', hi);
      drawBtn(x, 196, 210, 168, 50, 'Settings', hi);
      drawBtn(x, 376, 210, 168, 50, 'Next viz', hi);
      drawSlider(x, 16, 286, 528, 52, 'Reactivity', opts.react ?? 100, hi);
      drawSlider(x, 16, 360, 528, 52, 'Brightness', opts.bright ?? 100, hi);
    } else {
      x.fillStyle = ink; x.font = 'bold 28px system-ui,sans-serif';
      x.fillText('Settings', 16, 48);
      x.fillStyle = mute; x.font = '18px system-ui,sans-serif';
      x.fillText('Same options as the 2D menu', 16, 78);
      x.font = 'bold 18px system-ui,sans-serif';
      drawBtn(x, 16, 110, 252, 52, 'Reduced ' + (opts.reduced ? 'ON' : 'off'), hi);
      drawBtn(x, 292, 110, 252, 52, 'Contrast ' + (opts.contrast ? 'ON' : 'off'), hi);
      drawBtn(x, 16, 176, 252, 52, 'Captions ' + (opts.captions ? 'ON' : 'off'), hi);
      drawBtn(x, 292, 176, 252, 52, 'Soft vis ' + (opts.soft ? 'ON' : 'off'), hi);
      drawBtn(x, 16, 242, 252, 52, 'Pause vis ' + (opts.pause ? 'ON' : 'off'), hi);
      drawBtn(x, 292, 242, 252, 52, 'Back', hi);
    }
    tex.needsUpdate = true;
  }

  const raycaster = new THREE.Raycaster();
  const origin = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const quat = new THREE.Quaternion();
  const localHit = new THREE.Vector3();
  let hovered = null;
  let dragging = null;

  function liveTargets() { return page === 'main' ? pages.main : pages.settings; }

  function aimFrom(controller) {
    controller.getWorldPosition(origin);
    controller.getWorldQuaternion(quat);
    dir.set(0, 0, -1).applyQuaternion(quat);
    raycaster.set(origin, dir);
    const hits = raycaster.intersectObjects(liveTargets(), false);
    return hits[0] || null;
  }

  function setHover(mesh) {
    if (hovered === mesh) return;
    if (hovered) hovered.material = idle;
    hovered = mesh;
    if (hovered) hovered.material = hoverMat;
  }

  function hover(controller) {
    if (!group.visible) { setHover(null); return null; }
    const hit = aimFrom(controller);
    setHover(hit?.object || null);
    return hit?.object || null;
  }

  function tryClick(controller) {
    if (!group.visible || dragging) return null;
    const hit = aimFrom(controller);
    if (!hit) return null;
    if (hit.object.userData.slider) {
      applySliderHit(hit.object, hit.point);
      return null;
    }
    return hit.object.userData.action || null;
  }

  function hitsPanel(controller) {
    if (!group.visible) return false;
    controller.getWorldPosition(origin);
    controller.getWorldQuaternion(quat);
    dir.set(0, 0, -1).applyQuaternion(quat);
    raycaster.set(origin, dir);
    return raycaster.intersectObject(plate, false).length > 0 || !!aimFrom(controller);
  }

  function valueFromPoint(mesh, pointWorld) {
    localHit.copy(pointWorld);
    mesh.worldToLocal(localHit);
    const half = mesh.userData.trackW * 0.5;
    const t = (localHit.x / half + 1) * 0.5;
    return Math.max(0, Math.min(1, t)) * 200;
  }

  function applySliderHit(mesh, pointWorld) {
    const v = valueFromPoint(mesh, pointWorld);
    hooks.onSlider?.(mesh.userData.sliderId, v);
  }

  function beginDrag(controller) {
    if (!group.visible) return false;
    const hit = aimFrom(controller);
    if (!hit?.object.userData.slider) return false;
    dragging = { mesh: hit.object, controller };
    applySliderHit(hit.object, hit.point);
    return true;
  }

  function updateDrag() {
    if (!dragging) return false;
    const hit = aimFrom(dragging.controller);
    if (hit?.object === dragging.mesh) {
      applySliderHit(dragging.mesh, hit.point);
      return true;
    }
    // Keep dragging along the same track even if the ray leaves the mesh slightly:
    // intersect the plate and map x in the slider's local frame.
    dragging.controller.getWorldPosition(origin);
    dragging.controller.getWorldQuaternion(quat);
    dir.set(0, 0, -1).applyQuaternion(quat);
    raycaster.set(origin, dir);
    const plateHits = raycaster.intersectObject(plate, false);
    if (plateHits[0]) {
      applySliderHit(dragging.mesh, plateHits[0].point);
      return true;
    }
    return true;
  }

  function endDrag() {
    const was = !!dragging;
    dragging = null;
    return was;
  }

  function layoutOnHand(handedness) {
    const inward = handedness === 'right' ? -0.02 : 0.02;
    group.position.set(inward, 0.09, 0.03);
    group.rotation.set(-0.85, 0, 0);
  }

  return {
    group, setInfo, setPage, paint, hover, tryClick, hitsPanel,
    beginDrag, updateDrag, endDrag, layoutOnHand,
    get page() { return page; },
    get dragging() { return !!dragging; },
  };
}

function clip(ctx, text, maxW) {
  if (ctx.measureText(text).width <= maxW) return text;
  let s = text;
  while (s.length && ctx.measureText(s + '…').width > maxW) s = s.slice(0, -1);
  return s + '…';
}

function drawBtn(x, x0, y0, w, h, label, hi) {
  x.fillStyle = hi ? '#000' : '#003d79';
  x.fillRect(x0, y0, w, h);
  x.strokeStyle = hi ? '#ff0' : '#00aeef'; x.lineWidth = 2; x.strokeRect(x0, y0, w, h);
  x.fillStyle = hi ? '#ff0' : '#e8ecf4';
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(label, x0 + w / 2, y0 + h / 2);
  x.textAlign = 'left'; x.textBaseline = 'alphabetic';
}

function drawSlider(x, x0, y0, w, h, label, pct, hi) {
  const ink = hi ? '#fff' : '#e8ecf4';
  x.fillStyle = ink;
  x.font = 'bold 16px system-ui,sans-serif';
  x.textAlign = 'left'; x.textBaseline = 'alphabetic';
  x.fillText(label + '  ' + Math.round(pct) + '%', x0, y0 + 16);
  const trackY = y0 + 22, trackH = h - 26;
  x.fillStyle = hi ? '#222' : '#162f57';
  x.fillRect(x0, trackY, w, trackH);
  x.strokeStyle = hi ? '#ff0' : '#00aeef'; x.lineWidth = 2;
  x.strokeRect(x0, trackY, w, trackH);
  const fillW = (Math.max(0, Math.min(200, pct)) / 200) * w;
  x.fillStyle = hi ? '#ff0' : '#00aeef';
  x.fillRect(x0, trackY, fillW, trackH);
  const tx = x0 + fillW;
  const ty = trackY + trackH * 0.5;
  x.fillStyle = hi ? '#fff' : '#f2c01e';
  x.beginPath();
  x.arc(tx, ty, trackH * 0.55, 0, Math.PI * 2);
  x.fill();
  x.strokeStyle = hi ? '#ff0' : '#003d79'; x.lineWidth = 2; x.stroke();
}
