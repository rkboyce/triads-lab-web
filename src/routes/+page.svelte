<script lang="ts">
  const researchThemes = [
    {
      title: 'Clinical decision support that earns trust',
      summary: 'Designing and evaluating CDS interventions that fit clinical workflow and reduce medication-related risk.',
      tags: ['CDS', 'Implementation']
    },
    {
      title: 'Pharmacovigilance across evidence streams',
      summary: 'Signal detection and evidence management for drugs, natural products, labels, reports, and literature.',
      tags: ['Safety', 'Evidence']
    },
    {
      title: 'Knowledge bases plus generative models',
      summary: 'Combining structured biomedical knowledge with modern AI methods for safer, more explainable outputs.',
      tags: ['AI', 'Knowledge graphs']
    }
  ];

  const pipeline = [
    ['Collect evidence', 'Scientific literature, structured sources, reports, and drug product labeling.'],
    ['Represent knowledge', 'Ontologies, linked data, and knowledge graph methods for traceable reasoning.'],
    ['Support decisions', 'Clinical decision support, signal review, and practical medication safety outputs.']
  ];

  const publications = [
    {
      title: 'Assessing multimodal AI for visual information extraction of pharmacology',
      meta: 'Preprint signal found during research. Verify before production citation.',
      year: '2026',
      tags: ['Multimodal AI', 'Pharmacology']
    },
    {
      title: 'Knowledge graph framework for pharmacokinetic natural product-drug interactions',
      meta: 'Research theme based on public arXiv abstract and lab profile topics.',
      year: '2022',
      tags: ['NPDIs', 'Knowledge graph']
    },
    {
      title: 'Medication safety, CDS, and pharmacovigilance methods',
      meta: 'Collection row for the lab core publication streams.',
      year: 'Ongoing',
      tags: ['CDS', 'Older adults', 'Safety']
    }
  ];
</script>

<svelte:head>
  <title>TrIADS Lab | University of Pittsburgh DBMI</title>
</svelte:head>

<a class="skip" href="#main">Skip to content</a>

<header>
  <div class="topbar">
    <div class="wrap topbar-inner">
      <span>University of Pittsburgh Department of Biomedical Informatics</span>
      <a href="#contact">Contact the lab</a>
    </div>
  </div>
  <div class="wrap nav-inner">
    <a class="brand" href="/" aria-label="TrIADS Lab home">
      <img class="brand-logo" src="/triads-lab-logo-transparent.png" alt="TrIADS Lab, Pitt DBMI" />
    </a>
    <nav aria-label="Primary navigation">
      <a href="#research">Research</a>
      <a href="#projects">Projects</a>
      <a href="#publications">Publications</a>
      <a href="#people">People</a>
      <a href="#training">Training</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</header>

