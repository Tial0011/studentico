import { ecosystem } from '../data/content.js';
import { escapeHtml, mapHtml, icon, arrow } from '../utils/helpers.js';

const card = (item) => `
  <article class="eco-card ${item.current ? 'eco-card--current' : ''}" data-reveal>
    <div class="eco-card__top">
      <span class="eco-card__icon">${icon(item.icon, { size: 26 })}</span>
      <span class="eco-card__num">${item.number}</span>
    </div>
    ${item.current
      ? `<div class="eco-card__body">
           <span class="tag tag--dot" style="justify-self:start">Current focus</span>
           <h3>${escapeHtml(item.title)}</h3>
           <p>${escapeHtml(item.text)}</p>
           <a class="btn btn--sm" href="#skills" style="justify-self:start">See the programme ${arrow()}</a>
         </div>`
      : `<h3>${escapeHtml(item.title)}</h3>
         <p>${escapeHtml(item.text)}</p>
         <span class="eco-card__status">Part of the wider vision</span>`}
  </article>`;

export const ecosystemSection = {
  id: 'ecosystem',
  render() {
    return `
    <section class="section eco" id="ecosystem" aria-labelledby="eco-title">
      <div class="container">
        <div class="eco__wrap">
          <div class="section-head section-head--split">
            <div style="display:grid;gap:var(--space-4)">
              <p class="eyebrow" data-reveal>Our ecosystem</p>
              <h2 class="display-h2" id="eco-title" data-reveal>More than skills. <span class="hl-ink">A complete student experience.</span></h2>
            </div>
            <p class="lead" data-reveal>Studentico intends to grow across four connected areas. Right now, our energy is on the first: the Skills Acquisition and Empowerment Programme.</p>
          </div>
          <div class="eco__grid">${mapHtml(ecosystem, card)}</div>
        </div>
      </div>
    </section>`;
  },
};
