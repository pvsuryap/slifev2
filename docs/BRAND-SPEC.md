# Sweeyam Life — Brand & Design Specification

> This document is the single reference that any AI, designer, or developer can feed
> to build or rebuild Sweeyam Life properties while preserving brand identity.
>
> **How to use:** follow the tokens and rules literally. When in doubt, resolve toward
> the brand pillars (below). This spec is the contract; visuals implement it.
>
> Companion file: [`ARCHITECTURE.md`](./ARCHITECTURE.md) (systems, connectors, wave process).

---

## 1. Brand Identity

| Attribute | Value |
|-----------|-------|
| Name | Sweeyam Life |
| Tagline | Return to self, to nature and to meaningful everyday rituals. |
| Positioning | An accessible premium lifestyle and self-care brand rooted in nature, heritage and thoughtful science. Kind to you and the Earth. |
| Promise | Everyday care that works honestly, feels joyful, and carries meaning beyond the moment of use. |
| Pillars | Radical honesty · Sustainability · Heritage wisdom · Thoughtful science · Inclusivity |
| Tone of voice | Quiet, assured, warm, precise. Never hypey. Short sentences, considered vocabulary, Indian-English native voice. |
| Audience | Customers (self-care/conscious living), investors, suppliers/artisans, R&D/formulation partners, women entrepreneurs, press. |
| Domain (canonical) | `https://www.sweeyamlife.in/` — the live site; `.co.in` 301-redirects to `.in` except MX. **All canonicals, OG URLs, JSON-LD and sitemap must use `.in`.** Email stays on `.co.in` (`*@sweeyamlife.co.in`). |

### Voice examples
- Do: "Everyday care that works honestly, feels joyful, and carries a sense of care beyond the moment of use."
- Don't: "Revolutionary formula! #1 in the market!"

---

## 2. Color System

Semantic palette — every colour carries a job. Do not introduce new hues without a
documented reason; do not use a colour outside its job.

| Token | Hex | Role / meaning | Usage |
|-------|-----|----------------|-------|
| `--navy` | `#1A365D` | Scientific wisdom, empirical research, clarity | Headings, primary text, dark surfaces, primary buttons |
| `--navy-deep` | `#10233D` | — | Darkest surfaces: footer, hero backdrop, mobile menu |
| `--navy-soft` | `#284B77` | — | Secondary dark surfaces, hover states |
| `--white` | `#FAFAFA` | Purity, openness | Page background, text on dark |
| `--paper` | `#FFFDF9` | — | Slightly warm page/card background |
| `--green` | `#2D5A27` | Sustainable harmony, growth | Accents, bullets, highlights, success/status |
| `--green-deep` | `#1E3D1A` | — | Dark green surfaces, hover |
| `--brown` | `#5C4033` | Grounded authenticity, integrity | Borders, rules, anchors, secondary accents |
| `--brown-deep` | `#402C23` | — | Dark brown surfaces |
| `--cream` | `#F4EFE6` | — | Warm section bands, muted cards |
| `--brass` | `#B08D57` | Premium warmth | Small premium accents (eyebrows on dark, focus rings) |
| `--brass-light` | `#D9C298` | — | Accents on dark surfaces, links on dark |
| `--ink` | `#1C1B18` | — | Body text on light |
| `--ink-soft` | `#565149` | — | Secondary body text |
| `--line` | `rgba(26,54,93,.15)` | — | Hairlines, borders, dividers |

### Usage ratios (approximate)
- Light surfaces (navy headings/ink body on white/paper): ~70% of any page.
- Dark surfaces (navy-deep hero/footer/bands): ~20%.
- Green (accents only): ~5%. Brown (borders/anchors): ~4%. Brass (premium sparkle): ~1%.

### Contrast (accessibility)
- Navy/ink text on white/paper: WCAG AA (≥4.5:1).
- White on navy/navy-deep: AA for normal text; AA for large/display.
- Brass-light on navy-deep: display/large text only; never small body text.
- Focus-visible: `3px solid --brass-light` ring with a dark halo, offset 4px.

---

## 3. Typography

### Families (proposed for redesign; pending final license)
| Use | Family | Fallback | Notes |
|-----|--------|----------|-------|
| Display / headings | **Marcellus** (serif, single weight 400) | Georgia, serif | Brand hero voice; tight tracking at large sizes |
| Body / UI | **Inter** | system-ui, sans-serif | Current body family; keep for UI clarity |

