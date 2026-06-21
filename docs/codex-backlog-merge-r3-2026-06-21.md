# Codex review R2 — backlog merge to main + live deploy (2026-06-21)

## System context
Paid MMA curriculum product, static site on MkDocs Material. We are about to merge
branch `ground-wave-guard-2026-06-06` into `main` and deploy it live for an outside
focus-group tester. The one interactive feature is the prescription engine
("Get Your Game Plan"): intake form `docs/your-plan.md` + `docs/javascripts/your-plan.js`,
which reads `docs/assets/data/games.json` (built by `scripts/build-game-index.py` from
each game page's frontmatter). Helper scripts in `scripts/` run by hand.

## Invariants (must hold)
1. `mkdocs build --strict` stays green; every internal link/image resolves (no 404 for a
   tester clicking around); nav points only at real files.
2. The prescription engine is fail-safe: corrupted/empty/unknown input (including hand-edited
   localStorage `emma-plan-v1`) must never blank the page, throw uncaught, or render a broken
   image; valid answers that match no games must show a helpful state, not an empty plan.
3. Work-in-progress games must never be recommended.
4. `build-game-index.py` must never leave a partial/corrupt index; equipment tokens must match
   the gear sets the engine understands, or the game silently vanishes from plans.
5. No embarrassment for a paying tester: broken links/images, placeholder text, dead buttons,
   console errors on load.

## Your task
Assume this change is BROKEN and your job is to PROVE it. Do NOT accept author intent or
comments as evidence — verify against the actual files. Run your own `git diff main...HEAD`,
read the full files, trace the engine's data flow and the link/image graph yourself.

Attack, specifically: (1) build/nav/link/image breakage on merge, (2) correctness and
fail-safe bugs in `your-plan.js` (state handling, filtering, rendering, empty states),
(3) `build-game-index.py` correctness (status derivation, equipment normalization, atomic
write/validation), (4) mkdocs.yml config risk, (5) anything a tester would hit that embarrasses us.

Be specific: file + hunk + why it fails. Default to REVISE if anything is uncertain or unverified.

END WITH EXACTLY ONE LINE: `VERDICT: READY` or `VERDICT: REVISE`, then a numbered must-fix list.
