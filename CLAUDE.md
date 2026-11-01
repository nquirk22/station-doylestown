# CLAUDE.md — Station Doylestown Website

## Project Overview

Static restaurant website for **The Station**. Vanilla JS, HTML, and
CSS — no build tools, no bundler, no framework.

This repository is fork of another website - thelibrarycollegeville.com - and everything related to "The Library Collegeville" must be replaced.

- **Live server:** Files deploy via GitHub Actions (push to `master`) → SCP to
  `/var/www/thestationdoylestown.com/html`

---

## Architecture

### Pages

| File            | Purpose                                            |
|-----------------|----------------------------------------------------|
| `index.html`    | Landing page — hero, hours, tabbed menus           |
| `menus.html`    | Dedicated menus page with lunch/dinner/drinks tabs |
| `contact.html`  | Event inquiry form                                 |
| `location.html` | Location info                                      |
| `events.html`   | Events listing                                     |
| `reserve.html`  | Reservations (links out to Yelp)                   |
| `jobs.html`     | Careers page                                       |

### CSS

Each page has its own CSS file plus shared globals:

- `css/normalize.css` — reset
- `css/main.css` — global styles, fonts, nav, buttons, forms
- `css/index.css` — hero, slider, landing grid
- `css/menus.css`, `css/contact.css`, `css/events.css`, `css/location.css` — page-specific

Breakpoints: **768px**, **1200px**, **1900px**

### JavaScript

**Page scripts** (`js/*.js`): Plain IIFE or module scripts loaded per-page. No shared bundling.

**Web Components** (`js/custom/*.js`): Custom elements extending `HTMLElement`, content injected via `innerHTML` in
`connectedCallback()`.

| Component             | Tag                  | Description                                       |
|-----------------------|----------------------|---------------------------------------------------|
| `app-nav.js`          | `<app-nav>`          | Responsive nav (desktop strip + mobile sidebar)   |
| `main-footer.js`      | `<main-footer>`      | Footer with address, phone, Restaurantji badge    |
| `menu-allday.js`      | `<menu-allday>`      | All-day menu                                      |
| `menu-brunch.js`      | `<menu-brunch>`      | Brunch menu                                       |
| `menu-drinks.js`      | `<menu-drinks>`      | Cocktails, mocktails/ciders, beer, and wine       |
| `menu-happy-hour.js`  | `<menu-happy-hour>`  | Happy hour and bar snacks                         |
| `swipe.js`            | —                    | ES6 module — touch swipe detection used by slider |

### Menus (PDFs)

`assets/menu/` contains:

- `menu-main.pdf`, `menu-drinks.pdf`, `menu-hh.pdf`, `menu-dessert.pdf`

---

## Key Conventions

### Navigation & Platform Detection

- `agentInfo` (set in `main.js`) detects iOS vs Android to serve Apple Maps vs Google Maps links
- Mobile nav open state adds `.fixed` class to `<body>` to prevent scroll
- `<app-nav showHome>` attribute shows a home link when not on index

### Tab Components

- `.tabs-container` elements are activated by `menus.js` → `tabify()`
- Active tab header/content get `.active` class; default tab marked with `.default-tab`

### Slider (index.js)

- Uses `Swipe` class from `js/custom/swipe.js` for touch
- Slide animation via Web Animations API (300ms)
- Debounced wheel scroll support

### Form (contact.js)

- HTML5 validation with custom error display
- Label float animation on focus/blur
- Submits JSON to API endpoint via `postFormDataAsJson()`
- Dialog modal for success/failure feedback

### Fonts

- Adobe Typekit: `gin`, `urw-din`, `p22-typewriter`, `garamond-premier-pro-display`
- Loaded via `<link rel="stylesheet">` in each HTML `<head>`

---

## Restaurant Info (used throughout copy and components)

- **Address:** 194 W. Ashland Street, Doylestown, PA 18901
- **Phone:** 215.348.1663
- **Hours:** Tue–Thu 11:30am–9pm · Fri–Sat 11:30am–10pm · Sun 10am–9pm · Closed Monday
- **Bar:** Tue–Sun 11:30am–11pm (or later)

---

## Deployment

- **Trigger:** Merge to `master` branch
- **Workflow:** `.github/workflows/deploy.yml`
- **Method:** SSH + SCP using secrets `SSH_PRIVATE_KEY`, `PRODUCTION_USERNAME`, `PRODUCTION_SERVER`
- **Target path:** `/var/www/thestationdoylestown.com/html`

No build step — files are deployed as-is.

---

## What to Avoid

- Do not introduce a build system or bundler unless explicitly requested
- Do not add npm/node dependencies — this is intentionally dependency-free
- Menu content lives in JS web components as HTML strings — edit those files, not the HTML pages, to change menu items
- Menu components must follow the Menu Layout Conventions (see the project wiki, `Menu-Layout-Conventions`)
- The form API endpoint is a local proxy; do not change it without confirming the backend setup
