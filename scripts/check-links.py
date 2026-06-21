#!/usr/bin/env python3
"""Raw-HTML-aware internal link checker for the built MkDocs site.

MkDocs' own validation only rewrites/validates Markdown links. Links written as
raw HTML (`<a href="...">`, `<img src="...">`) are passed through untouched, so a
bad one ships as a 404 with no build error. This walks the *built* site and
verifies every internal href/src resolves to a real file, catching exactly that
class of bug.

    python3 scripts/check-links.py [site_dir]   # default: ./site

Exits 1 if any internal link is broken.
"""

import re
import sys
from pathlib import Path
from urllib.parse import unquote, urldefrag

SITE = Path(sys.argv[1] if len(sys.argv) > 1 else "site").resolve()
ATTR = re.compile(r'(?:href|src)\s*=\s*"([^"]+)"', re.I)
SCRIPT_STYLE = re.compile(r"<(script|style)\b.*?</\1>", re.I | re.S)
EXTERNAL = ("http://", "https://", "//", "mailto:", "tel:", "data:", "javascript:")


def resolves(target: Path) -> bool:
    if target.is_file():
        return True
    if target.is_dir() and (target / "index.html").is_file():
        return True
    return False


def main() -> int:
    if not SITE.is_dir():
        print(f"site dir not found: {SITE} (run `mkdocs build` first)")
        return 1
    broken = []
    checked = 0
    for html in SITE.rglob("*.html"):
        text = html.read_text(encoding="utf-8", errors="ignore")
        text = SCRIPT_STYLE.sub("", text)  # ignore client-side template literals
        for raw in ATTR.findall(text):
            url, _ = urldefrag(raw)
            if not url or url.startswith("#") or url.lower().startswith(EXTERNAL):
                continue
            if "${" in url or "{{" in url:  # unrendered template placeholder
                continue
            checked += 1
            rel = unquote(url.split("?")[0])
            base = SITE if rel.startswith("/") else html.parent
            target = (base / rel.lstrip("/")).resolve()
            # stay inside the site tree; ignore odd traversals
            try:
                target.relative_to(SITE)
            except ValueError:
                continue
            if not resolves(target):
                broken.append((html.relative_to(SITE), url))
    if broken:
        print(f"BROKEN internal links ({len(broken)} of {checked} checked):")
        for src, url in sorted(set(broken)):
            print(f"  {src}  ->  {url}")
        return 1
    print(f"OK: {checked} internal links across {sum(1 for _ in SITE.rglob('*.html'))} pages all resolve.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
