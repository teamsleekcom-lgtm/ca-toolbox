#!/usr/bin/env python3
"""Documentation check for CA Toolbox. Read-only. Run from the project root."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REQUIRED = [
    "AGENTS.md",
    "README.md",
    "docs/status.md",
    "docs/handoff.md",
    "docs/decisions.md",
    "reviewflags.md",
]
LINK = re.compile(r"\]\(([^)#]+)\)")

failures: list[str] = []
for rel in REQUIRED:
    if not (ROOT / rel).exists():
        failures.append(f"missing {rel}")

for rel in REQUIRED:
    path = ROOT / rel
    if not path.exists():
        continue
    text = path.read_text(encoding="utf-8", errors="replace")
    for target in LINK.findall(text):
        target = target.strip()
        if not target or target.startswith(("http://", "https://", "mailto:", "tel:")):
            continue
        if any(token in target for token in ("<", ">", "...", "*")):
            continue
        if not (path.parent / target).resolve().exists():
            failures.append(f"broken link in {rel}: {target}")

status = ROOT / "docs" / "status.md"
if status.exists():
    lines = len(status.read_text(encoding="utf-8", errors="replace").splitlines())
    if lines > 120:
        failures.append(f"docs/status.md is {lines} lines (limit 120)")

if failures:
    for failure in failures:
        print(f"FAIL  {failure}")
    print(f"\n{len(failures)} failure(s).")
    sys.exit(1)
print("docs guard: PASS")
