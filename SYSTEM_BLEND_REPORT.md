# System Blend Report — Ecological Psychology → Existing Knowledge Docs

**Date:** 2026-05-25
**Editor:** Knowledge-systems editor
**Source theory:** Blau & Wagman (2022), *Introduction to Ecological Psychology*, via `ECOLOGICAL_PSYCHOLOGY_AUDIT.md` (§2 Implementation Mapping, §3 Validation & Corrections).
**Scope:** Surgical, additive edits weaving the ecological-psychology findings into the existing `docs/principles/cla/*` and `LANGUAGE.md`. All edits preserve existing structure/content and add printed-page citations. Cross-links to `../ecological-psychology/index.md` are intentional (that section is being built in parallel; its "link not found" warnings are expected).

**Untouched per instructions:** `docs/games/*`, `docs/principles/ecological-psychology/*`, `mkdocs.yml`, `docs/stylesheets/theme.css`. No git operations performed.

---

## Part A — Changes Made

### `docs/principles/cla/key-concepts.md`
1. **Named the specific invariants** (audit §3.2; p. 82, 123–127, 165–166). Added a new sub-block "The Specific Invariants" under *Information Sources in Combat Sports*: a table naming **τ (time-to-contact)**, **global optic flow**, and the **inertial array / resistance-to-rotation** (inertia tensor) with MMA mappings, plus a coaching consequence that "reading" means attuning to a named invariant. The existing modality table is preserved above it.
2. **Completed the self-organization definition** (audit §3.2; p. 270–272). Added the four load-bearing requirements after the existing one-line definition: not other-organized; minimally-intelligent components; local rules + constant mutual interaction; emergence at a larger scale — with the MMA mapping (synergies/dyad = components, constraints = local rules, fighting style = emergent pattern). Existing definition and biological examples preserved.
3. **Cross-linked degeneracy ↔ multirealizability** (audit §2.9, §3.1; p. 274). Added an admonition in the *Degeneracy* section equating it to the book's multirealizability (same parts → many goals; many solutions → one goal).

### `docs/principles/cla/pitfalls.md`
- **Pitfall 5 ("Ignoring Individual Differences") — added the *how*** (audit §3.2; Warren, p. 79–81). The Solution now specifies **scaling by critical π ratios** (reach / leg length / shoulder width), including Warren's stair result (critical π ≈0.88), the gap/aperture/reach analogues, and the worked 5'5" wrestler vs. 6'2" kickboxer example (defining "close range" as a ratio of arm length). Added "set constraints as critical ratios" to the Considerations list.

### `docs/principles/cla/environment-design.md`
1. **Outlet analogy for Constrain-to-Afford** (audit §2.7, §3.1; p. 271). Added a tip admonition under Principle 2's three-step process: "outlets every 12 feet" (afford, many solutions) vs. "outlet exactly here" (prescribe, one solution), mapped to "points for staying standing" vs. "you must sprawl."
2. **Strengthened the variability principle** (audit §2.6; p. 169–170). Added an example admonition under Principle 4 / Repetition Without Repetition citing the infant-walking robot tournament (variable-trained robots beat regular-trained **2,888–75** over 4,000 games).

### `docs/principles/cla/theory.md`
1. **Reframed the Nonlinearity row** in the Core Principles table as a **control-parameter-driven phase transition past a critical value** (HKB, p. 250) — replacing vague "small changes / large effects" language (audit §3.4).
2. **Added a "Dynamical-systems precision" sub-section** under Kelso (audit §2.8, §3.2/§3.3; p. 234–242, 241, 250): skill as an **attractor layout** the coach reshapes; **learning = birth of an attractor** vs **adaptation = movement of an attractor**; **control parameter vs order parameter**; and the falsifiable reframing of "minor rule changes revolutionize styles." Existing Kelso core-ideas list preserved.

### `docs/principles/cla/session-design.md`
1. **Named the two dials as control parameters** (audit §2.8; p. 250) — admonition after "The Two Dials," noting nonlinear switches past critical values.
2. **Grounded the amber zone as functional noise + noted hysteresis** (audit §2.8; p. 242–243, 250) — admonition in Session Flow Pattern: noise lets the system escape shallow attractors (added-noise discovery finding); GREEN→AMBER→GREEN respects path-dependence/hysteresis.
3. **Adopted learning-vs-adaptation language in periodization** (audit §2.8, §3.3; p. 241) — added an "Attractor operation" column to the periodization table (off-season = learning/birth; fight camp = adaptation/movement) plus an explanatory note reserving the terms.

### `docs/principles/cla/implementation.md`
1. **House-building quote as one-line philosophy** (audit §2.9; p. 284) — quote admonition under *The Coach as Environment Architect*.
2. **Tied feedback to calibration** (audit §2.10; p. 206) — note admonition after the feedback-types table: KR/KP and fading feedback tune calibration (the information→action mapping), which is mode-specific.
3. **Grounded Transfer Assessment in non-transfer-across-action-modes** (audit §2.10, §3.2; p. 160, 206) — warning admonition (crawling↛walking, walking-calibration↛throwing; τ-for-striking ≠ τ-for-takedowns; build per-mode paths; phase-scaffolding rationale) plus a 5th assessment step ("Test across action modes").

