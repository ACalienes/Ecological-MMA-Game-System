#!/usr/bin/env python3
"""Build docs/assets/data/games.json from game-page frontmatter.

The prescription engine (docs/your-plan.md) reads this index client-side.
Run after adding or editing any game page:

    python3 scripts/build-game-index.py

Extracted per game: slug, title, environment, domain, focus, difficulty,
duration, equipment (normalized list), prerequisites, tags, status,
one-line description, hero image path (if present).
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GAMES_DIR = ROOT / "docs" / "games"
HEROES_DIR = ROOT / "docs" / "assets" / "img" / "heroes"
OUT_PATH = ROOT / "docs" / "assets" / "data" / "games.json"

EQUIPMENT_ALIASES = {
    "marked square": "boundary-markers",
    "marked-square": "boundary-markers",
}


def parse_frontmatter(text):
    """Minimal YAML-subset parser: scalars, lists, nested maps (2-space indent)."""
    m = re.match(r"^---\n(.*?)\n---", text, re.S)
    if not m:
        return None
    fm = {}
    stack = [(0, fm)]   # (indent, dict)
    pending = None      # (dict, key, indent) for a key awaiting list/map children
    for line in m.group(1).split("\n"):
        if not line.strip():
            continue
        indent = len(line) - len(line.lstrip())
        stripped = line.strip()
        if stripped.startswith("- "):
            if pending and indent > pending[2]:
                d, k, _ = pending
                if not isinstance(d[k], list):
                    d[k] = []
                d[k].append(stripped[2:].strip().strip("'\""))
            continue
        if ":" not in stripped:
            continue
        if pending and indent > pending[2]:
            # nested map under the pending key
            d, k, _ = pending
            if not isinstance(d[k], dict):
                d[k] = {}
            stack.append((indent, d[k]))
            pending = None
        while len(stack) > 1 and indent < stack[-1][0]:
            stack.pop()
        container = stack[-1][1]
        key, _, value = stripped.partition(":")
        key, value = key.strip(), value.strip()
        if value:
            container[key] = value
            pending = None
        else:
            container[key] = None
            pending = (container, key, indent)
    return fm


def coerce_list(raw):
    """Accept block lists, inline flow lists ('[a, b]' / '[]'), or None."""
    if isinstance(raw, list):
        return raw
    if raw is None or not str(raw).strip("[] "):
        return []
    return [t.strip().strip("'\"") for t in str(raw).strip("[] ").split(",") if t.strip()]


def normalize_equipment(raw):
    """'mats, wall' / '[gloves, mats]' / 'none' -> sorted list of tokens."""
    if isinstance(raw, list):
        items = raw
    else:
        items = re.split(r"[,\s]+", str(raw).strip("[] "))
    out = set()
    for item in items:
        token = item.strip().strip("'\"").lower()
        if not token:
            continue
        out.add(EQUIPMENT_ALIASES.get(token, token))
    return sorted(out)


def extract_description(text):
    """First plain paragraph after the emma-meta strip = the one-liner."""
    lines = text.split("\n")
    start = 0
    for i, line in enumerate(lines):
        if 'class="emma-meta"' in line:
            start = i + 1
            break
    for line in lines[start:]:
        line = line.strip()
        if not line or line.startswith(("<", "!", "#", "---", "=", ":")):
            continue
        return re.sub(r"<[^>]+>", "", line)
    return ""


def main():
    games = []
    problems = []
    for path in sorted(GAMES_DIR.glob("*.md")):
        if path.name == "index.md":
            continue
        slug = path.stem
        text = path.read_text()
        fm = parse_frontmatter(text)
        if not fm:
            problems.append(f"{path.name}: no frontmatter")
            continue
        prereqs = fm.get("prerequisites") or {}
        if not isinstance(prereqs, dict):
            prereqs = {}
        tags = coerce_list(fm.get("tags"))
        hero = HEROES_DIR / f"{slug}.png"
        game = {
            "slug": slug,
            "title": fm.get("title", slug),
            "environment": fm.get("environment", ""),
            "domain": fm.get("domain", ""),
            "focus": fm.get("focus", ""),
            "difficulty": fm.get("difficulty", ""),
            "duration": fm.get("duration", ""),
            "equipment": normalize_equipment(fm.get("equipment", [])),
            "prereq_games": coerce_list(prereqs.get("games")),
            "tags": tags,
            "status": fm.get("status", "live"),
            "is_format": "format" in tags,
            "description": extract_description(text),
            "hero": f"assets/img/heroes/{slug}.png" if hero.exists() else None,
        }
        for field in ("environment", "focus", "difficulty"):
            if not game[field]:
                problems.append(f"{path.name}: missing {field}")
        games.append(game)

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(json.dumps({"games": games}, indent=2) + "\n")
    live = sum(1 for g in games if g["status"] == "live" and not g["is_format"])
    print(f"Wrote {OUT_PATH.relative_to(ROOT)}: {len(games)} games "
          f"({live} live playable, {len(games) - live} wip/format)")
    if problems:
        print("Problems:")
        for p in problems:
            print(f"  - {p}")
        sys.exit(1)


if __name__ == "__main__":
    main()
