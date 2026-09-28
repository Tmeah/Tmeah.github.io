import { nowCopy } from "@/content/site";

export function NowStrip() {
  return (
    <section className="now" aria-label="At a glance">
      <div className="now__item">
        <p className="note">now</p>
        <p className="now__value">
          {nowCopy.current.role} <span>at {nowCopy.current.company}</span>
        </p>
      </div>
      <div className="now__item">
        <p className="note">before</p>
        <p className="now__value">
          {nowCopy.previous.role} <span>at {nowCopy.previous.company}</span>
        </p>
      </div>
      <div className="now__item">
        <p className="note">education</p>
        <p className="now__value">{nowCopy.degree}</p>
      </div>
    </section>
  );
}
