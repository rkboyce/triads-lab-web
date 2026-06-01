# Launch Link Audit - 2026-06-01

Scope: source-facing public links in `src/`, plus local route and asset checks from the running Vite dev server.

## Result

- All local routes and key assets returned HTTP 200.
- Public project/profile links returned HTTP 200:
  - PV Copilot Pitt innovation page
  - AI-infused post-market safety monitoring Pitt innovation page
  - OHDSI Study Agent GitHub repository
  - PDDI-CDS continuous-build implementation guide
  - AIBIDS
  - ORCID
  - Google Scholar
  - Pitt DBMI
  - Pitt
- Publication PMID and PMCID links returned HTTP 200.
- Most DOI links returned HTTP 200 after redirect to publisher pages.

## Notes

- Two DOI checks returned HTTP 403 to scripted requests:
  - `https://doi.org/10.1093/jamiaopen/ooab023`
  - `https://doi.org/10.1111/cts.13505`
- Their corresponding PubMed and PMC records returned HTTP 200, so these are likely publisher bot/script restrictions rather than broken citation targets.
- PDDI-CDS currently points to an HL7 continuous-build implementation guide. Keep as a launch review item unless Richard confirms this is the preferred public standards link.

## Local Routes Checked

- `/`
- `/research`
- `/projects`
- `/projects/pv-copilot`
- `/projects/study-agent`
- `/projects/post-market-safety-monitoring`
- `/projects/pddi-cds`
- `/projects/aibids`
- `/publications`
- `/people`
- `/training`
- `/contact`
- `/triads-lab-logo-transparent-clean.png`
- `/triads-lab-icon.ico`
