# GitHub Pages Setup Steps for the TRIADS Lab Website

## gitrepo init basics

Starting on GitHub.com means the remote repository is created first, then cloned locally.

### 1. Create the repository on GitHub.com

1. Sign in to [github.com](https://github.com).
2. Click the **+** icon in the upper-right corner > **New repository**.
3. Use the **Owner** dropdown to select the account or organization.
4. Enter a **Repository name** (e.g. `triads-lab`).
5. Set **Visibility** to **Public** (required for GitHub Pages on free accounts).
6. Check **Add a README file**.
7. Optionally add a `.gitignore` and a license.
8. Click **Create repository**.

### 2. Clone it to your local machine

On the repository page, click the green **Code** button and copy the HTTPS URL, then clone it locally.

### 3. Enable GitHub Pages

1. In the repository, click the **Settings** tab.
2. In the left sidebar under **Code and automation**, click **Pages**.
3. Under **Build and deployment** > **Source**, choose one of:
   - **Deploy from a branch** — for a simple Jekyll or static site
   - **GitHub Actions** — for Quarto or a custom build workflow
4. If using **Deploy from a branch**:
   - Select the branch (e.g. `main`).
   - Select the folder: `/ (root)` for Jekyll, or `/docs` for Quarto with `output-dir: docs`.
   - Click **Save**.
5. If using **GitHub Actions**:
   - GitHub will suggest workflow templates. Select one or add your own `.github/workflows/publish.yml`.

### 4. View the published site

1. Go to **Settings** > **Pages**.
2. Once deployed, a **Visit site** link appears at the top of the page.
3. The URL will be:
   - Project site: `https://<github-owner>.github.io/<repository-name>/`
   - User/org site: `https://<github-owner>.github.io/`

> **Note:** The first deployment can take a few minutes. Check the **Actions** tab to monitor the workflow run.

## custom stack option (e.g. Svelte)

GitHub Pages is not limited to Jekyll or Quarto. It will serve any static output — the build tool does not matter as long as the result is plain HTML/CSS/JS.

**Svelte / SvelteKit** is a strong candidate if the lab wants a modern, component-based UI. SvelteKit supports a fully static export mode via `@sveltejs/adapter-static`.

### Why Svelte might be a good fit

- Minimal boilerplate — components are plain `.svelte` files
- Fast builds and small bundle sizes
- Static adapter produces a plain `build/` folder ready for GitHub Pages
- Familiar to anyone who has used React or Vue
- Good fit for a lab site that may eventually need interactive components (e.g. filterable publication lists, project cards)

### SvelteKit static setup (overview)

1. Scaffold the project:

```bash
npx sv create triads-lab
cd triads-lab
npm install
```

2. Install the static adapter:

```bash
npm install -D @sveltejs/adapter-static
```

3. In `svelte.config.js`, switch the adapter:

```js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: '/<repository-name>'   // required for project sites
    }
  }
};
```

4. Build locally to verify:

```bash
npm run build
```

Output lands in `build/`.

### GitHub Actions workflow for SvelteKit

```yaml
name: Deploy SvelteKit to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

In **Settings** > **Pages**, set **Source** to **GitHub Actions**.

### Tradeoffs vs Jekyll / Quarto

| | Jekyll | Quarto | SvelteKit |
|---|---|---|---|
| Setup complexity | Low | Medium | Medium |
| GitHub Pages native | Yes | No | No (needs Actions) |
| Academic publishing | Basic | Strong | Manual |
| Interactive UI | None | Limited | Strong |
| Content in Markdown | Yes | Yes | Yes (via mdsvex) |
| Good for lab site | Yes | Yes | Yes |
| Languages used | Ruby (Jekyll), Markdown | R, Python, Markdown | JavaScript / TypeScript, HTML, CSS |

If the site is mostly static content pages with minimal interactivity, Jekyll or Quarto is simpler to maintain long-term. If the lab wants a more polished, component-driven UI or interactive features, SvelteKit is worth the extra setup.

## next steps

This guide turns the initial website proposal into a concrete setup checklist for a lightweight University of Pittsburgh DBMI research lab website hosted with GitHub Pages.

The recommended approach is:

- Use GitHub as the source repository.
- Use GitHub Pages for hosting.
- Use [Jekyll](https://jekyllrb.com/) if the site should stay very simple and GitHub-native.
- Use [Quarto](https://quarto.org/) if the lab wants richer academic publishing features, such as publication lists, rendered notebooks, or structured research pages.
- Keep content in Markdown so future students and staff can update pages without learning a full web framework.

## 1. Decide the Repository Type

Choose one of these two repository patterns.

### Option A: Project Site

Use this if the lab website will live under an existing GitHub organization or user account.

Example URL:

```text
https://<github-owner>.github.io/<repository-name>/
```

Example repository name:

```text
triads-lab
```

This is usually the safest starting point because it does not require a special repository name.

### Option B: User or Organization Site

Use this if the website should be the main GitHub Pages site for a GitHub account or organization.

Repository name format:

```text
<github-owner>.github.io
```

Example URL:

```text
https://<github-owner>.github.io/
```

This is cleaner, but it requires control over the GitHub account or organization that will own the site.

## 2. Create the GitHub Repository

1. Sign in to GitHub.
2. Create a new repository.
3. Use a clear name, such as:

```text
triads-lab
```

4. Set visibility to public unless the lab has a reason to keep the source private.
5. Add a `README.md`.
6. Choose a license if the lab wants the website source or content to be reusable.
7. Clone the repository locally.

Example:

```powershell
git clone https://github.com/<github-owner>/triads-lab.git
cd triads-lab
```

## 3. Choose the Site Generator

### Recommended for the First Version: Jekyll

Use Jekyll if the site will mostly contain static lab pages:

- Home
- Research
- Projects
- Publications
- Team
- Collaborators
- Software / Data Resources
- News
- Contact

Jekyll is the simplest GitHub Pages option because GitHub Pages has native support for it.

### Recommended for a More Academic Publishing Workflow: Quarto

Use Quarto if the lab expects to maintain:

- Publication pages generated from structured metadata
- Rendered reports or notebooks
- Research project pages with figures and tables
- More flexible academic document layouts

Quarto is still very manageable, but it usually benefits from a GitHub Actions deployment workflow instead of the simplest branch-only GitHub Pages setup.

## 4. Suggested Starting Structure

For a simple Jekyll or static Markdown site:

```text
triads-lab/
  README.md
  _config.yml
  index.md
  research.md
  projects.md
  publications.md
  team.md
  collaborators.md
  resources.md
  news.md
  contact.md
  assets/
    css/
      style.css
    images/
```

For Quarto:

```text
triads-lab/
  README.md
  _quarto.yml
  index.qmd
  research.qmd
  projects.qmd
  publications.qmd
  team.qmd
  collaborators.qmd
  resources.qmd
  news.qmd
  contact.qmd
  styles.css
```

## 5. Add Minimal Jekyll Files

If using Jekyll, create `_config.yml`:

```yaml
title: TRIADS Lab
description: University of Pittsburgh DBMI research group
theme: minima

url: "https://<github-owner>.github.io"
baseurl: "/triads-lab"

plugins:
  - jekyll-feed
  - jekyll-seo-tag
```

For a project site, keep `baseurl` set to the repository name with a leading slash.

For a user or organization site, set:

```yaml
baseurl: ""
```

Create `index.md`:

```markdown
---
layout: home
title: Home
---

# TRIADS Lab

University of Pittsburgh DBMI research group focused on data science, biomedical informatics, and translational research.
```

Add one Markdown file for each major navigation page.

## 6. Add Minimal Quarto Files

If using Quarto, create `_quarto.yml`:

```yaml
project:
  type: website
  output-dir: docs

website:
  title: "TRIADS Lab"
  navbar:
    left:
      - text: Home
        href: index.qmd
      - text: Research
        href: research.qmd
      - text: Projects
        href: projects.qmd
      - text: Publications
        href: publications.qmd
      - text: Team
        href: team.qmd
      - text: Collaborators
        href: collaborators.qmd
      - text: Resources
        href: resources.qmd
      - text: News
        href: news.qmd
      - text: Contact
        href: contact.qmd

format:
  html:
    theme: cosmo
    css: styles.css
```

Create `index.qmd`:

```markdown
---
title: "TRIADS Lab"
---

University of Pittsburgh DBMI research group focused on data science, biomedical informatics, and translational research.
```

Render locally:

```powershell
quarto render
```

This creates the static site in the `docs/` folder.

## 7. Configure GitHub Pages

On GitHub:

1. Open the repository.
2. Go to `Settings`.
3. Open `Pages`.
4. Under `Build and deployment`, choose the source.

For a simple Jekyll site:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

For a Quarto site using `output-dir: docs`:

```text
Source: Deploy from a branch
Branch: main
Folder: /docs
```

GitHub notes that Pages can publish from a branch/folder, or from a GitHub Actions workflow. If the site uses a custom build process, GitHub recommends using GitHub Actions.

## 8. Commit and Push the First Version

```powershell
git status
git add .
git commit -m "Initial lab website setup"
git push origin main
```

After pushing, GitHub Pages may take a few minutes to build and publish.

Expected project-site URL:

```text
https://<github-owner>.github.io/triads-lab/
```

Expected user or organization site URL:

```text
https://<github-owner>.github.io/
```

## 9. Optional: Use GitHub Actions for Quarto

For Quarto, GitHub Actions is often the better long-term deployment option because it renders the site during deployment.

Create:

```text
.github/workflows/publish.yml
```

Example workflow:

```yaml
name: Publish Quarto Website

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Set up Quarto
        uses: quarto-dev/quarto-actions/setup@v2

      - name: Render site
        run: quarto render

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Then configure GitHub Pages:

```text
Source: GitHub Actions
```

## 10. Optional: Add a Custom Domain

If the lab wants a professional URL, coordinate with Pitt IT or DBMI IT.

Possible examples:

```text
triads.dbmi.pitt.edu
triads.pitt.edu
```

High-level steps:

1. Confirm the approved domain or subdomain with the relevant Pitt/DBMI web or IT office.
2. In the GitHub repository, go to `Settings` > `Pages`.
3. Enter the custom domain.
4. Add the required DNS record through the domain administrator.
5. Enable `Enforce HTTPS` once GitHub verifies the domain.

Do not configure a custom domain until the owning Pitt unit approves the name and DNS setup.

## 11. Pitt Branding and Accessibility Notes

Before sharing the site publicly:

- Use Pitt colors conservatively and consistently.
- Include clear lab affiliation with the University of Pittsburgh and DBMI.
- Add descriptive alt text for meaningful images.
- Use readable heading order.
- Avoid text embedded inside images when possible.
- Make contact information easy to find.
- Verify that publication and collaborator lists are accurate.
- Confirm whether the lab needs a Pitt footer, disclaimer, privacy link, or other institutional language.

## 12. Maintenance Workflow

Recommended update process:

1. Create a small branch for each content update.
2. Edit Markdown or Quarto files.
3. Preview locally if possible.
4. Open a pull request.
5. Ask the PI, lab manager, or designated maintainer to review.
6. Merge to `main`.
7. Confirm the GitHub Pages deployment succeeds.

Suggested branch names:

```text
update-publications-2026-05
add-new-team-member
revise-research-page
```

Suggested commit messages:

```text
Update publications page
Add new project description
Revise lab contact information
```

## 13. First Launch Checklist

- Repository exists on GitHub.
- GitHub Pages is enabled.
- Homepage loads.
- Navigation links work.
- Team page is accurate.
- Publications page is accurate.
- Contact information is correct.
- Images have alt text.
- Site works on mobile.
- Site works in Chrome, Edge, Firefox, and Safari if available.
- PI or lab designee has reviewed the content.
- Pitt/DBMI branding and public-facing language have been checked.

## 14. Troubleshooting

### Site Shows a 404

- Confirm GitHub Pages is enabled in `Settings` > `Pages`.
- Confirm the selected branch and folder match the files in the repository.
- For project sites, confirm the URL includes the repository name.
- Wait a few minutes after the first deployment.

### CSS or Links Are Broken

- For a project Jekyll site, confirm `baseurl` is set to the repository name.
- Prefer relative links where possible.
- Avoid hardcoding local file paths.

### Quarto Site Does Not Update

- Run `quarto render` locally.
- Confirm generated files exist in `docs/`.
- Confirm GitHub Pages is publishing from `main` and `/docs`, or that the GitHub Actions workflow completed successfully.

### GitHub Actions Deployment Fails

- Open the failed workflow run in the repository `Actions` tab.
- Check whether Quarto setup completed.
- Check whether `quarto render` failed because of a missing file, broken link, or invalid YAML.
- Confirm repository Pages settings use `GitHub Actions` as the source.

## References

- GitHub Docs, "Configuring a publishing source for your GitHub Pages site": https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Quarto Docs, "GitHub Pages": https://quarto.org/docs/publishing/github-pages.html
