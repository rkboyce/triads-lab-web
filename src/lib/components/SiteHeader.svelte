<script lang="ts">
  import { base } from '$app/paths';

  const home = `${base}/`;
</script>

<a class="skip" href="#main">Skip to content</a>

<header>
  <div class="topbar">
    <div class="wrap topbar-inner">
      <span>University of Pittsburgh Department of Biomedical Informatics</span>
      <a href="{home}#contact">Contact the lab</a>
    </div>
  </div>
  <div class="wrap nav-inner">
    <a class="brand" href={home} aria-label="TrIADS Lab home">
      <img class="brand-logo" src="{base}/triads-lab-logo-transparent-clean.png" alt="TrIADS Lab, Pitt DBMI" />
    </a>
    <nav aria-label="Primary navigation">
      <a href="{base}/research">Research</a>
      <a href="{home}#methods">Methods</a>
      <a href="{base}/projects">Projects</a>
      <a href="{base}/publications">Publications</a>
      <a href="{base}/people">People</a>
      <a href="{home}#training">Training</a>
      <a href="{home}#contact">Contact</a>
    </nav>
  </div>
</header>

<style>
  .wrap { width: min(var(--max-width), calc(100% - 40px)); margin: 0 auto; }
  .skip { position: absolute; left: -999px; top: 12px; z-index: 50; background: var(--pitt-gold); color: var(--pitt-dark-grey); padding: 10px 14px; }
  .skip:focus { left: 12px; }
  header { background: var(--pitt-blue); border-bottom: 4px solid var(--pitt-gold); }
  .topbar { background: #0b285a; color: var(--pitt-white); font-size: 0.875rem; }
  .topbar-inner, .nav-inner { display: flex; justify-content: space-between; gap: 20px; align-items: center; }
  .topbar-inner { min-height: 34px; }
  .topbar a { color: var(--pitt-gold); font-weight: 800; }
  .nav-inner { min-height: 112px; padding: 12px 0; }
  .brand { display: flex; align-items: center; color: var(--pitt-white); min-width: 280px; }
  .brand:hover { text-decoration: none; }
  .brand-logo { display: block; width: clamp(320px, 34vw, 460px); height: auto; }
  nav { display: flex; justify-content: flex-end; gap: 4px; flex-wrap: wrap; }
  nav a { min-height: 44px; padding: 11px 12px; border-radius: 6px; color: var(--pitt-white); font-weight: 800; }
  nav a:hover { background: rgb(255 255 255 / 12%); color: var(--pitt-gold); text-decoration: none; }

  @media (max-width: 900px) {
    .topbar-inner, .nav-inner { align-items: start; flex-direction: column; }
    .nav-inner { padding: 16px 0; }
    nav { justify-content: flex-start; }
  }

  @media (max-width: 560px) {
    .wrap { width: min(var(--max-width), calc(100% - 28px)); }
    .brand { min-width: 0; }
    .brand-logo { width: min(100%, 320px); }
  }
</style>
