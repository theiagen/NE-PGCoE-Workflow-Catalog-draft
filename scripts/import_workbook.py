#!/usr/bin/env python3
"""Convert the catalog Google Sheet (downloaded as .xlsx) into the repo's CSV files.

Usage:
    python scripts/import_workbook.py PGCoE_Pipeline_Inventory_Metadata_Schema_draftv0.8.xlsx

In Google Sheets: File -> Download -> Microsoft Excel (.xlsx). Then run this script.
It overwrites:
    data/catalog.csv          <- "Catalog" tab
    data/vocabularies.csv     <- "Controlled Vocabularies" tab
    data/references.csv       <- "References" tab
    data/organisms.csv        <- "Organisms" tab (controlled C02 list with group)
    data/source.json          <- workbook version from the "README" tab

No Python? You can instead download each tab as CSV (File -> Download -> CSV with that
tab open) and upload it over the matching file in data/ on GitHub.
"""
import csv
import json
import sys
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
TABS = {
    "Catalog": "catalog.csv",
    "Controlled Vocabularies": "vocabularies.csv",
    "References": "references.csv",
    "Organisms": "organisms.csv",
}


def clean(v):
    if v is None:
        return ""
    return str(v).strip()


def main(path):
    wb = openpyxl.load_workbook(path, data_only=True, read_only=True)
    for tab, out in TABS.items():
        if tab not in wb.sheetnames:
            sys.exit(f"Tab '{tab}' not found. Tabs in this file: {', '.join(wb.sheetnames)}")
        rows = [[clean(c) for c in r] for r in wb[tab].iter_rows(values_only=True)]
        rows = [r for r in rows if any(r)]
        # trim empty trailing columns (based on the header row) and empty rows
        header = rows[0]
        width = max(i + 1 for i, h in enumerate(header) if h) if any(header) else 0
        rows = [r[:width] for r in rows if any(r[:width])]
        with open(DATA / out, "w", newline="", encoding="utf-8") as fh:
            csv.writer(fh).writerows(rows)
        print(f"Wrote data/{out}: {len(rows) - 1} rows")

    version = ""
    if "README" in wb.sheetnames:
        for r in wb["README"].iter_rows(values_only=True):
            if clean(r[0]).lower() == "version":
                version = clean(r[1])
                break
    (DATA / "source.json").write_text(json.dumps({"workbook": Path(path).name, "version": version}, indent=2) + "\n")
    print(f"Source version: {version or '(not found)'}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
