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
    title: 'Medication safety for older adults',
    summary:
      'Studying medication safety risks for older adults aging in place, including home health care handoffs, medication reconciliation, caregiver support, and informatics opportunities from the MEARS project.',
    tags: ['Older adults', 'Home health', 'MEARS']
  },
  {
    title: 'Human-AI tools for real-world evidence',
    summary:
      'Designing real-world evidence tools for Human-AI teams, with workflows that keep study design, phenotype review, and evidence generation grounded in expert oversight.',
    tags: ['Human-AI teams', 'Real-world evidence', 'OHDSI']
  }
];
