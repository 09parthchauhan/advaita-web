# Advaita Intelligence — Frontend Codebase Map, Design System & Audit

This document is the working reference for everyone (humans + AI agents) touching the
Advaita Intelligence marketing site. It captures:

1. The current tech stack and project layout
2. The structural design system (tokens, type, spacing, motion, components)
3. Existing code patterns and conventions in use
4. A concrete audit of issues, risks and recommended changes
5. What is left to build (Product, Platform, Documentation pages)
6. The agent skills installed from `skills.sh` and when to invoke each

> The `advaita-ai-tech-platform-main/` folder (the in-product UI) is intentionally
> excluded from this map and must not be modified from this workspace.

---

## 1. Project Overview

### 1.1 Stack

| Layer            | Tech / Version                                                   |
| ---------------- | ---------------------------------------------------------------- |
| Build tool       | Vite 8                                                           |
| Framework        | React 19 (StrictMode, no React Compiler enabled)                 |
| Routing          | `react-router-dom` v7 (`BrowserRouter` in `src/App.jsx`)         |
| Styling          | Tailwind CSS 3.4 + a very large hand-written `src/index.css`     |
| Motion / 3D      | `framer-motion` 12, `@react-three/fiber` 9, `@react-three/drei`  |
| Fonts            | `@fontsource/manrope` (installed but Geist + Faculty Glyphic are loaded via Google Fonts in CSS) |
| Lint             | ESLint 10 flat config (`eslint.config.js`)                       |
| Language         | JavaScript (JSX). No TypeScript yet.                             |
| Package mgr      | npm (lockfile present)                                           |

### 1.2 Directory Layout (excluding `advaita-ai-tech-platform-main/`)

```
advaita/
├── index.html                 Single root, mounts <App /> at #root
├── vite.config.js             Minimal: @vitejs/plugin-react only
├── tailwind.config.js         Custom tokens (see §2)
├── postcss.config.js          tailwindcss + autoprefixer
├── eslint.config.js           Flat config, ignores dist + SDK
├── public/
│   ├── Logo.png               Brand mark
│   ├── i-hub.png              iHub partner logo
│   └── acai.png               Product hero asset
├── SDK/                       Read-only SDK source mirrors (10 langs) — excluded from lint
│   ├── acai-typescript/
│   ├── acai-python/
│   ├── acai-analytics-go/
│   ├── acai-java/   acai-kotlin/   acai-node/   acai-js/
│   ├── acai-flutter/   acai-react-native/   acai-swift/
├── src/
│   ├── main.jsx               createRoot + StrictMode entry
│   ├── App.jsx                Routes (see §1.3)
│   ├── index.css              ~3,470 lines of hand-written CSS for sections + animations
│   ├── components/            Section-level building blocks (see §1.4)
│   └── pages/                 Route-level pages (see §1.5)
└── .agents/skills/            Agent skills installed from skills.sh (see §6)
```

### 1.3 Current Routes (`src/App.jsx`)

| Path                 | Page Component | Status         |
| -------------------- | -------------- | -------------- |
| `/`                  | `Home`         | Done           |
| `/pricing`           | `Pricing`      | Done           |
| `/docs`              | `Docs`         | Initial pass — needs polish & content |
| `/company/about`     | `About`        | Done           |
| `/company/careers`   | `Careers`      | Done           |
| `/company/contact`   | `Contact`      | Done           |
| `/product/...`       | —              | **Not implemented** (links exist in `Navbar`) |
| `/platforms/...`     | —              | **Not implemented** (links exist in `Navbar`) |
| `/privacy`, `/terms` | —              | **Not implemented** (linked from footer) |

> Authentication / signup is hosted externally on `https://signup.acaiplatform.ai/`
> and is not part of this repository.

### 1.4 Section Components (`src/components/`)

| File                       | Purpose                                          | Notes |
| -------------------------- | ------------------------------------------------ | ----- |
| `Navbar.jsx`               | Sticky nav with multi-column hover dropdowns + mobile sheet | All `<a>` tags use native `href`, not `<Link>` |
| `Announcementbar.jsx`      | Top gradient banner                              | Static copy |
| `Herosection.jsx`          | Canvas-driven analytics card hero                | Inline styles + `<canvas>` animation |
| `BackedBy.jsx`             | iHub / Startup Srujan badges                     | Currently commented out of `Home` |
| `KeyFeaturesSection.jsx`   | 4-feature carousel with live preview panes       | 22 KB, heavy inline styling |
| `Teamssection.jsx`         | Dark "Built for every team" tabbed section       | Custom SVG illustrations per tab |
| `Howitworkssection.jsx`    | 3-step list + canvas fan animation               | |
| `Analysiscardssection.jsx` | 3 dark "analyse everywhere" cards                | |
| `Faqsection.jsx`           | Two-column FAQ accordion                         | |
| `Finalctasection.jsx`      | Particle-field final CTA                         | |
| `Footer.jsx`               | 5-column footer with reveal-on-scroll            | |
| `Capabilities.jsx`         | Older feature grid using `framer-motion`         | **Unused — not imported anywhere** |

