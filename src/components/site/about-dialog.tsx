import { useEffect, useRef, type MouseEvent } from "react";
import { ContactForm } from "@/components/contact/contact-form";
import type { AboutSection } from "@/components/site/use-about-dialog";
import { experience } from "@/content/experience";
import { aboutCopy, siteConfig, skillLogos } from "@/content/site";

type AboutDialogProps = {
  section: AboutSection | null;
  onClose: () => void;
};

export function AboutDialog({ section, onClose }: AboutDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }
    if (!section) {
      if (dialog.open) {
        dialog.close();
      }
      return;
    }
    if (!dialog.open) {
      dialog.showModal();
    }
    if (section === "contact") {
      contactRef.current?.scrollIntoView({ block: "start" });
      contactRef.current?.querySelector("input")?.focus({ preventScroll: true });
    }
  }, [section]);

  function onBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="about-dialog"
      aria-labelledby="about-dialog-title"
      onClose={onClose}
      onClick={onBackdropClick}
    >
      <button
        type="button"
        className="about-dialog__close"
        aria-label="Close"
        onClick={onClose}
      >
        <i className="fas fa-times" aria-hidden />
      </button>
      <div className="about-dialog__card">
        <section className="about-dialog__about">
          <header className="about-dialog__intro">
            <img
              src="/brand/logo-white.jpg"
              alt=""
              width={64}
              height={64}
              className="about-dialog__avatar"
            />
            <div>
              <h2 className="about-dialog__name" id="about-dialog-title">
                {siteConfig.name}
              </h2>
              <p className="about-dialog__role">
                {siteConfig.title} · {siteConfig.location}
              </p>
            </div>
          </header>

          <p className="about-dialog__para">{aboutCopy.intro}</p>

          <h3 className="about-dialog__heading">Experience</h3>
          <ol className="about-dialog__timeline">
            {experience.map((job) => (
              <li key={job.company}>
                <span className="about-dialog__job">
                  {job.role} <span className="text--blue">@ {job.company}</span>
                </span>
                <span className="about-dialog__period">{job.period}</span>
              </li>
            ))}
          </ol>

          <h3 className="about-dialog__heading">Education</h3>
          <p className="about-dialog__para">{aboutCopy.education}</p>

          <h3 className="about-dialog__heading">Toolkit</h3>
          <ul className="about-dialog__skills">
            {skillLogos.map((skill) => (
              <li
                key={skill.name}
                className={`about-dialog__skill${skill.mono ? " about-dialog__skill--mono" : ""}`}
              >
                <img src={skill.src} alt="" width={20} height={20} />
                {skill.name}
              </li>
            ))}
          </ul>

          <div className="about-dialog__links">
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin" aria-hidden /> LinkedIn
            </a>
            <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
              <i className="fab fa-github" aria-hidden /> GitHub
            </a>
            <a href={siteConfig.cvPath} target="_blank" rel="noreferrer">
              <i className="fas fa-file-pdf" aria-hidden /> CV
            </a>
          </div>
        </section>

        <section
          ref={contactRef}
          className="about-dialog__contact"
          aria-labelledby="about-dialog-contact-title"
        >
          <p className="about-dialog__status">
            <span className="about-dialog__status-dot" aria-hidden />
            Open to new opportunities
          </p>
          <h2 className="about-dialog__name" id="about-dialog-contact-title">
            Let&apos;s have a chat!
          </h2>
          <p className="about-dialog__para about-dialog__para--muted">
            Send me a message, or email me directly at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
          <ContactForm />
        </section>
      </div>
    </dialog>
  );
}
