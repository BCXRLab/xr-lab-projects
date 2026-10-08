const modelViewer = document.querySelector('#wingChunModel');
const timeline = document.querySelector('#timeline');
const playButton = document.querySelector('#playButton');
const previousButton = document.querySelector('#previousButton');
const nextButton = document.querySelector('#nextButton');
const currentTimeLabel = document.querySelector('#currentTime');
const durationLabel = document.querySelector('#duration');
const movementNumber = document.querySelector('#movementNumber');
const movementName = document.querySelector('#movementName');
const movementDescription = document.querySelector('#movementDescription');
const movementSelect = document.querySelector('#movementSelect');
const movementContext = document.querySelector('#movementContext');

// Timing and terminology supplied by the faculty member for the Siu Nim Tau avatar.
// Times are tied directly to the original animation.
const movements = [
  { start: 2, name: 'Double Tan Sau', description: 'Palm-up hands.' },
  { start: 3, name: 'Double Gan Sau', description: 'Splitting block low.' },
  { start: 4.5, name: 'Return to Double Tan Sau', description: 'Return to the double palm-up hand position.' },
  { start: 7, name: 'Single Sun Punch (Da)', description: 'Single Sun Punch.' },
  { start: 8, name: 'Huen Sau', description: 'Circling hands.' },
  { start: 10.5, name: 'Single Sun Punch (Da)', description: 'Single Sun Punch.' },
  { start: 12, name: 'Huen Sau and Sau Kuen', description: 'Circle the hand and return.' },
  { start: 15, name: 'Left Side Tan Sau', description: 'Tan Sau on the center line.' },
  { start: 16, name: 'Huen Sau', description: 'Circle the hand.' },
  { start: 17, name: 'Wu Sau', description: 'Move the defending hand back toward the body.' },
  { start: 18, name: 'Fook Sau', description: 'Bridging arm.' },
  { start: 20, name: 'Wu Sau', description: 'Defending hand.' },
  { start: 21, name: 'Fook Sau', description: 'Bridging arm.' },
  { start: 23, name: 'Wu Sau', description: 'Defending hand.' },
  { start: 24, name: 'Pak Sau', description: 'Move 45 degrees forward.' },
  { start: 25, name: 'Palm Strike', description: 'Palm strike.' },
  { start: 26, name: 'Huen Sau', description: 'Circling hand.' },
  { start: 27, name: 'Tan Sau', description: 'Tan Sau.' },
  { start: 28, name: 'Huen Sau', description: 'Circling hand.' },
  { start: 29, name: 'Wu Sau', description: 'Defending hand.' },
  { start: 30, name: 'Fook Sau', description: 'Bridging arm.' },
  { start: 30.5, name: 'Huen Sau', description: 'Circling hand.' },
  { start: 31, name: 'Wu Sau', description: 'Defending hand.' },
  { start: 32, name: 'Fook Sau', description: 'Bridging arm.' },
  { start: 33, name: 'Huen Sau', description: 'Circling hand.' },
  { start: 33.5, name: 'Wu Sau', description: 'Defending hand.' },
  { start: 34, name: 'Pak Sau', description: '45-degree angle.' },
  { start: 36, name: 'Palm Strike', description: 'Palm strike.' },
  { start: 37, name: 'Huen Sau', description: 'Circling hand.' },
  { start: 44, name: 'Left Gum Sau', description: 'Pressing hand.' },
  { start: 46, name: 'Right Gum Sau', description: 'Pressing hand.' },
  { start: 48, name: 'Double Backside Gum Sau', description: 'Double backside pressing-hand movement.' },
  { start: 52, name: 'Double Front Gum Sau', description: 'Double front pressing-hand movement.' },
  { start: 53, name: 'Double Lan Sau', description: 'Bumper arms.' },
  { start: 54, name: 'Double Fak Sau', description: 'Whisking arms.' },
  { start: 55, name: 'Return to Double Lan Sau', description: 'Return to the double bumper-arm position.' },
  { start: 57, name: 'Left Hand Wu Sau', description: 'Push the left Wu Sau forward.' },
  { start: 58, name: 'Double Jum Saus', description: 'Sinking arms.' },
  { start: 60, name: 'Double Tan Sau', description: 'Double Tan Sau.' },
  { start: 62, name: 'Double Fook Sau', description: 'Bridging arms.' },
  { start: 64, name: 'Double Biu Tze', description: 'Eye-piercing fingers.' },
  { start: 65, name: 'Extended Gum Sau', description: 'Extended pressing-hand movement.' },
  { start: 66, name: 'Double Fook Sau', description: 'Performed as an upward strike.' },
  { start: 67, name: 'Huen Sau to Sau Kuen', description: 'Circle outward and return.' },
  { start: 73, name: 'Left Side Pak Sau', description: 'Slap block at the shoulder.' },
  { start: 74, name: 'Side Palm Strike', description: 'Side palm strike.' },
  { start: 75, name: 'Huen Sau and Return', description: 'Circle the hand and return.' },
  { start: 77, name: 'Right Side Pak Sau', description: 'Slap block at the shoulder.' },
  { start: 78, name: 'Side Palm Strike', description: 'Side palm strike.' },
  { start: 79, name: 'Huen Sau & Sau Kuen', description: 'Return the hands backward.' },
  { start: 81, name: 'Chong Sau', description: 'Blade-hand strike.' },
  { start: 82, name: 'Jum Sau', description: 'Sinking arm.' },
  { start: 83, name: 'Gwat Sau', description: 'Sweeping arm.' },
  { start: 85, name: 'Tok Sau', description: 'Lifting arm.' },
  { start: 86, name: 'Low Side Palm Strike', description: 'Low side palm strike to the ribs.' },
  { start: 87, name: 'Huen Sau and Return', description: 'Circle the hand and return.' },
  { start: 88.5, name: 'Chong Sau', description: 'Blade-hand strike.' },
  { start: 89.5, name: 'Jum Sau', description: 'Sinking arm.' },
  { start: 90.5, name: 'Gwat Sau', description: 'Sweeping arm.' },
  { start: 92, name: 'Tok Sau', description: 'Lifting hand.' },
  { start: 93, name: 'Low Side Palm Strike', description: 'Low side palm strike.' },
  { start: 94, name: 'Huen Sau and Sau Kuen', description: 'Circle the hand and return.' },
  { start: 96, name: 'Left Side Bong Sau', description: 'Wing arm.' },
  { start: 98, name: 'Tan Sau', description: 'Tan Sau on the center.' },
  { start: 100, name: 'Upside-down Palm Strike', description: 'Upside-down palm strike.' },
  { start: 101, name: 'Right Side Bong Sau', description: 'Wing arm.' },
  { start: 102.5, name: 'Tan Sau', description: 'Tan Sau.' },
  { start: 103, name: 'Upside-down Palm Strike', description: 'Upside-down palm strike.' },
  { start: 104, name: 'Huen Sau and Return', description: 'Circle the hand and return.' },
  { start: 106, name: 'Tut Sau Cycle', description: 'Freeing-hands cycle.' },
  { start: 110, name: 'Lin Wan Kuen', description: 'Three chain punches.' },
  { start: 113, name: 'Huen Sau & Sau Kuen', description: 'Circle the hands and return to an elbow strike backward.' }
];