### 1.5 Page Composition Pattern

Pages are thin and compose section components:

```jsx
// src/pages/Home.jsx
<AnnouncementBar />
<Navbar />
<main>
  <HeroSection />
  <KeyFeaturesSection />
  <TeamsSection />
  <HowItWorksSection />
  <AnalysisCardsSection />
  <FaqSection />
  <FinalCtaSection />
</main>
<Footer />
```

Other completed pages (`About`, `Careers`, `Contact`, `Pricing`) follow the same shell:
`AnnouncementBar → Navbar → main(sections) → Footer`. `Docs.jsx` is the odd one out — it
ships its own topbar/sidebar shell instead of reusing `Navbar`.

---

## 2. Structural Design System

The system is currently expressed across **three sources**:

- `tailwind.config.js` — semantic tokens
- `src/index.css` — global resets, custom classes, motion utilities, page-scoped sections
- Inline `style={{ ... }}` literals everywhere in JSX

These three sources are not always in sync (see audit §4). Below is the canonical
intended system; new pages should align to it.

### 2.1 Color Tokens

```js
// from tailwind.config.js
'jet-black'      : '#111111'   // primary text / dark buttons
'charcoal'       : '#252525'   // secondary dark surface (hero second CTA)
'gray-cloud'     : '#828282'   // tertiary text
'soft-gray'      : '#F6F6F1'   // global page background
'brand-green'    : '#1a6b1a'   // deep accent
'brand-green-mid': '#4a9e1a'   // primary brand green (icons, links, success)
'brand-yellow'   : '#f5d800'   // accent yellow (CSS often uses #f5d000)
'brand-orange'   : '#f5820a'   // primary brand orange — the "dot" used as eyebrow indicator
```

Additional values found in CSS / inline styles (worth promoting to tokens):

- `#fbfbf8` — Footer / nav-feature surface
- `#F6F6F1` (`soft-gray`) — page bg
- `#676665` — muted body text
- `#0a0a0a` — dark sections (Teams)
- `rgba(255,255,255,0.04 / 0.06 / 0.08 / 0.12)` — dark-surface card tints
- Gradient mix: `rgba(244,123,32,0.22) → rgba(245,208,0,0.18) → rgba(134,210,150,0.22)`
  exposed as CSS vars `--gradient-brand` and `--gradient-hero-card` in `index.css`.

### 2.2 Typography

- **Primary**: `Geist` (loaded from Google Fonts in `index.css`)
- **Display accent**: `Faculty Glyphic` (used selectively, e.g. in `KeyFeaturesSection`)
- **Manrope** is installed via `@fontsource/manrope` but never imported.

Tailwind type scale (use these on new pages):

```
h1 64 / 1.2 / -0.04em
h2 60 / 1.2 / -0.04em
h3 54 / 1.3 / -0.04em
h4 48 / 1.3 / -0.04em
h5 44 / 1.3 / -0.04em
h6 36 / 1.3 / -0.04em
body-lg 20 / 1.3
body-md 18 / 1.3
body-sm 16 / 1.3
body-xs 14 / 1.3
```

Real usage in components frequently overrides these via inline styles
(e.g. `fontSize: '54px'`, `fontWeight: '500'`). The visual hierarchy is consistent but
the implementation is not.

### 2.3 Layout System

- Page shell width: `max-w-[1480px]` with `px-5` (sometimes `px-[20px]` or `px-[40px]`)
- Section vertical rhythm: `padding: 96–112px 0` for marketing sections, `100px` for
  storytelling sections
- Grid patterns:
  - Hero / Story: `minmax(0, 1fr) minmax(420px, 0.62fr)`
  - Feature split: `440px 1fr`
  - Footer: `minmax(260px, 1fr) minmax(0, 3fr)` for brand/columns, columns are
    `repeat(5, minmax(0, 1fr))`

### 2.4 Components / Pattern Library

These reusable visual atoms are already established:

