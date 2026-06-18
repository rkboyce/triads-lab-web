<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head><title>People - Boyce Lab</title></svelte:head>

<section class="people-page">
  <p class="eyebrow">People</p>
  <h1>Lab Leadership and Training</h1>
  <p class="lead">
    The lab brings together medication safety informatics, clinical decision support, knowledge representation, and responsible AI training. This page focuses on research leadership and trainee pathways rather than teaching history.
  </p>

  <div class="profile-layout">
    <article class="profile-card leader-card">
      <div class="avatar">RB</div>
      <div>
        <p class="card-label">Principal investigator</p>
        <h2>Richard D. Boyce, PhD</h2>
        <p>
          Tenured Associate Professor of Biomedical Informatics with secondary appointments in Pharmacy and Intelligent Systems. His research program focuses on AI-driven health data science for medication safety, pharmacovigilance, clinical decision support, and knowledge infrastructure.
        </p>
        <div class="links">
          <a href="https://orcid.org/0000-0002-2993-2085" target="_blank" rel="noreferrer">ORCID</a>
          <a href="https://scholar.google.com/citations?user=cmWWPNcAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
        </div>
      </div>
    </article>

    <article id="training" class="profile-card training-card">
      <div class="avatar">AI</div>
      <div>
        <p class="card-label">Training pathway</p>
        <h2>AIBIDS Trainees</h2>
        <p>
          AIBIDS is the clearest current public training pathway for students working in artificial intelligence, biomedical informatics, and data science with University of Pittsburgh and Gallaudet University mentors.
        </p>
        <div class="links">
          <a href="https://www.aibids.org/" target="_blank" rel="noreferrer">AIBIDS program</a>
          <a href="#training">Training pathway</a>
        </div>
      </div>
    </article>
  </div>

  <div class="section-head">
    <div>
      <h2>Mentoring Areas</h2>
      <p>Prospective trainees should see where their work could connect to active lab themes.</p>
    </div>
    <a href="{base}/#contact">Contact the lab</a>
  </div>

  <div class="area-grid">
    <article>
      <h3>Medication Safety Informatics</h3>
      <p>Adverse event review, pharmacovigilance evidence, natural product safety, and older-adult medication risk.</p>
    </article>
    <article>
      <h3>Clinical Decision Support</h3>
      <p>Drug interaction evidence, FHIR/CDS standards, tailored alerts, and computable implementation guidance.</p>
    </article>
    <article>
      <h3>Knowledge Representation</h3>
      <p>Knowledge graphs, ontologies, evidence models, and reusable data resources for biomedical safety work.</p>
    </article>
    <article>
      <h3>Responsible Biomedical AI</h3>
      <p>Human-led AI workflows for study design, evidence review, source-grounded summaries, and reproducible tools.</p>
    </article>
  </div>

  <section class="outcomes">
    <div>
      <p class="card-label">Mentorship outcomes</p>
      <h2>Trainee Paths</h2>
      <p>
        The CV source highlights mentoring across PhD, MS, postdoctoral, and undergraduate trainees, including former trainees who moved into faculty and NIH K99/R00 awardee roles. The public site should present this as a lab training strength without copying a full CV mentorship table.
      </p>
    </div>
    <div class="outcome-list">
      <span>PhD and MS research mentoring</span>
      <span>Postdoctoral informatics training</span>
      <span>Undergraduate AI and data science pathways</span>
      <span>Former trainees in academic roles</span>
    </div>
  </section>
</section>

<style>
  .people-page { width: min(1040px, calc(100% - 40px)); margin: 48px auto 72px; }
  .eyebrow { margin: 0 0 10px; color: var(--pitt-blue); font-size: 0.86rem; font-weight: 900; text-transform: uppercase; }
  h1 { max-width: 760px; margin: 0 0 18px; color: var(--ink); font-size: clamp(2.1rem, 4vw, 3.2rem); line-height: 1.05; }
  h2 { margin: 0 0 8px; font-size: 1.35rem; line-height: 1.2; }
  h3 { margin: 0 0 8px; font-size: 1.05rem; line-height: 1.25; }
  .lead { max-width: 820px; color: var(--muted); font-size: 1.15rem; }
  .profile-layout { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr); gap: 18px; margin-top: 28px; }
  .profile-card, .area-grid article, .outcomes { border: 1px solid var(--border); border-radius: var(--radius); background: var(--pitt-white); padding: 22px; }
  .profile-card { display: grid; grid-template-columns: 78px minmax(0, 1fr); gap: 16px; align-items: start; }
  .leader-card { border-top: 5px solid var(--pitt-gold); }
  .training-card { border-top: 5px solid var(--pitt-blue); }
  .profile-card p, .area-grid p, .outcomes p, .section-head p { color: var(--muted); }
  .card-label { margin: 0 0 8px; color: var(--pitt-blue); font-size: 0.78rem; font-weight: 900; text-transform: uppercase; }
  .avatar { display: grid; width: 78px; height: 78px; place-items: center; border-radius: var(--radius); background: var(--pitt-blue); color: var(--pitt-gold); font-size: 1.35rem; font-weight: 900; }
  .links { display: flex; flex-wrap: wrap; gap: 14px; font-weight: 900; }
  .section-head { display: flex; justify-content: space-between; gap: 24px; align-items: end; margin: 38px 0 18px; }
  .section-head p { margin: 0; }
  .section-head a { font-weight: 900; }
  .area-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
  .outcomes { display: grid; grid-template-columns: minmax(0, 1fr) minmax(280px, 0.75fr); gap: 24px; margin-top: 28px; align-items: start; border-left: 5px solid var(--pitt-gold); }
  .outcome-list { display: grid; gap: 10px; }
  .outcome-list span { border-radius: 6px; background: var(--surface); padding: 10px 12px; color: var(--ink); font-weight: 800; }

  @media (max-width: 760px) {
    .profile-layout, .area-grid, .outcomes { grid-template-columns: 1fr; }
    .profile-card { grid-template-columns: 1fr; }
    .section-head { align-items: start; flex-direction: column; }
  }
</style>
