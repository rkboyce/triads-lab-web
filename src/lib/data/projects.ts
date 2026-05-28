export type Project = {
  title: string;
  type: string;
  summary: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: 'PV Copilot',
    type: 'AI-enabled pharmacovigilance workflow',
    summary:
      'A prototype web application for bringing patient records, spontaneous safety reports, drug labels, biomedical literature, signal detection outputs, and mechanistic knowledge graph evidence into one investigative workflow.',
    tags: ['Pharmacovigilance', 'Knowledge graphs', 'LLMs'],
    href: 'https://inventions.pitt.edu/technologies/pv-copilot-ai-powered--07530'
  },
  {
    title: 'Study Agent',
    type: 'OHDSI study design assistant',
    summary:
      'An open-source agent-style interface for human-led observational study design, including phenotype recommendation, cohort review, and reproducible OHDSI workflow support built around deterministic tools.',
    tags: ['OHDSI', 'Study design', 'Open source'],
    href: 'https://github.com/OHDSI/StudyAgent'
  },
  {
    title: 'AI-infused post-market safety monitoring',
    type: 'Safety monitoring for drugs and medicinal plants',
    summary:
      'A safety monitoring concept that combines AI, continuously updated knowledge graphs, spontaneous reporting evidence, literature, and user-facing summaries to detect and explain adverse event signals.',
    tags: ['Post-market safety', 'Natural products', 'Signals'],
    href: 'https://inventions.pitt.edu/technologies/ai-infused-post-market-safety--06710'
  },
  {
    title: 'PDDI-CDS',
    type: 'HL7 FHIR implementation guide',
    summary:
      'Standards-oriented work for representing potential drug-drug interaction clinical decision support with FHIR resources and workflow guidance for computable, interoperable CDS.',
    tags: ['FHIR', 'Drug-drug interactions', 'Standards'],
    href: 'https://build.fhir.org/ig/HL7/PDDI-CDS/'
  },
  {
    title: 'AIBIDS',
    type: 'Biomedical informatics research training',
    summary:
      'A 10-week mentored research internship in artificial intelligence, biomedical informatics, and data science with University of Pittsburgh and Gallaudet University mentors.',
    tags: ['Training', 'Biomedical informatics', 'Data science'],
    href: 'https://www.aibids.org/'
  }
];
