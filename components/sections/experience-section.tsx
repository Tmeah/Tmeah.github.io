import { SectionHeading } from "@/components/ui/section-heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { experience } from "@/lib/content/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Building and shipping across the stack"
          description="Commercial delivery at Pobl Tech, cloud engineering at Revolent, and product work across web and mobile."
        />
        <div className="grid gap-6">
          {experience.map((entry) => (
            <Card key={`${entry.company}-${entry.period}`} className="border-border/80">
              <CardHeader className="gap-1">
                <CardTitle className="text-xl">{entry.role}</CardTitle>
                <CardDescription className="text-base">
                  <span className="font-medium text-foreground">
                    {entry.company}
                  </span>
                  <span className="mx-2 text-muted-foreground">·</span>
                  <span>{entry.period}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {entry.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