- **Eyebrow label**: 10×10 px orange (`#f5820a`) square + uppercase 11px `0.15em` letter-spacing
  copy. Reused on every section as the "kicker".
- **Arrow button**: shared `.arrow-button` class with `.arrow-icon` child SVG using the
  same right-up arrow path. Hover translates the arrow.
- **Headline reveal**: `.headline-reveal-line` paired with `.is-visible` toggled by an
  `IntersectionObserver` (see §3.2).
- **Scroll reveal**: `.scroll-reveal`, `.scroll-reveal-left`, `.scroll-reveal-right`,
  `.scroll-reveal-up`, all toggled by `is-visible`.
- **Feature pill** (`.feature-pill`): hero badges (Backed by iHub, Srujan grant).
- **Nav dropdown**: `.nav-dropdown`, `.nav-dropdown-link`, `.nav-feature-card`,
  `.nav-feature-card-{platform|company|docs}`.
- **Pricing card**: `.pricing-card`, `.pricing-card-{orange|green|yellow}`, with
  `--plan-accent` CSS variable per plan.
- **Docs shell**: `.docs-workspace`, `.docs-sidebar`, `.docs-content`, `.docs-toc`,
  `.docs-sdk-doc-card`, `.docs-code-block`.

### 2.5 Motion Vocabulary

A consistent easing curve is used everywhere:
`cubic-bezier(0.16, 1, 0.3, 1)` (Apple-style overshoot).

Standard keyframes available in `index.css`:

- `slideDown` — navbar entry
- `fadeUp` — hero items with staggered `0.1s / 0.2s / 0.35s / 0.5s / …` delays
- `fadeIn` — announcement bar
- `navDropdownFromRight / FromLeft` — direction-aware dropdown reveals
- Section reveals via `IntersectionObserver` toggling `.is-visible`

Per-component canvas animations (Hero analytic cards, Final-CTA particles, How-it-works
fan) run on `requestAnimationFrame`.

---

## 3. Code Patterns & Conventions

### 3.1 Component Style

- Function components only; default export per file.
- Hooks used: `useState`, `useEffect`, `useRef`, `useMemo`.
- A `useReveal(threshold)` helper is **redeclared inside almost every page**
  (`About.jsx`, `Careers.jsx`, `Contact.jsx`, `Pricing.jsx`). Strong candidate for a
  shared `src/hooks/useReveal.js` (see audit §4.3).

### 3.2 IntersectionObserver Reveal Pattern

```jsx
const ref = useRef(null)
const [visible, setVisible] = useState(false)
useEffect(() => {
  const node = ref.current
  if (!node) return
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setVisible(true)
      observer.unobserve(entry.target)
    }
  }, { threshold: 0.18 })
  observer.observe(node)
  return () => observer.disconnect()
}, [])
```

Used in `Footer`, `BackedBy`, `KeyFeaturesSection`, `Teamssection`, `Howitworkssection`,
`Faqsection`, `Finalctasection`, `Analysiscardssection`, and `useReveal()` in pages.

### 3.3 Routing & Links

- Routes declared in `src/App.jsx` with `<BrowserRouter>` and `<Routes>`.
- **Important inconsistency**: every internal navigation in the app uses native
  `<a href="...">` rather than `<Link>` from `react-router-dom`. This forces a full
  page reload on every nav click — see audit §4.1.

### 3.4 Styling Strategy

- Tailwind utilities for spacing and small atoms.
- Long, expressive inline `style={{ ... }}` blocks for any non-trivial design,
  especially typography, colors and gradients.
- Hand-written CSS in `src/index.css` for page-scoped section layouts, animations
  and dropdowns.

This works but causes drift between Tailwind tokens, CSS classes and inline literals.

### 3.5 File Naming

Section components mix casings: `Herosection.jsx`, `Howitworkssection.jsx`,
`KeyFeaturesSection.jsx`. There is no single convention. Pages use PascalCase
consistently.

---

## 4. Audit — What to Fix / Improve

Ordered by impact.

### 4.1 High Priority

1. **Use `<Link>` for internal navigation.** Every `<a href="/...">` inside the SPA
   currently triggers a full reload, killing the slick fade animations between pages
   and wasting bundle re-evaluation. Convert `Navbar`, `Footer`, page CTAs, dropdowns
   and FAQ → contact link to `react-router-dom`'s `<Link>`. External URLs
   (`signup.acaiplatform.ai`, `ihubgujarat.in`, social) stay as `<a>`.
2. **Centralize the `useReveal` hook.** Four copies of the same logic across pages.
   Extract to `src/hooks/useReveal.js` and import.
