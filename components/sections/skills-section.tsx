import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/lib/content/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use in production"
          description="Grouped the same way as my CV—languages through cloud and testing."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title} className="border-border/80">
              <CardHeader>
                <CardTitle className="text-lg">{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
