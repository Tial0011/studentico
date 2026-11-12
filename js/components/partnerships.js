import { partnershipPaths } from '../data/content.js';
import { escapeHtml, mapHtml, arrow } from '../utils/helpers.js';

const pathway = (p) => `
  <article class="pathway" data-reveal>
    <span class="pathway__num" aria-hidden="true">${p.number}</span>
    <h3>${escapeHtml(p.title)}</h3>
    <p>${escapeHtml(p.text)}</p>
    <span class="pathway__arrow" aria-hidden="true">${arrow()}</span>
  </article>`;

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
          ${mapHtml(partnershipPaths, (p) => pathway(p).replace('<article class="pathway"', '<article role="listitem" class="pathway"'))}
        </div>

        <div class="partners__cta" data-reveal>
          <p>Help us open doors for the students who need them.</p>
          <a class="btn" href="#get-in-touch">Become a Studentico partner ${arrow()}</a>
        </div>

        <div class="recognition" aria-labelledby="recognition-title">
          <div class="recognition__head" data-reveal>
            <h3 id="recognition-title">Sponsor and partner recognition</h3>
            <span>Reserved for the organisations and people who back this vision.</span>
          </div>
          <div class="recognition__slots" data-reveal>
            ${Array.from({ length: 4 }, () => '<div class="slot">Your organisation here</div>').join('')}
          </div>
        </div>
      </div>
    </section>`;
  },
};
