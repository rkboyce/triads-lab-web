<script lang="ts">
  export let tags: string[] = [];
</script>

<div class="tags">
  {#each tags as tag}
    <span>{tag}</span>
  {/each}
</div>

<style>
  .tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .tags span { border-radius: 999px; background: #eef3ff; color: var(--pitt-blue); padding: 5px 9px; font-size: 0.78rem; font-weight: 900; }
</style>
