export type RecentActivity = {
  title: string;
  summary: string;
  tags: string[];
};

export const recentActivity: RecentActivity[] = [
  {
    title: 'MEARS older adult medication safety work',
    summary:
      'Jewish Healthcare Foundation-supported work studies clinician and caregiver perspectives on medication safety for older adults receiving home health care.',
    tags: ['MEARS', 'Older adults', 'Medication safety']
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
      'Recent public activity also points to designing real-world evidence tools for Human-AI teams.',
    tags: ['Human-AI teams', 'Real-world evidence', 'AI workflows']
  }
];
