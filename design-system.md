# Publicly — Design System

**Status: LOCKED.** This file is the single source of truth for every component on the Publicly landing page. Every component built must be checked against this document. No drift.

---

## 1. Brand

- **Name:** Publicly
- **Tagline:** Hire Public Builders.
- **What it is:** A talent marketplace where startups hire technically fluent creators who embed with their team, understand the product deeply, and turn every week of progress into public marketing — demos, build logs, short videos, launch momentum.
- **How they work:** Public Builders spend most of their time on content and distribution. They get hands-on with the product where it counts (~5% of their time) so everything they publish is true.
- **Feeling to land:** "These are embedded, credible creators who actually understand what you're building — not detached influencers."

### Positioning rules (apply to ALL copy)

- The differentiator is **technical credibility + being embedded in the team** — NOT build volume.
- A Public Builder is an **embedded, DevRel-flavored creator**, not a code contributor.
- **Lead with content, distribution, and credibility.** Never frame "helps build the product" as the headline value.
- The contrast is **influencers and freelance marketers** — never "interns," never engineers.

### Copy style

- **Never use em dashes in any copy, anywhere.** Use periods, commas, or restructure the sentence. This applies to headlines, body, mono metadata, captions, labels, and microcopy without exception.

---

## 2. Aesthetic Direction

**"Live build log."** A developer's terminal and a changelog crossed with an editorial magazine. Evidence of real work everywhere: timestamps, commit-style entries, status dots, demo thumbnails, real social-post previews. Confident, honest, a little raw. Not soft, not corporate, not startup-purple.

---

## 3. Typography

**Never Inter. Never a system default.**

| Role | Font | Rules |
|---|---|---|
| Display / headlines | **General Sans** (primary) or Clash Display — Fontshare, free | Weight 500–600, tight tracking, large sizes |
| Body / UI | **Satoshi** or Geist Sans | Never Inter |
| Mono | **JetBrains Mono** or Geist Mono | See mono-for-data rule below |

### The mono-for-data rule (signature move)

Mono is used for **ALL metadata**: timestamps, tags, prices, availability, skill chips, section eyebrow labels, stats. It reads as real data and real work. This is non-negotiable on every component.

### Scale

- **Non-uniform.** Big jump from body size to display size.
- Eyebrow labels: small, mono, uppercase, wide letter-spacing.

---

## 4. Color (LIGHT theme)

**No purple. No blue-to-violet gradients. No gradient blobs.**

| Token | Hex | Use |
|---|---|---|
| `canvas` | `#F5F2EA` | Page background, warm paper. Not pure white. |
| `ink` | `#1A1815` | Primary text, warm near-black |
| `ink-secondary` | `#6B6459` | Secondary text |
| `accent` | `#4A7A00` | Signal lime, darkened to read on paper. Actions, live indicators, "shipped" states ONLY. Under 10% of any screen. |
| `status-amber` | `#B0741A` | "In progress / shipping" states only |
| `border` | `#D8D2C4` | Hairlines and borders |
| `dark` | `#100F0D` | Optional: ONE inverted DARK contrast block (pricing or waitlist), with ink `#EDE9E0`. The original bright lime `#C7F24E` may be used inside this block only. |

### Gradient policy

None — with exactly one exception: at most **one** very subtle, low-opacity **radial** glow in accent behind the hero headline. No linear color-to-color gradients anywhere.

---

## 5. Shape, Spacing, Depth

### Radius — intentional variation, not uniform

- Cards and inputs: **4px** (sharp, engineered)
- Badges, tags, status pills: **fully round** (`9999px`)
- Never the default 16px-everywhere soft look.

### Depth

- Prefer **1px hairline borders** (`#D8D2C4`) and subtle background shifts over shadows.
- Exactly **ONE** elevation shadow exists in the system — for overlays and modals only.
- No soft-glow cards.

### Spacing scale (px)

`4, 8, 12, 20, 32, 56, 88, 128`

