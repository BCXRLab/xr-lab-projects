const KEY = 'stage-visualizer-settings';

function osReduced() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

export function defaultSettings() {
  const reduced = osReduced();
  return {
    reducedMotion: reduced,
    reducedFollowOs: true,
    highContrast: false,
    largeText: false,
    captions: false,
    softVisuals: false,
    cameraSway: !reduced,
    pauseVisuals: false,
    readableFont: false,
    extraSpacing: false,
    hideShortcut: true,
    volume: 100,
  };
}

export function loadSettings() {
  const base = defaultSettings();
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (!raw || typeof raw !== 'object') return base;
    return { ...base, ...raw };
  } catch {
    return base;
  }
}

export function saveSettings(s) {
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* private mode */ }
}

export function applyDom(s) {
  const r = document.documentElement;
  r.classList.toggle('a11y-high-contrast', !!s.highContrast);
  r.classList.toggle('a11y-large-text', !!s.largeText);
  r.classList.toggle('a11y-readable', !!s.readableFont);
  r.classList.toggle('a11y-spacing', !!s.extraSpacing);
  document.body.classList.toggle('captions-on', !!s.captions);
  const bar = document.getElementById('captions');
  if (bar) bar.hidden = !s.captions;
}

export function effectiveReduced(s) {
  if (s.reducedFollowOs) return osReduced();
  return !!s.reducedMotion;
}

export function announce(msg) {
  const el = document.getElementById('live');
  if (!el) return;
  el.textContent = '';
  requestAnimationFrame(() => { el.textContent = msg; });
}

export function paintCaptions(text) {
  const bar = document.getElementById('captions');
  const span = document.getElementById('caption-text');
  if (!bar || !span) return;
  span.textContent = text;
}

export function bindSettingsForm(s, { onChange, onResetView, onResetAll }) {
  const dlg = document.getElementById('settings');
  const btn = document.getElementById('settings-btn');
  const map = {
    reducedMotion: 'opt-reduced',
    highContrast: 'opt-contrast',
    largeText: 'opt-large',
    captions: 'opt-captions',
    softVisuals: 'opt-soft',
    cameraSway: 'opt-sway',
    pauseVisuals: 'opt-pause',
    readableFont: 'opt-readable',
    extraSpacing: 'opt-spacing',
    hideShortcut: 'opt-hide-key',
  };

  function paint() {
    for (const [k, id] of Object.entries(map)) {
      const el = document.getElementById(id);
      if (el) el.checked = k === 'reducedMotion' ? effectiveReduced(s) : !!s[k];
    }
    const vol = document.getElementById('opt-volume');
    const volVal = document.getElementById('opt-volume-val');
    if (vol) {
      vol.value = String(s.volume);
      vol.setAttribute('aria-valuenow', s.volume);
      vol.setAttribute('aria-valuetext', s.volume + ' percent');
    }
    if (volVal) volVal.textContent = s.volume + '%';
  }

  function emit() {
    saveSettings(s);
    applyDom(s);
    paint();
    onChange?.(s);
  }

  for (const [k, id] of Object.entries(map)) {
    document.getElementById(id)?.addEventListener('change', e => {
      s[k] = e.target.checked;
      if (k === 'reducedMotion') s.reducedFollowOs = false;
      emit();
    });
  }
  document.getElementById('opt-volume')?.addEventListener('input', e => {
    s.volume = +e.target.value;
    document.getElementById('opt-volume-val').textContent = s.volume + '%';
    emit();
  });

  function open() {
    dlg?.showModal?.() ?? dlg?.setAttribute('open', '');
    btn?.setAttribute('aria-expanded', 'true');
    document.getElementById('settings-title')?.focus();
  }
  function close() {
    dlg?.close?.() ?? dlg?.removeAttribute('open');
    btn?.setAttribute('aria-expanded', 'false');
    btn?.focus();
  }

  btn?.addEventListener('click', () => {
    if (dlg?.open) close(); else open();
  });
  document.getElementById('settings-close')?.addEventListener('click', close);
  dlg?.addEventListener('cancel', e => { e.preventDefault(); close(); });
  document.getElementById('reset-view')?.addEventListener('click', () => onResetView?.());
  document.getElementById('settings-reset')?.addEventListener('click', () => {
    const next = defaultSettings();
    Object.keys(s).forEach(k => { s[k] = next[k]; });
    emit();
    onResetAll?.(s);
  });

  matchMedia('(prefers-reduced-motion: reduce)').addEventListener?.('change', e => {
    if (!s.reducedFollowOs) return;
    s.reducedMotion = e.matches;
    s.cameraSway = !e.matches;
    emit();
  });

  paint();
  applyDom(s);
  return { paint, open, close, emit };
}
