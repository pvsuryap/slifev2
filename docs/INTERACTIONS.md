# Sweeyam Life — Interaction & UX Specification

> The behavioral contract for every user interaction on the corporate site. This is
> the interaction layer of the design system: what happens, in which state, and on
> every input method. Visuals come from [`DESIGN-SWEeyAM.md`](./DESIGN-SWEeyAM.md);
> systems/connectors from [`ARCHITECTURE.md`](./ARCHITECTURE.md); brand from
> [`BRAND-SPEC.md`](./BRAND-SPEC.md).

---

## 1. Global Interaction Model

### 1.1 State machine
Every interactive element can express a bounded set of states. Nothing invents a new
state; anything can be in any of these:

| State | Meaning | Typical style |
|-------|---------|---------------|
| `default` | Ready, not interacted | Base component style |
| `hover` | Pointer over (only when `(hover: hover)`) | Small lift or colour shift |
| `focus-visible` | Keyboard / programmatic focus | Global brass ring (see §6) |
| `pressed` / `active` | Currently activating | Recess or darken; no separate layout shift |
| `disabled` | Unavailable | Muted ~45% opacity, no pointer, native disabled or `aria-disabled` |
| `loading` | Async in flight | CTA label swaps to "Sending…"; element inert; no layout shift |
| `error` / `success` | Form field outcome | Field border + message (see §4.4) |

Rules:
- `hover` never applies when `(hover: none)` or `(pointer: coarse)`.
- `hover` is a preview of `active`; never hide a critical affordance behind hover only.
- **No inline styles from JS for state.** JS toggles a state class (or sets a CSS
  custom property); CSS owns presentation.

### 1.2 Motion tokens
| Token | Value | Use |
|-------|-------|-----|
| `--ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | All standard motion |
| `--ease-quick` | `cubic-bezier(0.3, 0, 0.2, 1)` | Micro-interactions, toggles |
| `--dur-instant` | `80ms` | Colour-only state flashes |
| `--dur-quick` | `200ms` | Hover, icon toggles, menu lines |
| `--dur-normal` | `300ms` | Buttons, focus, reveals, cards |
| `--dur-slow` | `600–800ms` | Hero, video, major reveals |

Standardisation notes (current codebase diverges):
- Replace scattered `0.25s ease`, `0.35s ease-out`, `1s var(--ease)` with the tokens.
- Lifts standardised: **buttons + FAB `-2px`, cards `-4px`, tiles `-3px`** (today they
  vary -1/-2/-3/-4px across `base.css` / `site.css` / `home.css`).
- Transition only `transform`, `opacity`, and colour — never `width`, `height`,
  `top/left`, or `all` (scoped the existing `transition: all` occurrences).

### 1.3 Implementation rules
- Progressive enhancement: interaction behaviour is a JS enhancement; content is
  reachable without it.
- Feature-detect `matchMedia('(hover: hover)')` / `'(pointer: fine)'` before wiring
  pointer-only behaviour.
- Breakpoints read from `body[data-menu-breakpoint]`; never hard-coded twice.
- Every interactive module: IIFE, element guards, no globals.
- Every motion has a `prefers-reduced-motion: reduce` branch (§5).

---

## 2. Element Inventory

| # | Element | Kind | Pages |
|---|---------|------|-------|
| 01 | Skip link | Nav shortcut | All |
| 02 | Header (`.site-header`, `header.nav`) | Sticky container, solidifies on scroll | All |
| 03 | Desktop nav links (`.desktop-nav a`) | Link + hairline sweep | Sub-pages |
| 04 | Nav CTA (`.nav-cta`) | Brass serif link-button | All |
| 05 | Menu toggle (`.menu-toggle`) | Hamburger ↔ close toggle | All |
| 06 | Mobile menu (`.mobile-menu`) + links + socials | Full-screen sheet | All |
| 07 | Primary button (`.sweeyam-submit`, `.button`) | Button | All |
| 08 | Ghost/secondary button (`.button-ghost`) | Button | Site pages |
| 09 | Brass CTA (`.button-brass`) | Button | Redesign |
| 10 | Inline text link (`.promise-inline-link`, `.text-link`) | Link | All |
| 11 | WhatsApp float (`.whatsapp-float`) | Persistent action | Home, Investors |
| 12 | Social links (`.social-link`, `.mobile-social-link`) | External links | All |
| 13 | Scroll indicator (`.merged-indicator`) | Anchor + progress hint | Home |
| 14 | World index rows (`.world-index-row` / `-btn`) | Selection list | Home, Investors |
| 15 | Process steps + image layers (`.process-step`, `.process-img-layer`) | Scroll stepper | Home, Investors |
| 16 | Reveal elements (`.reveal`) | Scroll reveal | All |
| 17 | Parallax images (`.parallax-img`, `.representation-card img`) | Scroll parallax | Home, Investors |
| 18 | Hero video (`.video-container video`) | Ambient background | Home |
| 19 | Circle form fields (`.sweeyam-form input`) | Form inputs | Footer |
| 20 | DPDP language switcher (`#dpdp-lang`) | Select + live text swap | Footer |
| 21 | Consent checkbox (`#entry_consent`) | Checkbox | Footer |
| 22 | Grow cards (`.grow-card`) | Card-link | Home, Investors |
| 23 | Footer links (`.footer-col a`) | Link | All |
| 24 | CTA table (`.cta-table a`) | Button row | Home, Investors |
| — | Future: category tabs, accordion, modal, cookie consent, product cards | Reserved | Wave/gateway |

