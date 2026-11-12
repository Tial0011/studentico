import { aboutPoints } from '../data/content.js';
import { escapeHtml, mapHtml } from '../utils/helpers.js';

export const about = {
  id: 'about',
  render() {
    return `
    <section class="section section--cream" id="about" aria-labelledby="about-title">
      <div class="container about__grid">
        <div class="about__intro">
          <p class="eyebrow" data-reveal>About Studentico</p>
          <h2 class="display-h2" id="about-title" data-reveal>The student experience <span class="hl-ink">deserves more.</span></h2>
          <div class="about__media" data-reveal>
            <img src="assets/images/about-collage.svg" alt="Abstract illustration representing students building and sharing ideas" width="800" height="600">
            <p class="about__quote">More than lectures. More than certificates.</p>
          </div>
        </div>

        <div class="about__body">
          <div class="about__lead" data-reveal>
            <p class="big">Studentico believes university should go beyond attending lectures, obtaining certificates and <em>graduating</em>.</p>
            <p class="lead">Students deserve access to valuable opportunities, affordable products, practical skills and the support needed to become financially independent and better prepared for life after university.</p>
          </div>

          <ul class="about__list" aria-label="What students deserve">
            ${mapHtml(aboutPoints, (p, i) => `
              <li class="about__item" data-reveal>
                <span class="about__num">${String(i + 1).padStart(2, '0')}</span>
                <h3>${escapeHtml(p.title)}</h3>
                <p>${escapeHtml(p.text)}</p>
              </li>`)}
          </ul>

          <div class="about__ecosystem-note" data-reveal>
            <span class="tag">The big idea</span>
            <p>Studentico is more than a conventional business. It is being built as a movement and a student-focused ecosystem.</p>
          </div>
        </div>
      </div>
    </section>`;
  },
};
