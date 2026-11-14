import { skills, pricing, cohort, programmeInfo } from '../data/content.js';
import { escapeHtml, mapHtml, arrow, icon, qs, qsa } from '../utils/helpers.js';

const CLOSE_PATH = 'M6.4 5 5 6.400 10.600 12 5 17.600 6.400 19 12 13.400 17.600 19 19 17.600 13.400 12 19 6.400 17.600 5 12 10.600 6.400 5Z';

const skillCard = (skill, index) => `
  <article class="skill-card" data-skill="${skill.id}" data-reveal tabindex="0" role="button" aria-haspopup="dialog" aria-label="Explore ${escapeHtml(skill.name)}">
    <div class="skill-card__media"><img src="${skill.image}" alt="" width="400" height="300"><span class="skill-card__index">${String(index + 1).padStart(2, '0')}</span></div>
    <div class="skill-card__body"><h3 class="skill-card__title">${escapeHtml(skill.name)}</h3><p class="skill-card__intro">${escapeHtml(skill.intro)}</p><span class="skill-card__category">${escapeHtml(skill.category)}</span><span class="skill-card__cta">Explore skill ${arrow()}<span class="sr-only"> — ${escapeHtml(skill.name)}</span></span></div>
  </article>`;

const priceCard = (price) => `<article class="price-card price-card--${price.id === 'freshers' ? 'fresher' : 'stalite'}" data-reveal><div class="price-card__top"><span class="tag ${price.id === 'freshers' ? 'tag--dark' : 'tag--outline'}">Category</span><h4 class="price-card__label">${escapeHtml(price.label)}</h4><p class="price-card__note">${escapeHtml(price.note)}</p></div><p class="price-card__amount">${escapeHtml(price.amount)}</p></article>`;
const infoItem = (item) => `<div class="info-strip__item"><span class="info-strip__label">${escapeHtml(item.label)}</span><span class="info-strip__value ${item.placeholder ? 'info-strip__value--tbd' : ''}">${escapeHtml(item.value)}</span></div>`;

const modal = `
  <dialog class="skill-modal" id="skill-modal" aria-labelledby="skill-modal-title">
    <button class="skill-modal__close" type="button" aria-label="Close skill details" data-close-modal>${icon(CLOSE_PATH, { size: 20 })}</button>
    <div class="skill-modal__inner"><div class="skill-modal__media"><img id="skill-modal-img" src="${skills[0].image}" alt="" width="400" height="300"></div><div class="skill-modal__content"><span class="tag" style="justify-self:start">Skills Programme 1.0</span><h3 id="skill-modal-title"></h3><p class="lead" id="skill-modal-intro"></p><div class="skill-modal__list"><div class="skill-modal__row"><span>What to expect</span><span id="skill-modal-detail"></span></div><div class="skill-modal__row"><span>What you'll learn</span><span id="skill-modal-learn"></span></div><div class="skill-modal__row"><span>Why it matters</span><span id="skill-modal-value"></span></div></div><fieldset class="skill-modal__pricing"><legend>Choose your student category</legend><div class="skill-modal__options"><label><input type="radio" name="student-category" value="freshers" checked><span>Fresher <b>₦10,000</b></span></label><label><input type="radio" name="student-category" value="stalites"><span>Stalite <b>₦15,000</b></span></label></div></fieldset><div class="skill-modal__enquiry"><p><span>Programme fee</span><strong id="skill-modal-fee">₦10,000</strong><small>per selected skill</small></p><a class="btn btn--block" id="skill-modal-whatsapp" href="https://wa.me/?text=Hello%20Studentico" target="_blank" rel="noopener">Enquire on WhatsApp ${arrow()}</a></div><p class="skill-modal__note">Programme timing and facilitators will be announced by Studentico.</p></div></div>
  </dialog>`;

export const skillsSection = {
  id: 'skills',
  render() {
    return `<section class="section section--sand" id="skills" aria-labelledby="skills-title"><div class="container"><div class="skills__head"><div style="display:grid;gap:var(--space-4)"><p class="eyebrow" data-reveal>Skills Acquisition and Empowerment Programme 1.0</p><h2 class="display-h2" id="skills-title" data-reveal><span class="line">Learn a skill.</span><span class="line hl-ink">Build your future.</span></h2></div><p class="lead" data-reveal>The Studentico Skills Acquisition and Empowerment Programme is designed to give students access to practical, relevant and valuable skills that can create opportunities beyond the classroom. Our first cohort is focused on helping students discover their potential and develop practical capabilities.</p></div><div class="skills__grid">${mapHtml(skills, skillCard)}</div><div class="programme"><div class="programme__label" data-reveal><span class="eyebrow">Programme details</span></div><div class="programme__row"><div class="pricing" role="group" aria-label="Programme pricing by category">${mapHtml(pricing, priceCard)}</div><article class="cohort" data-reveal><span class="tag" style="justify-self:start">Our first cohort</span><div class="cohort__figure"><span class="cohort__num">${cohort.target}</span><span class="cohort__unit">${cohort.label}</span></div><p>Our goal is to reach 100 students through this inaugural skills programme. This is a first-cohort target, not an achieved figure.</p></article></div><div class="info-strip" data-reveal>${mapHtml(programmeInfo, infoItem)}<div class="info-strip__cta"><a class="btn btn--dark" href="#get-in-touch">Register interest ${arrow()}</a></div></div></div></div>${modal}</section>`;
  },
  init(root) {
    const dialog = qs('#skill-modal', root);
    if (!dialog) return;
    const img = qs('#skill-modal-img', dialog); const title = qs('#skill-modal-title', dialog); const intro = qs('#skill-modal-intro', dialog); const detail = qs('#skill-modal-detail', dialog); const learn = qs('#skill-modal-learn', dialog); const value = qs('#skill-modal-value', dialog); const fee = qs('#skill-modal-fee', dialog); const whatsapp = qs('#skill-modal-whatsapp', dialog);
    let opener = null; let activeSkill = null;
    const updateEnquiry = () => {
      if (!activeSkill) return;
      const category = qs('input[name="student-category"]:checked', dialog)?.value || 'freshers';
      const amount = category === 'freshers' ? '₦10,000' : '₦15,000'; const label = category === 'freshers' ? 'Fresher' : 'Stalite';
      fee.textContent = amount;
      whatsapp.href = `https://wa.me/?text=${encodeURIComponent(`Hello Studentico, I would like to enquire about ${activeSkill.name} in the Skills Acquisition and Empowerment Programme 1.0. I am a ${label}.`)}`;
    };
    const open = (id, trigger) => {
      const skill = skills.find((item) => item.id === id); if (!skill) return;
      opener = trigger; activeSkill = skill; img.src = skill.image; img.alt = `${skill.name} illustration`; title.textContent = skill.name; intro.textContent = skill.intro; detail.textContent = skill.detail; learn.textContent = skill.learn; value.textContent = skill.value; updateEnquiry();
      if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', ''); document.documentElement.style.overflow = 'hidden';
    };
    const close = () => { if (typeof dialog.close === 'function') dialog.close(); else dialog.removeAttribute('open'); };
    qsa('[data-skill]', root).forEach((card) => { card.addEventListener('click', () => open(card.dataset.skill, card)); card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(card.dataset.skill, card); } }); });
    qsa('input[name="student-category"]', dialog).forEach((input) => input.addEventListener('change', updateEnquiry));
    qs('[data-close-modal]', dialog).addEventListener('click', close); dialog.addEventListener('click', (event) => { if (event.target === dialog) close(); }); dialog.addEventListener('close', () => { document.documentElement.style.overflow = ''; if (opener) opener.focus(); });
  },
};
