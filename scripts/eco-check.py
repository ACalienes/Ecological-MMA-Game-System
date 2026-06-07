#!/usr/bin/env python3
"""Ecological-principles checker for game pages.

Audits every docs/games/*.md against the mechanically checkable subset of
ECOLOGICAL_PSYCHOLOGY_AUDIT.md Section 4 ("Rules for Our Logic Moving
Forward"). This is the objective tier; the judgment tier (does the
constraint afford rather than prescribe, does the class validate R5)
needs human/agent review and the mat.

Checks (rule numbers from the audit doc):
  E1  (rule 1)  Live system: page includes an adaptive opponent AND the
                perimeter/boundary as live constraints.
  E4  (rule 4)  Named attunement: a "What to Read" block exists and names
                at least one perceptual channel (haptic/felt load, visual,
                proprioceptive), not vague "see openings".
  E5  (rule 5)  Observable realized win: outcomes carry an observable
                proof (a 3s hold, a count/clock, a concrete terminal event).
  E7  (rule 7)  Loop intact: no level removes the live opponent
                (no shadow/unopposed/static-drill language).
  E10 (rule 10) Order parameter: a "What we measure" block exists.
  E19 (rule 19) Information over instruction: constraints->affordances
                analysis present (the emma-flow in the CLA block).
  T   (house)   Threshold discipline: "as long as possible" is banned.

Exit code = number of games with FAIL-level findings.
Usage: python3 scripts/eco-check.py [--verbose]
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GAMES_DIR = ROOT / "docs" / "games"

GREEN, RED, YELLOW, RESET, BOLD = '\033[92m', '\033[91m', '\033[93m', '\033[0m', '\033[1m'

PERCEPTUAL_TERMS = (
    r"\b(felt|load|weight|pressure|haptic|proprio|contact|grip|pull|push|drag"
    r"|optic|visual|flow|angle|tension|resistance|expansion|rate|tau|shoulder"
    r"|hip|motion|rhythm|base|balance|lean|commit)\b|τ"
)
OBSERVABLE_TERMS = (
    r"(held 3|3 ?s\b|3 seconds|the count|a count|clock|seconds\b"
    r"|touch(es|ing)? the (mat|ground|floor)|to the mat|stands? (up|fully|for)"
    r"|out of bounds|perimeter|land(s|ed|ing)?\b|clean (strike|shot|hit|counter)"
    r"|knock(down|ed)|reverse|escape|pin|takedown|sweep)"
)
DECOMPOSED_TERMS = r"\b(shadow ?box|unopposed|no partner|without a partner|static drill|in the air)\b"
BANNED = "as long as possible"
# a mention that BANS the phrase is compliance, not violation
BANNED_NEGATED = re.compile(r"(never|not|no)[^.]{0,40}[\"“]as long as possible", re.I)


def section(text, label):
    """Return the text between this emma-glabel and the next one."""
    pattern = rf'emma-glabel">{label}</p>(.*?)(?=<p class="emma-glabel"|\Z)'
    m = re.search(pattern, text, re.S)
    return m.group(1) if m else None


def check_game(path):
    text = path.read_text()
    findings = []  # (level, code, message)

    is_format = bool(re.search(r"^\s*- format\s*$", text, re.M)) or "format)" in text[:600].lower()
    if is_format:
        # format overlays are meta-pages; only the house threshold rule applies
        if BANNED in text.lower() and not BANNED_NEGATED.search(text):
            findings.append(("FAIL", "T", f'banned phrase "{BANNED}"'))
        return findings, True

    # E1 live system: opponent roles + perimeter
    has_roles = "emma-matchup" in text or "emma-fighter" in text
    has_boundary = re.search(r"perimeter|boundary", text, re.I)
    if not has_roles:
        findings.append(("FAIL", "E1", "no opponent matchup block (fighter-opponent system missing)"))
    if not has_boundary:
        findings.append(("FAIL", "E1", "no live boundary/perimeter constraint"))

    # E4 named attunement
    read_block = section(text, "What to Read")
    if read_block is None:
        findings.append(("FAIL", "E4", 'no "What to Read" attunement block'))
    elif not re.search(PERCEPTUAL_TERMS, read_block, re.I):
        findings.append(("FAIL", "E4", "attunement block names no perceptual variable (vague reading)"))

    # E5 observable win
    outcomes = section(text, "How to Win") or ""
    if not outcomes:
        findings.append(("FAIL", "E5", 'no "How to Win" outcomes block'))
    elif not re.search(OBSERVABLE_TERMS, outcomes, re.I):
        findings.append(("WARN", "E5", "outcomes carry no explicit observable proof (3s hold / count / concrete event)"))

    # E7 loop intact
    if re.search(DECOMPOSED_TERMS, text, re.I):
        findings.append(("FAIL", "E7", "a level appears to remove the live opponent"))

    # E10 order parameter
    if "What we measure" not in text:
        findings.append(("WARN", "E10", "no order-parameter block (What we measure)"))

    # E19 constraints->affordances analysis
    if "Constraints → Affordances" not in text and "Constraints &rarr; Affordances" not in text:
        findings.append(("WARN", "E19", "no constraints->affordances analysis"))

    # T threshold discipline (a negated mention is compliance, not violation)
    if BANNED in text.lower() and not BANNED_NEGATED.search(text):
        findings.append(("FAIL", "T", f'banned phrase "{BANNED}"'))

    return findings, bool(is_format)


def main():
    verbose = "--verbose" in sys.argv
    results = {}
    for path in sorted(GAMES_DIR.glob("*.md")):
        if path.name == "index.md":
            continue
        findings, is_format = check_game(path)
        results[path.stem] = (findings, is_format)

    failed = 0
    clean = 0
    print(f"\n{BOLD}=== Ecological-principles check (mechanical tier) ==={RESET}\n")
    for slug, (findings, is_format) in results.items():
        fails = [f for f in findings if f[0] == "FAIL"]
        warns = [f for f in findings if f[0] == "WARN"]
        tag = " (format page)" if is_format else ""
        if fails:
            failed += 1
            print(f"  {RED}✗{RESET} {slug}{tag}")
        elif warns:
            print(f"  {YELLOW}!{RESET} {slug}{tag}")
        else:
            clean += 1
            if verbose:
                print(f"  {GREEN}✓{RESET} {slug}{tag}")
        for level, code, msg in findings:
            color = RED if level == "FAIL" else YELLOW
            print(f"      {color}{level}{RESET} [{code}] {msg}")

    total = len(results)
    print(f"\n{BOLD}{clean}/{total} clean · "
          f"{sum(1 for _, (f, _x) in results.items() if any(x[0]=='WARN' for x in f) and not any(x[0]=='FAIL' for x in f))} warn-only · "
          f"{failed} with failures{RESET}")
    print(f"\nScope note: this is the OBJECTIVE tier only. Rules 2, 3, 6, 9, 11-18")
    print(f"(afford-vs-prescribe, ratio scaling, problem-repetition, transfer) need")
    print(f"judgment review, and R5 needs the mat. See ECOLOGICAL_PSYCHOLOGY_AUDIT.md §4.\n")
    return failed


if __name__ == "__main__":
    exit(main())
