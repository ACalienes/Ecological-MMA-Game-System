# Pick Up Here — written 2026-06-20 (shutdown)

**Branch state:** `ground-wave-guard-2026-06-06`, committed through `45db7e6`, **3 ahead of origin (NOT pushed).** Holds the 6 guard games (PR #4), the 6/15 top-side grid, AND today's 2026-06-20 build wave. Working tree clean except untracked root strays (`body-lock-check.jpeg`, `mount-maintenance-check.jpeg`, `knowledge-claude-code-audit-2026-04-28.md` — Alex owes keep/toss).

**First decision next session:** push this branch and sort the PR strategy. It has drifted well past PR #4's original scope (6 guard games → +6 grid games → +today's 3 games + 1 refine + concept). Options: push as-is and update PR #4's description, or split. PRs #3 (prescription engine) and #4 (guard games) still await Alex's review.

## Verify state (don't trust claims, run these)

```bash
cd "/Users/alex/Desktop/Code/Ecological MMA System"
git status --short && git log --oneline -5
git status -sb | head -1                             # expect "ahead 3"
uvx --with mkdocs-material --with mkdocs-glightbox mkdocs build --strict   # PASSES as of shutdown (~85s)
python3 scripts/eco-check.py                         # 56/57 (only turtle-breakout perimeter flag, known)
python3 scripts/consistency-check.py                 # clean except home-links (standing known failure)
python3 -c "import json;print(len(json.load(open('docs/assets/data/games.json'))['games']))"   # 57
```

## What's live/done this session (class 2026-06-20 "eco omakase", device + system date 2026-06-20)

Library **54 → 57.** Closed the 3 biggest zero-coverage gaps in one pass. Mining + workshop + eco-audit in `docs/_drafts/class-workshop-2026-06-20.md`.
- **New (WIP, need mat re-run):** `mount-submission-hunt` (first submission-offense game; finish layer of the mount ladder), `fifty-fifty-clinch` (first typed center-clinch game), `kick-defense` (first kick-defense isolation game).
- **Refined (R5 mat re-validation):** `body-lock-to-ground` — defender resets to the 50/50 clinch, wall-proximity start, pummel-incentive note.
- **New concept:** `finishing-sequence` (eco-rewritten doctrine, credits John McCarthy). Bull/Soldier/Matador already in `winning-the-circle`.
- Build review: `explainers/status-review-2026-06-20.html`.

## Candidate next moves

1. **Push + PR strategy** (the gating decision above).
2. **Submission-offense wave** (continues what Mount Submission Hunt started): RNC from back, triangle/armbar from guard, kimura from side/north-south, guillotine/front-headlock. Use the ladder model and the same observable-entry-not-cranked-finish pattern + the `finishing-sequence` concept. **Leglocks need Alex's safety review first.**
3. **Formalize the "shown strike / legitimate threat without violence" rule** — load-bearing in 3+ games; make it a named glossary entry + house rule, plus the finger-curl safety note. Re-express, link everywhere.
4. **Mat-test Game 5 (Wall Dirty-Boxing)** — fills the integration gap (wall control → strike ↔ takedown double threat) but was only coached in sparring; needs a run before building. Spec sketched in the workshop doc.
5. **Bless WIP tags** as games get mat time (Alex's call) — `body-lock-to-ground` is the first candidate (R5 done 6/20).
6. Trivial: fix `turtle-breakout` eco-check E1 (add a live perimeter constraint).

## Standing rules (locked)
- WIP until Alex blesses on the platform; needs R5 (mat) validation.
- Always name the clinch TYPE; 50/50 grips are **diagonally matched**, never "mirror".
- Hand connection counts above the knee (waist or leg above the knee).
- Threshold house rule: no "as long as possible"; observable proof (a 1-2s/3s hold, a count, a concrete event).
- Ground games are GnP-first; GnP/strike realism = real strikes with space, not pitter-patter; "shown strike" = legitimate threat, no damage, arc between strikes, no elbows/knees without pads.
- No em dashes; distilled instructions; visual-first (.emma-* components, never raw text/tables).
- Credit sources (SMGC / Greg Souders et al.); re-express mechanics under our names.
- Merge-not-multiply: ~80% similar → variant block, not a new page (today: body-lock refined, not duplicated).
- Student names stay out of built `docs/` (mining/workshop in `_drafts/` + repo memory only).
- Build + verify empirically + show work (html) BEFORE committing; commit only when asked, push only when asked.

## Post-build checklist (every game add/edit) — DON'T SKIP build-game-index
1. `python3 scripts/build-game-index.py`  (refreshes games.json — easy to forget, caught at 6/20 shutdown)
2. `python3 scripts/eco-check.py`         (expect ~0 new failures; watch false positives like "in the air" tripping E7)
3. `uvx --with mkdocs-material --with mkdocs-glightbox mkdocs build --strict`
4. `python3 scripts/consistency-check.py` (bump counts in system/map.md + games/index.md; add nav in mkdocs.yml; home-links failure is known/standing)
5. Hero: claude.ai Higgsfield `nano_banana_pro`, 16:9, ember-silhouette prompt (near-black fighter silhouettes, warm orange rim light, floating embers, haze on a dark floor). Local `higgsfield` MCP broken ('min' error) — use the claude.ai server. NEW games still need heroes: fifty-fifty-clinch, mount-submission-hunt, kick-defense, finishing-sequence.

## Transcription pipeline (corrected 2026-06-20)
Copy DJI files to local /tmp → concat in order → `ffmpeg -af "loudnorm=I=-16:TP=-1.5:LRA=11,aresample=16000" -ac 1` → **chunk to ≤16 min** (`-f segment -segment_time 1000 -c copy`) → `mlx_whisper chunk_NN.wav --model mlx-community/whisper-large-v3-mlx --condition-on-previous-text False --hallucination-silence-threshold 2 --output-format all` **IN THE FOREGROUND** (background gets killed; big single files OOM silently with exit 0) → `cat chunk_*.txt`. Verify word counts at each step. Audio + transcript gitignored. Full detail in `reference_transcription_pipeline.md`.
