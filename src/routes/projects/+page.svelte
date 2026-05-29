<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects } from '$lib/data/projects';
</script>

<svelte:head><title>Projects - Boyce Lab</title></svelte:head>

<section class="projects-page">
  <p class="eyebrow">Projects</p>
  <h1>Selected Project Highlights</h1>
  <p class="lead">
    This page collects public-facing project references with stable destinations. Older project microsites and tracking links should be reviewed before they are promoted here.
  </p>

  <div class="project-grid">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>

<style>
  .projects-page { width: min(1040px, calc(100% - 40px)); margin: 48px auto 72px; }
  .eyebrow { margin: 0 0 10px; color: var(--pitt-blue); font-size: 0.86rem; font-weight: 900; text-transform: uppercase; }
  h1 { max-width: 760px; margin: 0 0 18px; color: var(--ink); font-size: clamp(2.1rem, 4vw, 3.2rem); line-height: 1.05; }
  .lead { max-width: 820px; color: var(--muted); font-size: 1.15rem; }
  .project-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; margin-top: 28px; }

  @media (max-width: 820px) {
    .project-grid { grid-template-columns: 1fr; }
  }
</style>
