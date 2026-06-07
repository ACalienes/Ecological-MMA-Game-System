# Pick Up Here — written 2026-06-06 (shutdown)

**Branch:** `library-expansion-2026-05-30` (PR #2 exists from earlier work). **All of 2026-06-06's work is UNCOMMITTED**, sitting in the working tree alongside prior staging (drafts, audit console assets, .claude/). Alex deferred the commit decision at shutdown.

## Verify state (don't trust claims, run these)

```bash
git status --short                     # ~14 modified + new turtle-breakout/win-ladder/heroes/drafts/explainer
uvx --with mkdocs-material mkdocs build --strict   # PASSES as of shutdown
python3 scripts/consistency-check.py   # ONE failure left, pre-existing: home index.md doesn't link all 42 games
```

## What shipped today (2026-06-06, all from class audio mining)

- `docs/games/turtle-breakout.md` [WIP] + hero — Alex original #3. No-supine rule LOCKED (back to mat = loss). Connection = above the knee.
- `docs/games/win-ladder.md` [WIP] + hero — FORMAT overlay (Alex's call), win demotes next start a rung; wall single-leg worked example.
- `pressure-to-wall.md` — Stalk and Corral [WIP] variant block (v1→v3 class iterations as dials).
- GnP dial-up chip in all 6 strikes-on ground games; 30-second game plan ritual in `principles/cla/session-design.md`; Leo credited on `sources.md`; **Hand Connection** glossary entry (above the knee); counts fixed to 42.
- Mining report `docs/_drafts/class-mining-2026-06-06.md` (all 6 follow-ups resolved) + explainer `explainers/class-2026-06-06-car-and-class.html`.

## Candidate next moves

1. **Commit the working tree** (Alex hasn't decided; the diff is clean and strict-build green). Suggest splitting: class-mining wave (games/format/heroes/drafts/explainer) vs audit-console leftovers vs .claude/.
2. **Profile→prescription engine** (car-audio idea, strongest commercial thread): the tagged library + an intake form = v1. Pairs with `PRODUCT_STRATEGY.md`. Needs Alex's go.
3. **Outstanding Alex decisions from 2026-05-31**: A/B/C structure, 2 platform reviews, "every-exchange-is-result" concept; SMGC ground escapes still pending R5 (needs a grappling-heavy class recording).

## Parked / standing

- WIP tags (turtle-breakout, win-ladder, stalk-and-corral, the-square, one-shot-discovery, ground-and-pound-defense) come off only when Alex blesses on the platform.
- Consistency-check home-links failure: needs a script exception or a home redesign call from Alex.
- Local `higgsfield` MCP `get_generation_status` is broken ('min' error); generate heroes via the claude.ai Higgsfield server (nano_banana_pro, ember-silhouette house prompt).
- Student profiles (names) stay in `audio-ingest/` and the explainer only, never in `docs/`.
- Standing rules: visual-is-king (.emma-* components), distilled instruction copy, no em dashes in product copy, credit sources, audit external games, threshold house rule, GnP-first ground games, hand connection = above the knee.
