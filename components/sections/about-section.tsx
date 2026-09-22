import { SectionHeading } from "@/components/ui/section-heading";
import { aboutCopy } from "@/lib/content/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="Engineering with product ownership"
          description="Professional background and education—visible on the page, not buried in a modal."
        />
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>{aboutCopy.bio}</p>
          <div className="rounded-xl border border-border bg-card p-6 text-foreground shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              Education
            </p>
            <p className="mt-2 font-medium">{aboutCopy.education.degree}</p>
            <p>{aboutCopy.education.school}</p>
            <p className="text-sm text-muted-foreground">
              {aboutCopy.education.period}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
