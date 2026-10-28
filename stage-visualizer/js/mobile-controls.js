/**
 * Phone / tablet: left stick moves. Look is a swipe on the canvas (desktop-view.js).
 * iPad counts as compact even when it reports as desktop. Hidden in XR.
 */

export function isCompactDevice() {
  if (typeof window === 'undefined') return false;
  const ua = navigator.userAgent || '';
  if (/Android|iPhone|iPad|iPod|Mobile|Tablet|Quest|OculusBrowser|PicoBrowser/i.test(ua)) {
    return true;
  }
  if (navigator.maxTouchPoints > 1) return true;
  if ('ontouchstart' in window) return true;
  return window.matchMedia(
    '(pointer: coarse), (hover: none), (max-width: 1100px), (max-height: 700px)',
  ).matches;
}

export class MobileControls {
  constructor({ deadzone = 0.16 } = {}) {
    this.deadzone = deadzone;
    this.max = 46;
    this.moveX = 0;
    this.moveY = 0;
    this.active = false;
    this._pointerId = null;
    this.onCompactChange = null;

    this.root = document.getElementById('mobile-move');
    if (!this.root) {
      this.root = document.createElement('div');
      this.root.id = 'mobile-move';
      this.root.className = 'virtual-joystick';
      document.body.appendChild(this.root);
    }
    this.root.classList.add('virtual-joystick');
    this.root.setAttribute('aria-hidden', 'true');
    this.root.setAttribute('aria-label', 'Movement joystick');
    this.knob = this.root.querySelector('.virtual-joystick__knob');
    if (!this.knob) {
      this.knob = document.createElement('div');
      this.knob.className = 'virtual-joystick__knob';
      this.root.appendChild(this.knob);
    }

    this.root.addEventListener('pointerdown', (e) => this._down(e));
    window.addEventListener('pointermove', (e) => this._move(e));
    window.addEventListener('pointerup', (e) => this._up(e));
    window.addEventListener('pointercancel', (e) => this._up(e));
    window.addEventListener('resize', () => this._syncVisibility());

    this._mq = window.matchMedia(
      '(pointer: coarse), (hover: none), (max-width: 1100px), (max-height: 700px)',
    );
    this._syncVisibility();
    this._mq.addEventListener?.('change', () => this._syncVisibility());
  }

  isCompact() {
    return isCompactDevice();
  }

  isActive() {
    return this.active;
  }

  sample() {
    return { moveX: this.moveX, moveY: this.moveY };
  }

  refreshVisibility() {
    this._syncVisibility();
  }

  _syncVisibility() {
    const compact = isCompactDevice();
    const on = compact && !document.body.classList.contains('xr-presenting');
    this.root.classList.toggle('is-visible', on);
    document.body.classList.toggle('is-compact', compact);
    if (!on) this._reset();
    this.onCompactChange?.(compact);
  }

  _down(e) {
    if (!isCompactDevice()) return;
    if (document.body.classList.contains('xr-presenting')) return;
    e.preventDefault();
    e.stopPropagation();
    this.active = true;
    this._pointerId = e.pointerId;
    this.root.setPointerCapture?.(e.pointerId);
    this._update(e);
  }

  _move(e) {
    if (!this.active || e.pointerId !== this._pointerId) return;
    e.preventDefault();
    this._update(e);
  }

  _up(e) {
    if (!this.active || (e && e.pointerId !== this._pointerId)) return;
    this._reset();
  }

  _update(e) {
    const rect = this.root.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    let ox = e.clientX - cx;
    let oy = e.clientY - cy;
    const mag = Math.hypot(ox, oy) || 1;
    if (mag > this.max) {
      ox *= this.max / mag;
      oy *= this.max / mag;
    }
    this.knob.style.transform = `translate(calc(-50% + ${ox}px), calc(-50% + ${oy}px))`;
    let nx = ox / this.max;
    let ny = -oy / this.max;
    if (Math.hypot(nx, ny) < this.deadzone) {
      nx = 0;
      ny = 0;
    }
    this.moveX = nx;
    this.moveY = ny;
  }

  _reset() {
    this.active = false;
    this._pointerId = null;
    this.moveX = 0;
    this.moveY = 0;
    this.knob.style.transform = 'translate(-50%, -50%)';
  }
}
