import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content/types";

type CaseStudyLayoutProps = {
  project: Project;
  prev?: Project;
  next?: Project;
};

export function CaseStudyLayout({ project, prev, next }: CaseStudyLayoutProps) {
  return (
    <article className="inner case">
      <Link href="/#projects" className="back-link">
        <i className="fas fa-arrow-left" aria-hidden /> Back to projects
      </Link>

      <header className={`case__band case__band--${project.theme}`}>
        <div className="case__band-text">
          <p className="case__eyebrow">Case study · {project.eyebrow}</p>
          <h1 className="case__title">{project.name}</h1>
          <p className="case__headline">{project.headline}</p>
          <dl className="case__meta">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>{project.platform}</dd>
            </div>
          </dl>
          <div className="case__links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                <i className={link.icon} aria-hidden /> {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="case__band-visual">
          <Image
            src={project.phoneImage}
            alt={`${project.name} on a phone`}
            width={390}
            height={780}
            sizes="220px"
            priority
          />
        </div>
      </header>

      <section className="case__section">
        <h2>Overview</h2>
        <p>{project.overview}</p>
      </section>

      <section className="case__section">
        <h2>What I built</h2>
        <ul className="case__list">
          {project.built.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="case__section">
        <h2>Key decisions</h2>
        <div className="case__decisions">
          {project.decisions.map((item) => (
            <div key={item.title} className="case__decision">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="case__section">
        <h2>Stack</h2>
        <ul className="case__stack">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="case__section">
        <h2>Outcomes</h2>
        <ul className="case__list">
          {project.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="case__section">
        <h2>On the web</h2>
        <figure className="case__browser">
          <div className="case__browser-bar" aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <Image
            src={project.desktopImage}
            alt={`${project.name} website`}
            width={1440}
            height={900}
            sizes="(max-width: 1000px) 100vw, 940px"
          />
        </figure>
      </section>

      <nav className="case__pager" aria-label="More projects">
        {prev ? (
          <Link href={`/projects/${prev.slug}/`}>
            <i className="fas fa-arrow-left" aria-hidden /> {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/projects/${next.slug}/`}>
            {next.name} <i className="fas fa-arrow-right" aria-hidden />
          </Link>
        ) : (
          <Link href="/archive/">
            Earlier work <i className="fas fa-arrow-right" aria-hidden />
          </Link>
        )}
      </nav>
    </article>
  );
}
