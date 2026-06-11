export type LinkedInHighlight = {
  date: string;
  label: string;
  title: string;
  summary: string;
  url: string;
  source: string;
};

export const linkedInHighlights: LinkedInHighlight[] = [
  {
    date: '2026-05-01',
    label: 'Research update',
    title: 'Medication safety informatics work worth sharing',
    summary:
      'A curated entry for a public LinkedIn post. Replace this text with a short lab-written caption so visitors can scan the update before opening LinkedIn.',
    url: 'https://www.linkedin.com/',
    source: 'LinkedIn'
  },
  {
    date: '2026-04-15',
    label: 'Lab news',
    title: 'Collaboration, trainee, or publication announcement',
    summary:
      'Use these cards for selected public posts from Dr. Boyce or the lab. The site stays fast, accessible, and compliant because it links out rather than scraping LinkedIn.',
    url: 'https://www.linkedin.com/',
    source: 'LinkedIn'
  },
  {
    date: '2026-03-28',
    label: 'Conference note',
    title: 'Conference presentation or community conversation',
    summary:
      'This prototype can be maintained by editing one data file. A future CMS or GitHub form could update the same fields without changing the page component.',
    url: 'https://www.linkedin.com/',
    source: 'LinkedIn'
  }
];
