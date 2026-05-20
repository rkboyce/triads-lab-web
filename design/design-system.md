# Design System

## Brand Tokens

```css
:root {
  --pitt-blue: #003594;
  --pitt-gold: #FFB81C;
  --pitt-white: #FFFFFF;
  --pitt-grey: #E8E9EE;
  --pitt-dark-grey: #2B2B2B;
  --link-blue: #3366FF;
  --ink: #18202F;
  --muted: #5D6676;
  --surface: #F7F8FB;
  --border: #D8DDE8;
  --success: #287D3C;
  --warning: #9A5A00;
}
```

## Accessibility Notes

- Do not use Pitt Gold as small text on white.
- Use Pitt Gold as an accent line, icon fill, focus ring, or dark-background link color.
- Body text should use `--ink` or `--pitt-dark-grey`.
- Buttons on Pitt Blue should use white text.
- Focus states should be visible: `2px solid var(--pitt-gold)` plus offset.
- Minimum body copy size: `16px`.
- Navigation and card controls should have at least `44px` touch target height.

## Typography

```css
--font-sans: Arial, Helvetica, sans-serif;
--step-0: 1rem;
--step-1: 1.125rem;
--step-2: 1.375rem;
--step-3: 1.75rem;
--step-4: 2.25rem;
--step-5: 3rem;
```

Use compact, dense academic layouts:

- H1: 44-56px desktop, 34-40px mobile.
- H2: 28-34px.
- H3/card title: 18-22px.
- Metadata: 14-15px.

Do not use negative letter spacing. Keep line length to roughly 62-76 characters for long prose.

## Layout

- Max content width: `1180px`.
- Page gutters: `24px` desktop, `18px` mobile.
- Grid gap: `20px` to `28px`.
- Card radius: `8px`.
- Avoid nested cards.
- Page sections should be full-width bands with constrained inner content.

## Visual Motifs

Use biomedical informatics visuals sparingly:

- Structured knowledge graph node-link diagrams.
- Evidence pipeline lanes.
- Publication and project status metadata.
- Compact research theme cards.

Avoid:

- Decorative gradient blobs.
- Oversized marketing cards.
- Athletics-heavy Pitt styling.
- Purely abstract hero imagery that does not signal informatics, medication safety, or evidence.

## Navigation

Primary nav:

- Research
- Projects
- Publications
- People
- Training
- Contact

Utility links:

- DBMI
- Pitt
- GitHub

## Component States

Buttons:

- Primary: Pitt Blue background, white text, gold top or left accent on hover.
- Secondary: white background, Pitt Blue border/text.
- Text link: Link blue on light, Pitt Gold on dark.

Cards:

- Use a 1px border, white background, 8px radius.
- Active/featured card gets a 4px Pitt Gold top border.

Tags:

- Blue tint background for research areas.
- Grey background for metadata.
- Do not place gold tags on white with small text.

## Svelte Implementation Notes

Store tokens in `src/lib/styles/tokens.css` and import from `src/routes/+layout.svelte`.

Suggested content data:

```ts
type ResearchTheme = {
  title: string;
  summary: string;
  methods: string[];
  href: string;
};

type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  tags: string[];
  doi?: string;
  href?: string;
};
```

