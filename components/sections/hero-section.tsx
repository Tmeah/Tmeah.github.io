"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { heroCopy, siteConfig } from "@/lib/content/site";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-brand/10 via-background to-background"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <motion.div {...motionProps}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
            {siteConfig.location}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {heroCopy.greeting}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {heroCopy.headline}
          </p>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            {heroCopy.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects" size="lg">
              View work
            </ButtonLink>
            <ButtonLink href={siteConfig.cvPath} size="lg" variant="outline" download>
              Download CV
            </ButtonLink>
            <ButtonLink href="#contact" size="lg" variant="secondary">
              Contact
            </ButtonLink>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-brand hover:text-brand"
            >
              <Mail className="size-5" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-brand hover:text-brand"
            >
              <FaLinkedin className="size-5" />
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-brand hover:text-brand"
            >
              <FaGithub className="size-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.15 },
              })}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm"
        >
          <p className="text-sm font-medium text-muted-foreground">Currently</p>
          <p className="mt-2 text-2xl font-semibold">{siteConfig.title}</p>
          <p className="mt-1 text-brand">Pobl Tech</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {siteConfig.availability}
          </p>
          <Link
            href="/projects/viralz/"
            className="mt-6 inline-flex text-sm font-semibold text-brand hover:underline"
          >
            Read the Viralz case study →
          </Link>
        </motion.div>
      </div>

      <div className="mx-auto flex max-w-6xl justify-center pb-8">
        <a
          href="#experience"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          Scroll to experience
          <ArrowDown className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
