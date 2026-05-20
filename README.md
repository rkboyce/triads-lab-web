# Boyce / TrIADS Lab Website First Draft

SvelteKit static-site first draft based on the design artifacts in the TRIADS planning folder.

## Local development

```powershell
npm.cmd install
npm.cmd run dev
```

Then open the local URL printed by Vite.

## Static build

```powershell
npm.cmd run build
npm.cmd run preview
```

The static output is written to `build/` via `@sveltejs/adapter-static`.

## GitHub Pages

For a project site, set `BASE_PATH` during the production build, for example:

```powershell
$env:BASE_PATH='/boyce_lab_website'
npm.cmd run build
```

The first draft intentionally keeps all page UI in `src/routes/+page.svelte`. Once the direction is approved, split it into reusable components under `src/lib/components` and move publication/project/person data into `src/lib/data`.
