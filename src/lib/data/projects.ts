export type Project = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  status: string;
  tags: string[];
  href: string;
  focus: string[];
  outputs: string[];
};

export const projects: Project[] = [
  {
    slug: 'pv-copilot',
    title: 'PV Copilot',
    type: 'AI-enabled pharmacovigilance workflow',
    summary:
      'A prototype web application for bringing patient records, spontaneous safety reports, drug labels, biomedical literature, signal detection outputs, and mechanistic knowledge graph evidence into one investigative workflow.',
    status: 'Priority homepage project',
    tags: ['Pharmacovigilance', 'Knowledge graphs', 'LLMs'],
    href: 'https://inventions.pitt.edu/technologies/pv-copilot-ai-powered--07530',
    focus: [
      'Unifies heterogeneous safety evidence so reviewers can move between reports, labels, literature, clinical data, and mechanistic explanations.',
      'Keeps AI-generated summaries tied to source evidence and expert review rather than presenting model output as final judgment.',
      'Provides a public-facing example of current lab work that can be described without exposing proposal-specific aims.'
    ],
    outputs: ['Pitt innovation page', 'Prototype workflow framing', 'Candidate short video summary']
  },
  {
    slug: 'study-agent',
    title: 'Study Agent',
    type: 'OHDSI study design assistant',
    summary:
      'An open-source agent-style interface for human-led observational study design, including phenotype recommendation, cohort review, and reproducible OHDSI workflow support built around deterministic tools.',
    status: 'Priority homepage project',
    tags: ['OHDSI', 'Study design', 'Open source'],
    href: 'https://github.com/OHDSI/StudyAgent',
    focus: [
      'Supports human-led observational study design rather than autonomous study execution.',
      'Connects AI assistance to deterministic OHDSI tooling and reproducible review steps.',
      'Shows how the lab is translating responsible AI patterns into practical biomedical informatics workflows.'
    ],
    outputs: ['Maintained OHDSI repository', 'Open-source project reference', 'Candidate walkthrough video']
  },
  {
    slug: 'post-market-safety-monitoring',
    title: 'AI-infused post-market safety monitoring',
    type: 'Safety monitoring for drugs and medicinal plants',
    summary:
      'A safety monitoring concept that combines AI, continuously updated knowledge graphs, spontaneous reporting evidence, literature, and user-facing summaries to detect and explain adverse event signals.',
    status: 'Priority homepage project',
    tags: ['Post-market safety', 'Natural products', 'Signals'],
    href: 'https://inventions.pitt.edu/technologies/ai-infused-post-market-safety--06710',
    focus: [
      'Highlights safety surveillance across both prescription drugs and medicinal plant products.',
      'Connects spontaneous reports, natural product evidence, literature, and knowledge graph methods.',
      'Frames signal detection as an explainable evidence workflow for experts and public-facing summaries.'
    ],
    outputs: ['Pitt innovation page', 'Natural product safety framing', 'Related curated publications']
  },
  {
    slug: 'pddi-cds',
    title: 'PDDI-CDS',
    type: 'HL7 FHIR implementation guide',
    summary:
      'Standards-oriented work for representing potential drug-drug interaction clinical decision support with FHIR resources and workflow guidance for computable, interoperable CDS.',
    status: 'Standards reference',
    tags: ['FHIR', 'Drug-drug interactions', 'Standards'],
    href: 'https://build.fhir.org/ig/HL7/PDDI-CDS/',
    focus: [
      'Connects drug interaction evidence representation to computable health IT standards.',
      'Supports clinical decision support workflows that can be shared and implemented across systems.',
      'Needs final/published implementation guide URL verification before launch.'
    ],
    outputs: ['HL7 continuous-build implementation guide', 'Related CDS publications', 'Launch link review item']
  },
  {
    slug: 'aibids',
    title: 'AIBIDS',
    type: 'Biomedical informatics research training',
    summary:
      'A 10-week mentored research internship in artificial intelligence, biomedical informatics, and data science with University of Pittsburgh and Gallaudet University mentors.',
    status: 'Training pathway',
    tags: ['Training', 'Biomedical informatics', 'Data science'],
    href: 'https://www.aibids.org/',
    focus: [
      'Provides a current public training pathway connected to AI, biomedical informatics, and data science.',
      'Supports broadening participation and accessible biomedical AI education.',
      'Belongs primarily in Training and People while remaining visible from Projects.'
    ],
    outputs: ['AIBIDS program page', 'Training page cross-link', 'People/training content']
  }
];

export const priorityProjects = projects.filter((project) =>
  ['pv-copilot', 'study-agent', 'post-market-safety-monitoring'].includes(project.slug)
);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
