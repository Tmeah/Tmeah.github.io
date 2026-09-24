import { ThemeButton } from "@/components/site/theme-button";

type SiteNavProps = {
  onOpenAbout: () => void;
  onOpenContact: () => void;
};

function isCaseStudiesPage() {
  return window.location.pathname.startsWith("/projects/");
}

export function SiteNav({ onOpenAbout, onOpenContact }: SiteNavProps) {
  return (
    <nav className="nav" aria-label="Primary">
      <a href="/" className="nav__logo" aria-label="Tausif Meah, home">
        <img
          src="/brand/logo-white.jpg"
          alt="Tausif Meah logo"
          width={60}
          height={60}
        />
      </a>
      <ul className="nav-list">
        <li className="nav__link nav__link--hide-sm">
          <button type="button" className="nav__link--anchor" onClick={onOpenAbout}>
            About Me
          </button>
        </li>
        <li className="nav__link nav__link--hide-sm">
          <a href="/#projects" className="nav__link--anchor">
            Projects
          </a>
        </li>
        <li className="nav__link">
          <a
            href="/projects/"
            className="nav__link--anchor"
            aria-current={isCaseStudiesPage() ? "page" : undefined}
          >
            Case Studies
          </a>
        </li>
        <li className="nav__link">
          <button
            type="button"
            className="nav__link--anchor nav__link--anchor--primary"
            onClick={onOpenContact}
          >
            Contact
          </button>
        </li>
        <li className="nav__link">
          <ThemeButton />
        </li>
      </ul>
    </nav>
  );
}
