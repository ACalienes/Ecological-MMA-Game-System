# Pick Up Here — written 2026-06-14 (shutdown)

**Branch state:** `ground-wave-guard-2026-06-06`, committed through `13b847c`, **1 ahead of origin (NOT pushed).** This branch now holds the 6 guard games (PR #4) AND this session's 6 new games. Working tree clean except `knowledge-claude-code-audit-2026-04-28.md` (untracked root stray, Alex owes keep/toss).

**First decision next session:** push this branch and sort the PR strategy. It has drifted well past what PR #4 originally was (6 guard games → +6 more games + class integration). Options: push as-is and update PR #4's description, or split. Open PRs #3 (prescription engine) and #4 (guard games) still await Alex's review.

## Verify state (don't trust claims, run these)

```bash
cd "/Users/alex/Desktop/Code/Ecological MMA System"
git status --short && git log --oneline -5
git status -sb | head -1                             # expect "ahead 1"
uvx --with mkdocs-material mkdocs build --strict     # PASSES as of shutdown
python3 scripts/eco-check.py                         # 53/54 (only turtle-breakout perimeter flag, known/intentional)
python3 scripts/consistency-check.py                 # clean except home-links (standing known failure)
python3 -c "import json;print(len(json.load(open('docs/assets/data/games.json'))['games']))"   # 54
```

## What's live/done this session (class 2026-06-15, device-stamped; system date 2026-06-14)

Library **48 → 54.** Class mined + integrated, then the top-side control grid completed.
- Class-validated (wip, but mat-tested): `mount-maintenance`, `body-lock-to-ground`.
- Built from spec (wip): `side-control-ride`, `back-maintenance`, `knee-on-belly-control`, `north-south-control`.
- Enriched: `concepts/winning-the-circle` (bull/matador/soldier), `games/pressure-to-clinch` (Lead-Leg Barrier variant + feint cue).
- Mining report `docs/_drafts/class-mining-2026-06-15.md`; visual `explainers/class-2026-06-15-breakdown.html`.
- The dominant-position grid is COMPLETE: mount / side / back / knee-on-belly / north-south each have an escape AND a maintenance game.

## Candidate next moves

1. **Push + PR strategy** (the gating decision above).
2. **Submission-offense wave** (ground-wave spec sub-wave E): armbar (from mount), RNC (from back), triangle (from guard), kimura (from side/NS), guillotine/front-headlock. Builds directly on the maintenance grid just shipped. Use the ladder model (cause → punish → isolate → maintain → finish). **Leglocks (E6) need Alex's safety review before building.**
3. **Escape-side hand-fight content** (small): the cigar-cutter / hip-blade / turn-and-face sequence into `back-escape` + turtle pages (open thread from the 6/15 class).
4. **Bless WIP tags** off the games as they get mat time (Alex's call).

## Standing rules (locked)
- WIP until Alex blesses on the platform; needs R5 (mat) validation.
- Threshold house rule: 20s clock + control proven by a 3s hold; observable non-stall win for the dominant player.
- Ground games are GnP-first (smashing, not jiu-jitsu); GnP realism = real strikes with space, not pitter-patter; GnP dial-up by coach permission.
- Hand connection counts above the knee.
- No em dashes; distilled instructions; visual-first (.emma-* components, never raw text/tables).
- Credit sources (SMGC / Greg Souders et al. on the Sources page); re-express mechanics under our names.
- Merge-not-multiply: ~80% similar → variant block, not a new page.
- Student names stay out of built `docs/` (mining reports in `_drafts/` + repo memory only).

## Post-build checklist (every game add/edit)
1. `python3 scripts/build-game-index.py`  (refreshes games.json)
2. `python3 scripts/eco-check.py`         (expect ~0 new failures)
3. `uvx --with mkdocs-material mkdocs build --strict`
4. `python3 scripts/consistency-check.py` (bump counts in system/map.md + games/index.md; add nav in mkdocs.yml; home-links failure is known/standing)
5. Hero: claude.ai Higgsfield `nano_banana_pro`, 16:9, ember-silhouette prompt (near-black fighter silhouettes, warm orange rim light, floating embers, haze on a dark floor). Local `higgsfield` MCP broken ('min' error) — use the claude.ai server.

## Transcription pipeline (worked this session)
concat DJI files in order → `ffmpeg -af "loudnorm=I=-16:TP=-1.5:LRA=11,aresample=16000" -ac 1` → `mlx_whisper FILE --model mlx-community/whisper-large-v3-mlx --condition-on-previous-text False --hallucination-silence-threshold 2 --output-format all` → clean TSV (dedupe + drop Okay./You. spam). Audio + transcript gitignored.
