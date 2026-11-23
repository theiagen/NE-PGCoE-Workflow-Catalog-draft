# Changelog

## v0.5.0 (2026-11-23)
- Site returned to the v0.1 layout (sentence filter, search, analysis chips, cards, side panel), now using the real sheet data: per-organism detail rows, three internet tiers, More filters for sample type, library strategy, input data type, developer and offline

## v0.4.0 (2026-11-23)
- Spelling standardized to "Catalog" to match the repository name (NE-PGCoE-Workflow-Catalog); site and README titles updated
- CODEOWNERS paths updated to the current folder layout

## v0.3.0 (2026-11-20)
- Data refreshed from the cleaned catalog sheet (v0.8 data cleanup): W07 three-tier values, Organisms tab (C02 list), C09 Main tools
- `import_workbook.py` also exports the Organisms tab; `organisms.csv` is now sheet-owned
- Build errors on W07 values or organisms outside their lists; reads tools from C09
- Site shows the three internet tiers; offline filter includes "No (some optional features incompatible)"

## v0.2.0 (2026-11-20)
- Data now comes from the catalog Google Sheet (v0.8 draft): `data/catalog.csv`, `vocabularies.csv`, `references.csv`
- New `scripts/import_workbook.py` (.xlsx → CSVs); `build_catalog.py` rewritten for the sheet's W/C field codes, with a build report of remaining `[verify]` / `[to be completed]` items and a `--strict` mode
- Site rebuilt as a guided three-question finder with progress bar, refinements, and per-organism detail rows with linked sources
- Removed the YAML-per-workflow data layer and sample entries from v0.1
- Issue form aligned with sheet fields and vocabularies

## v0.1.0 (2026-11-20)
- Initial skeleton with illustrative sample entries
