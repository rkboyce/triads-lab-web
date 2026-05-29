export type RecentActivity = {
  title: string;
  summary: string;
  tags: string[];
};

export const recentActivity: RecentActivity[] = [
  {
    title: 'Regional patient safety initiative',
    summary:
      'Recent public activity highlights Jewish Healthcare Foundation-supported patient safety work led by trainees and collaborators.',
    tags: ['Patient safety', 'Collaboration', 'Trainees']
  },
  {
    title: 'Multimodal model reliability',
    summary:
      'A recent AMIA Amplify presentation by Israel O. Dilan Pantojas focused on evaluating reliability in multimodal models for biomedical work.',
    tags: ['AMIA Amplify', 'Multimodal AI', 'Evaluation']
  },
  {
    title: 'Human-AI collaboration for real-world evidence',
    summary:
      'Recent public activity also points to collaborative work on using Human-AI workflows to support real-world evidence generation.',
    tags: ['Human-AI collaboration', 'Real-world evidence', 'AI workflows']
  }
];
