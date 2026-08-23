# NEXT SESSION — pick up here (last touched 2026-08-23)

**Branch:** `main`, clean and in sync with origin. **Deployed and current**: gh-pages `6bac4fa` publishes main `cbb1e29`, verified live with 200s on every new page. Library is **64 games** (36 live playable, 28 wip/format) plus 13 concepts.

> The previous version of this file (from 2026-07-19) claimed nothing was deployed and the site showed 57 games. That was stale by more than a month. Check the machine, not this file: `git log -1 --format='%ci %s' origin/gh-pages`.

## What happened 2026-08-23

Pulled Friday 2026-08-21's class off the DJI mic, mined it, and shipped the whole wave same day.

- **Audio:** 2 files, 60:44 unbroken, md5-verified off the card. **The mic clock runs exactly 12 hours fast**, so filenames read `20260822_0614` for a Friday 18:14 class. Local only, `audio-ingest/` is gitignored.
- **Mining report:** `docs/_drafts/class-mining-2026-08-21.md`. Alex answered all 8 open questions.
- **Built:** `closing-the-distance.md`, `clinch-holder.md`, `concepts/three-points-of-pressure.md`, 3 ember heroes, 50/50 Clinch reworked, neck safety rule on all 8 wall pages, counts 62 → 64.
- **Fixed:** the `.venv` was broken by the iCloud → Code move (shebang pointed at the dead Desktop path). Rebuilt on python 3.14 with the same pins: mkdocs 1.6.1, mkdocs-material 9.7.6, mkdocs-material-extensions 1.3.1, pymdown-extensions 10.21.3, ghp-import 2.1.0.

## First moves (in order)

1. **Pull the 43 old mic recordings.** Alex authorised this and it is the one thing left undone. **The mic must be physically replugged** — it auto-powers-down in USB storage mode and dropped off twice. Note: `~/Code/ACD/scripts/ops/dji_mic_offload.py` will NOT detect this unit, it looks for `TX_MIC<digits>_<date>` session folders and this older mic writes `DJI_Audio_001/DJI_nn_*.WAV`. Use a manual `rsync -a --partial --inplace` plus md5, the way the 8/21 files were pulled. `cp` fails on this card with `fcopyfile: Invalid argument` (FAT32 to APFS clone path). Two July sessions on there (7/27, 7/29) are not in this repo.
2. **Blessing pass on the two new games** once Alex has run them. Both are WIP by design. The open ruling to watch on the mat: **does the redirect win generalise** beyond Closing the Distance, or stay specific to the weapon-poor closer. Deliberately not backported.
3. **Watch whether Closer/Spacer and Holder/Escaper actually fix the confusion.** Applied to the new pages only, per Alex. If one class runs clean, consider backporting across the clinch family.

## Standing rules (unchanged unless noted)

- **games.json is generated**: `python3 scripts/build-game-index.py` after any frontmatter change. Counts live in `map.md`, `games/index.md`, `reference/prerequisites.md` and **`overrides/home.html`**. Note: `consistency-check.py` does NOT check `overrides/home.html`, which had silently drifted to 60. Update it by hand.
- **Same structure + different goals = different games** (sibling pages, cross-linked), not levels.
- **Anti-stall is now expressed through the win condition** ("a connection you do not use is not a win"), not as a bolted-on strike tax. Alex, 2026-08-23.
- Class-derived edits get the `class-derived` tag; new games stay WIP until Alex blesses.
- **No em dashes anywhere**, page copy and internal drafts alike.
- Transcription: rsync WAVs off the stick first → concat + loudnorm + 16k mono → ≤16 min chunks → `mlx_whisper` large-v3 **foreground**, game vocab in `--initial-prompt`.
- Deploy every session: `./.venv/bin/mkdocs gh-deploy`. Live: https://acalienes.github.io/Ecological-MMA-Game-System/

## Verify state (run these)

```bash
cd "/Users/alex/Code/Ecological MMA System"
git status -sb | head -3
./.venv/bin/mkdocs build --strict --site-dir /tmp/x   # must pass, exit 0
python3 scripts/consistency-check.py                   # 64 games, only the known informational warning
python3 scripts/eco-check.py | tail -3                 # 64/64 clean
```

## Parked / open

- 28 wip/format pages awaiting Alex's blessing pass.
- North-south: placeholder concept per Alex (2026-07-05), 3 framings drafted, do not build.
- `docs/_drafts/` staleness: coverage-map (5/26) and gaps-atlas (5/31) predate the 64-game library.
- Nav v2 and the UX A/B/C direction picks from 2026-07-05 were never resolved; `explainers/status-review-2026-07-05-ux.html` has the cards.
- Kai (Alex's EA session) now runs a fleet digest and has this repo logged. Confirmed no overlap with Octagon Edge or the Combat Night P4P system.
