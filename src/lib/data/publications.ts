export type Publication = {
  title: string;
  meta: string;
  label: string;
  tags: string[];
  links: [string, string][];
};

export const publications: Publication[] = [
  {
    title: 'Publication discovery profiles',
    meta:
      'Use these profiles as the authoritative discovery path while the site-level publication list is curated into a shorter set of durable records.',
    label: 'Profiles',
    tags: ['ORCID', 'Google Scholar'],
    links: [
      ['ORCID', 'https://orcid.org/0000-0002-2993-2085'],
      ['Google Scholar', 'https://scholar.google.com/citations?user=cmWWPNcAAAAJ&hl=en']
    ]
  },
  {
    title: 'Medication safety and pharmacovigilance methods',
    meta:
      'Curate representative papers and implementation reports connected to adverse event surveillance, evidence synthesis, and post-market medication safety workflows.',
    label: 'Curate',
    tags: ['Pharmacovigilance', 'Medication safety', 'Evidence synthesis'],
    links: []
  },
  {
    title: 'Clinical decision support and standards outputs',
    meta:
      'Promote durable publication, implementation guide, or standards links for drug interaction CDS work rather than relying on older project microsites.',
    label: 'Review',
    tags: ['CDS', 'FHIR', 'Drug-drug interactions'],
    links: [['PDDI-CDS IG', 'https://build.fhir.org/ig/HL7/PDDI-CDS/']]
  },
  {
    title: 'Natural product-drug interaction research',
    meta:
      'Collect durable outputs related to natural product interaction evidence, knowledge representation, and safety communication after legacy links are reviewed.',
    label: 'Review',
    tags: ['Natural products', 'Knowledge representation', 'Safety'],
    links: []
  },
  {
    title: 'Biomedical AI and study design outputs',
    meta:
      'Feature selected work on responsible AI-assisted biomedical informatics workflows, including human-led observational study design and training outputs.',
    label: 'Emerging',
    tags: ['Biomedical AI', 'OHDSI', 'Training'],
    links: [['Study Agent', 'https://github.com/OHDSI/StudyAgent']]
  },
  {
    title: 'Legacy outputs awaiting durable citation replacement',
    meta:
      'Replace SlideShare pages, old QR-code destinations, and tracking URLs with DOI, PubMed, PMC, publisher, GitHub, or standards records before launch.',
    label: 'Cleanup',
    tags: ['Durable links', 'Curation', 'Launch checklist'],
    links: []
  }
];
