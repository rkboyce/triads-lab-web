export type Person = {
  initials: string;
  name: string;
  role: string;
  href?: string;
  linkLabel?: string;
};

export const people: Person[] = [
  {
    initials: 'RB',
    name: 'Richard D. Boyce, PhD',
    role: 'Associate Professor, Biomedical Informatics; secondary appointments in Pharmacy and Intelligent Systems.'
  },
  {
    initials: 'AI',
    name: 'AIBIDS Trainees',
    role:
      'Mentored research experience in AI, biomedical informatics, and data science, positioned as a clear training pathway.',
    href: 'https://www.aibids.org/',
    linkLabel: 'Learn more'
  }
];
