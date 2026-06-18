<section class="contact">
  <div id="contact" class="wrap contact-layout anchor-target">
    <div>
      <h2>Work with TrIADS</h2>
      <p>For collaborations, student opportunities, or project questions, contact the lab directly by email while managed intake workflows remain future scope.</p>
    </div>
    <div class="contact-card">
      <p class="card-label">Email</p>
      <a href="mailto:rdb20@pitt.edu">rdb20@pitt.edu</a>
      <p>Mailer, OneDrive API, and Power Automate contact-message workflows are deferred until hosting and operations are settled.</p>
    </div>
  </div>
</section>

<style>
  .wrap { width: min(var(--max-width), calc(100% - 40px)); margin: 0 auto; }
  .contact { padding: 54px 0; background: var(--pitt-blue); color: var(--pitt-white); }
  .contact p { max-width: 720px; margin-bottom: 0; color: #eef3ff; }
  .contact-layout { display: grid; grid-template-columns: minmax(0, 0.95fr) minmax(320px, 0.7fr); gap: 28px; align-items: start; }
  .contact-card { display: grid; gap: 8px; border: 1px solid var(--border); border-radius: var(--radius); background: var(--pitt-white); padding: 20px; color: var(--ink); }
  .contact-card p { color: var(--muted); }
  .contact-card a { color: var(--pitt-blue); font-size: 1.25rem; font-weight: 900; }
  .card-label { margin: 0; color: var(--pitt-blue); font-size: 0.78rem; font-weight: 900; text-transform: uppercase; }

  @media (max-width: 900px) {
    .contact-layout { grid-template-columns: 1fr; }
  }

  @media (max-width: 560px) {
    .wrap { width: min(var(--max-width), calc(100% - 28px)); }
  }
</style>
