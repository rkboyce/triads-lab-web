<svelte:head><title>Contact - Boyce Lab</title></svelte:head>

<section class="contact-page">
  <p class="eyebrow">Contact</p>
  <h1>Work With TrIADS</h1>
  <p class="lead">
    For collaborations, trainee opportunities, or project questions, contact the lab directly by email while a managed intake workflow remains future scope.
  </p>

  <div class="contact-layout">
    <div class="contact-card">
      <p class="card-label">Email</p>
      <a href="mailto:rdb20@pitt.edu">rdb20@pitt.edu</a>
      <p>Please include a short subject line that identifies the collaboration, student opportunity, project question, or publication update.</p>
    </div>

    <aside class="workflow">
      <h2>Future Scope</h2>
      <p>
        Mailer, OneDrive API, and Power Automate contact-message workflows are deferred until hosting and operations are settled.
      </p>
      <div class="status-list">
        <span>No contact form on the static site</span>
        <span>No message handling code to maintain</span>
        <span>Workflow integrations can be revisited later</span>
      </div>
    </aside>
  </div>
</section>

<style>
  .contact-page { width: min(1040px, calc(100% - 40px)); margin: 48px auto 72px; }
  .eyebrow { margin: 0 0 10px; color: var(--pitt-blue); font-size: 0.86rem; font-weight: 900; text-transform: uppercase; }
  h1 { max-width: 780px; margin: 0 0 18px; color: var(--ink); font-size: clamp(2.1rem, 4vw, 3.2rem); line-height: 1.05; }
  h2 { margin: 0 0 12px; font-size: 1.3rem; }
  .lead { max-width: 820px; color: var(--muted); font-size: 1.15rem; }
  .contact-layout { display: grid; grid-template-columns: minmax(0, 1fr) minmax(300px, 0.72fr); gap: 20px; align-items: start; margin-top: 28px; }
  .contact-card, .workflow { border: 1px solid var(--border); border-radius: var(--radius); background: var(--pitt-white); padding: 22px; }
  .contact-card { display: grid; gap: 10px; border-top: 5px solid var(--pitt-blue); }
  .contact-card a { color: var(--pitt-blue); font-size: 1.3rem; font-weight: 900; }
  .contact-card p { color: var(--muted); }
  .card-label { margin: 0; color: var(--pitt-blue); font-size: 0.78rem; font-weight: 900; text-transform: uppercase; }
  .workflow { border-top: 5px solid var(--pitt-gold); }
  .workflow p { color: var(--muted); }
  .status-list { display: grid; gap: 10px; margin-top: 18px; }
  .status-list span { border-radius: 6px; background: var(--surface); padding: 10px 12px; color: var(--ink); font-weight: 800; }

  @media (max-width: 760px) {
    .contact-layout { grid-template-columns: 1fr; }
  }
</style>
