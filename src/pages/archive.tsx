import { InnerPage } from "@/components/site/inner-page";
import { archiveProjects } from "@/content/projects";
import { mount } from "@/mount";

function ArchivePage() {
  return (
    <InnerPage>
      <div className="inner">
        <a href="/#projects" className="back-link">
          <i className="fas fa-arrow-left" aria-hidden /> Back to projects
        </a>
        <h1 className="archive__title">
          Earlier <span className="text--blue">work</span>
        </h1>
        <p className="archive__lede">
          Front-end projects from when I was starting out. Kept here for the
          record; my current work is on the homepage.
        </p>
        <ul className="archive__grid">
          {archiveProjects.map((project) => (
            <li key={project.name} className="archive__card">
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                width={1200}
                height={750}
                loading="lazy"
              />
              <div className="archive__body">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <p className="archive__stack">{project.stack.join(" · ")}</p>
                <div className="archive__links">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <i className="fas fa-globe" aria-hidden /> Live
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <i className="fab fa-github" aria-hidden /> Code
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </InnerPage>
  );
}

mount(<ArchivePage />);
