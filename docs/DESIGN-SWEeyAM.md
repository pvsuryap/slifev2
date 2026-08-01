---
version: alpha
name: sweeyam-design-system
description: A warm-canvas editorial interface for the Sweeyam Life corporate site. The system anchors on a warm paper canvas with serif display headlines, brass CTAs and accents, and dark navy product surfaces. Brand voltage comes from the paper/brass pairing — deliberately warm and humanist, a premium lifestyle counter to generic white-slab wellness sites. Type voice runs a single-weight serif display ("Marcellus") for h1/h2 and a humanist sans (Inter) for body. The signature navy/brass pairing carries scientific clarity and premium warmth.

base: DESIGN-claude.md (Anthropic warm-canvas editorial system) — adapted for Sweeyam Life with Sweeyam fonts, colours, and components.

colors:
  primary: "#B08D57"                 # brass — signature Sweeyam voltage
  primary-active: "#8F6F3F"          # brass-deep — press/hover
  primary-soft: "#D9C298"            # brass-light — accessible button fill on light + accents on dark
  primary-disabled: "#E6DFD4"
  ink: "#1C1B18"
  body: "#565149"
  body-strong: "#3F3B32"
  muted: "#6E6A61"
  muted-soft: "#8E8A81"
  hairline: "#DFD8CA"                # brown-tinted hairline — grounded authenticity
  hairline-soft: "#EAE4D8"
  canvas: "#FFFDF9"                  # warm paper — the brand floor
  surface-soft: "#F6F2EA"
  surface-card: "#F1EBE0"
  surface-cream-strong: "#E9E1D2"
  surface-dark: "#10233D"            # navy-deep
  surface-dark-elevated: "#284B77"   # navy-soft
  surface-dark-soft: "#1A365D"       # navy
  on-primary: "#FFFFFF"
  on-dark: "#F4EFE6"                 # cream-tinted white — echoes canvas on dark
  on-dark-soft: "#AEB9CB"
  accent-green: "#2D5A27"            # growth / sustainability
  accent-green-strong: "#1E3D1A"
  accent-brown: "#5C4033"            # anchors, borders
  accent-brown-deep: "#402C23"
  success: "#2D5A27"
  warning: "#C99A4B"
  error: "#C64545"

typography:
  display-xl:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.3px
  display-lg:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.2px
  display-md:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.1px
  display-sm:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.1px
  title-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  caption-uppercase:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 1.5px
  nav-link:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.08em
  button:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 22px
    height: 44px
  button-primary-active:
    backgroundColor: "{colors.surface-dark-soft}"
    rounded: "{rounded.md}"
  button-brass:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.surface-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 22px
    height: 44px
  button-brass-active:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 22px
    height: 44px
  button-secondary-on-dark:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 22px
    height: 44px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 44px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  top-nav:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 80px
  hero-band:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: 96px
  feature-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  product-card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  representation-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
  process-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  founder-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  grow-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  callout-card-brass:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.surface-dark}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.lg}"
    padding: 48px
  callout-card-navy:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.lg}"
    padding: 48px
  connector-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.lg}"
    padding: 20px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 14px
    height: 44px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  checkbox-group:
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
  select:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 6px 12px
    height: 36px
  badge-pill:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  badge-brass:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.surface-dark}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  badge-green:
    backgroundColor: "transparent"
    textColor: "{colors.accent-green}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  badge-brown:
    backgroundColor: "transparent"
    textColor: "{colors.accent-brown}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  category-tab:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.nav-link}"
    padding: 8px 14px
    rounded: "{rounded.md}"
  category-tab-active:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.md}"
  cta-table:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
  whatsapp-float:
    backgroundColor: "{colors.accent-green}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    size: 56px
  stripe:
    height: 8px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

