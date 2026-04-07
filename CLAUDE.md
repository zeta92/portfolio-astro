# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Dev server at localhost:4321
npm run build      # Production build to ./dist/
npm run preview    # Preview production build locally
npx astro check    # TypeScript type checking
```

## Architecture

This is an Astro 6 portfolio site with built-in i18n (English default, Spanish at `/es/`).

**i18n pattern:** All user-facing strings live in `src/i18n/en.ts` and `src/i18n/es.ts`. The `en.ts` file also exports the `Translations` type (inferred from the `en` object), which is the single source of truth for the shape of all translations. Pages pass a `t` (translations object) and `lang` prop down through the component tree — no translation keys are hardcoded in components.

**Routing:** Astro file-based routing. English pages live directly in `src/pages/`, Spanish pages mirror the same structure under `src/pages/es/`. The `astro.config.mjs` sets `prefixDefaultLocale: false`, so English routes have no language prefix.

**Component props:** All components except `Nav` and `Footer` (which receive both `t` and `lang`) only need `t`. The `Layout.astro` wraps every page and injects `Nav` and `Footer`.

**Styling:** Global CSS design tokens are defined in `Layout.astro`'s `<style is:global>` block. Reusable utility classes (`.reveal`, `.section-label`, `.tag`, `.tag--accent`, `.tag--dark`, `.section-divider`) are also global. Component-specific styles should be scoped within each `.astro` file.

**Fonts:** Syne (display/headings), Crimson Pro (body serif), JetBrains Mono (mono/tags) — loaded via Google Fonts in `Layout.astro`.

**Animations:** Scroll-reveal (`IntersectionObserver`) and timeline stagger are handled by inline `<script>` in `Layout.astro`. Elements get `.reveal` class and become visible when they enter the viewport. Hero elements use sequential `setTimeout` delays on page load.

## Adding content

- To add/edit experience, about stats, skills, or any copy: edit `src/i18n/en.ts` and `src/i18n/es.ts` in parallel (both must stay in sync).
- To add a new section: create a component in `src/components/`, add it to both `src/pages/index.astro` and `src/pages/es/index.astro`, and add any new translation keys to both i18n files.
