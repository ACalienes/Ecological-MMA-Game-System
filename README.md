# Ecological MMA Games System

A constraints-led, game-based training framework for MMA. 34 games across 6 environments, built on ecological dynamics and the Constraints-Led Approach.

## What Is This?

This is a complete training system built on one insight: **MMA is a decision game, not a technique collection.**

Instead of drilling techniques in isolation, athletes solve problems through structured games. The environment does the teaching. Correct behavior emerges from constraints, not coaching cues.

The system covers:

- **34 training games** organized by environment (Open Space, Wall, Ground) and focus (Offensive, Defensive, Combined)
- **9 key concepts** including Fight Philosophy, Decision States, TKO Pin, and Confidence Rating
- **Constraints-Led Approach knowledge base** grounded in ecological dynamics research (Renshaw et al., 2019)
- **Coach tools** for safety, assessment, session planning, and lesson generation

## Documentation Site

The full documentation is built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

### Local Development

```bash
# Install dependencies
pip install mkdocs-material

# Serve locally (with live reload)
mkdocs serve

# Build static site
mkdocs build
```

The site will be available at `http://localhost:8000`.

### Project Structure

```
docs/
├── index.md                 # Home page
├── system/                  # System overview, map, glossary, taxonomy
├── games/                   # All 34 game pages
├── concepts/                # Key concepts (Fight Philosophy, TKO Pin, etc.)
├── principles/              # Training Mindset + CLA Knowledge Base (10 pages)
├── tools/                   # Safety, assessment, session planning, templates
├── reference/               # Game finder, prerequisites, FAQ, sources, changelog
├── about/                   # Project context, design rules, disclaimer
└── stylesheets/             # Custom CSS for diagrams
mkdocs.yml                   # Site configuration and navigation
scripts/
└── consistency-check.py     # Validates game counts, nav, links, and content
```

### Consistency Check

Run the validation script to check for broken links, orphan pages, stale counts, and missing nav entries:

```bash
python3 scripts/consistency-check.py
```

## Theoretical Foundation

This system is built on:

- **Ecological Dynamics** — Gibson (1979), Bernstein (1967), Kelso (1995)
- **Constraints-Led Approach** — Newell (1986), Renshaw et al. (2019)
- **Representative Learning Design** — Pinder et al. (2011)

See the [Sources & Theory](docs/reference/sources.md) page for the full bibliography.

## License

All rights reserved. This is a proprietary training system.
