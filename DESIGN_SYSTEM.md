# Rhyme Combinator — Front-End Design System

A living reference for maintaining visual consistency, performance, and polish across every page of the site.

---

## 1. Color & Surface

All colors use CSS custom properties defined in `:root`. Never hard-code hex values outside of `:root`.

```css
:root {
  --bg:        #0b0b0d;              /* page background */
  --surface:   #141416;              /* card / panel background */
  --surface-2: #1a1a1c;             /* nested / elevated surface */
  --border:    rgba(255,255,255,0.07);
  --text:      #ffffff;
  --text-dim:  rgba(255,255,255,0.45);
  --text-muted:rgba(255,255,255,0.28);
  --accent-text: rgba(255,255,255,0.75); /* key/colored heading words */
}
```

**Rules:**
- Dark-on-dark layering only — never place a white surface on top of another white surface.
- Use `rgba(255,255,255,N)` for opacity steps: 0.9 primary → 0.55–0.6 secondary → 0.42–0.45 tertiary → 0.28 muted.
- Glass/blur overlays: `background: rgba(0,0,0,0.50); backdrop-filter: blur(10px);` with a `1px solid rgba(255,255,255,0.07)` border.

---

## 2. Typography

**Font:** Inter (Google Fonts) — weights 200, 300, 400, 500. Always preconnect.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap" rel="stylesheet">
```

**Scale (use `clamp()` for fluid sizing):**

| Role | CSS | Notes |
|---|---|---|
| Hero H1 | `clamp(46px, 7.5vw, 92px)` | weight 200, tracking -0.03em |
| Display heading | `clamp(28px, 3.8vw, 52px)` | weight 300, tracking -0.025em |
| Hero subtitle | `clamp(16.9px, 1.95vw, 20.15px)` | weight 300, line-height 1.75 |
| Body | `13px–15.5px` | weight 300, line-height 1.65 |
| Step title | `15px` | weight 400, tracking -0.01em |
| Card body / quote | `13–13.5px` | weight 300, line-height 1.65–1.7 |
| Labels / meta | `11–12px` | weight 300–400, tracking 0.02–0.04em |

**Rules:**
- Headings: weight 200 for hero-scale, 300 for section-level display.
- Dim secondary words inline: wrap in `<span class="dim">` → `color: rgba(255,255,255,0.5)`.
- Use `letter-spacing: -0.03em` on large display text; tighten to `-0.01em` on body.
- Enable `-webkit-font-smoothing: antialiased` on `body`.

---

## 3. Layout & Spacing

```css
.container { max-width: 1100px; margin: 0 auto; padding: 0 48px; }
.section   { padding: 96px 0; }
.divider   { height: 1px; background: var(--border); margin: 0 48px; }
```

**Grid patterns:**
- Two-column content: `grid-template-columns: 1.05fr 1fr; gap: 56px;`
- Benefit / testimonial cards: `repeat(2, 1fr)` or `repeat(3, 1fr)` with `gap: 14px`
- Audience / product split: `1fr 1fr; gap: 72px;`

**Spacing rhythm:** Use multiples of 4 for micro (4–16 px) and multiples of 12–24 for macro (24–96 px).

---

## 4. Responsive Breakpoints

```css
/* Mobile-first — override up */
@media (min-width: 769px)  { /* tablet+ */ }
@media (min-width: 1024px) { /* desktop */ }
@media (min-width: 1280px) { /* wide desktop */ }

/* Retina mobile — serve higher-res images */
@media (-webkit-min-device-pixel-ratio: 2) and (max-width: 768px),
       (min-resolution: 2dppx) and (max-width: 768px) { }
