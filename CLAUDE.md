# Pilegaard — Project Context

## What this is
A marketing website for a small Danish family business — **summer home rentals only** (crane/lift section was removed). Two houses rented directly by the family, no agency.

The prototype was built in claude.ai/design (Direction B — Split Duality). Original prototype: `Direction B - Split Duality.html`. The detail page design is in `Design/Design_2/Home Detail - Havblik.html`. The TypeScript implementation lives in `src/`.

**Live site:** https://bennyboomblaster.github.io/pilegaard-sommerhuse/

## The family
- **Jens & Lone Pilegaard** — owners
- Jens: grew up on a cattle farm on Bornholm, ran it 20 years, now works with agricultural machinery
- Lone: schoolteacher, grew up on her father's cattle farm in Himmerland (Aars, North Jutland)
- Three sons, all now in Copenhagen
- Farm: **Pilegaard** (Varpeløkken 4, 3700 Rønne) — formerly potato and pig farm, now a few cows and hens
- Contact: +45 30 58 90 02 · jens@pilegaard.dk

## The houses

### Arnager, Bornholm
- **Listing:** https://www.sologstrand.dk/hus/95-0264
- Location: Arnager, south coast of Bornholm · 250 m to the beach
- On the farm Pilegaard · Built 1890, renovated 2022
- 2 floors · 100 m² · 1500 m² plot
- 3 bedrooms (double, twins, bunk) · Sleeps 6
- Wood stove, air-to-air heat pump, dishwasher, washer/dryer, induction hobs, Smart TV (streaming), WiFi
- Billiards, BBQ, terrace, first-floor balcony, parking
- Arnager harbour connected by Scandinavia's longest wooden bridge (200 m)
- Images: `Assets/Bornholm/` (26 photos) — facade_1/2/3/4, terrace_1–5, living_1–4, dining_1–3, kitchen_1, bedroom_1–4, bathroom_1, activity_room, grounds_1–3

### Kregme
- **Listing:** https://www.sologstrand.dk/hus/93-3409
- Location: Dagsværmervej 11, Kregme, North Zealand · 400 m to Isefjord, 1.5 km to Arresø
- Built 1969, renovated 2016 (full) + 2025 (partial)
- 97 m² · 1175 m² plot
- 2 bedrooms (2 doubles, bunk) · Sleeps 6
- Wood stove, air-to-air heat pump, dishwasher, washer/dryer, ceramic hobs, Smart TV (streaming), WiFi
- BBQ, open terrace, parking · No pets
- Images: `Assets/Kregme/` (24 photos) — facade_1/2/3, terrace_1–4, living_1–4, kitchen_1, kitchen_dining_1–3, dining_1/2, bedroom_1–3, bathroom_1/2, aerial, grounds

## Stack
- **Vite + React 18 + TypeScript** (strict mode)
- **React Router v7** (HashRouter — required for GitHub Pages)
- No component library — all CSS hand-written
- Google Fonts: Instrument Serif (display/italic), Archivo (headings), Inter (UI), JetBrains Mono (labels/mono)

## Commands
```bash
npm run dev      # dev server at localhost:5173/
npm run build    # tsc + vite build → dist/  (base: /pilegaard-sommerhuse/)
npm run preview  # preview production build
git push         # triggers GitHub Actions → auto-deploys to GitHub Pages
```

## Project structure
```
src/
├── main.tsx
├── App.tsx                  # HashRouter, lang + palette state, edit mode
├── styles/
│   ├── main.css             # all base styles + CSS variables
│   ├── detail.css           # house detail page styles
│   └── house-images.css     # img fill helpers for house cards/hero
├── utils/
│   └── assetUrl.ts          # prepends BASE_URL to image paths (GitHub Pages fix)
├── data/
│   ├── i18n.ts              # trilingual content (en/da/de) + I18nDict type
│   └── houses.ts            # HouseData type + data for both houses
├── pages/
│   ├── HomePage.tsx         # landing page (hero, homes, about, contact, footer)
│   └── HouseDetailPage.tsx  # detail page: gallery, story, amenities, rates, booking, map
└── components/
    ├── TopBar.tsx            # sticky nav (Homes · Family · Contact) + lang switcher
    ├── SplitHero.tsx         # full-width warm hero band
    ├── HomesBand.tsx         # two house cards with real photos → links to detail pages
    ├── AboutB.tsx            # family section (Jens & Lone)
    ├── ContactB.tsx          # contact info + quick booking form
    ├── Footer.tsx
    ├── PilePhoto.tsx         # toned striped placeholder (still used in AboutB)
    └── Tweaks.tsx            # palette switcher panel (edit mode only, postMessage)
```

## Routing
- `/` (hash: `#/`) → HomePage
- `/houses/bornholm` (hash: `#/houses/bornholm`) → Arnager detail page
- `/houses/kregme` (hash: `#/houses/kregme`) → Kregme detail page

URLs use `HashRouter` because GitHub Pages doesn't support server-side routing.

## Key design decisions

**Image paths** — All images served from `Assets/` (set as Vite `publicDir`). Always use `assetUrl('/Folder/file.jpg')` from `src/utils/assetUrl.ts` — never bare `/path` strings. This prepends `import.meta.env.BASE_URL` so paths work both in dev (`/`) and on GitHub Pages (`/pilegaard-sommerhuse/`).

**i18n** — All user-facing text in `src/data/i18n.ts` as typed `I18nDict`. The `t` object is passed as a prop to every component. No context or global state.

**House data** — `src/data/houses.ts` contains `HouseData` type and data for both houses: slug, name, location, bureauUrl, meta tags, quote, story paragraphs, amenities, rate table, nightly rate (for live calculation), gallery image paths, heroImage, and map labels.

**CSS variables** — Palette controlled via `data-palette` on `<body>`. Three options: `default` (red), `autumn` (burnt orange), `coastal` (teal). Tweaks panel only visible in edit mode (postMessage from parent frame).

**Booking form** — Detail page calculates nights × nightly rate live. Submit shows confirmation message for 3.5s. No real backend yet.

## Deployment — GitHub Pages
- Repo: https://github.com/Bennyboomblaster/pilegaard-sommerhuse
- Workflow: `.github/workflows/deploy.yml` — triggers on push to `main`, builds `dist/`, deploys via `actions/deploy-pages`
- GitHub Pages source must be set to **GitHub Actions** (not branch)
- Vite base: `/pilegaard-sommerhuse/` in production, `/` in dev

## What's missing / next steps
- Real booking backend — form currently just shows a confirmation message
- About section photo — `PilePhoto` placeholder still used for Jens & Lone
- More gallery photos on detail pages (currently 3 per house, many more available in Assets/)
- Mobile polish — responsive breakpoints exist but not heavily tested
