#!/usr/bin/env python3
"""Validate the catalog CSVs and build the site's data file.

Usage:
    python scripts/build_catalog.py            # validate, print readiness report, write site/catalog.js
    python scripts/build_catalog.py --check    # validate + report only (used on pull requests)
    python scripts/build_catalog.py --strict   # also fail if any [verify] / [to be completed] remain

Inputs (data/):
    catalog.csv        One row per workflow x capability (the sheet's "Catalog" tab)
    vocabularies.csv   Controlled vocabularies (the sheet's "Controlled Vocabularies" tab)
    references.csv     Sources cited as [R#] (the sheet's "References" tab)
    organisms.csv      The sheet's "Organisms" tab: C02 values with group and general-purpose flag
    source.json        Workbook version shown on the site

Columns are matched by their field code (W01...W07, C01...C08), so header wording can change.

ERRORS (build fails): missing required columns or values, a workflow whose W-columns differ
between rows, duplicate capability IDs, a multi-select value not in the vocabulary, a W07 value
not in its list, an organism (C02) not on the Organisms tab.
WARNINGS (build passes): [verify] / [to be completed] markers, empty limitations, ';' used as
a separator.
"""
import argparse
import csv
import datetime as dt
import json
import os
import re
import sys
from collections import Counter, OrderedDict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
SITE = ROOT / "site"

WORKFLOW_FIELDS = ["W01", "W02", "W03", "W04", "W05", "W06", "W07"]
CAPABILITY_FIELDS = ["C01", "C02", "C03", "C04", "C05", "C06", "C07", "C08", "C09"]
REQUIRED = ["W01", "W02", "W03", "W04", "W06", "W07", "C01", "C02", "C03", "C04", "C05", "C06", "C07"]
MULTI = {"W06": "Execution environment", "C03": "Sample type", "C04": "Library strategy",
         "C05": "Sequencing platform", "C06": "Input data type", "C07": "Analysis outputs"}
W07_DEFAULT = ["Yes", "No (some optional features incompatible)", "No"]
VERIFY, TBC = "[verify]", "[to be completed]"


def read_csv(name):
    with open(DATA / name, newline="", encoding="utf-8-sig") as fh:
        return list(csv.reader(fh))


def field_code(header):
    m = re.match(r"^\s*([WC]\d\d)\b", header or "")
    if m:
        return m.group(1)
    if "tools" in (header or "").lower():
        return "C09"  # older sheets: unnumbered "Tools (Summary)" column
    return None


def load_vocab():
    rows = read_csv("vocabularies.csv")
    vocab = {}
    for col, head in enumerate(rows[0]):
        m = re.search(r"\(([WC]\d\d)\)", head)
        if not m:
            continue
        vals = [r[col].strip() for r in rows[1:] if col < len(r) and r[col].strip()]
        vocab[m.group(1)] = [v for v in vals if not v.lower().startswith("all lists")]
    return vocab


