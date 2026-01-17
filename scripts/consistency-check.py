#!/usr/bin/env python3
"""
Consistency Check Script for Ecological MMA Games System

Audits all documentation files to ensure game counts, lists, and references
are consistent across the system.

Usage: python3 scripts/consistency-check.py
"""

import os
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

def find_game_counts(file_path):
    """Find all mentions of game counts in a file"""
    if not file_path.exists():
        return []

    with open(file_path, 'r') as f:
        content = f.read()

    # Find patterns like "35 games", "35-game", "(35)"
    results = []

    # "X games" pattern
    matches = re.findall(r'(\d+)\s+games?', content, re.IGNORECASE)
    for m in matches:
        count = int(m)
        if count >= 15:  # Likely total or major category count
            results.append(count)

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

    # List all games
    print(f"\n{BOLD}Games found:{RESET}")
    for game in sorted(game_files):
        print(f"  - {game}")

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

    # 3. Check game counts in key files
    print(f"\n{BOLD}Checking game counts in documentation...{RESET}")

    files_to_check = [
        ('index.md (home)', docs_path / 'index.md'),
        ('system/map.md', docs_path / 'system' / 'map.md'),
        ('games/index.md', docs_path / 'games' / 'index.md'),
        ('reference/prerequisites.md', docs_path / 'reference' / 'prerequisites.md'),
    ]

    for name, filepath in files_to_check:
        counts = find_game_counts(filepath)
        if counts:
            wrong_counts = [c for c in counts if c != total_games and c > 20]
            if wrong_counts:
                issues.append(f"{name}: Found count(s) {wrong_counts} but should be {total_games}")
            else:
                print(f"  {GREEN}✓{RESET} {name}: counts OK")
        else:
            print(f"  - {name}: no total count found (may be OK)")

    # 4. Check games linked in key files
    print(f"\n{BOLD}Checking game links...{RESET}")

    link_files = [
        ('games/index.md', docs_path / 'games' / 'index.md'),
        ('index.md (home)', docs_path / 'index.md'),
    ]

    for name, filepath in link_files:
        linked_games = get_games_linked_in_file(filepath)
        missing = game_files - linked_games
        extra = linked_games - game_files

        if not missing:
            print(f"  {GREEN}✓{RESET} {name}: All {len(linked_games)} games linked")
        else:
            if len(missing) <= 5:
                warnings.append(f"{name}: Missing links to {len(missing)} games: {sorted(missing)}")
            else:
                warnings.append(f"{name}: Missing links to {len(missing)} games")

        if extra:
            issues.append(f"{name}: Links to non-existent games: {sorted(extra)}")

    # 5. Summary statistics
    print(f"\n{BOLD}=== Summary ==={RESET}")
    print(f"\nExpected distribution (current system):")
    print(f"  Skill Isolation:      8 games")
    print(f"  Open Space Striking:  7 games")
    print(f"  Transition Zone:      3 games")
    print(f"  Open Space Wrestling: 4 games")
    print(f"  Wall:                 6 games")
    print(f"  Ground:               7 games")
    print(f"  {BOLD}Total:                 35 games{RESET}")

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

    print()
    return len(issues)

if __name__ == '__main__':
    exit(main())
