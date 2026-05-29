<script lang="ts">
  import TagList from './TagList.svelte';
  import type { Publication } from '$lib/data/publications';

  export let publications: Publication[] = [];
</script>

<div class="publication-list">
  {#each publications as publication}
    <article class="publication">
      <div>
        <h3>{publication.title}</h3>
        <p>{publication.meta}</p>
        <TagList tags={publication.tags} />
        {#if publication.links.length}
          <div class="profile-links">
            {#each publication.links as link}
              <a href={link[1]} target="_blank" rel="noreferrer">{link[0]}</a>
            {/each}
          </div>
        {/if}
      </div>
      <strong>{publication.label}</strong>
    </article>
  {/each}
</div>

<style>
  .publication-list { display: grid; gap: 12px; }
  .publication { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 18px; border: 1px solid var(--border); border-radius: var(--radius); background: var(--pitt-white); padding: 18px; }
  h3 { margin: 0 0 8px; font-size: 1.12rem; line-height: 1.25; }
  p { margin-top: 0; color: var(--muted); }
  strong { align-self: start; border-radius: 999px; background: #eef3ff; color: var(--pitt-blue); padding: 6px 10px; font-size: 0.82rem; text-transform: uppercase; }
  .profile-links { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 12px; font-weight: 900; }

  @media (max-width: 560px) {
    .publication { grid-template-columns: 1fr; }
  }
</style>
