# Boyce / TrIADS Lab Website First Draft

SvelteKit static-site first draft based on the design artifacts in the TRIADS planning folder.

## Local Development

Use Linux or WSL for local development and deployment work.

From the repository root:

```bash
rm -rf node_modules .svelte-kit
npm install
npm run dev -- --host 127.0.0.1
```

Then open the local URL printed by Vite, usually:

```text
http://127.0.0.1:5173/
```

This project pins the dev server to port `5173` with `strictPort: true`. If the
port is already in use, stop the existing dev server before running `npm run dev`
again:

```bash
lsof -i :5173
kill <PID>
```

For a static production build in Linux or WSL:

```bash
npm run build
npm run preview
```

The static output is written to `build/` via `@sveltejs/adapter-static`.

## GitHub Pages

For a project site, set `BASE_PATH` during the production build, for example:

```bash
BASE_PATH='/boyce_lab_website' npm run build
```

The first draft intentionally keeps all page UI in `src/routes/+page.svelte`. Once the direction is approved, split it into reusable components under `src/lib/components` and move publication/project/person data into `src/lib/data`.
