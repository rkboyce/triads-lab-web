<svelte:head><title>Training - Boyce Lab</title></svelte:head>

<section class="training-page">
  <p class="eyebrow">Training</p>
  <h1>Mentored Informatics Training</h1>
  <p class="lead">
    The lab frames training around applied biomedical informatics work: medication safety, clinical decision support, evidence representation, and responsible AI-assisted research workflows.
  </p>

  <div class="training-grid">
    <article class="feature">
      <span>AIBIDS</span>
      <h2>AI, Biomedical Informatics, and Data Science Research Experience</h2>
      <p>
        AIBIDS is the clearest current public training pathway to feature. It connects undergraduate trainees with mentored projects across AI, biomedical informatics, and data science.
      </p>
      <a href="https://www.aibids.org/" target="_blank" rel="noreferrer">Visit AIBIDS</a>
    </article>

    <article class="panel">
      <h2>Mentoring Areas</h2>
      <ul>
        <li>Medication safety and pharmacovigilance workflows</li>
        <li>Drug interaction clinical decision support</li>
        <li>Knowledge graphs, ontologies, and FHIR resources</li>
        <li>Human-led AI tools for study design and evidence review</li>
      </ul>
    </article>

    <article class="panel">
      <h2>Good Fit</h2>
      <p>
        Prospective trainees should be interested in rigorous informatics methods, careful source grounding, and tools that support expert review rather than replacing it.
      </p>
    </article>
  </div>
</section>

<style>
  .training-page { width: min(1040px, calc(100% - 40px)); margin: 48px auto 72px; }
  .eyebrow { margin: 0 0 10px; color: var(--pitt-blue); font-size: 0.86rem; font-weight: 900; text-transform: uppercase; }
  h1 { max-width: 780px; margin: 0 0 18px; color: var(--ink); font-size: clamp(2.1rem, 4vw, 3.2rem); line-height: 1.05; }
  h2 { margin: 0 0 12px; font-size: 1.3rem; line-height: 1.2; }
  .lead { max-width: 820px; color: var(--muted); font-size: 1.15rem; }
  .training-grid { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr); gap: 18px; margin-top: 28px; }
  .feature, .panel { border: 1px solid var(--border); border-radius: var(--radius); background: var(--pitt-white); padding: 22px; }
  .feature { grid-row: span 2; border-top: 5px solid var(--pitt-gold); }
  .feature span { color: var(--pitt-blue); font-size: 0.82rem; font-weight: 900; text-transform: uppercase; }
  .feature p, .panel p, li { color: var(--muted); }
  .feature a { display: inline-flex; margin-top: 10px; font-weight: 900; }
  ul { margin: 0; padding-left: 20px; }
  li + li { margin-top: 8px; }

  @media (max-width: 760px) {
    .training-grid { grid-template-columns: 1fr; }
    .feature { grid-row: auto; }
  }
</style>
