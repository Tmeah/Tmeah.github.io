export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type ProjectTheme = "viralz" | "snappd" | "gogrow";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  theme: ProjectTheme;
  name: string;
  eyebrow: string;
  note: string;
  headline: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
  desktopImage: string;
  phoneImage: string;
  role: string;
  platform: string;
  overview: string;
  built: string[];
  decisions: { title: string; body: string }[];
  outcomes: string[];
};

export type ArchiveProject = {
  name: string;
  description: string;
  stack: string[];
  image?: string;
  caseStudyUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  githubUrl?: string;
};

export type ArchiveGroup = {
  id: string;
  title: string;
  note: string;
  projects: ArchiveProject[];
};
