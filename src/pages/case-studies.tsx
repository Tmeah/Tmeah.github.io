import { CaseIndex } from "@/components/projects/case-index";
import { InnerPage } from "@/components/site/inner-page";
import { Scribble } from "@/components/site/scribble";
import { archiveCount } from "@/content/projects";
import { mount } from "@/mount";
import { Icon } from "@/components/site/icon";

function CaseStudiesPage() {
  return (
    <InnerPage>
      <header className="page-head wrap">
        <a href="/" className="back-link">
          <Icon name="arrow-left" /> Home
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
          Want the full list?{" "}
          <a href="/archive/" className="text--blue">
            See all {archiveCount} projects <Icon name="arrow-right" />
          </a>
        </p>
      </div>
    </InnerPage>
  );
}

export const page = <CaseStudiesPage />;

mount(page);
