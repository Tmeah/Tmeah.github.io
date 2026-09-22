import { aboutCopy } from "@/lib/content/site";

export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="section__inner">
        <h2 className="section__title">
          A bit <span>about me</span>
        </h2>
        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed">{aboutCopy.bio}</p>
        <div className="about-card mx-auto mt-6 max-w-2xl">
          <p className="font-bold text-[#0074d9]">Education</p>
          <p className="mt-2 font-semibold">{aboutCopy.education.degree}</p>
          <p>{aboutCopy.education.school}</p>
          <p>{aboutCopy.education.period}</p>
        </div>
      </div>
    </section>
  );
}
