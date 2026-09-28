import { ProjectShowcase } from "@/components/home/project-showcase";
import { InnerPage } from "@/components/site/inner-page";
import { projects } from "@/content/projects";
import { mount } from "@/mount";

function CaseStudiesPage() {
  return (
    <InnerPage>
      <header className="page-head wrap">
        <a href="/" className="back-link">
          <i className="fas fa-arrow-left" aria-hidden /> Home
        </a>
        <p className="label">Case studies · {projects.length} products</p>
        <h1 className="page-head__title">
          How I <span className="accent">build</span>
        </h1>
        <p className="page-head__lede">
          How I built and shipped three live products: what they do, the
          decisions behind them, and how they turned out.
        </p>
      </header>
      <div className="inner wrap">
        <ul className="projects__list">
          {projects.map((project, index) => (
            <ProjectShowcase key={project.slug} project={project} index={index} />
          ))}
        </ul>
      </div>
    </InnerPage>
  );
}

mount(<CaseStudiesPage />);
