import { ContactForm } from "@/components/contact/contact-form";
import { experience } from "@/content/experience";
import { aboutCopy, siteConfig, skillLogos } from "@/content/site";

type AboutPanelProps = {
  open: boolean;
  onClose: () => void;
};

export function AboutPanel({ open, onClose }: AboutPanelProps) {
  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-title"
      aria-hidden={!open}
      inert={!open}
    >
      <div className="modal__half modal__about">
        <h3 className="modal__title" id="about-title">
          Here&apos;s a bit about me.
        </h3>
        <h4 className="modal__subtitle">
          {siteConfig.title} · {siteConfig.location}
        </h4>
        <p className="modal__para">{aboutCopy.intro}</p>
        <ul className="jobs">
          {experience.map((job) => (
            <li key={job.company}>
              <strong>
                {job.role}, {job.company}
              </strong>
              <span>{job.period}</span>
            </li>
          ))}
        </ul>
        <p className="modal__para">{aboutCopy.education}</p>
        <div className="modal__languages">
          {skillLogos.map((skill) => (
            <figure
              key={skill.name}
              className={`modal__language${skill.mono ? " modal__language--mono" : ""}`}
            >
              <img src={skill.src} alt={`${skill.name} logo`} width={44} height={44} />
              <figcaption className="language__name">{skill.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="modal__half modal__contact">
        <button
          type="button"
          className="modal__exit click"
          aria-label="Close"
          onClick={onClose}
        >
          <i className="fas fa-times" aria-hidden />
        </button>
        <h3 className="modal__title">Let&apos;s have a chat!</h3>
        <h4 className="modal__subtitle">I&apos;m currently open to new opportunities.</h4>
        <p className="modal__para">
          Or email me directly at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
