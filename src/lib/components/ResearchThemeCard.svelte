<script lang="ts">
  import TagList from './TagList.svelte';
  import type { ResearchTheme } from '$lib/data/research-themes';

  export let theme: ResearchTheme;
  export let featured = false;
</script>

<article class:featured class="card">
  <h3>{theme.title}</h3>
  <p>{theme.summary}</p>
  <TagList tags={theme.tags} />
</article>

<style>
  .card { border: 1px solid var(--border); border-radius: var(--radius); background: var(--pitt-white); padding: 22px; }
  .card.featured { border-top: 5px solid var(--pitt-gold); }
  h3 { margin: 0 0 8px; font-size: 1.12rem; line-height: 1.25; }
  p { margin-top: 0; color: var(--muted); }
</style>
