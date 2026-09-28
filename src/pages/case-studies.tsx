import { CaseIndex } from "@/components/projects/case-index";
import { InnerPage } from "@/components/site/inner-page";
import { Scribble } from "@/components/site/scribble";
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
        <CaseIndex />
        <p className="case-index__more">
          Looking for older stuff?{" "}
          <a href="/archive/" className="text--blue">
            See the archive <i className="fas fa-arrow-right" aria-hidden />
          </a>
        </p>
      </div>
    </InnerPage>
  );
}

mount(<CaseStudiesPage />);
