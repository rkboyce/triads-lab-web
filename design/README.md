# TrIADS Lab Website Design Package

This directory contains first-pass design artifacts for a Svelte/SvelteKit implementation of the Translational Informatics Applied to Drug Safety (TrIADS) lab website.

## Files

- `prototype.html`: Static clickable visual mockup. It can be opened directly in a browser.
- `design-system.md`: Visual tokens, accessibility notes, layout rules, and Svelte implementation guidance.
- `content-model.md`: Proposed pages, sections, and reusable content types.
- `research-brief.md`: Source-backed research notes used to shape the mockups.
- `svelte-component-map.md`: Component breakdown for a SvelteKit build.

## Design Direction

The mockup uses a restrained Pitt academic identity: Pitt Royal Blue, Pitt Gold, white, grey, and dark grey. It avoids an athletics-heavy feel by using gold as a precise accent instead of a dominant background. The interface is intended for a biomedical informatics lab audience: faculty, trainees, collaborators, funders, and prospective students.

The site should feel like a working research group rather than a marketing landing page: direct navigation, scannable research themes, publication/tool surfaces, and clear routes to contact and training opportunities.

## Recommended Stack

- SvelteKit with `@sveltejs/adapter-static`
- TypeScript
- Markdown or mdsvex for publication/news/project content
- CSS custom properties for Pitt theme tokens
- Optional future additions: publication filtering, people/project data files, and BibTeX/ORCID import tooling

