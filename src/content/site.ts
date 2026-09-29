export const siteConfig = {
  name: "Tausif Meah",
  title: "Full Stack Developer",
  location: "Wales, UK",
  email: "tausifmeah@gmail.com",
  contactEndpoint: "https://portfolio-contact.tausifmeah.workers.dev",
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
    "I'm a full stack developer based in Wales. At Pobl Tech I deliver web and mobile projects end to end, and outside work I build and ship products like Viralz, Snappd, and GoGrow.",
} as const;

export const skillLogos = [
  { name: "TypeScript", src: "/skills/typescript-original.svg", mono: false },
  { name: "React", src: "/skills/react-original.svg", mono: false },
  { name: "Next.js", src: "/skills/nextjs-original.svg", mono: true },
  { name: "React Native", src: "/skills/react-original.svg", mono: false },
  { name: "PHP", src: "/skills/php-original.svg", mono: false },
  { name: "Laravel", src: "/skills/laravel-original.svg", mono: false },
  { name: "WordPress", src: "/skills/wordpress-plain.svg", mono: true },
  { name: "Firebase", src: "/skills/firebase-original.svg", mono: false },
  { name: "Google Cloud", src: "/skills/googlecloud-original.svg", mono: false },
  { name: "Kubernetes", src: "/skills/kubernetes-original.svg", mono: false },
  { name: "Docker", src: "/skills/docker-original.svg", mono: false },
  { name: "Cloudflare", src: "/skills/cloudflare-original.svg", mono: false },
] as const;
