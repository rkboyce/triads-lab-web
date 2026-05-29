<script lang="ts">
  import { base } from '$app/paths';
  import ContactBand from '$lib/components/ContactBand.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import PublicationList from '$lib/components/PublicationList.svelte';
  import ResearchThemeCard from '$lib/components/ResearchThemeCard.svelte';
  import TagList from '$lib/components/TagList.svelte';
  import { methods } from '$lib/data/methods';
  import { people } from '$lib/data/people';
  import { priorityProjects } from '$lib/data/projects';
  import { featuredPublications } from '$lib/data/publications';
  import { recentActivity } from '$lib/data/recent-activity';
  import { researchThemes } from '$lib/data/research-themes';
  import { videos } from '$lib/data/videos';
</script>

<svelte:head>
  <title>TrIADS Lab | University of Pittsburgh DBMI</title>
</svelte:head>

<section class="hero" aria-labelledby="hero-title">
    <div class="wrap hero-grid">
      <div>
        <p class="eyebrow">University of Pittsburgh DBMI</p>
        <h1 id="hero-title">Medication safety through clinical evidence, knowledge bases, and responsible AI.</h1>
        <p class="hero-copy">The TrIADS Lab develops informatics methods for safer medication therapy, with emphasis on older adults, clinical decision support, pharmacovigilance, and natural product-drug interaction evidence.</p>
        <div class="actions">
          <a class="button primary" href="#projects">View projects</a>
          <a class="button secondary" href="#research">Explore research</a>
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
          <p>Research themes give visitors a fast map of the lab's active scientific scope.</p>
        </div>
        <a href="{base}/research">Research page</a>
      </div>
      <div class="grid-3">
        {#each researchThemes as theme, index}
          <ResearchThemeCard {theme} featured={index === 0} />
        {/each}
      </div>
    </div>
  </section>

  <section class="band">
    <div id="methods" class="wrap anchor-target">
      <div class="section-head">
        <div>
          <h2>Methods and Informatics Domains</h2>
          <p>Reusable methods connect project work across evidence sources, standards, AI workflows, and knowledge representation.</p>
        </div>
        <a href="#projects">See project examples</a>
      </div>
      <div class="method-grid">
        {#each methods as method}
          <article class="method-card">
            <h3>{method.title}</h3>
            <p>{method.summary}</p>
            <TagList tags={method.tags} />
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="band grey">
    <div id="projects" class="wrap anchor-target">
      <div class="section-head">
        <div>
          <h2>Selected Project Highlights</h2>
          <p>Priority project pages show how the lab translates evidence, AI, and standards work into public-facing tools and workflows.</p>
        </div>
        <a href="{base}/projects">All projects</a>
      </div>
      <div class="project-grid">
        {#each priorityProjects as project}
          <ProjectCard {project} />
        {/each}
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap">
      <div class="section-head">
        <div>
          <h2>Recent Public Activity</h2>
          <p>Recent public activity keeps the homepage connected to current collaborations, trainee work, and AI evaluation themes.</p>
        </div>
      </div>
      <div class="activity-grid">
        {#each recentActivity as item}
          <article class="activity-card">
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <TagList tags={item.tags} />
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="band grey">
    <div class="wrap">
      <div class="section-head">
        <div>
          <h2>Planned Short Video Summaries</h2>
          <p>Short summaries can later give visitors a fast introduction to high-priority projects and workflows.</p>
        </div>
      </div>
      <div class="video-grid">
        {#each videos as video}
          <article class="video-card">
            <div class="play" aria-hidden="true"></div>
            <div>
              <h3>{video.title}</h3>
              <p>{video.caption}</p>
              <a class="learn-more" href={video.href} target="_blank" rel="noreferrer">Learn more</a>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="band">
    <div id="publications" class="wrap anchor-target">
      <div class="section-head">
        <div>
          <h2>Publications and Profiles</h2>
          <p>A curated publication set backs the public project story with durable DOI, PubMed, and PMC records.</p>
        </div>
        <a href="{base}/publications">Publication page</a>
      </div>
      <PublicationList publications={featuredPublications} />
    </div>
  </section>

  <section class="band grey">
    <div id="people" class="wrap anchor-target">
      <div class="section-head">
        <div>
          <h2>People and Training</h2>
          <p>Leadership, mentoring areas, and training pathways are separated from project content for easier scanning.</p>
        </div>
        <a href="{base}/people">People page</a>
      </div>
      <div class="people-grid">
        {#each people as person}
          <article id={person.initials === 'AI' ? 'training' : undefined} class="card person">
            <div class="avatar">{person.initials}</div>
            <div>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              {#if person.href && person.linkLabel}
                <a class="learn-more" href={person.href} target="_blank" rel="noreferrer">{person.linkLabel}</a>
              {/if}
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

<ContactBand />

<style>
  .wrap { width: min(var(--max-width), calc(100% - 40px)); margin: 0 auto; }
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
  .grid-3, .people-grid, .project-grid, .method-grid, .video-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
  .people-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .project-grid, .video-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .method-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .card, .method-card, .video-card, .activity-card { border: 1px solid var(--border); border-radius: var(--radius); background: var(--pitt-white); }
  .card { padding: 22px; }
  .method-card { padding: 20px; }
  .card h3, .method-card h3, .video-card h3 { margin-bottom: 8px; font-size: 1.12rem; line-height: 1.25; }
  .card p, .method-card p, .video-card p { color: var(--muted); }
  .learn-more { display: inline-flex; margin-top: auto; padding-top: 18px; font-weight: 900; }
  .video-card { display: grid; grid-template-columns: 88px minmax(0, 1fr); gap: 18px; padding: 20px; align-items: start; }
  .activity-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
  .activity-card { padding: 20px; }
  .activity-card p { color: var(--muted); }
  .play { position: relative; display: grid; width: 88px; aspect-ratio: 1 / 1; place-items: center; border-radius: var(--radius); background: var(--pitt-blue); }
  .play::before { content: ''; width: 0; height: 0; margin-left: 6px; border-top: 15px solid transparent; border-bottom: 15px solid transparent; border-left: 22px solid var(--pitt-gold); }
  .person { display: grid; grid-template-columns: 78px minmax(0, 1fr); gap: 16px; align-items: center; }
  .avatar { display: grid; width: 78px; height: 78px; place-items: center; border-radius: var(--radius); background: linear-gradient(135deg, var(--pitt-blue), #244f9e); color: var(--pitt-gold); font-size: 1.4rem; font-weight: 900; }

  @media (max-width: 1000px) {
    .method-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (max-width: 900px) {
    .hero-grid, .grid-3, .people-grid, .project-grid, .method-grid, .video-grid, .activity-grid { grid-template-columns: 1fr; }
    .section-head { align-items: start; flex-direction: column; }
  }

  @media (max-width: 560px) {
    .wrap { width: min(var(--max-width), calc(100% - 28px)); }
    .node { width: 120px; font-size: 0.78rem; }
    .n3 { left: 28%; width: 132px; }
    .video-card { grid-template-columns: 1fr; }
  }
</style>
