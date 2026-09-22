import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/content/site";

export function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="section__inner">
        <h2 className="section__title">
          Let&apos;s have a <span>chat</span>
        </h2>
        <div className="contact-panel">
          <div>
            <p className="text-lg font-semibold">I&apos;m currently open to new opportunities.</p>
            <p className="mt-4">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <p className="mt-2">
              <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
            </p>
            <p className="mt-2">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
