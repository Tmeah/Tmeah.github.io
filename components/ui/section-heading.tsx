import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto mb-10 max-w-3xl text-center", className)}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