Sweeyam Life's corporate site is a **warm-canvas editorial** interface in the premium
lifestyle category. The base atmosphere is a **warm paper canvas** (`{colors.canvas}`
— #FFFDF9) — deliberately warm, never the cool gray-white of generic wellness or
commerce sites. Headlines run a **single-weight serif display** ("Marcellus") at
weight 400 with tight letter-spacing, paired with **Inter** body sans. The combination
feels like a considered magazine or a heritage catalogue, not a launch-page template.

Brand voltage comes from the **paper + brass pairing** — brass
(`{colors.primary}` — #B08D57) is the signature Sweeyam accent, used on primary
accents, the CTA on dark, inline links, and full-bleed brass callout cards. The brass
is warm, slightly muted, never cyan/blue — a deliberate counter-positioning against
the saturated-coral and cool-slate accents of AI/tool brands, and against the
synthetic-neon palette of mass e-commerce. Navy (`{colors.surface-dark}` — #10233D)
carries the scientific-clarity half of the brand; green (`{colors.accent-green}`)
appears only for growth/sustainability status.

The system has three surface modes that alternate section-by-section:
1. **Warm paper** (`{colors.canvas}`) — default body floor
2. **Light cream cards** (`{colors.surface-card}`) — feature/product/world cards
3. **Dark navy surfaces** (`{colors.surface-dark}`) — hero, video moments, product
   representation stages, pre-footer CTAs, footer itself

The dark surfaces are where Sweeyam shows its product chrome — product
representations, process imagery, the hero video. The paper-to-dark contrast is the
page's pacing rhythm.

**Key Characteristics:**
- Warm paper canvas (`{colors.canvas}` — #FFFDF9) with dark warm-ink text
  (`{colors.ink}` — #1C1B18).
- Brass voltage (`{colors.primary}` — #B08D57), accessible as brass-light
  (`{colors.primary-soft}`) button fills. Used scarcely on small elements, generously
  on full-bleed brass callout cards.
- Serif display via **Marcellus** at weight 400 with tight letter-spacing. Pairs
  with Inter body for a literary editorial voice.
- Dark navy surfaces (`{colors.surface-dark}` — #10233D) carrying the hero video,
  product representations, and process imagery — product-first, not abstract
  illustration.
- Light cream cards (`{colors.surface-card}` — #F1EBE0) — one step darker than
  canvas, used for content-driven feature and product-world cards.
- Border radius is hierarchical: `{rounded.md}` (8px) for buttons + inputs,
  `{rounded.lg}` (12px) for content/product cards, `{rounded.xl}` (16px) for the hero
  representation container, `{rounded.pill}` for badges.
- Section rhythm `{spacing.section}` (96px); card padding generous at
  `{spacing.xl}` (32px).
- **Elevation is color-block first, shadow rare.**

## Colors

### Brand & Accent
- **Brass / Primary** (`{colors.primary}` — #B08D57): The signature Sweeyam accent.
  Used on inline links, the CTA on light, eyebrows on dark, and full-bleed brass
  callout cards. Warm, premium, muted — never neon.
- **Brass Active** (`{colors.primary-active}` — #8F6F3F): press/hover-dark variant.
- **Brass Soft** (`{colors.primary-soft}` — #D9C298): accessible brass-light fill used
  for `button-brass` on light surfaces and text accents on dark. Brass at this value
  passes WCAG AA against navy text and against navy-dark surfaces.
- **Green / Growth** (`{colors.accent-green}` — #2D5A27): reserved for sustainability
  meaning and "Live" status. Success/status dots.
- **Brown / Ground** (`{colors.accent-brown}` — #5C4033): anchors, hairlines, borders.
  Grounded authenticity.

### Surface
- **Canvas** (`{colors.canvas}` — #FFFDF9): the default page floor. Warm paper —
  deliberately not pure white.
- **Surface Soft** (`{colors.surface-soft}` — #F6F2EA): very-soft section bands.
- **Surface Card** (`{colors.surface-card}` — #F1EBE0): feature/world/grow cards.
  One step darker than canvas.
- **Surface Cream Strong** (`{colors.surface-cream-strong}` — #E9E1D2): selected
  tabs, emphasized bands.
- **Surface Dark** (`{colors.surface-dark}` — #10233D): hero, video, product stages,
  footer. The dominant dark surface.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #284B77): cards inside
  dark bands, secondary-on-dark buttons.
- **Surface Dark Soft** (`{colors.surface-dark-soft}` — #1A365D): inner panels inside
  larger dark cards, hover states.
- **Hairline** (`{colors.hairline}` — #DFD8CA): 1px border on paper surfaces — the
  brown-tinted "grounded" rule. Same elevation step as primary-disabled.
- **Hairline Soft** (`{colors.hairline-soft}` — #EAE4D8): barely-visible inner
  dividers.

### Text
- **Ink** (`{colors.ink}` — #1C1B18): all headlines and primary text. Warm dark.
- **Body Strong** (`{colors.body-strong}` — #3F3B32): lead paragraphs.
- **Body** (`{colors.body}` — #565149): running text.
- **Muted** (`{colors.muted}` — #6E6A61): sub-headings, secondary labels.
- **Muted Soft** (`{colors.muted-soft}` — #8E8A81): captions, fine print, copyright.
- **On Dark** (`{colors.on-dark}` — #F4EFE6): cream-tinted white on dark surfaces
  (echoes the canvas tone).
- **On Dark Soft** (`{colors.on-dark-soft}` — #AEB9CB): footer body text, secondary
  labels in dark bands.

### Semantic
- **Success** (`{colors.success}` — #2D5A27): "Live", growth indicators.
- **Warning** (`{colors.warning}` — #C99A4B): "Coming soon" / preview.
- **Error** (`{colors.error}` — #C64545): validation errors.

## Typography

### Font Family
The system runs **Marcellus** as the single-weight serif display face (headlines) and
**Inter** as the humanist sans for body, navigation, and UI labels. The fallback stack
walks `Georgia, "Times New Roman", serif` for display and `system-ui, sans-serif` for
body. Marcellus is a display serif with a single weight (400) and no bold — available
via Google Fonts. The brand voice is fixed at weight 400 by design, not by restraint.

The display/body split is editorial:
- Marcellus serif (weight 400) → h1, h2, h3, hero display
- Inter sans (weight 400–600) → body, navigation, buttons, captions, labels

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 400 | 1.05 | -0.3px | Homepage h1 — Marcellus |
| `{typography.display-lg}` | 48px | 400 | 1.1 | -0.2px | Section heads — Marcellus |
| `{typography.display-md}` | 36px | 400 | 1.15 | -0.1px | Sub-section heads, product names — Marcellus |
| `{typography.display-sm}` | 28px | 400 | 1.2 | -0.1px | Callout headlines, founder names — Marcellus |
| `{typography.title-lg}` | 22px | 500 | 1.3 | 0 | Card headlines — Inter |
| `{typography.title-md}` | 18px | 500 | 1.4 | 0 | Feature card titles — Inter |
| `{typography.title-sm}` | 16px | 500 | 1.4 | 0 | Tile titles, list labels — Inter |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Default running text — Inter |
| `{typography.body-sm}` | 14px | 400 | 1.55 | 0 | Footer body, fine print — Inter |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions — Inter |
| `{typography.caption-uppercase}` | 12px | 600 | 1.4 | 1.5px | Category tags, status labels — Inter |
| `{typography.nav-link}` | 13px | 600 | 1.4 | 0.08em | Top-nav items (uppercase) — Inter |
| `{typography.button}` | 14px | 600 | 1.0 | 0 | Button labels — Inter |

### Principles
Display sizes use weight 400 (regular) — Marcellus ships in weight 400 only, so there
is no bold to use. Tight letter-spacing (-0.1 to -0.4px) keeps Marcellus editorial at
display sizes. The serif character gives Sweeyam its literary, considered voice;
switching to a sans display would make the brand feel like a generic commerce
template.

Body stays weight 400 for paragraphs, 500–600 for labels. Inter is the humanist sans;
Helvetica/Arial would be too neutral. Eyebrows and nav are uppercase micro-links with
letter-spacing — a signature Sweeyam detail.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px ·
  `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px ·
  `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px); compresses to 64px under 768px.
- **Card internal padding:** `{spacing.xl}` (32px) for feature/world/process/founder
  cards; `{spacing.lg}` (24px) for grow cards and connector tiles.
- **Callout/CTA bands:** `{spacing.xxl}` (48px) inside brass and navy callout cards.

### Grid & Container
- **Max content width:** ~1200px centered (88rem cap on the site shell).
- **Editorial body:** 12-column grid; asymmetric splits preferred — 5/7, 4/8 — over
  rigid 50/50.
- **Card grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile.

### Whitespace Philosophy
The warm canvas + serif display + generous internal padding create editorial pacing —
Sweeyam reads like a long-form brand publication. Whitespace between bands stays
uniform at 96px; whitespace inside cards is generous (32px), letting type breathe.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, nav, hero bands |
| Soft hairline | 1px `{colors.hairline}` border | Inputs, sub-nav, cards on canvas |
| Cream card | `{colors.surface-card}` background — no shadow | Feature/world/grow cards |
| Dark surface card | `{colors.surface-dark}` background — no shadow | Product representation stages, process stage |
| Subtle drop shadow | Faint shadow at low alpha, rarely | Hover-elevated states only (`0 1px 3px rgba(16,35,61,0.08)`) |

The elevation philosophy is **color-block first, shadow rare**. Most depth comes from
paper-vs-dark surface contrast. Shadows are minimal.

### Decorative Depth
- The `.stripe` brand bar (4 hairline bands in navy/brass/green/brown) acts as the
  signature brand garnish on dividers and the footer top.
- Product representation cards carry real product imagery (renders, packs, bottles)
  inside dark stages — product-first, not illustration.
- Hero video uses a warm overlay + grain to sit under a masked title reveal.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Badge accents, tiny dropdowns |
| `{rounded.sm}` | 6px | Small inline controls |
| `{rounded.md}` | 8px | Buttons, text inputs, selects, tabs |
| `{rounded.lg}` | 12px | Content cards (feature, world, product, process, footer forms) |
| `{rounded.xl}` | 16px | Hero representation container, large marquee surfaces |
| `{rounded.pill}` | 9999px | Badge pills, status tags |
| `{rounded.full}` | 9999px / 50% | Avatars, icon buttons, WhatsApp float |

### Photography
The brand is photographic and real: founder portraits, product representations,
process/artisan imagery, a forest video hero. No clip-art. Founders crop 1:1;
representations follow 4:5 / 1:1 (see BRAND-SPEC §8 for exact specs). Photography
sits on cream cards or inside dark navy stages — never on noisy backgrounds.

## Components

### Top Navigation
**`top-nav`** — Navy-deep nav pinned to the top of every page. 80px tall,
`{colors.surface-dark}` background. Carries the Sweeyam Life white logo at left,
horizontal menu (Home, Our Promise, How We Create, Our World, Investors) center-left,
and a right-side `{component.button-brass}` "Grow With Us" CTA. Menu items in
`{typography.nav-link}` (uppercase micro-links) with a brass hairline sweep on hover.
Sub-pages may use a warm-paper header variant with the black logo variant
(`For Documents Black.png`). On the homepage the header starts transparent over the
hero video and solidifies to navy-deep on scroll.

### Buttons

**`button-primary`** — Navy fill (`{colors.surface-dark}`), cream text, type
`{typography.button}`, padding 12 × 22, height 44, rounded `{rounded.md}` (8px).
Active state darkens to `{colors.surface-dark-soft}`.

**`button-brass`** — The signature CTA. Brass-light fill (`{colors.primary-soft}`),
navy text, same geometry as primary. Active state deepens to `{colors.primary}`.
Passes WCAG AA (navy on brass-light ≈ 6.7:1).

**`button-secondary`** — Paper button with hairline outline. Background
`{colors.canvas}`, text `{colors.ink}`, 1px hairline border, same geometry.

**`button-secondary-on-dark`** — Used over `{colors.surface-dark}` bands. Background
`{colors.surface-dark-elevated}`, text `{colors.on-dark}`. Stays dark — never invert
to a light secondary on dark.

**`button-text-link`** — Inline text button, no background. Used for inline CTA links
("Explore our world →").

**`button-icon-circular`** — 44px circular icon button. Background `{colors.canvas}`,
hairline border, ink icon. Carousel arrows, share, "view more".

**`text-link`** — Inline body links in brass (`{colors.primary}`). The brass inline
link is a signature small detail.

### Cards & Containers

**`hero-band`** — Navy-deep hero. Left: eyebrow + `display-xl` title in cream +
supporting line + button row. Right: hero representation card or the video. Vertical
padding `{spacing.section}` (96px).

**`representation-card`** — A rounded `{rounded.xl}` container holding product
representation or parallax imagery on the cream canvas (promise section).

**`feature-card`** — 3-up grids. Background `{colors.surface-card}`, rounded
`{rounded.lg}`, padding `{spacing.xl}` (32px). Small icon/label top, `title-md`
headline, `body-md` description.

**`product-card-dark`** — Dark navy card showing a product representation (renders,
packs, bottles). Background `{colors.surface-dark}`, rounded `{rounded.lg}`, padding
`{spacing.xl}`. Labels in `{colors.on-dark}`; imagery in a `{colors.surface-dark-soft}`
inner stage. The signature product-moment surface.

**`process-card`** — Numbered process step (`.process-step` with `.p-num` 01–05) on the
paper canvas, paired with a dark image stage. The step list is `title-md`; numbers are
brass serif.

**`founder-card`** — Founder portrait (1:1) + name (`display-sm` serif) + role line +
bio. Paper, hairline, rounded `{rounded.lg}`.

**`grow-card`** — Partner/opportunity tiles. `{colors.surface-card}` background,
rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). Title `title-md`, body
`body-md`.

**`callout-card-brass`** — A full-bleed brass CTA card. Background
`{colors.primary-soft}`, navy text, rounded `{rounded.lg}`, padding `{spacing.xxl}`
(48px). The brass surface IS the voltage; the CTA inside uses a navy
`{component.button-primary}`.

**`callout-card-navy`** — Pre-footer alternative. `{colors.surface-dark}` background,
`{colors.on-dark}` text, rounded `{rounded.lg}`, padding 48px.

**`connector-tile`** — Integration/partner grid tiles (for gateway pages).
`{colors.canvas}` background with hairline border, rounded `{rounded.lg}`, padding
20px. Logo/badge top, `title-sm` name, short description.

### Inputs & Forms (Sweeyam Circle / partner intakes)

**`text-input`** — Paper background, hairline border, `body-md`, rounded
`{rounded.md}` (8px), padding 10 × 14, height 44. **Focus:** 3px brass ring at 15%
alpha + `{colors.primary}` border.

**`checkbox-group`** — Inline checkbox + `body-sm` label. Mandatory for DPDP consent.

**`select`** — DPDP language selector. Paper, hairline, `body-sm`, rounded `{rounded.md}`,
height 36.

**`sweeyam-submit`** — `{component.button-primary}`. Form posts to Google Forms
(unchanged). Always show `.circle-form-notice` with the compliance link and "withdraw
consent anytime" copy.

**`cookie-consent-card`** — (reserved) bottom-right dark banner, navy, rounded
`{rounded.lg}`, padding `{spacing.lg}` (24px).

### Tags / Badges

**`badge-pill`** — Category tag. `{colors.surface-card}` background, ink text,
`caption` (13px / 500), pill, padding 4 × 12.

**`badge-brass`** — "NEW"/"FEATURED" highlight. `{colors.primary-soft}` background,
navy text, `caption-uppercase`, pill.

**`badge-green`** — "LIVE" status. Transparent, green text + soft green ring, pill.

**`badge-brown`** — "COMING SOON" status. Transparent, brown text + hairline ring, pill.

### Tabs / Filter

**`category-tab`** + **`category-tab-active`** — World/category sub-nav. Inactive:
transparent, muted text. Active: `{colors.surface-card}` background, ink text. Padding
8 × 14, rounded `{rounded.md}`.

### CTA / Footer

**`cta-table`** — Two-button action row (e.g. "Start a conversation" +
`{component.button-primary}`, "Investor overview" + `{component.button-brass}`).

**`whatsapp-float`** — Fixed bottom-right WhatsApp FAB. `{colors.accent-green}`
background, white glyph, 56px circle, shadow.

**`stripe`** — 4-band brand bar (navy / brass / green / brown), 8px, used as a
section divider garnish and at the footer top.

**`footer`** — Navy-deep footer closing every page. Background
`{colors.surface-dark}`, text `{colors.on-dark-soft}`. Brand tile + tagline top,
4 columns (Explore / Grow With Us / Company) + Sweeyam Circle form shell, `.stripe`
band, copyright. The footer never inverts.

## Do's and Don'ts

### Do
- Anchor every page on the warm paper canvas. Pure white reads as generic; the warm
  tint is the brand differentiator.
- Use Marcellus serif for every display headline, paired with Inter body. Tight
  tracking on display sizes keeps the editorial voice.
- Reserve `{colors.primary}` (brass) for links, accents, and full-bleed
  `{component.callout-card-brass}` moments. Use `{colors.primary-soft}` for accessible
  brass button fills.
- Use `{component.product-card-dark}` and the hero video to show real Sweeyam product
  chrome. Don't paint abstract illustrations of products when you have real renders.
- Pair `{component.feature-card}` (cream) with `{component.product-card-dark}` (navy)
  in alternating bands. The paper-to-dark rhythm is the brand's pacing.
- Use green only for sustainability/growth meaning and "Live" status. Use brown for
  rules/borders/anchors. Never swap their roles.
- Apply `{spacing.section}` (96px) between major bands.
- Focus-visible: brass ring with a dark halo (see BRAND-SPEC §2).

### Don't
- Don't use cool grays or pure white for the canvas. Warm paper is the brand.
- Don't bold serif display weight. Marcellus ships at weight 400 only — the display
  stays regular, never synthetic-bolded.
- Don't use cool blue or saturated cyan as a brand accent. Brass is the voltage.
- Don't put brass everywhere. It is scarce on small elements and generous only on
  full-bleed brass callout cards.
- Don't use Inter (or any sans) for display headlines. The serif is the voice.
- Don't repeat the same surface mode in two consecutive bands. Pacing alternates:
  navy-hero → paper → cream-card → navy-stage → paper → brass-callout → navy-footer.
- Don't add hover styling beyond what the system encodes — primary/bass darken on
  press; nothing else changes.
- Don't use the coral/teal/slate palette of the base file — those hues are not
  Sweeyam.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero `display-xl` 64→32px; hero representation stacks below content; card grids 1-up; footer 4 cols → 1 |
| Tablet | 768–1024px | Nav tightens; cards 2-up; connector tiles 3-up |
| Desktop | 1024–1440px | Full nav; 3-up cards; section rhythm 96px |
| Wide | > 1440px | Max content width caps at ~1200px |

### Touch Targets
- Buttons and inputs at minimum 44px height (WCAG AA).
- `{component.whatsapp-float}` 56px.
- Connector/grow tiles are fully tappable — effective tap area >> 44px.

### Collapsing Strategy
- Nav collapses to a full-screen navy menu sheet at < 768px; body scroll locks while
  open; menu is `inert` + `aria-hidden` when closed.
- Hero 6-6 grid stacks single-column on mobile — h1 + sub-head + buttons first, then
  the representation/mockup card.
- Card grids reduce columns rather than scaling cards down.
- Product imagery keeps aspect ratio; dark stages retain contrast at every
  breakpoint.
- Hero video: `preload="none"` + `poster`; large transforms disabled under
  `prefers-reduced-motion`.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key
   (`{component.feature-card}`, `{component.product-card-dark}`).
2. Variants (`-active`, `-disabled`, `-focused`) are separate entries in
   `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay Marcellus serif 400 with tight tracking. Body stays
   Inter. The split is unbreakable.
6. Paper + brass + dark navy is the trinity. Green = growth/status. Brown =
   rules/borders. Don't introduce new surface hues.
7. When in doubt about emphasis: bigger Marcellus serif before bolder weight.
8. Any change must respect the semantic palette in BRAND-SPEC §2 and the component
   tokens here.

## Known Gaps

- Marcellus is a single-weight (400) display serif available on Google Fonts (OFL).
  It has no bold or italic axis — the weight-400 display rule is structural. Test
  rendering at large sizes; the fallback is Georgia.
- Product photography is still maturing: current renders (`Shampoo Bottle Design 3 -
  Gold cap`, `Soap Design 1 - BEST`, `Representation 13`) are strong candidates but
  not yet the final catalogue.
- Hero video choice: `portal-forest.mp4` is primary; `5692315-hd_1920_1080_30fps.mp4`
  and `178732-860527368_medium.mp4` are candidates pending review.
- Form validation states beyond focus are not fully defined (error/success messaging
  for the Google Forms pipeline).
- Motion timings (hero reveal, page transitions) are referenced in BRAND-SPEC §9 but
  not tokenised here.
- The corporate site never carries commerce. E-commerce connectors, cart, inventory
  and CRM live behind Shopify — see ARCHITECTURE.md.
