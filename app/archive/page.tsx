import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { archiveProjects } from "@/lib/content/projects";
import { siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Project archive",
  description: "Earlier front-end demos and learning projects.",
};

export default function ArchivePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <ButtonLink href="/" variant="ghost" className="mb-6 -ml-2">
          <ArrowLeft className="size-4" />
          Home
        </ButtonLink>
        <h1 className="text-4xl font-bold tracking-tight">Project archive</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Earlier demos and coursework-style builds—kept for reference while
          flagship work leads the portfolio.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {archiveProjects.map((project) => (
            <Card key={project.name} className="overflow-hidden py-0">
              <div className="relative aspect-[16/10] border-b border-border">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2 pb-6">
                {project.liveUrl ? (
                  <ButtonLink
                    href={project.liveUrl}
                    size="sm"
                    variant="outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                    <ArrowUpRight className="size-4" />
                  </ButtonLink>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(buttonVariants({ size: "sm", variant: "ghost" }))}
                  >
                    <FaGithub className="size-4" />
                  </a>
                ) : null}
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Primary portfolio content lives on{" "}
          <a href={siteConfig.url} className="text-brand hover:underline">
            {siteConfig.url.replace("https://", "")}
          </a>
          .
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
