# Codex review: navigation system redesign (2026-07-05)

## System context

This repo is a live mkdocs-material product (deployed to GitHub Pages): a dark, ember-branded MMA training curriculum called the Ecological MMA Games System. The owner is a martial-arts coach, not a developer. The site's content pages use a rich custom component library (`.emma-*` classes in `docs/stylesheets/theme.css`) — hero images, statement bands, chip grids, hover-reveal popovers — in an Oswald-headline / near-black / single-orange-accent visual language (#F94B0C on #0E0F13).

The problem: the navigation (left sidebar + top tabs) was stock mkdocs-material — plain text links that looked like a different product from the branded content. The owner's directive: **"this entire menu system needs to be redone so it's engaging, visually stimulating, and capturing someone's attention during the knowledge transfer."**

A first redesign pass was just made (all uncommitted, visible in `git diff` + the new untracked file). The owner looked at it and said **it still looks bad**. You are the second opinion.

## What the first pass did

1. `docs/stylesheets/theme.css` — a `/* ==== Nav system redesign ==== */` block at the end of the file:
   - Top tabs: uppercase Oswald, animated ember underline on hover/active.
   - Sidebar section labels: numbered "chapter" eyebrows (CSS counters, `01` `02` …) in orange caps with a gradient hairline, desktop-scoped to `min-width: 76.25em`.
   - All nav links: 2px left rail, hover nudge (translateX), active page gets an orange rail + ember gradient wash.
   - Nested lists get a hairline left spine. Slim ember scrollbar.
2. `docs/javascripts/nav-flair.js` (new, untracked) — decorates the sidebar per render:
   - Games marked complete (existing `progress.js` localStorage set `emma-progress-v1`) get a green ✓ tick appended to their nav link.
   - Literal "(WIP)" text in nav titles is replaced with a small amber `WIP` chip.
   - Re-runs on Material's `document$` (instant navigation) and on mark-complete clicks.
3. Registered in `mkdocs.yml` under `extra_javascript`.

Constraints/invariants the redesign must respect:
- Must not break the mobile drawer (same `.md-nav` markup rendered as an off-canvas drill-down below 76.25em).
- Reduced-motion must be honored (there is a `prefers-reduced-motion` block).
- No new external fonts/CDNs. One accent color (the orange family). The site must remain readable and navigable — this is a learning product; nav failure = product failure.
- `mkdocs build --strict` must keep passing (it does).

## Your mandate (hostile)

Assume the redesign is BROKEN and badly designed; your job is to PROVE it. Do not accept author intent or comments as evidence. Read the actual files: the nav block at the end of `docs/stylesheets/theme.css`, all of `docs/javascripts/nav-flair.js`, the `theme`/`extra_javascript` sections of `mkdocs.yml`, and enough of the earlier `theme.css` + `overrides/home.html` to judge brand coherence. Run `git diff` yourself for the exact changes.

Attack on two axes:

**Axis 1 — implementation correctness.** CSS specificity/cascade traps against mkdocs-material's own styles (Material 9.7.x), the desktop media-query scoping vs the drawer, `!important` usage, the CSS-counter numbering behavior across nested `.md-nav__item--section` depths (does flat tree-order numbering produce nonsense like a section numbered `01` on one tab and `04` on another? does `navigation.instant` re-render break counters or duplicate JS decorations?), nav-flair.js mutation safety (text-node replacement on `.md-ellipsis`, idempotency across `document$` re-runs, the `storage` event only firing cross-tab, memory/duplicate-listener accumulation since the IIFE re-subscribes handlers on every page event?), and accessibility (contrast of the muted states, focus visibility, aria implications of injected spans inside links).

**Axis 2 — design quality.** The owner says it still looks bad. Judge it as a demanding design director would: is this actually "engaging and visually stimulating," or is it timid decoration of a stock sidebar? Compare against the quality bar of the site's own content components (read a game page like `docs/games/mount-escape.md` + the `.emma-*` styles to see the bar). Then give CONCRETE, implementable design direction: specific visual moves (with CSS-level specifics: what elements, what treatments, rough values) that would make this menu system feel like part of the product and worth looking at during learning. Think: what would make a student *want* to open the menu? Prioritize the 3-5 highest-impact moves; note anything that requires restructuring beyond CSS (partial overrides, different nav paradigm) as such.

Be specific with file + line/hunk for every implementation finding.

END WITH: "VERDICT: READY" or "VERDICT: REVISE" + a numbered must-fix list (implementation bugs) followed by a numbered design-direction list (ranked by impact).