> Confirmed: display = Marcellus (weight 400 only — no bold exists), body/UI = Inter.
> See [`DESIGN-SWEeyAM.md`](./DESIGN-SWEeyAM.md) for the authoritative design system.

### Scale
| Level | Size (clamp) | Weight | Case | Line-height |
|-------|--------------|--------|------|-------------|
| Hero display | `clamp(3.2rem, 6vw, 6rem)` | 400 | sentence | 0.95 |
| H1 | `clamp(2.6rem, 4.5vw, 4rem)` | 400 | sentence | 1.0 |
| H2 / section title | `clamp(1.7rem, 2.7vw, 2.4rem)` | 400 | sentence | 1.2 |
| H3 | `clamp(1.2rem, 1.9vw, 1.6rem)` | 400 | sentence | 1.25 |
| Body | `1rem` (16px) | 400 | sentence | 1.75 |
| Eyebrow / label | `0.68–0.78rem` | 600–700 | UPPERCASE | 1.4 |
| Buttons / nav | `0.68–0.92rem` | 600 | UPPERCASE (nav) | 1.4 |

### Rules
- Headings in Marcellus, weight 400 (true to an editorial voice); never bold serif.
- Eyebrows: uppercase, letter-spacing `0.1em`, small, coloured by surface (brass-light on dark, brown/brass on light).
- Body text max width `42rem` for readability.
- `letter-spacing: -0.01em` on large display sizes.

---

## 4. Logo & Iconography

### Logo assets (in `assets/Logoandsvg/`)
| Variant | File | Use on |
|---------|------|--------|
| White | `Sweeyam_Life_Logo_white.png` | Dark surfaces (navy-deep footer, hero, mobile menu) |
| SVG | `Sweeyam_Life_Logo.svg` | Print, scalable contexts, header on light |
| Black / documents | `For Documents Black.png` | Light/print documents |
| White / documents | `For Documents White.png` | Dark/print documents |
| Favicon | `Sweeyam_Life_Favicon.png` | Site favicon; 512 variants for app icons |
| Profile picture | `Sweeyam Life - Logo for Profile Pictures.png` | Social profiles |
| Brand mark | `brand_mark.jpg` | Marketing collateral |

### Usage rules
- Minimum clearspace: logo height on all sides.
- Never stretch, rotate, add drop-shadow (unless on busy imagery), recolour beyond provided variants, or place on clashing backgrounds.
- Header: fixed square brand tile, `object-fit: contain`.

### Iconography
- Social icons: inline SVG, `viewBox="0 0 24 24"`, current-stroke/current-color so they inherit surface colour.
- UI icons: minimal 24px line icons; stroke `1.5–2px`. No filled clip-art style.

---

## 5. Layout & Spacing System

- **Container:** `.shell` = `width: min(100%, 88rem)`, `padding-inline: clamp(1.25rem, 4.5vw, 4.5rem)`. Sub-pages share this; homepage uses its own rhythm.
- **Section rhythm:** `--section-space: clamp(4.75rem, 9vw, 8.5rem)` vertical; compact variant `clamp(3rem, 6vw, 5.5rem)`.
- **Grid:** 12-column mental grid; asymmetric editorial splits (e.g., 5/7, 4/8) preferred over 50/50.
- **Rules & borders:** hairline `1px` in `--line` (navy-tinted) on light; white at 10–12% opacity on dark. Earth-brown rules used sparingly as "grounded" anchors.
- **Radii:** cards `0.875–1.25rem`; buttons fully round or `0.5rem` consistently per component; images editorial (tight or slight radius, never pill).
- **Shadows:** single soft shadow `0 24px 70px rgba(16,35,61,.13)`; avoid layered/neon.
- **Cards:** `.unified-card` white/paper surface, 1px `--line` border, `--shadow`, generous padding (`clamp(1.5rem, 4vw, 3rem)`).

---

## 6. Component Library

Every component: keyboard accessible, visible focus ring, `prefers-reduced-motion` safe, semantic HTML.

