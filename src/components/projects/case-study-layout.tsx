import { DeviceFrame } from "@/components/site/device-frame";
import type { Project } from "@/content/types";

type CaseStudyLayoutProps = {
  project: Project;
  next: Project;
};

export function CaseStudyLayout({ project, next }: CaseStudyLayoutProps) {
  const [primaryLink] = project.links;

  return (
    <article className={`inner case case--${project.theme}`}>
      <a href="/projects/" className="back-link">
        <i className="fas fa-arrow-left" aria-hidden /> All case studies
      </a>

      <header className={`case__band case__band--${project.theme}`}>
        <div className="case__band-text">
          <p className="case__eyebrow">Case study · {project.eyebrow}</p>
          <h1 className="case__title">{project.name}</h1>
          <p className="case__headline">{project.headline}</p>
          <div className="case__cta-row">
            {primaryLink ? (
              <a
                href={primaryLink.href}
                target="_blank"
                rel="noreferrer"
                className="case__cta"
              >
                Visit {primaryLink.label}
                <i className="fas fa-arrow-up-right-from-square" aria-hidden />
              </a>
            ) : null}
            <a href="#screens" className="case__cta case__cta--ghost">
              See it in action
            </a>
          </div>
        </div>
        <div className="case__band-visual">
          <DeviceFrame
            src={project.phoneImage}
            alt={`${project.name} on a phone`}
            theme={project.theme}
            eager
          />
        </div>
      </header>

      <div className="case__body">
        <aside className="case__aside" aria-label="At a glance">
          <p className="case__aside-title">At a glance</p>
          <dl className="case__facts">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>{project.platform}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>
                <ul className="case__stack">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt>Links</dt>
              <dd className="case__aside-links">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    <i className={link.icon} aria-hidden /> {link.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </aside>

        <div className="case__main">
          <section className="case__section">
            <SectionTitle number="01" title="Overview" />
            <p className="case__lead">{project.overview}</p>
          </section>

          <section className="case__section">
            <SectionTitle number="02" title="What I built" />
            <ol className="case__built">
              {project.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="case__section">
            <SectionTitle number="03" title="Key decisions" />
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
            <SectionTitle number="04" title="Outcomes" />
            <ul className="case__outcomes">
              {project.outcomes.map((item) => (
                <li key={item}>
                  <i className="fas fa-check" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section className="case__screens" id="screens">
        <SectionTitle number="05" title="In action" />
        <div className="case__screens-grid">
          <figure className="case__browser">
            <div className="case__browser-bar" aria-hidden>
              <span />
              <span />
              <span />
            </div>
            <img
              src={project.desktopImage}
              alt={`${project.name} website`}
              width={1440}
              height={900}
              loading="lazy"
            />
          </figure>
          <DeviceFrame
            src={project.phoneImage}
            alt={`${project.name} app screen`}
            theme={project.theme}
          />
        </div>
      </section>

      <a
        href={`/projects/${next.slug}/`}
        className={`case__next case__band--${next.theme}`}
      >
        <span className="case__next-label">Next case study</span>
        <span className="case__next-name">{next.name}</span>
        <span className="case__next-headline">{next.headline}</span>
        <i className="fas fa-arrow-right case__next-arrow" aria-hidden />
      </a>
    </article>
  );
}

type SectionTitleProps = {
  number: string;
  title: string;
};

function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <h2 className="case__section-title">
      <span className="case__section-number">{number}</span>
      {title}
    </h2>
  );
}
