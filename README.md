# STUDENTICO Website — Phase 1: Structure & Visual Design System

A one-page static website for **Studentico** — *More Than a Brand. It's a Pathway.*

Built with **HTML5, CSS3 and vanilla JavaScript (ES modules)** only. No framework, no build step.
The code is organised like a component-based app: every page section is its own module.

> Phase 1 covers structure, layout, visual identity, content presentation and responsive design.
> WhatsApp, registration, payments, databases, auth and external APIs are intentionally **not** included.

---

## Run it

ES modules do not load from `file://`, so use any simple local server from this folder:

```bash
# Python (installed on most machines)
python3 -m http.server 8080

# or Node
npx serve .
```

Then open <http://localhost:8080>. (VS Code's *Live Server* extension also works.)

Fonts (Anton, Oswald, DM Sans, Playfair Display) load from Google Fonts. Offline, the site falls back to Impact / system fonts.

---

## Project structure

```
studentico-website/
├── index.html                 # Shell: skip link, header / main / footer mount points
├── favicon.svg
├── assets/
│   ├── logo/                  # Wordmark (dark + light) and square mark (SVG)
│   ├── icons/                 # One line icon per skill (SVG)
│   └── images/
│       ├── skills/            # 10 skill illustrations
│       ├── placeholders/      # facilitator.svg, team.svg (replace with real photos)
│       └── hero-pathway.svg, about-collage.svg, vision-campus.svg
├── css/
│   ├── main.css               # Entry point: @imports the files below, in order
│   ├── variables.css          # Design tokens: colours, type scale, spacing, radii, shadows
│   ├── typography.css         # Fonts, headings, eyebrow, serif accent
│   ├── layout.css             # Reset, container, section scaffolding, reveal animation
│   ├── components.css         # One block per section/component, in page order
│   └── responsive.css         # Breakpoints: 1200 / 1024 / 920 / 860 / 600 / 380
└── js/
    ├── main.js                # Entry: renders all components in order, then starts reveal animations
    ├── data/
    │   └── content.js         # ALL copy and data (skills, pricing, facilitators, team, partners…)
    ├── utils/
    │   └── helpers.js         # qs/qsa, escapeHtml, icon, reveal observer, scrollToHash, trapFocus
    └── components/
        ├── navbar.js          # Sticky nav, mobile menu, smooth scroll, scroll-spy active state
        ├── hero.js            # Hero + ticker
        ├── about.js
        ├── ecosystem.js
        ├── skills.js          # Skill cards, pricing, cohort target, info strip, native <dialog> modal
        ├── facilitators.js
        ├── team.js
        ├── partnerships.js    # Navy sponsorship section + recognition slots
        ├── vision.js
        ├── cta.js             # Final call to action
        └── footer.js
```

### How components work

Each component exports an object with an `id`, a `render()` that returns an HTML string, and (optionally)
an `init(root)` for behaviour. `main.js` mounts them in order. To add a section: create
`js/components/<name>.js`, add its styles to `components.css`, and add it to the `sections` array in `main.js`.

---

## Editing content

Almost everything is in **`js/data/content.js`**.

| To change…                    | Edit                                                                      |
| ----------------------------- | ------------------------------------------------------------------------- |
| Facilitators                  | `facilitators` array — set `photo`, `name`, `skill`, `bio`, `background`, `placeholder: false` |
| Team members                  | `team` array — same idea                                                  |
| Skill copy / images           | `skills` array (images live in `assets/images/skills/`)                   |
| Prices                        | `pricing` array                                                           |
| Contact details, social links | `contact` and `socials`                                                   |

Add a new photo to `assets/images/` (e.g. `assets/images/facilitators/name.jpg`) and point `photo` at it.
Add one object to an array to add another card — the grid adapts automatically.

## Design system at a glance

- **Palette:** Warm Cream `#FFF6E9` (primary background) · Studentico Orange `#FFA500` (CTAs, highlights) · Deep Navy `#050510` (partnerships only) · Black `#111111` · White `#FFFFFF`
- **Type:** Anton (display) · DM Sans (body) · Oswald (labels, buttons) · Playfair Display italic (editorial accents)
- **Accessibility:** semantic landmarks, skip link, visible focus states, keyboard-operable menu and modal (native `<dialog>`), `prefers-reduced-motion` respected. Orange is used for large text/backgrounds; a darker `--orange-ink` is used where orange text sits on cream.

## Content integrity (Phase 1)

Studentico is just starting, so the site contains **no** invented testimonials, statistics, partners, sponsor logos or past cohorts.
The **100 students** figure is presented explicitly as a *first cohort target*. Facilitator, team, contact and training details are clearly marked placeholders. Imagery is original SVG artwork that can be swapped for real photography.

## Deliberately left for later phases

WhatsApp enquiry flow, registration / application handling, payment, backend or database, admin dashboard, authentication, external APIs. The skill popup is a visual placeholder with a disabled enquiry button.
