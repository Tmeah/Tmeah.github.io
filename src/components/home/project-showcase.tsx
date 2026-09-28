import { useRef, type MouseEvent } from "react";
import { ProjectReel } from "@/components/reels/project-reel";
import { MarginNote } from "@/components/site/margin-note";
import type { Project } from "@/content/types";

type ProjectShowcaseProps = {
  project: Project;
  index: number;
};

export function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const caseStudyLink = useRef<HTMLAnchorElement>(null);
  const reverse = index % 2 === 1;

  function openCaseStudy(event: MouseEvent<HTMLDivElement>) {
    const clickedControl = (event.target as Element).closest("a, button");
    if (clickedControl || window.getSelection()?.toString()) {
      return;
    }
    caseStudyLink.current?.dispatchEvent(
      new window.MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        metaKey: event.metaKey,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
      }),
    );
  }

  return (
    <li id={project.slug} className={`projects__item${reverse ? " projects__item--reverse" : ""}`}>
      <MarginNote arrow="down" className="projects__note">
        {project.note}
      </MarginNote>
      <div className="projects__card">
        <div
          className={`showcase showcase--${project.theme}${reverse ? " showcase--reverse" : ""}`}
          onClick={openCaseStudy}
        >
          <div className="showcase__media">
            <ProjectReel theme={project.theme} />
          </div>
          <div className="showcase__body">
            <p className="showcase__meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{project.eyebrow}</span>
            </p>
            <p className="showcase__brand">{project.name}</p>
            <h3 className="showcase__headline">{project.headline}</h3>
            <p className="showcase__summary">{project.summary}</p>
            <ul className="showcase__highlights">
              {project.highlights.map((item) => (
                <li key={item}>
                  <i className="fas fa-check" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="showcase__stack">{project.stack.join(" · ")}</p>
            <div className="showcase__actions">
              <a
                ref={caseStudyLink}
                href={`/projects/${project.slug}/`}
                className="showcase__cta"
              >
                Read the case study <i className="fas fa-arrow-right" aria-hidden />
              </a>
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="showcase__link"
                >
                  {link.label} <i className="fas fa-arrow-up-right-from-square" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
