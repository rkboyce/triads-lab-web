<script lang="ts">
  import { base } from '$app/paths';
  import TagList from '$lib/components/TagList.svelte';

  export let data;

  const project = data.project;
</script>

<svelte:head><title>{project.title} - Boyce Lab</title></svelte:head>

<section class="project-page">
  <a class="back-link" href="{base}/projects">Back to projects</a>
  <p class="eyebrow">{project.status}</p>
  <h1>{project.title}</h1>
  <p class="type">{project.type}</p>
  <p class="lead">{project.summary}</p>

  <div class="project-layout">
    <article class="panel main-panel">
      <h2>Project Focus</h2>
      <ul>
        {#each project.focus as item}
          <li>{item}</li>
        {/each}
      </ul>
    </article>

    <aside class="panel">
      <h2>Public Outputs</h2>
      <TagList tags={project.tags} />
      <div class="output-list">
        {#each project.outputs as output}
          <span>{output}</span>
        {/each}
      </div>
      <a class="source-link" href={project.href} target="_blank" rel="noreferrer">Open public source</a>
    </aside>
  </div>
</section>

<style>
  .project-page { width: min(1040px, calc(100% - 40px)); margin: 48px auto 72px; }
  .back-link { display: inline-flex; margin-bottom: 22px; font-weight: 900; }
  .eyebrow { margin: 0 0 10px; color: var(--pitt-blue); font-size: 0.86rem; font-weight: 900; text-transform: uppercase; }
  h1 { max-width: 820px; margin: 0 0 10px; color: var(--ink); font-size: clamp(2.1rem, 4vw, 3.2rem); line-height: 1.05; }
  h2 { margin: 0 0 14px; font-size: 1.3rem; }
  .type { margin: 0 0 16px; color: var(--pitt-blue); font-weight: 900; }
  .lead { max-width: 860px; color: var(--muted); font-size: 1.15rem; }
  .project-layout { display: grid; grid-template-columns: minmax(0, 1fr) minmax(300px, 0.48fr); gap: 20px; margin-top: 30px; align-items: start; }
  .panel { border: 1px solid var(--border); border-radius: var(--radius); background: var(--pitt-white); padding: 22px; }
  .main-panel { border-top: 5px solid var(--pitt-gold); }
  ul { margin: 0; padding-left: 20px; color: var(--muted); }
  li + li { margin-top: 12px; }
  .output-list { display: grid; gap: 10px; margin: 18px 0; }
  .output-list span { border-radius: 6px; background: var(--surface); padding: 10px 12px; color: var(--ink); font-weight: 800; }
  .source-link { display: inline-flex; min-height: 44px; align-items: center; justify-content: center; border-radius: 7px; background: var(--pitt-blue); color: var(--pitt-white); padding: 11px 14px; font-weight: 900; }
  .source-link:hover { color: var(--pitt-white); text-decoration: none; }

  @media (max-width: 760px) {
    .project-layout { grid-template-columns: 1fr; }
  }
</style>
