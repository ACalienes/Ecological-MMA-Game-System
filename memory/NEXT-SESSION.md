# Pick Up Here — written 2026-06-07 (shutdown)

**Branch state:** `main` is current through the PR #2 merge + housekeeping (`0fe8912`). Two open PRs stacked on it:
- **PR #3** `prescription-engine-2026-06-06` — Get Your Game Plan (fighter+coach intake → plan). Verified in browser.
- **PR #4** `ground-wave-guard-2026-06-06` — 6 guard games (WIP) + eco-QA tooling + judgment-sweep report. Contains #3's commits; its diff collapses once #3 merges. **Review #3 first, then #4.**

Working tree: clean except `knowledge-claude-code-audit-2026-04-28.md` (untracked root stray, Alex owes keep/toss).

## Verify state (don't trust claims, run these)

```bash
git status --short && git log --oneline -5
gh pr list                                          # expect #3 and #4 OPEN
uvx --with mkdocs-material mkdocs build --strict    # PASSES as of shutdown
python3 scripts/consistency-check.py                # 1 known failure: home index links (standing)
python3 scripts/eco-check.py                        # 47/48; turtle-breakout perimeter flag
```

## What shipped this session (2026-06-06 evening → 06-07)

- PR #2 MERGED (library 42 games on main) + strays filed + `.claude/worktrees/` gitignored.
- **Prescription engine v1** (PR #3): `docs/your-plan.md` + `docs/javascripts/your-plan.js` + `scripts/build-game-index.py` → `games.json`. Both forks browser-verified.
- **Ground wave tranche 1** (PR #4): closed/open/half-guard-pass, seated-guard-retention, half-guard-bottom, closed-guard-bottom. All WIP, full emma treatment, heroes done. Library 42 → 48.
- **Eco-QA, three tiers**: `scripts/eco-check.py` (mechanical, 47/48) + 46-agent judgment sweep (**0 violations, 32 tensions**, report `docs/_drafts/eco-judgment-sweep-2026-06-07.md`) + R5 (mat, open).

## Alex's decision queue (in order)

1. **Review/merge PR #3**, then **PR #4**.
2. **Eco-tension skim**: 32 items in the sweep report, each = accept-as-designed or one-line edit. Best conversation: the 6 J16 range-structure tensions on striking games.
3. **turtle-breakout perimeter**: only game with no boundary rule. Intentional from class?
4. Standing: bless the 12 WIP games (needs grappling class for R5) · A/B/C structure + platform reviews from 5/31 · home-links consistency call · `knowledge-claude-code-audit-2026-04-28.md` keep/toss · leglock safety review before E6/F3.

## Candidate next moves (building)

1. **Ground wave tranche 2 = sub-wave A (pin maintenance, 5 games)**: mount-maintenance, side-control-ride, back-maintenance, KOB (fix A4's vague win per pressure-test), north-south (trim A5's win overlap with E4). Spec: `docs/_drafts/ground-wave-spec-2026-05-27.md`. Mirrors the 3 built escapes, fast to template. Then D (turtle) → E/F.
2. **Apply accepted eco-tension fixes** once Alex skims the report (most are one-liners).
3. **Class audio** if a new recording lands: mine it, and a grappling class also unlocks R5 for all 12 WIPs.

## Parked / standing

- WIP tags come off only when Alex blesses on the platform (now 12 games incl. the 6 guard pages).
- Threshold house rule, GnP-first ground games, hand connection = above the knee, visual-is-king (.emma-*), distilled copy, no em dashes in product copy, credit sources (SMGC/Souders, Justin Mark, Craig Jones already on Sources).
- Hero generation: claude.ai Higgsfield `nano_banana_pro`, 16:9, ember-silhouette prompt (see session-2026-06-07 commits for the exact working prompt text); local `higgsfield` MCP still broken ('min' error).
- After ANY game add/edit: run `build-game-index.py` (consistency-check enforces freshness) + eco-check.py.
- Student names never in `docs/`.
