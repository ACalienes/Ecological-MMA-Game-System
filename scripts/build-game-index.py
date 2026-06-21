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
    "boundary markers": "boundary-markers",
    "shin guards": "shin-guards",
    "shinguards": "shin-guards",
}

# The gear sets the prescription engine understands (docs/javascripts/your-plan.js).
# Any equipment token outside this set silently excludes a game from every plan,
# so we validate against it rather than emitting unknown tokens.
KNOWN_EQUIPMENT = {
    "none", "boundary-markers", "gloves", "shin-guards", "mats", "wall",
    "wall-to-ground",
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
    """'mats, wall' / '[gloves, mats]' / 'shin guards' / 'none' -> sorted tokens.

    Split on commas ONLY. Splitting on whitespace shredded multi-word values
    like 'shin guards' into ['shin', 'guards'] and 'marked square' into
    ['marked', 'square'], producing tokens no gear set matches (so the game
    silently vanished from every plan). Aliases run on the whole phrase first,
    then any remaining internal spaces collapse to hyphens.
    """
    if isinstance(raw, list):
        items = raw
    else:
        items = str(raw).strip("[] ").split(",")
    out = set()
    for item in items:
        token = item.strip().strip("'\"").lower()
        if not token:
            continue
        token = EQUIPMENT_ALIASES.get(token, token)
        token = re.sub(r"\s+", "-", token)
        out.add(token)
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
        title = fm.get("title", slug)
        # A page is work-in-progress if it says so explicitly (status: wip),
        # carries a wip tag, or marks "(WIP)" in its title. Without this, a
        # missing status defaulted to "live" and shipped half-built games into
        # the prescription engine.
        status = fm.get("status")
        is_wip = "wip" in tags or "(wip)" in title.lower()
        if status is None:
            status = "wip" if is_wip else "live"
        equipment = normalize_equipment(fm.get("equipment", []))
        hero = HEROES_DIR / f"{slug}.png"
        game = {
            "slug": slug,
            "title": title,
            "environment": fm.get("environment", ""),
            "domain": fm.get("domain", ""),
            "focus": fm.get("focus", ""),
            "difficulty": fm.get("difficulty", ""),
            "duration": fm.get("duration", ""),
            "equipment": equipment,
            "prereq_games": coerce_list(prereqs.get("games")),
            "tags": tags,
            "status": status,
            "is_format": "format" in tags,
            "description": extract_description(text),
            "hero": f"assets/img/heroes/{slug}.png" if hero.exists() else None,
        }
        for field in ("environment", "focus", "difficulty"):
            if not game[field]:
                problems.append(f"{path.name}: missing {field}")
        unknown = [e for e in equipment if e not in KNOWN_EQUIPMENT]
        if unknown:
            problems.append(f"{path.name}: unknown equipment {unknown} "
                            f"(not in any gear set; game would never be recommended)")
        games.append(game)

    live = sum(1 for g in games if g["status"] == "live" and not g["is_format"])
    # Validate BEFORE writing so a bad page can never leave a partial or stale
    # index behind. Write atomically (temp + replace) once the data is clean.
    if problems:
        print("Refusing to write index, problems found:")
        for p in problems:
            print(f"  - {p}")
        sys.exit(1)
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    tmp = OUT_PATH.with_suffix(".json.tmp")
    tmp.write_text(json.dumps({"games": games}, indent=2) + "\n")
    tmp.replace(OUT_PATH)
    print(f"Wrote {OUT_PATH.relative_to(ROOT)}: {len(games)} games "
          f"({live} live playable, {len(games) - live} wip/format)")


if __name__ == "__main__":
    main()
