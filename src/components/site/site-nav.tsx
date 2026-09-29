import { useSyncExternalStore } from "react";
import { ThemeButton } from "@/components/site/theme-button";

type SiteNavProps = {
  onOpenAbout: () => void;
  onOpenContact: () => void;
};

const noSubscription = () => () => {};
const onCaseStudy = () => window.location.pathname.startsWith("/projects/");

export function SiteNav({ onOpenAbout, onOpenContact }: SiteNavProps) {
  const isCaseStudy = useSyncExternalStore(noSubscription, onCaseStudy, () => false);

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav__inner wrap">
        <a href="/" className="nav__logo" aria-label="Tausif Meah, home">
          <img src="/brand/logo-white.jpg" alt="" width={44} height={44} />
          <span className="nav__name">Tausif Meah</span>
        </a>
        <ul className="nav-list">
          <li className="nav__link--hide-sm">
            <button type="button" className="nav__link--anchor" onClick={onOpenAbout}>
              About
            </button>
          </li>
          <li className="nav__link--hide-sm">
            <a href="/#projects" className="nav__link--anchor">
              Projects
            </a>
          </li>
          <li>
            <a
              href="/projects/"
              className="nav__link--anchor"
              aria-current={isCaseStudy ? "page" : undefined}
            >
              Case Studies
            </a>
          </li>
          <li>
            <button
              type="button"
              className="nav__link--anchor nav__link--anchor--primary"
              onClick={onOpenContact}
            >
              Contact
            </button>
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}
