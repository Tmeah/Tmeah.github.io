import { Icon } from "@/components/site/icon";
import { InnerPage } from "@/components/site/inner-page";
import { Scribble } from "@/components/site/scribble";
import { archiveCount, archiveGroups } from "@/content/projects";
import type { ArchiveProject } from "@/content/types";
import { mount } from "@/mount";

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
            <ul className="archive__grid">
              {group.projects.map((project) => (
                <ArchiveCard key={project.name} project={project} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </InnerPage>
  );
}

function ArchiveCard({ project }: { project: ArchiveProject }) {
  return (
    <li className="archive__card">
      <div className="archive__thumb">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            width={1200}
            height={675}
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
        <p className="label">{project.stack.join(" · ")}</p>
        <div className="archive__links">
          {project.caseStudyUrl ? (
            <a href={project.caseStudyUrl}>
              <Icon name="arrow-right" /> Case study
            </a>
          ) : null}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <Icon name="globe" /> {project.liveLabel ?? "Live"}
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

function placeholderNote(project: ArchiveProject) {
  if (project.githubUrl) {
    return "code on GitHub";
  }
  if (project.liveUrl) {
    return project.liveLabel ? `on the ${project.liveLabel}` : "live now";
  }
  return "private repo";
}

mount(<ArchivePage />);
