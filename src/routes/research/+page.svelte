<script lang="ts">
  const highlights = [
    {
      title: 'PV Copilot',
      summary: 'AI-enabled pharmacovigilance tooling for consolidating safety reports, clinical data, drug labels, biomedical literature, signal metrics, and mechanistic evidence into an investigative workflow.',
      href: 'https://inventions.pitt.edu/technologies/pv-copilot-ai-powered--07530'
    },
    {
      title: 'Study Agent',
      summary: 'An OHDSI open-source project for AI-assisted, human-led observational study design using deterministic study design and phenotype tooling.',
      href: 'https://github.com/OHDSI/StudyAgent'
    },
    {
      title: 'AI-infused post-market safety monitoring',
      summary: 'A concept for monitoring marketed drugs and medicinal plants with AI, continuously updated knowledge graphs, adverse-event signal detection, and evidence summaries.',
      href: 'https://inventions.pitt.edu/technologies/ai-infused-post-market-safety--06710'
    },
    {
      title: 'PDDI-CDS',
      summary: 'HL7 FHIR implementation guide work for potential drug-drug interaction clinical decision support and computable CDS workflows.',
      href: 'https://build.fhir.org/ig/HL7/PDDI-CDS/'
    },
    {
      title: 'AIBIDS',
      summary: 'A mentored research training program in artificial intelligence, biomedical informatics, and data science.',
      href: 'https://www.aibids.org/'
    }
  ];
</script>

<svelte:head><title>Research - Boyce Lab</title></svelte:head>

<article class="research-page">
  <p class="eyebrow">Research</p>
  <h1>Current Themes and Project Highlights</h1>
  <p class="lead">
    The lab website is organized around active medication safety, clinical decision support, pharmacovigilance, biomedical AI, and training themes. Older project links should be promoted only after review and, where possible, replaced with durable DOI, PubMed, PMC, or publisher records.
  </p>

  <section>
    <h2>Themes</h2>
    <div class="theme-grid">
      <article>
        <h3>Evidence-centered pharmacovigilance</h3>
        <p>Methods for collecting, linking, reviewing, and explaining drug and natural-product safety evidence across heterogeneous sources.</p>
      </article>
      <article>
        <h3>Older adult medication safety</h3>
        <p>MEARS-related work on medication safety for older adults aging in place, including home health care transitions, reconciliation, handoffs, and caregiver support.</p>
      </article>
      <article>
        <h3>Computable CDS</h3>
        <p>Standards and workflows that make drug interaction evidence usable inside clinical decision support systems.</p>
      </article>
      <article>
        <h3>Human-AI real-world evidence tools</h3>
        <p>Workflows for Human-AI teams that support real-world evidence generation while preserving human review, deterministic checks, and traceable source evidence.</p>
      </article>
    </div>
  </section>

  <section>
    <h2>Stable Project References</h2>
    <div class="highlight-list">
      {#each highlights as highlight}
        <article>
          <h3>{highlight.title}</h3>
          <p>{highlight.summary}</p>
          <a href={highlight.href} target="_blank" rel="noreferrer">Learn more</a>
        </article>
      {/each}
    </div>
  </section>
</article>

<style>
  .research-page { width: min(1040px, calc(100% - 40px)); margin: 48px auto 72px; }
  .eyebrow { margin: 0 0 10px; color: var(--pitt-blue); font-size: 0.86rem; font-weight: 900; text-transform: uppercase; }
  h1 { max-width: 760px; margin: 0 0 18px; color: var(--ink); font-size: clamp(2.1rem, 4vw, 3.2rem); line-height: 1.05; }
  h2 { margin: 42px 0 16px; font-size: 1.7rem; }
  h3 { margin: 0 0 8px; font-size: 1.08rem; }
  .lead { max-width: 820px; color: var(--muted); font-size: 1.15rem; }
  .theme-grid, .highlight-list { display: grid; gap: 16px; }
  .theme-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .theme-grid article, .highlight-list article { border: 1px solid var(--border); border-radius: var(--radius); background: var(--pitt-white); padding: 20px; }
  .theme-grid p, .highlight-list p { color: var(--muted); }
  .highlight-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .highlight-list a { font-weight: 900; }
  @media (max-width: 1000px) { .theme-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (max-width: 820px) { .theme-grid, .highlight-list { grid-template-columns: 1fr; } }
</style>
