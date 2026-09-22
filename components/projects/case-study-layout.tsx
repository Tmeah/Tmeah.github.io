import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Separator } from "@/components/ui/separator";
import type { FlagshipProject } from "@/lib/content/types";

type CaseStudyLayoutProps = {
  project: FlagshipProject;
  prev?: FlagshipProject;
  next?: FlagshipProject;
};

export function CaseStudyLayout({ project, prev, next }: CaseStudyLayoutProps) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <ButtonLink href="/#projects" variant="ghost" className="mb-8 -ml-2">
        <ArrowLeft className="size-4" />
        Back to projects
      </ButtonLink>

      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">
          Case study
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="text-xl text-muted-foreground">{project.tagline}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          {project.liveUrl ? (
            <ButtonLink
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              View live
              <ArrowUpRight className="size-4" />
            </ButtonLink>
          ) : null}
          {project.githubUrl ? (
            <ButtonLink
              href={project.githubUrl}
              variant="outline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </ButtonLink>
          ) : null}
        </div>
        <dl className="grid gap-4 rounded-xl border border-border bg-muted/30 p-4 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">
              Role
            </dt>
            <dd className="mt-1 font-medium">{project.role}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">
              Timeline
            </dt>
            <dd className="mt-1 font-medium">{project.timeline}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">
              Outcome
            </dt>
            <dd className="mt-1 font-medium text-brand">{project.outcome}</dd>
          </div>
        </dl>
      </header>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="leading-relaxed text-muted-foreground">{project.summary}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Stack</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {project.stacks.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-border p-4"
            >
              <p className="text-sm font-semibold">{group.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">What I built</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
          {project.built.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">Challenges & decisions</h2>
        {project.challenges.map((item) => (
          <div key={item.title}>
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Screenshots</h2>
        <div className="mt-4 grid gap-4">
          {project.gallery.map((src, index) => (
            <div
              key={src}
              className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border"
            >
              <Image
                src={src}
                alt={`${project.name} screenshot ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Results</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
          {project.results.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <Separator className="my-12" />

      <nav
        className="flex flex-col gap-4 sm:flex-row sm:justify-between"
        aria-label="Case study pagination"
      >
        {prev ? (
          <Link
            href={`/projects/${prev.slug}/`}
            className="text-sm font-medium hover:text-brand"
          >
            ← {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}/`}
            className="text-sm font-medium hover:text-brand sm:text-right"
          >
            {next.name} →
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
