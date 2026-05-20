# Prompt: Build First Draft of Boyce / TrIADS Lab Website

Create a first-draft Svelte/SvelteKit website in:

```text
C:\pitt\boyce_lab_website
```

Use the design and research materials already created in:

```text
C:\Users\BRB265\OneDrive - University of Pittsburgh\pitt_work_notes\2026\2605_MAY\triads_lab_website\design
```

Assume the stack choice is Svelte/SvelteKit with static output suitable for GitHub Pages.

## Website Goals

Build a polished but maintainable academic lab website for Dr. Richard D. Boyce / the TrIADS Lab at the University of Pittsburgh Department of Biomedical Informatics.

The first draft should emphasize:

- Translational Informatics Applied to Drug Safety (TrIADS)
- Medication safety
- Clinical decision support
- Pharmacovigilance
- Natural product-drug interactions
- Knowledge bases, ontologies, and knowledge graphs
- Generative models / AI applied to patient safety
- AIBIDS undergraduate research training

## Design Direction

Use the Pitt theme from the design notes:

- Pitt Royal Blue: `#003594`
- Pitt Gold: `#FFB81C`
- White: `#FFFFFF`
- Grey: `#E8E9EE`
- Dark Grey: `#2B2B2B`

The design should feel like a serious biomedical informatics research lab site, not a marketing landing page. Prioritize scannable research content, publications, people, projects, and contact/training routes.

## Initial Site Structure

Include at least:

- Home
- Research
- Projects
- Publications
- People
- Training
- Contact

For the first draft, these may all live on one Svelte page with anchor navigation. Later, split them into routes/components.

## Implementation Expectations

Create a working SvelteKit static-site scaffold with:

```text
package.json
svelte.config.js
vite.config.ts
tsconfig.json
src/app.html
src/routes/+layout.svelte
src/routes/+page.svelte
src/lib/styles/tokens.css
src/lib/styles/base.css
README.md
```

Use `@sveltejs/adapter-static`.

The homepage should include:

- Pitt/DBMI header
- TrIADS lab hero
- Research theme cards
- Featured natural product-drug interaction / knowledge graph project
- Recent work/publications mockup
- People/training section
- Contact band

## Link Requirement

After creating the draft in `C:\pitt\boyce_lab_website`, create a link from:

```text
C:\Users\BRB265\OneDrive - University of Pittsburgh\pitt_work_notes\2026\2605_MAY\triads_lab_website\boyce_lab_website
```

to:

```text
C:\pitt\boyce_lab_website
```

Prefer a true directory symbolic link if Windows permissions allow it. If Windows denies symlink creation because administrator/developer-mode privileges are unavailable, create a directory junction as the practical fallback.

## Verification

After implementation:

1. Confirm the source files exist.
2. Run `npm.cmd install` if dependencies are not installed.
3. Run `npm.cmd run build`.
4. If build succeeds, optionally run `npm.cmd run dev` and report the local URL.
5. Report whether the link is a symbolic link or junction.

## Notes

The first implementation can keep the page UI in `src/routes/+page.svelte`. Once the direction is approved, refactor into reusable Svelte components and data files.

