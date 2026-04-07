# Press Badges in Experience — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add press/media badges to each Experience timeline card, showing 1–2 real articles per company, opening in a new tab.

**Architecture:** Create `src/data/press.ts` with real article data keyed by company slug. Add a single `pressLabel` key to both i18n files. Update `Experience.astro` to render a badge row below the tags for any job that has press entries.

**Tech Stack:** Astro 6, TypeScript, CSS (scoped in .astro), no test framework (verify visually with `npm run dev`)

---

### Task 1: Create `src/data/press.ts`

**Files:**
- Create: `src/data/press.ts`

- [ ] **Step 1: Create the file with typed interface and all article data**

```typescript
export interface PressArticle {
  source: string;
  logoText: string;
  headline: string;
  url: string;
  date: string;
}

export const press: Record<string, PressArticle[]> = {
  happening: [],

  chiliz: [
    {
      source: 'CoinDesk',
      logoText: 'CD',
      headline: 'Fan Token Project Chiliz Rolls Out Layer 1 Blockchain; Token Surges 20%',
      url: 'https://www.coindesk.com/business/2023/02/08/fan-token-project-chiliz-rolls-out-layer-1-blockchain-token-surges-20',
      date: 'Feb 2023',
    },
    {
      source: 'Socios.com',
      logoText: 'SC',
      headline: 'The Chiliz Group celebrates dual MiCA milestone: European licence for Socios Europe Services and MiCA-compliant CHZ white paper',
      url: 'https://www.socios.com/the-chiliz-group-celebrates-dual-mica-milestone-european-licence-for-socios-europe-services-and-mica-compliant-chz-white-paper/',
      date: 'Sep 2025',
    },
  ],

  bridder: [],

  waveApplication: [
    {
      source: 'Amazon Web Services',
      logoText: 'AWS',
      headline: 'Be smart about your safety. Discover Sister',
      url: 'https://www.aboutamazon.eu/news/amazon-web-services/be-smart-about-your-safety-discover-sister',
      date: 'Apr 2020',
    },
    {
      source: 'Innovadores',
      logoText: 'INV',
      headline: 'Sister App localiza a la mujer en peligro con dos metros de precisión',
      url: 'https://innovadores.inndux.com/es/sister-app-localiza-a-la-mujer-en-peligro-con-dos-metros-de-precision',
      date: 'Nov 2019',
    },
  ],

  solera: [],

  streye: [
    {
      source: 'El Español',
      logoText: 'ES',
      headline: 'Streye, tecnológica española, venderá en exclusiva las nuevas Google Glass en todo el mundo',
      url: 'https://www.elespanol.com/invertia/empresas/20180313/streye-tecnologica-espanola-desarrollo-nueva-google-glass/291721577_0.html',
      date: 'Mar 2018',
    },
    {
      source: 'Digital Trends',
      logoText: 'DT',
      headline: 'Wearable Specialist Streye is Selling Google Glass to Businesses',
      url: 'https://www.digitaltrends.com/computing/google-glass-enterprise-streye/',
      date: 'Aug 2017',
    },
  ],

  everis: [],

  navionTruck: [],

  coordaNetworks: [],
};
```

- [ ] **Step 2: Commit**

```bash
git add src/data/press.ts
git commit -m "feat: add press articles data file"
```

---

### Task 2: Add `pressLabel` to i18n files

**Files:**
- Modify: `src/i18n/en.ts`
- Modify: `src/i18n/es.ts`

- [ ] **Step 1: Add `pressLabel` to `en.ts` inside the `experience` object**

In `src/i18n/en.ts`, add after `count: '09 positions · 2013 → present',`:

```typescript
    pressLabel: 'In the press',
```

The `experience` block should start:
```typescript
  experience: {
    label: 'Experience',
    heading: 'Work History',
    count: '09 positions · 2013 → present',
    pressLabel: 'In the press',
    jobs: [
```

- [ ] **Step 2: Add `pressLabel` to `es.ts` inside the `experience` object**

In `src/i18n/es.ts`, add after `count: '09 posiciones · 2013 → presente',`:

```typescript
    pressLabel: 'En prensa',
```

The `experience` block should start:
```typescript
  experience: {
    label: 'Experiencia',
    heading: 'Historial Laboral',
    count: '09 posiciones · 2013 → presente',
    pressLabel: 'En prensa',
    jobs: [
```

- [ ] **Step 3: Commit**

```bash
git add src/i18n/en.ts src/i18n/es.ts
git commit -m "feat: add pressLabel to i18n files"
```

---

### Task 3: Update `Experience.astro` to render press badges

**Files:**
- Modify: `src/components/Experience.astro`

- [ ] **Step 1: Add the import for press data at the top of the frontmatter**

Replace the existing frontmatter:
```astro
---
import type { Translations } from '../i18n/en';
interface Props { t: Translations; }
const { t } = Astro.props;
const exp = t.experience;
---
```

