import { ContactForm } from "@/components/contact/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/content/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your next build"
          description="Reach out for roles, contract work, or collaboration. Form submissions fall back to email if the service is unavailable."
        />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4 text-muted-foreground">
            <p>
              Email:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-brand hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="font-medium text-foreground hover:underline"
              >
                {siteConfig.phone}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-brand hover:underline"
              >
                /in/tausif-meah
              </a>
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
