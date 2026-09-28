import { ProjectReel } from "@/components/reels/project-reel";
import { projects } from "@/content/projects";
import { mount } from "@/mount";

function ReelsPage() {
  const slug = new URLSearchParams(window.location.search).get("slug");
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="reels-index">
        {projects.map((item) => (
          <a key={item.slug} href={`/reels/?slug=${item.slug}`} className="reels-index__item">
            <ProjectReel theme={item.theme} />
            <span className="label">{item.name}</span>
          </a>
        ))}
      </main>
    );
  }

  return (
    <main className="reels-solo">
      <ProjectReel theme={project.theme} />
    </main>
  );
}

mount(<ReelsPage />);
