# Research Brief

Research date: 2026-05-15

## Pitt Theme

Official Pitt web color guidance lists:

- Pitt Royal Blue: `#003594`
- Pitt Gold: `#FFB81C`
- White: `#FFFFFF`
- Grey: `#E8E9EE`
- Dark Grey: `#2B2B2B`
- Link blue on light backgrounds: `#3366FF`
- Pitt Gold as link color on dark backgrounds

The design uses the official blue as the main brand field, gold for active states and small emphasis, dark grey for reading text, and grey for structured page bands.

Source: University of Pittsburgh, "Colors | Living Our Brand"  
https://www.brand.pitt.edu/web-style-guide/colors

## Typography

The public Pitt brand PDF references typography guidance, but the current public web color page is clearer and more directly actionable for this design pass. For the Svelte build, use a conservative web stack:

```css
font-family: Arial, Helvetica, sans-serif;
```

This keeps the mockup maintainable without depending on licensed brand fonts. If Pitt provides approved web font files through an internal brand kit, swap them behind CSS custom properties.

Source: University of Pittsburgh Brand Guidelines PDF  
https://www.brand.pitt.edu/sites/default/files/University_of_Pittsburgh_Brand_Guidelines.pdf

## Richard D. Boyce and TrIADS Research Focus

Dr. Richard D. Boyce is listed by Pitt DBMI as Associate Professor of Biomedical Informatics with secondary appointments in the School of Pharmacy and the Intelligent Systems Program. His research interests are described as knowledge bases and generative models applied to patient safety, clinical decision support, and advanced pharmacovigilance.

The DBMI profile describes TrIADS as the Translational Informatics Applied to Drug Safety lab, focused on improving medication safety for older adults through better clinical decision support systems, pharmacovigilance methods, and simplified clinical evidence generation.

Other profile details relevant to website content:

- More than 80 peer-reviewed journal articles and 20 peer-reviewed conference papers.
- Work at the intersection of artificial knowledge representation, pharmacovigilance, clinical research informatics, and clinical decision support.
- Led the informatics core for an NCCIH U54 studying natural product-drug interactions for nine years.
- Current MPI and co-director for AIBIDS, an NLM R25 undergraduate research experience.

Source: Pitt DBMI directory profile for Richard Boyce  
https://www.dbmi.pitt.edu/directory/name/richard-boyce/

The School of Computing and Information profile describes research interests around intelligent clinical decision support, distributed and collaborative knowledge bases, and advanced pharmacovigilance signal detection management.

Source: Pitt SCI profile for Richard Boyce  
https://www.sci.pitt.edu/people/richard-boyce

## Most Recent Work Signals Found

Recent public profile/search results surfaced the following themes to reflect in mockups:

- Multimodal AI for pharmacology evidence extraction.
- Natural product-drug interaction evidence and pharmacovigilance.
- Knowledge graph frameworks for pharmacokinetic natural product-drug interactions.
- Clinical decision support implementation and evaluation.
- Medication safety for older adults.
- AIBIDS undergraduate biomedical informatics training.

ResearchGate showed a January 2026 preprint entry titled "Assessing Multimodal AI for Visual Information Extraction of Pharmacology" with Richard Boyce as an author. Because ResearchGate is not an official publication index, treat this as a mockup content signal, not authoritative publication metadata.

Source: ResearchGate profile search result for Richard Boyce  
https://www.researchgate.net/profile/Richard-Boyce-4

An arXiv record for "Developing a Knowledge Graph Framework for Pharmacokinetic Natural Product-Drug Interactions" provides a useful older but still central TrIADS-adjacent research theme: natural product-drug interactions, biomedical ontologies, linked data, literature text mining, and knowledge graphs.

Source: arXiv abstract  
https://arxiv.org/abs/2209.11950

## Mockup Content Choices

Use these labels in first-page UI:

- "Medication safety for older adults"
- "Clinical decision support that earns trust"
- "Pharmacovigilance across drugs, natural products, and evidence streams"
- "Knowledge bases plus generative models for safer therapy"
- "AIBIDS undergraduate research training"
- "Natural product-drug interaction knowledge graphs"

Avoid claiming live metrics, exact current publication counts beyond profile-backed ranges, or new publications as formally peer-reviewed unless verified from PubMed, DOI, or the lab's own records.