### 6.1 Buttons
| Variant | Style | Use |
|---------|-------|-----|
| Primary | Navy (`--navy`) fill, white text, rounded | Main conversion on light sections |
| Primary on dark | Brass-light fill, navy text | Main conversion on dark sections |
| Ghost/Outline | Transparent, 1px `--brown`/white border | Secondary actions |
| Text link | Underline/hairline hover | Inline CTAs (`promise-inline-link`) |
| WhatsApp | Green-tinted, WhatsApp glyph | FAB `.whatsapp-float` bottom-right + menu |
| Nav CTA | Brass-light serif text | Header primary action |

- Hover: translateY(-1px) + shadow ease. Active: translateY(0).
- Buttons min touch target `44×44px`.

### 6.2 Forms (Sweeyam Circle / partner intakes)
- `.sweeyam-input-group` label above input; inputs 1px `--line`, radius `0.5rem`, focus ring brass.
- `.sweeyam-checkbox-group` with inline label; consent + DPDP language switcher (`.sweeyam-select`) preserved.
- Submit: `.sweeyam-submit` primary. On success (Google Forms), show a clear confirmation; notice block (`.circle-form-notice`) with compliance link always visible.
- **DPDP rule:** consent checkbox + language selector are mandatory on any form that collects personal data (mobile/email). Language list: en, hi, te, mr, bn, ta, kn, ml, gu, pa.

### 6.3 Header (fixed)
- Sub-pages: `.site-header` navy-deep `rgba(16,35,61,.97)`, hairline bottom border, `.brand` tile + `.desktop-nav` (uppercase micro-links with hairline hover) + `.menu-toggle`/`.mobile-menu`.
- Homepage: `header.nav` transparent over hero, solidifies on scroll; `.nav-word` logo.
- All links: alt text, aria labels, `inert` + `aria-hidden` on closed mobile menu; body scroll lock on open.

### 6.4 Footer
- Navy-deep, columns (Explore / Grow With Us / Company), Sweeyam Circle form shell (`.circle-form-shell`), social links, `.stripe` brand band, copyright.

### 6.5 Status badges (products/waves)
| Status | Style |
|--------|-------|
| Live | Green (`--green`) text + soft green ring |
| Coming soon | Brown text + hairline ring |
| Wave N preview | Brass text + brass ring |

### 6.6 Editorial primitives
- `.eyebrow` (uppercase label), `.section-title` (Marcellus H2), `.mark` (green/highlight span), `.editorial-accent` (green italic/emphasis), `.stripe` (4-band brand bar), `.role` (founder role line), numbered index lists (`.world-index`, `.process-step` with `.p-num` 01–N).

---

## 7. Page Standards

### 7.1 Page types & templates
| Page type | Route | Sections (top→bottom) | Purpose |
|-----------|-------|-----------------------|---------|
| Home | `/` | Hero → Our Promise → Our World → How We Create → Behind → Grow With Us → Circle footer | Brand narrative |
| Product world | `/world/[world]` | Hero → Products (data-driven) → CTA → footer | Showcase a category |
| Wave landing | `/waves/[wave]` | Hero → Wave intro → Product grid → Timeline → CTA | Launch story |
| Product | `/products/[slug]` | Gallery → Details → Buy on Shopify → Related → footer | Point to commerce |
| Investor gateway | `/investors` | Hero → Opportunity → World → Core Values → Process → Scale → Grow | Strategic partners |
| Partner gateway | `/partners/*` | Hero → What we seek → Why partner → Intake form | Suppliers/artisans/R&D/entrepreneurs |
| Contact | `/contact` | Hero → Channels → Socials → Circle | Human connection |
| Compliance | `/privacy-policy`, `/terms-of-use` | Hero → Typographic content → Effective date | Trust & legal |

### 7.2 Structural rules (every page)
- Skip link → `#main-content` (`tabindex="-1"`).
- Single `h1` per page; heading hierarchy descending.
- Fixed header; `scroll-margin-top` ≥ header height on anchored sections.
- `lang="en-IN"`, viewport meta, theme-color (`#10233D`).
- Canonical, title, description, OG (site_name/title/description/type/url/image/locale), favicon.
- JSON-LD: `Organization` on home (logo, email, sameAs, contactPoint, areaServed IN).

### 7.3 SEO baseline
- One canonical domain (see §1); robots.txt + sitemap regenerated from config.
- Product/wave pages: unique titles/descriptions, alt text on every image, semantic headings.
- Outbound (Shopify/WhatsApp/socials): `rel="noopener noreferrer"`, `target="_blank"`.

