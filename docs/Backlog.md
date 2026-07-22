# Backlog: Адвокатско дружество "Гунчева и Карагачлиев"

## 1. Product Goal

Deliver a polished, static law firm website that helps potential clients understand the firm's practice areas, trust the lawyers, and make contact — fast.

## 2. Delivery Strategy

### Phase 0 — Foundation
Set up file structure, visual system, shared page shell, image assets.

### Phase 1 — Core Pages
Build all 4 pages: Начало, За нас, Услуги, Контакти.

### Phase 2 — Polish and Launch
Responsive QA, accessibility, content finalization, deployment.

### Phase 3 — Optional Enhancements
Blog, testimonials, contact form — only if needed later.

---

## 3. Backlog Items

| Priority | When | Feature | Status | Outcome |
|---|---|---|---|---|
| P0 | Phase 0 | Create project file structure | NOT STARTED | 4 HTML pages + assets/ folders |
| P0 | Phase 0 | Define visual design system | DONE | Graphics.md: white bg, Plovdiv palette, per-page images |
| P0 | Phase 0 | Choose accent color | NOT STARTED | Pick from terracotta / warm stone / sage |
| P0 | Phase 0 | Download images (2) | NOT STARTED | tova.jpg (Old Plovdiv) + eastern_rumelia_laws_1880.jpg |
| P0 | Phase 0 | Create shared page shell | NOT STARTED | Header, nav, footer pattern across all pages |
| P0 | Phase 1 | Build Начало (Home) | NOT STARTED | Hero with tova.jpg overlay + firm name + phone + practice area cards |
| P0 | Phase 1 | Build За нас (About) | NOT STARTED | Two lawyer bios + law book image + firm story |
| P0 | Phase 1 | Build Услуги (Services) | NOT STARTED | All 8 practice areas with descriptions, grouped, abstract hill forms |
| P0 | Phase 1 | Build Контакти (Contact) | NOT STARTED | Address, phone, email, working hours, embedded Google Map |
| P0 | Phase 1 | Implement navigation | NOT STARTED | Top bar: Начало | За нас | Услуги | Контакти, phone in header |
| P0 | Phase 2 | Improve accessibility | NOT STARTED | Semantic HTML, sufficient contrast, keyboard nav |
| P0 | Phase 2 | Optimize responsive behavior | NOT STARTED | Mobile-first, hamburger menu, single-column on small screens |
| P0 | Phase 2 | Write lawyer bios | NOT STARTED | Мария Гунчева + Антон Карагачлиев — background, bar registration |
| P0 | Phase 2 | Write practice area descriptions | NOT STARTED | Short description per area, clear Bulgarian |
| P0 | Phase 2 | Add .gitignore | NOT STARTED | Exclude .venv/, node_modules/, .DS_Store, Thumbs.db |
| P0 | Phase 2 | QA links, map, images | NOT STARTED | All links resolve, map loads, images display |
| P0 | Phase 2 | Deploy the site | NOT STARTED | GitHub Pages or Netlify |
| P1 | Phase 3 | Blog / Статии section | NOT STARTED | SEO value, legal articles |
| P1 | Phase 3 | Client testimonials section | NOT STARTED | Social proof |
| P2 | Phase 3 | Contact form via static service | NOT STARTED | Formspree or Netlify Forms |

---

## 4. Sprint Plan

### Sprint 1 — Foundation and Structure
- Create file structure (4 HTML pages + assets/)
- Choose accent color
- Download tova.jpg and eastern_rumelia_laws_1880.jpg
- Build shared header, nav, footer
- Build mobile hamburger menu (JS)

### Sprint 2 — Core Pages
- Build Начало: hero + practice cards
- Build За нас: lawyer bios + law book image
- Build Услуги: 8 areas grouped + abstract hill SVGs
- Build Контакти: contact info + embedded map
- Write all content (bios, descriptions)

### Sprint 3 — Polish and Launch
- Responsive QA (mobile, tablet, desktop)
- Accessibility pass (semantic HTML, contrast, keyboard)
- Add .gitignore
- QA everything
- Deploy

---

## 5. Definition of Done

A backlog item is done when:
- it matches the PRD and UX intent
- it works on mobile, tablet, and desktop
- it is readable and accessible
- it fits the static, no-backend approach
- it can be maintained with a text editor only

---

## 6. Notes for Implementation

- All text in Bulgarian only
- No lawyer photos — use abstract forms and Plovdiv imagery instead
- Phone number must be tappable on mobile (tel: link)
- Map embed on contacts, footer on every page
- Keep total page weight under 500KB (images compressed)
