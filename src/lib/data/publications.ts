export type Publication = {
  title: string;
  meta: string;
  year: string;
  tags: string[];
  links: [string, string][];
};

export const publications: Publication[] = [
  {
    title: 'Selected publications and profiles',
    meta:
      'Use ORCID and Google Scholar as profile and publication discovery links, then promote selected outputs with DOI, PubMed, PMC, or publisher URLs.',
    year: 'Profile',
    tags: ['ORCID', 'Google Scholar'],
    links: [
      ['ORCID', 'https://orcid.org/0000-0002-2993-2085'],
      ['Google Scholar', 'https://scholar.google.com/citations?user=cmWWPNcAAAAJ&hl=en']
    ]
  },
  {
    title: 'Medication safety, CDS, and pharmacovigilance methods',
    meta:
      'Future production content should feature a short curated set of durable publication links rather than mirroring a full CV.',
    year: 'Ongoing',
    tags: ['CDS', 'Pharmacovigilance'],
    links: []
  },
  {
    title: 'Older and historical project outputs',
    meta:
      'Replace legacy microsites, SlideShare pages, QR-code destinations, and tracking URLs with DOI, PubMed, PMC, or publisher records after review.',
    year: 'Review',
    tags: ['Durable links', 'Curation'],
    links: []
  }
];
