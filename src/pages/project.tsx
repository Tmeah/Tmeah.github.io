import { NotFoundPage } from "@/components/site/not-found-page";
import { CaseStudyLayout } from "@/components/projects/case-study-layout";
import { InnerPage } from "@/components/site/inner-page";
import { getNextProject, getProjectBySlug } from "@/content/projects";
import { mount } from "@/mount";

export function projectPage(slug: string) {
  const project = getProjectBySlug(slug);
  return project ? (
    <InnerPage theme={project.theme}>
      <CaseStudyLayout project={project} next={getNextProject(slug)} />
    </InnerPage>
  ) : (
    <NotFoundPage />
  );
}

if (!import.meta.env.SSR) {
  mount(projectPage(document.getElementById("root")?.dataset.slug ?? ""));
}
