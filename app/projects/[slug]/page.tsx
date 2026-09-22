import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CaseStudyLayout } from "@/components/projects/case-study-layout";
import {
  flagshipProjects,
  getAdjacentProjects,
  getProjectBySlug,
} from "@/lib/content/projects";
import { siteConfig } from "@/lib/content/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return flagshipProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.name} — Case study`,
    description: project.summary,
    openGraph: {
      title: `${project.name} | ${siteConfig.name}`,
      description: project.summary,
      url: `${siteConfig.url}/projects/${project.slug}/`,
      images: [{ url: `${siteConfig.url}${project.thumbnail}` }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <div className="portfolio">
      <SiteHeader />
      <main id="main-content">
        <CaseStudyLayout project={project} prev={prev} next={next} />
      </main>
      <SiteFooter />
    </div>
  );
}
