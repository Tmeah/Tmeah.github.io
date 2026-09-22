export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type ProjectStackGroup = {
  label: string;
  items: string[];
};

export type FlagshipProject = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  outcome: string;
  role: string;
  timeline: string;
  liveUrl?: string;
  githubUrl?: string;
  thumbnail: string;
  gallery: string[];
  stacks: ProjectStackGroup[];
  built: string[];
  challenges: { title: string; body: string }[];
  results: string[];
  featured: boolean;
};

export type ArchiveProject = {
  name: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};