3. **Add a `<NotFound />` route + handle unimplemented `/product/*` and
   `/platforms/*` paths.** Today they 404 to a blank screen. At minimum show a
   "Coming soon" page that reuses `Navbar` + `Footer`.
4. **Fix the headline typo on the Hero.** `"AI Anlaytics Platform"` should be
   `"AI Analytics Platform"` (`src/components/Herosection.jsx`).
5. **Resolve route inconsistency in `Footer.jsx`.** Footer links to
   `/product/features/...`, `/platforms/dashboard`, `/privacy`, `/terms` — none of
   which resolve to a component yet. Either build them now or stub them.
6. **Inline-style explosion in `KeyFeaturesSection` and `Teamssection`.** These
   files are >300 lines of JSX with the design baked into `style={{}}` blocks. Refactor
   to use existing CSS classes or Tailwind utilities to keep the design system
   tightly coupled.

### 4.2 Medium Priority

7. **Token drift between Tailwind and CSS.** `tailwind.config.js` defines
   `brand-yellow: '#f5d800'` but the CSS and inline styles use `#f5d000` and `#f5d800`
   interchangeably. Pick one (probably `#f5d000`, the dominant value) and update
   the config.
8. **Tailwind h-scale is largely unused.** `text-h1`…`text-h6` are defined but pages
   override with literal `fontSize: '54px'` etc. Either delete the scale or refactor
   pages to use it.
9. **Two unrelated font systems.** `@fontsource/manrope` is in `package.json`
   but never imported; Google Fonts loads Geist + Faculty Glyphic from a remote stylesheet.
   Pick one delivery method (prefer `@fontsource` for performance / privacy) and remove
   the other.
10. **`Capabilities.jsx` is dead code.** Not imported from any page. Either delete
    or wire it into a relevant route.
11. **`BackedBy.jsx` is commented out in `Home.jsx`.** Decide: ship it or remove it.
12. **`Docs.jsx` ignores the shared `Navbar`/`Footer` shell.** It has its own topbar
    and no marketing footer, so users feel they've left the site. Either keep the
    Docs shell deliberate (Vercel-style) and ensure cross-links back to `/`, or
    reuse the global shell.
13. **Announcement bar copy has a typo / awkward grammar.**
    "Advaita is in active development, final product will be just around." — fix
    to "…final product is right around the corner." or similar.
14. **`Faqsection` defaults open question index = 2.** If a question is removed
    that index silently shifts. Default to `0` or pass via prop.
15. **Geist font CDN fetch on every page load.** Move to self-hosted via `@fontsource/geist`
    to remove a third-party network dependency and improve CLS.

### 4.3 Low Priority / Hygiene

