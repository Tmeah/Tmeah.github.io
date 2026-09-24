"use client";

import { useCallback, useEffect, useState } from "react";
import { AboutPanel } from "@/components/home/about-panel";
import { NowStrip } from "@/components/home/now-strip";
import { ProjectShowcase } from "@/components/home/project-showcase";
import { ShapeField } from "@/components/site/shape-field";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import { projects } from "@/lib/content/projects";
import { siteConfig } from "@/lib/content/site";

const panelHashes = new Set(["#about", "#contact"]);

export function HomePage() {
  const [panelOpen, setPanelOpen] = useState(false);

  const openPanel = useCallback(() => setPanelOpen(true), []);
  const togglePanel = useCallback(() => setPanelOpen((open) => !open), []);
  const closePanel = useCallback(() => setPanelOpen(false), []);

  useEffect(() => {
    function syncFromHash() {
      if (panelHashes.has(window.location.hash)) {
        setPanelOpen(true);
      }
    }
    const frame = requestAnimationFrame(syncFromHash);
    window.addEventListener("hashchange", syncFromHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  useEffect(() => {
    if (!panelOpen) {
      return;
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPanelOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [panelOpen]);

  return (
    <div className={`page${panelOpen ? " modal--open" : ""}`} id="top">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ShapeField />
      <div className="page__content">
        <section id="landing-page">
          <SiteNav onOpenPanel={togglePanel} />
          <header className="header" id="main-content">
            <div className="header__content">
              <h1 className="about__me__info--title">Hey</h1>
              <h1 className="about__me__info--title text--blue">
                I&apos;m Tausif.
              </h1>
              <p className="about__me__info--para">
                I am a <strong className="text--blue">full stack developer</strong>{" "}
                building web and mobile products, from design to deployment.
                <br />
                Here&apos;s a bit more{" "}
                <button type="button" className="text--blue click" onClick={openPanel}>
                  about me.
                </button>
              </p>
              <div className="about__me_links">
                <button
                  type="button"
                  className="about__me_link"
                  aria-label="Contact me"
                  onClick={openPanel}
                >
                  <i className="far fa-envelope" aria-hidden />
                </button>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="about__me_link"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin" aria-hidden />
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="about__me_link"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github" aria-hidden />
                </a>
                <a
                  href={siteConfig.cvPath}
                  target="_blank"
                  rel="noreferrer"
                  className="about__me_link"
                  aria-label="CV (PDF)"
                >
                  <i className="fas fa-file-pdf" aria-hidden />
                </a>
              </div>
            </div>
          </header>
          <NowStrip />
          <button
            type="button"
            className="btn__mail click"
            aria-label="Contact me"
            onClick={openPanel}
          >
            <i className="fas fa-envelope" aria-hidden />
          </button>
          <AboutPanel open={panelOpen} onClose={closePanel} />
        </section>

        <section id="projects">
          <div className="container">
            <div className="row">
              <h2 className="section__title">
                Below are some of my <span className="text--blue">projects</span>
              </h2>
              <p className="section__lede">
                Products I&apos;ve built and shipped alongside my day job at Pobl
                Tech.
              </p>
              <ul className="projects__list">
                {projects.map((project, index) => (
                  <ProjectShowcase
                    key={project.slug}
                    project={project}
                    reverse={index % 2 === 1}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>

        <SiteFooter onOpenPanel={openPanel} />
      </div>
    </div>
  );
}
