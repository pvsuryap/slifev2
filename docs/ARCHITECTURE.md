# Sweeyam Life — System Architecture & Operating Process

> Master reference for how the Sweeyam Life digital ecosystem is organised, how the
> parts connect, and how new launch waves are shipped without rework.
> Companion file: [`BRAND-SPEC.md`](./BRAND-SPEC.md) (design/brand identity).

---

## 1. System Topology

Sweeyam Life runs on four cooperating systems. Each has one clear job and a defined
boundary. Nothing crosses a boundary except through a documented connector.

| # | System | Role | Owns | Exposed? |
|---|--------|------|------|----------|
| 1 | **Corporate Site** (this repo) | Brand identity · Gateway for investors, suppliers, vendors, strategic partners · Compliance | Pages, product *story*, partner CTAs, legal content | Public |
| 2 | **Notion** | Company knowledge · Project management | Docs, wikis, PM dashboards | Internal (public via published pages only if desired) |
| 3 | **Google Workspace** | Internal collaboration · Email · IP hub · Legal hub · Micro apps & workflows | Gmail, Drive, Docs/Sheets, Apps Script workflows | Internal |
| 4 | **Shopify** | E-commerce for customers/consumers | Storefront, cart, checkout, orders, inventory | Public (customers) |
| 5 | **CRM** (future) | Customer/partner/lead records | Contact data, pipelines | Internal only |

> CRM never exposes outward. All outbound/inbound data touching the CRM goes through
> the connector layer described in §3.

### Flow summary

```
                    ┌─────────────────────────────────────────────┐
  Public ─────────▶ │  Corporate Site  (brand + gateways)          │
                    │  static-first, decoupled from commerce       │
                    └──────┬───────────────┬───────────────┬───────┘
                           │               │               │
                 product   │   partner/    │   compliance  │
                 links     │   circle forms│               │
                           ▼               ▼               ▼
              ┌──────────────┐   ┌────────────────┐   ┌─────────────┐
              │   Shopify    │   │ Google Sheets  │   │  Email/WA   │
              │ storefront   │   │ + Apps Script  │   │  channels   │
              └──────┬───────┘   └──────┬─────────┘   └─────────────┘
                     │ inventory/ecom   │  leads        │
                     ▼ connectors       ▼               ▼
              ┌──────────────┐   ┌──────────────┐   ┌─────────────┐
              │ Shared Drive │   │   CRM        │   │   Notion    │
              │ / middleware │   │  (internal)  │   │  (internal) │
              └──────────────┘   └──────────────┘   └─────────────┘
```

---

## 2. System Responsibilities

### 2.1 Corporate Site (this repo)
- **Brand identity:** the only public, owned expression of the brand.
- **Gateway pages:** Investors, Suppliers/Artisans, R&D/Formulation, Women
  Entrepreneurs, Strategic Partners, Press. Each is a *conversion page* to a
  documented next step (email, WhatsApp, or future portal).
- **Compliance:** Privacy Policy, Terms of Use, consent handling (DPDP).
- **Product story:** showcases product *worlds* and launch *waves* for narrative and
  SEO. Purchase happens on Shopify. The site never holds a cart or inventory.

### 2.2 Notion
- Single source of truth for how work happens (docs, wikis, roadmaps, wave plans).
- May publish select pages (press kits, investor one-pagers) to the public via
  Notion's published-page feature — read-only, no code changes.

### 2.3 Google Workspace
- Email (all `*@sweeyamlife.co.in` addresses), Drive, Docs/Sheets.
- IP hub + Legal hub live here (controlled sharing).
- Micro-apps and workflows run as Google Apps Script / Sheets-based tools.

### 2.4 Shopify
- The customer storefront. Products, variants, pricing, inventory, cart, checkout,
  shipping, payments all live here.
- Connectors (inventory, orders, fulfilment) pull from / push to the shared layer
  (§3.3). Customer data never passes through the corporate site.

---

## 3. Connector Map

Every integration is a small, replaceable adapter. No connector logic is ever baked
into page markup; it lives behind one data/service boundary (§5).

### 3.1 Corporate site → Shopify (outbound links)
- Product cards, "Buy on Shopify" CTAs, wave pages deep-link to the Shopify
  storefront. If product data on the corporate site is static, the links are plain
  URLs. If we later want live "in stock / low stock / sold out" states, a webhook or
  scheduled sync can regenerate the static build (see §5).

### 3.2 Corporate site forms → Google Sheets (existing pattern)
- Sweeyam Circle, investor/partner intakes post to Google Forms → Google Sheets.
- DPDP consent + language selection is handled client-side today and must remain.
- Future: a single "lead router" adapter forwards each submission to CRM/Notion
  without changing forms.

