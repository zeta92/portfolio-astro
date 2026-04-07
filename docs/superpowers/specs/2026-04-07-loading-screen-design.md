# Loading Screen Animation — Design Spec

## Overview

A full-screen intro animation that plays when the portfolio loads. It displays ~27 icons and tech badges from Luis's professional history, converges them into a central black-hole effect, then explodes outward and exits with a glitch/dissolve, revealing the portfolio beneath.

Duration: 2–3 seconds real-world (blocks until DOM is interactive + minimum time elapsed).

---

## Visual Design

**Background:** `#141413` (portfolio `--near-black`), subtle terracotta grid (`rgba(201,100,66,0.03)`), animated scanline moving top-to-bottom.

**Color palette:** Portfolio design tokens only — `--near-black: #141413`, `--terracotta: #c96442`, `--parchment: #f5f4ed`. Each element uses its brand color at low opacity.

**Typography:** JetBrains Mono (monospace) for all badge labels.

**Progress bar:** 2px terracotta line along the bottom edge, fills left-to-right during the convergence phase, fades out before the explosion.

---

## Elements (27 total)

| Category | Elements |
|---|---|
| Hardware / XR | VR glasses |
| Crypto | ETH diamond, CHZ hexagon |
| Web3 | Web3 badge, Solidity badge |
| JS frontend | React orbits, Vue triangle, Next.js badge, Angular shield, Redux badge |
| Runtime / backend | Node.js hexagon, TypeScript square, PHP badge |
| Cloud / DevOps | AWS badge, Docker badge, Firebase badge, MongoDB leaf, GraphQL hexagon |
| Real-time / media | Twitch logo, WebRTC badge, Socket.IO badge |
| 3D / tooling | Three.js badge, Figma columns, Git badge |
| Identity | Location pin, Shield/checkmark, Super dots-grid |

Elements are SVG shapes or monospace badge `<div>`s. Sizes: 28–44px. Colors use brand-accurate hues at 70–90% opacity on dark backgrounds.

---

## Placement

- Collision-free random placement computed at the start of each cycle using bounding-box overlap detection with a 14px gap between elements.
- A center exclusion zone (radius = 14% of `min(viewport width, viewport height)`) ensures no element starts too close to the convergence point.
- Fallback: if an element cannot be placed after 300 attempts, it is placed at a random edge-quadrant position outside the center zone.
- Positions are re-randomized at the start of each cycle so repeated loops look different.

---

## Animation Sequence

The full cycle is **~2.5s** (one-shot in production; looping in the mockup for review).

| Phase | % of cycle | Duration (2.5s) | Description |
|---|---|---|---|
| **① Spread** | 0–10% | 250ms | All elements visible at their spread positions. Static. |
| **② Converge** | 10–50% | 1000ms | `easeOutExpo` toward center. Velocity proportional to starting distance — far elements travel faster in px/frame. All arrive at the same moment. Elements shrink as they approach (black-hole compression). Fade out in the last 12% of travel. |
| **③ Flash** | 50–57% | 175ms | Elements invisible at center. Core dot pulses to `scale(19)` with 100px terracotta glow. Three concentric halos expand outward with `easeOutQuart`. |
| **④ Explode** | 57–73% | 400ms | Elements burst outward from center to random off-screen positions. Start large (`scale(1.5)`), shrink and fade as they travel (`easeOutQuart` position, `easeInCubic` fade). |
| **⑤ Glitch / exit** | 73–87% | 350ms | Horizontal scanline band glitches across the screen with random X-offset and terracotta tint. Intensity peaks at center of this window. |
| **⑥ Reset** | 87–100% | 325ms | Elements invisible. Bar fades. Screen clear — portfolio content revealed. |

---

## Easing Functions Used

```
easeOutExpo(t)  = t >= 1 ? 1 : 1 - 2^(-10t)   // converge phase
easeInCubic(t)  = t³                              // explode fade
easeInQuart(t)  = t⁴                              // scale shrink
easeOutQuart(t) = 1 - (1-t)⁴                     // halo expand, explode position
```

---

## Blocking Behavior

The loader overlays the fully-rendered page. It:

1. Starts immediately on `DOMContentLoaded`.
2. Records a `startTime`.
3. On completion of the animation, checks if `Date.now() - startTime >= MIN_DURATION` (e.g. 2000ms).
4. If yes: fades out the loader overlay, removes it from DOM.
5. If no: waits the remaining time then removes it.

This ensures the animation always completes its sequence even on fast connections, while never blocking beyond its minimum duration on slow ones.

---

## Component Structure

| File | Responsibility |
|---|---|
| `src/components/Loader.astro` | Overlay markup: `#loader` div, `#loader-stage`, center dot, halos, glitch layer, bar. Inline `<script>` for the full animation. |
| `src/layouts/Layout.astro` | Mounts `<Loader />` as the first child of `<body>`. Adds `overflow: hidden` to body until loader exits. |

The loader is self-contained: no external JS imports, no CSS files. All animation logic lives inside the component's `<script>` tag.

---

## Implementation Notes

- Use `requestAnimationFrame` loop with a normalized `p = ((ts - startTime) % CYCLE) / CYCLE` time parameter (one-shot in production: remove the modulo and stop the loop when `p >= 1`).
- Element DOM nodes are created dynamically from a `ELEMENTS` array (avoids 27 lines of static markup).
- Placement and explosion positions are computed once before the loop starts.
- The overlay `z-index` must be above all portfolio content (`z-index: 9999`).
- `pointer-events: none` on all animated elements to avoid blocking hover states during the animation.
- On `prefers-reduced-motion: reduce`, skip the loader entirely (set `display: none` immediately).

---

## Out of Scope

- No audio.
- No interaction (click to skip).
- No per-element labels or tooltips.
- No mobile-specific layout changes (full-screen fills viewport on all sizes).
