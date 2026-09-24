import { nowCopy } from "@/lib/content/site";

export function NowStrip() {
  return (
    <section className="now" aria-label="Current role">
      <strong>Currently:</strong> {nowCopy.current.role} at{" "}
      <span className="text--blue">{nowCopy.current.company}</span>
      <span className="now__sep" aria-hidden>
        ·
      </span>
      <strong>Previously:</strong> {nowCopy.previous.role} at{" "}
      <span className="text--blue">{nowCopy.previous.company}</span>
      <span className="now__sep" aria-hidden>
        ·
      </span>
      {nowCopy.degree}
    </section>
  );
}
