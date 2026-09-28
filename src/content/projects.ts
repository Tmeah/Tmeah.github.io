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
    phoneImageSize: { width: 384, height: 820 },
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
    phoneImageSize: { width: 732, height: 1609 },
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
    phoneImageSize: { width: 436, height: 951 },
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

const productAccents: Record<Project["theme"], string> = {
  viralz: "#ff2d55",
  snappd: "#e8577e",
  gogrow: "#14a3aa",
};

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
        accent: productAccents[project.theme],
        status: "Live",
        image: `/archive/covers/${project.slug}.webp`,
        caseStudyUrl: `/projects/${project.slug}/`,
        liveUrl: project.links[0]?.href,
      })),
      {
        name: "TikWave",
        accent: "#8b5cf6",
        status: "App Store",
        image: "/archive/covers/tikwave.webp",
        description:
          "Subscription iPhone app for TikTok Shop sellers and creators: trending products ranked by sales, viral product videos, and product analysis with scores and competitor context.",
        stack: ["React Native", "Expo", "Supabase", "Cloudflare Workers", "RevenueCat", "OpenAI"],
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
        accent: "#059669",
        status: "In development",
        image: "/archive/covers/hifz-helper.webp",
        description:
          "Quran revision companion for people who have memorised the Quran: daily juz logging, streaks, khatam progress, and achievements, with group khatams on the way.",
        stack: ["React Native", "Expo Router", "TypeScript", "NativeWind", "Zustand"],
      },
      {
        name: "Ramadan Apps",
        accent: "#d97706",
        status: "In development",
        image: "/archive/covers/ramadan-apps.webp",
        description:
          "Four apps for one Ramadan season: Khushu briefs you on each night's Taraweeh, Baraka plans your day around fasting, Suhba puts you in a small accountability circle, and Munaajat suggests duas for the moment.",
        stack: ["React Native", "Expo", "TypeScript", "npm workspaces"],
      },
      {
        name: "Room Decorator",
        accent: "#2563eb",
        status: "Private",
        image: "/archive/covers/room-decorator.webp",
        description:
          "Browser-based 3D room planner: set the room size, add doors, windows, and wall blocks, then drag, rotate, and snap furniture to a grid. Undo, redo, and save to file.",
        stack: ["Three.js", "JavaScript", "HTML", "CSS"],
      },
      {
        name: "Baseerah",
        accent: "#047857",
        status: "Concept",
        image: "/archive/covers/baseerah.webp",
        description:
          "Concept site for a Muslim-led app agency: services, featured apps, and a contact form, with scroll animations throughout.",
        stack: ["Astro", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
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
        accent: "#3f7d5a",
        status: "Live",
        image: "/archive/covers/quran-academy.webp",
        description:
          "Interest form for a weekend Quran class in Newport, with a password-protected admin page for replies.",
        stack: ["Next.js", "TypeScript", "Cloudflare Workers"],
        liveUrl: "https://quran-academy.tausifmeah.workers.dev/",
      },
      {
        name: "Youth Club Register",
        accent: "#6366f1",
        status: "Private",
        image: "/archive/covers/youth-club-register.webp",
        description:
          "Register for the Iqra Newport youth club: attendance and session payments for separate boys' and girls' sections, incident logging, and monthly reports with charts.",
        stack: ["React", "Firebase", "Chart.js", "React Bootstrap"],
      },
      {
        name: "SJ Concepts",
        accent: "#e11d2a",
        status: "Open source",
        image: "/archive/covers/sj-concepts.webp",
        description:
          "Previous website for a car audio, security, and customisation specialist in Newport, with a gallery and shop managed through Contentful and Stripe checkout.",
        stack: ["React", "Contentful", "Stripe", "Netlify Functions", "Bootstrap"],
        githubUrl: "https://github.com/Tmeah/sjc-app-master",
      },
      {
        name: "Iqra Study",
        accent: "#4f46e5",
        status: "Open source",
        image: "/archive/covers/iqra-study.webp",
        description:
          "Landing page for IqraStudy, an online platform for exploring the Quran, Hadith, and duas, with a pop-up contact form.",
        stack: ["React", "React Router", "CSS"],
        githubUrl: "https://github.com/Tmeah/iqrastudy",
      },
      {
        name: "EduCam",
        accent: "#0d9488",
        status: "Private",
        image: "/archive/covers/educam.webp",
        description:
          "Marketing site for a GCSE tutoring service offering small-group, pay-as-you-go, and one-to-one sessions, with pricing and FAQs.",
        stack: ["React", "React Bootstrap", "React Router"],
      },
      {
        name: "Iqra Community Centre Feedback Form",
        accent: "#7c3aed",
        status: "Live",
        image: "/archive/covers/iqra-feedback.webp",
        description:
          "Feedback form for parents to rate their child's progress and the centre's service.",
        stack: ["HTML", "CSS"],
        githubUrl: "https://github.com/Tmeah/survey-form",
        liveUrl: "https://tausifmeah.co.uk/survey-form/",
      },
      {
        name: "Portfolio for Jamil Rahman",
        accent: "#8b3dff",
        status: "Live",
        image: "/archive/covers/jamil-portfolio.webp",
        description: "Personal portfolio site for a fellow software engineer.",
        stack: ["HTML", "CSS"],
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
        name: "ChemInspect",
        accent: "#6c5ce7",
        status: "University",
        image: "/archive/covers/cheminspect.webp",
        description:
          "Chemical database and emergency response training tool built with UKHSA: look up chemicals via PubChem, log spill incidents with live weather, and practise shelter-or-evacuate decisions using the SHORE framework.",
        stack: ["React", "Express", "MySQL", "PHP", "PubChem API"],
        githubUrl: "https://github.com/Tmeah/Devolepment-project",
      },
      {
        name: "Game of Life",
        accent: "#16a34a",
        status: "University",
        image: "/archive/covers/game-of-life.webp",
        description:
          "Conway's Game of Life in C++ for a university module: a randomly seeded 64 by 64 grid drawn with OpenGL, with each generation timed and an experiment in parallelising the update with Intel TBB.",
        stack: ["C++", "OpenGL", "FreeGLUT", "Intel TBB"],
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
        accent: "#4285f4",
        status: "Open source",
        image: "/archive/covers/calendar-app.webp",
        description:
          "Google Calendar style month view: create, edit, and delete events, tag them with colour labels, and filter from the sidebar. Events are saved in the browser.",
        stack: ["React", "Tailwind CSS", "Day.js", "Context API"],
        githubUrl: "https://github.com/Tmeah/react-calendar",
      },
      {
        name: "Travel Website",
        accent: "#6366f1",
        status: "Live",
        image: "/archive/covers/travel.webp",
        description: "Wales-focused travel booking site built with React.",
        stack: ["React", "HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Tmeah01/react-travel",
        liveUrl: "https://tmeah01.github.io/react-travel/",
      },
      {
        name: "React Templates Site",
        accent: "#10b981",
        status: "Live",
        image: "/archive/covers/templates.webp",
        description: "Marketing page showcasing reusable React layout templates.",
        stack: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Tmeah/react-templates-page",
        liveUrl: "https://tausifmeah.co.uk/react-templates-page/",
      },
      {
        name: "E-commerce Store",
        accent: "#8b5cf6",
        status: "Live",
        image: "/archive/covers/ecommerce.webp",
        description: "Book storefront with featured and latest book sections.",
        stack: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Tmeah/e-commerce",
        liveUrl: "https://tausifmeah.co.uk/e-commerce/",
      },
      {
        name: "Number Guesser",
        accent: "#16a34a",
        status: "Live",
        image: "/archive/covers/number-guesser.webp",
        description: "Retro number guessing game with high-score tracking.",
        stack: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Tmeah/Number-guesser",
        liveUrl: "https://tausifmeah.co.uk/Number-guesser/",
      },
      {
        name: "Dice Game",
        accent: "#ec4899",
        status: "Live",
        image: "/archive/covers/dice.webp",
        description: "Two-player race to 100. Be careful of the 1s.",
        stack: ["HTML", "CSS", "JavaScript"],
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
