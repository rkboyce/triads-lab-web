<script lang="ts">
  import { base } from '$app/paths';
  import TagList from './TagList.svelte';
  import type { Project } from '$lib/data/projects';

  export let project: Project;
</script>

<article class="project-card">
  <p class="project-type">{project.type}</p>
  <h3>{project.title}</h3>
  <p>{project.summary}</p>
  <TagList tags={project.tags} />
  <a class="learn-more" href="{base}/projects/{project.slug}">View project</a>
</article>

<style>
  .project-card { display: flex; min-height: 330px; flex-direction: column; border: 1px solid var(--border); border-radius: var(--radius); background: var(--pitt-white); padding: 22px; }
  .project-card p { color: var(--muted); }
  .project-type { margin: 0 0 10px; color: var(--pitt-blue); font-size: 0.8rem; font-weight: 900; text-transform: uppercase; }
  h3 { margin: 0 0 8px; font-size: 1.12rem; line-height: 1.25; }
  .learn-more { display: inline-flex; margin-top: auto; padding-top: 18px; font-weight: 900; }

  @media (max-width: 760px) {
    .project-card { min-height: 0; }
  }
</style>