```

**Mobile rules:**
- Collapse two-column grids to single-column (`grid-template-columns: 1fr`).
- Reduce `.container` padding to `0 20px` below 480 px.
- Reduce `.section` padding to `64px 0` on mobile.
- Hide decorative SVG overlays or reduce their opacity on small screens.
- Ensure tap targets are ≥ 44 × 44 px.
- Benefit / testimonial grids: `repeat(2, 1fr)` on tablet → `1fr` on mobile.

---

## 5. Animations & Motion

### 5a. Scroll-triggered reveal (the default)

Use `IntersectionObserver` — never animate everything on load.

```js
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target); // fire once
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
```

```css
[data-reveal] {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
[data-reveal].visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Stagger:** for lists of cards/steps, add `transition-delay: calc(var(--i) * 80ms)` and set `style="--i:0"` etc. on each child.

### 5b. Typewriter effect

Use for hero subtitles and important section sub-headlines. Wrap each character in a `<span class="dim-char">` at render time (no layout shift). Reveal chars with `requestAnimationFrame` or `setTimeout` loop. Show a blinking cursor (`|`) while typing.

```css
.dim-char { opacity: 0; transition: opacity 0.04s; }
.dim-char.dim-visible { opacity: 1; }

@keyframes cursor-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
.cursor { animation: cursor-blink 0.65s step-end infinite; }
```

**Trigger:** start the typewriter when the element enters the viewport (use `IntersectionObserver`), not on page load.

**Speed:** ~28–40 ms per character for body text; 18–24 ms for short hero subtitles.

### 5c. Hover micro-interactions

```css
/* Buttons */
.btn:hover { background: #fff; transform: translateY(-1px); }
.btn        { transition: background 0.15s, transform 0.15s; }

/* Cards */
.card:hover { border-color: rgba(255,255,255,0.10); }
.card        { transition: border-color 0.2s; }

/* Slide controls / overlaid UI */
.control { opacity: 0; transition: opacity 0.25s ease; }
.parent:hover .control { opacity: 1; }
```

### 5d. Continuous motion (tickers, scrollers)

Drive with `requestAnimationFrame` at a constant **pixels-per-second** (not CSS `animation-duration`) so speed is consistent regardless of screen width. Duplicate the track content so it loops seamlessly.

```js
const PPS = 55; // pixels per second
let x = 0, last = null;
function tick(ts) {
  if (last) x -= PPS * (ts - last) / 1000;
  if (x <= -halfWidth) x += halfWidth; // seamless loop
  track.style.transform = `translateX(${x}px)`;
  last = ts;
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
```

### 5e. Slideshows

Slide in/out with `translateX(±100%)` → `translateX(0)` using CSS `transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)`. Always use `will-change: transform` on sliding elements. Auto-advance every 4–6 s; pause on hover; resume on mouse-leave.

### 5f. General motion rules

- Prefer `opacity` + `transform` — never animate `width`, `height`, or `margin` (triggers layout).
- Ease in: `ease` or `cubic-bezier(0.25,0.46,0.45,0.94)`. Ease out: `ease-out`.
- Duration sweet-spot: 150 ms (micro) → 300 ms (UI state) → 550–600 ms (entrance reveals).
- Respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## 6. Components

### Section label
```html
<p class="section-label">Label text</p>
```
```css
.section-label {
  font-size: 12px; font-weight: 400; letter-spacing: 0.02em;
  color: var(--text-dim); display: flex; align-items: center; gap: 8px;
}
.section-label::before {
  content:''; width:6px; height:6px; border-radius:50%;
  background: var(--text-dim); flex-shrink:0;
}
```

### Cards
- `border-radius: 14px`; border `1px solid rgba(255,255,255,0.055)`; background `var(--surface)`.
- Padding: `28–32px` vertical, `26–28px` horizontal.
- Hover lifts border opacity to `0.10`.

### Buttons (primary CTA)
```css
.btn-primary {
  background: rgba(250,248,244,0.93);
  color: #0c0c10;
  border-radius: 32px;
  padding: 12px 30px;
  font-size: 14px; font-weight: 500; letter-spacing: -0.01em;
  border: 1px solid rgba(200,195,185,0.5);
  transition: background 0.15s, transform 0.15s;
}
.btn-primary:hover { background: #fff; transform: translateY(-1px); }
```

### Glass overlays (ticker, captions, controls)
```css
background: rgba(0,0,0,0.50);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255,255,255,0.07–0.09);
```

### Vertical step list
- Left-pad the list `44px`; draw a `1px` vertical rule at `left: 12px` using `::before`.
- Each step icon is `26 × 26 px`, `position: absolute; left: -44px`.
- Steps fade in with scroll reveal, staggered by ~120 ms each.

---

## 7. Images & Video

### Hero background
Serve three sizes — choose based on viewport and DPR:

| File | Resolution | Used when |
|---|---|---|
| `hero-bg-sm.jpg` | ~800 px wide | mobile (1×) |
| `hero-bg-md.jpg` | ~1400 px wide | mobile retina (2×) |
| `hero-bg-lg.jpg` | ~2200 px wide | desktop |

```css
.hero-bg { background: url('../assets/optimized/hero-bg-sm.jpg') center/cover no-repeat, #06060a; }
@media (min-width: 769px) { .hero-bg { background: url('../assets/optimized/hero-bg-lg.jpg') ... } }
@media (-webkit-min-device-pixel-ratio: 2) and (max-width: 768px),
       (min-resolution: 2dppx) and (max-width: 768px) { .hero-bg { background: url('../assets/optimized/hero-bg-md.jpg') ... } }
```

### General image best practices
- Export JPEGs at 80–85% quality (or use WebP with JPEG fallback).
- Always set explicit `width` + `height` on `<img>` to prevent layout shift (CLS).
- Add `loading="lazy"` to every image **below the fold**.
- Add `fetchpriority="high"` to the hero / LCP image.
- Use `object-fit: cover` inside fixed-aspect containers.
- Press logos: `filter: brightness(0) invert(1); opacity: 0.55;` for consistent monochrome treatment.

### Video
- Prefer MP4 (H.264) for widest compatibility; provide WebM (VP9) as a `<source>` alternative.
- For background/ambient video: `autoplay muted loop playsinline`.
- Lazy-load videos below the fold: set `preload="none"` and swap `src` via `IntersectionObserver`.
- Cap ambient video bitrate at ~1–2 Mbps; crop to shortest possible loop (≤ 8 s ideal).
- Always pair video with a `poster` image so something renders before the video loads.

### Asset pipeline
1. Run all hero/section images through an optimizer (e.g. `sharp`, Squoosh, or `imagemin`).
2. Place originals in `assets/` and exports in `assets/optimized/`.
3. Never commit unoptimized images over ~400 KB.

---

## 8. Performance

- **Critical CSS inline** — keep `<style>` above-the-fold styles in `<head>`; load heavy sections async if needed.
- **Font loading** — always `<link rel="preconnect">` before the Google Fonts stylesheet. Use `display=swap` (already in the URL).
- **`will-change`** — apply only to elements that are actively animating (slideshows, tickers). Remove after animation completes.
- **`contain: strict`** — apply to isolated, fixed-size components (slideshows, phone mockups) to limit browser paint scope.
- **Avoid layout thrash** — batch DOM reads before DOM writes; never read a layout property inside a write loop.
- **Debounce resize handlers** — 100–150 ms.
- **Minimize repaints** — prefer `transform` and `opacity` over positional / dimensional changes.

---

## 9. Accessibility & Semantics

- Use semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`.
- Every `<img>` needs `alt` text; decorative images use `alt=""`.
- Interactive elements (buttons, links) must be keyboard-focusable. Add `:focus-visible` styles.
- Color contrast: primary text on `--bg` must meet WCAG AA (≥ 4.5:1).
- Autoplay video must be `muted`; provide a pause button if the video has meaningful content.
- Ticker / carousel motion: pause on `prefers-reduced-motion`.

---

## 10. File & Code Conventions

- One `<style>` block at the top of each HTML page; organize with `/* ── SECTION ─── */` banners.
- CSS custom properties in `:root`; never scatter magic numbers.
- JS: vanilla ES2020+, no framework unless the project already uses one.
- Comment non-obvious JS logic; avoid commented-out dead code in production files.
- Folder structure:
  ```
  /assets/          raw originals + index.html (main site)
  /assets/optimized/ processed images/video
  /message-ai/       sub-page or campaign page
  ```

---

## 11. Quick Checklist Before Shipping

- [ ] All images optimized and correctly sized for mobile/retina/desktop
- [ ] Hero image uses `fetchpriority="high"` or is inlined as CSS background
- [ ] All below-fold images use `loading="lazy"`
- [ ] Fonts preconnected and subset/limited to weights in use
- [ ] Scroll-reveal `IntersectionObserver` replaces any `onload` animation triggers
- [ ] Typewriter only fires when the element enters the viewport
- [ ] Ticker/slider uses RAF at constant px/s (not CSS `animation-duration`)
- [ ] `will-change` applied only to actively animating elements
- [ ] `prefers-reduced-motion` media query reduces/disables animations
- [ ] Two-column grids collapse gracefully at ≤ 768 px
- [ ] Tap targets ≥ 44 × 44 px on mobile
- [ ] No layout shift (CLS) from images or fonts loading
- [ ] Lighthouse Performance ≥ 90 on mobile
