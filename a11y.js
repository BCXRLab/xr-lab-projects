(function () {
  const KEY = 'xr-lab-hub-a11y';

  function osReduced() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function defaults() {
    const reduced = osReduced();
    return {
      reducedMotion: reduced,
      reducedFollowOs: true,
      highContrast: false,
      largeText: false,
      readableFont: false,
      underlineLinks: true,
      extraSpacing: false,
      chromeHidden: false,
      hideShortcut: true,
      v: 2,
    };
  }

  function load() {
    const base = defaults();
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (!raw || typeof raw !== 'object') return base;
      const s = Object.assign(base, raw);
      if (!raw.v || raw.v < 2) {
        s.underlineLinks = true;
        s.v = 2;
        try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* private mode */ }
      }
      return s;
    } catch {
      return base;
    }
  }

  function save(s) {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* private mode */ }
  }

  function effectiveReduced(s) {
    return s.reducedFollowOs ? osReduced() : !!s.reducedMotion;
  }

  function apply(s) {
    const h = document.documentElement;
    h.classList.toggle('a11y-reduced', effectiveReduced(s));
    h.classList.toggle('a11y-high-contrast', !!s.highContrast);
    h.classList.toggle('a11y-large-text', !!s.largeText);
    h.classList.toggle('a11y-readable', !!s.readableFont);
    h.classList.toggle('a11y-underline', !!s.underlineLinks);
    h.classList.toggle('a11y-spacing', !!s.extraSpacing);
    h.classList.toggle('a11y-chrome-hidden', !!s.chromeHidden);
  }

  function announce(msg) {
    const el = document.getElementById('a11y-live');
    if (!el) return;
    el.textContent = '';
    requestAnimationFrame(function () { el.textContent = msg; });
  }

  const s = load();
  apply(s);

  const dlg = document.getElementById('a11y-settings');
  const cog = document.getElementById('a11y-settings-btn');
  const hideBtn = document.getElementById('a11y-hide');
  const tab = document.getElementById('a11y-tab');
  const map = {
    reducedMotion: 'a11y-reduced',
    highContrast: 'a11y-contrast',
    largeText: 'a11y-large',
    readableFont: 'a11y-font',
    underlineLinks: 'a11y-links',
    extraSpacing: 'a11y-space',
    hideShortcut: 'a11y-hide-key',
  };

  function paint() {
    Object.keys(map).forEach(function (k) {
      const el = document.getElementById(map[k]);
      if (!el) return;
      el.checked = k === 'reducedMotion' ? effectiveReduced(s) : !!s[k];
    });
    if (hideBtn) {
      hideBtn.setAttribute('aria-pressed', s.chromeHidden ? 'true' : 'false');
      hideBtn.tabIndex = s.chromeHidden ? -1 : 0;
    }
    if (cog) {
      cog.setAttribute('aria-expanded', dlg && dlg.open ? 'true' : 'false');
      cog.tabIndex = s.chromeHidden ? -1 : 0;
    }
    if (tab) {
      tab.setAttribute('aria-hidden', s.chromeHidden ? 'false' : 'true');
      tab.tabIndex = s.chromeHidden ? 0 : -1;
    }
    [hideBtn, tab].forEach(function (el) {
      if (!el) return;
      if (s.hideShortcut) el.setAttribute('aria-keyshortcuts', 'h');
      else el.removeAttribute('aria-keyshortcuts');
    });
  }

  function emit(msg) {
    save(s);
    apply(s);
    paint();
    if (msg) announce(msg);
  }

  Object.keys(map).forEach(function (k) {
    const el = document.getElementById(map[k]);
    if (!el) return;
    el.addEventListener('change', function () {
      s[k] = el.checked;
      if (k === 'reducedMotion') s.reducedFollowOs = false;
      emit('Accessibility settings updated.');
    });
  });

  function open() {
    if (dlg && typeof dlg.showModal === 'function') dlg.showModal();
    else if (dlg) dlg.setAttribute('open', '');
    if (cog) cog.setAttribute('aria-expanded', 'true');
    const title = document.getElementById('a11y-settings-title');
    if (title) title.focus();
  }

  function close() {
    if (dlg && typeof dlg.close === 'function') dlg.close();
    else if (dlg) dlg.removeAttribute('open');
    if (cog) {
      cog.setAttribute('aria-expanded', 'false');
      cog.focus();
    }
  }

  cog && cog.addEventListener('click', function () {
    if (dlg && dlg.open) close();
    else open();
  });
  document.getElementById('a11y-close') && document.getElementById('a11y-close').addEventListener('click', close);
  dlg && dlg.addEventListener('cancel', function (e) { e.preventDefault(); close(); });

  function setChromeHidden(on) {
    s.chromeHidden = !!on;
    emit(on ? 'Accessibility controls hidden. Use the Accessibility tab to show them.' : 'Accessibility controls shown.');
    if (!on && tab) tab.blur();
    if (on && tab) tab.focus();
  }

  hideBtn && hideBtn.addEventListener('click', function () { setChromeHidden(true); });
  tab && tab.addEventListener('click', function () { setChromeHidden(false); });
  document.querySelector('a[href="#a11y-settings-btn"]') && document.querySelector('a[href="#a11y-settings-btn"]').addEventListener('click', function () {
    if (s.chromeHidden) setChromeHidden(false);
  });

  document.getElementById('a11y-reset') && document.getElementById('a11y-reset').addEventListener('click', function () {
    const next = defaults();
    Object.keys(next).forEach(function (k) { s[k] = next[k]; });
    emit('Accessibility settings restored to defaults.');
  });

  document.addEventListener('keydown', function (e) {
    if (!s.hideShortcut) return;
    if (dlg && dlg.open) return;
    if (e.repeat || e.ctrlKey || e.altKey || e.metaKey) return;
    if (e.key !== 'h' && e.key !== 'H') return;
    const tag = e.target && e.target.tagName;
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable)) return;
    e.preventDefault();
    setChromeHidden(!s.chromeHidden);
  });

  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener && mq.addEventListener('change', function (e) {
    if (!s.reducedFollowOs) return;
    s.reducedMotion = e.matches;
    emit();
  });

  paint();
})();
