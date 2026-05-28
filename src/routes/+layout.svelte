<script lang="ts">
  import '$lib/styles/tokens.css';
  import '$lib/styles/base.css';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
</script>

<SiteHeader />
<main id="main">
  <slot />
</main>
<SiteFooter />
