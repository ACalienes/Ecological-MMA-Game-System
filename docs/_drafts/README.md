# _drafts — class-recording staging area

**Not published.** This folder is excluded from the built site (`exclude_docs` in `mkdocs.yml`). It is the single landing zone for raw content mined from class recordings, before it is reviewed and merged into the live, visual game/concept pages.

## Why this exists
`docs/` is the **single source of truth** for the product (decided 2026-05-26, Lane A‑1). Previously, class recordings were mined into a separate `Ecological Games Library/` tree, which then drifted from the published `docs/` site. That tree has been retired (recoverable from git history); all of its content was already carried into `docs/`.

## The workflow
1. **Transcribe** the class recording (on-device `mlx_whisper` pipeline).
2. **Mine** the transcript into a draft here: `docs/_drafts/YYYY-MM-DD-<topic>.md`. Capture raw cues, corrections, new game ideas, resolved-from-live-play notes.
3. **Review + merge** the worthwhile parts into the live page(s) in `docs/games/`, `docs/concepts/`, etc., in the visual `emma-*` format and the distilled-instruction style.
4. **Delete or archive** the draft once merged. Nothing in `_drafts/` is canonical.

## Rules for merged content
- Visual-first (`emma-*` components), no prose walls or bare tables.
- Distilled instructions: fewest words that work; detail goes in popovers/accordions.
- No em dashes. Always name the clinch type (50/50, body-lock, etc.).
