import { NotFoundPage } from "@/components/site/not-found-page";
import { CaseStudyLayout } from "@/components/projects/case-study-layout";
import { InnerPage } from "@/components/site/inner-page";
import { getNextProject, getProjectBySlug } from "@/content/projects";
import { mount } from "@/mount";

const slug = document.getElementById("root")?.dataset.slug ?? "";
const project = getProjectBySlug(slug);

mount(
  project ? (
    <InnerPage>
      <CaseStudyLayout project={project} next={getNextProject(slug)} />
    </InnerPage>
  ) : (
    <NotFoundPage />
  ),
);
