export const siteConfig = {
  name: "Tausif Meah",
  title: "Full Stack Developer",
  location: "Wales, United Kingdom",
  availability:
    "Open to full-time and contract roles across web, mobile, and cloud-backed products.",
  email: "tausifmeah@gmail.com",
  phone: "+447375134616",
  url: "https://tausifmeah.co.uk",
  cvPath: "/cv/Tausif-Meah-CV-2026.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/tausif-meah/",
    github: "https://github.com/Tmeah",
  },
  nav: [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const heroCopy = {
  greeting: "Hey, I'm Tausif.",
  headline: "Full Stack Developer shipping web and mobile products end to end.",
  subheadline:
    "I build React and TypeScript experiences, integrate APIs and payments, and deploy reliable apps—from Cloudflare Workers and WordPress to iOS with Expo.",
} as const;

export const aboutCopy = {
  bio: "I'm a software engineer based in Wales with a First-Class BSc in Software Engineering from Cardiff Metropolitan University. I work across the stack at Pobl Tech, delivering client projects from design through testing and deployment, and I ship my own products on the side.",
  education: {
    school: "Cardiff Metropolitan University",
    degree: "BSc Software Engineering, First-Class Honours",
    period: "2020 – 2023",
  },
} as const;
