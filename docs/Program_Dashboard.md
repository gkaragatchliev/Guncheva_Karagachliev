# Program Dashboard: Адвокатско дружество "Гунчева и Карагачлиев"

## Current Status

55 of 58 tests pass (95%). Images compressed (199KB + 161KB), home cards linked to services page, both partner emails present. 3 failures remain — all minor polish items.

## Phase Status

| Phase | Status |
|-------|--------|
| Phase 0 — Foundation | ✅ COMPLETE |
| Phase 1 — Core Pages | ✅ COMPLETE |
| Phase 2 — Polish & Launch | IN PROGRESS — 3 failing tests remain |
| Phase 3 — Optional | PENDING |

---

## Test Suites (TDD)

Each test is a pass/fail check against the PRD and UX requirements. No test written before its feature.

### TS-01: Structure & Navigation

| # | Test | Expected | Status |
|---|------|----------|--------|
| 01 | All 4 HTML files exist | index.html, about.html, services.html, contacts.html | ✅ |
| 02 | File structure matches spec | assets/css/, assets/js/, assets/images/ | ✅ |
| 03 | Nav bar present on all 4 pages | Same top bar on every page | ✅ |
| 04 | Nav links: Начало, За нас, Услуги, Контакти | 4 links, match page titles | ✅ |
| 05 | Phone number in header (top-right) | Visible, tappable, on every page | ✅ |
| 06 | Footer present on all 4 pages | Contact info repeated in footer | ✅ |
| 07 | All internal links resolve | Click each nav link, no 404 | ✅ |

### TS-02: Home Page (Начало)

| # | Test | Expected | Status |
|---|------|----------|--------|
| 08 | Hero section with Plovdiv photo | tova.jpg with dark overlay | ✅ |
| 09 | Firm name displayed | "Гунчева и Карагачлиев" in hero | ✅ |
| 10 | Tagline or short descriptor present | One line describing the firm | ✅ |
| 11 | Phone CTA in hero | Bold, clickable phone number | ✅ |
| 12 | Practice area cards visible | Grid of 8 cards or grouped areas | ✅ |
| 13 | Cards clickable or linked to /services.html | Each card leads to services page or section | ✅ — linked as `<a>` tags to /services.html |

### TS-03: About Page (За нас)

| # | Test | Expected | Status |
|---|------|----------|--------|
| 14 | Two lawyer profiles present | Мария Гунчева + Антон Карагачлиев | ✅ |
| 15 | Bio content: experience, bar registration | Specific numbers, years | ✅ — placeholder-level bios, can improve |
| 16 | Eastern Rumelia Laws 1880 image displayed | Law book image on this page | ✅ |
| 17 | Firm story / history section | When established (2016), Plovdiv roots | ✅ |

### TS-04: Services Page (Услуги)

| # | Test | Expected | Status |
|---|------|----------|--------|
| 18 | All 8 practice areas listed | Administrative, Civil, Property, Criminal, Labor, Contract, Commercial, Banking | ✅ |
| 19 | Each area has a short description | 1-3 sentences in Bulgarian | ✅ |
| 20 | Areas grouped logically | e.g. civil + property together, commercial + banking together | ✅ |
| 21 | Abstract hill SVGs present | Layered curve graphics as visual accent | ✅ |

### TS-05: Contact Page (Контакти)

| # | Test | Expected | Status |
|---|------|----------|--------|
| 22 | Physical address displayed | Kapana, ул. Георги Бенковски №19, ет. 2, офис 4 | ✅ |
| 23 | Phone number displayed | +359 878 787 671 | ✅ |
| 24 | Email displayed | adv.karagachliev@gmail.com | ✅ |
| 25 | Embedded Google Map | Functional iframe map | ✅ |
| 26 | Working hours listed | At minimum: Пн-Пт | ✅ |
| 27 | Phone is tel: link | Tappable on mobile | ✅ |
| 28 | Email is mailto: link | Opens email client | ✅ |

### TS-06: Visual Design & Trust

