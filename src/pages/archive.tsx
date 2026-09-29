import { Icon } from "@/components/site/icon";
import { InnerPage } from "@/components/site/inner-page";
import { Scribble } from "@/components/site/scribble";
import { archiveCount, archiveGroups } from "@/content/projects";
import type { CSSProperties, PointerEvent } from "react";
import type { ArchiveProject, ArchiveStatus } from "@/content/types";
import { mount } from "@/mount";

const groupStarts = archiveGroups.map((_, index) =>
  archiveGroups.slice(0, index).reduce((total, group) => total + group.projects.length, 0),
);

function ArchivePage() {
  return (
    <InnerPage>
      <header className="page-head wrap">
        <a href="/" className="back-link">
          <Icon name="arrow-left" /> Home
        </a>
        <p className="note">everything, in one place</p>
        <h1 className="page-head__title">
          All <Scribble>projects</Scribble>
        </h1>
        <p className="page-head__lede">
          {archiveCount} projects, from the products I run today back to the first
          games I built while learning.
        </p>
        <nav className="archive__jump" aria-label="Project groups">
          {archiveGroups.map((group) => (
            <a key={group.id} href={`#${group.id}`}>
              {group.title} <span>{group.projects.length}</span>
            </a>
          ))}
        </nav>
      </header>
      <div className="inner wrap">
        {archiveGroups.map((group, index) => (
          <section
            key={group.id}
            id={group.id}
            className="archive__group"
            aria-labelledby={`${group.id}-title`}
          >
            <div className="archive__group-head">
              <p className="note">
                {String(index + 1).padStart(2, "0")} · {group.note}
              </p>
              <h2 id={`${group.id}-title`}>{group.title}</h2>
            </div>
            <ul className={`archive__grid${group.id === "products" ? " archive__grid--feature" : ""}`}>
              {group.projects.map((project, projectIndex) => (
                <ArchiveCard
                  key={project.name}
                  project={project}
                  number={groupStarts[index] + projectIndex + 1}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </InnerPage>
  );
}

function ArchiveCard({ project, number }: { project: ArchiveProject; number: number }) {
  const handleMove = (event: PointerEvent<HTMLLIElement>) => {
    if (event.pointerType !== "mouse") {
      return;
    }
    const card = event.currentTarget;
    const box = card.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width;
    const y = (event.clientY - box.top) / box.height;
    card.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    card.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
    card.style.setProperty("--ry", `${((x - 0.5) * 7).toFixed(2)}deg`);
    card.style.setProperty("--rx", `${((0.5 - y) * 7).toFixed(2)}deg`);
  };

  const handleLeave = (event: PointerEvent<HTMLLIElement>) => {
    const card = event.currentTarget;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

  return (
    <li
      className="archive__card"
      style={{ "--accent": project.accent } as CSSProperties}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <span className="archive__glow" aria-hidden />
      <div className="archive__meta">
        <span className="archive__number" aria-hidden>
          {String(number).padStart(2, "0")}
        </span>
        <span className={`archive__status archive__status--${statusTone(project.status)}`}>
          <span className="archive__status-dot" aria-hidden />
          {project.status}
        </span>
      </div>
      <div className="archive__thumb">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            width={1600}
            height={1000}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="archive__placeholder" aria-hidden>
            <span className="archive__placeholder-name">{project.name}</span>
            <span className="note">{placeholderNote(project)}</span>
          </div>
        )}
      </div>
      <div className="archive__body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="archive__stack" aria-label="Built with">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="archive__links">
          {project.caseStudyUrl ? (
            <a href={project.caseStudyUrl}>
              Case study <Icon name="arrow-right" />
            </a>
          ) : null}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              {project.liveLabel ?? "Live site"} <Icon name="arrow-up-right-from-square" />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Icon name="github" /> Code
            </a>
          ) : null}
        </div>
      </div>
    </li>
  );
}

function statusTone(status: ArchiveStatus) {
  switch (status) {
    case "Live":
    case "App Store":
      return "live";
    case "In development":
      return "building";
    case "Concept":
    case "University":
    case "Open source":
    case "Private":
      return "neutral";
    default: {
      const exhaustive: never = status;
      return exhaustive;
    }
  }
}

function placeholderNote(project: ArchiveProject) {
  if (project.githubUrl) {
    return "code on GitHub";
  }
  if (project.liveUrl) {
    return project.liveLabel ? `on the ${project.liveLabel}` : "live now";
  }
  return "private repo";
}

export const page = <ArchivePage />;

mount(page);
