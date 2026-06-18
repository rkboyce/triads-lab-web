<script lang="ts">
  import { base } from '$app/paths';

  const home = `${base}/`;
  const scholarUrl = 'https://scholar.google.com/citations?user=cmWWPNcAAAAJ&hl=en';
</script>

<footer>
  <div class="wrap footer-inner">
    <div>
      <strong>TrIADS Lab</strong>
      <span>University of Pittsburgh Department of Biomedical Informatics</span>
    </div>
    <nav aria-label="Footer navigation">
      <a href="{home}#research">Research</a>
      <a href="{home}#projects">Projects</a>
      <a href={scholarUrl} target="_blank" rel="noreferrer">Publications</a>
      <a href="{base}/people">People</a>
      <a href="{base}/people#training">Training</a>
      <a href="{home}#contact">Contact</a>
      <a href="https://www.dbmi.pitt.edu/" target="_blank" rel="noreferrer">DBMI</a>
      <a href="https://www.pitt.edu/" target="_blank" rel="noreferrer">Pitt</a>
    </nav>
  </div>
</footer>

<style>
  .wrap { width: min(var(--max-width), calc(100% - 40px)); margin: 0 auto; }
  footer { padding: 34px 0; background: #101827; color: #dce4f5; font-size: 0.92rem; }
  .footer-inner { display: flex; justify-content: space-between; gap: 20px; align-items: center; }
  .footer-inner div { display: grid; gap: 4px; }
  strong { color: var(--pitt-white); font-size: 1.02rem; }
  nav { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 12px 16px; }
  footer a { color: var(--pitt-gold); font-weight: 800; }

  @media (max-width: 900px) {
    .footer-inner { align-items: start; flex-direction: column; }
    nav { justify-content: flex-start; }
  }
</style>
