import { DeviceFrame } from "@/components/site/device-frame";
import { InnerPage } from "@/components/site/inner-page";
import { projects } from "@/content/projects";
import { mount } from "@/mount";

function CaseStudiesPage() {
  return (
    <InnerPage>
      <div className="inner">
        <a href="/#projects" className="back-link">
          <i className="fas fa-arrow-left" aria-hidden /> Back home
        </a>
        <h1 className="archive__title">
          Case <span className="text--blue">studies</span>
        </h1>
        <p className="archive__lede">
          How I designed, built, and shipped my own products: what they do,
          the decisions behind them, and how they turned out.
        </p>
        <ul className="cs-grid">
          {projects.map((project) => (
            <li key={project.slug}>
              <a
                href={`/projects/${project.slug}/`}
                className={`cs-tile case__band--${project.theme}`}
              >
                <span className="case__eyebrow">{project.eyebrow}</span>
                <span className="case__title">{project.name}</span>
                <span className="case__headline">{project.headline}</span>
                <span className="cs-tile__cta">
                  Read case study <i className="fas fa-arrow-right" aria-hidden />
                </span>
                <span className="cs-tile__device">
                  <DeviceFrame
                    src={project.phoneImage}
                    alt=""
                    theme={project.theme}
                    eager
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </InnerPage>
  );
}

mount(<CaseStudiesPage />);
