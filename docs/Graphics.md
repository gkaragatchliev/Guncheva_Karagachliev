# Graphics: Адвокатско дружество "Гунчева и Карагачлиев"

## Direction

Minimalist white with mixed Plovdiv visual identity — modern photo on home, historical painting on about, abstract hill graphics on services. No lawyer photos. Inspired by the clean end of Bulgarian law firm sites (manovlaw.com, advokatkrasteva.com) but stripped of WordPress clutter.

## Identity

- Clean lines, generous space, editorial restraint
- Professional but not corporate
- Plovdiv's 7 hills inspire the abstract forms — layered curves suggesting the city's terrain
- Each page gets a different visual treatment (mixed approach, decided)
- Abstract shapes replace lawyer portraits
- The two-partner structure is the visual anchor — paired elements throughout

## Typography

- **Headings:** Inter or system sans-serif
- **Body:** Inter or system-ui
- Single family for simplicity (unlike the personal site which used serif for body)

## Color Palette

```css
--color-bg:         #ffffff;   /* white */
--color-text:       #1a1a1a;   /* near-black */
--color-muted:      #6b6b6b;   /* secondary text */
--color-border:     #e5e5e5;   /* dividers */
--color-accent:     TBD;       /* single muted accent */
--color-shape:      #f0f0f0;   /* abstract form fill */
```

Accent to be chosen from Plovdiv's palette (terracotta roof, warm stone, hill green).

## Per-Page Visual Plan (Decided)

| Page | Visual | Source |
|------|--------|--------|
| **Начало** | Modern Plovdiv landmark photo, full-width hero, dark overlay | Pexels (Roman Theatre) or Pixabay (Old Town) — CC0 |
| **За нас** | Ivan Mrkvička "A Marketplace in Plovdiv" (1888) painting | Wikimedia Commons — public domain |
| **Услуги** | Custom layered SVG curves (7 hills abstraction) | Built from scratch |
| **Контакти** | Subtle abstract or none — map dominates | — |

### Abstract forms (Услуги page + section dividers)
- Inspired by Plovdiv's 7 hills — layered curves, soft silhouettes
- Style: horizontal banded curves suggesting terrain
- Color: very light muted version of accent (`--color-shape`)
- Responsive: simplify or hide on mobile

## Layout

```css
--max-width: 960px;          /* slightly wider than personal site for cards */
--gutter: 1.5rem;
--section-gap: 4rem;
```

## Components

| Component | Style |
|-----------|-------|
| Header | Logo left, phone right, sticky, bottom border |
| Hero | Full-width, Plovdiv photo with dark overlay, center-aligned text |
| Service card | Icon + title + short text, 2-col grid (1-col mobile) |
| Lawyer bio | Side-by-side (2-col), typographic hierarchy, hill-shaped abstract accent |
| Contact section | Address block + embedded map side by side |
| Footer | Centered, small text, all contact repeated |

## References (not copies)

- **manovlaw.com** — clean card layout, restrained palette
- **advokatkrasteva.com** — service card grid, icon per area
- **advokatmarev.com** — balanced header, clear CTA structure
- **Plovdiv identity** — no competitor uses local imagery; this is our differentiator
- Avoid: Арнаудов's heavy tiered menus, dense text blocks, generic legal stock photos
