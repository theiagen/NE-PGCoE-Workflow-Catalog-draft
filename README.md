# NE-PGCoE Workflow Catalog
**View the catalog:** https://theiagen.github.io/NE-PGCoE-Workflow-Catalog-draft/

A guided, searchable catalog that helps public health labs find open-source bioinformatics
workflows that fit their organism, sequencing data and computing setup.

> **Status:** working draft built from catalog sheet **v0.8 (draft)**.

## Where the data comes from

The Google Sheet *PGCoE_Pipeline_Inventory_Metadata_Schema* is the master copy. Its tabs are saved
here as CSV files; the site is built from them.

| File | Sheet tab | Notes |
|---|---|---|
| `data/catalog.csv` | Catalog | One row per workflow x organism (capability). Columns matched by field code (W01-W07, C01-C09) |
| `data/vocabularies.csv` | Controlled Vocabularies | Allowed values for every multi-select field |
| `data/references.csv` | References | `[R#]` citations become linked footnotes on the site |
| `data/organisms.csv` | Organisms | Controlled list for C02: group (Virus / Bacteria / Any), general-purpose flag, NCBI Taxonomy ID |
| `data/source.json` | README (version) | Version shown on the site |

## Updating the catalog from the sheet (the routine task)

**Option A (no Python):** in Google Sheets, open the **Catalog** tab → *File → Download → CSV*.
On GitHub, open `data/catalog.csv` → *Upload / replace* with the downloaded file → commit to a branch → open a pull request.
Repeat for the other tabs (Controlled Vocabularies, References, Organisms) only if they changed. Update the version in `data/source.json`.

**Option B (one command):** *File → Download → Microsoft Excel (.xlsx)*, then
```bash
pip install -r requirements.txt
python scripts/import_workbook.py ~/Downloads/PGCoE_Pipeline_Inventory_Metadata_Schema_draftv0.9.xlsx
python scripts/build_catalog.py
```

Either way, the pull request runs the checks and posts a **build report** (errors, warnings and how many
`[verify]` / `[to be completed]` items remain, by workflow) on the GitHub Actions run page.
Merging to `main` publishes the site.

## What the checks enforce

- **Errors (block the update):** a required column or value is missing; a workflow's W-columns differ between its rows; a duplicate capability ID; a value not in the controlled vocabulary; a W07 value outside Yes / No (some optional features incompatible) / No; an organism not on the Organisms tab.
- **Warnings (allowed in drafts):** `[verify]` / `[to be completed]` markers, empty limitations, `;` used as a separator.
- `python scripts/build_catalog.py --strict` also fails on any remaining `[verify]` / `[to be completed]`. Use it before calling a version final.

## Run it locally

```bash
python scripts/build_catalog.py   # standard library only
open site/index.html              # or double-click; no server needed
```

## The site

`site/index.html` is plain HTML/CSS/JS reading `site/catalog.js`; no frameworks, so it can move to pgcoe.github.io as-is. Users fill in one sentence ("I have [pathogen] data from [platform] and want to run it [where]"), can search by name or tool, and pick what they need the workflow to do. More filters cover sample type, library strategy, input data type, developer and offline use. Each workflow opens a detail panel with one expandable row per organism: outputs, sample types, library strategies, tools, known limitations and linked sources.

## Ownership

Built by Theiagen Genomics for the Northeast PGCoE (Annotated Pipeline Inventory project). The catalog will be handed off to PGCoE at the end of the project; see [CONTRIBUTING.md](CONTRIBUTING.md) for how workflows are added and how the catalog is updated.

## License

Licensed under the GNU General Public License v3.0 (GPL-3.0); see the LICENSE file in this repository. Each workflow listed in the catalog keeps its own license.

## Disclaimer

Listing is not an endorsement. Labs must review source documentation and validate any workflow
before clinical or public health use to demonstrate it is fit-for-purpose.
