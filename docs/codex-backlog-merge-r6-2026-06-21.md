# Codex review R5 — backlog merge to main + live deploy (2026-06-21)

## System context
Paid MMA curriculum product, static site on MkDocs Material. About to merge branch
`ground-wave-guard-2026-06-06` into `main` and deploy live for an outside focus-group
tester. The one interactive feature is the prescription engine ("Get Your Game Plan"):
`docs/your-plan.md` + `docs/javascripts/your-plan.js`, reading `docs/assets/data/games.json`
(built by `scripts/build-game-index.py` from each game page's frontmatter). Helper scripts
in `scripts/` run by hand.

## Invariants (must hold)
1. `mkdocs build --strict` stays green; every internal link/image resolves; nav points only
   at real files. (Verified locally: strict exit 0; built-site link check 15,784 links, 0 broken.)
2. The prescription engine is fail-safe: corrupted/empty/unknown input (including hand-edited
   localStorage and a malformed index) never blanks the page, throws, or shows a broken image;
   valid answers that match nothing show accurate, gear-correct guidance, not an empty plan.
3. WIP games are never recommended; plans never exceed the chosen level (a beginners class gets
   no advanced games).
4. `build-game-index.py` never leaves a partial/corrupt index; taxonomy + equipment tokens are
   validated against what the engine understands.
5. No embarrassment for a paying tester: broken links/images, stale counts, placeholder text,
   dead buttons, console errors, profanity.

## Known / accepted (do NOT re-report as new)
- `docs/system/map.md` "System Statistics" is a bespoke 6-category partition summing to the old
  33-game total. Refreshing it needs the owner's category taxonomy and is deliberately deferred
  to him; `consistency-check.py` already flags it. Out of scope for this pass.

## Your task
Assume this change is BROKEN and your job is to PROVE it. Do NOT accept author intent or comments
as evidence — verify against the actual files. Run your own `git diff main...HEAD`, read the full
files, trace the engine's data flow and the link/image graph yourself.

Attack: (1) build/nav/link/image breakage on merge, (2) correctness and fail-safe bugs in
`your-plan.js` (state, filtering, level caps, empty states, rendering), (3) `build-game-index.py`
correctness, (4) mkdocs.yml config, (5) anything a paying tester would hit that embarrasses us.

Be specific: file + hunk + why it fails. Default to REVISE if anything is uncertain or unverified.

END WITH EXACTLY ONE LINE: `VERDICT: READY` or `VERDICT: REVISE`, then a numbered must-fix list.
