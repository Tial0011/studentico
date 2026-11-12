/**
 * Small, dependency-free helpers shared by all components.
 */

/** Query helpers */
export const qs = (selector, scope = document) => scope.querySelector(selector);
export const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

/** Escape text before interpolating it into an HTML template string. */
export function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/** Render a list of items into one HTML string. */
export const mapHtml = (items, fn) => items.map(fn).join('');

/** Inline SVG icon from a 24x24 path. */
export function icon(path, { size = 24, label = '' } = {}) {
  const a11y = label ? `role="img" aria-label="${escapeHtml(label)}"` : 'aria-hidden="true"';
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" ${a11y}><path d="${path}"/></svg>`;
}

export const ARROW_PATH = 'M5 12h12.200l-5.100-5.100L13.500 5.500 21 13l-7.500 7.500-1.400-1.400 5.100-5.100H5v-2Z';
export const arrow = () => icon(ARROW_PATH, { size: 18 });

/** Reveal-on-scroll using IntersectionObserver (respects reduced-motion). */
export function observeReveals(scope = document) {
  const items = qsa('[data-reveal]', scope);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  items.forEach((el, i) => {
    el.style.setProperty('--reveal-delay', `${(i % 4) * 70}ms`);
    io.observe(el);
  });
}

/** Keep keyboard focus inside a container (used by modal and mobile menu). */
export function trapFocus(container, event) {
  if (event.key !== 'Tab') return;
  const focusable = qsa(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    container
  ).filter((el) => el.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

/** Smooth-scroll to a hash target, accounting for the sticky header. */
export function scrollToHash(hash) {
  const target = hash && hash !== '#' ? qs(hash) : null;
  if (!target) return false;
  const header = qs('.site-header');
  const offset = header ? header.offsetHeight - 1 : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
  return true;
}

/** Throttle with rAF for scroll handlers. */
export function rafThrottle(fn) {
  let ticking = false;
  return (...args) => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      fn(...args);
      ticking = false;
    });
  };
}
