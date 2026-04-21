# Pilegaard — Project Context

## What this is
A marketing website for a small Danish family business. Two products:
- **Summer home rentals** — two cabins (Havblik, Skovly) on the west coast of Jutland
- **Crane hire** — a small fleet of spider lifts, truck crane, and scissor lift based in Ringkøbing

The prototype was built in claude.ai/design (Direction B — Split Duality). The original prototype file is `Direction B - Split Duality.html`. The TypeScript implementation lives in `src/`.

## Stack
- **Vite + React 18 + TypeScript** (strict mode)
- No routing library — single page, anchor-link navigation
- No component library — all CSS is hand-written in `src/styles/main.css`
- Google Fonts: Instrument Serif (display), Archivo (industrial/headings), Inter (UI), JetBrains Mono (labels/mono)

## Commands
```bash
npm run dev      # start dev server
npm run build    # tsc + vite build → dist/
npm run preview  # preview production build
```

## Project structure
```
src/
├── main.tsx               # entry, mounts App, imports CSS
├── App.tsx                # root: lang state, tweaks state, edit mode listener
├── styles/main.css        # all styles (no CSS modules)
├── data/
│   └── i18n.ts            # trilingual content dict (en/da/de) + I18nDict type
└── components/
    ├── TopBar.tsx          # sticky nav + language switcher (en/da/de)
    ├── SplitHero.tsx       # hero — "split" (two-column) or "stacked" layout
    ├── HazardStrip.tsx     # orange ticker strip between hero and homes
    ├── HomesBand.tsx       # two homes (Havblik / Skovly) with placeholder photos
    ├── LiftsBand.tsx       # three-column crane fleet cards
    ├── AboutB.tsx          # family section (Kirsten & Jens)
    ├── ContactB.tsx        # contact info + booking form
    ├── Footer.tsx          # footer with company name and tagline
    ├── PilePhoto.tsx       # toned striped placeholder (replaces real photos)
    └── Tweaks.tsx          # palette/layout panel, only visible in edit mode
```

## Key design decisions

**i18n pattern** — All user-facing text lives in `src/data/i18n.ts` as a typed `I18nDict`. The `t` object is passed as a prop to every component. No context or global state for translations — keep it simple.

**PilePhoto** — Placeholder component that renders a toned striped rectangle with a label. Replace with `<img>` tags when real photos are ready. Tones: `warm`, `red`, `forest`, `steel`, `concrete`, `cream`, `orange`, `sky`, `dune`.

**Tweaks panel** — Palette and hero layout can be toggled via a floating panel. Panel only appears when an `__activate_edit_mode` postMessage is received (from a parent frame). The `Tweaks` type is exported from `App.tsx`.

**CSS variables** — Palette is controlled via `data-palette` on `<body>`. Three palettes: `default` (red), `autumn` (burnt orange), `coastal` (teal). Variables defined in `:root` in `main.css`.

**Hero layouts** — `SplitHero` supports two layouts passed as a prop:
- `split` — two-column side by side (warm/steel)
- `stacked` — full-width warm band + full-width steel band

## Content
- Business name: **Pilegaard** (Pilegaard Udlejning ApS)
- Location: Klitvej 14, 6950 Ringkøbing, Denmark
- Phone: +45 97 00 00 00
- Email: hej@pilegaard.dk
- Languages: Danish, English, German

### Homes
| | Havblik | Skovly |
|---|---|---|
| Setting | Dunes / sea view | Pine woods / fjord |
| Sleeps | 6 | 6 |
| Features | Sauna | Wood stove |
| Price (DK) | 4.800 kr / week | 4.200 kr / week |

### Crane fleet
| Unit | Reach | Notes |
|---|---|---|
| Spider lift | 23m | Tracked, indoor-safe, 230V |
| Truck crane | 30m | Road-legal, operator included |
| Scissor lift | 12m | Electric, narrow access |

## What's missing / next steps
- Real photos — swap `<PilePhoto>` for `<img>` in each component
- Detail pages — `Home Detail — Havblik.html` and `Lifts — Fleet.html` are referenced in the prototype but not yet built
- Actual booking logic — form currently `alert('Sent!')`
- Map section — `nav_map` key exists in i18n but the section isn't built yet
