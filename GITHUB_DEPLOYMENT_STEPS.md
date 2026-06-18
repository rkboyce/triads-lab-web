# GitHub Deployment: Next Steps

## 2026-06-18 deployment status

- The deployment workflow now runs from `dev`.
- The workflow builds with `BASE_PATH=/triads-lab-web` so SvelteKit asset URLs match the project Pages path.
- The workflow has `contents: write` permission so `peaceiris/actions-gh-pages` can publish the compiled static files.
- The latest workflow run for commit `293d4f1` completed successfully and created/updated the `gh-pages` branch.
- The `gh-pages` branch contains the current TrIADS site, including the transparent logo, Google Scholar publications link, and direct contact email.
- The public URL `https://rkboyce.github.io/triads-lab-web/` still served the older placeholder page when checked immediately after deployment. That means the repository Pages setting likely still points at another source, or the Pages edge cache had not refreshed.

Manual GitHub setting still needed:

1. Open `https://github.com/rkboyce/triads-lab-web/settings/pages`.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set branch to `gh-pages` and folder to `/ (root)`.
4. Save.
5. Recheck `https://rkboyce.github.io/triads-lab-web/` after GitHub Pages finishes publishing.

Hosting notes:

- GitHub Pages supports project sites at `https://<owner>.github.io/<repositoryname>`, so this repo's expected project URL is `https://rkboyce.github.io/triads-lab-web/`.
- GitHub Pages is available for public repositories on GitHub Free.
- Relevant limits from GitHub Docs: published Pages sites may be no larger than 1 GB, Pages deployments time out after 10 minutes, and Pages has a soft bandwidth limit of 100 GB per month.
- For the current static TrIADS site, GitHub Pages should be a no-cost hosting option unless traffic or institutional requirements push the project toward a managed Pitt-hosted site or a custom-domain/CDN setup.

This document outlines recommended next steps to deploy this repo to GitHub Pages, and a quick audit of whether the provided GitHub Actions workflow is likely to succeed. I ran a local production build (`npm run build`) and it completed successfully and wrote static files to `build/`.

## Quick summary

- Local build: ✅ succeeded (wrote site to `build/`).
- CI workflow: A Pages workflow is present at `.github/workflows/pages.yml` that builds and publishes `./build` via `peaceiris/actions-gh-pages@v3` on pushes to `main`.

## Preconditions to check (before enabling automatic deploy)

- **Default branch**: Ensure the repository default branch is `main` (the workflow triggers on pushes to `main`). If your main branch is named `master` or something else, update the workflow or rename the branch.
- **GitHub Pages target**: The action publishes to the `gh-pages` branch by default. In your repository Settings → Pages, make sure Pages is configured to publish from the `gh-pages` branch (or the action's deploy behavior matches your chosen Pages source).
- **Base path for repo pages**: `svelte.config.js` uses an environment variable `BASE_PATH` (defaults to `''`) and writes static assets to `build/`. If you plan to serve the site at `https://<user>.github.io/<repo>` (a project page), set `BASE_PATH` to `/<repo>` so asset URLs are correct. If you will publish at the root (user/organization site), `BASE_PATH` can remain empty.
- **Node version**: Workflow uses Node.js 18 — ensure that is acceptable for your toolchain (it matched local environment during my test).

## Recommended workflow steps (what to do in the repo / GitHub)

1. Verify or set the repository default branch is `main`, or update `.github/workflows/pages.yml` to the branch you actually use.
2. (If using project pages) Set `BASE_PATH` for the build. Two options:
   - Edit the workflow to provide an environment variable before `npm run build` (example snippet):

```yaml
# inside .github/workflows/pages.yml -> steps
- name: Build
  env:
    BASE_PATH: "/<repo-name>"
  run: npm run build
```

   - Or configure the repository `Actions` secret / environment and reference it as `process.env.BASE_PATH` if you prefer secrets/environments.
3. Confirm Pages settings in the repo: Settings → Pages should be set to publish from the `gh-pages` branch (or the branch the action is pushing to).
4. Ensure the workflow triggers match your branching strategy (pushes to `main` will start the action).
5. (Optional) Add a `CNAME` file or Pages custom domain settings if you use a custom domain.
6. Push a test commit to the branch the workflow listens to (`main`) to trigger the build-and-deploy action.

## How to test locally (recommended before pushing)

- Build production locally and serve the `build/` folder:

```bash
npm ci
npm run build
npm run preview   # previews production build locally (SvelteKit)
# or use a static server if you prefer
npx serve build
```

## My audit / will it succeed?

- The repository contains a Pages workflow (`.github/workflows/pages.yml`) that:
  - checks out the code,
  - installs dependencies via `npm ci`,
  - runs `npm run build`, and
  - deploys `./build` with `peaceiris/actions-gh-pages@v3`.

- I executed `npm run build` locally and it completed successfully and wrote `build/` (so the build step itself should succeed on CI in a similar environment).

Potential blockers (I did NOT change or fix these):
- If your repo is published as a project page (not root), you must set `BASE_PATH` to `/<repo>` so assets reference the correct base path. Without this, the published site may have broken asset links.
- If your default branch is not `main`, the workflow will not trigger.
- GitHub Pages settings must allow publishing from the branch the action pushes to (the peaceiris action typically updates `gh-pages`). If Pages is configured differently, the site may not be served.
- If the repo relies on private packages, credentials, or other environment variables during build, the workflow may fail (I did not find evidence of such dependencies in the repo).

Overall likelihood of success: High for a standard project-page or user-page setup once `BASE_PATH` and branch settings align with your repository settings. The build itself is proven to succeed locally.

## Where I ran checks

- I ran `npm run build` locally in this workspace; output shows SvelteKit wrote files to `build/`.
- I did NOT run the GitHub Actions workflow or deploy anything.

---

If you want, I can:
- Add a small note to the workflow to set `BASE_PATH` automatically from the repository name (I will not change it without your go-ahead), or
- Open a PR with recommended workflow changes (branch name or env) so you can review them before merging.

Would you like me to add a suggested workflow patch as a branch/PR (no deploy)?