def split_multi(cell, allowed):
    """Split a multi-select cell. Separators: ',' or ';'. Values that themselves contain
    commas (e.g., 'Single-target amplicon (e.g., 16S, ITS)') are re-joined by matching the
    vocabulary. Returns (values, unknown_tokens)."""
    tokens = [t.strip().strip('"').strip() for t in re.split(r"[,;]", cell or "")]
    tokens = [t for t in tokens if t]
    out, unknown, i = [], [], 0
    while i < len(tokens):
        for j in range(len(tokens), i, -1):
            cand = ", ".join(tokens[i:j])
            if cand in allowed:
                out.append(cand)
                i = j
                break
        else:
            unknown.append(tokens[i])
            i += 1
    return out, unknown


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true", help="validate and report only")
    ap.add_argument("--strict", action="store_true", help="fail on [verify] / [to be completed]")
    args = ap.parse_args()

    errors, warnings = [], []
    vocab = load_vocab()
    for code, label in MULTI.items():
        if code not in vocab:
            errors.append(f"vocabularies.csv: no column for {code} ({label})")

    organisms = {r[0]: {"group": r[1], "general": r[2].upper() == "Y"} for r in read_csv("organisms.csv")[1:] if r and r[0]}
    w07_allowed = vocab.get("W07") or W07_DEFAULT
    c02_allowed = vocab.get("C02") or list(organisms)
    refs = OrderedDict()
    for r in read_csv("references.csv")[1:]:
        if r and r[0].strip():
            refs[r[0].strip()] = {"source": r[1], "type": r[2], "url": r[3] if r[3].startswith("http") else "", "location": r[3]}
    source = json.loads((DATA / "source.json").read_text()) if (DATA / "source.json").exists() else {}

    rows = read_csv("catalog.csv")
    header = rows[0]
    col = {}
    for i, h in enumerate(header):
        code = field_code(h)
        if code and code not in col:
            col[code] = i
    for code in WORKFLOW_FIELDS + CAPABILITY_FIELDS:
        if code not in col:
            (errors if code in REQUIRED else warnings).append(f"catalog.csv: no column for {code}")
    if errors:
        report(errors, warnings, {}, 0)
        sys.exit(1)

    def get(r, code):
        i = col.get(code)
        return r[i].strip() if i is not None and i < len(r) else ""

    workflows = OrderedDict()
    seen_cap = set()
    counts = Counter()
    by_workflow_flags = Counter()

    for n, r in enumerate(rows[1:], start=2):
        if not any(c.strip() for c in r):
            continue
        where = f"catalog.csv row {n}"
        for code in REQUIRED:
            if not get(r, code):
                errors.append(f"{where}: {code} is empty")
        wid, cid = get(r, "W01"), get(r, "C01")
        if cid in seen_cap:
            errors.append(f"{where}: duplicate capability ID {cid}")
        seen_cap.add(cid)

        # workflow-level values must match on every row of the same workflow
        wvals = tuple(get(r, c) for c in WORKFLOW_FIELDS[1:])
        if wid in workflows and workflows[wid]["_w"] != wvals:
            diff = [WORKFLOW_FIELDS[k + 1] for k, (a, b) in enumerate(zip(workflows[wid]["_w"], wvals)) if a != b]
            errors.append(f"{where}: {wid} has different {', '.join(diff)} than its earlier rows")

        parsed = {}
        for code in MULTI:
            cell = get(r, code)
            vals, unknown = split_multi(cell, vocab.get(code, []))
            for u in unknown:
                errors.append(f"{where} ({cid}): {code} value '{u}' is not in the {MULTI[code]} vocabulary")
            if ";" in cell:
                warnings.append(f"{where} ({cid}): {code} uses ';' as a separator; use ', ' to match the rest of the sheet")
            parsed[code] = vals

        w07 = get(r, "W07")
        if w07 and w07 not in w07_allowed and wid not in workflows:
            errors.append(f"{wid}: W07 '{w07}' is not one of: {' / '.join(w07_allowed)}")

        organism = get(r, "C02")
        if organism and organism not in c02_allowed:
            errors.append(f"{where} ({cid}): organism '{organism}' is not on the Organisms tab (C02 list)")
        elif organism and organism not in organisms:
            warnings.append(f"{where} ({cid}): organism '{organism}' has no group in organisms.csv (shown under 'Other')")
        org_info = organisms.get(organism, {"group": "Other", "general": False})

        lim = get(r, "C08")
        row_text = " ".join(r)
        n_verify, n_tbc = row_text.count(VERIFY), row_text.count(TBC)
        counts["verify"] += n_verify
        counts["tbc"] += n_tbc
        if not lim:
            counts["empty_lim"] += 1
            warnings.append(f"{where} ({cid}): C08 Known limitations is empty")
        by_workflow_flags[wid] += n_verify + n_tbc + (0 if lim else 1)

        if wid not in workflows:
            workflows[wid] = {
                "_w": wvals,
                "id": wid,
                "slug": slug(wid),
                "name": get(r, "W02"),
                "developer": get(r, "W03"),
                "repository": get(r, "W04"),
                "documentation": get(r, "W05"),
                "execution": parsed["W06"],
                "internet": w07,
                "capabilities": [],
            }
        workflows[wid]["capabilities"].append({
            "id": cid,
            "organism": organism,
            "group": org_info["group"],
            "general": org_info["general"],
            "sample_types": parsed["C03"],
            "library": parsed["C04"],
            "platforms": parsed["C05"],
            "inputs": parsed["C06"],
            "outputs": parsed["C07"],
            "limitations": lim,
            "tools": get(r, "C09"),
            "pending": n_verify + n_tbc + (0 if lim else 1),
        })

    if args.strict and (counts["verify"] or counts["tbc"] or counts["empty_lim"]):
        errors.append(f"--strict: {counts['verify']} [verify], {counts['tbc']} [to be completed], "
                      f"{counts['empty_lim']} empty limitations remain")

    report(errors, warnings, counts, len(workflows), by_workflow_flags, len(seen_cap))
    if errors:
        sys.exit(1)
    if args.check:
        return

    for w in workflows.values():
        w.pop("_w")
        w["pending"] = by_workflow_flags[w["id"]]
    payload = {
        "generated": dt.date.today().isoformat(),
        "source": source,
        "vocab": {MULTI[k]: vocab[k] for k in MULTI if k in vocab},
        "references": refs,
        "workflows": list(workflows.values()),
    }
    SITE.mkdir(exist_ok=True)
    text = json.dumps(payload, indent=1, ensure_ascii=False)
    # catalog.js lets index.html work on GitHub Pages *and* when opened as a local file
    (SITE / "catalog.js").write_text(f"window.CATALOG = {text};\n", encoding="utf-8")
    print(f"\nWrote site/catalog.js")


def report(errors, warnings, counts, n_workflows, by_wf=None, n_caps=0):
    lines = ["## Catalog build report", ""]
    if n_workflows:
        lines.append(f"- {n_workflows} workflows, {n_caps} capability rows")
    if counts:
        lines.append(f"- Still to finalize: {counts['verify']} `[verify]`, {counts['tbc']} `[to be completed]`, "
                     f"{counts['empty_lim']} empty limitations")
        if by_wf:
            for wid, n in by_wf.most_common():
                if n:
                    lines.append(f"  - {wid}: {n}")
    lines.append(f"- Errors: {len(errors)}  |  Warnings: {len(warnings)}")
    if errors:
        lines += ["", "### Errors (must fix)"] + [f"- {e}" for e in errors]
    if warnings:
        lines += ["", "### Warnings"] + [f"- {w}" for w in warnings]
    text = "\n".join(lines)
    print(text, file=sys.stderr if errors else sys.stdout)
    summary = os.environ.get("GITHUB_STEP_SUMMARY")  # shows the report on the GitHub Actions run page
    if summary:
        with open(summary, "a", encoding="utf-8") as fh:
            fh.write(text + "\n")


if __name__ == "__main__":
    main()
