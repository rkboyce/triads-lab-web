# Boyce / TrIADS Lab Website First Draft

SvelteKit static-site first draft based on the design artifacts in the TRIADS planning folder.

## Local development, recommended: Linux or WSL

Use Linux or WSL for local development and deployment work. This avoids Windows
path and symlink edge cases in Vite/SvelteKit dependency resolution.

From a WSL shell:

```bash
cd /mnt/c/pitt/boyce_lab_website
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

## Local development, Windows PowerShell fallback

```powershell
npm.cmd install
npm.cmd run dev
```

Then open the local URL printed by Vite.

If Vite reports that port `5173` is already in use, close the existing dev
server or stop the owning process before starting another one:

```powershell
Get-NetTCPConnection -LocalPort 5173 -State Listen | Select-Object LocalAddress,LocalPort,OwningProcess
Stop-Process -Id <OwningProcess>
```

If the browser or Vite error mentions another project path under `node_modules`,
remove `node_modules` and reinstall dependencies in this repository before
starting the app again.

## Static build, Windows PowerShell fallback

```powershell
npm.cmd run build
npm.cmd run preview
```

## GitHub Pages

For a project site, set `BASE_PATH` during the production build, for example:

```powershell
$env:BASE_PATH='/boyce_lab_website'
npm.cmd run build
```

The first draft intentionally keeps all page UI in `src/routes/+page.svelte`. Once the direction is approved, split it into reusable components under `src/lib/components` and move publication/project/person data into `src/lib/data`.