### `docs/principles/cla/mma-applications.md`
- **Added a new section "Perceiving Affordances for the Opponent"** (audit §2.11, §3.2; p. 172–191) after *Combat Sports Dyadic Systems*, built with the visual components (`emma-glabel`, `emma-cards`, `emma-flow`, `emma-hl`, admonition) as in `docs/games/tight-block.md`. Covers: perceive affordances for self AND opponent (p. 175); **two preferred interpersonal distances** + dead middle, experts spend more time in offensive range (kendo, p. 188–189); reading movement that **shares force dynamics** with the threat (p. 180–181); **social synergies / breaking rhythm** (p. 186–188); and a "no mirror neurons" note (Box 11.1, p. 177–178). Grounds `LANGUAGE.md`'s *distance management* and *pace* in primary theory.

### `LANGUAGE.md`
1. **Added a sixth narration input** (audit §3.3, Rule 20; p. 82, 123–127, 165–166, 188–189) — "the information the athlete must attune to" (τ / optic flow / inertial array / preferred distance). Heading updated "Five things" → "Six things."
2. **Added a vocabulary-discipline rule** (audit §3.3; p. 241) — new Rule 5 reserving **"learning"** for new-attractor acquisition and **"adaptation"** for moving an existing attractor.

---

## Part B — Places We Still Need to Change (flagged for Manager / Alex)

These are the larger items requiring new content, rework, or Alex's domain input. They are beyond surgical doc-blending and should be scheduled deliberately.

### B1. Set actual body-scaling ratios per game *(needs Alex's domain input + game-file edits — owned elsewhere)*
`pitfalls.md` now says *how* to individualize (critical π ratios), but **no game currently defines its distances/heights/apertures as ratios.** Action: for each game in `docs/games/*` (e.g., Tight Block's "close range," The Square's dimensions), Alex should specify the constraint as a ratio of reach / leg length / shoulder width and pick the target critical value. Requires editing game files (DO NOT TOUCH zone for this agent) and Alex's empirical judgment on the right ratios for MMA ranges.

### B2. Build separate per-action-mode learning paths *(structural / new content)*
The non-transfer finding (now in `implementation.md`) implies our library **cannot assume a skill transfers from striking to clinch to takedown.** We currently have no explicit per-mode learning-path artifact. Action: design distinct attention-education paths for reading τ in (a) striking defense, (b) takedown defense, (c) clinch/grip work — and a protocol to *verify* transfer empirically rather than assume it. The Square's phase scaffold is the right shape but should be formalized as a documented per-mode path, not an implicit one.

### B3. Add distance-management games built on two ranges + dead middle *(new games — owned elsewhere)*
The kendo two-preferred-distances finding is now in `mma-applications.md` but **no game instantiates it.** Action: create distance-management game(s) rewarding living in the advantageous (near = offense / far = defense) range and penalizing dwelling in the dead middle, with "more time in offensive range" as a progression marker. New files in `docs/games/*` (outside this agent's scope).

### B4. Rework scoring to reward *taken affordances*, not isolated cues *(rework across games + scoring docs)*
Audit Rule 5 (p. 77, 87–88): score the *realized opportunity* (clean counter, completed off-balance), not single properties ("hands dropped = strike"). Action: review every game's win/scoring conditions for any that score isolated cues and rewrite them to reward the taken affordance. Also extend opponent-reading win conditions (reward recognizing what the *opponent's* position affords *them*). Touches game files and any scoring rubric.

### B5. Have the game template name the invariant per game *(template change — likely owned elsewhere)*
`LANGUAGE.md` now requires a sixth narration input (the invariant the athlete attunes to), but the **game page template / capture form does not yet have a field for it.** Action: add an explicit "Information to attune to (τ / optic flow / inertial array / preferred distance)" field to the game template so every new game names its invariant. Then backfill existing games (e.g., Tight Block's "see center mass" → name it as attuning to the opponent's shoulder/hip motion and closing τ).

### B6. Reconcile any game whose rules *prescribe* rather than *afford* *(audit pass across games)*
Apply the outlet test (now in `environment-design.md`) to every game. Action: scan `docs/games/*` for rules that force one solution ("outlet exactly here") and rewrite them as emergent constraints ("outlets every 12 feet"). Tight Block and The Square are noted in the audit as faithful; others should be verified.

### B7. Define order parameters (what we measure) per game *(measurement design)*
`theory.md`/`session-design.md` now name control vs order parameters, but games don't yet state **what is measured** to read the attractor layout. Action: for coordination/timing games, define the order-parameter proxy we track (e.g., did the read happen on the named invariant, did the synergy hold, did the transition occur, time spent in offensive range). This makes "reshaping the layout" assessable.

### B8. Add a dedicated haptics/dynamic-touch treatment for grappling *(new content)*
The audit (§2.12, Ch. 8) grounds all clinch/grappling games in the inertia tensor. `key-concepts.md` now names the inertial array, but there is **no dedicated grappling-perception section** explaining off-balancing as perceiving-and-exploiting felt resistance-to-rotation. Action: add a focused treatment (likely in `mma-applications.md` or the ecological-psychology section) and tie clinch game win conditions to "perceive and exploit the felt information," not technique execution.

---

## Verification

Built with `uvx --with mkdocs-material mkdocs build -d /tmp/eco-blend`. The only broken-link warnings are the expected `../ecological-psychology/index.md` references (that section is being built in parallel). No *new* broken links were introduced by these edits. See the build summary in the handoff message.
