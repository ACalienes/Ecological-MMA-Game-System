#!/usr/bin/env python3
"""
Consistency Check Script for Ecological MMA Games System

Audits all documentation files to ensure game counts, lists, and references
are consistent across the system.

Usage: python3 scripts/consistency-check.py
"""

import re
from pathlib import Path

# Colors for terminal output
GREEN = '\033[92m'
RED = '\033[91m'
YELLOW = '\033[93m'
RESET = '\033[0m'
BOLD = '\033[1m'

def get_game_files(docs_path):
    """Get all game markdown files from docs/games/"""
    games_dir = docs_path / 'games'
    game_files = set()
    for f in games_dir.glob('*.md'):
        if f.name != 'index.md':
            game_files.add(f.stem)  # filename without .md
    return game_files

def get_games_from_nav(mkdocs_path):
    """Extract game references from mkdocs.yml nav using regex"""
    with open(mkdocs_path, 'r') as f:
        content = f.read()

    # Match patterns like "games/game-name.md"
    pattern = r'games/([a-z-]+)\.md'
    matches = re.findall(pattern, content)
    return set(m for m in matches if m != 'index')

def get_games_by_category(mkdocs_path):
    """Parse mkdocs.yml to get games organized by category"""
    with open(mkdocs_path, 'r') as f:
        lines = f.readlines()

    categories = {}
    current_category = None

    # Track the category hierarchy from nav structure
    for line in lines:
        # Match category headers like "    - Skill Isolation:" or "    - Open Space - Striking:"
        category_match = re.match(r'\s+- ([\w\s-]+):\s*$', line)
        if category_match:
            cat_name = category_match.group(1).strip()
            # Skip subcategories like "Defensive:", "Offensive:", "Combined:"
            if cat_name not in ['Defensive', 'Offensive', 'Combined', 'Games Library', 'All Games']:
                current_category = cat_name
                if current_category not in categories:
                    categories[current_category] = []

        # Match game entries like "        - Parry the Straight: games/parry-the-straight.md"
        game_match = re.search(r'games/([a-z-]+)\.md', line)
        if game_match and current_category:
            game_slug = game_match.group(1)
            if game_slug != 'index':
                categories[current_category].append(game_slug)

    # Filter to only categories that have games
    return {k: v for k, v in categories.items() if v}

def get_games_linked_in_file(file_path):
    """Extract game references from markdown links"""
    if not file_path.exists():
        return set()

    with open(file_path, 'r') as f:
        content = f.read()

    # Match patterns like [Game Name](games/game-name.md) or (../games/game-name.md)
    pattern = r'\((?:\.\.\/)?games\/([a-z-]+)\.md\)'
    matches = re.findall(pattern, content)
    return set(m for m in matches if m != 'index')

def find_game_counts_with_context(file_path, total_games):
    """Find mentions of game counts in a file with line context"""
    if not file_path.exists():
        return []

    with open(file_path, 'r') as f:
        lines = f.readlines()

    results = []
    for i, line in enumerate(lines, 1):
        # Strip HTML so counts split across tags (e.g. <span>33</span>
        # <span>Total Games</span>) are still seen as "33 Total Games".
        text = re.sub(r'<[^>]+>', ' ', line)
        # Catch "33 games", "33-game", "33-Game System", "33 total games".
        matches = re.findall(r'(\d+)(?:[\s-]+total)?[\s-]+games?\b', text, re.IGNORECASE)
        for m in matches:
            count = int(m)
            # Flag counts >= 20 that don't match total (likely stale totals)
            if count >= 20 and count != total_games:
                results.append((i, count, line.strip()[:80]))

    return results