- Sections breathe: 88–128px vertical.
- Inside cards runs tighter.

### Grid

12 columns, generous gutters, **deliberately asymmetric compositions**. Do not center everything.

---

## 6. Motion

**Ease, never snap. Purposeful and quiet.**

- Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`
- Hover: ~120ms. Scroll reveals: ~320ms.
- Card hover: border brightens toward accent + a 1px accent underline slides in. **No shadow bloom, no scale jump.**
- Status dots pulse gently when "live."
- Timeline and cards reveal **staggered** on scroll.
- No parallax circus. No floating blobs.

---

## 7. Iconography

- **One** icon set, **one** weight: Lucide or Phosphor at **1.5px stroke**.
- Never emoji as icons.

---

## 8. Visual Richness (apply to every component)

**Minimal is not the same as empty.** The page should feel dense with real work, not sparse.

1. **Composed negative space, never dead space.** Every section must balance its full vertical band. No large empty quadrants where content just trails off. If a section is text-light, add a supporting visual element (a feed, a post embed, a small diagram, a stat block) to hold the other side.
2. **Section rhythm.** Vary layouts across the page (asymmetric split, full-bleed statement, card grid, horizontal timeline, dark inverted block) so it reads as a designed sequence, not uniform stacked boxes.
3. **Motion is real, not decorative-only.** The hero feed actually animates: entries tick in from the top on a loop, staggered, with the system easing, and live status dots pulse. It should read as a running feed, not a static list.
4. **Card life.** Builder cards get genuine hover states (border brightens toward accent, a 1px accent underline slides in, a subtle background lift) and are information-dense with varied real content, not thin.
5. **The timeline reads as a moving changelog:** milestones reveal staggered on scroll and the connecting hairline path draws in.
6. **Real-looking social embeds carry visual interest.** Render X, LinkedIn, and YouTube previews with authentic structure (avatar, handle, mono timestamp, mono engagement counts), never generic quote-card testimonials.
7. **Density detail.** Use mono metadata rows, small proof chips, status dots, and subtle hairline/grid textures to create the "real work" density that makes restraint feel rich rather than bare.

---

## 9. The NEVER List (enforce on every component)

1. Never Inter or a default system font.
2. Never purple, or any blue-to-violet gradient.
3. Never gradient blobs, orbs, or abstract 3D shapes.
4. Never stock "diverse team around a laptop" photos or AI illustration.
5. Never uniform 16px radius on everything.
6. Never soft drop-shadow cards as the default depth cue.
7. Never the centered-headline + subtext + one-centered-button hero cliché.
8. Never vague copy like "Empower your journey" or "Build the future."
9. Never generic quote testimonial cards — use real-looking social-post embeds instead.
10. Never mixed icon weights or emoji icons.
11. Never filler lorem or invented brand logos.
12. Never frame Public Builders as engineers, or as people whose main job is building the product.
13. Never use "intern" as the contrast — the contrast is influencers and freelance marketers.
14. Never em dashes in copy. Periods, commas, or restructure.
15. Never dead empty quadrants, or sections that trail off into empty space.

---

## 10. Component Checklist (run before shipping any component)

- [ ] Metadata (timestamps, tags, prices, stats, eyebrows) is in mono
- [ ] Accent lime covers <10% of the screen and only marks actions / live / shipped
- [ ] Cards/inputs at 4px radius; pills fully round
- [ ] Depth via hairline borders, not shadows
- [ ] Section vertical padding in the 88–128px band
- [ ] Composition is asymmetric where possible
- [ ] Motion uses the system easing; hover ~120ms, reveals ~320ms
- [ ] Copy leads with content, distribution, credibility — not building
- [ ] No em dashes anywhere in copy
- [ ] Section balances its full vertical band; no dead empty quadrants
- [ ] Motion that is promised is real (feed ticks, dots pulse, paths draw)
- [ ] Social proof is rendered as authentic embeds, not quote cards
- [ ] Nothing on the NEVER list is present
