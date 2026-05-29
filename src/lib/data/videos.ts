export type VideoPlaceholder = {
  title: string;
  caption: string;
  href: string;
};

export const videos: VideoPlaceholder[] = [
  {
    title: 'PV Copilot overview',
    caption: 'Proposed 20- to 30-second summary explaining the project, audience, and public invention page.',
    href: 'https://inventions.pitt.edu/technologies/pv-copilot-ai-powered--07530'
  },
  {
    title: 'Study Agent walkthrough',
    caption: 'Proposed brief walkthrough of a human-led study-design workflow and the maintained OHDSI repository.',
    href: 'https://github.com/OHDSI/StudyAgent'
  }
];
