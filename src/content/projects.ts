import type { ArchiveGroup, ArchiveProject, Project } from "@/content/types";

export const projects: Project[] = [
  {
    slug: "viralz",
    theme: "viralz",
    name: "Viralz",
    eyebrow: "TikTok analytics platform",
    note: "live on the App Store, around £1k a month",
    headline: "Analyse your TikTok performance like a pro.",
    summary:
      "An AI-powered TikTok analytics app. Creators get deep insights into their content, track performance over time, and get guidance on what to post next.",
    highlights: [
      "Live on the App Store, with Google Play coming soon",
      "Stripe subscriptions and Google OAuth sign-in",
      "Around £1,000 in monthly revenue",
    ],
    stack: ["React", "TypeScript", "Stripe", "Google OAuth", "AI"],
    links: [{ label: "viralzapp.com", href: "https://viralzapp.com/" }],
    desktopImage: "/projects/viralz.webp",
    phoneImage: "/projects/viralz-phone.webp",
    role: "Founder and developer",
    platform: "iOS app and web",
    overview:
      "Viralz helps TikTok creators understand why some videos take off and others don't. It pulls performance data into one place and uses AI to turn it into clear insights and next steps. I designed, built, launched, and now run it. It started in 2024 as a web tool that used AI to suggest hooks, hashtags, and video ideas, and grew into the analytics app it is today.",
    built: [
      "The mobile app and marketing site, from first design to App Store release.",
      "AI-driven insights that summarise performance and suggest improvements.",
      "Subscription billing with Stripe, including plans and payment flows.",
      "Google OAuth sign-in so creators can get started in a couple of taps.",
    ],
    decisions: [
      {
        title: "Insight over raw numbers",
        body: "Creators already see view counts. The value is explaining what drove them, so the product leads with plain-language insights and keeps the charts as supporting detail.",
      },
      {
        title: "Quick to start, simple to pay",
        body: "Google OAuth gets creators in without a new password, and Stripe handles subscriptions, so the path from download to paying user stays short.",
      },
    ],
    outcomes: [
      "Launched on the App Store and growing, with Google Play on the way.",
      "Reached around £1,000 in monthly revenue.",
      "Owned every stage: product, design, engineering, billing, and release.",
    ],
  },
  {
    slug: "snappd",
    theme: "snappd",
    name: "Snappd",
    eyebrow: "Event photo scrapbooks",
    note: "started as a scrapbook for my own wedding",
    headline: "Snap it. Scrapbook it.",
    summary:
      "Guests scan a QR code, snap photos on their phone, and the host gets a beautiful digital scrapbook, curated by them. No app for guests, one-time payment, ready in two minutes.",
    highlights: [
      "No app download: guests upload straight from their camera",
      "Host approves every photo before it appears",
      "First product built for segregated events, with separate men's and women's scrapbooks",
    ],
    stack: ["Next.js", "TypeScript", "Payments", "Image uploads", "QR codes"],
    links: [{ label: "snappd.app", href: "https://snappd.app/" }],
    desktopImage: "/projects/snappd.webp",
    phoneImage: "/projects/snappd-phone.webp",
    role: "Founder and developer",
    platform: "Web app",
    overview:
      "Snappd started as a digital scrapbook for my own wedding, so guests could share photos and memories in one place. It's now a product for weddings, Eid gatherings, birthdays, graduations, and corporate events, priced from £29.",
    built: [
      "Event setup: pick a plan, name the event, and get unique QR codes instantly.",
      "A guest upload flow that runs in the phone browser, with no account or app.",
      "A moderation dashboard where hosts approve favourites before they go public.",
      "Segregated plans with two separate scrapbooks and QR codes, one per side.",
      "Scrapbooks that stay live, with the option to download every photo.",
    ],
    decisions: [
      {
        title: "Zero friction for guests",
        body: "Nobody downloads an app at a wedding. Scanning a QR code and uploading from the camera roll keeps participation high, which is what makes the scrapbook worth having.",
      },
      {
        title: "Built for segregated events",
        body: "Many Islamic weddings and Eid gatherings celebrate men and women separately. Snappd supports that directly with two scrapbooks and two QR codes, a gap other photo-sharing tools don't cover.",
      },
    ],
    outcomes: [
      "Used at real weddings and parties; one couple collected over 300 guest photos.",
      "Two paid plans: Basic from £29 and Segregated at £49.",
      "Grew from a personal wedding project into a live product.",
    ],
  },
  {
    slug: "gogrow",
    theme: "gogrow",
    name: "GoGrow",
    eyebrow: "Available on iPhone",
    note: "web and iOS, I handle every release",
    headline: "Height habits for growing kids.",
    summary:
      "A personalised adult-height estimate, then a daily loop of move, food, and sleep habits for kids, with streaks, a coach, and a community to keep them going.",
    highlights: [
      "Live on the App Store",
      "Daily habit loop: move, food, sleep, with streaks and achievements",
      "Web platform plus iOS app",
    ],
    stack: ["iOS", "Web platform", "API integration", "Testing"],
    links: [{ label: "getgogrow.app", href: "https://getgogrow.app/" }],
    desktopImage: "/projects/gogrow.webp",
    phoneImage: "/projects/gogrow-phone.webp",
    role: "Developer",
    platform: "iOS app and web",
    overview:
      "GoGrow turns healthy routines into a simple daily game for kids. I built and maintain both the web platform and the iOS app, covering development, API integration, testing, deployment, and ongoing improvements.",
    built: [
      "The iOS app: daily habit logging, streaks, and achievements.",
      "The web platform and marketing site.",
      "API integration between the app and backend services.",
      "Testing and release for each update, plus ongoing improvements.",
    ],
    decisions: [
      {
        title: "Small daily wins",
        body: "Kids stick with things that feel quick and rewarding. The home screen is a single tap to log a habit, with streaks and achievements doing the motivating.",
      },
      {
        title: "One product, two platforms",
        body: "GoGrow runs as both a web platform and an iPhone app, so every change is built, tested, and shipped across both.",
      },
    ],
    outcomes: [
      "Live on iPhone with a companion web platform.",
      "Ongoing releases and improvements.",
    ],
  },
];

