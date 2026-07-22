# UX: Адвокатско дружество "Гунчева и Карагачлиев"

## UX Objective

Clean, trustworthy, immediate. Visitors should understand who the lawyers are and how to reach them within 5 seconds.

## Core Principle

A potential client should never have to hunt for a phone number or wonder what the firm handles.

## Personas

1. **Individual needing legal help** — wants to see practice areas and call immediately. Scans for "do they handle my problem?"
2. **Small business owner** — needs commercial/banking law support. Looks for credibility and relevant expertise.
3. **Referred visitor** — was told the name, wants to confirm address and contact info fast.

## Navigation

- Top bar: Начало | За нас | Услуги | Контакти
- Phone number always visible in header (top-right)
- No dropdowns — everything is 1 click

## Content Presentation

- Home: firm name + tagline + bold phone CTA + practice area cards
- Services: grouped practice areas with short descriptions per area
- About: two lawyer bios side by side
- Contact: address, map, phone, email, working hours

## Tone

Professional, restrained, competent. Not aggressive, not overly warm. Bulgarian only.

## Mobile

- Tap-to-call on every page header
- Single-column layout, hamburger menu
- Map collapses to full-width underneath contact details

## Interactivity

- Hover: color / underline only, no scale transforms
- Mobile menu: simple toggle (CSS or minimal JS)
- Links: underline on hover

## Accessibility

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Sufficient contrast (white bg + near-black text)
- Keyboard-navigable

## Success Criteria

- Practice areas scannable in < 5s
- Phone reachable in 1 click from any page
- Contact info visible without scrolling on Начало
- Full site loads under 2s on mobile data
