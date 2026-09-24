import { useEffect, useRef, useState } from "react";
import { projects } from "@/content/projects";

export function CaseStudiesMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }
    function onPointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <li
      ref={menuRef}
      className={`nav__link nav__dropdown${open ? " nav__dropdown--open" : ""}`}
    >
      <button
        type="button"
        className="nav__link--anchor link__hover--effect nav__dropdown-toggle"
        aria-expanded={open}
        aria-controls="case-studies-menu"
        onClick={() => setOpen((value) => !value)}
      >
        Case Studies <i className="fas fa-chevron-down" aria-hidden />
      </button>
      <ul className="nav__menu" id="case-studies-menu">
        {projects.map((project) => (
          <li key={project.slug}>
            <a
              href={`/projects/${project.slug}/`}
              className="nav__menu-item"
              onClick={() => setOpen(false)}
            >
              <span className={`nav__menu-dot nav__menu-dot--${project.theme}`} aria-hidden />
              <span>
                <span className="nav__menu-name">{project.name}</span>
                <span className="nav__menu-eyebrow">{project.eyebrow}</span>
              </span>
            </a>
          </li>
        ))}
        <li>
          <a href="/projects/" className="nav__menu-all" onClick={() => setOpen(false)}>
            All case studies <i className="fas fa-arrow-right" aria-hidden />
          </a>
        </li>
      </ul>
    </li>
  );
}
