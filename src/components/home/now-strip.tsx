import { nowCopy } from "@/content/site";

export function NowStrip() {
  return (
    <section className="now" aria-label="At a glance">
      <div className="now__item">
        <p className="label">Currently</p>
        <p className="now__value">
          {nowCopy.current.role} <span>at {nowCopy.current.company}</span>
        </p>
      </div>
      <div className="now__item">
        <p className="label">Previously</p>
        <p className="now__value">
          {nowCopy.previous.role} <span>at {nowCopy.previous.company}</span>
        </p>
      </div>
      <div className="now__item">
        <p className="label">Education</p>
        <p className="now__value">{nowCopy.degree}</p>
      </div>
    </section>
  );
}
