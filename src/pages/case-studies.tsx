import { ProjectShowcase } from "@/components/home/project-showcase";
import { InnerPage } from "@/components/site/inner-page";
import { Scribble } from "@/components/site/scribble";
import { projects } from "@/content/projects";
import { mount } from "@/mount";

function CaseStudiesPage() {
  return (
    <InnerPage>
      <header className="page-head wrap">
        <a href="/" className="back-link">
          <i className="fas fa-arrow-left" aria-hidden /> Home
        </a>
        <p className="note">in more detail</p>
        <h1 className="page-head__title">
          Case <Scribble mark="circle">studies</Scribble>
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
