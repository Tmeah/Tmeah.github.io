import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
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
import { SectionHeading } from "@/components/ui/section-heading";
import { flagshipProjects } from "@/lib/content/projects";

export function ProjectsSection() {
  const featured = flagshipProjects.filter((project) => project.featured);

  return (
    <section id="projects" className="scroll-mt-20 bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Flagship products and platforms"
          description="Case studies with architecture notes, stack details, and outcomes—aligned with my current CV."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {featured.map((project) => (
            <Card
              key={project.slug}
              className="flex flex-col overflow-hidden border-border/80 py-0"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
                <Image
                  src={project.thumbnail}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.tagline}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <p className="text-sm font-medium text-brand">{project.outcome}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stacks.flatMap((group) =>
                    group.items.slice(0, 3).map((item) => (
                      <Badge key={`${project.slug}-${item}`} variant="secondary">
                        {item}
                      </Badge>
                    )),
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pb-6">
                <ButtonLink href={`/projects/${project.slug}/`} size="sm">
                  Case study
                  <ArrowUpRight className="size-4" />
                </ButtonLink>
                {project.liveUrl ? (
                  <ButtonLink
                    href={project.liveUrl}
                    size="sm"
                    variant="outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </ButtonLink>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} GitHub`}
                    className={cn(buttonVariants({ size: "sm", variant: "ghost" }))}
                  >
                    <FaGithub className="size-4" />
                  </a>
                ) : null}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