---

## 3. Behavior Contracts

### 3.1 Skip link
- Targets `#main-content` (`tabindex="-1"`); visible on focus only.
- `default`: off-canvas (`translateY(-180%)`); `focus-visible`: slides in; `blur`: returns.
- Keyboard: first tab stop. Announced by screen readers as "Skip to main content".

### 3.2 Header & nav
- Sticky `position: fixed`; sub-pages always navy-deep; homepage transparent over the
  hero and **solidifies when `scrollY > 40`** (class `.scrolled`, `--dur-normal`).
- Desktop nav links: brass hairline sweep grows left→right on `hover` and
  `focus-visible`; `:active` keeps it. Link colour does not change on hover — the
  sweep is the feedback.
- Nav CTA: brass serif; hover → brass-light; focus ring standard.
- Header height 80px; every anchored section gets `scroll-margin-top` ≥ 88px.
- In-page anchors smooth-scroll via `html { scroll-behavior: smooth }`; disabled under
  reduced-motion.

### 3.3 Mobile menu
- Breakpoint from `body[data-menu-breakpoint]`. Open state = full-screen navy sheet.
- `menu-toggle` exposes `aria-expanded` + `aria-controls`; icon morphs hamburger →
  close (3 lines, `--dur-quick`).
- Open: `body.menu-open` scroll-locks; menu `aria-hidden=false` + `inert=false`; focus
  moves to first link. Close: reverse; focus returns to the toggle.
- Close triggers: toggle click, any link click, `Escape`, outside click (not on
  toggle), and crossing to the desktop breakpoint (`matchMedia` change).
- Menu is `inert` when closed — never focusable off-screen.

### 3.4 Buttons
- `button-primary` (navy): hover → navy-soft; active → navy-deep; focus ring. Min 44px.
- `button-brass`: hover → brass; active → brass-deep; same geometry.
- `button-secondary` / ghost: hover → stronger hairline + subtle lift; on dark the
  `on-dark` variant stays dark (never inverts).
- `button-text-link`: hover → underline; active → darker ink.
- **Links vs buttons:** `<a>` for navigation/anchors and Shopify deep-links; `<button>`
  for actions (submit, toggle).
- WhatsApp float: hover `-2px` lift + dark-green; active recess; `aria-label` "Chat
  with Sweeyam Life on WhatsApp".

