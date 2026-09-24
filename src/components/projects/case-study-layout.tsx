import { DeviceFrame } from "@/components/site/device-frame";
import type { Project } from "@/content/types";

type CaseStudyLayoutProps = {
  project: Project;
  next: Project;
};

export function CaseStudyLayout({ project, next }: CaseStudyLayoutProps) {
  const [primaryLink] = project.links;

  return (
    <article className={`case case--${project.theme}`}>
      <header className={`case-hero case__band--${project.theme}`}>
        <div className="case-hero__inner">
          <a href="/projects/" className="case-hero__back">
            <i className="fas fa-arrow-left" aria-hidden /> All case studies
          </a>
          <div className="case-hero__grid">
            <div>
              <p className="case__eyebrow">{project.eyebrow}</p>
              <h1 className="case__title">{project.name}</h1>
              <p className="case__headline">{project.headline}</p>
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
            </div>
            <div className="case-hero__device">
              <DeviceFrame
                src={project.phoneImage}
                alt={`${project.name} app screen`}
                theme={project.theme}
                eager
              />
            </div>
          </div>
          <dl className="case-hero__facts">
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
              <dd>{project.stack.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="case-story">
        <section className="case-story__section">
          <h2 className="case-story__title">
            The <span>idea</span>
          </h2>
          <p className="case-story__lead">{project.overview}</p>
        </section>

        <section className="case-story__section">
          <h2 className="case-story__title">
            What I <span>built</span>
          </h2>
          <ul className="case-story__list">
            {project.built.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="case-story__section">
          <h2 className="case-story__title">
            Key <span>decisions</span>
          </h2>
          <div className="case-story__decisions">
            {project.decisions.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-story__section">
          <h2 className="case-story__title">
            The <span>result</span>
          </h2>
          <ul className="case-story__outcomes">
            {project.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section
        className={`case-showcase case__band--${project.theme}`}
        aria-label={`${project.name} on the web`}
      >
        <div className="case-showcase__stage">
          <figure className="case-showcase__browser">
            <div className="case-showcase__bar" aria-hidden>
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
        </div>
      </section>

      <div className="case-next-wrap">
        <a
          href={`/projects/${next.slug}/`}
          className={`case-next case__band--${next.theme}`}
        >
          <span className="case-next__label">Next case study</span>
          <span className="case-next__name">{next.name}</span>
          <span className="case-next__headline">{next.headline}</span>
          <i className="fas fa-arrow-right case-next__arrow" aria-hidden />
        </a>
      </div>
    </article>
  );
}
