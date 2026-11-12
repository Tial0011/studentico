import { visionGroups } from '../data/content.js';
import { mapHtml, escapeHtml } from '../utils/helpers.js';

const steps = [
  { n: '1', title: 'Starting at UNIMED', text: 'Our journey begins with students at the University of Medical Sciences, Ondo.' },
  { n: '2', title: 'Reaching more campuses', text: 'The ambition is to extend Studentico to students across other tertiary institutions.' },
  { n: '3', title: 'Building for students everywhere', text: 'A connected, student-focused ecosystem that grows with the people it serves.' },
];

export const visionSection = {
  id: 'vision',
  render() {
    return `
    <section class="section section--cream" id="vision" aria-labelledby="vision-title">
      <div class="container">
        <p class="eyebrow" data-reveal>Our long-term vision</p>
        <h2 class="display-h1 vision__title" id="vision-title" style="margin-top:var(--space-4)" data-reveal>Starting here. <span class="hl-ink">Building for students everywhere.</span></h2>

        <div class="vision__grid">
          <figure class="vision__media" data-reveal>
            <img src="assets/images/vision-campus.svg" alt="Abstract illustration of connected campuses" width="800" height="600">
            <figcaption class="vision__caption">From one campus to many.</figcaption>
          </figure>

          <div class="vision__content">
            <p class="lead" data-reveal>Studentico's ambition reaches beyond its first activities at UNIMED. We want to bring together the people and institutions that shape a student's future, and make opportunity easier to reach.</p>
            <ol class="vision__path">
              ${mapHtml(steps, (s) => `
                <li class="vision__step" data-reveal>
                  <span class="vision__dot" aria-hidden="true">${s.n}</span>
                  <div><h3>${escapeHtml(s.title)}</h3><p>${escapeHtml(s.text)}</p></div>
                </li>`)}
            </ol>
          </div>
        </div>

        <div class="vision__groups" data-reveal>
          <p class="eyebrow">Bringing together</p>
          <ul class="vision__groups-list">
            ${mapHtml(visionGroups, (g) => `<li class="chip">${escapeHtml(g)}</li>`)}
          </ul>
        </div>
      </div>
    </section>`;
  },
};
