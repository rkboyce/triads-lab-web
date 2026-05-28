export type ResearchTheme = {
  title: string;
  summary: string;
  tags: string[];
};

export const researchThemes: ResearchTheme[] = [
  {
    title: 'Pharmacovigilance with traceable evidence',
    summary:
      'Building workflows that connect safety reports, labels, literature, clinical data, and knowledge graphs so medication safety reviews are faster and more defensible.',
    tags: ['Safety', 'Evidence synthesis']
  },
  {
    title: 'Clinical decision support standards',
    summary:
      'Translating drug-drug interaction evidence into computable CDS guidance that can fit real clinical workflows and health IT standards.',
    tags: ['FHIR', 'CDS']
  },
  {
    title: 'AI-assisted study design and training',
    summary:
      'Developing responsible AI tools and mentored research pathways that help teams design biomedical informatics studies without losing methodological control.',
    tags: ['AI', 'OHDSI']
  }
];
