# Boyce / TrIADS Lab Website First Draft

SvelteKit static-site first draft based on the design artifacts in the TRIADS planning folder.

## Local Development

Use Git Bash or WSL for local development and deployment work. Run commands
from the repository root.

Prerequisite: `node -v` and `npm -v` must both work in the shell you are using.
For WSL, install Node.js inside WSL rather than relying on Windows Node/npm.

Install dependencies and create the local environment file:

```bash
rm -rf node_modules .svelte-kit
cp .env.example .env
npm install
```

Start the dev server:

```bash
MSYS_NO_PATHCONV=1 env $(cat .env) npm run dev -- --host 127.0.0.1
```

Then open the local URL printed by Vite, usually:

```text
http://127.0.0.1:5173/boyce_lab_website/
```

This project pins the dev server to port `5173` with `strictPort: true`. If the
port is already in use, stop the existing dev server or start this one on a
different port:

```bash
MSYS_NO_PATHCONV=1 env $(cat .env) npm run dev -- --host 127.0.0.1 --port 5174 --strictPort
```

For a static production build:

```bash
MSYS_NO_PATHCONV=1 env $(cat .env) npm run build
MSYS_NO_PATHCONV=1 env $(cat .env) npm run preview
```

The static output is written to `build/` via `@sveltejs/adapter-static`.

## GitHub Pages

For a project site, set `BASE_PATH` in `.env`:

```bash
BASE_PATH=/boyce_lab_website
```

The first draft intentionally keeps all page UI in `src/routes/+page.svelte`. Once the direction is approved, split it into reusable components under `src/lib/components` and move publication/project/person data into `src/lib/data`.
