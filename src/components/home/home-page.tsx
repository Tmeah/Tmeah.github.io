import { NowStrip } from "@/components/home/now-strip";
import { ProjectShowcase } from "@/components/home/project-showcase";
import { AboutDialog } from "@/components/site/about-dialog";
import { MarginNote } from "@/components/site/margin-note";
import { Scribble } from "@/components/site/scribble";
import { ShapeField } from "@/components/site/shape-field";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import { useAboutDialog } from "@/components/site/use-about-dialog";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { nowCopy, siteConfig, toolkit } from "@/content/site";

export function HomePage() {
  const { section, openAbout, openContact, close } = useAboutDialog();

  return (
    <div className="page" id="top">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ShapeField />
      <div className="page__content">
        <SiteNav onOpenAbout={openAbout} onOpenContact={openContact} />

        <header className="hero wrap" id="main-content">
          <div className="hero__heading">
            <h1 className="hero__title">
              <span className="hero__line">
                <span>Hey</span>
              </span>
              <span className="hero__line hero__line--accent">
                <span>I&apos;m Tausif.</span>
              </span>
            </h1>
            <MarginNote arrow="left" className="hero__note">
              full stack developer at {nowCopy.current.company}, Wales
            </MarginNote>
          </div>
          <div className="hero__foot">
            <p className="hero__lede">
              I&apos;m a <strong>full stack developer</strong> who designs, builds, and
              ships web and mobile products, from the first sketch to the App Store.
              Here&apos;s a bit more{" "}
              <button type="button" className="hero__about" onClick={openAbout}>
                about me.
              </button>
            </p>
            <div className="hero__side">
              <div className="hero__actions">
                <a href="#projects" className="btn btn--primary">
                  See my work <i className="fas fa-arrow-down" aria-hidden />
                </a>
                <button type="button" className="btn btn--ghost" onClick={openContact}>
                  Get in touch
                </button>
              </div>
              <div className="hero__socials">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-btn"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in" aria-hidden />
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-btn"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github" aria-hidden />
                </a>
                <a
                  href={siteConfig.cvPath}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-btn"
                  aria-label="CV (PDF)"
                >
                  <i className="fas fa-file-lines" aria-hidden />
                </a>
                <button
                  type="button"
                  className="icon-btn"
                  aria-label="Email me"
                  onClick={openContact}
                >
                  <i className="far fa-envelope" aria-hidden />
                </button>
              </div>
            </div>
          </div>
          <NowStrip />
        </header>

        <main>
          <section className="section wrap" id="projects" aria-labelledby="work-title">
            <div className="section__head">
              <div>
                <p className="note">01 · projects</p>
                <h2 className="section__title" id="work-title">
                  Some of my <Scribble>projects</Scribble>
                </h2>
              </div>
              <p className="section__lede">
                Three live products I&apos;ve built and shipped, two of them my own,
                alongside my day job at {nowCopy.current.company}.
              </p>
            </div>
            <ul className="projects__list">
              {projects.map((project, index) => (
                <ProjectShowcase key={project.slug} project={project} index={index} />
              ))}
            </ul>
          </section>

          <section className="section wrap" id="experience" aria-labelledby="experience-title">
            <div className="section__head">
              <div>
                <p className="note">02 · experience</p>
                <h2 className="section__title" id="experience-title">
                  Where I&apos;ve <Scribble mark="circle">worked</Scribble>
                </h2>
              </div>
              <p className="section__lede">
                Web, mobile, and cloud work across agencies and product teams.{" "}
                <a href={siteConfig.cvPath} target="_blank" rel="noreferrer" className="text--blue">
                  Download my CV
                </a>
                .
              </p>
            </div>
            <ol className="experience">
              {experience.map((job) => (
                <li key={job.company} className="experience__row">
                  <p className="experience__period note">{job.period}</p>
                  <div>
                    <h3 className="experience__role">{job.role}</h3>
                    <p className="experience__company">{job.company}</p>
                  </div>
                  <ul className="experience__points">
                    {job.highlights.slice(0, 3).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          <section className="section wrap" id="toolkit" aria-labelledby="toolkit-title">
            <div className="section__head">
              <div>
                <p className="note">03 · toolkit</p>
                <h2 className="section__title" id="toolkit-title">
                  What I <Scribble>work with</Scribble>
                </h2>
              </div>
              <p className="section__lede">
                The languages, frameworks, and tools I use across client work at{" "}
                {nowCopy.current.company} and my own products.
              </p>
            </div>
            <div className="toolkit">
              {toolkit.map((group) => (
                <div key={group.group} className="toolkit__group">
                  <p className="note">{group.group.toLowerCase()}</p>
                  <ul className="toolkit__chips">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="section cta wrap" aria-labelledby="cta-title">
            <p className="note">04 · contact</p>
            <h2 className="cta__title" id="cta-title">
              Fancy working
              <br />
              <Scribble>together?</Scribble>
            </h2>
            <div className="cta__row">
              <a href={`mailto:${siteConfig.email}`} className="cta__email">
                {siteConfig.email} <i className="fas fa-arrow-right" aria-hidden />
              </a>
              <button type="button" className="btn btn--primary" onClick={openContact}>
                Send me a message <i className="fas fa-arrow-right" aria-hidden />
              </button>
            </div>
          </section>
        </main>

        <SiteFooter onOpenContact={openContact} />
      </div>
      <AboutDialog section={section} onClose={close} />
    </div>
  );
}
