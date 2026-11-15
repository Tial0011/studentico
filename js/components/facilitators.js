import { facilitators } from '../data/content.js';
import { escapeHtml, mapHtml } from '../utils/helpers.js';

const card = (f) => `
  <article class="person-card ${f.placeholder ? 'person-card--placeholder' : ''}" data-reveal>
    <div class="person-card__photo">
      <img src="${f.photo}" alt="${f.placeholder ? 'Placeholder for facilitator photograph' : `Photograph of ${escapeHtml(f.name)}`}" width="400" height="500" loading="lazy">
    </div>
    <h3 class="person-card__name">${escapeHtml(f.name)}</h3>
    <dl class="person-card__details ${f.brand ? '' : 'person-card__details--single'}">
      <div><dt>What they do</dt><dd>${escapeHtml(f.skill)}</dd></div>
      ${f.brand ? `<div><dt>Brand name</dt><dd>${escapeHtml(f.brand)}</dd></div>` : ''}
    </dl>
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
          <p class="lead" data-reveal>Meet the professionals delivering the first cohort's training across all 10 confirmed skills.</p>
        </div>
        <div class="fac__grid">${mapHtml(facilitators, card)}</div>
      </div>
    </section>`;
  },
};
