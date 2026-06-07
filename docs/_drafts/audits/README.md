# Game Audits — Workflow

This folder is the durable record of which games have been audited, the verdict, and what flare they need before going canonical. The interactive entry point is the **Audit Console** at `explainers/audit-console.html` (open it directly in a browser).

## Two ways to audit

### 1. Audit Console (recommended)

Open `explainers/audit-console.html` in any browser. Single page, no server.

- Pick a game from the list (filter by *pending*, *recently fixed*, *WIP*, *Alex-original*, *has QA flag*, or verdict).
- Pre-flagged defects from the QA findings / pressure-tests show up inline so you don't repeat known issues.
- Fill the rubric (R1–R7), pick a verdict (Pass / Conditional / Not-yet / Canonical), add flare and action notes.
- Saves automatically to browser localStorage as you go.
- Hit **Export feedback** to get a markdown chunk of all your audits with content. Copy to clipboard (paste back here) or download as `.md` (drop into a chat with me).

The console captures everything Claude needs to act on the audit in one structured format.

### 2. Markdown file (offline / archival)

Copy `_TEMPLATE.md` to `<game-slug>-YYYY-MM-DD.md` in this folder, fill it in, commit. Useful for keeping a permanent per-game record outside localStorage. Each file is one audit pass.

## Rubric (same in both modes)

- **R1** one asymmetric representative start (not 2-3 alternates)
- **R2** observable, non-stall win on the dominant side + threshold for holds
- **R3** both sides defined (continuous side has measured success)
- **R4** non-circular real prereqs
- **R5** representative for OUR system (matches how Alex teaches it)
- **R6** correct protagonist wins, internally consistent
- **R7** safety adequate (subs / leglocks); N-A otherwise

Same rubric as `harvest-pressure-test-2026-05-27.md` and `ground-wave-pressure-test-2026-05-30.md`.

## Verdict semantics

- **PASS** — build-ready as written. The flare pass still applies (per [[feedback-audit-external-games]]) before canonical.
- **CONDITIONAL** — strong game, one named defect to fix first. The defect must be named.
- **NOT-YET** — not a game yet, or a meta-format / lesson plan, not a standalone game.
- **CANONICAL** — blessed live, drop the `[WIP]` tag.

## What happens after Alex audits

1. Alex exports the feedback markdown.
2. Pastes it into a chat with Claude (or commits the `.md` to this folder).
3. Claude applies the action per game: fix the defect, apply the flare, drop the WIP tag, update sources, etc.
4. Each affected game's frontmatter eventually gets an `audited_at: <date>` field so the audit log is durable.

## Convention

- One audit per session is fine. Don't try to do all 38+ at once.
- Pre-flagged notes are informational, not constraints — override them if your read is different.
- Audit Console state is local to your browser. The Export step is what makes it sharable.
