export type Method = {
  title: string;
  summary: string;
  tags: string[];
};

export const methods: Method[] = [
  {
    title: 'Evidence integration',
    summary:
      'Connecting drug labels, literature, spontaneous reports, clinical data, and structured knowledge so safety questions can be reviewed across sources.',
    tags: ['Labels', 'Reports', 'Literature']
  },
  {
    title: 'Knowledge representation',
    summary:
      'Using ontologies, FHIR resources, and knowledge graph patterns to keep medication-safety evidence traceable and computable.',
    tags: ['FHIR', 'Ontologies', 'Graphs']
  },
  {
    title: 'Human-centered AI workflows',
    summary:
      'Applying AI to triage, summarize, and structure evidence while keeping expert review, source grounding, and deterministic checks in the loop.',
    tags: ['AI', 'Review', 'Provenance']
  },
  {
    title: 'Emerging current work',
    summary:
      'A placeholder for active R01-adjacent research framing that can describe the problem space without exposing proposal aims or unpublished details.',
    tags: ['Current work', 'Placeholder']
  }
];
