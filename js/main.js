/**
 * Application entry point.
 * Each section is an independent component exposing `render()` (returns an HTML string)
 * and, optionally, `init(root)` for behaviour. This file assembles them in page order.
 */
import { qs } from "./utils/helpers.js";
import { observeReveals, scrollToHash } from "./utils/helpers.js";

import { navbar } from "./components/navbar.js";
import { hero } from "./components/hero.js";
import { about } from "./components/about.js";
import { ecosystemSection } from "./components/ecosystem.js";
import { skillsSection } from "./components/skills.js";
import { facilitatorsSection } from "./components/facilitators.js";
import { teamSection } from "./components/team.js";
import { partnershipsSection } from "./components/partnerships.js";
import { visionSection } from "./components/vision.js";
import { ctaSection } from "./components/cta.js";
import { footer } from "./components/footer.js";

/** Sections rendered inside <main>, in order. */
// Keep the original one-page destinations mounted so hero and navigation links
// continue to reach their corresponding existing sections.
const showMainSections = true;
const sections = showMainSections
  ? [
      hero,
      about,
      ecosystemSection,
      skillsSection,
      facilitatorsSection,
      teamSection,
      partnershipsSection,
      visionSection,
      ctaSection,
    ]
  : [];

function mountComponent(component, target) {
  target.insertAdjacentHTML("beforeend", component.render());
  if (typeof component.init === "function") {
    const root = component.id ? qs(`#${component.id}`, target) : target;
    component.init(root || target);
  }
}

function boot() {
  const header = qs("#site-header");
  const main = qs("#main");
  const foot = qs("#site-footer");

  // Sections first: the navbar's scroll-spy needs the section elements to exist.
  sections.forEach((s) => mountComponent(s, main));
  mountComponent(footer, foot);
  mountComponent(navbar, header);

  observeReveals();

  // Deep link support (e.g. /#skills on first load)
  if (location.hash) requestAnimationFrame(() => scrollToHash(location.hash));
}

if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", boot);
else boot();
