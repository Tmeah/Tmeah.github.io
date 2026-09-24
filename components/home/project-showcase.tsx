import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Project, ProjectTheme } from "@/lib/content/types";

type ProjectShowcaseProps = {
  project: Project;
  reverse: boolean;
};

export function ProjectShowcase({ project, reverse }: ProjectShowcaseProps) {
  const themeDetails = getThemeDetails(project.theme);

  return (
    <li
      className={`showcase showcase--${project.theme}${reverse ? " showcase--reverse" : ""}`}
    >
      {themeDetails.decorations}
      <div className="showcase__text">
        <p className="showcase__brand">
          {themeDetails.brandMark}
          {project.name}
        </p>
        <p className="showcase__eyebrow">{project.eyebrow}</p>
        <h3 className="showcase__headline">{themeDetails.headline}</h3>
        <p className="showcase__summary">{project.summary}</p>
        <ul className="showcase__highlights">
          {project.highlights.map((item) => (
            <li key={item}>
              <i className="fas fa-check" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <ul className="showcase__stack" aria-label="Tech stack">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="showcase__actions">
          <Link href={`/projects/${project.slug}/`} className="showcase__cta">
            Case study
          </Link>
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="showcase__link"
            >
              <i className={link.icon} aria-hidden />
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="showcase__visual">
        <div className={themeDetails.framed ? "showcase__device" : "showcase__mockup"}>
          <Image
            src={project.phoneImage}
            alt={`${project.name} app screenshot`}
            width={390}
            height={780}
            sizes="(max-width: 768px) 60vw, 300px"
          />
        </div>
      </div>
    </li>
  );
}

type ThemeDetails = {
  brandMark: ReactNode;
  headline: ReactNode;
  decorations: ReactNode;
  framed: boolean;
};

function getThemeDetails(theme: ProjectTheme): ThemeDetails {
  switch (theme) {
    case "viralz":
      return {
        brandMark: (
          <span className="showcase__mark">
            <i className="fas fa-rocket" aria-hidden />
          </span>
        ),
        headline: (
          <>
            Analyze your TikTok performance <span>like a pro.</span>
          </>
        ),
        decorations: <span className="showcase__glow" aria-hidden />,
        framed: false,
      };
    case "snappd":
      return {
        brandMark: null,
        headline: (
          <>
            <span className="showcase__script">every moment, kept.</span>
            Snap it. <mark>Scrapbook</mark> it.
          </>
        ),
        decorations: (
          <>
            <span className="doodle doodle--spark" aria-hidden>
              ✦
            </span>
            <span className="doodle doodle--heart" aria-hidden>
              ♡
            </span>
            <span className="doodle doodle--star" aria-hidden>
              ✳
            </span>
          </>
        ),
        framed: true,
      };
    case "gogrow":
      return {
        brandMark: <span className="showcase__mark">G</span>,
        headline: (
          <>
            height habits <em>for growing kids</em>
          </>
        ),
        decorations: <span className="showcase__glow" aria-hidden />,
        framed: false,
      };
    default: {
      const exhaustive: never = theme;
      return exhaustive;
    }
  }
}
