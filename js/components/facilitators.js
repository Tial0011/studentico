import { facilitators } from '../data/content.js';
import { escapeHtml, mapHtml, icon } from '../utils/helpers.js';

const INFO_PATH = 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z';

const card = (f) => `
  <article class="person-card ${f.placeholder ? 'person-card--placeholder' : ''}" data-reveal>
    <div class="person-card__photo">
      <img src="${f.photo}" alt="${f.placeholder ? 'Placeholder for facilitator photograph' : `Photograph of ${escapeHtml(f.name)}`}" width="400" height="480">
      <span class="tag person-card__skill">${escapeHtml(f.skill)}</span>
    </div>
    <div>
      <h3 class="person-card__name">${escapeHtml(f.name)}</h3>
    </div>
    <p class="person-card__bio">${escapeHtml(f.bio)}</p>
    <div class="person-card__bg"><b>Professional background</b><span>${escapeHtml(f.background)}</span></div>
  </article>`;

export const facilitatorsSection = {
  id: 'facilitators',
  render() {
    return `
    <section class="section section--cream" id="facilitators" aria-labelledby="fac-title">
      <div class="container">
        <div class="section-head section-head--split">
          <div style="display:grid;gap:var(--space-4)">
            <p class="eyebrow" data-reveal>Meet our facilitators</p>
            <h2 class="display-h2" id="fac-title" data-reveal>Learn from <span class="hl-ink">those who do.</span></h2>
          </div>
          <p class="lead" data-reveal>The people delivering the first cohort's training will be introduced here, each teaching the skill they practise.</p>
        </div>
        <div class="fac__grid">${mapHtml(facilitators, card)}</div>
        <p class="fac__note" data-reveal>${icon(INFO_PATH, { size: 22 })}<span>Facilitator profiles will be added once confirmed. Edit <code>js/data/content.js</code> to insert photos, names, skills and biographies.</span></p>
      </div>
    </section>`;
  },
};
