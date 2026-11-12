import { arrow } from '../utils/helpers.js';

export const ctaSection = {
  id: 'get-in-touch',
  render() {
    return `
    <section class="section section--orange final-cta" id="get-in-touch" aria-labelledby="cta-title">
      <div class="container final-cta__inner">
        <p class="eyebrow" data-reveal>Join Studentico</p>
        <h2 class="display-hero" id="cta-title" data-reveal>Be part of the pathway.</h2>
        <p data-reveal>Whether you're a student ready to learn, a professional willing to share knowledge or an organisation interested in supporting student development, there's a place for you in Studentico.</p>
        <div class="final-cta__actions" data-reveal>
          <a class="btn btn--dark" href="#skills">Explore our skills ${arrow()}</a>
          <a class="btn btn--light" href="#partnerships">Support our vision ${arrow()}</a>
          <a class="btn btn--ghost" href="#site-footer">Get in touch ${arrow()}</a>
        </div>
      </div>
    </section>`;
  },
};
