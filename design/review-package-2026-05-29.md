# TrIADS Lab Website Review Package

Prepared: May 29, 2026

## Review Goal

Use the current SvelteKit prototype to review the lab website direction before adding more production detail. The main decision is whether the site structure, public-facing research framing, and featured project set are correct enough to continue into content refinement and launch planning.

## Prototype

Local commands:

```powershell
npm.cmd install
npm.cmd run dev
```

Production build check:

```powershell
npm.cmd run build
```

Current build status: passing as of May 29, 2026.

Current branch: `design/transparent-logo-profile`

Recent grouped commits:

- `3219198 feat: add project and publication routes`
- `3acfe5a feat: refine publication curation content`

## Source Materials Used

- Refactored Richard Boyce CV: `Boyce-CV-working-version-easier-to-read.docx`
- Lab history/future deck: `TrIADS-Lab-History-and-Future-2026.pdf`
- May 2026 Teams transcript and summary from the website planning call
- Link policy and project link map from the May 2026 planning folder
- Design package in `design/`: design system, content model, Svelte component map, and static prototype

## Website Structure In Prototype

- Home / Overview
- Research themes
- Methods and informatics domains
- Selected project highlights
- Short video placeholders
- Publications and profiles
- People and training
- Contact / collaboration workflow
- Dedicated Projects page
- Dedicated Publications page

This follows the call direction to avoid a CV mirror and avoid presenting the slide deck as a linear slide viewer.

## Proposed Public Research Themes

1. Pharmacovigilance with traceable evidence
   - Safety review across reports, labels, literature, clinical data, and knowledge graphs.

2. Clinical decision support standards
   - Computable drug interaction evidence and FHIR/CDS workflows.

3. Medication safety for older adults
   - MEARS-related work on medication safety risks for older adults aging in place, including home health care transitions, reconciliation, handoffs, and caregiver support.

4. Designing real world evidence tools for Human-AI teams
   - Human-AI workflows for real-world evidence generation, study design, phenotype review, and traceable source evidence.

Decision needed: confirm whether these four themes are the right public-facing reduction of the broader CV/deck research areas.

## Featured Projects

Current prototype highlights:

- PV Copilot
- Study Agent
- AI-infused post-market safety monitoring
- PDDI-CDS
- AIBIDS

Decision needed: confirm which projects are current enough for homepage prominence versus a lower-priority projects page.

## Link Policy

Stable/current public links currently used:

- PV Copilot Pitt innovation page
- AI-infused post-market safety monitoring Pitt innovation page
- Study Agent GitHub repository
- AIBIDS program page
- ORCID profile
- Google Scholar profile

Use with caution:

- HL7 PDDI-CDS continuous-build implementation guide. It is useful for prototype content, but a final/published target should be verified before launch.

Quarantined pending review:

- DDICS/DDI-CDS older project site
- NaPDI CDS site and NaPDI repository
- SlideShare links
- QR-code-only slide deck targets
- Campaign/tracking URLs
- Old OHDSI wiki PDFs
- Older conference microsites and local DBMI-hosted PDFs

Decision needed: for older work, choose DOI, PubMed, PMC, publisher, standards, or maintained repository links before public launch.

## Publication Workflow Options

Current prototype approach:

- Use ORCID and Google Scholar as discovery/profile links.
- Do not mirror the full CV publication list.
- Add a curated publication area organized by research theme.
- Replace placeholder rows with approved durable citation records.

Launch workflow decision:

- Use a manual curated list for launch, maintained in `src/lib/data/publications.ts`.
- Keep ORCID and Google Scholar as profile/discovery links.
- Use DOI, PubMed, PubMed Central, publisher, standards, or maintained repository links as the durable authority for selected publication records.
- Do not scrape Google Scholar or LinkedIn.
- Use PubMed/PMC, ORCID public API, and Crossref REST API only as optional verification or future semi-manual review aids.

Recurring maintenance sketch:

- Quarterly, review ORCID, Google Scholar profile, and PubMed search results for candidate additions.
- Verify candidates through DOI, PMID, PMCID, publisher, standards, or maintained repository pages.
- Add only a small set that supports current public-facing themes.
- Run the site build and link checks after updates.
- Defer any publication-review agent until after launch; if used, keep it scoped to candidate discovery and human-review summaries.

## Contact Workflow Options

Current prototype approach:

- Use a contact-form concept rather than Richard's personal email.
- Collect inquiry type, visitor email, and short message.
- Keep the form non-submitting until hosting and delivery are chosen.

Open options:

- Static form service if hosted on GitHub Pages or similar static hosting.
- Pitt-managed form/email workflow if an institutional host is selected.
- A monitored shared mailbox if one exists and can be recognized by Richard.

Decision needed: identify where submissions should go and what hosting environment will support that route.

## Video Placeholders

Current prototype includes short summary placeholders near project content.

Decision needed: choose which 20- to 30-second videos Richard should eventually record. Recommended first set:

- What PV Copilot is for
- Why Study Agent matters
- Designing real world evidence tools for Human-AI teams

## Design Review Focus

Richard already indicated the overall colors, contrast, fonts, and sizing were acceptable. The next visual review should focus on:

- Research-theme card text size
- Excess whitespace in card-heavy sections
- Whether the page feels like a working research lab site rather than a department profile
- Whether project and publication routes improve navigation
- Whether Pitt colors feel restrained and academic rather than athletics-heavy

## Open Questions For Richard

1. Are the four public-facing research themes right?
2. Which projects should appear on the homepage?
3. Which older project links should be replaced by publications?
4. Which publications or outputs should be manually highlighted first?
5. What hosting environment should be used?
6. Where should contact form submissions go?
7. Which short videos should be recorded first?
8. How should current R01-adjacent work be framed without exposing aims?

## Recommended Next Action

Use the next review meeting to approve or revise the theme/project/content framing. After that, the next implementation step should be to replace placeholder publication buckets with a small, approved set of durable citations and settle the contact-form delivery path.
