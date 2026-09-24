import { ProjectShowcase } from "@/components/home/project-showcase";
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
        <ul className="projects__list">
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.slug}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </ul>
      </div>
    </InnerPage>
  );
}

mount(<CaseStudiesPage />);