### 3.3 Shopify ↔ Shared Drive / middleware (inventory & commerce)
- Recommended: put a thin middleware (e.g., Shopify custom app + Google Drive/Sheets
  sync, or a headless middleware later) between Shopify and the shared Google Drive.
- Rules:
  - Shopify remains the source of truth for commerce data.
  - Drive/Sheets are a distribution layer for marketing assets + catalogue data.
  - The corporate site never reads commerce data directly from Shopify.
- This keeps Shopify swappable and the corporate site agnostic.

### 3.4 CRM (future, internal)
- Consumes leads from the router in §3.2. No public exposure.

---

## 4. Corporate Site Principles

1. **Static-first.** The corporate site builds to plain HTML/CSS/JS. No runtime
   servers, no lock-in, deploy anywhere.
2. **Decoupled from commerce.** No cart, no inventory, no payment code on the
   corporate site — ever.
3. **Data-driven pages.** Products, waves, founders, and case studies are content
   entries, not hand-written markup. Adding content ≠ editing templates.
4. **One domain.** Canonical domain = `https://www.sweeyamlife.in/`. `.co.in` 301-redirects to `.in` for all web traffic (MX stays on `.co.in` for email). Every canonical, OG URL, JSON-LD URL and sitemap entry must use `.in`.
5. **Change management via tokens.** All visual decisions live in design tokens; restyling = changing tokens, not HTML.

> ⚠️ Current discrepancy to fix in the existing HTML pages: every `<link rel="canonical">`,
> `og:url`, `og:image` and JSON-LD URL currently uses `https://www.sweeyamlife.co.in/…`.
> Since `.co.in` 301-redirects to `.in`, canonicals/OG must be regenerated to
> `https://www.sweeyamlife.in/…` (robots.txt + sitemap are already correct).
> Email addresses (`*@sweeyamlife.co.in`) are unaffected and must stay on `.co.in`.

---

## 5. API / Extensibility Strategy

Goal: every future addition (new connector, new page type, new wave) lands as a
small, additive change.

- **Content collections are the data contract.** Product/wave schemas live in one
  place (`src/content/`). Add a field = add to the schema, not to every page.
- **Service boundary.** All external calls go through `src/lib/` adapters (e.g.
  `shopify.ts`, `leads.ts`). Page components import adapters, never talk to APIs
  directly.
- **Webhooks regenerate, never serve.** Live-state needs (inventory, launch dates)
  trigger a rebuild via webhook/serverless, or are injected through the adapter at
  build time. No client-side secret access.
- **No secrets in the static bundle.** API keys/tokens live in serverless/webhook
  environment, never in the published site.
- **Schema versioning.** Product data carries `schema_version` so future migrations
  are explicit.
- **Additive pages.** New wave = new content entries + optional one template; the
  build auto-generates routes. No copy-paste of existing pages.

---

## 6. Wave Launch Process

Target: shipping a new wave is a **content operation**, not a code project.

### Checklist

1. **Product data** — add one content entry per product to `src/content/products/`
   (name, slug, wave, world/category, price range, status, imagery, description).
2. **Wave entry** — update the wave collection (number, name, launch date, theme,
   headline, status: `announced → preview → live`).
3. **Shopify catalogue** — create matching products in Shopify; set storefront links.
4. **Assets** — add imagery per `BRAND-SPEC.md` §8 (naming, sizes, formats). No asset
   is ever committed to the repo if it exists in the shared Drive.
5. **Auto-generated routes** — `/products/[slug]`, `/waves/[wave]`, and world/category
   pages appear from the build automatically.
6. **Homepage touchpoints** — update hero copy, wave timeline, "Our World" featured
   list (data-driven; usually no markup change).
7. **Gateway pages** — confirm partner CTAs still reference the right wave docs
   (Notion published pages / email).
8. **SEO review** — titles, descriptions, OG images, alt text, sitemap regenerated,
   canonical domain verified, `nofollow` on outbound-only links if needed.
9. **Quality gate** — `npm run build` clean, all internal links resolve, no console
   errors, Lighthouse a11y/perf no regressions, `prefers-reduced-motion` respected.
10. **Publish** — build + deploy static output. Webhooks (if any) re-enabled.
11. **Change log** — append to `docs/CHANGELOG.md` (wave, date, schema changes).

---

## 7. Change Management & Versioning

- **Cosmetic** changes (colour, spacing, type scale) = edit tokens in one place;
  regenerate. Pages/HTML untouched.
- **Component** changes = edit the component once; all usages update.
- **Schema** changes = bump `schema_version`, provide a migration note, then update
  content entries.
- **Domain/URL** changes = update the single site-config file; canonicals, OG,
  sitemap, robots regenerate from it.
- Every spec change is recorded in `docs/CHANGELOG.md` so any AI/reference consumer
  can rebuild the site to the current standard without guesswork.
