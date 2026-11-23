# Contributing to the NE-PGCoE Workflow Catalog

## Workflow developers

Submit your workflow through the **contributor survey** (link TBD) or open a GitHub issue with the
"Add a workflow" form. Theiagen curators add the information to the master Google Sheet, assign
Workflow and Capability IDs, and the site is rebuilt from the sheet.

## Curators

1. Edit the master Google Sheet (Catalog tab). Pick values from the Controlled Vocabularies tab;
   separate multiple values with `, `.
2. Mark anything unconfirmed with `[verify]` and anything missing with `[to be completed]`.
   Cite sources as `[R#]` matching the References tab.
3. Export to the repo (see README, "Updating the catalog from the sheet") and open a pull request.
4. Fix any **errors** in the build report. Warnings are fine for drafts.
5. Before a version is called final, run `python scripts/build_catalog.py --strict`.

New organism? Add it to the sheet's Organisms tab first (group, general-purpose flag, NCBI Taxonomy ID).
The Catalog's C02 dropdown and the build both check against that list.
