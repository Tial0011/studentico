import { skills, pricing, cohort, programmeInfo } from '../data/content.js';
import { escapeHtml, mapHtml, arrow, icon, qs, qsa } from '../utils/helpers.js';

const CLOSE_PATH = 'M6.4 5 5 6.400 10.600 12 5 17.600 6.400 19 12 13.400 17.600 19 19 17.600 13.400 12 19 6.400 17.600 5 12 10.600 6.400 5Z';

const skillCard = (s, i) => `
  <article class="skill-card" data-reveal>
    <div class="skill-card__media">
      <img src="${s.image}" alt="" width="400" height="300">
      <span class="skill-card__index">${String(i + 1).padStart(2, '0')}</span>
    </div>
    <div class="skill-card__body">
      <h3 class="skill-card__title">${escapeHtml(s.name)}</h3>
      <p class="skill-card__intro">${escapeHtml(s.intro)}</p>
      <button class="skill-card__cta" type="button" data-skill="${s.id}" aria-haspopup="dialog">
        Explore skill ${arrow()}<span class="sr-only"> — ${escapeHtml(s.name)}</span>
      </button>
    </div>
  </article>`;

const priceCard = (p) => `
  <article class="price-card price-card--${p.id === 'freshers' ? 'fresher' : 'stalite'}" data-reveal>
    <div class="price-card__top">
      <span class="tag ${p.id === 'freshers' ? 'tag--dark' : 'tag--outline'}">Category</span>
      <h4 class="price-card__label">${escapeHtml(p.label)}</h4>
      <p class="price-card__note">${escapeHtml(p.note)}</p>
    </div>
    <p class="price-card__amount">${escapeHtml(p.amount)}</p>
  </article>`;

const infoItem = (i) => `
  <div class="info-strip__item">
    <span class="info-strip__label">${escapeHtml(i.label)}</span>
    <span class="info-strip__value ${i.placeholder ? 'info-strip__value--tbd' : ''}">${escapeHtml(i.value)}</span>
  </div>`;

const modal = `
  <dialog class="skill-modal" id="skill-modal" aria-labelledby="skill-modal-title">
    <button class="skill-modal__close" type="button" aria-label="Close skill details" data-close-modal>${icon(CLOSE_PATH, { size: 20 })}</button>
    <div class="skill-modal__inner">
      <div class="skill-modal__media"><img id="skill-modal-img" src="${skills[0].image}" alt="" width="400" height="300"></div>
      <div class="skill-modal__content">
        <span class="tag" style="justify-self:start">Skills Programme 1.0</span>
        <h3 id="skill-modal-title"></h3>
        <p class="lead" id="skill-modal-intro"></p>
        <div class="skill-modal__list">
          <div class="skill-modal__row"><span>Facilitator</span><span>To be announced</span></div>
          <div class="skill-modal__row"><span>What you'll learn</span><span>Details to be added</span></div>
          <div class="skill-modal__row"><span>Schedule</span><span>To be announced</span></div>
        </div>
        <button class="btn btn--block" type="button" disabled aria-disabled="true">Enquiry opens in a later phase</button>
        <p class="skill-modal__note">This popup is a structural placeholder. Enquiry and registration will be connected in the next phase.</p>
      </div>
    </div>
  </dialog>`;

export const skillsSection = {
  id: 'skills',
  render() {
    return `
    <section class="section section--sand" id="skills" aria-labelledby="skills-title">
      <div class="container">
        <div class="skills__head">
          <div style="display:grid;gap:var(--space-4)">
            <p class="eyebrow" data-reveal>Skills Acquisition and Empowerment Programme 1.0</p>
            <h2 class="display-h2" id="skills-title" data-reveal><span class="line">Learn a skill.</span><span class="line hl-ink">Build your future.</span></h2>
          </div>
          <p class="lead" data-reveal>The Studentico Skills Acquisition and Empowerment Programme is designed to give students access to practical skills that can create opportunities beyond the classroom.</p>
        </div>

        <div class="skills__grid">${mapHtml(skills, skillCard)}</div>

        <div class="programme">
          <div class="programme__label" data-reveal><span class="eyebrow">Programme details</span></div>
          <div class="programme__row">
            <div class="pricing" role="group" aria-label="Programme pricing by category">${mapHtml(pricing, priceCard)}</div>
            <article class="cohort" data-reveal>
              <span class="tag" style="justify-self:start">First cohort target</span>
              <div class="cohort__figure">
                <span class="cohort__num">${cohort.target}</span>
                <span class="cohort__unit">${cohort.label}</span>
              </div>
              <p>Studentico aims to reach 100 students through its inaugural skills programme. This is our target for the first cohort, not an achieved figure.</p>
            </article>
          </div>
          <div class="info-strip" data-reveal>
            ${mapHtml(programmeInfo, infoItem)}
            <div class="info-strip__cta"><a class="btn btn--dark" href="#get-in-touch">Register interest ${arrow()}</a></div>
          </div>
        </div>
      </div>
      ${modal}
    </section>`;
  },

  init(root) {
    const dialog = qs('#skill-modal', root);
    if (!dialog) return;
    const img = qs('#skill-modal-img', dialog);
    const title = qs('#skill-modal-title', dialog);
    const intro = qs('#skill-modal-intro', dialog);
    let opener = null;

    const open = (id, trigger) => {
      const skill = skills.find((s) => s.id === id);
      if (!skill) return;
      opener = trigger;
      img.src = skill.image;
      img.alt = `${skill.name} illustration`;
      title.textContent = skill.name;
      intro.textContent = skill.intro;
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
      document.documentElement.style.overflow = 'hidden';
    };
    const close = () => {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
    };

    qsa('[data-skill]', root).forEach((btn) => btn.addEventListener('click', () => open(btn.dataset.skill, btn)));
    qs('[data-close-modal]', dialog).addEventListener('click', close);
    // Click on the backdrop (the dialog element itself) closes it
    dialog.addEventListener('click', (e) => { if (e.target === dialog) close(); });
    dialog.addEventListener('close', () => {
      document.documentElement.style.overflow = '';
      if (opener) opener.focus();
    });
  },
};
