import { partnershipPaths } from '../data/content.js';
import { escapeHtml, mapHtml, arrow } from '../utils/helpers.js';

const pathway = (p) => `
  <a class="pathway" data-reveal href="https://wa.me/2347067409576?text=${encodeURIComponent(`Hello Studentico, I would like to enquire about supporting the ${p.title} partnership pathway.`)}" target="_blank" rel="noopener" aria-label="Enquire about ${escapeHtml(p.title)}">
    <span class="pathway__num" aria-hidden="true">${p.number}</span>
    <h3>${escapeHtml(p.title)}</h3>
    <p>${escapeHtml(p.text)}</p>
    <span class="pathway__arrow" aria-hidden="true">${arrow()}</span>
  </a>`;

export const partnershipsSection = {
  id: 'partnerships',
  render() {
    return `
    <section class="section section--navy partners" id="partnerships" aria-labelledby="partners-title">
      <div class="container">
        <div class="partners__top">
          <div style="display:grid;gap:var(--space-4)">
            <p class="eyebrow" data-reveal>Support our vision</p>
            <h2 class="display-h2" id="partners-title" data-reveal>Invest in students. <span class="hl">Invest in possibilities.</span></h2>
          </div>
          <div class="partners__copy" data-reveal>
            <p class="strong">Every student has potential, but potential needs access, exposure, guidance and opportunity to grow.</p>
            <p>Studentico is building an ecosystem designed to provide students with practical skills, valuable resources and opportunities for personal and professional development.</p>
            <p>We believe this vision requires collaboration.</p>
          </div>
        </div>

        <div class="pathways" role="list" aria-label="Partnership and sponsorship pathways">
          ${mapHtml(partnershipPaths, (p) => pathway(p))}
        </div>

        <div class="partners__cta" data-reveal>
          <div class="partners__cta-copy"><span>Build impact with us</span><p>Help us open doors for the students who need them.</p></div>
          <a class="btn" href="https://wa.me/2347067409576?text=Hello%20Studentico%2C%20I%20would%20like%20to%20become%20a%20Studentico%20partner%20and%20support%20the%20vision." target="_blank" rel="noopener">Become a Studentico partner ${arrow()}</a>
        </div>

        <div class="recognition" aria-labelledby="recognition-title">
          <div class="recognition__head" data-reveal>
            <h3 id="recognition-title">Sponsor and partner recognition</h3>
            <span>Reserved for the organisations and people who back this vision.</span>
          </div>
          <div class="partner-slider" data-reveal aria-label="Future Studentico partner recognition">
            <div class="partner-slider__track">
              ${Array.from({ length: 2 }, () => ['Partners coming soon', 'Your organisation here', 'Building the pathway', 'Partner spotlight'].map((label, i) => `<div class="slot"><span>${label}</span><b>0${i + 1}</b></div>`).join('')).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>`;
  },
};
