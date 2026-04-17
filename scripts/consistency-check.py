#!/usr/bin/env python3
"""
Consistency Check Script for Ecological MMA Games System

Audits all documentation files to ensure game counts, lists, references,
and internal links are consistent across the system.

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
    pattern = r'\((?:\.\.\/)*games\/([a-z-]+)\.md\)'
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
        # "X games" pattern - look for counts that might be totals
        matches = re.findall(r'(\d+)\s+games?', line, re.IGNORECASE)
        for m in matches:
            count = int(m)
            # Flag counts >= 20 that don't match total (likely stale totals)
            if count >= 20 and count != total_games:
                results.append((i, count, line.strip()[:80]))

    return results

def get_all_nav_pages(mkdocs_path):
    """Extract all page references from mkdocs.yml nav"""
    with open(mkdocs_path, 'r') as f:
        content = f.read()

    pattern = r':\s+([a-z][a-z0-9_/-]+\.md)\s*$'
    matches = re.findall(pattern, content, re.MULTILINE)
    return set(matches)

def get_all_doc_files(docs_path):
    """Get all markdown files in docs/"""
    doc_files = set()
    for f in docs_path.rglob('*.md'):
        rel = f.relative_to(docs_path)
        doc_files.add(str(rel))
    return doc_files

def check_internal_links(docs_path):
    """Check all internal markdown links point to existing files"""
    broken_links = []

    for md_file in docs_path.rglob('*.md'):
        with open(md_file, 'r') as f:
            content = f.read()

        # Match markdown links like [text](path.md) or [text](../path.md)
        # Exclude external links (http/https), anchors (#), and mermaid code blocks
        in_mermaid = False
        for line_num, line in enumerate(content.split('\n'), 1):
            if line.strip().startswith('```mermaid'):
                in_mermaid = True
                continue
            if in_mermaid:
                if line.strip().startswith('```'):
                    in_mermaid = False
                continue

            for match in re.finditer(r'\[([^\]]*)\]\(([^)]+)\)', line):
                link_text = match.group(1)
                link_target = match.group(2)

                # Skip external links, anchors, and special links
                if link_target.startswith(('http://', 'https://', '#', 'mailto:')):
                    continue

                # Strip anchor from link
                link_path = link_target.split('#')[0]
                if not link_path:
                    continue

                # Resolve relative path
                resolved = (md_file.parent / link_path).resolve()
                if not resolved.exists():
                    rel_file = md_file.relative_to(docs_path)
                    broken_links.append((str(rel_file), line_num, link_text, link_target))

    return broken_links

def check_flagged_content(docs_path):
    """Find FLAGGED, TODO, TBD, FIXME markers in docs"""
    markers = []
    pattern = re.compile(r'(FLAGGED|TODO|TBD|FIXME|HACK|XXX|PLACEHOLDER)', re.IGNORECASE)

    for md_file in docs_path.rglob('*.md'):
        with open(md_file, 'r') as f:
            for line_num, line in enumerate(f, 1):
                match = pattern.search(line)
                if match:
                    rel_file = md_file.relative_to(docs_path)
                    markers.append((str(rel_file), line_num, match.group(1), line.strip()[:80]))

    return markers

def check_concept_pages(docs_path, mkdocs_path):
    """Check that all concept files are in nav"""
    concepts_dir = docs_path / 'concepts'
    if not concepts_dir.exists():
        return [], []

    concept_files = set()
    for f in concepts_dir.glob('*.md'):
        concept_files.add(f'concepts/{f.name}')

    nav_pages = get_all_nav_pages(mkdocs_path)
    missing = concept_files - nav_pages
    extra = {p for p in nav_pages if p.startswith('concepts/')} - concept_files

    return sorted(missing), sorted(extra)

def check_cla_pages(docs_path, mkdocs_path):
    """Check that all CLA files are in nav"""
    cla_dir = docs_path / 'principles' / 'cla'
    if not cla_dir.exists():
        return [], []

    cla_files = set()
    for f in cla_dir.glob('*.md'):
        cla_files.add(f'principles/cla/{f.name}')

    nav_pages = get_all_nav_pages(mkdocs_path)
    missing = cla_files - nav_pages
    extra = {p for p in nav_pages if p.startswith('principles/cla/')} - cla_files

    return sorted(missing), sorted(extra)

def check_orphan_pages(docs_path, mkdocs_path):
    """Find doc files that exist on disk but aren't in the nav"""
    all_docs = get_all_doc_files(docs_path)
    nav_pages = get_all_nav_pages(mkdocs_path)

    orphans = all_docs - nav_pages
    # index.md is the home page (special case)
    orphans.discard('index.md')

    return sorted(orphans)

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
                print(f"  {RED}✗{RESET} {name}:{line_num}: '{count} games' -> should be {total_games}")
        else:
            print(f"  {GREEN}✓{RESET} {name}: counts OK")

    # 5. Check games linked in key files
    print(f"\n{BOLD}Checking game links in index.md...{RESET}")

    link_files = [
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
                issues.append(f"{name}: Missing links to games: {sorted(missing)}")
            else:
                issues.append(f"{name}: Missing links to {len(missing)} games")
            print(f"  {RED}✗{RESET} {name}: Missing {len(missing)} game links")

        if extra:
            issues.append(f"{name}: Links to non-existent games: {sorted(extra)}")

    # 6. Check concept pages in nav
    print(f"\n{BOLD}Checking concept pages...{RESET}")
    missing_concepts, extra_concepts = check_concept_pages(docs_path, mkdocs_path)
    if missing_concepts:
        for c in missing_concepts:
            issues.append(f"Concept file not in nav: {c}")
        print(f"  {RED}✗{RESET} {len(missing_concepts)} concept files not in nav")
    else:
        concept_count = len(list((docs_path / 'concepts').glob('*.md')))
        print(f"  {GREEN}✓{RESET} All {concept_count} concept files in nav")
    if extra_concepts:
        for c in extra_concepts:
            issues.append(f"Concept in nav but no file: {c}")

    # 7. Check CLA pages in nav
    print(f"\n{BOLD}Checking CLA knowledge base...{RESET}")
    missing_cla, extra_cla = check_cla_pages(docs_path, mkdocs_path)
    if missing_cla:
        for c in missing_cla:
            issues.append(f"CLA file not in nav: {c}")
        print(f"  {RED}✗{RESET} {len(missing_cla)} CLA files not in nav")
    else:
        cla_count = len(list((docs_path / 'principles' / 'cla').glob('*.md')))
        print(f"  {GREEN}✓{RESET} All {cla_count} CLA files in nav")
    if extra_cla:
        for c in extra_cla:
            issues.append(f"CLA page in nav but no file: {c}")

    # 8. Check for orphan pages
    print(f"\n{BOLD}Checking for orphan pages...{RESET}")
    orphans = check_orphan_pages(docs_path, mkdocs_path)
    if orphans:
        for o in orphans:
            warnings.append(f"Orphan page (not in nav): {o}")
        print(f"  {YELLOW}!{RESET} {len(orphans)} orphan pages found")
        for o in orphans:
            print(f"    - {o}")
    else:
        print(f"  {GREEN}✓{RESET} No orphan pages")

    # 9. Check internal links
    print(f"\n{BOLD}Checking internal links...{RESET}")
    broken = check_internal_links(docs_path)
    if broken:
        for file, line, text, target in broken:
            issues.append(f"{file}:{line}: Broken link [{text}]({target})")
        print(f"  {RED}✗{RESET} {len(broken)} broken links found")
        for file, line, text, target in broken:
            print(f"    {file}:{line}: [{text}]({target})")
    else:
        print(f"  {GREEN}✓{RESET} All internal links valid")

    # 10. Check for flagged content
    print(f"\n{BOLD}Checking for flagged content...{RESET}")
    flagged = check_flagged_content(docs_path)
    if flagged:
        for file, line, marker, context in flagged:
            warnings.append(f"{file}:{line}: {marker} - {context}")
        print(f"  {YELLOW}!{RESET} {len(flagged)} flagged items found")
        for file, line, marker, context in flagged:
            print(f"    {file}:{line}: {context}")
    else:
        print(f"  {GREEN}✓{RESET} No flagged content")

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
    print()

    return len(issues)

if __name__ == '__main__':
    exit(main())
