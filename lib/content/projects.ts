import type { ArchiveProject, FlagshipProject } from "@/lib/content/types";

export const flagshipProjects: FlagshipProject[] = [
  {
    slug: "viralz",
    name: "Viralz",
    tagline: "AI-powered creator marketplace SaaS",
    summary:
      "Performance-based campaigns connecting brands and creators with verified views, Stripe billing, and Google OAuth sign-in.",
    outcome: "Launched SaaS with Stripe payments and ~£1,000 monthly revenue at peak.",
    role: "Founder & full stack developer",
    timeline: "2024 – Present",
    liveUrl: "https://viralz.app/",
    thumbnail: "/projects/viralz-live.png",
    gallery: [
      "/projects/viralz-live.png",
      "/projects/viralz-2.webp",
      "/projects/viralz-3.webp",
    ],
    stacks: [
      {
        label: "Product",
        items: ["React", "TypeScript", "Stripe", "Google OAuth"],
      },
      {
        label: "Platform",
        items: ["REST APIs", "Firebase", "Cloud deployment"],
      },
    ],
    built: [
      "End-to-end subscription and payment flows with Stripe.",
      "Authenticated onboarding with Google OAuth and role-based access patterns.",
      "Campaign browsing and creator workflows aligned to verified performance metrics.",
      "Responsive marketing site and in-app UX for brands and creators.",
      "Operational tooling for monitoring sign-ups, billing events, and product iterations.",
    ],
    challenges: [
      {
        title: "Aligning incentives in the product model",
        body: "Viralz needed a UX that made performance-based pricing understandable for both brands and creators. I structured flows so budgets, tiers, and payouts stay transparent without overwhelming first-time users.",
      },
      {
        title: "Shipping payments and auth safely",
        body: "Stripe and OAuth touchpoints require careful state handling and error recovery. I implemented defensive client flows, server-validated webhooks where applicable, and clear user feedback when third-party services fail.",
      },
    ],
    results: [
      "Shipped a production SaaS with live payments and authenticated users.",
      "Reached approximately £1,000 in monthly revenue while iterating on product-market fit.",
      "Demonstrated full ownership from idea through deployment and ongoing improvements.",
    ],
    featured: true,
  },
  {
    slug: "gogrow",
    name: "GoGrow",
    tagline: "Web platform with companion iOS app",
    summary:
      "Cross-platform product spanning a web application and iOS experience, with API integration, testing, and ongoing feature delivery.",
    outcome: "Delivered web + iOS delivery with API-driven features and release cadence.",
    role: "Lead developer",
    timeline: "2023 – Present",
    liveUrl: "https://getgogrow.app/",
    thumbnail: "/projects/gogrow-live.png",
    gallery: [
      "/projects/gogrow-live.png",
      "/projects/gogrow-2.webp",
      "/projects/gogrow-3.webp",
    ],
    stacks: [
      {
        label: "Client",
        items: ["React", "TypeScript", "React Native", "Expo"],
      },
      {
        label: "Services",
        items: ["REST APIs", "SQL", "Automated & manual testing"],
      },
    ],
    built: [
      "Maintained the web platform and iOS application from feature design through release.",
      "Integrated backend APIs for user-facing flows and data synchronisation.",
      "Implemented testing across functional, regression, and device matrices before deployment.",
      "Shipped iterative improvements based on usage feedback and stakeholder priorities.",
    ],
    challenges: [
      {
        title: "Keeping web and mobile in sync",
        body: "Shared business logic and API contracts need to stay consistent across React and React Native clients. I standardised API consumption patterns and release checklists to reduce drift between platforms.",
      },
      {
        title: "Reliable releases",
        body: "With multiple surfaces in production, regressions are costly. I combined targeted automated tests with structured manual passes on critical paths before each deployment.",
      },
    ],
    results: [
      "Sustained dual-platform delivery with integrated APIs and testing discipline.",
      "Improved stability of release cycles through repeatable QA workflows.",
    ],
    featured: true,
  },
  {
    slug: "snappd",
    name: "Snappd",
    tagline: "Digital wedding scrapbook for guests",
    summary:
      "Guest photo-sharing experience for a live event—upload, browse, and preserve memories with a mobile-friendly UI.",
    outcome: "Shipped and hosted a event-ready guest experience with photo uploads.",
    role: "Solo developer",
    timeline: "2024",
    liveUrl: undefined,
    thumbnail: "/projects/snappd-1.webp",
    gallery: [
      "/projects/snappd-1.webp",
      "/projects/snappd-2.webp",
      "/projects/snappd-3.webp",
    ],
    stacks: [
      {
        label: "Frontend",
        items: ["React", "TypeScript", "Responsive UI"],
      },
      {
        label: "Delivery",
        items: ["Media uploads", "Hosting", "Production support"],
      },
    ],
    built: [
      "Designed and built a scrapbook-style gallery for wedding guests.",
      "Implemented upload flows optimised for phones on event-day networks.",
      "Deployed and monitored the app through the live event window.",
      "Handled post-event tweaks based on real guest usage.",
    ],
    challenges: [
      {
        title: "Event-day reliability",
        body: "Traffic spikes and mobile networks are unpredictable at venues. I prioritised lightweight pages, optimistic UI where safe, and clear recovery when uploads fail.",
      },
      {
        title: "Low-friction guest onboarding",
        body: "Guests should participate without accounts or tutorials. The interface favours QR access, minimal steps, and immediate visual feedback when photos land in the shared album.",
      },
    ],
    results: [
      "Successfully supported a real-world event with guest uploads and browsing.",
      "Validated rapid solo delivery from concept to production under a fixed deadline.",
      "Live event deployment has since been retired; case study documents the build and outcomes.",
    ],
    featured: true,
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    name: "React Templates Site",
    description: "Marketing page showcasing reusable React layout templates.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/archive/reactss.png",
    githubUrl: "https://github.com/Tmeah/react-templates-page",
    liveUrl: "https://tausifmeah.co.uk/react-templates-page/",
  },
  {
    name: "Travel Website (React)",
    description: "Wales-focused travel booking UI built with React.",
    stack: ["React", "HTML", "CSS", "JavaScript"],
    image: "/archive/trvlwales.png",
    githubUrl: "https://github.com/Tmeah01/react-travel",
    liveUrl: "https://tmeah01.github.io/react-travel/",
  },
  {
    name: "Number Guesser",
    description: "Retro number guessing game with score tracking.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/archive/numberguesser.png",
    githubUrl: "https://github.com/Tmeah/Number-guesser",
    liveUrl: "https://tausifmeah.co.uk/Number-guesser/",
  },
  {
    name: "E-commerce Store",
    description: "Book storefront with featured and latest product sections.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/archive/e-commerce.png",
    githubUrl: "https://github.com/Tmeah/e-commerce",
    liveUrl: "https://tausifmeah.co.uk/e-commerce/",
  },
  {
    name: "Dice Game",
    description: "Two-player dice race to 100 with hold and risk mechanics.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/archive/dice.png",
    githubUrl: "https://github.com/Tmeah/Dice-game",
    liveUrl: "https://tausifmeah.co.uk/Dice-game/",
  },
];

export function getProjectBySlug(slug: string): FlagshipProject | undefined {
  return flagshipProjects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev?: FlagshipProject;
  next?: FlagshipProject;
} {
  const index = flagshipProjects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return {};
  }
  return {
    prev: index > 0 ? flagshipProjects[index - 1] : undefined,
    next:
      index < flagshipProjects.length - 1
        ? flagshipProjects[index + 1]
        : undefined,
  };
}
