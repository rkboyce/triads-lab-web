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



# other codex notes
Plan Publication Integration in the checklist and synced the review package.

Decision made: manual curated publication list for launch, maintained in src/lib/data/publications.ts.

Workflow:
Use Google Scholar only as a profile/discovery link or manual BibTeX export aid.

Use DOI, PubMed, PMC, publisher pages, standards pages, or maintained repositories as durable publication links.

Use PubMed/PMC E-utilities, ORCID public API, and Crossref REST API only for verification or future semi-manual review.

Do not scrape Google Scholar.

Do not use LinkedIn as a publication source.

Defer any publication-review agent until after launch.

Updated:
website_build_action_checklist_2026-05-27.md (reference for brian)

design/review-package-2026-05-29.md (reference for brian)

No build needed; this was documentation/planning only.

Sources used:
Google Scholar help: https://scholar.google.com/intl/el/scholar/help.html
NCBI APIs/E-utilities: https://uud.ncbi.nlm.nih.gov/home/develop/api/
ORCID public API: https://info.orcid.org/what-is-orcid/services/public-api/
Crossref REST API: https://www.crossref.org/documentation/retrieve-metadata/rest-api/access-and-authentication/