def main():
    # Setup paths
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    docs_path = project_root / 'docs'
    mkdocs_path = project_root / 'mkdocs.yml'

    print(f"\n{BOLD}=== Ecological MMA System Consistency Check ==={RESET}\n")

    issues = []
    warnings = []

    # 1. Get game files
    game_files = get_game_files(docs_path)
    total_games = len(game_files)
    print(f"Found {BOLD}{total_games} game files{RESET} in docs/games/")

    # 2. Check mkdocs.yml nav
    print(f"\n{BOLD}Checking mkdocs.yml navigation...{RESET}")
    games_in_nav = get_games_from_nav(mkdocs_path)
    print(f"Found {len(games_in_nav)} games in mkdocs.yml nav")

    missing_from_nav = game_files - games_in_nav
    if missing_from_nav:
        issues.append(f"Games with files but NOT in nav: {sorted(missing_from_nav)}")

    in_nav_no_file = games_in_nav - game_files
    if in_nav_no_file:
        issues.append(f"Games in nav but NO file exists: {sorted(in_nav_no_file)}")

    # 3. Get category distribution from nav
    print(f"\n{BOLD}Current distribution by category:{RESET}")
    categories = get_games_by_category(mkdocs_path)
    category_total = 0
    for cat_name, games in categories.items():
        print(f"  {cat_name}: {len(games)} games")
        category_total += len(games)
    print(f"  {BOLD}Total: {category_total} games{RESET}")

    if category_total != total_games:
        warnings.append(f"Category total ({category_total}) doesn't match file count ({total_games})")

    # 4. Check game counts in key files
    print(f"\n{BOLD}Checking game counts in documentation...{RESET}")

    files_to_check = [
        ('index.md (home)', docs_path / 'index.md'),
        ('system/map.md', docs_path / 'system' / 'map.md'),
        ('games/index.md', docs_path / 'games' / 'index.md'),
        ('reference/prerequisites.md', docs_path / 'reference' / 'prerequisites.md'),
    ]

    for name, filepath in files_to_check:
        stale_counts = find_game_counts_with_context(filepath, total_games)
        if stale_counts:
            for line_num, count, context in stale_counts:
                issues.append(f"{name}:{line_num}: Found '{count} games' but should be {total_games}")
                print(f"  {RED}✗{RESET} {name}:{line_num}: '{count} games' → should be {total_games}")
        else:
            print(f"  {GREEN}✓{RESET} {name}: counts OK")

    # 5. Check games linked in key files
    print(f"\n{BOLD}Checking game links...{RESET}")

    link_files = [
        ('index.md (home)', docs_path / 'index.md'),
    ]

    for name, filepath in link_files:
        linked_games = get_games_linked_in_file(filepath)
        missing = game_files - linked_games
        extra = linked_games - game_files

        # The home page is a curated landing page, not an index of every game,
        # so a missing link here is informational, not a release blocker.
        if not missing:
            print(f"  {GREEN}✓{RESET} {name}: All {len(linked_games)} games linked")
        else:
            warnings.append(f"{name}: links {len(linked_games)} of {len(game_files)} games "
                            f"(curated landing page, not a full index)")
            print(f"  {YELLOW}!{RESET} {name}: links {len(linked_games)}/{len(game_files)} games (informational)")

        if extra:
            issues.append(f"{name}: Links to non-existent games: {sorted(extra)}")

    # 6. Check the prescription-engine game index is fresh
    print(f"\n{BOLD}Checking game index (games.json)...{RESET}")
    index_path = docs_path / 'assets' / 'data' / 'games.json'
    if not index_path.exists():
        issues.append("docs/assets/data/games.json missing: run scripts/build-game-index.py")
        print(f"  {RED}✗{RESET} games.json missing")
    else:
        import json
        indexed = set(g['slug'] for g in json.loads(index_path.read_text())['games'])
        if indexed != game_files:
            stale = sorted(game_files - indexed) + sorted(indexed - game_files)
            issues.append(f"games.json out of date ({stale}): run scripts/build-game-index.py")
            print(f"  {RED}✗{RESET} games.json out of date: {stale}")
        else:
            print(f"  {GREEN}✓{RESET} games.json matches game files ({len(indexed)} games)")

    # 7. Cross-page per-environment counts (Wall / Ground) must agree between the
    #    Games Library quick-ref and the System Map stats, and match games.json.
    #    (Catches the win-ladder-style drift where one page buckets differently.)
    print(f"\n{BOLD}Checking per-environment counts across pages...{RESET}")
    import json as _json
    env_counts = {}
    if index_path.exists():
        for g in _json.loads(index_path.read_text())['games']:
            env_counts[g['environment']] = env_counts.get(g['environment'], 0) + 1
    idx_text = (docs_path / 'games' / 'index.md').read_text()
    map_text = (docs_path / 'system' / 'map.md').read_text()
    for label, env_key in (('Wall', 'wall'), ('Ground', 'ground')):
        idx_m = re.search(r'\|\s*' + label + r'\s*\|\s*(\d+)\s*\|', idx_text)
        map_m = re.search(r'>(\d+)<[^>]*></span><span class="emma-stat__label">' + label + r'<', map_text)
        idx_n = int(idx_m.group(1)) if idx_m else None
        map_n = int(map_m.group(1)) if map_m else None
        json_n = env_counts.get(env_key)
        if len({idx_n, map_n, json_n} - {None}) > 1:
            issues.append(f"{label} count disagrees: games/index quick-ref={idx_n}, "
                          f"system/map={map_n}, games.json={json_n}")
            print(f"  {RED}✗{RESET} {label}: index={idx_n} map={map_n} json={json_n}")
        else:
            print(f"  {GREEN}✓{RESET} {label}: {json_n} (index, map, json agree)")

    # Print results
    print(f"\n{BOLD}=== Results ==={RESET}\n")

    if issues:
        print(f"{RED}{BOLD}ISSUES ({len(issues)}):{RESET}")
        for issue in issues:
            print(f"  {RED}✗{RESET} {issue}")
        print()

    if warnings:
        print(f"{YELLOW}{BOLD}WARNINGS ({len(warnings)}):{RESET}")
        for warning in warnings:
            print(f"  {YELLOW}!{RESET} {warning}")
        print()

    if not issues and not warnings:
        print(f"{GREEN}{BOLD}✓ All checks passed!{RESET}")
    elif not issues:
        print(f"{GREEN}✓ No critical issues.{RESET} Warnings are informational.")
    else:
        print(f"{RED}Please fix the issues above.{RESET}")

    # Helpful note when adding games
    print(f"\n{BOLD}When adding a new game:{RESET}")
    print(f"  1. Create docs/games/game-name.md")
    print(f"  2. Add to mkdocs.yml nav under appropriate category")
    print(f"  3. Add link in docs/index.md")
    print(f"  4. Update game counts in docs that mention totals")
    print(f"  5. Run python3 scripts/build-game-index.py (refreshes games.json)")
    print()

    return len(issues)

if __name__ == '__main__':
    exit(main())
