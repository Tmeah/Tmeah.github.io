import type { PointerEvent } from "react";
import { ProjectReel } from "@/components/reels/project-reel";
import { projects } from "@/content/projects";

function followCursor(event: PointerEvent<HTMLAnchorElement>) {
  if (event.pointerType !== "mouse") {
    return;
  }
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--cursor-x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--cursor-y", `${event.clientY - rect.top}px`);
}

// An editorial list of case studies. On desktop, hovering a row brings up
// that project's reel, which follows the cursor.
export function CaseIndex() {
  return (
    <ol className="case-index">
      {projects.map((project, index) => (
        <li key={project.slug} className={`case-index__item case-index__item--${project.theme}`}>
          <a
            href={`/projects/${project.slug}/`}
            className="case-index__row"
            onPointerMove={followCursor}
          >
            <span className="note case-index__number">{String(index + 1).padStart(2, "0")}</span>
            <span className="case-index__name">{project.name}</span>
            <span className="case-index__info">
              <span className="case-index__headline">{project.headline}</span>
              <span className="case-index__meta">
                {project.role} · {project.platform}
              </span>
            </span>
            <span className="case-index__arrow" aria-hidden>
              <i className="fas fa-arrow-right" />
            </span>
            <span className="case-index__preview">
              <ProjectReel theme={project.theme} />
            </span>
          </a>
        </li>
      ))}
    </ol>
  );
}