---

## 8. Asset Specification

### 8.1 Naming convention
`<Context>_<Subject>[_variant][_size].ext` — e.g. `hero-poster.jpg`, `Representation_2_web.jpg`, `Sweeyam_Life_Logo_white.png`. Lowercase words joined by `_` or `-`; no spaces in web-published names. (Rename the current `"pexels-tara-winstead-6694216 .jpg"` — it has a stray space.)

### 8.2 Image specs
| Usage | Min px | Aspect | Format | Max size |
|-------|--------|--------|--------|----------|
| Hero poster | 1920w | 16:9 | JPG/AVIF | 300 KB |
| Product representation | 1200w | 4:5 / 1:1 | JPG/AVIF/WebP | 250 KB |
| Founder portrait | 1000w | 1:1 | PNG/JPG | 800 KB (source: `assets/Founderspictures/*.png` are ~3 MB — must be compressed) |
| Banner | 1600w | 16:9 / 21:9 | JPG/AVIF | 400 KB |
| OG image | 1200×630 | 1.91:1 | JPG | 300 KB |
| Logo/favicon | 512×512 | 1:1 | SVG/PNG | 64 KB |

- Rule: web-published images are optimised (AVIF/WebP via build pipeline). Originals live in `assets/` / shared Drive, never in `public/`.

### 8.3 Video standards
| Property | Spec |
|----------|------|
| Hero background | MP4 (H.264), 1280–1920w, ≤ 30 fps, ~10–20 s loop, ≤ 1.5 MB |
| Poster | JPG 1920w, first-frame style, always provided |
| Attributes | `preload="none"` + `poster`, `autoplay loop muted playsinline`, `aria-hidden` |
| Sound | None (muted background). Any narrated/hero content must have captions/transcript. |

### 8.4 Asset library layout (`assets/`)
```
assets/
  Banners/                    # Sweeyam.Life.Banner.Documents.jpg
  Founderspictures/           # deepa.png, surya.png
  Howwebuild/                 # process-section images (Scientific-enhanced.png etc.)
  Logoandsvg/                 # logo/favicon variants
  ProductRepresentations/     # Representation_*_web.jpg, product designs, bottles/soap
  videos/                     # portal-forest.mp4, hero candidates, loops
```
Keep `images/` (published, optimised) separate from `assets/` (source). Never publish from `assets/` unprocessed.

---

## 9. Motion & Interaction

- **Hero:** background video with slow Ken-Burns/scale on scroll, warm overlay, masked title reveal. Keep `portal-forest.mp4` as primary; `6754435-hd_1280_720_50fps.mp4` as candidate.
- **Scroll reveals:** IntersectionObserver; elements rise/fade once (`translateY(16–24px) → 0`, `opacity 0 → 1`, `0.6–0.8s`, `cubic-bezier(0.16,1,0.3,1)`).
- **Parallax:** gentle, bounded (image moves ≤ 10% of its height); never page-fighting.
- **Page transitions (Astro):** View Transitions; subtle fade/slide, 200–300ms; no persistence of scroll conflicts with pinned sections.
- **`prefers-reduced-motion: reduce`:** disable parallax, pinned sections, video autoplay, large transforms. Content must never depend on JS motion to be readable.

---

## 10. Accessibility & Quality Gate

- WCAG 2.1 AA: contrast (§2), focus rings, touch targets, semantic landmarks.
- Forms: labels, `aria-*` states, error messages announced, consent mandatory.
- `inert` on hidden menus; `aria-expanded`/`aria-controls` on toggles.
- `alt` text: descriptive, not "image". Decorative images get `alt=""` + `aria-hidden`.
- QA checklist: build clean → all links resolve → console error-free → reduced-motion pass → mobile 360px → desktop 1440px → Lighthouse a11y/SEO ≥ 95.

---

## 11. Change Management

| Change type | Where to edit | Who approves |
|-------------|---------------|--------------|
| Cosmetic (colour/space/type) | Design tokens only | Brand owner |
| Component | Single component file | Design + eng |
| Page content | Content entries (no templates) | Content owner |
| Page template/new page type | Template + optional route | Design + eng |
| Palette/hue addition | This spec §2 + tokens | Brand owner (rare) |
| Asset additions | `assets/` + build | Brand owner |

All changes logged in `docs/CHANGELOG.md`.
