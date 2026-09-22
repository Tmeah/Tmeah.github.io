"use client";

import { useState, type MouseEvent } from "react";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/content/site";

const blobs = [
  "/shapes/blob-a.svg",
  "/shapes/blob-a.svg",
  "/shapes/blob-a.svg",
  "/shapes/blob-b.svg",
  "/shapes/blob-b.svg",
  "/shapes/blob-b.svg",
  "/shapes/blob-c.svg",
  "/shapes/blob-c.svg",
  "/shapes/blob-c.svg",
];

export function LiveSite() {
  const [modalOpen, setModalOpen] = useState(false);
  const [dark, setDark] = useState(false);

  function moveBackground(event: MouseEvent<HTMLElement>) {
    const shapes = event.currentTarget.querySelectorAll<HTMLElement>(".shape");
    const x = event.clientX / 20;
    const y = event.clientY / 20;
    shapes.forEach((shape, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      shape.style.transform = `translate(${x * direction}px, ${y * direction}px)`;
    });
  }

  return (
    <div className={`live-root modal-host${dark ? " dark-theme" : ""}${modalOpen ? " modal--open" : ""}`}>
      <section id="landing-page" onMouseMove={moveBackground}>
        <nav id="navbar" className="nav">
          <div className="personal_logo">
            <a href="#top" className="header__anchor">
              <figure className="header__logo">
                <img src="/brand/logo-white.jpg" alt="Tausif Meah" className="header__logo--img" />
              </figure>
            </a>
          </div>
          <ul className="nav-list">
            <li className="nav__link">
              <button type="button" className="nav__link--anchor link__hover--effect link__hover--effect--black" onClick={() => setModalOpen(true)}>
                About Me
              </button>
            </li>
            <li className="nav__link">
              <a href="#projects" className="nav__link--anchor link__hover--effect link__hover--effect--black">
                Projects
              </a>
            </li>
            <li className="nav__link">
              <button type="button" className="nav__link--anchor nav__link--anchor--primary" onClick={() => setModalOpen(true)}>
                Contact
              </button>
            </li>
            <li className="nav__link">
              <button type="button" className="nav__link--anchor" aria-label="Toggle contrast" onClick={() => setDark((value) => !value)}>
                <i className="fas fa-adjust" />
              </button>
            </li>
          </ul>
        </nav>

        <header className="header">
          <div className="header__content">
            <h1 className="about__me__info--title">Hey</h1>
            <h1 className="about__me__info--title text--blue">I&apos;m Tausif.</h1>
            <p className="about__me__info--para">
              I am a <strong className="text--blue">full stack developer</strong> shipping web and mobile products, from design through to deployment.
              <br />
              Here&apos;s a bit more{" "}
              <button type="button" className="text--blue click" onClick={() => setModalOpen(true)}>
                about me.
              </button>
            </p>
            <div className="about__me_links">
              <button type="button" className="about__me_link" aria-label="Contact" onClick={() => setModalOpen(true)}>
                <i className="far fa-envelope" />
              </button>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="about__me_link" aria-label="LinkedIn">
                <i className="fab fa-linkedin" />
              </a>
              <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="about__me_link" aria-label="GitHub">
                <i className="fab fa-github" />
              </a>
              <a href={siteConfig.cvPath} className="about__me_link" aria-label="CV">
                <i className="fas fa-file-pdf" />
              </a>
            </div>
          </div>
        </header>

        <button type="button" className="btn__mail click" aria-label="Contact" onClick={() => setModalOpen(true)}>
          <i className="fas fa-envelope" />
        </button>

        <div className={`modal ${modalOpen ? "modal-visible" : ""}`}>
          <div className="modal__half modal__about">
            <h3 className="modal__title modal__title--about">Here&apos;s a bit about me.</h3>
            <h4 className="modal__subtitle modal__subtitle--about">Full Stack Developer · Pobl Tech</h4>
            <p className="modal__para">
              I&apos;m a software engineer based in Wales. I build React and TypeScript products across web and mobile, wire up APIs and payments, and ship them. First-class BSc in Software Engineering, Cardiff Metropolitan University.
            </p>
            <p className="modal__para">
              <b>Pobl Tech</b> — full stack, 10+ client projects.
              <br />
              <b>Revolent</b> — GCP, Kubernetes, Docker, Terraform.
              <br />
              <b>JBS Capacitors</b> — React and React Native.
            </p>
          </div>
          <div className="modal__half modal__contact">
            <button type="button" className="modal__exit click" aria-label="Close" onClick={() => setModalOpen(false)}>
              ×
            </button>
            <h3 className="modal__subtitle modal__subtitle--contact">Let&apos;s have a chat.</h3>
            <p className="modal__para">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <ContactForm />
          </div>
        </div>

        {blobs.map((src, index) => (
          <img key={index} src={src} alt="" className={`shape shape--${index}`} />
        ))}
      </section>

      <section id="projects">
        <div className="container">
          <div className="row">
            <h1 className="section__title">
              Below are some of my <span className="text--blue">projects</span>
            </h1>
            <ul className="projects__list">
              <Project
                image="/projects/viralz-live.png"
                title="Viralz"
                stack="React, TypeScript, Stripe, OAuth"
                copy="An AI-powered creator marketplace. Brands pay for verified views. Launched with payments and about £1,000 in monthly revenue."
                href="/projects/viralz/"
                live="https://viralz.app/"
              />
              <Project
                image="/projects/gogrow-live.png"
                title="GoGrow"
                stack="React, React Native, Expo, APIs"
                copy="Web platform and iOS app. I owned development, API integration, testing, and release."
                href="/projects/gogrow/"
                live="https://getgogrow.app/"
              />
              <Project
                image="/projects/snappd-1.webp"
                title="Snappd"
                stack="React, TypeScript"
                copy="A digital wedding scrapbook. Guests share photos in one place. Built, tested, and deployed for the day."
                href="/projects/snappd/"
              />
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <div className="row footer__row">
          <a href="#landing-page" className="footer__anchor">
            <figure className="footer__logo">
              <img src="/brand/logo.jpg" alt="" className="footer__logo--img" />
            </figure>
            <span className="footer__logo--popper">
              Top ↑
            </span>
          </a>
          <div className="footer__social--list">
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="footer__social--link link__hover--effect link__hover--effect--white">
              LinkedIn
            </a>
            <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="footer__social--link link__hover--effect link__hover--effect--white">
              GitHub
            </a>
            <a href={siteConfig.cvPath} className="footer__social--link link__hover--effect link__hover--effect--white">
              CV
            </a>
            <button type="button" className="footer__social--link link__hover--effect link__hover--effect--white" onClick={() => setModalOpen(true)}>
              Contact
            </button>
          </div>
          <div className="footer__copyright">© {new Date().getFullYear()} Tausif Meah</div>
        </div>
      </footer>
    </div>
  );
}

function Project({
  image,
  title,
  stack,
  copy,
  href,
  live,
}: {
  image: string;
  title: string;
  stack: string;
  copy: string;
  href: string;
  live?: string;
}) {
  return (
    <li className="project">
      <div className="project__wrapper">
        <img className="project__img" src={image} alt={title} />
        <div className="project__description">
          <h3 className="project__description--title">{title}</h3>
          <h4 className="project__description--sub-title">{stack}</h4>
          <p className="project__description--para">{copy}</p>
          <div className="project__description--links">
            <a href={href} className="project__description--link">
              Case study
            </a>
            {live ? (
              <a href={live} target="_blank" rel="noreferrer" className="project__description--link">
                Live
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </li>
  );
}