16. **No `eslint --max-warnings 0` in CI.** `npm run lint` exists but is not enforced.
17. **No tests at all.** Webapp-testing skill is installed — see §6.
18. **No `prettier`.** Indentation and quotes vary file to file.
19. **Image sizes.** `public/acai.png` is 446 KB — compress / convert to WebP.
20. **Accessibility.** Decorative icons mostly have `aria-hidden="true"` (good), but:
    - Some interactive `<div onClick=...>` (e.g. `KeyFeaturesSection` selector rows)
      should be `<button>` for keyboard support.
    - Color contrast of `gray-cloud` (#828282) on `soft-gray` is borderline AA.
21. **SEO.** `index.html` has only a `<title>`. Add meta description, OpenGraph,
    Twitter card, and per-route titles (consider `react-helmet-async`).
22. **No JS-side guard against motion-prefers-reduced.** Heavy canvas animations
    in Hero and FinalCta should respect `@media (prefers-reduced-motion: reduce)`.
23. **`React.StrictMode` + `IntersectionObserver`.** Double-effect in dev triggers
    multiple observer attach/detaches. Harmless but worth noting for future hot loops.
24. **Bundle.** No code-splitting per route. With `react-router-dom` v7 and Vite,
    wrap pages in `React.lazy` + `<Suspense>` to keep the home payload light.
25. **`.gitignore` should also ignore `.agents/` if you don't want skills committed
    (your call — committing them locks the team into a curated set; not committing
    keeps the repo lean).

---

## 5. What's Left to Build

You said:

- Landing ✅
- About ✅
- Careers ✅
- Contact ✅
- Pricing ✅
- Auth (external) ✅
- **Product pages** — `/product/teams/{product,growth,data}`,
  `/product/features/{ai-qa, experiment-analysis, root-cause-analysis, kpi-tracking}`,
  `/product/analysis/{web, product, mobile}` — **TO DO**
- **Platform pages** — `/platforms/dashboard`, `/platforms/ai-analysis-agents`,
  `/platforms/data-intelligence` — **TO DO**
- **Documentation** — `/docs` exists but needs MDX-style content, code tabs,
  a real search index, deep-link anchor highlighting and a navigable changelog —
  **TO POLISH**

### 5.1 Suggested Approach for Product / Platform Pages

To stay consistent with the existing system:

1. Build a `src/components/PageShell.jsx` that wraps
   `AnnouncementBar + Navbar + main + Footer` so each new page is a thin sections
   composer (matches `Home/About/Careers/Contact/Pricing`).
2. Reuse the eyebrow + headline-reveal + scroll-reveal pattern from `About`.
3. Reuse `KeyFeaturesSection`'s preview panel (dark card on gradient) as the
   pattern for each feature deep-dive.
4. Reuse `TeamsSection`'s tab pattern for "By Teams" landing pages.
5. Add the missing route declarations in `src/App.jsx`.

### 5.2 Suggested Approach for Documentation Polish

1. Move SDK examples into per-language MDX files under `src/content/docs/` (use
   `vite-plugin-mdx`) so docs are content, not JSX.
2. Add a real search using a lightweight client-side index (e.g. `fuse.js`) over
   the MDX frontmatter — replace the current substring filter.
3. Implement a `useActiveSection` hook that highlights the current item in the
   sidebar + ToC as the user scrolls.
4. Reuse the global `Navbar` / `Footer` for consistent escape paths back to marketing.
5. Add a `Copy` button on every `.docs-code-block`.

---

## 6. Agent Skills Installed (`./.agents/skills/`)

Installed via the `skills.sh` registry (`npx skills add ...`). All five are stored
inside this repo at `.agents/skills/` and are wired for the full set of supported
agents (Codex, Cursor, Antigravity, Gemini CLI, GitHub Copilot, etc.).

| Skill                         | Source repo                  | Use it when…                                                                                  |
| ----------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------- |
| `frontend-design`             | `anthropics/skills`          | Designing a new section or page from scratch; choosing an aesthetic direction; resisting "AI-slop" defaults. |
| `web-design-guidelines`       | `vercel-labs/agent-skills`   | Spacing, typography, color and interaction polish against Vercel's Web Interface Guidelines.  |
| `vercel-react-best-practices` | `vercel-labs/agent-skills`   | Code-level perf: memoization, render boundaries, bundle/code-split decisions.                 |
| `vercel-composition-patterns` | `vercel-labs/agent-skills`   | Refactoring `KeyFeaturesSection`/`Teamssection` into composable primitives (`Card.Root/.Header/.Body`). |
| `webapp-testing`              | `anthropics/skills`          | Adding the first tests — unit, integration, and Playwright/Cypress smoke flows.               |

### 6.1 Updating / Removing

```bash
# update everything to latest
npx skills update -p -y

# list what's installed
npx skills list

# remove one
npx skills remove --skill frontend-design
```

### 6.2 Suggested Workflow

1. When proposing a new section: invoke `frontend-design` first to pick a direction
   that fits the established Advaita language (refined editorial with a single accent
   orange dot), then cross-check against `web-design-guidelines`.
2. After implementation: run `vercel-react-best-practices` over the diff before merge.
3. When you reach for a third inline `style={{}}` block in a row, that's the cue to
   invoke `vercel-composition-patterns` and pull the section into composable
   primitives.
4. Before adding behaviour to a form (Contact, future signup), wrap it with
   `webapp-testing` and write the smoke test alongside the component.

---

## 7. Quick Wins (do these first)

In rough order of effort vs. payoff:

1. Fix the hero typo `Anlaytics → Analytics`.
2. Extract `useReveal` into `src/hooks/useReveal.js`.
3. Add a `PageShell` wrapper + a `NotFound` page; add the route.
4. Replace internal `<a href>` with `<Link>` throughout `Navbar`, `Footer`, page CTAs.
5. Pick `#f5d000` as the canonical brand yellow and update `tailwind.config.js`.
6. Lazy-load page components in `App.jsx` with `React.lazy` + `<Suspense>`.
7. Delete `Capabilities.jsx` (or wire it in) and uncomment / remove `BackedBy`.
8. Add `prefers-reduced-motion` guards to the three canvas animations.

These eight changes are non-design-breaking, take an afternoon, and unblock the
Product/Platform/Docs work on cleaner foundations.
