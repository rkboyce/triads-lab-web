# GitHub Deployment Steps

This repo is configured to deploy the SvelteKit static build to GitHub Pages using GitHub Actions.

## Current configuration

- Workflow file: `.github/workflows/pages.yml`
- Trigger branch: `main`
- Manual trigger: enabled with `workflow_dispatch`
- Node version in CI: `20`
- Build command: `npm run build`
- Static output directory: `build/`
- Pages deploy action: `actions/deploy-pages@v4`
- Pages artifact action: `actions/upload-pages-artifact@v3`
- Project Pages base path: `BASE_PATH=/triads-lab-web`
- Expected public URL: `https://rkboyce.github.io/triads-lab-web/`

## GitHub repository settings

Check these settings before relying on automatic deployment:

1. Open `https://github.com/rkboyce/triads-lab-web/settings/pages`.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Save the setting if GitHub prompts for confirmation.
4. Confirm the repository default branch is `main`, or update `.github/workflows/pages.yml` to match the branch you actually deploy from.

The current workflow does not publish to a `gh-pages` branch. It uploads the `build/` directory as a Pages artifact and deploys it through GitHub's Pages deployment API.

## Deploy from GitHub

Use either path:

1. Push a commit to `main`.
2. Or open the workflow in GitHub Actions and run **Deploy to GitHub Pages** manually.

Then verify:

1. Open the workflow run and confirm both jobs complete:
   - `build`
   - `deploy`
2. Open `https://rkboyce.github.io/triads-lab-web/`.
3. Hard refresh if the previous version is still cached.

## Local development and `.env`

The local `.env` file exists to set `BASE_PATH` for SvelteKit while developing or previewing the site locally. `svelte.config.js` reads `process.env.BASE_PATH` and passes it to `kit.paths.base`, which controls the URL prefix for app routes and generated assets.

Current local files:

```bash
.env
.env.example
```

Both currently contain:

```bash
BASE_PATH=/boyce_lab_website
```

That value makes the local site run under `/boyce_lab_website/`, which matches the older local/recovered folder naming. The GitHub Pages deployment uses a different path, `/triads-lab-web`, because the deployed repository URL is `https://rkboyce.github.io/triads-lab-web/`.

For local development in Git Bash or WSL, load `.env` before starting Vite:

```bash
MSYS_NO_PATHCONV=1 env $(cat .env) npm run dev -- --host 127.0.0.1
```

Then open the local URL printed by Vite, commonly:

```text
http://127.0.0.1:5173/boyce_lab_website/
```

For local development in PowerShell, set the variable in the current session:

```bash
$env:BASE_PATH = "/boyce_lab_website"
npm run dev -- --host 127.0.0.1
```

Clear it afterward if you want future commands in the same terminal to run from the site root:

```bash
Remove-Item Env:BASE_PATH
```

Do not put secrets in `.env` for this project. The current `.env` is only a local path configuration file, and the GitHub Actions workflow sets its deployment path directly in `.github/workflows/pages.yml`.

## Local verification before pushing

Run the same build locally before pushing a deployment commit:

```bash
npm ci
npm run build
npm run preview
```

For this project-page URL, the production build must use `BASE_PATH=/triads-lab-web`. The GitHub workflow already sets that value. If you test the project-page paths locally, run:

```bash
$env:BASE_PATH = "/triads-lab-web"
npm run build
npm run preview
```

PowerShell keeps `$env:BASE_PATH` for the current terminal session. Clear it afterward if you want local routes to run from the site root again:

```bash
Remove-Item Env:BASE_PATH
```

## Troubleshooting

- If the workflow does not start, confirm the commit was pushed to `main` or use the manual `workflow_dispatch` trigger.
- If the build fails, run `npm ci` and `npm run build` locally and fix the first local error before retrying CI.
- If the site loads without styles or navigation assets, confirm the workflow still sets `BASE_PATH=/triads-lab-web`.
- If GitHub Pages shows an older site, confirm Pages source is set to **GitHub Actions**, then wait a few minutes and hard refresh.
- If the deploy job fails with a permissions error, confirm `.github/workflows/pages.yml` still includes:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

## Hosting notes

- GitHub Pages supports project sites at `https://<owner>.github.io/<repository>/`.
- GitHub Pages is available for public repositories on GitHub Free.
- GitHub's published Pages limits include a 1 GB published-site size limit, a 10 minute deployment timeout, and a soft bandwidth limit of 100 GB per month.
- The current static TrIADS site should fit comfortably within those limits unless traffic or institutional hosting requirements change.
