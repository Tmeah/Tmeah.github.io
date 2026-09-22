import { skillGroups } from "@/lib/content/skills";

export function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="section__inner">
        <h2 className="section__title">
          Technical <span>skills</span>
        </h2>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="pills">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