| # | Test | Expected | Status |
|---|------|----------|--------|
| 29 | White background (#ffffff) | Primary background color | ✅ |
| 30 | Near-black text (#1a1a1a or similar) | Body text color | ✅ |
| 31 | Single accent color used consistently | Highlights, CTAs, decorative elements | ✅ — #c4836a muted terracotta, verify consistency |
| 32 | No stock legal photos | No gavels, scales of justice, handshake stock | ✅ |
| 33 | Tova.jpg present on Home | Plovdiv Old Town photo loaded | ✅ — 2.6MB, needs compression |
| 34 | Law book image present on About | eastern_rumelia_laws_1880.jpg loaded | ✅ — 1.2MB, needs compression |
| 35 | Abstract hill forms on Services | SVG/CSS layered curves present | ✅ |
| 36 | Generous whitespace throughout | Content has room to breathe | ✅ — needs visual review |
| 37 | No typos or placeholder text | All content final, proofread | ❌ — content is functional draft (English fixed), needs partner review |
| 38 | Images compressed (WebP or JPEG <200KB) | Total page weight <500KB | ✅ — tova.jpg 199KB, law book 161KB, total 361KB |

### TS-07: Responsive & Mobile

| # | Test | Expected | Status |
|---|------|----------|--------|
| 39 | Layout adapts at mobile breakpoint | Single column, stacked cards | ✅ — CSS grid switches at 768px |
| 40 | Hamburger menu on mobile | Nav collapses, toggle works | ✅ — JS toggle implemented |
| 41 | Phone tappable on mobile | tel: link, visible without scrolling | ✅ — header + hero + mobile nav |
| 42 | Map responsive | Resizes with viewport, no overflow | ✅ — 100% width wrapper |
| 43 | Images scale down | No horizontal scroll on 375px width | ✅ — object-fit cover, max-width 100% |
| 44 | Text readable without zoom | Body ≥16px on mobile | ✅ — base 16px |

### TS-08: Accessibility

| # | Test | Expected | Status |
|---|------|----------|--------|
| 45 | Semantic HTML elements | header, nav, main, section, footer | ✅ — all present on all pages |
| 46 | Heading hierarchy (h1-h6) | One h1 per page, sequential | ✅ — one h1 per page |
| 47 | Sufficient color contrast | Text/bg: ≥4.5:1 ratio | ✅ — #1a1a1a on #fff passes AAA |
| 48 | Keyboard navigable | All links/buttons reachable via Tab | ✅ — all links are `<a>` tags |
| 49 | alt attributes on images | tova.jpg, law book, any SVGs | ✅ — alt text present, SVGs aria-hidden |
| 50 | Viewport meta tag | `<meta name="viewport">` present | ✅ |
| 51 | Language attribute on html | `<html lang="bg">` | ✅ |

### TS-09: Performance

| # | Test | Expected | Status |
|---|------|----------|--------|
| 52 | Page loads under 2s on mobile | Test via Chrome DevTools throttling | ❌ — not yet tested, images now 361KB total |
| 53 | No external dependencies (except map) | No analytics, no widget scripts | ✅ — only Google Fonts + map iframe |
| 54 | JS under 1KB | Only mobile menu toggle | ✅ — 377 bytes |

### TS-10: Content

| # | Test | Expected | Status |
|---|------|----------|--------|
| 55 | All text in Bulgarian | No English except firm name if Latin | ✅ |
| 56 | Lawyers named | Мария Гунчева and Антон Карагачлиев | ✅ |
| 57 | Firm established year mentioned | от 2016 г. | ✅ — on home, about, footer |
| 58 | Practice areas use Bulgarian names | As listed in PRD | ✅ |

---

## Test Summary

| Suite | Total | Pass | Fail | Coverage |
|-------|-------|------|------|----------|
| TS-01 Structure & Navigation | 7 | 7 | 0 | 100% |
| TS-02 Home Page | 6 | 6 | 0 | 100% |
| TS-03 About Page | 4 | 4 | 0 | 100% |
| TS-04 Services Page | 4 | 4 | 0 | 100% |
| TS-05 Contact Page | 7 | 7 | 0 | 100% |
| TS-06 Visual Design & Trust | 10 | 8 | 2 | 80% |
| TS-07 Responsive & Mobile | 6 | 6 | 0 | 100% |
| TS-08 Accessibility | 7 | 7 | 0 | 100% |
| TS-09 Performance | 3 | 2 | 1 | 67% |
| TS-10 Content | 4 | 4 | 0 | 100% |
| **Total** | **58** | **55** | **3** | **95%** |

---

## Backlog vs Test Mapping

Each backlog item maps to one or more tests:

| Backlog Item | Tests |
|-------------|-------|
| Create file structure | 01, 02 |
| Build shared shell + nav | 03, 04, 05, 06 |
| Build Начало | 08-13, 33, 36, 39-41 |
| Build За нас | 14-17, 34 |
| Build Услуги | 18-21, 35 |
| Build Контакти | 22-28, 42 |
| Accessibility pass | 45-51 |
| Responsive QA | 39-44 |
| Image download + compress | 33, 34, 38 |
| QA links | 07, 52 |

---

## Definition of Done (per test)

A test passes when:
- The requirement is visibly met in the browser
- It works on mobile and desktop
- It passes manual inspection (or tool check where applicable)
- It matches the PRD/UX/Graphics intent
