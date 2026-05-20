# Svelte Component Map

## Route Structure

```text
src/routes/
  +layout.svelte
  +page.svelte
  research/+page.svelte
  projects/+page.svelte
  publications/+page.svelte
  people/+page.svelte
  training/+page.svelte
  contact/+page.svelte
```

## Components

```text
src/lib/components/
  SiteHeader.svelte
  SiteFooter.svelte
  HeroResearch.svelte
  ResearchThemeCard.svelte
  EvidencePipeline.svelte
  FeaturedProject.svelte
  PublicationList.svelte
  PublicationFilters.svelte
  PersonCard.svelte
  TrainingCallout.svelte
  ContactBand.svelte
  Tag.svelte
```

## Data Files

```text
src/lib/data/
  research-themes.ts
  projects.ts
  publications.ts
  people.ts
  news.ts
```

## Component Responsibilities

`SiteHeader.svelte`

- Logo/wordmark text.
- Mobile nav disclosure.
- Active route state.
- DBMI/Pitt utility links.

`HeroResearch.svelte`

- Lab name and mission.
- Biomedical informatics visual.
- Primary calls to action.

`EvidencePipeline.svelte`

- Compact visual sequence: evidence sources -> knowledge representation -> model support -> CDS/pharmacovigilance outputs.

`PublicationList.svelte`

- Accepts publication array and filter state.
- Renders citation-style rows with tags.
- Keeps external links explicit.

`PublicationFilters.svelte`

- Svelte store or local state for theme/year filters.
- Use segmented controls or checkboxes.

`ResearchThemeCard.svelte`

- Small icon or graph mark.
- Title, summary, method tags, link.

## Styling Strategy

- Global tokens in `src/lib/styles/tokens.css`.
- Global reset and typography in `src/lib/styles/base.css`.
- Component-local CSS for layout.
- Avoid utility-class sprawl unless the project later adopts Tailwind.

## Static Deployment Notes

For GitHub Pages project sites, configure:

```js
// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/triads-lab' : ''
    }
  }
};
```

