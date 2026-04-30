# Design Notes — Beau Lewis Personal Site

Reference for content, assets, and design decisions pulled from the Framer draft at https://nurtured-objects-614394.framer.app/.

Template used: **Portia Portfolio Template** (neo-brutalist + editorial).

---

## Design System

| Token | Value |
|---|---|
| Background | `#ffffff` |
| Ink | `#000000` |
| Ink dim | `rgba(0,0,0,0.55)` |
| Ink muted | `rgba(0,0,0,0.38)` |
| Rule | `rgba(0,0,0,0.12)` |

**Fonts** (loaded via `next/font/google` in [src/app/layout.tsx](src/app/layout.tsx)):
- Body: **Inter** — 400/500/600/700
- Display: **Inter Tight** (proxy for Inter Display) — 700/900

**Type scale** — Framer styles panel, ported to [src/app/globals.css](src/app/globals.css):

| Name | Size | Line-height |
|---|---|---|
| h1 | 168px | 0.9 |
| h2 | 120px | 1.0 |
| nav | 72px | 1.0 |
| menu | 60px | 1.0 |
| lg | 56px | 1.1 |
| md | 28px | 1.2 |
| sm | 21px | 1.2 |
| meta / btn | 17px | 1.3 |
| label | 15px | 1.4 |

In components, large type uses `clamp(...)` so it scales responsively from mobile to 1440+ without media queries.

**Theme decision**: Framer design is **light theme** (white bg, black Inter Display). Superseded the dark palette in `DESIGN_SYSTEM.md`. Motion rules (reveal, reduced-motion) from that file are still in use.

---

## Pages

| Route | File | Source |
|---|---|---|
| `/` | [src/app/page.tsx](src/app/page.tsx) | Framer home |
| `/about` | [src/app/about/page.tsx](src/app/about/page.tsx) | Framer `/about` |
| `/work` | [src/app/work/page.tsx](src/app/work/page.tsx) | Framer `/work` |
| `/work/[slug]` | [src/app/work/[slug]/page.tsx](src/app/work/[slug]/page.tsx) | Framer 7 project pages, data in [src/lib/projects.ts](src/lib/projects.ts) |

7 project slugs: `cofounders`, `goldieblox`, `crunchlabs`, `rhyme-combinator`, `2020-election`, `searchandmaps`, `windowsslideshow`.

Content copy was extracted from the Framer `searchIndex.json` (Framer's built-in search artifact — has every page's H1/H2/paragraph content). See [src/lib/projects.ts](src/lib/projects.ts).

---

## Shared components

- [src/components/Nav.tsx](src/components/Nav.tsx) — fixed top bar with `mix-blend-difference` so it reads on both light and dark backgrounds. "Menu" button opens a fullscreen overlay with big type links.
- [src/components/Footer.tsx](src/components/Footer.tsx) — "WILL YOU BUILD WITH ME?" headline + contact links. Matches Framer footer copy.
- [src/components/Reveal.tsx](src/components/Reveal.tsx) — Framer Motion `whileInView` wrapper. Fires once at 15% intersection, honors `prefers-reduced-motion`.
- [src/components/Typewriter.tsx](src/components/Typewriter.tsx) — RAF-based character reveal, viewport-triggered. Not used on any page yet but ready if we want the hero subtitle to type.

---

## Assets

**User-provided** in `public/photos/`:
- `Beau Final.jpg` — hero portrait (homepage)
- `Co-Founders-Poster-updatedlogo.jpg` — Co-Founders musical poster (home + project page)
- `CryptoThumbnail-FINAL.png` — Rhyme Combinator thumbnail
- `IMG_7970 cropped.jpg` — About page portrait

**Framer CDN mirror** in `public/framer-ref/` — all 13 images from the original Framer site, used as fallback project covers until you provide higher-res replacements.

---

## Known gaps / follow-ups

- **Hero image**: Framer used a shot of Beau in front of a rainbow drip mural. `public/photos/Beau Final.jpg` is the current portrait — replace if you want the mural shot instead.
- **Project cover images**: `goldieblox`, `crunchlabs`, `2020-election`, `searchandmaps`, `windowsslideshow` use Framer CDN versions. Swap with originals when available.
- **Menu nav**: current "Menu" button opens a simple fullscreen overlay. Framer's original may have more motion — enhance if desired.
- **Typewriter**: primitive exists but not wired up. Add to hero subtitle if you want the DESIGN_SYSTEM.md §5b effect.
- **Favicon**: using Framer's template icon (`public/favicon.png`). Replace with your own mark.
- **About "Based in"**: Framer template said "Montevideo". I changed it to "Seattle / California" to match the home page bio.

---

## Verification status

- [x] `npm run build` — 12 routes prerender cleanly
- [x] `npm run dev` — home, /about, /work, /work/cofounders all render at 1440×900
- [ ] Mobile responsive check (375px)
- [ ] `prefers-reduced-motion` smoke test
- [ ] Lighthouse pass
