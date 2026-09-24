export const siteConfig = {
  name: "Tausif Meah",
  title: "Full Stack Developer",
  location: "Wales, UK",
  email: "tausifmeah@gmail.com",
  url: "https://tausifmeah.co.uk",
  cvPath: "/cv/Tausif-Meah-CV-2026.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/tausif-meah/",
    github: "https://github.com/Tmeah",
  },
} as const;

export const nowCopy = {
  current: { role: "Full Stack Developer", company: "Pobl Tech" },
  previous: { role: "GCP Cloud Engineer", company: "Revolent" },
  degree: "First-Class BSc Software Engineering",
} as const;

export const aboutCopy = {
  intro:
    "I'm a full stack developer based in Wales. At Pobl Tech I deliver web and mobile projects end to end, from design and development through testing and deployment. Outside work I build and ship my own products: Viralz, GoGrow, and Snappd.",
  education:
    "BSc Software Engineering, First-Class Honours, Cardiff Metropolitan University (2020 – 2023).",
} as const;

export const skillLogos = [
  { name: "TypeScript", src: "/skills/typescript-original.svg", mono: false },
  { name: "React", src: "/skills/react-original.svg", mono: false },
  { name: "Next.js", src: "/skills/nextjs-original.svg", mono: true },
  { name: "React Native", src: "/skills/react-original.svg", mono: false },
  { name: "PHP", src: "/skills/php-original.svg", mono: false },
  { name: "Cloudflare", src: "/skills/cloudflare-original.svg", mono: false },
] as const;