<main id="main">
  <section class="hero" aria-labelledby="hero-title">
    <div class="wrap hero-grid">
      <div>
        <p class="eyebrow">Design exploration 02 / Transparent logo</p>
        <h1 id="hero-title">Medication safety through clinical evidence, knowledge bases, and responsible AI.</h1>
        <p class="hero-copy">The TrIADS Lab develops informatics methods for safer medication therapy, with emphasis on older adults, clinical decision support, pharmacovigilance, and natural product-drug interaction evidence.</p>
        <div class="actions">
          <a class="button primary" href="#research">Explore research</a>
          <a class="button secondary" href="#publications">View publications</a>
        </div>
      </div>
      <div class="hero-visual" aria-label="Knowledge graph visual showing evidence connected to clinical decision support">
        <span class="line l1"></span>
        <span class="line l2"></span>
        <span class="line l3"></span>
        <span class="line l4"></span>
        <div class="node n1 gold">Evidence sources<small>Literature, labels, reports</small></div>
        <div class="node n2 blue">Knowledge bases<small>Ontologies and graphs</small></div>
        <div class="node n3 green">TrIADS methods<small>CDS, AI, pharmacovigilance</small></div>
        <div class="node n4 blue">Medication safety<small>Older adult care</small></div>
        <div class="node n5 gold">Actionable outputs<small>Tools and training</small></div>
      </div>
    </div>
  </section>

  <section id="research" class="band grey">
    <div class="wrap">
      <div class="section-head">
        <div>
          <h2>Research Themes</h2>
          <p>Designed for fast scanning by collaborators, trainees, and funders while preserving the lab informatics depth.</p>
        </div>
        <a href="#projects">Current projects</a>
      </div>
      <div class="grid-3">
        {#each researchThemes as theme, index}
          <article class:featured={index === 0} class="card">
            <h3>{theme.title}</h3>
            <p>{theme.summary}</p>
            <div class="tags">
              {#each theme.tags as tag}<span>{tag}</span>{/each}
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section id="projects" class="band">
    <div class="wrap split">
      <div class="panel-blue">
        <p class="eyebrow">Featured Project</p>
        <h2>Natural product-drug interaction evidence graphs</h2>
        <p>Mockup surface for projects that connect literature, drug labels, natural product evidence, and pharmacokinetic mechanisms into structured knowledge.</p>
        <a href="#contact">Discuss collaboration</a>
      </div>
      <div class="pipeline">
        {#each pipeline as step, index}
          <article class="pipe-step">
            <div class="num">{index + 1}</div>
            <div>
              <h3>{step[0]}</h3>
              <p>{step[1]}</p>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section id="publications" class="band grey">
    <div class="wrap">
      <div class="section-head">
        <div>
          <h2>Recent Work Mockup</h2>
          <p>Use verified publication metadata in production. These rows show the intended information density and filtering shape.</p>
        </div>
        <a href="#contact">Submit citation updates</a>
      </div>
      <div class="publication-list">
        {#each publications as publication}
          <article class="publication">
            <div>
              <h3>{publication.title}</h3>
              <p>{publication.meta}</p>
              <div class="tags">
                {#each publication.tags as tag}<span>{tag}</span>{/each}
              </div>
            </div>
            <strong>{publication.year}</strong>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section id="people" class="band">
    <div class="wrap">
      <div class="section-head">
        <div>
          <h2>People and Training</h2>
          <p>Compact people and program cards keep the page useful for prospective students and external collaborators.</p>
        </div>
      </div>
      <div class="people-grid">
        <article class="card person">
          <div class="avatar">RB</div>
          <div>
            <h3>Richard D. Boyce, PhD</h3>
            <p>Associate Professor, Biomedical Informatics; secondary appointments in Pharmacy and Intelligent Systems.</p>
          </div>
        </article>
        <article id="training" class="card person">
          <div class="avatar">AI</div>
          <div>
            <h3>AIBIDS Trainees</h3>
            <p>Undergraduate research experience in AI and biomedical informatics, positioned as a clear training pathway.</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section id="contact" class="contact">
    <div class="wrap contact-inner">
      <div>
        <h2>Work with TrIADS</h2>
        <p>For collaborations, student opportunities, or project questions, route visitors to the lab contact and Pitt DBMI context.</p>
      </div>
      <a class="button primary" href="mailto:rdb20@pitt.edu">Email the lab</a>
    </div>
  </section>
</main>

<footer>
  <div class="wrap footer-inner">
    <span>TrIADS Lab, University of Pittsburgh Department of Biomedical Informatics</span>
    <span><a href="https://www.dbmi.pitt.edu/">DBMI</a> | <a href="https://www.pitt.edu/">Pitt</a></span>
  </div>
</footer>

<style>
  .wrap { width: min(var(--max-width), calc(100% - 40px)); margin: 0 auto; }
  .skip { position: absolute; left: -999px; top: 12px; z-index: 50; background: var(--pitt-gold); color: var(--pitt-dark-grey); padding: 10px 14px; }
  .skip:focus { left: 12px; }
  main, section[id] { scroll-margin-top: 132px; }
  header { position: sticky; top: 0; z-index: 20; background: var(--pitt-blue); border-bottom: 4px solid var(--pitt-gold); }
  .topbar { background: #0b285a; color: var(--pitt-white); font-size: 0.875rem; }
  .topbar-inner, .nav-inner, .contact-inner, .footer-inner { display: flex; justify-content: space-between; gap: 20px; align-items: center; }
  .topbar-inner { min-height: 34px; }
  .topbar a, footer a, .panel-blue a { color: var(--pitt-gold); font-weight: 800; }
  .nav-inner { min-height: 76px; }
  .brand { display: flex; gap: 14px; align-items: center; color: var(--pitt-white); min-width: 280px; }
  .brand:hover { text-decoration: none; }
  .brand-logo { display: block; width: clamp(210px, 30vw, 360px); height: auto; }
  nav { display: flex; justify-content: flex-end; gap: 4px; flex-wrap: wrap; }
  nav a { min-height: 44px; padding: 11px 12px; border-radius: 6px; color: var(--pitt-white); font-weight: 800; }
  nav a:hover { background: rgb(255 255 255 / 12%); color: var(--pitt-gold); text-decoration: none; }
  .hero { color: var(--ink); background: linear-gradient(180deg, #ffffff 0%, #f5f7fb 100%); }
  .hero-grid { display: grid; min-height: 560px; grid-template-columns: minmax(0, 1.02fr) minmax(340px, 0.98fr); gap: 44px; align-items: center; padding: 64px 0 52px; }
  .eyebrow { display: inline-flex; align-items: center; gap: 8px; margin: 0; color: var(--pitt-gold); font-size: 0.9rem; font-weight: 900; text-transform: uppercase; }
  .eyebrow::before { content: ''; width: 34px; height: 3px; background: var(--pitt-gold); }
  h1, h2, h3, p { margin-top: 0; }
  h1 { max-width: 860px; margin: 16px 0 18px; font-size: clamp(2.25rem, 5vw, 3.7rem); line-height: 1.02; }
  h2 { font-size: clamp(1.8rem, 3vw, 2.35rem); line-height: 1.15; }
  .hero-copy { max-width: 720px; color: var(--muted); font-size: 1.2rem; }
  .actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
  .button { display: inline-flex; min-height: 46px; align-items: center; justify-content: center; padding: 12px 17px; border: 1px solid transparent; border-radius: 7px; font-weight: 900; }
  .button.primary { background: var(--pitt-gold); color: var(--pitt-dark-grey); }
  .button.secondary { border-color: var(--pitt-blue); color: var(--pitt-blue); background: var(--pitt-white); }
  .button:hover { text-decoration: none; }
  .hero-visual { position: relative; min-height: 420px; overflow: hidden; border: 1px solid #c8d5ea; border-radius: var(--radius); background: #eef3ff; }
  .node { position: absolute; display: grid; width: 132px; min-height: 72px; align-content: center; padding: 12px; border-radius: var(--radius); background: var(--pitt-white); box-shadow: var(--shadow); color: var(--ink); font-size: 0.86rem; font-weight: 800; }
  .node small { display: block; margin-top: 4px; color: var(--muted); font-weight: 700; }
  .node.gold { border-top: 5px solid var(--pitt-gold); }
  .node.blue { border-top: 5px solid var(--link-blue); }
  .node.green { border-top: 5px solid var(--success); }
  .n1 { left: 8%; top: 10%; } .n2 { right: 8%; top: 18%; } .n3 { left: 31%; top: 43%; width: 160px; } .n4 { left: 8%; bottom: 10%; } .n5 { right: 8%; bottom: 10%; }
  .line { position: absolute; height: 2px; background: rgb(255 184 28 / 78%); transform-origin: left center; }
  .l1 { width: 190px; left: 27%; top: 25%; transform: rotate(16deg); } .l2 { width: 164px; left: 54%; top: 35%; transform: rotate(132deg); } .l3 { width: 180px; left: 24%; top: 68%; transform: rotate(-24deg); } .l4 { width: 184px; right: 20%; top: 68%; transform: rotate(24deg); }
  .band { padding: 64px 0; }
  .band.grey { background: var(--surface); }
  .section-head { display: flex; justify-content: space-between; gap: 28px; align-items: end; margin-bottom: 26px; }
  .section-head p { max-width: 690px; margin-bottom: 0; color: var(--muted); }
  .grid-3, .people-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
  .people-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .card, .publication, .pipe-step { border: 1px solid var(--border); border-radius: var(--radius); background: var(--pitt-white); }
  .card { padding: 22px; }
  .card.featured { border-top: 5px solid var(--pitt-gold); }
  .card h3, .pipe-step h3, .publication h3 { margin-bottom: 8px; font-size: 1.12rem; line-height: 1.25; }
  .card p, .pipe-step p, .publication p { color: var(--muted); }
  .tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .tags span { border-radius: 999px; background: #eef3ff; color: var(--pitt-blue); padding: 5px 9px; font-size: 0.78rem; font-weight: 900; }
  .split { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 28px; align-items: stretch; }
  .panel-blue { padding: 28px; border-radius: var(--radius); background: var(--pitt-blue); color: var(--pitt-white); }
  .panel-blue p { color: var(--pitt-white); }
  .pipeline, .publication-list { display: grid; gap: 12px; }
  .pipe-step { display: grid; grid-template-columns: 42px minmax(0, 1fr); gap: 14px; align-items: start; padding: 16px; }
  .num { display: grid; width: 42px; height: 42px; place-items: center; border-radius: 50%; background: var(--pitt-gold); color: var(--pitt-dark-grey); font-weight: 900; }
  .publication { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 18px; padding: 18px; }
  .publication strong { color: var(--pitt-blue); font-size: 1.1rem; }
  .person { display: grid; grid-template-columns: 78px minmax(0, 1fr); gap: 16px; align-items: center; }
  .avatar { display: grid; width: 78px; height: 78px; place-items: center; border-radius: var(--radius); background: linear-gradient(135deg, var(--pitt-blue), #244f9e); color: var(--pitt-gold); font-size: 1.4rem; font-weight: 900; }
  .contact { padding: 54px 0; background: var(--pitt-blue); color: var(--pitt-white); }
  .contact p { max-width: 720px; margin-bottom: 0; color: #eef3ff; }
  footer { padding: 34px 0; background: #101827; color: #dce4f5; font-size: 0.92rem; }
  @media (max-width: 900px) { main, section[id] { scroll-margin-top: 230px; } .hero-grid, .split, .grid-3, .people-grid { grid-template-columns: 1fr; } .topbar-inner, .nav-inner, .section-head, .contact-inner { align-items: start; flex-direction: column; } .nav-inner { padding: 16px 0; } nav { justify-content: flex-start; } }
  @media (max-width: 560px) { .wrap { width: min(var(--max-width), calc(100% - 28px)); } .brand { min-width: 0; } .brand-logo { width: min(100%, 300px); } .node { width: 120px; font-size: 0.78rem; } .n3 { left: 28%; width: 132px; } .publication { grid-template-columns: 1fr; } }
</style>
