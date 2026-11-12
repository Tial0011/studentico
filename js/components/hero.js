import { arrow } from '../utils/helpers.js';

const tickerPhrases = ["More than a brand. It's a pathway.", 'Building skills', 'Creating opportunities', 'Rewriting the student experience'];

const tickerRun = () =>
  tickerPhrases.map((p) => `<span class="ticker__item">${p}<i aria-hidden="true"></i></span>`).join('');

export const hero = {
  id: 'home',
  render() {
    return `
    <section class="section section--cream hero" id="home" aria-labelledby="hero-title">
      <div class="container hero__grid">
        <div class="hero__copy">
          <p class="eyebrow hero__statement" data-reveal>More than a brand. It's a pathway.</p>
          <h1 class="display-hero hero__title" id="hero-title" data-reveal>
            <span class="line">Rewriting the</span>
            <span class="line line--accent">Student</span>
            <span class="line line--outline">Experience.</span>
          </h1>
          <p class="serif lead" style="font-size:clamp(1.3rem,2.4vw,1.8rem);color:var(--black);margin-bottom:var(--space-4)" data-reveal>Building skills. Creating opportunities.</p>
          <p class="hero__text" data-reveal>
            Studentico is creating a better student experience through practical skills, accessible opportunities and meaningful empowerment initiatives designed to help students thrive during university and beyond.
          </p>
          <div class="hero__actions" data-reveal>
            <a class="btn" href="#skills">Explore Our Skills ${arrow()}</a>
            <a class="btn btn--dark" href="#partnerships">Support Our Vision ${arrow()}</a>
          </div>
          <div class="hero__programme" data-reveal>
            <span class="tag tag--dark tag--dot">Now launching</span>
            <span>Studentico Skills Acquisition and Empowerment Programme 1.0</span>
          </div>
        </div>

        <div class="hero__visual" data-reveal>
          <div class="hero__frame">
            <img src="assets/images/hero-pathway.svg" alt="Abstract illustration of a graduate cap on a winding pathway towards a rising sun" width="600" height="700">
          </div>
          <div class="hero__sticker" aria-hidden="true">Skills<br>Programme<br>1.0</div>
          <div class="hero__badge">
            <strong>100</strong>
            <span>First cohort target at UNIMED, Ondo</span>
          </div>
        </div>
      </div>

      <div class="ticker" aria-hidden="true">
        <div class="ticker__track">${tickerRun()}${tickerRun()}${tickerRun()}${tickerRun()}</div>
      </div>
    </section>`;
  },
};
