# NEXT SESSION — pick up here (last touched 2026-07-19)

**Branch:** `main`, in sync with origin BUT ~38 files uncommitted/untracked (the entire 2026-07-05 session: 2 new games, library 57→59, UX wave 1, Codex-reviewed nav v2, sources page). **Nothing deployed — the live site still shows 57 games.** Full log: `memory/session-2026-07-05.md`. **Unrelated to this note, 2026-07-19 added one new untracked file, `docs/_drafts/class-mining-2026-07-19.md`** (a staged mining report from today's class audio, 7 open questions for Alex, no library edits made yet — full log: `memory/session-2026-07-19.md`).

## First moves (in order)

0. **New:** get Alex's read on `docs/_drafts/class-mining-2026-07-19.md` (7 open questions: kick-catch-and-dump win condition, back-control submission-menu restriction, an escape/"demotion" ruling that isn't written down anywhere, whether a standing no-grip back-take game is a new sibling or a Turtle Breakout variant, two coaching-cue backport candidates, a rules-glossary check). Build whichever enrichments he blesses; this is independent of the nav v2 item below and much smaller.

1. **Get Alex's verdict on nav v2.** He asked "did you actually implement the changes?" at session end — likely a stale browser tab or he was looking at the deployed site (which has none of this). Have him hard-refresh `127.0.0.1:8800` (start server: `./.venv/bin/mkdocs serve -a 127.0.0.1:8800`) and look at any game page: band cards w/ ghost numerals, live progress counts, sticky YOU-ARE-HERE panel. If still not good enough → escalate to the Pitch Deck Engine art-direction queue (`docs/shared/inbox-pitch.json`), don't keep CSS-iterating solo.
2. **Commit + deploy** once blessed (standing rule: deploy every session): logical commits (games/mining · UX wave 1 · nav v2 · sources), then `./.venv/bin/mkdocs gh-deploy`. NEVER `git add` the repo-root strays (`body-lock-check.jpeg`, `mount-maintenance-check.jpeg`, `knowledge-claude-code-audit-2026-04-28.md`).
3. **Alex's open picks:** UX design direction A/B/C (mat-side game card ← my recommendation / student-coach two-door split / one-recommender consolidation) — full cards in `explainers/status-review-2026-07-05-ux.html`.

## Verify state (run these)
```bash
cd "/Users/alex/Desktop/Code/Ecological MMA System"
git status -sb | head -5
./.venv/bin/mkdocs build --strict --site-dir /tmp/x   # must pass (passed at shutdown)
python3 scripts/consistency-check.py                   # 59 games, only the known home-links warning
python3 scripts/eco-check.py | tail -3                 # 56/59 clean; known E1 flags: turtle-breakout, turtle-pin, leg-entanglement-escape
```

## Parked / open
- **North-south: placeholder concept per Alex (2026-07-05).** 3 framings drafted (own escape page / shared past-the-legs escape / knee-on-belly sibling) — wait for him to speak on it, don't build.
- UX findings not yet built: glossary auto-links, game-page section-jump (absorbed by direction A if picked), field-tested-first sort on browse pages.
- Academic sourcing round 2: 8 verified-but-unadded candidates + 2 flagged (possible thesis; brand-new Frontiers RCT) — details were chat-only, re-research if wanted.
- WIP backlog: 23 wip/format pages awaiting Alex's blessing pass.
- `docs/_drafts/` staleness: coverage-map (5/26) + gaps-atlas (5/31) predate the 59-game library — superseded by `game-gaps-draft-2026-07-05.pdf`; consider retiring.

## Standing rules (unchanged unless noted)
- **games.json is generated**: `python3 scripts/build-game-index.py` after any game frontmatter change. Count references live in map.md / games/index.md / prerequisites.md / changelog.md / `overrides/home.html` (home stats now 59/19/6); `consistency-check.py` catches drift.
- **mkdocs serve does NOT hot-reload `overrides/`** — restart the server after editing templates there.
- Transcription: copy WAVs off the stick first → concat + loudnorm + 16k mono → 15-min chunks → mlx_whisper large-v3 FOREGROUND one chunk at a time, game vocab in `--initial-prompt`.
- **Same structure + different goals = different games** (sibling pages, cross-linked), not levels — Alex, 2026-07-05 (turtle-breakout vs turtle-pin).
- Class-derived edits get the `class-derived` tag; new games stay WIP until Alex blesses.
- Live site: https://acalienes.github.io/Ecological-MMA-Game-System/ · deploy from `main` with `./.venv/bin/mkdocs gh-deploy`.
