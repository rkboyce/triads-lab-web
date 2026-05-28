<section class="contact">
  <div id="contact" class="wrap contact-layout anchor-target">
    <div>
      <h2>Work with TrIADS</h2>
      <p>For collaborations, student opportunities, or project questions, the production site should route inquiries through a managed lab contact workflow rather than a personal email address.</p>
    </div>
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
        <textarea rows="3" placeholder="A short note for the lab team"></textarea>
      </label>
      <button class="button primary" type="button">Contact workflow pending</button>
    </form>
  </div>
</section>

<style>
  .wrap { width: min(var(--max-width), calc(100% - 40px)); margin: 0 auto; }
  .contact { padding: 54px 0; background: var(--pitt-blue); color: var(--pitt-white); }
  .contact p { max-width: 720px; margin-bottom: 0; color: #eef3ff; }
  .contact-layout { display: grid; grid-template-columns: minmax(0, 0.95fr) minmax(320px, 0.7fr); gap: 28px; align-items: start; }
  .contact-form { display: grid; gap: 12px; border: 1px solid var(--border); border-radius: var(--radius); background: var(--pitt-white); padding: 18px; color: var(--ink); }
  .contact-form label { display: grid; gap: 6px; font-size: 0.85rem; font-weight: 900; }
  .contact-form input, .contact-form select, .contact-form textarea { width: 100%; border: 1px solid var(--border); border-radius: 6px; padding: 10px 11px; color: var(--ink); font: inherit; }
  .contact-form textarea { resize: vertical; }
  .button { display: inline-flex; min-height: 46px; align-items: center; justify-content: center; padding: 12px 17px; border: 1px solid transparent; border-radius: 7px; font-weight: 900; }
  .button.primary { background: var(--pitt-gold); color: var(--pitt-dark-grey); }

  @media (max-width: 900px) {
    .contact-layout { grid-template-columns: 1fr; }
  }

  @media (max-width: 560px) {
    .wrap { width: min(var(--max-width), calc(100% - 28px)); }
  }
</style>
