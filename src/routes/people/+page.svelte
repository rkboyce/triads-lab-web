<svelte:head><title>People - Boyce Lab</title></svelte:head>

<section class="people-page">
  <p class="eyebrow">People</p>
  <h1>Lab Leadership and Training</h1>
  <p class="lead">
    Profile links are kept separate from project pages so the site stays organized around research themes and selected project highlights.
  </p>

  <div class="people-grid">
    <article>
      <div class="avatar">RB</div>
      <div>
        <h2>Richard D. Boyce, PhD</h2>
        <p>Associate Professor of Biomedical Informatics with work spanning medication safety, clinical decision support, pharmacovigilance, knowledge representation, and responsible biomedical AI.</p>
        <div class="links">
          <a href="https://orcid.org/0000-0002-2993-2085" target="_blank" rel="noreferrer">ORCID</a>
          <a href="https://scholar.google.com/citations?user=cmWWPNcAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
        </div>
      </div>
    </article>
    <article>
      <div class="avatar">AI</div>
      <div>
        <h2>AIBIDS trainees</h2>
        <p>Students and mentors working in artificial intelligence, biomedical informatics, and data science through a structured summer research program.</p>
        <div class="links">
          <a href="https://www.aibids.org/" target="_blank" rel="noreferrer">AIBIDS program</a>
        </div>
      </div>
    </article>
  </div>
</section>

<style>
  .people-page { width: min(1040px, calc(100% - 40px)); margin: 48px auto 72px; }
  .eyebrow { margin: 0 0 10px; color: var(--pitt-blue); font-size: 0.86rem; font-weight: 900; text-transform: uppercase; }
  h1 { max-width: 760px; margin: 0 0 18px; color: var(--ink); font-size: clamp(2.1rem, 4vw, 3.2rem); line-height: 1.05; }
  h2 { margin: 0 0 8px; font-size: 1.2rem; }
  .lead { max-width: 740px; color: var(--muted); font-size: 1.15rem; }
  .people-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; margin-top: 28px; }
  .people-grid article { display: grid; grid-template-columns: 78px minmax(0, 1fr); gap: 16px; align-items: start; border: 1px solid var(--border); border-radius: var(--radius); background: var(--pitt-white); padding: 20px; }
  .people-grid p { color: var(--muted); }
  .avatar { display: grid; width: 78px; height: 78px; place-items: center; border-radius: var(--radius); background: var(--pitt-blue); color: var(--pitt-gold); font-size: 1.35rem; font-weight: 900; }
  .links { display: flex; flex-wrap: wrap; gap: 14px; font-weight: 900; }
  @media (max-width: 760px) { .people-grid { grid-template-columns: 1fr; } .people-grid article { grid-template-columns: 1fr; } }
</style>
