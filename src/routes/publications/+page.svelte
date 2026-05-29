<script lang="ts">
  import PublicationList from '$lib/components/PublicationList.svelte';
  import { publications } from '$lib/data/publications';
</script>

<svelte:head><title>Publications - Boyce Lab</title></svelte:head>

<section class="publications-page">
  <p class="eyebrow">Publications</p>
  <h1>Publication Profiles and Curated Outputs</h1>
  <p class="lead">
    A concise publication hub should help visitors find authoritative profiles quickly, then scan selected outputs by research area without turning this page into a full CV mirror.
  </p>

  <div class="profile-grid">
    <a class="profile-card" href="https://orcid.org/0000-0002-2993-2085" target="_blank" rel="noreferrer">
      <span>ORCID</span>
      <strong>Author identity and persistent research profile</strong>
    </a>
    <a class="profile-card" href="https://scholar.google.com/citations?user=cmWWPNcAAAAJ&hl=en" target="_blank" rel="noreferrer">
      <span>Google Scholar</span>
      <strong>Publication discovery and citation index</strong>
    </a>
  </div>

  <div class="curation-note">
    <h2>Launch Curation Rule</h2>
    <p>Promote only durable records: DOI, PubMed, PMC, publisher pages, standards implementation guides, or maintained repositories. Hold legacy pages until links and citation targets are reviewed.</p>
  </div>

  <div class="section-head">
    <div>
      <h2>Curated Publication Areas</h2>
      <p>These rows are organized as launch-ready buckets. Replace each placeholder row with specific citation records as they are approved.</p>
    </div>
  </div>

  <PublicationList {publications} />
</section>

<style>
  .publications-page { width: min(1040px, calc(100% - 40px)); margin: 48px auto 72px; }
  .eyebrow { margin: 0 0 10px; color: var(--pitt-blue); font-size: 0.86rem; font-weight: 900; text-transform: uppercase; }
  h1 { max-width: 800px; margin: 0 0 18px; color: var(--ink); font-size: clamp(2.1rem, 4vw, 3.2rem); line-height: 1.05; }
  h2 { margin: 0 0 8px; font-size: 1.35rem; }
  .lead { max-width: 820px; color: var(--muted); font-size: 1.15rem; }
  .profile-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin: 28px 0; }
  .profile-card { display: grid; gap: 8px; border: 1px solid var(--border); border-radius: var(--radius); background: var(--pitt-blue); color: var(--pitt-white); padding: 20px; }
  .profile-card:hover { color: var(--pitt-white); text-decoration: none; }
  .profile-card span { color: var(--pitt-gold); font-size: 0.82rem; font-weight: 900; text-transform: uppercase; }
  .profile-card strong { font-size: 1.1rem; line-height: 1.25; }
  .curation-note { border-left: 5px solid var(--pitt-gold); background: var(--surface); padding: 18px 20px; margin: 0 0 36px; }
  .curation-note p, .section-head p { margin: 0; color: var(--muted); }
  .section-head { display: flex; justify-content: space-between; gap: 24px; align-items: end; margin-bottom: 18px; }

  @media (max-width: 760px) {
    .profile-grid { grid-template-columns: 1fr; }
    .section-head { align-items: start; flex-direction: column; }
  }
</style>
