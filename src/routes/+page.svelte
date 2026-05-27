<script lang="ts">
  const researchThemes = [
    {
      title: 'Pharmacovigilance with traceable evidence',
      summary: 'Building workflows that connect safety reports, labels, literature, clinical data, and knowledge graphs so medication safety reviews are faster and more defensible.',
      tags: ['Safety', 'Evidence synthesis']
    },
    {
      title: 'Clinical decision support standards',
      summary: 'Translating drug-drug interaction evidence into computable CDS guidance that can fit real clinical workflows and health IT standards.',
      tags: ['FHIR', 'CDS']
    },
    {
      title: 'AI-assisted study design and training',
      summary: 'Developing responsible AI tools and mentored research pathways that help teams design biomedical informatics studies without losing methodological control.',
      tags: ['AI', 'OHDSI']
    }
  ];

  const projects = [
    {
      title: 'PV Copilot',
      type: 'AI-enabled pharmacovigilance workflow',
      summary: 'A prototype web application for bringing patient records, spontaneous safety reports, drug labels, biomedical literature, signal detection outputs, and mechanistic knowledge graph evidence into one investigative workflow.',
      tags: ['Pharmacovigilance', 'Knowledge graphs', 'LLMs'],
      href: 'https://inventions.pitt.edu/technologies/pv-copilot-ai-powered--07530'
    },
    {
      title: 'Study Agent',
      type: 'OHDSI study design assistant',
      summary: 'An open-source agent-style interface for human-led observational study design, including phenotype recommendation, cohort review, and reproducible OHDSI workflow support built around deterministic tools.',
      tags: ['OHDSI', 'Study design', 'Open source'],
      href: 'https://github.com/OHDSI/StudyAgent'
    },
    {
      title: 'AI-infused post-market safety monitoring',
      type: 'Safety monitoring for drugs and medicinal plants',
      summary: 'A safety monitoring concept that combines AI, continuously updated knowledge graphs, spontaneous reporting evidence, literature, and user-facing summaries to detect and explain adverse event signals.',
      tags: ['Post-market safety', 'Natural products', 'Signals'],
      href: 'https://inventions.pitt.edu/technologies/ai-infused-post-market-safety--06710'
    },
    {
      title: 'PDDI-CDS',
      type: 'HL7 FHIR implementation guide',
      summary: 'Standards-oriented work for representing potential drug-drug interaction clinical decision support with FHIR resources and workflow guidance for computable, interoperable CDS.',
      tags: ['FHIR', 'Drug-drug interactions', 'Standards'],
      href: 'https://build.fhir.org/ig/HL7/PDDI-CDS/'
    },
    {
      title: 'AIBIDS',
      type: 'Biomedical informatics research training',
      summary: 'A 10-week mentored research internship in artificial intelligence, biomedical informatics, and data science with University of Pittsburgh and Gallaudet University mentors.',
      tags: ['Training', 'Biomedical informatics', 'Data science'],
      href: 'https://www.aibids.org/'
    }
  ];

  const publications = [
    {
      title: 'Selected publications and profiles',
      meta: 'Use ORCID and Google Scholar as profile and publication discovery links, then promote selected outputs with DOI, PubMed, PMC, or publisher URLs.',
      year: 'Profile',
      tags: ['ORCID', 'Google Scholar'],
      links: [
        ['ORCID', 'https://orcid.org/0000-0002-2993-2085'],
        ['Google Scholar', 'https://scholar.google.com/citations?user=cmWWPNcAAAAJ&hl=en']
      ]
    },
    {
      title: 'Medication safety, CDS, and pharmacovigilance methods',
      meta: 'Future production content should feature a short curated set of durable publication links rather than mirroring a full CV.',
      year: 'Ongoing',
      tags: ['CDS', 'Pharmacovigilance'],
      links: []
    },
    {
      title: 'Older and historical project outputs',
      meta: 'Replace legacy microsites, SlideShare pages, QR-code destinations, and tracking URLs with DOI, PubMed, PMC, or publisher records after review.',
      year: 'Review',
      tags: ['Durable links', 'Curation'],
      links: []
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
      <img class="brand-logo" src="/triads-lab-logo-transparent-clean.png" alt="TrIADS Lab, Pitt DBMI" />
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
        <p class="eyebrow">Design exploration / Transparent logo</p>
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
        <div class="node n2 blue">Knowledge bases<small>FHIR, ontologies, graphs</small></div>
        <div class="node n3 green">TrIADS methods<small>CDS, AI, pharmacovigilance</small></div>
        <div class="node n4 blue">Medication safety<small>Clinical and public health use</small></div>
        <div class="node n5 gold">Actionable outputs<small>Tools, standards, training</small></div>
      </div>
    </div>
  </section>

  <section class="band grey">
    <div id="research" class="wrap anchor-target">
      <div class="section-head">
        <div>
          <h2>Research Themes</h2>
          <p>Current work is presented around research themes and selected outputs, not as a CV mirror.</p>
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

  <section class="band">
    <div id="projects" class="wrap anchor-target">
      <div class="section-head">
        <div>
          <h2>Selected Project Highlights</h2>
          <p>Public-facing project entries use stable Pitt, OHDSI, HL7, and AIBIDS references. DDICS/DDI-CDS and NaPDI links are intentionally held back for stale-link review.</p>
        </div>
        <a href="#publications">Publication profiles</a>
      </div>
      <div class="project-grid">
        {#each projects as project}
          <article class="project-card">
            <p class="project-type">{project.type}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div class="tags">
              {#each project.tags as tag}<span>{tag}</span>{/each}
            </div>
            <a class="learn-more" href={project.href} target="_blank" rel="noreferrer">Learn more</a>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="band grey">
    <div id="publications" class="wrap anchor-target">
      <div class="section-head">
        <div>
          <h2>Publications and Profiles</h2>
          <p>Profile links support publication discovery. Project pages stay focused on current themes and selected outputs.</p>
        </div>
        <a href="https://orcid.org/0000-0002-2993-2085" target="_blank" rel="noreferrer">ORCID profile</a>
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
              {#if publication.links.length}
                <div class="profile-links">
                  {#each publication.links as link}
                    <a href={link[1]} target="_blank" rel="noreferrer">{link[0]}</a>
                  {/each}
                </div>
              {/if}
            </div>
            <strong>{publication.year}</strong>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="band">
    <div id="people" class="wrap anchor-target">
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
            <p>Mentored research experience in AI, biomedical informatics, and data science, positioned as a clear training pathway.</p>
            <a class="learn-more" href="https://www.aibids.org/" target="_blank" rel="noreferrer">Learn more</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="contact">
    <div id="contact" class="wrap contact-inner anchor-target">
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
  header { background: var(--pitt-blue); border-bottom: 4px solid var(--pitt-gold); }
  .topbar { background: #0b285a; color: var(--pitt-white); font-size: 0.875rem; }
  .topbar-inner, .nav-inner, .contact-inner, .footer-inner { display: flex; justify-content: space-between; gap: 20px; align-items: center; }
  .topbar-inner { min-height: 34px; }
  .topbar a, footer a { color: var(--pitt-gold); font-weight: 800; }
  .nav-inner { min-height: 112px; padding: 12px 0; }
  .brand { display: flex; align-items: center; color: var(--pitt-white); min-width: 280px; }
  .brand:hover { text-decoration: none; }
  .brand-logo { display: block; width: clamp(320px, 34vw, 460px); height: auto; }
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
  .grid-3, .people-grid, .project-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
  .people-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .project-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .card, .publication, .project-card { border: 1px solid var(--border); border-radius: var(--radius); background: var(--pitt-white); }
  .card { padding: 22px; }
  .project-card { display: flex; min-height: 330px; flex-direction: column; padding: 22px; }
  .project-card p { color: var(--muted); }
  .project-type { margin-bottom: 10px; color: var(--pitt-blue); font-size: 0.8rem; font-weight: 900; text-transform: uppercase; }
  .card.featured { border-top: 5px solid var(--pitt-gold); }
  .card h3, .publication h3, .project-card h3 { margin-bottom: 8px; font-size: 1.12rem; line-height: 1.25; }
  .card p, .publication p { color: var(--muted); }
  .tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .tags span { border-radius: 999px; background: #eef3ff; color: var(--pitt-blue); padding: 5px 9px; font-size: 0.78rem; font-weight: 900; }
  .learn-more { display: inline-flex; margin-top: auto; padding-top: 18px; font-weight: 900; }
  .publication-list { display: grid; gap: 12px; }
  .publication { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 18px; padding: 18px; }
  .publication strong { color: var(--pitt-blue); font-size: 1.1rem; }
  .profile-links { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 12px; font-weight: 900; }
  .person { display: grid; grid-template-columns: 78px minmax(0, 1fr); gap: 16px; align-items: center; }
  .avatar { display: grid; width: 78px; height: 78px; place-items: center; border-radius: var(--radius); background: linear-gradient(135deg, var(--pitt-blue), #244f9e); color: var(--pitt-gold); font-size: 1.4rem; font-weight: 900; }
  .contact { padding: 54px 0; background: var(--pitt-blue); color: var(--pitt-white); }
  .contact p { max-width: 720px; margin-bottom: 0; color: #eef3ff; }
  footer { padding: 34px 0; background: #101827; color: #dce4f5; font-size: 0.92rem; }
  @media (max-width: 900px) { .hero-grid, .grid-3, .people-grid, .project-grid { grid-template-columns: 1fr; } .topbar-inner, .nav-inner, .section-head, .contact-inner { align-items: start; flex-direction: column; } .nav-inner { padding: 16px 0; } nav { justify-content: flex-start; } }
  @media (max-width: 560px) { .wrap { width: min(var(--max-width), calc(100% - 28px)); } .brand { min-width: 0; } .brand-logo { width: min(100%, 320px); } .node { width: 120px; font-size: 0.78rem; } .n3 { left: 28%; width: 132px; } .publication { grid-template-columns: 1fr; } }
</style>
