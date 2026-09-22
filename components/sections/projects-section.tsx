import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { flagshipProjects } from "@/lib/content/projects";

export function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="section__inner">
        <h2 className="section__title">
          Selected <span>work</span>
        </h2>
        {flagshipProjects.map((project) => (
          <article className="project" key={project.slug}>
            <div className="project__wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="project__img" src={project.thumbnail} alt={project.name} />
              <div className="project__description">
                <h3>{project.name}</h3>
                <h4>{project.tagline}</h4>
                <p>{project.summary}</p>
                <div className="project__actions">
                  <Link href={`/projects/${project.slug}/`}>Case study</Link>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <FaGithub />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