export const archiveGroups: ArchiveGroup[] = [
  {
    id: "products",
    title: "Products",
    note: "live and shipping",
    projects: [
      ...projects.map((project): ArchiveProject => ({
        name: project.name,
        description: project.summary,
        stack: project.stack,
        image: project.desktopImage,
        caseStudyUrl: `/projects/${project.slug}/`,
        liveUrl: project.links[0]?.href,
      })),
      {
        name: "TikWave",
        description:
          "TikTok Shop research app for iPhone: trending products, viral product videos, top ads, and a product scanner, with subscriptions built in.",
        stack: ["React Native", "Expo", "RevenueCat", "Cloudflare Workers", "AppsFlyer"],
        liveUrl: "https://apps.apple.com/gb/app/tikwave/id6758156484",
        liveLabel: "App Store",
      },
    ],
  },
  {
    id: "side",
    title: "Side projects",
    note: "apps and ideas I build in my own time",
    projects: [
      {
        name: "Hifz Helper",
        description:
          "Quran revision app built around accountability: streaks, points and badges, revision circles with friends, heatmaps, and reminders that respect prayer times.",
        stack: ["React Native", "Expo", "Supabase", "React Query"],
      },
      {
        name: "Ramadan Apps",
        description:
          "Four apps for one Ramadan season, each solving one problem: Taraweeh briefings, a fasting-day planner, a Ramadan circle, and help with making dua.",
        stack: ["React Native", "Expo", "Monorepo"],
      },
      {
        name: "Room Decorator",
        description:
          "3D room planner: set the room size, add doors and windows, then drag, rotate, and snap furniture into place. Undo, redo, and save to file.",
        stack: ["Three.js", "JavaScript", "HTML", "CSS"],
      },
      {
        name: "Baseerah",
        description:
          "Website for Baseerah, a Muslim-led digital agency building apps for the community.",
        stack: ["Astro", "React", "Tailwind CSS", "Framer Motion"],
      },
    ],
  },
  {
    id: "sites",
    title: "Sites and tools for others",
    note: "for businesses, friends, and the community",
    projects: [
      {
        name: "Quran Academy",
        description:
          "Interest form for a weekend Quran class in Newport, with a password-protected admin page for replies.",
        stack: ["Next.js", "TypeScript", "Cloudflare Workers"],
        image: "/archive/quran-academy.webp",
        liveUrl: "https://quran-academy.tausifmeah.workers.dev/",
      },
      {
        name: "Youth Club Register",
        description:
          "Attendance register for a youth club, with separate boys' and girls' sessions, dashboards, reports, and exports.",
        stack: ["React", "Firebase", "Chart.js", "Bootstrap"],
      },
      {
        name: "SJ Concepts",
        description:
          "Website for an automotive specialist covering ECU remapping, custom installs, and audio, with CMS-managed content, a shop, and Stripe checkout.",
        stack: ["React", "Prismic", "Contentful", "Stripe"],
        githubUrl: "https://github.com/Tmeah/sjc-app-master",
      },
      {
        name: "Iqra Study",
        description: "Landing site for a study centre, with a contact form for enquiries.",
        stack: ["React", "React Router", "CSS"],
        githubUrl: "https://github.com/Tmeah/iqrastudy",
      },
      {
        name: "EduCam",
        description:
          "Marketing site for a small-group tutoring service, with pricing, FAQs, and testimonials.",
        stack: ["React", "React Bootstrap"],
      },
      {
        name: "Iqra Community Centre Feedback Form",
        description:
          "Feedback form for parents to rate their child's progress and the centre's service.",
        stack: ["HTML", "CSS"],
        image: "/archive/iqra-feedback.webp",
        githubUrl: "https://github.com/Tmeah/survey-form",
        liveUrl: "https://tausifmeah.co.uk/survey-form/",
      },
      {
        name: "Portfolio for Jamil Rahman",
        description: "Personal portfolio site for a fellow software engineer.",
        stack: ["HTML", "CSS"],
        image: "/archive/jamil-portfolio.webp",
        githubUrl: "https://github.com/Tmeah/Friend-eport",
        liveUrl: "https://tausifmeah.co.uk/Friend-eport/",
      },
    ],
  },
  {
    id: "university",
    title: "University",
    note: "BSc Software Engineering, Cardiff Met",
    projects: [
      {
        name: "Chemical Incident Training Tool",
        description:
          "Development project themed around UKHSA, with a chemical database, risk evaluation, incident tracking, and training scenarios.",
        stack: ["React", "Express", "MySQL", "PHP"],
        githubUrl: "https://github.com/Tmeah/Devolepment-project",
      },
      {
        name: "Game of Life",
        description: "Conway's Game of Life, written in C++.",
        stack: ["C++"],
        githubUrl: "https://github.com/Tmeah/st20182639-game-of-life",
      },
    ],
  },
  {
    id: "early",
    title: "Early projects",
    note: "where it started",
    projects: [
      {
        name: "Calendar App",
        description: "Google Calendar style app with a month view, events, and colour labels.",
        stack: ["React", "Day.js", "Context API"],
        githubUrl: "https://github.com/Tmeah/react-calendar",
      },
      {
        name: "Travel Website",
        description: "Wales-focused travel booking site built with React.",
        stack: ["React", "HTML", "CSS", "JavaScript"],
        image: "/archive/trvlwales.webp",
        githubUrl: "https://github.com/Tmeah01/react-travel",
        liveUrl: "https://tmeah01.github.io/react-travel/",
      },
      {
        name: "React Templates Site",
        description: "Marketing page showcasing reusable React layout templates.",
        stack: ["HTML", "CSS", "JavaScript"],
        image: "/archive/reactss.webp",
        githubUrl: "https://github.com/Tmeah/react-templates-page",
        liveUrl: "https://tausifmeah.co.uk/react-templates-page/",
      },
      {
        name: "E-commerce Store",
        description: "Book storefront with featured and latest book sections.",
        stack: ["HTML", "CSS", "JavaScript"],
        image: "/archive/e-commerce.webp",
        githubUrl: "https://github.com/Tmeah/e-commerce",
        liveUrl: "https://tausifmeah.co.uk/e-commerce/",
      },
      {
        name: "Number Guesser",
        description: "Retro number guessing game with high-score tracking.",
        stack: ["HTML", "CSS", "JavaScript"],
        image: "/archive/numberguesser.webp",
        githubUrl: "https://github.com/Tmeah/Number-guesser",
        liveUrl: "https://tausifmeah.co.uk/Number-guesser/",
      },
      {
        name: "Dice Game",
        description: "Two-player race to 100. Be careful of the 1s.",
        stack: ["HTML", "CSS", "JavaScript"],
        image: "/archive/dice.webp",
        githubUrl: "https://github.com/Tmeah/Dice-game",
        liveUrl: "https://tausifmeah.co.uk/Dice-game/",
      },
    ],
  },
];

export const archiveCount = archiveGroups.reduce(
  (total, group) => total + group.projects.length,
  0,
);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
