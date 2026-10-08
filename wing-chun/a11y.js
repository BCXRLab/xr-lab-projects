/**
 * Wing Chun accessibility settings.
 * Own key so it does not collide with other apps on the same GitHub Pages origin.
 */
(function () {
  var KEY = 'wing-chun-a11y';

  function osReduced() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function osContrast() {
    return window.matchMedia && window.matchMedia('(prefers-contrast: more)').matches;
  }

  function defaults() {
    return {
      reducedMotion: osReduced(),
      reducedFollowOs: true,
      highContrast: osContrast(),
      contrastFollowOs: true,
      largeText: false,
      readableFont: false,
      underlineLinks: true,
      extraSpacing: false,
      chromeHidden: false,
      hideShortcut: true,
      v: 1,
    };
  }

  function load() {
    var base = defaults();
    try {
      var raw = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (!raw || typeof raw !== 'object') return base;
      var s = Object.assign(base, raw);
      if (s.reducedFollowOs !== false) {
        s.reducedMotion = osReduced();
        s.reducedFollowOs = true;
      }
      if (s.contrastFollowOs !== false) {
        s.highContrast = osContrast();
        s.contrastFollowOs = true;
      }
      return s;
    } catch (e) {
      return base;
    }
  }

  function save(s) {
    try {
      localStorage.setItem(KEY, JSON.stringify(s));
    } catch (e) { /* private mode */ }
  }

  function effectiveReduced(s) {
    return s.reducedFollowOs !== false ? osReduced() : !!s.reducedMotion;
  }

  function effectiveContrast(s) {
    return s.contrastFollowOs !== false ? osContrast() : !!s.highContrast;
  }

  function applyViewer(s) {
    var viewer = document.getElementById('wingChunModel');
    if (!viewer) return;
    viewer.interactionPrompt = effectiveReduced(s) ? 'none' : 'auto';
  }

  function apply(s) {
    var h = document.documentElement;
    h.classList.toggle('a11y-reduced', effectiveReduced(s));
    h.classList.toggle('a11y-high-contrast', effectiveContrast(s));
    h.classList.toggle('a11y-large-text', !!s.largeText);
    h.classList.toggle('a11y-readable', !!s.readableFont);
    h.classList.toggle('a11y-underline', s.underlineLinks !== false);
    h.classList.toggle('a11y-spacing', !!s.extraSpacing);
    h.classList.toggle('a11y-chrome-hidden', !!s.chromeHidden);
    applyViewer(s);
  }

  function announce(msg) {
    var el = document.getElementById('a11y-announcer');
    if (!el || !msg) return;
    el.textContent = '';
    requestAnimationFrame(function () {
      el.textContent = msg;
    });
  }

  var s = load();
  apply(s);
  save(s);

  var dlg = document.getElementById('a11y-settings');
  var cog = document.getElementById('a11y-settings-btn');
  var hideBtn = document.getElementById('a11y-hide');
  var tab = document.getElementById('a11y-tab');
  var map = {
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
      var el = document.getElementById(map[k]);
      if (!el) return;
      if (k === 'reducedMotion') el.checked = effectiveReduced(s);
      else if (k === 'highContrast') el.checked = effectiveContrast(s);
      else el.checked = !!s[k];
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
  }

  function emit(msg) {
    save(s);
    apply(s);
    paint();
    if (msg) announce(msg);
  }

  Object.keys(map).forEach(function (k) {
    var el = document.getElementById(map[k]);
    if (!el) return;
    el.addEventListener('change', function () {
      s[k] = el.checked;
      if (k === 'reducedMotion') s.reducedFollowOs = false;
      if (k === 'highContrast') s.contrastFollowOs = false;
      emit('Accessibility settings updated.');
    });
  });

  function open() {
    if (s.chromeHidden) {
      s.chromeHidden = false;
      emit();
    }
    if (dlg && typeof dlg.showModal === 'function') dlg.showModal();
    else if (dlg) dlg.setAttribute('open', '');
    if (cog) cog.setAttribute('aria-expanded', 'true');
    var title = document.getElementById('a11y-settings-title');
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

  if (cog) cog.addEventListener('click', function () {
    if (dlg && dlg.open) close();
    else open();
  });
  var closeBtn = document.getElementById('a11y-close');
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (dlg) {
    dlg.addEventListener('cancel', function (e) {
      e.preventDefault();
      close();
    });
    dlg.addEventListener('keydown', function (e) {
      e.stopPropagation();
    });
  }

  function setChromeHidden(on) {
    s.chromeHidden = !!on;
    emit(on
      ? 'Page chrome hidden. Press H or Show page controls to bring them back.'
      : 'Page controls shown.');
  }

  if (hideBtn) hideBtn.addEventListener('click', function () { setChromeHidden(true); });
  if (tab) tab.addEventListener('click', function () {
    setChromeHidden(false);
    if (cog) cog.focus();
  });

  var resetBtn = document.getElementById('a11y-reset');
  if (resetBtn) resetBtn.addEventListener('click', function () {
    var next = defaults();
    Object.keys(next).forEach(function (k) { s[k] = next[k]; });
    emit('Accessibility settings reset to defaults.');
  });

  var skipSettings = document.querySelector('a.skip-link[href="#a11y-settings-btn"]');
  if (skipSettings) skipSettings.addEventListener('click', function (e) {
    e.preventDefault();
    if (s.chromeHidden) setChromeHidden(false);
    if (cog) cog.focus();
  });

  window.addEventListener('keydown', function (e) {
    if (e.code !== 'KeyH' || e.repeat) return;
    var tag = e.target && e.target.tagName;
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable)) {
      return;
    }
    if (dlg && dlg.open) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    if (!s.hideShortcut) return;
    setChromeHidden(!s.chromeHidden);
  }, true);

  if (window.matchMedia) {
    var mqR = window.matchMedia('(prefers-reduced-motion: reduce)');
    var mqC = window.matchMedia('(prefers-contrast: more)');
    if (mqR.addEventListener) mqR.addEventListener('change', function (e) {
      if (s.reducedFollowOs === false) return;
      s.reducedMotion = e.matches;
      emit();
    });
    if (mqC.addEventListener) mqC.addEventListener('change', function (e) {
      if (s.contrastFollowOs === false) return;
      s.highContrast = e.matches;
      emit();
    });
  }

  var viewer = document.getElementById('wingChunModel');
  if (viewer) {
    viewer.addEventListener('load', function () { applyViewer(s); });
  }

  paint();
})();