let activeMovementIndex = 0;
let isScrubbing = false;
let animationFrameId = null;

function formatTime(seconds) {
  const safeSeconds = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = Math.floor(safeSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
}

function getMovementIndex(time) {
  let index = 0;
  for (let i = 0; i < movements.length; i += 1) {
    if (time >= movements[i].start) index = i;
  }
  return index;
}

function renderMovementContext() {
  movementContext.innerHTML = '';

  // Keep the current movement in the middle when possible. This gives learners
  // context without presenting 72 buttons at once.
  let firstIndex = Math.max(0, activeMovementIndex - 2);
  let lastIndex = Math.min(movements.length - 1, firstIndex + 4);
  firstIndex = Math.max(0, lastIndex - 4);

  for (let i = firstIndex; i <= lastIndex; i += 1) {
    const movement = movements[i];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'movement-jump';
    button.classList.toggle('active', i === activeMovementIndex);
    button.setAttribute('aria-current', i === activeMovementIndex ? 'step' : 'false');
    button.innerHTML = `<span class="order">MOVEMENT ${i + 1}</span><span class="name">${movement.name}</span>`;
    button.addEventListener('click', () => jumpToMovement(i));
    movementContext.appendChild(button);
  }
}

function renderMovement(index) {
  const clampedIndex = Math.max(0, Math.min(index, movements.length - 1));
  const changed = clampedIndex !== activeMovementIndex;
  activeMovementIndex = clampedIndex;
  const movement = movements[activeMovementIndex];

  movementNumber.textContent = `Movement ${activeMovementIndex + 1} of ${movements.length}`;
  movementName.textContent = movement.name;
  movementDescription.textContent = movement.description;
  movementSelect.value = String(activeMovementIndex);

  if (changed || movementContext.children.length === 0) renderMovementContext();
}

function buildMovementSelect() {
  movementSelect.innerHTML = '';
  movements.forEach((movement, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = `${String(index + 1).padStart(2, '0')} · ${movement.name}`;
    movementSelect.appendChild(option);
  });
}

function updateInterface() {
  if (!isScrubbing) {
    const time = Number(modelViewer.currentTime) || 0;
    timeline.value = time;
    currentTimeLabel.textContent = formatTime(time);
    const nextMovementIndex = getMovementIndex(time);
    if (nextMovementIndex !== activeMovementIndex) renderMovement(nextMovementIndex);
  }

  animationFrameId = requestAnimationFrame(updateInterface);
}

function jumpToMovement(index) {
  const movement = movements[index];
  if (!movement) return;

  modelViewer.currentTime = movement.start;
  timeline.value = movement.start;
  currentTimeLabel.textContent = formatTime(movement.start);
  renderMovement(index);
}

function updatePlayButton() {
  playButton.textContent = modelViewer.paused ? 'Play' : 'Pause';
}


modelViewer.addEventListener('load', () => {
  const actualDuration = Number(modelViewer.duration);
  if (Number.isFinite(actualDuration) && actualDuration > 0) {
    timeline.max = actualDuration;
    durationLabel.textContent = formatTime(actualDuration);
  } else {
    timeline.max = 115;
    durationLabel.textContent = '1:55';
  }

  modelViewer.currentTime = 0;
  updatePlayButton();
  if (!animationFrameId) updateInterface();
});

modelViewer.addEventListener('play', updatePlayButton);
modelViewer.addEventListener('pause', updatePlayButton);

playButton.addEventListener('click', () => {
  if (modelViewer.paused) modelViewer.play();
  else modelViewer.pause();
  updatePlayButton();
});

previousButton.addEventListener('click', () => {
  jumpToMovement(Math.max(0, activeMovementIndex - 1));
});

nextButton.addEventListener('click', () => {
  jumpToMovement(Math.min(movements.length - 1, activeMovementIndex + 1));
});



movementSelect.addEventListener('change', () => {
  jumpToMovement(Number(movementSelect.value));
});

timeline.addEventListener('pointerdown', () => { isScrubbing = true; });
timeline.addEventListener('pointerup', () => { isScrubbing = false; });
timeline.addEventListener('change', () => { isScrubbing = false; });

timeline.addEventListener('input', () => {
  const selectedTime = Number(timeline.value);
  modelViewer.currentTime = selectedTime;
  currentTimeLabel.textContent = formatTime(selectedTime);
  renderMovement(getMovementIndex(selectedTime));
});

buildMovementSelect();
renderMovement(0);

const YAW_STEP = 0.14;
const PITCH_STEP = 0.1;
const ZOOM_FACTOR = 0.88;
const MIN_RADIUS = 0.55;
const MAX_RADIUS = 12;
const MIN_PHI = 0.12;
const MAX_PHI = Math.PI - 0.12;

function cameraReduced() {
  return document.documentElement.classList.contains('a11y-reduced');
}

function nudgeOrbit(dTheta, dPhi, radiusScale) {
  if (!modelViewer.getCameraOrbit) return;
  const orbit = modelViewer.getCameraOrbit();
  const theta = orbit.theta + dTheta;
  const phi = Math.min(MAX_PHI, Math.max(MIN_PHI, orbit.phi + dPhi));
  const radius = Math.min(MAX_RADIUS, Math.max(MIN_RADIUS, orbit.radius * radiusScale));
  modelViewer.cameraOrbit = `${theta}rad ${phi}rad ${radius}m`;
  if (cameraReduced() && typeof modelViewer.jumpCameraToGoal === 'function') {
    modelViewer.jumpCameraToGoal();
  }
}

function panCamera(screenX, screenZ) {
  if (!modelViewer.getCameraOrbit || !modelViewer.getCameraTarget) return;
  const orbit = modelViewer.getCameraOrbit();
  const target = modelViewer.getCameraTarget();
  const step = Math.max(0.04, orbit.radius * 0.045);
  const theta = orbit.theta;
  const dx = (screenX * Math.cos(theta) - screenZ * Math.sin(theta)) * step;
  const dz = (screenX * Math.sin(theta) + screenZ * Math.cos(theta)) * step;
  modelViewer.cameraTarget = `${target.x + dx}m ${target.y}m ${target.z + dz}m`;
  if (cameraReduced() && typeof modelViewer.jumpCameraToGoal === 'function') {
    modelViewer.jumpCameraToGoal();
  }
}

function runCamera(action) {
  switch (action) {
    case 'yaw-left':
      nudgeOrbit(YAW_STEP, 0, 1);
      break;
    case 'yaw-right':
      nudgeOrbit(-YAW_STEP, 0, 1);
      break;
    case 'pitch-up':
      nudgeOrbit(0, -PITCH_STEP, 1);
      break;
    case 'pitch-down':
      nudgeOrbit(0, PITCH_STEP, 1);
      break;
    case 'zoom-in':
      nudgeOrbit(0, 0, ZOOM_FACTOR);
      break;
    case 'zoom-out':
      nudgeOrbit(0, 0, 1 / ZOOM_FACTOR);
      break;
    case 'pan-left':
      panCamera(-1, 0);
      break;
    case 'pan-right':
      panCamera(1, 0);
      break;
    default:
      break;
  }
}

function bindHold(button) {
  let timer = 0;
  const action = button.getAttribute('data-cam');
  const start = (e) => {
    if (e.button != null && e.button !== 0) return;
    e.preventDefault();
    runCamera(action);
    window.clearInterval(timer);
    timer = window.setInterval(() => runCamera(action), 90);
  };
  const stop = () => {
    window.clearInterval(timer);
    timer = 0;
  };
  button.addEventListener('pointerdown', start);
  button.addEventListener('pointerup', stop);
  button.addEventListener('pointerleave', stop);
  button.addEventListener('pointercancel', stop);
  button.addEventListener('blur', stop);
}

document.querySelectorAll('.camera-btn').forEach(bindHold);

function cameraKeyTargetBlocked(el) {
  if (!el) return false;
  const tag = el.tagName;
  if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA' || el.isContentEditable) return true;
  if (el.closest && el.closest('#a11y-settings')) return true;
  return false;
}

window.addEventListener('keydown', (e) => {
  if (cameraKeyTargetBlocked(e.target)) return;
  const dlg = document.getElementById('a11y-settings');
  if (dlg && dlg.open) return;

  const shift = e.shiftKey;
  let action = '';
  if (shift && e.code === 'ArrowLeft') action = 'pan-left';
  else if (shift && e.code === 'ArrowRight') action = 'pan-right';
  else if (e.code === 'ArrowLeft') action = 'yaw-left';
  else if (e.code === 'ArrowRight') action = 'yaw-right';
  else if (e.code === 'ArrowUp') action = 'pitch-up';
  else if (e.code === 'ArrowDown') action = 'pitch-down';
  else if (e.code === 'Equal' || e.code === 'NumpadAdd') action = 'zoom-in';
  else if (e.code === 'Minus' || e.code === 'NumpadSubtract') action = 'zoom-out';

  if (!action) return;
  e.preventDefault();
  runCamera(action);
});

