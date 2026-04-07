# Press Badges in Experience — Design Spec
**Date:** 2026-04-07

## Overview

Add press/media coverage badges to each Experience timeline card. For each company in the work history, surface 1–2 relevant news articles (company milestones, product launches, funding, awards) published during the user's tenure. Links open in a new tab.

## Requirements

- **Placement:** Inside each timeline card, below the technology tags
- **Content per badge:** media logo placeholder (text initials), source name, article headline (in original article language), external link
- **Quantity:** 1–2 articles per company (only the most impactful)
- **Article selection:** Company news/milestones during tenure — not personal mentions
- **Language:** Articles displayed in their original language; UI label (`"In the press"` / `"En prensa"`) translated via existing i18n system
- **Links:** `target="_blank" rel="noopener noreferrer"`

## Data Architecture

### `src/data/press.ts`
Non-translatable article data, keyed by `companyKey`:

```ts
export interface PressArticle {
  source: string       // media name, e.g. "CoinTelegraph"
  logoText: string     // 2-3 char initials for logo placeholder, e.g. "CT"
  headline: string     // original-language headline
  url: string          // article URL
  date: string         // e.g. "Mar 2024"
}

export const press: Record<string, PressArticle[]> = {
  happening: [...],
  chiliz: [...],
  bridder: [...],
  waveApplication: [...],
  solera: [...],
  streye: [...],
  everis: [...],
  navionTruck: [...],
  coordaNetworks: [...],
}
```

### i18n addition (`en.ts` / `es.ts`)
One new key under `experience`:
```ts
experience: {
  // existing keys...
  pressLabel: 'In the press',   // en
  pressLabel: 'En prensa',      // es
}
```

### `src/components/Experience.astro`
- Import `press` from `src/data/press.ts`
- Map each job to its `companyKey`
- After the tags block, conditionally render the badge row if articles exist for that key

## Visual Design

The badge row follows the existing dark-surface style of the Experience section (`--near-black` background):

- Separator: `1px solid rgba(255,255,255,0.06)` above the badge row
- Label: monospace 10px, uppercase, `rgba(176,174,165,0.4)`
- Each badge: `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(255,255,255,0.06)`, `border-radius: 6px`, hover darkens slightly
- Logo placeholder: 28×28px, rounded, text initials in monospace
- Source name: monospace 10px, `var(--terracotta)`
- Headline: 13px, truncated with `text-overflow: ellipsis`
- Arrow icon: `↗` in muted color

## Article Research Plan

Search 1–2 articles per company during user's tenure:

| Company | Period | Focus |
|---|---|---|
| Happening | 2025–now | Design system tooling, Figma AI integrations |
| Chiliz / Socios.com | 2023–2025 | MiCA certification, 2.3M users, new app launch |
| Bridder | 2021–2023 | Twitch advertising platform, brand campaigns |
| Wave Application | 2019–2021 | Sister app, AWS feature, women's safety |
| Solera | 2018–2019 | Data platform, automotive data |
| Streye / Droiders | 2016–2018 | Google Glass Enterprise, €1.5M raise, surgical operation |
| Everis | 2015–2016 | Vodafone partnership, consulting projects |
| NavionTruck | 2014–2015 | E-commerce expansion, PrestaShop |
| Coorda Networks | 2013–2014 | Coobox e-commerce engine launch |

## Out of Scope

- Dedicated press section (standalone page or full section)
- Translated article headlines
- Real media logos (using text initials as placeholders)
- Pagination or "load more"
