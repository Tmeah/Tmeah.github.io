import { renderToString } from "react-dom/server";
import { Shell } from "@/mount";
import { page as archive } from "@/pages/archive";
import { page as caseStudies } from "@/pages/case-studies";
import { page as home } from "@/pages/home";
import { page as notFound } from "@/pages/not-found";
import { projectPage } from "@/pages/project";
import type { ReactNode } from "react";

const pages: Record<string, ReactNode> = {
  "index.html": home,
  "archive/index.html": archive,
  "projects/index.html": caseStudies,
  "projects/viralz/index.html": projectPage("viralz"),
  "projects/snappd/index.html": projectPage("snappd"),
  "projects/gogrow/index.html": projectPage("gogrow"),
  "404.html": notFound,
};

export const files = Object.keys(pages);

export function render(file: string) {
  return renderToString(<Shell page={pages[file]} />);
}
