import { team } from '../data/content.js';
import { escapeHtml, mapHtml } from '../utils/helpers.js';

const member = (m) => `
  <article class="member" data-reveal>
    <div class="member__photo">
      <img src="${m.photo}" alt="${m.placeholder ? 'Placeholder for team member photograph' : `Photograph of ${escapeHtml(m.name)}`}" width="300" height="300">
    </div>
    <div class="member__body">
      <span class="member__role">${escapeHtml(m.role)}</span>
      <h3 class="member__name">${escapeHtml(m.name)}</h3>
      <p class="member__text">${escapeHtml(m.text)}</p>
    </div>
  </article>`;

export const teamSection = {
  id: 'team',
  render() {
    return `
    <section class="section section--black" id="team" aria-labelledby="team-title">
      <div class="container">
        <div class="section-head section-head--split on-dark">
          <div style="display:grid;gap:var(--space-4)">
            <p class="eyebrow" data-reveal>Meet the Studentico team</p>
            <h2 class="display-h2" id="team-title" data-reveal>The people behind <span class="hl">the pathway.</span></h2>
          </div>
          <p class="lead" data-reveal>The individuals building and managing Studentico will be introduced here.</p>
        </div>
        <div class="team__grid">${mapHtml(team, member)}</div>
      </div>
    </section>`;
  },
};
