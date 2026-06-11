# Design Branch Summary

This compares the design branches against `main`, which is the original TrIADS Lab Svelte homepage draft. The `feature/dbmi-main-header` branch currently matches `main`, so it does not introduce a separate design direction.

## Baseline: `main`

The base page is a traditional research-lab homepage. It uses a sticky white header with a Pitt DBMI top bar, a large blue hero, a right-side knowledge-graph visual, and conventional stacked sections for research themes, projects, publications, people, and contact.

Its strengths are clear hierarchy, familiar navigation, and a complete homepage flow. The tradeoff is that it reads like a polished general lab site rather than a distinctive design exploration.

## `design/evidence-dashboard`

This branch keeps the baseline information architecture but makes the page feel more like a dashboard. It changes the hero from a dark blue block to a light dashboard-style surface, adds a visible metric row, and adds a method-stack panel beside the research themes.

Compared with `main`, the content is more scannable and evidence-oriented. It is the least disruptive design branch because it preserves most of the original homepage structure while adding credibility signals and a denser research summary.

## `design/transparent-logo-profile`

This branch mostly explores brand treatment and header polish. It introduces transparent and cleaned logo assets, adjusts the header to a Pitt-blue masthead, uses the transparent logo more prominently, and adds favicon/icon assets through `src/app.html`.

Compared with `main`, this is primarily a visual identity branch rather than a layout rethink. It keeps the original card, project, publication, and people sections but makes the brand area feel more integrated with Pitt colors and less boxed-in by logo background artifacts.

## `design/research-briefing`

This branch rewrites the homepage as a concise research briefing. It replaces the baseline knowledge-graph hero with a text-forward hero and a "Lab Focus" panel, changes the navigation labels to focus/pipeline/recent work/people/contact, and restructures sections around research priorities, evidence pipeline, publication streams, and collaborator contact.

Compared with `main`, this branch is more editorial and collaborator-facing. It has less visual ornamentation and fewer card grids, but the narrative is tighter: it explains what the lab does, what evidence flows through the work, and what outputs collaborators can expect.

## `design/layout-briefing-grid`

This branch turns the homepage into a structured briefing layout. It uses a Pitt-blue header with the cleaned transparent logo, a three-column hero area with a left page index, central hero copy, and a right lab-profile card. The body sections use a two-column layout with section markers on the left and dense rows/tables on the right.

Compared with `main`, this branch feels more like a briefing document or institutional profile. It reduces the graph-visual emphasis, increases page-level wayfinding, and makes the page easier to scan vertically. The design is more distinctive than the dashboard branch while still staying static and straightforward.

## `design/focus-popout-panel`

This branch adapts the layout-briefing-grid concept into an application-like shell. It adds a fixed left focus panel with section navigation, a toggleable collapsed mode, and a header/content/footer layout that shifts left or right depending on the panel state.

Compared with `design/layout-briefing-grid`, this is more interactive and more tool-like. Compared with `main`, it is a large departure: navigation becomes a persistent workspace control rather than a normal website header. The upside is strong section wayfinding; the risk is that it may feel heavier than a public lab homepage.

## `design/staging-left-sidebar`

This branch is the refined version of the focus-panel direction. It keeps the left sidebar and collapse interaction but replaces numeric section labels with short letter codes such as `RE`, `PR`, `PU`, `PE`, and `CO`. It also changes the pipeline markers from numbered circles to a vertical gold accent bar and adds a Vite filesystem allowance for the local staging setup.

Compared with `design/focus-popout-panel`, it is cleaner and less visually numeric. Compared with `main`, it is still the most application-like option, with the strongest persistent navigation pattern and the largest implementation footprint.

## Overall Variation

The branches fall into three clear families:

- Light enhancement: `design/evidence-dashboard` improves scanability while preserving the baseline homepage.
- Brand/header refinement: `design/transparent-logo-profile` mainly cleans up logo, favicon, and masthead treatment.
- Structural redesign: `design/research-briefing`, `design/layout-briefing-grid`, `design/focus-popout-panel`, and `design/staging-left-sidebar` each reshape the homepage around a stronger briefing or workspace concept.

For a conservative production path, `design/evidence-dashboard` or `design/transparent-logo-profile` are closest to `main`. For a more distinctive lab identity, `design/layout-briefing-grid` is the strongest static website direction. For an internal or tool-like experience, `design/staging-left-sidebar` is the most developed sidebar option.
