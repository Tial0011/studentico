import { arrow } from '../utils/helpers.js';

const tickerPhrases = ["More than a brand. It's a pathway.", 'Building skills', 'Creating opportunities', 'Rewriting the student experience'];

const tickerRun = () =>
  tickerPhrases.map((p) => `<span class="ticker__item">${p}<i aria-hidden="true"></i></span>`).join('');

export const hero = {
  id: 'home',
  render() {
    return `
    <section class="section section--cream hero" id="home" aria-labelledby="hero-title">
      <div class="hero__orbit hero__orbit--one" aria-hidden="true"></div>
      <div class="hero__orbit hero__orbit--two" aria-hidden="true"></div>
      <div class="container hero__grid">
        <div class="hero__copy">
          <p class="eyebrow hero__statement" data-reveal>More than a brand. It's a pathway.</p>
          <h1 class="display-hero hero__title" id="hero-title" data-reveal>
            <span class="line">Rewriting</span>
            <span class="line line--accent">the student</span>
            <span class="line line--outline">experience.</span>
          </h1>
          <p class="hero__promise serif" data-reveal>Building skills. <em>Creating opportunities.</em></p>
          <p class="hero__text" data-reveal>
            Studentico is building a better student experience through practical skills, accessible opportunities and meaningful empowerment initiatives designed to help students thrive during university and beyond.
          </p>
          <div class="hero__actions" data-reveal>
            <a class="btn" href="#skills">Explore Our Skills ${arrow()}</a>
            <a class="hero__text-link" href="#partnerships"><span><b>Support our vision</b><small>Partner with the pathway</small></span><i>${arrow()}</i></a>
          </div>
          <div class="hero__programme" data-reveal>
            <div class="hero__programme-kicker"><span class="tag tag--dark tag--dot">Programme 1.0</span><span>Now enrolling</span></div>
            <div class="hero__programme-content"><strong>Studentico Skills Acquisition <em>&amp;</em> Empowerment Programme</strong><span>Classes begin <b>21 Nov. 2026</b></span></div>
            <a class="hero__programme-arrow" href="#skills" aria-label="Explore the Skills Acquisition and Empowerment Programme">${arrow()}</a>
          </div>
        </div>

        <div class="hero__visual" data-reveal>
          <p class="hero__visual-label">UNIMED, ONDO <span>•</span> FIRST COHORT</p>
          <div class="hero__sun" aria-hidden="true"></div>
          <div class="hero__frame" data-hero-map tabindex="0" role="img" aria-label="Interactive roadmap from the UNIMED campus through skills and opportunities to a stronger future. Drag or use arrow keys to rotate.">
            <img src="assets/images/hero-pathway.svg" alt="A student pathway beginning at campus, moving through skills and opportunities, and rising toward a bright future" width="600" height="700">
          </div>
          <div class="hero__sticker" aria-hidden="true"><span>Skills</span><span>Programme</span><b>1.0</b></div>
          <div class="hero__badge">
            <strong>100</strong>
            <span>First cohort target at UNIMED, Ondo</span>
          </div>
          <div class="hero__index" aria-hidden="true">01 <i></i> 01</div>
        </div>
      </div>

      <a class="hero__scroll" href="#about" aria-label="Scroll to learn about Studentico">
        <span>Scroll to discover</span><i aria-hidden="true"></i>
      </a>

      <div class="ticker" aria-hidden="true">
        <div class="ticker__track">${tickerRun()}${tickerRun()}${tickerRun()}${tickerRun()}</div>
      </div>
    </section>`;
  },
  init(root) {
    const map = root.querySelector('[data-hero-map]');
    if (!map) return;
    let activePointer = null;
    let startX = 0;
    let startY = 0;
    let startXAngle = -4;
    let startYAngle = 0;
    let xAngle = -4;
    let yAngle = 0;
    const draw = () => {
      map.style.setProperty('--map-rotate-x', `${xAngle}deg`);
      map.style.setProperty('--map-rotate-y', `${yAngle}deg`);
    };
    map.addEventListener('pointerdown', (event) => {
      activePointer = event.pointerId;
      startX = event.clientX; startY = event.clientY;
      startXAngle = xAngle; startYAngle = yAngle;
      map.setPointerCapture(activePointer);
      map.classList.add('is-dragging');
    });
    map.addEventListener('pointermove', (event) => {
      if (event.pointerId !== activePointer) return;
      xAngle = Math.max(-22, Math.min(16, startXAngle - (event.clientY - startY) * .12));
      yAngle = startYAngle + (event.clientX - startX) * .25;
      draw();
    });
    const release = (event) => {
      if (event.pointerId !== activePointer) return;
      if (map.hasPointerCapture(activePointer)) map.releasePointerCapture(activePointer);
      activePointer = null;
      map.classList.remove('is-dragging');
    };
    map.addEventListener('pointerup', release);
    map.addEventListener('pointercancel', release);
    map.addEventListener('keydown', (event) => {
      const change = { ArrowLeft: [0, -6], ArrowRight: [0, 6], ArrowUp: [4, 0], ArrowDown: [-4, 0] }[event.key];
      if (event.key === 'Home') { xAngle = -4; yAngle = 0; draw(); event.preventDefault(); return; }
      if (!change) return;
      xAngle = Math.max(-22, Math.min(16, xAngle + change[0]));
      yAngle += change[1];
      draw();
      event.preventDefault();
    });
  },
};
