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
            <div class="about__diagram" data-diagram tabindex="0" role="img" aria-label="Interactive three-dimensional growth pathway. Drag or use the arrow keys to rotate it.">
              <div class="about__diagram-scene">
                <span class="about__diagram-floor"></span>
                <span class="about__diagram-path"></span>
                <span class="about__diagram-cube about__diagram-cube--one"></span>
                <span class="about__diagram-cube about__diagram-cube--two"></span>
                <span class="about__diagram-orb"><i></i></span>
                <span class="about__diagram-ring"></span>
              </div>
            </div>
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
            <p>Studentico is more than a conventional business. It is being built as a movement and a student-focused ecosystem — beginning now with practical skills and empowerment.</p>
          </div>
        </div>
      </div>
    </section>`;
  },
  init(root) {
    const diagram = root.querySelector('[data-diagram]');
    if (!diagram) return;

    let pointerId = null;
    let startX = 0;
    let startY = 0;
    let startRotateX = -6;
    let startRotateY = 0;
    let rotateX = -6;
    let rotateY = 0;

    const render = () => {
      diagram.style.setProperty('--diagram-rotate-x', `${rotateX}deg`);
      diagram.style.setProperty('--diagram-rotate-y', `${rotateY}deg`);
    };
    const reset = () => { rotateX = -6; rotateY = 0; render(); };

    diagram.addEventListener('pointerdown', (event) => {
      pointerId = event.pointerId;
      startX = event.clientX;
      startY = event.clientY;
      startRotateX = rotateX;
      startRotateY = rotateY;
      diagram.setPointerCapture(pointerId);
      diagram.classList.add('is-dragging');
    });
    diagram.addEventListener('pointermove', (event) => {
      if (event.pointerId !== pointerId) return;
      rotateY = startRotateY + (event.clientX - startX) * 0.32;
      rotateX = Math.max(-25, Math.min(18, startRotateX - (event.clientY - startY) * 0.13));
      render();
    });
    const endDrag = (event) => {
      if (event.pointerId !== pointerId) return;
      if (diagram.hasPointerCapture(pointerId)) diagram.releasePointerCapture(pointerId);
      pointerId = null;
      diagram.classList.remove('is-dragging');
    };
    diagram.addEventListener('pointerup', endDrag);
    diagram.addEventListener('pointercancel', endDrag);
    diagram.addEventListener('keydown', (event) => {
      const turns = { ArrowLeft: [0, -5], ArrowRight: [0, 5], ArrowUp: [4, 0], ArrowDown: [-4, 0] };
      if (event.key === 'Home') { event.preventDefault(); reset(); return; }
      if (!turns[event.key]) return;
      event.preventDefault();
      rotateX = Math.max(-25, Math.min(18, rotateX + turns[event.key][0]));
      rotateY += turns[event.key][1];
      render();
    });
  },
};
