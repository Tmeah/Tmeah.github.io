import { nowCopy } from "@/content/site";

export function NowStrip() {
  return (
    <section className="now" aria-label="Current role">
      <span className="now__item">
        <strong>Currently:</strong> {nowCopy.current.role} at{" "}
        <span className="text--blue">{nowCopy.current.company}</span>
      </span>
      <span className="now__sep" aria-hidden>
        ·
      </span>
      <span className="now__item">
        <strong>Previously:</strong> {nowCopy.previous.role} at{" "}
        <span className="text--blue">{nowCopy.previous.company}</span>
      </span>
      <span className="now__sep" aria-hidden>
        ·
      </span>
      <span className="now__item">{nowCopy.degree}</span>
    </section>
  );
}
