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
  icon: string;
};

export type Project = {
  slug: string;
  theme: ProjectTheme;
  name: string;
  eyebrow: string;
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
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};