### 3.5 Inline & external links
- Inline body links: brass, underline on hover/press. **Brass inline link is the
  signature small detail** (reserved from the base file's coral-inline-link pattern).
- External (Shopify, WhatsApp, socials): `target="_blank"` +
  `rel="noopener noreferrer"`; `aria-label` names the destination.
- Footer column links: colour shift to brass-light on hover (`--dur-quick`).

### 3.6 World index (selection list)
- Rows are real `<button>`s (`.world-index-btn`) with `aria-pressed` mirroring the
  active state; the active row's image carries the descriptive `alt`, others get `alt=""`.
- `setWorld(i)` updates `.active` class, `aria-pressed`, and `alt` for all rows.
- Triggers: `mouseenter`, `click`, `focusin`. On hover-capable devices, leaving the
  index (`mouseleave`) returns to row 0. Touch: tap selects and stays.
- Focus ring for the button: global standard (replace the current 2px offset override).
- **Also used on investors page** for the same list — one shared component.

### 3.7 Process scroll stepper
- Desktop only (`> 980px`): while the track intersects the viewport, scroll progress
  maps to the active step (`0..N-1`); the active step + matching image layer get
  `.active` (fade/cross-dissolve `--dur-slow`). Mobile: all steps render statically
  in order.
- Fully bypassed under reduced-motion; steps remain readable in the document order.

### 3.8 Scroll reveals
- `.reveal` starts `opacity:0; translateY(26px)`; IntersectionObserver (threshold
  ~0.12) adds `.in` with `--dur-slow`; stagger ≤ 6 elements at 70ms. Observers
  `unobserve` after firing (animate once).
- Reduced-motion: elements start visible, no transform (already implemented — keep).

### 3.9 Parallax
- Bounded: image translate ≤ ~30px; scale 0.70→1.25 window (promise frame). Disabled
  below 980px and under reduced-motion. Never parallax on content that needs legibility.

### 3.10 Hero video
- `preload="none"` + `poster`; `autoplay loop muted playsinline`; `aria-hidden`.
- On scroll: container scales 1→0.65, blurs, gains radius; headline fades/rises.
  Values are written as **CSS custom properties** (e.g. `--hero-scale`, `--hero-blur`)
  so CSS owns the presentation; disabled under reduced-motion.

### 3.11 Grow cards & CTA table
- Grow cards: whole card is a link; hover `-4px` lift + brass border (`--dur-normal`);
  focus ring on the `<a>`.
- CTA table: two-button row; each uses standard button hover/press/focus.

---

## 4. Forms (Sweeyam Circle & partner intakes)

### 4.1 Fields
- Text/tel/email inputs: paper fill, hairline border, 44px height, `--dur-normal`
  focus (brass border + 3px brass ring at 15% alpha).
- Mobile `tel` uses `pattern="^[6-9]\d{9}$"` + `title` hint (Indian mobile).
- Consent checkbox: green `accent-color`, ≥ 16px target; label linked via `for`.

### 4.2 DPDP language switcher
- `#dpdp-lang` select lists 10 languages (en, hi, te, mr, bn, ta, kn, ml, gu, pa).
- On `change`: swap consent text, notice text, and the Privacy Policy link label
  from the dictionary; always via `textContent`/safe `innerHTML` (links only from the
  allow-list of the email + policy link).

### 4.3 Submission
- `method="POST"` to the Google Forms `formResponse` URL, `target="_blank"`.
- Validate first via native constraints (`required`, `pattern`, `type=email`).
- No AJAX on the corporate site; the response opens in a new tab (Google's flow).

### 4.4 States (standardise; partially missing today)
- `default` → `focus` → `invalid` (red border + accessible error message tied with
  `aria-describedby`) → `success` (confirm message: "Thank you — we'll write soon.").
- `loading`/disabled: submit label swaps to "Sending…", inputs inert, no layout shift.
- DPDP compliance is stable: consent + language selector are mandatory on any form
  that collects personal data; notice links to the privacy policy and
  compliance@sweeyamlife.co.in.

---

## 5. Reduced-Motion Policy

Under `prefers-reduced-motion: reduce`:
- `scroll-behavior` becomes `auto`; reveals render visible; parallax, hero video
  scaling, and the process scroll stepper are disabled; hover lifts are removed.
- Content must be fully readable and usable with zero animation.
- QA gate fails any change that breaks this rule.

---

## 6. Accessibility Contract

- **Keyboard:** every element is reachable and operable via Tab/Enter/Space/Arrows.
  Focus order matches visual order. No focus trap except when required (future modal).
- **Focus:** global `:focus-visible` = 3px `--brass-light` outline + dark halo,
  offset 4px. Never removed. `main:focus { outline: none }` only because
  `main[tabindex="-1"]` receives programmatic focus.
- **ARIA:** `aria-expanded`/`aria-controls` on toggles, `aria-pressed` on selection,
  `aria-hidden` + `inert` on hidden sheets, `aria-label` on icon-only links,
  `aria-describedby` on invalid fields, `role` only when semantics need overriding.
- **Touch:** targets ≥ 44px; hover-only behaviour gated by `(hover: hover)`.
- **SR announcements:** status changes (menu open, form success, language switch)
  announce via visible + aria-live elements, not silent DOM swaps.

---

## 7. Interaction QA Gate

Before publishing any change:
1. Full keyboard pass (Tab order, Escape, Enter/Space, arrows) on desktop + mobile.
2. Touch pass (no hover-only affordances, ≥44px targets).
3. Screen-reader pass (NVDA or VoiceOver): headings, landmarks, live regions.
4. Reduced-motion pass (§5).
5. No console errors; no inline style writes from JS; `node --check` clean.
6. Lighthouse a11y ≥ 95; all internal links resolve.

---

## 8. Change Management

| Change type | Where to edit |
|-------------|---------------|
| Add an interaction | Add to inventory §2 + a contract in §3; tokenize motion |
| Change a state's look | CSS token/state class only |
| Change behaviour | The shared component module (menu, world index, form) — never per-page JS |
| New input method | Extend the contract §3/§4; update QA gate |
| All | Log in `docs/CHANGELOG.md` |

