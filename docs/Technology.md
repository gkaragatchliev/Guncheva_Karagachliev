# Technology: Адвокатско дружество "Гунчева и Карагачлиев"

## Stack

- **HTML5** — semantic elements (`header`, `nav`, `main`, `section`, `footer`)
- **CSS3** — single stylesheet: reset, layout, components, responsive `@media`
- **Vanilla JS** — mobile menu toggle only (no frameworks, no libraries)

Same approach as the personal site project: no build tools, no backend, no database.

## File Structure

```
/
  index.html          # Начало
  about.html          # За нас
  services.html       # Услуги
  contacts.html       # Контакти
  assets/
    css/styles.css
    js/main.js
    images/           # abstract SVG shapes, favicon
```

## Key Decisions

| Concern | Choice | Why |
|---------|--------|-----|
| Build step | None | 4 static pages, zero complexity |
| CSS approach | Single file, BEM-lite naming | Easy to maintain, no preprocessor needed |
| JS scope | Mobile hamburger menu only | Everything else is CSS |
| Map embed | Google Maps iframe | Copy-paste, zero code, works immediately |
| Abstract shapes | Inline SVG or CSS shapes | No image files to load, keeps it fast |
| Icons for services | Simple SVG inline or unicode | No icon library dependency |
| Font loading | System-ui stack or Inter via Google Fonts | Fast fallback either way |
| Hosting | GitHub Pages or Netlify drop | Both free, zero-config for static files |

## Development Workflow

1. Create HTML structure for all 4 pages
2. Write CSS: reset → layout → components → responsive breakpoints
3. Add mobile menu JS
4. Generate abstract SVG shapes inline
5. Embed Google Map on contacts page
6. Test responsive (mobile first) + validate HTML

## Deployment

- **GitHub Pages:** push to main, enable Pages at repo root
- **Netlify:** drag `project root` folder to app.netlify.com/drop
- **Local:** any static server (`python -m http.server`, VS Code Live Server, etc.)

## Performance Targets

- All pages under 2s on mobile data
- No external dependencies except Google Fonts (optional) and Maps iframe
- Minimal JS — under 1KB

## Maintainability

- To add a practice area: edit `services.html` and `index.html` cards
- To change address/map: edit `contacts.html` and footer include
- No build step, no CI, no database — a text editor is all you need

## Future Options (Not v0)

- Static site generator (11ty, Astro) if pages grow beyond 4-5
- Blog section with SEO value (adds `/blog/` folder and `blog.html`)
- Contact form via static form service (Formspree, Netlify Forms)
