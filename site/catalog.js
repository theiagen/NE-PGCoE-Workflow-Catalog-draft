window.CATALOG = {
 "generated": "2026-11-23",
 "source": {
  "workbook": "PGCoE_Pipeline_Inventory_Metadata_Schema_draftv0.8.xlsx",
  "version": "v0.8 (draft)"
 },
 "vocab": {
  "Execution environment": [
   "Terra",
   "Local workstation (command line)",
   "Local workstation (GUI)",
   "HPC (SLURM or other scheduler)",
   "AWS",
   "Google Cloud (not Terra)",
   "Azure",
   "Galaxy",
   "Web browser (no install)"
  ],
  "Sample type": [
   "Isolate (pure culture)",
   "Primary clinical specimen",
   "Wastewater / environmental",
   "Mixed / metagenomic",
   "Not applicable (downstream analysis)"
  ],
  "Library strategy": [
   "Shotgun WGS",
   "Tiled amplicon",
   "Hybrid capture / targeted panel",
   "Single-target amplicon (16S / ITS)",
   "Shotgun metagenomic",
   "Metatranscriptomic",
   "Not applicable (downstream analysis)"
  ],
  "Sequencing platform": [
   "Illumina",
   "Oxford Nanopore (ONT)",
   "Clear Labs",
   "PacBio",
   "Ion Torrent",
   "Element",
   "MGI / Complete Genomics",
   "Not applicable (downstream analysis)"
  ],
  "Input data type": [
   "Paired-end short read",
   "Single-end short read",
   "Long read",
   "Hybrid (short + long)",
   "Assembly / consensus FASTA",
   "Multi-sequence set or alignment (FASTA)",
   "Phylogenetic tree",
   "Metadata / epidemiological tables",
   "Typing or analysis results (tabular)"
  ],
  "Analysis outputs": [
   "QC",
   "De novo assembly",
   "Consensus genome",
   "Species identification",
   "MLST",
   "cgMLST / wgMLST",
   "Subtype / serotype / other typing scheme",
   "Variant calling",
   "Within-host (intra-host) variant calling",
   "Lineage / clade assignment",
   "Variant / lineage abundance (mixed samples)",
   "AMR genotype",
   "Virulence genes",
   "Stress response genes",
   "Plasmid / mobile genetic element detection",
   "Drug-resistance prediction",
   "Phylogeny / SNP distance",
   "Bayesian phylogenetics / phylodynamics",
   "Genomic cluster detection / monitoring",
   "Transmission inference",
   "Phylogeny-trait association",
   "Sequence subsampling / sampling design",
   "Data integration / linkage",
   "Metagenomic classification"
  ]
 },
 "references": {
  "R1": {
   "source": "PGCoE Network - Bioinformatics Workflows",
   "type": "Primary (project source)",
   "url": "https://pgcoe.github.io/workflows.html",
   "location": "https://pgcoe.github.io/workflows.html"
  },
  "R2": {
   "source": "External: Annotated Pipeline Inventory, meeting notes 2026-10-27 (Theiagen Notion)",
   "type": "Primary (project source)",
   "url": "",
   "location": "Theiagen Notion, NE-PGCOE-07 meeting notes"
  },
  "R3": {
   "source": "NE-PGCOE-07 | Annotated Pipeline Inventory initiative page (Theiagen Notion)",
   "type": "Primary (project source)",
   "url": "",
   "location": "Theiagen Notion, Initiatives database"
  },
  "R4": {
   "source": "Theiagen Public Health Bioinformatics (PHB) repository",
   "type": "Primary (workflow source)",
   "url": "https://github.com/theiagen/public_health_bioinformatics",
   "location": "https://github.com/theiagen/public_health_bioinformatics"
  },
  "R5": {
   "source": "NCBI Taxonomy",
   "type": "Secondary (external standard)",
   "url": "https://www.ncbi.nlm.nih.gov/taxonomy",
   "location": "https://www.ncbi.nlm.nih.gov/taxonomy"
  },
  "R6": {
   "source": "EDAM ontology",
   "type": "Secondary (external standard)",
   "url": "https://edamontology.org",
   "location": "https://edamontology.org"
  },
  "R7": {
   "source": "Public Health Alliance for Genomic Epidemiology (PHA4GE)",
   "type": "Secondary (community guidance)",
   "url": "https://pha4ge.org",
   "location": "https://pha4ge.org"
  },
  "R8": {
   "source": "TheiaCoV Workflow Series documentation, PHB v4.3.x",
   "type": "Primary (workflow source)",
   "url": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiacov/",
   "location": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiacov/"
  },
  "R9": {
   "source": "PHB documentation: Getting started on the command line",
   "type": "Primary (workflow source)",
   "url": "https://theiagen.github.io/public_health_bioinformatics/latest/getting_started/commandline/",
   "location": "https://theiagen.github.io/public_health_bioinformatics/latest/getting_started/commandline/"
  },
  "R10": {
   "source": "TheiaProk Workflow Series documentation, PHB v4.3.x",
   "type": "Primary (workflow source)",
   "url": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiaprok/",
   "location": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiaprok/"
  },
  "R11": {
   "source": "TheiaMeta documentation, PHB v4.3.x",
   "type": "Primary (workflow source)",
   "url": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiameta/",
   "location": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiameta/"
  }
 },
 "workflows": [
  {
   "id": "THEIACOV_ILLUMINA_PE",
   "slug": "theiacov-illumina-pe",
   "name": "TheiaCoV_Illumina_PE_PHB",
   "developer": "Theiagen Genomics",
   "repository": "https://github.com/theiagen/public_health_bioinformatics",
   "documentation": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiacov/",
   "execution": [
    "Terra",
    "Local workstation (command line)"
   ],
   "internet": "No (some optional features incompatible)",
   "capabilities": [
    {
     "id": "THEIACOV_ILLUMINA_PE-SC2",
     "organism": "SARS-CoV-2",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "[to be completed]",
     "tools": "QC, Kraken2, iVar (primer trim + consensus), iVar variants, VADR, Gene coverage, Pangolin, Nextclade",
     "pending": 1
    },
    {
     "id": "THEIACOV_ILLUMINA_PE-MPXV",
     "organism": "Monkeypox virus (mpox)",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Lineage / clade assignment"
     ],
     "limitations": "[to be completed]",
     "tools": "QC, Kraken2, iVar (primer trim + consensus), iVar variants, VADR, Gene coverage, Nextclade",
     "pending": 1
    },
    {
     "id": "THEIACOV_ILLUMINA_PE-HIV",
     "organism": "HIV",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Within-host (intra-host) variant calling",
      "Drug-resistance prediction"
     ],
     "limitations": "Requires matching primer version (v1/v2) [R8] [verify].",
     "tools": "QC, Kraken2, iVar (primer trim + consensus), iVar variants, quasitools HyDRA [verify]",
     "pending": 2
    },
    {
     "id": "THEIACOV_ILLUMINA_PE-WNV",
     "organism": "West Nile virus",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling"
     ],
     "limitations": "[to be completed]",
     "tools": "QC, Kraken2, iVar (primer trim + consensus), iVar variants, VADR",
     "pending": 1
    },
    {
     "id": "THEIACOV_ILLUMINA_PE-FLU",
     "organism": "Influenza",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Within-host (intra-host) variant calling",
      "Lineage / clade assignment",
      "Drug-resistance prediction"
     ],
     "limitations": "GenoFLU genotyping for H5 [R8]. Antiviral resistance limited to the configured amino-acid substitution list [R8]. Consensus and variants come from IRMA; iVar outputs are not produced for influenza [verify].",
     "tools": "QC, Kraken2, IRMA, ABRicate, Nextclade, VADR",
     "pending": 1
    },
    {
     "id": "THEIACOV_ILLUMINA_PE-RSVA",
     "organism": "RSV-A",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Within-host (intra-host) variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "[to be completed]",
     "tools": "QC, Kraken2, iVar (primer trim + consensus), iVar variants, VADR, Nextclade",
     "pending": 1
    },
    {
     "id": "THEIACOV_ILLUMINA_PE-RSVB",
     "organism": "RSV-B",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Within-host (intra-host) variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "[to be completed]",
     "tools": "QC, Kraken2, iVar (primer trim + consensus), iVar variants, VADR, Nextclade",
     "pending": 1
    },
    {
     "id": "THEIACOV_ILLUMINA_PE-MEASLES",
     "organism": "Measles virus",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "[to be completed]",
     "tools": "[to be completed]",
     "pending": 2
    },
    {
     "id": "THEIACOV_ILLUMINA_PE-MUMPS",
     "organism": "Mumps virus",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "[to be completed]",
     "tools": "[to be completed]",
     "pending": 2
    },
    {
     "id": "THEIACOV_ILLUMINA_PE-RUBELLA",
     "organism": "Rubella virus",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "[to be completed]",
     "tools": "[to be completed]",
     "pending": 2
    }
   ],
   "pending": 14
  },
  {
   "id": "THEIACOV_ILLUMINA_SE",
   "slug": "theiacov-illumina-se",
   "name": "TheiaCoV_Illumina_SE_PHB",
   "developer": "Theiagen Genomics",
   "repository": "https://github.com/theiagen/public_health_bioinformatics",
   "documentation": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiacov/",
   "execution": [
    "Terra",
    "Local workstation (command line)"
   ],
   "internet": "No (some optional features incompatible)",
   "capabilities": [
    {
     "id": "THEIACOV_ILLUMINA_SE-SC2",
     "organism": "SARS-CoV-2",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads (70-cycle kit).",
     "tools": "QC, Kraken2, iVar (primer trim + consensus), iVar variants, VADR, Gene coverage, Pangolin, Nextclade",
     "pending": 0
    },
    {
     "id": "THEIACOV_ILLUMINA_SE-MPXV",
     "organism": "Monkeypox virus (mpox)",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads (70-cycle kit).",
     "tools": "QC, Kraken2, iVar (primer trim + consensus), iVar variants, VADR, Gene coverage, Nextclade",
     "pending": 0
    },
    {
     "id": "THEIACOV_ILLUMINA_SE-WNV",
     "organism": "West Nile virus",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads (70-cycle kit).",
     "tools": "QC, Kraken2, iVar (primer trim + consensus), iVar variants, VADR",
     "pending": 0
    },
    {
     "id": "THEIACOV_ILLUMINA_SE-RSVA",
     "organism": "RSV-A",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads (70-cycle kit).",
     "tools": "QC, Kraken2, iVar (primer trim + consensus), iVar variants, VADR, Nextclade",
     "pending": 0
    },
    {
     "id": "THEIACOV_ILLUMINA_SE-RSVB",
     "organism": "RSV-B",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads (70-cycle kit).",
     "tools": "QC, Kraken2, iVar (primer trim + consensus), iVar variants, VADR, Nextclade",
     "pending": 0
    },
    {
     "id": "THEIACOV_ILLUMINA_SE-MEASLES",
     "organism": "Measles virus",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads (70-cycle kit).",
     "tools": "[to be completed]",
     "pending": 1
    },
    {
     "id": "THEIACOV_ILLUMINA_SE-MUMPS",
     "organism": "Mumps virus",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads (70-cycle kit).",
     "tools": "[to be completed]",
     "pending": 1
    },
    {
     "id": "THEIACOV_ILLUMINA_SE-RUBELLA",
     "organism": "Rubella virus",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads (70-cycle kit).",
     "tools": "[to be completed]",
     "pending": 1
    }
   ],
   "pending": 3
  },
  {
   "id": "THEIACOV_ONT",
   "slug": "theiacov-ont",
   "name": "TheiaCoV_ONT_PHB",
   "developer": "Theiagen Genomics",
   "repository": "https://github.com/theiagen/public_health_bioinformatics",
   "documentation": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiacov/",
   "execution": [
    "Terra",
    "Local workstation (command line)"
   ],
   "internet": "No (some optional features incompatible)",
   "capabilities": [
    {
     "id": "THEIACOV_ONT-SC2",
     "organism": "SARS-CoV-2",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R8]. Default Clair3 model is for R10.4.1 sup basecalling [R8].",
     "tools": "QC, Metabuli, ARTIC consensus, Clair3 variants, VADR, Gene coverage, Pangolin, Nextclade",
     "pending": 0
    },
    {
     "id": "THEIACOV_ONT-MPXV",
     "organism": "Monkeypox virus (mpox)",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R8]. Default Clair3 model is for R10.4.1 sup basecalling [R8].",
     "tools": "[to be completed]",
     "pending": 1
    },
    {
     "id": "THEIACOV_ONT-HIV",
     "organism": "HIV",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Within-host (intra-host) variant calling"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R8]. Default Clair3 model is for R10.4.1 sup basecalling [R8]. Requires matching primer version (v1/v2) [R8] [verify].",
     "tools": "QC, Metabuli, ARTIC consensus, Clair3 variants, quasitools HyDRA [verify]",
     "pending": 2
    },
    {
     "id": "THEIACOV_ONT-FLU",
     "organism": "Influenza",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Within-host (intra-host) variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R8]. Default Clair3 model is for R10.4.1 sup basecalling [R8]. Subtypes handled: H1N1, H3N2, H5N1, B/Victoria, B/Yamagata; GenoFLU genotyping for H5N1 [R8] [verify]. Antiviral resistance limited to the configured amino-acid substitution list [R8]. Antiviral resistance, GenoFLU and H5 Nextclade results are reported only in some cases [verify].",
     "tools": "IRMA, Nextclade, VADR, GenoFLU",
     "pending": 2
    },
    {
     "id": "THEIACOV_ONT-RSVA",
     "organism": "RSV-A",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R8]. Default Clair3 model is for R10.4.1 sup basecalling [R8].",
     "tools": "QC, Metabuli, ARTIC consensus, Clair3 variants, VADR, Nextclade",
     "pending": 0
    },
    {
     "id": "THEIACOV_ONT-RSVB",
     "organism": "RSV-B",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R8]. Default Clair3 model is for R10.4.1 sup basecalling [R8].",
     "tools": "QC, Metabuli, ARTIC consensus, Clair3 variants, VADR, Nextclade",
     "pending": 0
    },
    {
     "id": "THEIACOV_ONT-MEASLES",
     "organism": "Measles virus",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R8]. Default Clair3 model is for R10.4.1 sup basecalling [R8].",
     "tools": "[to be completed]",
     "pending": 1
    },
    {
     "id": "THEIACOV_ONT-MUMPS",
     "organism": "Mumps virus",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R8]. Default Clair3 model is for R10.4.1 sup basecalling [R8].",
     "tools": "[to be completed]",
     "pending": 1
    },
    {
     "id": "THEIACOV_ONT-RUBELLA",
     "organism": "Rubella virus",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R8]. Default Clair3 model is for R10.4.1 sup basecalling [R8].",
     "tools": "[to be completed]",
     "pending": 1
    }
   ],
   "pending": 8
  },
  {
   "id": "THEIACOV_CLEARLABS",
   "slug": "theiacov-clearlabs",
   "name": "TheiaCoV_ClearLabs_PHB",
   "developer": "Theiagen Genomics",
   "repository": "https://github.com/theiagen/public_health_bioinformatics",
   "documentation": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiacov/",
   "execution": [
    "Terra",
    "Local workstation (command line)"
   ],
   "internet": "No (some optional features incompatible)",
   "capabilities": [
    {
     "id": "THEIACOV_CLEARLABS-SC2",
     "organism": "SARS-CoV-2",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Primary clinical specimen",
      "Wastewater / environmental",
      "Mixed / metagenomic"
     ],
     "library": [
      "Shotgun WGS",
      "Tiled amplicon",
      "Hybrid capture / targeted panel",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Clear Labs"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Consensus genome",
      "Species identification",
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Known issues generating assemblies; many users run TheiaCoV_FASTA on Clear Labs assemblies instead [R8].",
     "tools": "QC, Kraken2, Pangolin, VADR, Nextclade",
     "pending": 0
    }
   ],
   "pending": 0
  },
  {
   "id": "THEIACOV_FASTA",
   "slug": "theiacov-fasta",
   "name": "TheiaCoV_FASTA_PHB",
   "developer": "Theiagen Genomics",
   "repository": "https://github.com/theiagen/public_health_bioinformatics",
   "documentation": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiacov/",
   "execution": [
    "Terra",
    "Local workstation (command line)"
   ],
   "internet": "No (some optional features incompatible)",
   "capabilities": [
    {
     "id": "THEIACOV_FASTA-SC2",
     "organism": "SARS-CoV-2",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "Variant calling",
      "Lineage / clade assignment"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC, consensus generation or variant calling [verify].",
     "tools": "QC, VADR, Pangolin, Nextclade",
     "pending": 1
    },
    {
     "id": "THEIACOV_FASTA-MPXV",
     "organism": "Monkeypox virus (mpox)",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "Lineage / clade assignment"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC, consensus generation or variant calling [verify].",
     "tools": "QC, Nextclade",
     "pending": 1
    },
    {
     "id": "THEIACOV_FASTA-WNV",
     "organism": "West Nile virus",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "Lineage / clade assignment"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC, consensus generation or variant calling [verify].",
     "tools": "QC, Nextclade",
     "pending": 1
    },
    {
     "id": "THEIACOV_FASTA-FLU",
     "organism": "Influenza",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Within-host (intra-host) variant calling",
      "Lineage / clade assignment",
      "Drug-resistance prediction"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC, consensus generation or variant calling [verify]. Subtypes handled: H1N1, H3N2, H5N1, B/Victoria, B/Yamagata; GenoFLU genotyping for H5N1 [R8] [verify]. Antiviral resistance limited to the configured amino-acid substitution list [R8].",
     "tools": "QC, Nextclade, GenoFLU, ABRicate",
     "pending": 2
    },
    {
     "id": "THEIACOV_FASTA-RSVA",
     "organism": "RSV-A",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "Lineage / clade assignment"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC, consensus generation or variant calling [verify].",
     "tools": "QC, Nextclade, VADR",
     "pending": 1
    },
    {
     "id": "THEIACOV_FASTA-RSVB",
     "organism": "RSV-B",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "Lineage / clade assignment"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC, consensus generation or variant calling [verify].",
     "tools": "QC, Nextclade, VADR",
     "pending": 1
    },
    {
     "id": "THEIACOV_FASTA-MEASLES",
     "organism": "Measles virus",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "Lineage / clade assignment"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC, consensus generation or variant calling [verify].",
     "tools": "[to be completed]",
     "pending": 2
    },
    {
     "id": "THEIACOV_FASTA-MUMPS",
     "organism": "Mumps virus",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "Lineage / clade assignment"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC, consensus generation or variant calling [verify].",
     "tools": "[to be completed]",
     "pending": 2
    },
    {
     "id": "THEIACOV_FASTA-RUBELLA",
     "organism": "Rubella virus",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "Lineage / clade assignment"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC, consensus generation or variant calling [verify].",
     "tools": "[to be completed]",
     "pending": 2
    }
   ],
   "pending": 13
  },
  {
   "id": "THEIACOV_FASTA_BATCH",
   "slug": "theiacov-fasta-batch",
   "name": "TheiaCoV_FASTA_Batch_PHB",
   "developer": "Theiagen Genomics",
   "repository": "https://github.com/theiagen/public_health_bioinformatics",
   "documentation": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiacov/",
   "execution": [
    "Terra",
    "Local workstation (command line)"
   ],
   "internet": "No (some optional features incompatible)",
   "capabilities": [
    {
     "id": "THEIACOV_FASTA_BATCH-SC2",
     "organism": "SARS-CoV-2",
     "group": "Virus",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "Lineage / clade assignment"
     ],
     "limitations": "Set-level: processes several hundred SARS-CoV-2 assemblies at once [R8].",
     "tools": "[to be completed]",
     "pending": 1
    }
   ],
   "pending": 1
  },
  {
   "id": "THEIAPROK_ILLUMINA_PE",
   "slug": "theiaprok-illumina-pe",
   "name": "TheiaProk_Illumina_PE_PHB",
   "developer": "Theiagen Genomics",
   "repository": "https://github.com/theiagen/public_health_bioinformatics",
   "documentation": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiaprok/",
   "execution": [
    "Terra",
    "Local workstation (command line)"
   ],
   "internet": "No (some optional features incompatible)",
   "capabilities": [
    {
     "id": "THEIAPROK_ILLUMINA_PE-BACT",
     "organism": "Bacterial genomes",
     "group": "Bacteria",
     "general": true,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "AMR genotype",
      "Virulence genes",
      "Stress response genes"
     ],
     "limitations": "Defaults assume 2 x 150 bp reads [R10]. Taxon-specific characterization runs only when the species call matches a supported taxon [R10]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder [verify]",
     "pending": 1
    },
    {
     "id": "THEIAPROK_ILLUMINA_PE-SALM",
     "organism": "Salmonella spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "MLST",
      "cgMLST / wgMLST",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Stress response genes",
      "Plasmid / mobile genetic element detection",
      "Drug-resistance prediction"
     ],
     "limitations": "Defaults assume 2 x 150 bp reads [R10]. Serotyping (SeqSero2, SISTR); GenoTyphi genotyping applies to Salmonella Typhi only [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, SeqSero2, SISTR, GenoTyphi [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_PE-ESCH",
     "organism": "Escherichia spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "MLST",
      "cgMLST / wgMLST",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Stress response genes",
      "Plasmid / mobile genetic element detection",
      "Drug-resistance prediction"
     ],
     "limitations": "Defaults assume 2 x 150 bp reads [R10]. Serotyping and Shigella/EIEC differentiation (ECTyper, SerotypeFinder, ShigaTyper, ShigEiFinder), Stx subtyping (StxTyper), Sonneityping for S. sonnei only [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, ECTyper, SerotypeFinder, ShigaTyper, ShigEiFinder, StxTyper, SonneiTyping (Mykrobe), ShigaPass, VirulenceFinder [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_PE-SHIG",
     "organism": "Shigella spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "MLST",
      "cgMLST / wgMLST",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Stress response genes",
      "Plasmid / mobile genetic element detection",
      "Drug-resistance prediction"
     ],
     "limitations": "Defaults assume 2 x 150 bp reads [R10]. Serotyping and Shigella/EIEC differentiation (ECTyper, SerotypeFinder, ShigaTyper, ShigEiFinder), Stx subtyping (StxTyper), Sonneityping for S. sonnei only [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, ECTyper, SerotypeFinder, ShigaTyper, ShigEiFinder, StxTyper, SonneiTyping (Mykrobe), ShigaPass, VirulenceFinder [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_PE-LIST",
     "organism": "Listeria monocytogenes",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "MLST",
      "cgMLST / wgMLST",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Stress response genes",
      "Plasmid / mobile genetic element detection",
      "Drug-resistance prediction"
     ],
     "limitations": "Defaults assume 2 x 150 bp reads [R10]. Serogrouping with LisSero [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, LisSero [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_PE-KLEB",
     "organism": "Klebsiella spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "MLST",
      "cgMLST / wgMLST",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Stress response genes",
      "Plasmid / mobile genetic element detection",
      "Drug-resistance prediction"
     ],
     "limitations": "Defaults assume 2 x 150 bp reads [R10]. Kleborate (species complex, MLST, AMR, virulence, K/O locus typing) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, Kleborate [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_PE-ABAU",
     "organism": "Acinetobacter baumannii",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "MLST",
      "cgMLST / wgMLST",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Stress response genes",
      "Plasmid / mobile genetic element detection",
      "Drug-resistance prediction"
     ],
     "limitations": "Defaults assume 2 x 150 bp reads [R10]. K/OC locus typing (Kaptive) and plasmid typing (ABRicate, 95% identity threshold) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, Kaptive, ABRicate [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_PE-PSAE",
     "organism": "Pseudomonas aeruginosa",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "MLST",
      "cgMLST / wgMLST",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Stress response genes",
      "Plasmid / mobile genetic element detection",
      "Drug-resistance prediction"
     ],
     "limitations": "Defaults assume 2 x 150 bp reads [R10]. Serogrouping with pasty [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, pasty [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_PE-SAUR",
     "organism": "Staphylococcus aureus",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "MLST",
      "cgMLST / wgMLST",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Stress response genes",
      "Plasmid / mobile genetic element detection",
      "Drug-resistance prediction"
     ],
     "limitations": "Defaults assume 2 x 150 bp reads [R10]. spa typing (SPATyper), SCCmec typing (staphopia-sccmec), agr typing (AgrVATE) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, SPATyper, staphopia-sccmec, AgrVATE [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_PE-SPNE",
     "organism": "Streptococcus pneumoniae",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "MLST",
      "cgMLST / wgMLST",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Stress response genes",
      "Plasmid / mobile genetic element detection",
      "Drug-resistance prediction"
     ],
     "limitations": "Defaults assume 2 x 150 bp reads [R10]. Serotyping (SeroBA, read-based), GPSC lineage (PopPUNK; needs a local file on the command line), PBP typing (PBPtyper) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, SeroBA, PopPUNK, PBPtyper [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_PE-SPYO",
     "organism": "Streptococcus pyogenes",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "MLST",
      "cgMLST / wgMLST",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Stress response genes",
      "Plasmid / mobile genetic element detection",
      "Drug-resistance prediction"
     ],
     "limitations": "Defaults assume 2 x 150 bp reads [R10]. emm typing (emmtyper, emmtypingtool) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, emmtyper, emm-typing-tool [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_PE-HINF",
     "organism": "Haemophilus influenzae",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "MLST",
      "cgMLST / wgMLST",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Stress response genes",
      "Plasmid / mobile genetic element detection",
      "Drug-resistance prediction"
     ],
     "limitations": "Defaults assume 2 x 150 bp reads [R10]. Capsule typing with hicap [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, hicap [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_PE-LEGI",
     "organism": "Legionella pneumophila",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "MLST",
      "cgMLST / wgMLST",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Stress response genes",
      "Plasmid / mobile genetic element detection",
      "Drug-resistance prediction"
     ],
     "limitations": "Defaults assume 2 x 150 bp reads [R10]. Sequence-based typing with Legsta [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, legsta [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_PE-MTBC",
     "organism": "Mycobacterium tuberculosis",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "MLST",
      "cgMLST / wgMLST",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Stress response genes",
      "Plasmid / mobile genetic element detection",
      "Drug-resistance prediction"
     ],
     "limitations": "Defaults assume 2 x 150 bp reads [R10]. TBProfiler and tbp-parser are read-based; not available from assemblies [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, TBProfiler, tbp-parser [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_PE-NEIS",
     "organism": "Neisseria spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "MLST",
      "cgMLST / wgMLST",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Stress response genes",
      "Plasmid / mobile genetic element detection",
      "Drug-resistance prediction"
     ],
     "limitations": "Defaults assume 2 x 150 bp reads [R10]. N. meningitidis serogrouping (MeningoType); N. gonorrhoeae NG-MAST typing (NGMaster) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, meningotype, ngmaster [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_PE-VIBR",
     "organism": "Vibrio spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "MLST",
      "cgMLST / wgMLST",
      "Subtype / serotype / other typing scheme",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Stress response genes",
      "Plasmid / mobile genetic element detection",
      "Drug-resistance prediction"
     ],
     "limitations": "Defaults assume 2 x 150 bp reads [R10]. Species and toxin/serogroup markers (SRST2, ABRicate); VIBecheck lineage barcodes default to V. cholerae O1 [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, ABRicate, SRST2 (Vibrio), VibeCheck [verify]",
     "pending": 2
    }
   ],
   "pending": 31
  },
  {
   "id": "THEIAPROK_ILLUMINA_SE",
   "slug": "theiaprok-illumina-se",
   "name": "TheiaProk_Illumina_SE_PHB",
   "developer": "Theiagen Genomics",
   "repository": "https://github.com/theiagen/public_health_bioinformatics",
   "documentation": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiaprok/",
   "execution": [
    "Terra",
    "Local workstation (command line)"
   ],
   "internet": "No (some optional features incompatible)",
   "capabilities": [
    {
     "id": "THEIAPROK_ILLUMINA_SE-BACT",
     "organism": "Bacterial genomes",
     "group": "Bacteria",
     "general": true,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads; adjust trimming minimum length for other read lengths [R10]. Taxon-specific characterization runs only when the species call matches a supported taxon [R10]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder [verify]",
     "pending": 1
    },
    {
     "id": "THEIAPROK_ILLUMINA_SE-SALM",
     "organism": "Salmonella spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads; adjust trimming minimum length for other read lengths [R10]. Serotyping (SeqSero2, SISTR); GenoTyphi genotyping applies to Salmonella Typhi only [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, SeqSero2, SISTR, GenoTyphi [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_SE-ESCH",
     "organism": "Escherichia spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads; adjust trimming minimum length for other read lengths [R10]. Serotyping and Shigella/EIEC differentiation (ECTyper, SerotypeFinder, ShigaTyper, ShigEiFinder), Stx subtyping (StxTyper), Sonneityping for S. sonnei only [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, ECTyper, SerotypeFinder, ShigaTyper, ShigEiFinder, StxTyper, SonneiTyping (Mykrobe), ShigaPass, VirulenceFinder [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_SE-SHIG",
     "organism": "Shigella spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads; adjust trimming minimum length for other read lengths [R10]. Serotyping and Shigella/EIEC differentiation (ECTyper, SerotypeFinder, ShigaTyper, ShigEiFinder), Stx subtyping (StxTyper), Sonneityping for S. sonnei only [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, ECTyper, SerotypeFinder, ShigaTyper, ShigEiFinder, StxTyper, SonneiTyping (Mykrobe), ShigaPass, VirulenceFinder [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_SE-LIST",
     "organism": "Listeria monocytogenes",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads; adjust trimming minimum length for other read lengths [R10]. Serogrouping with LisSero [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, LisSero [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_SE-KLEB",
     "organism": "Klebsiella spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads; adjust trimming minimum length for other read lengths [R10]. Kleborate (species complex, MLST, AMR, virulence, K/O locus typing) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, Kleborate [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_SE-ABAU",
     "organism": "Acinetobacter baumannii",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads; adjust trimming minimum length for other read lengths [R10]. K/OC locus typing (Kaptive) and plasmid typing (ABRicate, 95% identity threshold) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, Kaptive, ABRicate [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_SE-PSAE",
     "organism": "Pseudomonas aeruginosa",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads; adjust trimming minimum length for other read lengths [R10]. Serogrouping with pasty [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, pasty [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_SE-SAUR",
     "organism": "Staphylococcus aureus",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads; adjust trimming minimum length for other read lengths [R10]. spa typing (SPATyper), SCCmec typing (staphopia-sccmec), agr typing (AgrVATE) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, SPATyper, staphopia-sccmec, AgrVATE [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_SE-SPNE",
     "organism": "Streptococcus pneumoniae",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads; adjust trimming minimum length for other read lengths [R10]. Serotyping (SeroBA, read-based), GPSC lineage (PopPUNK; needs a local file on the command line), PBP typing (PBPtyper) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, SeroBA, PopPUNK, PBPtyper [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_SE-SPYO",
     "organism": "Streptococcus pyogenes",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads; adjust trimming minimum length for other read lengths [R10]. emm typing (emmtyper, emmtypingtool) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, emmtyper, emm-typing-tool [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_SE-HINF",
     "organism": "Haemophilus influenzae",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads; adjust trimming minimum length for other read lengths [R10]. Capsule typing with hicap [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, hicap [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_SE-LEGI",
     "organism": "Legionella pneumophila",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads; adjust trimming minimum length for other read lengths [R10]. Sequence-based typing with Legsta [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, legsta [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_SE-MTBC",
     "organism": "Mycobacterium tuberculosis",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads; adjust trimming minimum length for other read lengths [R10]. TBProfiler and tbp-parser are read-based; not available from assemblies [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, TBProfiler, tbp-parser [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_SE-NEIS",
     "organism": "Neisseria spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads; adjust trimming minimum length for other read lengths [R10]. N. meningitidis serogrouping (MeningoType); N. gonorrhoeae NG-MAST typing (NGMaster) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, meningotype, ngmaster [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ILLUMINA_SE-VIBR",
     "organism": "Vibrio spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Single-end short read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Defaults assume 1 x 35 bp reads; adjust trimming minimum length for other read lengths [R10]. Species and toxin/serogroup markers (SRST2, ABRicate); VIBecheck lineage barcodes default to V. cholerae O1 [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, ABRicate, SRST2 (Vibrio), VibeCheck [verify]",
     "pending": 2
    }
   ],
   "pending": 31
  },
  {
   "id": "THEIAPROK_ONT",
   "slug": "theiaprok-ont",
   "name": "TheiaProk_ONT_PHB",
   "developer": "Theiagen Genomics",
   "repository": "https://github.com/theiagen/public_health_bioinformatics",
   "documentation": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiaprok/",
   "execution": [
    "Terra",
    "Local workstation (command line)"
   ],
   "internet": "No (some optional features incompatible)",
   "capabilities": [
    {
     "id": "THEIAPROK_ONT-BACT",
     "organism": "Bacterial genomes",
     "group": "Bacteria",
     "general": true,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Variant calling",
      "Consensus genome",
      "De novo assembly"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R10]. Taxon-specific characterization runs only when the species call matches a supported taxon [R10]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder [verify]",
     "pending": 1
    },
    {
     "id": "THEIAPROK_ONT-SALM",
     "organism": "Salmonella spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Variant calling",
      "Subtype / serotype / other typing scheme",
      "AMR genotype"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R10]. Serotyping (SeqSero2, SISTR); GenoTyphi genotyping applies to Salmonella Typhi only [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, SeqSero2, SISTR, GenoTyphi [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ONT-ESCH",
     "organism": "Escherichia spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Variant calling",
      "Subtype / serotype / other typing scheme",
      "AMR genotype"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R10]. Serotyping and Shigella/EIEC differentiation (ECTyper, SerotypeFinder, ShigaTyper, ShigEiFinder), Stx subtyping (StxTyper), Sonneityping for S. sonnei only [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, ECTyper, SerotypeFinder, ShigaTyper, ShigEiFinder, StxTyper, SonneiTyping (Mykrobe), ShigaPass, VirulenceFinder [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ONT-SHIG",
     "organism": "Shigella spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Variant calling",
      "Subtype / serotype / other typing scheme",
      "AMR genotype"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R10]. Serotyping and Shigella/EIEC differentiation (ECTyper, SerotypeFinder, ShigaTyper, ShigEiFinder), Stx subtyping (StxTyper), Sonneityping for S. sonnei only [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, ECTyper, SerotypeFinder, ShigaTyper, ShigEiFinder, StxTyper, SonneiTyping (Mykrobe), ShigaPass, VirulenceFinder [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ONT-LIST",
     "organism": "Listeria monocytogenes",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "De novo assembly",
      "Species identification",
      "MLST",
      "AMR genotype",
      "Virulence genes",
      "Plasmid / mobile genetic element detection",
      "Subtype / serotype / other typing scheme"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R10]. Serogrouping with LisSero [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, LisSero [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ONT-KLEB",
     "organism": "Klebsiella spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Consensus genome",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Drug-resistance prediction"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R10]. Kleborate (species complex, MLST, AMR, virulence, K/O locus typing) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, Kleborate [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ONT-ABAU",
     "organism": "Acinetobacter baumannii",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "De novo assembly",
      "Species identification",
      "MLST",
      "AMR genotype",
      "Virulence genes",
      "Plasmid / mobile genetic element detection",
      "Subtype / serotype / other typing scheme"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R10]. K/OC locus typing (Kaptive) and plasmid typing (ABRicate, 95% identity threshold) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, Kaptive, ABRicate [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ONT-PSAE",
     "organism": "Pseudomonas aeruginosa",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Lineage / clade assignment",
      "Subtype / serotype / other typing scheme",
      "Metagenomic classification",
      "Virulence genes",
      "Drug-resistance prediction",
      "Plasmid / mobile genetic element detection",
      "cgMLST / wgMLST"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R10]. Serogrouping with pasty [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, pasty [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ONT-SAUR",
     "organism": "Staphylococcus aureus",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Consensus genome",
      "Variant calling",
      "Lineage / clade assignment",
      "AMR genotype",
      "Virulence genes",
      "Drug-resistance prediction"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R10]. spa typing (SPATyper), SCCmec typing (staphopia-sccmec), agr typing (AgrVATE) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, SPATyper, staphopia-sccmec, AgrVATE [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ONT-SPNE",
     "organism": "Streptococcus pneumoniae",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "De novo assembly",
      "Species identification",
      "MLST",
      "AMR genotype",
      "Virulence genes",
      "Plasmid / mobile genetic element detection",
      "Subtype / serotype / other typing scheme",
      "Lineage / clade assignment"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R10]. Serotyping (SeroBA, read-based), GPSC lineage (PopPUNK; needs a local file on the command line), PBP typing (PBPtyper) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, SeroBA, PopPUNK, PBPtyper [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ONT-SPYO",
     "organism": "Streptococcus pyogenes",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "De novo assembly",
      "Species identification",
      "MLST",
      "AMR genotype",
      "Virulence genes",
      "Plasmid / mobile genetic element detection",
      "Subtype / serotype / other typing scheme"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R10]. emm typing (emmtyper, emmtypingtool) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, emmtyper, emm-typing-tool [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ONT-HINF",
     "organism": "Haemophilus influenzae",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "De novo assembly",
      "Species identification",
      "MLST",
      "AMR genotype",
      "Virulence genes",
      "Plasmid / mobile genetic element detection",
      "Subtype / serotype / other typing scheme"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R10]. Capsule typing with hicap [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, hicap [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ONT-LEGI",
     "organism": "Legionella pneumophila",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "De novo assembly",
      "Species identification",
      "MLST",
      "AMR genotype",
      "Virulence genes",
      "Plasmid / mobile genetic element detection",
      "Subtype / serotype / other typing scheme"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R10]. Sequence-based typing with Legsta [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, legsta [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ONT-MTBC",
     "organism": "Mycobacterium tuberculosis",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Consensus genome",
      "Variant calling",
      "Subtype / serotype / other typing scheme",
      "AMR genotype",
      "Virulence genes"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R10]. TBProfiler and tbp-parser are read-based; not available from assemblies [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, TBProfiler, tbp-parser [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ONT-NEIS",
     "organism": "Neisseria spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "De novo assembly",
      "Species identification",
      "MLST",
      "AMR genotype",
      "Virulence genes",
      "Plasmid / mobile genetic element detection",
      "Subtype / serotype / other typing scheme"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R10]. N. meningitidis serogrouping (MeningoType); N. gonorrhoeae NG-MAST typing (NGMaster) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, meningotype, ngmaster [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_ONT-VIBR",
     "organism": "Vibrio spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Isolate (pure culture)"
     ],
     "library": [
      "Shotgun WGS"
     ],
     "platforms": [
      "Oxford Nanopore (ONT)"
     ],
     "inputs": [
      "Long read"
     ],
     "outputs": [
      "De novo assembly",
      "Species identification",
      "MLST",
      "AMR genotype",
      "Virulence genes",
      "Plasmid / mobile genetic element detection",
      "Lineage / clade assignment"
     ],
     "limitations": "Assemblies must be quality assessed before reporting results [R10]. Species and toxin/serogroup markers (SRST2, ABRicate); VIBecheck lineage barcodes default to V. cholerae O1 [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, ABRicate, SRST2 (Vibrio), VibeCheck [verify]",
     "pending": 2
    }
   ],
   "pending": 31
  },
  {
   "id": "THEIAPROK_FASTA",
   "slug": "theiaprok-fasta",
   "name": "TheiaProk_FASTA_PHB",
   "developer": "Theiagen Genomics",
   "repository": "https://github.com/theiagen/public_health_bioinformatics",
   "documentation": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiaprok/",
   "execution": [
    "Terra",
    "Local workstation (command line)"
   ],
   "internet": "No (some optional features incompatible)",
   "capabilities": [
    {
     "id": "THEIAPROK_FASTA-BACT",
     "organism": "Bacterial genomes",
     "group": "Bacteria",
     "general": true,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Drug-resistance prediction",
      "Subtype / serotype / other typing scheme",
      "Within-host (intra-host) variant calling",
      "AMR genotype",
      "Virulence genes",
      "Metagenomic classification"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC [verify]. Taxon-specific characterization runs only when the species call matches a supported taxon [R10]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder [verify]",
     "pending": 2
    },
    {
     "id": "THEIAPROK_FASTA-SALM",
     "organism": "Salmonella spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Drug-resistance prediction",
      "Subtype / serotype / other typing scheme",
      "AMR genotype"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC [verify]. Serotyping (SeqSero2, SISTR); GenoTyphi genotyping applies to Salmonella Typhi only [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, SeqSero2, SISTR, GenoTyphi [verify]",
     "pending": 3
    },
    {
     "id": "THEIAPROK_FASTA-ESCH",
     "organism": "Escherichia spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Drug-resistance prediction",
      "Subtype / serotype / other typing scheme",
      "AMR genotype"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC [verify]. Serotyping and Shigella/EIEC differentiation (ECTyper, SerotypeFinder, ShigaTyper, ShigEiFinder), Stx subtyping (StxTyper), Sonneityping for S. sonnei only [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, ECTyper, SerotypeFinder, ShigaTyper, ShigEiFinder, StxTyper, SonneiTyping (Mykrobe), ShigaPass, VirulenceFinder [verify]",
     "pending": 3
    },
    {
     "id": "THEIAPROK_FASTA-SHIG",
     "organism": "Shigella spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Drug-resistance prediction",
      "Subtype / serotype / other typing scheme",
      "AMR genotype"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC [verify]. Serotyping and Shigella/EIEC differentiation (ECTyper, SerotypeFinder, ShigaTyper, ShigEiFinder), Stx subtyping (StxTyper), Sonneityping for S. sonnei only [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, ECTyper, SerotypeFinder, ShigaTyper, ShigEiFinder, StxTyper, SonneiTyping (Mykrobe), ShigaPass, VirulenceFinder [verify]",
     "pending": 3
    },
    {
     "id": "THEIAPROK_FASTA-LIST",
     "organism": "Listeria monocytogenes",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Drug-resistance prediction",
      "Subtype / serotype / other typing scheme",
      "AMR genotype"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC [verify]. Serogrouping with LisSero [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, LisSero [verify]",
     "pending": 3
    },
    {
     "id": "THEIAPROK_FASTA-KLEB",
     "organism": "Klebsiella spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Drug-resistance prediction",
      "Subtype / serotype / other typing scheme",
      "AMR genotype"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC [verify]. Kleborate (species complex, MLST, AMR, virulence, K/O locus typing) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, Kleborate [verify]",
     "pending": 3
    },
    {
     "id": "THEIAPROK_FASTA-ABAU",
     "organism": "Acinetobacter baumannii",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Drug-resistance prediction",
      "Subtype / serotype / other typing scheme",
      "AMR genotype"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC [verify]. K/OC locus typing (Kaptive) and plasmid typing (ABRicate, 95% identity threshold) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, Kaptive, ABRicate [verify]",
     "pending": 3
    },
    {
     "id": "THEIAPROK_FASTA-PSAE",
     "organism": "Pseudomonas aeruginosa",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Drug-resistance prediction",
      "Subtype / serotype / other typing scheme",
      "AMR genotype"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC [verify]. Serogrouping with pasty [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, pasty [verify]",
     "pending": 3
    },
    {
     "id": "THEIAPROK_FASTA-SAUR",
     "organism": "Staphylococcus aureus",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Drug-resistance prediction",
      "Subtype / serotype / other typing scheme",
      "AMR genotype"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC [verify]. spa typing (SPATyper), SCCmec typing (staphopia-sccmec), agr typing (AgrVATE) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, SPATyper, staphopia-sccmec, AgrVATE [verify]",
     "pending": 3
    },
    {
     "id": "THEIAPROK_FASTA-SPNE",
     "organism": "Streptococcus pneumoniae",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Consensus genome",
      "Variant calling",
      "MLST",
      "Drug-resistance prediction",
      "Subtype / serotype / other typing scheme",
      "AMR genotype"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC [verify]. Serotyping (SeroBA, read-based), GPSC lineage (PopPUNK; needs a local file on the command line), PBP typing (PBPtyper) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, PopPUNK, PBPtyper [verify]",
     "pending": 3
    },
    {
     "id": "THEIAPROK_FASTA-SPYO",
     "organism": "Streptococcus pyogenes",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "Species identification",
      "MLST",
      "AMR genotype",
      "Virulence genes",
      "Plasmid / mobile genetic element detection",
      "Subtype / serotype / other typing scheme"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC [verify]. emm typing (emmtyper, emmtypingtool) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, emmtyper, emm-typing-tool [verify]",
     "pending": 3
    },
    {
     "id": "THEIAPROK_FASTA-HINF",
     "organism": "Haemophilus influenzae",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "Species identification",
      "MLST",
      "AMR genotype",
      "Virulence genes",
      "Plasmid / mobile genetic element detection",
      "Subtype / serotype / other typing scheme"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC [verify]. Capsule typing with hicap [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, hicap [verify]",
     "pending": 3
    },
    {
     "id": "THEIAPROK_FASTA-LEGI",
     "organism": "Legionella pneumophila",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Consensus genome",
      "Variant calling",
      "Subtype / serotype / other typing scheme",
      "MLST",
      "AMR genotype",
      "Virulence genes",
      "Drug-resistance prediction",
      "Metagenomic classification"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC [verify]. Sequence-based typing with Legsta [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, legsta [verify]",
     "pending": 3
    },
    {
     "id": "THEIAPROK_FASTA-NEIS",
     "organism": "Neisseria spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Consensus genome",
      "Variant calling",
      "Subtype / serotype / other typing scheme",
      "MLST",
      "AMR genotype",
      "Virulence genes",
      "Drug-resistance prediction",
      "Metagenomic classification"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC [verify]. N. meningitidis serogrouping (MeningoType); N. gonorrhoeae NG-MAST typing (NGMaster) [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, meningotype, ngmaster [verify]",
     "pending": 3
    },
    {
     "id": "THEIAPROK_FASTA-VIBR",
     "organism": "Vibrio spp.",
     "group": "Bacteria",
     "general": false,
     "sample_types": [
      "Not applicable (downstream analysis)"
     ],
     "library": [
      "Not applicable (downstream analysis)"
     ],
     "platforms": [
      "Not applicable (downstream analysis)"
     ],
     "inputs": [
      "Assembly / consensus FASTA"
     ],
     "outputs": [
      "QC",
      "Species identification",
      "De novo assembly",
      "Consensus genome",
      "Variant calling",
      "Subtype / serotype / other typing scheme",
      "MLST",
      "AMR genotype",
      "Virulence genes",
      "Drug-resistance prediction",
      "Metagenomic classification"
     ],
     "limitations": "Starts from an existing assembly; no read-level QC [verify]. Species and toxin/serogroup markers (SRST2, ABRicate); VIBecheck lineage barcodes default to V. cholerae O1 [R10] [verify]. Some optional features are not compatible with command-line runs [R10].",
     "tools": "QC, AMRFinderPlus, GAMBIT, KmerFinder, Kraken2, TS_MLST (mlst), ResFinder / PointFinder, ABRicate, SRST2 (Vibrio), VibeCheck [verify]",
     "pending": 3
    }
   ],
   "pending": 44
  },
  {
   "id": "THEIAMETA_ILLUMINA_PE",
   "slug": "theiameta-illumina-pe",
   "name": "TheiaMeta_Illumina_PE_PHB",
   "developer": "Theiagen Genomics",
   "repository": "https://github.com/theiagen/public_health_bioinformatics",
   "documentation": "https://theiagen.github.io/public_health_bioinformatics/latest/workflows/genomic_characterization/theiameta/",
   "execution": [
    "Terra",
    "Local workstation (command line)"
   ],
   "internet": "Yes",
   "capabilities": [
    {
     "id": "THEIAMETA_ILLUMINA_PE-AGNOSTIC",
     "organism": "Organism-agnostic",
     "group": "Any",
     "general": true,
     "sample_types": [
      "Mixed / metagenomic",
      "Primary clinical specimen"
     ],
     "library": [
      "Shotgun WGS",
      "Single-target amplicon (16S / ITS)",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "Metagenomic classification"
     ],
     "limitations": "Reference-free mode: de novo metagenomic assembly (metaSPAdes) with contigs binned into separate genomes (SemiBin2) [R11]. Defaults assume 2 x 150 bp reads [R11]. Kraken2 classification depends on the database used [R11]. Human reads are removed before analysis [R11] [verify]. No organism-specific characterization (e.g., AMR, typing) is run [verify].",
     "tools": "QC, Kraken2, Krona [verify]",
     "pending": 3
    },
    {
     "id": "THEIAMETA_ILLUMINA_PE-REF",
     "organism": "Organism-agnostic (user-supplied reference)",
     "group": "Any",
     "general": true,
     "sample_types": [
      "Mixed / metagenomic",
      "Primary clinical specimen"
     ],
     "library": [
      "Shotgun WGS",
      "Single-target amplicon (16S / ITS)",
      "Shotgun metagenomic"
     ],
     "platforms": [
      "Illumina"
     ],
     "inputs": [
      "Paired-end short read"
     ],
     "outputs": [
      "QC",
      "De novo assembly",
      "Species identification",
      "Metagenomic classification"
     ],
     "limitations": "Reference-guided mode: requires a user-provided reference genome; the final assembly is the metagenomic contigs that map to it, with no binning [R11]. Defaults assume 2 x 150 bp reads [R11]. Kraken2 classification depends on the database used [R11]. Human reads are removed before analysis [R11] [verify]. No organism-specific characterization (e.g., AMR, typing) is run [verify].",
     "tools": "QC, Kraken2, Krona [verify]",
     "pending": 3
    }
   ],
   "pending": 6
  }
 ]
};
