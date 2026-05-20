<script>
  export let title = 'Boyce Lab';
</script>
<header>
  <div class="container">
    <h1>{title}</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/research">Research</a>
      <a href="/people">People</a>
      <a href="/about">About</a>
    </nav>
  </div>
</header>

<style>
  header{background:white;border-bottom:1px solid #eee;padding:0.5rem 1rem}
  .container{max-width:900px;margin:0 auto;display:flex;align-items:center;justify-content:space-between}
  nav a{margin-left:0.9rem;color:var(--text);text-decoration:none}
</style>