With:
```astro
---
import type { Translations } from '../i18n/en';
import { press } from '../data/press';

interface Props { t: Translations; }
const { t } = Astro.props;
const exp = t.experience;

const companyKeys = [
  'happening',
  'chiliz',
  'bridder',
  'waveApplication',
  'solera',
  'streye',
  'everis',
  'navionTruck',
  'coordaNetworks',
];
---
```

- [ ] **Step 2: Replace the jobs `.map()` call to use block body with explicit return**

Replace the entire `{exp.jobs.map(...)}` expression:
```astro
      {exp.jobs.map((job, _i) => (
        <div class="timeline-item">
          <div class="timeline-item__years">
            <strong>{job.period}</strong>
            {job.company}
          </div>
          <div class="timeline-item__content">
            <h3 class="timeline-item__role">{job.role}</h3>
            <p class="timeline-item__company">{job.subtitle}</p>
            <p class="timeline-item__desc" set:html={job.desc} />
            <div class="timeline-item__tags">
              {job.tags.map((tag, idx) => (
                <span class={`tag--dark${job.accent.includes(idx) ? ' tag--dark-accent' : ''}`}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
```

With:
```astro
      {exp.jobs.map((job, i) => {
        const articles = press[companyKeys[i]] ?? [];
        return (
          <div class="timeline-item">
            <div class="timeline-item__years">
              <strong>{job.period}</strong>
              {job.company}
            </div>
            <div class="timeline-item__content">
              <h3 class="timeline-item__role">{job.role}</h3>
              <p class="timeline-item__company">{job.subtitle}</p>
              <p class="timeline-item__desc" set:html={job.desc} />
              <div class="timeline-item__tags">
                {job.tags.map((tag, idx) => (
                  <span class={`tag--dark${job.accent.includes(idx) ? ' tag--dark-accent' : ''}`}>{tag}</span>
                ))}
              </div>
              {articles.length > 0 && (
                <div class="press-row">
                  <span class="press-row__label">{exp.pressLabel}</span>
                  {articles.map(article => (
                    <a
                      class="press-badge"
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div class="press-badge__logo">{article.logoText}</div>
                      <div class="press-badge__body">
                        <span class="press-badge__source">{article.source}</span>
                        <span class="press-badge__headline">{article.headline}</span>
                      </div>
                      <span class="press-badge__arrow">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
```

- [ ] **Step 3: Add press badge styles inside the existing `<style>` block**

Add before the closing `</style>` tag (after the `@media` block):

```css
  /* ── Press badges ───────────────────────────── */
  .press-row {
    border-top: 1px solid rgba(255,255,255,0.06);
    padding-top: var(--space-3);
    margin-top: var(--space-3);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .press-row__label {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(176,174,165,0.4);
  }
  .press-badge {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-radius: 6px;
    background: rgba(255,255,255,0.03);
    box-shadow: 0px 0px 0px 1px rgba(255,255,255,0.06);
    text-decoration: none;
    max-width: 520px;
    transition: background var(--ease-color), box-shadow var(--ease-shadow);
  }
  .press-badge:hover {
    background: rgba(255,255,255,0.06);
    box-shadow: 0px 0px 0px 1px rgba(255,255,255,0.10);
  }
  .press-badge__logo {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    border-radius: 4px;
    background: rgba(255,255,255,0.07);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-mono);
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: var(--text-light);
  }
  .press-badge__body {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .press-badge__source {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.05em;
    color: var(--terracotta);
  }
  .press-badge__headline {
    font-family: var(--font-serif);
    font-size: 13px;
    color: rgba(176,174,165,0.85);
    line-height: 1.35;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .press-badge__arrow {
    flex-shrink: 0;
    font-size: 12px;
    color: rgba(176,174,165,0.25);
    transition: color var(--ease-color);
  }
  .press-badge:hover .press-badge__arrow {
    color: rgba(176,174,165,0.6);
  }
```

- [ ] **Step 4: Verify in browser**

```bash
npm run dev
```

Open `http://localhost:4321` and check:
- Chiliz, Wave Application (Sister), and Streye/Droiders cards show the `"In the press"` / `"En prensa"` label with badge(s) below the tags
- Happening, Bridder, Solera, Everis, NavionTruck, Coorda Networks cards show no press row
- Each badge displays: logo initials + source name in terracotta + truncated headline
- Clicking a badge opens the article in a new tab
- Open `http://localhost:4321/es/` and verify label shows `"En prensa"`

- [ ] **Step 5: Commit**

```bash
git add src/components/Experience.astro
git commit -m "feat: render press badges in experience timeline cards"
```

---

### Task 4: Production build check

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: no TypeScript errors, build completes to `./dist/`

- [ ] **Step 2: Commit if any build fixes were needed**

If the build revealed type errors (e.g. `pressLabel` missing from Translations), they would have been caught in Task 2 Step 1. If the build passes cleanly, no additional commit needed.
