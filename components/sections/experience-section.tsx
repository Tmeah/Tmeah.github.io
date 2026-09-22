import { experience } from "@/lib/content/experience";

export function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <div className="section__inner">
        <h2 className="section__title">
          Where I&apos;ve <span>worked</span>
        </h2>
        {experience.map((entry) => (
          <article className="job" key={entry.company}>
            <h3>{entry.role}</h3>
            <p>
              {entry.company} · {entry.period}
            </p>
            <ul>
              {entry.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
