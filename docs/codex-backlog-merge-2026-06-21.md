# Codex review — backlog merge to main + live deploy (2026-06-21)

## System context
This repo is a **paid, tiered-freemium MMA curriculum product** built as a static site with **MkDocs Material**. Content = markdown game pages under `docs/games/`, `docs/concepts/`, `docs/principles/`. There is one interactive feature: a **prescription engine** ("Get Your Game Plan") — an intake form (`docs/your-plan.md` / HTML + `docs/javascripts/your-plan.js`) that takes fighter/coach input and recommends games. Helper python scripts in `scripts/` (`eco-check.py`, `consistency-check.py`, `build-game-index.py`) do QA/index generation and are run by hand, not in a build pipeline.

We are about to **merge branch `ground-wave-guard-2026-06-06` into `main` and deploy it live (mkdocs gh-deploy)** for an outside martial-artist focus-group tester. The live site has been frozen since January; this merge ships ~3 weeks of work (library 42→57 games + the prescription engine + QA scripts + nav changes).

## Invariants (what must hold)
1. **The build must never break.** `mkdocs build --strict` must stay green; nav entries in `mkdocs.yml` must point to files that exist; no internal link may 404 for a tester clicking around.
2. **The prescription engine must be fail-safe.** Bad/empty/unexpected user input must never blank the page or throw an uncaught error. Every recommended game it points to must exist as a page.
3. **Python scripts must not corrupt content** — if `build-game-index.py` writes an index/nav, a bad input must not silently produce a broken or empty index.
4. **No embarrassment in front of a paying tester:** broken links, placeholder/TODO text shipped as real content, dead form buttons, console errors on load.

## Your task
Assume this change is BROKEN and your job is to PROVE it. Do NOT accept author intent, comments, or "strict build passes" as proof of correctness — verify against the actual files. Run your own `git diff main...HEAD`, read the full files, trace the prescription-engine JS data flow and the nav/link graph.

Find: (1) anything that breaks the build or nav on merge, (2) correctness bugs in the prescription-engine JS and the python scripts, (3) mkdocs.yml config risks, (4) anything a focus-group tester would hit that embarrasses us.

Be specific: file + hunk + why it fails. Default to REVISE if anything is uncertain or unverified.

END YOUR REVIEW WITH EXACTLY ONE LINE: `VERDICT: READY` or `VERDICT: REVISE`, followed by a numbered must-fix list.
