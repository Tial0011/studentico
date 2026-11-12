import { navLinks } from "../data/content.js";
import {
  qs,
  qsa,
  escapeHtml,
  mapHtml,
  rafThrottle,
  scrollToHash,
  trapFocus,
} from "../utils/helpers.js";

export const navbar = {
  mount: "#site-header",

  render() {
    return `
      <div class="container nav">
        <a class="nav__logo" href="#home" aria-label="Studentico — home">
          <img src="assets/logo/studentico-logo.svg" alt="Studentico" width="960" height="256">
        </a>
        <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="nav-panel" aria-label="Open menu">
          <span class="nav__toggle-bars" aria-hidden="true"><span></span><span></span><span></span></span>
        </button>
        <nav class="nav__panel" id="nav-panel" aria-label="Primary">
          <ul class="nav__links">
            ${mapHtml(navLinks, (l) => `<li><a class="nav__link" href="${l.href}">${escapeHtml(l.label)}</a></li>`)}
          </ul>
          <a class="btn nav__cta btn--sm" href="#partnerships">Support Our Vision</a>
        </nav>
      </div>`;
  },

  init(root) {
    const toggle = qs(".nav__toggle", root);
    const panel = qs("#nav-panel", root);
    const links = qsa(".nav__link", root);
    const isMobile = () => window.matchMedia("(max-width: 920px)").matches;

    const setOpen = (open) => {
      root.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      // Hide the off-canvas panel from assistive tech while closed on mobile
      if (isMobile()) panel.toggleAttribute("inert", !open);
      else panel.removeAttribute("inert");
    };

    setOpen(false);
    toggle.addEventListener("click", () =>
      setOpen(!root.classList.contains("is-open")),
    );
    root.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && root.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
      if (root.classList.contains("is-open")) trapFocus(root, e);
    });
    window.addEventListener("resize", () => {
      if (!isMobile()) setOpen(false);
      else if (!root.classList.contains("is-open"))
        panel.setAttribute("inert", "");
    });

    // Smooth-scroll for every in-page anchor on the site
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute("href");
      if (scrollToHash(hash)) {
        e.preventDefault();
        history.pushState(null, "", hash);
        setOpen(false);
      }
    });

    // Sticky-header shadow + active link tracking
    const onScroll = rafThrottle(() =>
      root.classList.toggle("is-scrolled", window.scrollY > 8),
    );
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const sections = links
      .map((l) => qs(l.getAttribute("href")))
      .filter(Boolean);
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((l) => {
              const active = l.getAttribute("href") === `#${entry.target.id}`;
              l.classList.toggle("is-active", active);
              active
                ? l.setAttribute("aria-current", "true")
                : l.removeAttribute("aria-current");
            });
          });
        },
        { rootMargin: "-45% 0px -50% 0px" },
      );
      sections.forEach((s) => io.observe(s));
    }
  },
};
