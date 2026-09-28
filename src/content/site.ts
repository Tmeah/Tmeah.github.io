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
    "I'm a full stack developer based in Wales. At Pobl Tech I deliver web and mobile projects end to end, and outside work I build and ship products like Viralz, Snappd, and GoGrow.",
} as const;

export const toolkit = [
  {
    group: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "PHP", "SQL", "Python", "HTML5", "CSS3"],
  },
  {
    group: "Frontend and mobile",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Redux",
      "Material UI",
      "SCSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    group: "Backend and platforms",
    items: [
      "REST APIs",
      "API integration",
      "Laravel",
      "WordPress",
      "Shopify",
      "Liquid",
      "Firebase",
      "Stripe",
      "Google OAuth",
    ],
  },
  {
    group: "Cloud, tools and testing",
    items: [
      "GCP",
      "GKE",
      "AWS",
      "Cloudflare Workers",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Git",
      "GitHub",
      "npm",
      "Jest",
      "Manual testing",
    ],
  },
] as const;
