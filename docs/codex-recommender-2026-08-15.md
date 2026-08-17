# Codex review prompt: Get Your Game Plan recommender (2026-08-15)

Assume the code is BROKEN. Your job is to PROVE it. Do NOT accept author intent,
code comments, or "we handled that" as evidence. Default to REVISE if anything is
uncertain or unverified.

## System context

A curriculum product about to go to market as paid tiered-freemium. It publishes
62 training "games" as a MkDocs static site. The core paid feature is
**"Get Your Game Plan"**: a user answers an intake and gets back an ordered
training plan.

Files, all in this repo, read them in full rather than trusting this summary:

- `docs/javascripts/your-plan.js` (452 lines) — the recommender. Intake state
  machine, filtering, ordering, rendering.
- `docs/assets/data/games.json` — its only data source, 62 entries.
- `scripts/build-game-index.py` — generates that JSON by parsing YAML frontmatter
  out of `docs/games/*.md`.

Measured facts about the real data (verify them yourself, do not take my word):
62 games, 37 `status: live` and 25 `wip`. 69 prerequisite edges across 52 games,
no cycles, 10 roots. 174 distinct tags over 565 uses, 90 used exactly once, no
validation of the tag vocabulary anywhere. Equipment vocabulary is 6 values in
the built JSON, but source frontmatter is 48 scalar-form and 14 list-form.

## Invariants that must hold

1. **A plan is never confidently wrong.** If the intake cannot be satisfied, the
   user must get an honest empty state explaining why, never a plausible-looking
   plan built from the wrong pool. Silently-bad output is worse than a crash here.
2. **The difficulty ceiling is absolute.** A beginner, or a coach who declared a
   beginners class, must NEVER be handed advanced content. Thin content means
   fewer items, never harder ones.
3. **Order respects prerequisites.** A game must never be listed before a game it
   depends on, in any phase of the emitted plan.
4. **Only field-tested content is recommended.** `wip` games and format overlays
   must not appear in a plan, though they remain browsable elsewhere on the site.
5. **The data contract is honest.** What the build script publishes must reflect
   what the author actually declared, not a value inferred from a soft field.

## What to attack, in priority order

1. **Intake edge cases that produce a wrong-but-confident plan.** No equipment
   selected. An experience level with no matching content. A goal or theme with
   thin or zero coverage. Specifically attack the two fallback relaxations:
   `buildFighterPlan`'s "easiest tier" widening (~line 203) and
   `buildCoachPlan`'s "relax the floor but never the cap" (~line 261). Can either
   breach invariant 1 or 2? Can the fighter path emit a plan whose prerequisites
   are unmet because the `extra` pass only admits beginner-rank prereqs?

2. **Ordering correctness.** `topoSort` (~line 173) sorts by difficulty then
   visits prerequisites depth-first, but only recurses into prereqs already in
   the pool. Can the emitted order ever place a game before its own prerequisite,
   including across the `start` / `build` / `integrate` phase split, which slices
   the sorted list into three buckets by difficulty and focus? Note the phases are
   also truncated (`.slice(0, 3)`, `.slice(0, 4)`) — can truncation drop a
   prerequisite while keeping its dependent? Is `topoSort` cycle-safe if a cycle
   is ever introduced, given nothing in the pipeline forbids one?

3. **A data-contract bug, assess the full blast radius.** `build-game-index.py`
   computes `"is_format": "format" in tags_lc`, deriving a type-level distinction
   from a free-text tag inside the unvalidated 174-term vocabulary.
   `your-plan.js` `playable()` requires `!g.is_format`, and
   `build-game-index.py:209` excludes formats from the published "live" count.
   Confirm or refute: tagging any game "format" silently removes it from every
   recommendation and changes counts shown on the site. Is that the whole blast
   radius, or does it reach further?

4. **Anything else that makes the recommender emit output a domain expert would
   call wrong.** Including state persistence (`localStorage`, `sanitizeState`),
   stale or hand-edited state, and any assumption about `games.json` that the
   generator does not actually guarantee.

## Out of scope

There is no auth, paywall, billing or checkout in this repo. Do not review for
them. Do not design new features. Visual and copy issues are not interesting
here unless they cause a user to act on wrong information.

One further note, for impact assessment only, do not design it: 61 of 62 pages
carry a hand-authored "Levels" progression stepper that the build script never
extracts, so the recommender cannot express "start this game at level 2". Flag
anything in the current data shape that would make extracting it unsafe.

## Required output

Be specific: file, function, line, and the concrete input that triggers the bug.
For each finding state the user-visible consequence, not just the defect.

END WITH: "VERDICT: READY" or "VERDICT: REVISE" followed by a numbered must-fix
list, ordered by severity.
