import { ProjectReel } from "@/components/reels/project-reel";
import { DeviceFrame } from "@/components/site/device-frame";
import { projects } from "@/content/projects";
import type { Project } from "@/content/types";
import { Icon } from "@/components/site/icon";

type CaseStudyLayoutProps = {
  project: Project;
  next: Project;
};

const twoDigits = (value: number) => String(value).padStart(2, "0");

export function CaseStudyLayout({ project, next }: CaseStudyLayoutProps) {
  const [primaryLink] = project.links;
  const number = twoDigits(projects.findIndex((item) => item.slug === project.slug) + 1);

  return (
    <article className={`case case--${project.theme}`}>
      <header className="case-hero wrap">
        <a href="/projects/" className="back-link">
          <Icon name="arrow-left" /> All case studies
        </a>
        <p className="note case-hero__label">
          case study {number} · {project.eyebrow.toLowerCase()}
        </p>
        <div className="case-hero__head">
          <h1 className="case__title">{project.name}</h1>
          <p className="case__headline">{project.headline}</p>
        </div>
        <div className="case-hero__reel">
          <ProjectReel theme={project.theme} />
        </div>
        <dl className="case-hero__facts">
          <div>
            <dt className="label">Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt className="label">Platform</dt>
            <dd>{project.platform}</dd>
          </div>
          <div>
            <dt className="label">Stack</dt>
            <dd>{project.stack.join(", ")}</dd>
          </div>
          <div>
            <dt className="label">Links</dt>
            <dd className="case-hero__links">
              {primaryLink ? (
                <a href={primaryLink.href} target="_blank" rel="noreferrer">
                  Visit {primaryLink.label}{" "}
                  <Icon name="arrow-up-right-from-square" />
                </a>
              ) : null}
            </dd>
          </div>
        </dl>
      </header>

      <div className="case-story wrap">
        <section className="case-story__section">
          <header className="case-story__aside">
            <p className="note">01</p>
            <h2 className="case-story__title">
              The <span>idea</span>
            </h2>
          </header>
          <p className="case-story__lead">{project.overview}</p>
        </section>

        <section className="case-story__section">
          <header className="case-story__aside">
            <p className="note">02</p>
            <h2 className="case-story__title">
              What I <span>built</span>
            </h2>
          </header>
          <ol className="case-story__list">
            {project.built.map((item, index) => (
              <li key={item}>
                <span className="note">{twoDigits(index + 1)}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="case-story__section">
          <header className="case-story__aside">
            <p className="note">03</p>
            <h2 className="case-story__title">
              Key <span>decisions</span>
            </h2>
          </header>
          <div className="case-story__decisions">
            {project.decisions.map((item) => (
              <div key={item.title} className="case-story__decision">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-story__section">
          <header className="case-story__aside">
            <p className="note">04</p>
            <h2 className="case-story__title">
              The <span>result</span>
            </h2>
          </header>
          <ul className="case-story__outcomes">
            {project.outcomes.map((item) => (
              <li key={item}>
                <Icon name="check" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="case-screens wrap" aria-label={`${project.name} screens`}>
        <figure className="case-screens__browser">
          <div className="case-screens__bar" aria-hidden>
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
        <div className="case-screens__phone">
          <DeviceFrame
            src={project.phoneImage}
            width={project.phoneImageSize.width}
            height={project.phoneImageSize.height}
            alt={`${project.name} app screen`}
            theme={project.theme}
          />
        </div>
      </section>

      <div className="case-next-wrap wrap">
        <a href={`/projects/${next.slug}/`} className={`case-next case__band--${next.theme}`}>
          <span className="case-next__label">Next case study</span>
          <span className="case-next__name">{next.name}</span>
          <span className="case-next__headline">{next.headline}</span>
          <span className="case-next__arrow" aria-hidden>
            <Icon name="arrow-right" />
          </span>
        </a>
      </div>
    </article>
  );
}
