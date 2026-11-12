import { brand, navLinks, skills, socials, contact } from "../data/content.js";
import { escapeHtml, mapHtml, icon } from "../utils/helpers.js";

export const footer = {
  mount: "#site-footer",

  render() {
    const year = new Date().getFullYear();
    return `
      <div class="container">
        <div class="footer__top">
          <div class="footer__brand">
            <img src="assets/logo/studentico-logo-light.svg" alt="Studentico" width="960" height="256">
            <p>Affordable essentials, practical skills, and meaningful opportunities.</p>
            <div class="footer__socials">
              ${mapHtml(socials, (s) => `<a href="${s.href}" aria-label="${escapeHtml(s.label)}">${icon(s.path, { size: 20 })}</a>`)}
            </div>
          </div>

          <nav class="footer__col" aria-label="Footer navigation">
            <h4>EXPLORE</h4>
            <ul>${mapHtml(navLinks, (l) => `<li><a href="${l.href}">${escapeHtml(l.label)}</a></li>`)}</ul>
          </nav>

          <nav class="footer__col" aria-label="Skills">
            <h4>OUR SKILLS</h4>
            <ul>${mapHtml(skills, (s) => `<li><a href="#skills">${escapeHtml(s.name)}</a></li>`)}</ul>
          </nav>

          <div class="footer__col footer__col--contact">
            <h4>GET IN TOUCH</h4>
            <ul class="footer__contact">
              <li><b>Email</b>${escapeHtml(contact.email)}</li>
              <li><b>Phone / WhatsApp</b>${escapeHtml(contact.phone)}</li>
              <li><b>Location</b>${escapeHtml(contact.location)}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer__wordmark" aria-hidden="true">Studentico</div>

      <div class="container">
        <div class="footer__bottom">
          <span>© ${year} Studentico. All rights reserved.</span>
          <span>${escapeHtml(brand.programme)}</span>
        </div>
      </div>`;
  },
};
