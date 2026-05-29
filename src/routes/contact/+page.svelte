<svelte:head><title>Contact - Boyce Lab</title></svelte:head>

<section class="contact-page">
  <p class="eyebrow">Contact</p>
  <h1>Work With TrIADS</h1>
  <p class="lead">
    The production site should route collaboration, trainee, and project inquiries through a managed workflow instead of a personal inbox. This page defines the first-pass form structure while hosting and delivery are selected.
  </p>

  <div class="contact-layout">
    <form class="contact-form" aria-label="Contact workflow concept">
      <label>
        Inquiry type
        <select>
          <option>Collaboration</option>
          <option>Student opportunity</option>
          <option>Project question</option>
          <option>Publication or citation update</option>
        </select>
      </label>
      <label>
        Your email
        <input type="email" placeholder="name@example.edu" />
      </label>
      <label>
        Brief message
        <textarea rows="5" placeholder="A short note for the lab team"></textarea>
      </label>
      <button type="button">Delivery workflow pending</button>
    </form>

    <aside class="workflow">
      <h2>Launch Decision Needed</h2>
      <p>
        Choose the destination before enabling submissions: a Pitt-supported form, a monitored shared mailbox, or a static-site form service compatible with the final host.
      </p>
      <div class="status-list">
        <span>Do not route to Richard's personal inbox</span>
        <span>Keep inquiry type and sender email required</span>
        <span>Confirm hosting support before launch</span>
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
  .contact-form, .workflow { border: 1px solid var(--border); border-radius: var(--radius); background: var(--pitt-white); padding: 22px; }
  .contact-form { display: grid; gap: 14px; }
  label { display: grid; gap: 7px; font-size: 0.88rem; font-weight: 900; }
  input, select, textarea { width: 100%; border: 1px solid var(--border); border-radius: 6px; padding: 11px 12px; color: var(--ink); font: inherit; }
  textarea { resize: vertical; }
  button { display: inline-flex; min-height: 46px; align-items: center; justify-content: center; border: 1px solid transparent; border-radius: 7px; background: var(--pitt-gold); color: var(--pitt-dark-grey); padding: 12px 17px; font: inherit; font-weight: 900; }
  .workflow { border-top: 5px solid var(--pitt-gold); }
  .workflow p { color: var(--muted); }
  .status-list { display: grid; gap: 10px; margin-top: 18px; }
  .status-list span { border-radius: 6px; background: var(--surface); padding: 10px 12px; color: var(--ink); font-weight: 800; }

  @media (max-width: 760px) {
    .contact-layout { grid-template-columns: 1fr; }
  }
</style>
