import Image from "next/image";
import Link from "next/link";
import { ThemeButton } from "@/components/site/theme-button";

type SiteNavProps = {
  onOpenPanel?: () => void;
};

export function SiteNav({ onOpenPanel }: SiteNavProps) {
  return (
    <nav className="nav" aria-label="Primary">
      <Link href="/" className="nav__logo" aria-label="Tausif Meah, home">
        <Image
          src="/brand/logo-white.jpg"
          alt="Tausif Meah logo"
          width={60}
          height={60}
          priority
        />
      </Link>
      <ul className="nav-list">
        <li className="nav__link nav__link--hide-sm">
          <PanelLink
            onOpenPanel={onOpenPanel}
            className="nav__link--anchor link__hover--effect"
          >
            About Me
          </PanelLink>
        </li>
        <li className="nav__link">
          <Link
            href="/#projects"
            className="nav__link--anchor link__hover--effect"
          >
            Projects
          </Link>
        </li>
        <li className="nav__link">
          <PanelLink
            onOpenPanel={onOpenPanel}
            className="nav__link--anchor nav__link--anchor--primary"
          >
            Contact
          </PanelLink>
        </li>
        <li className="nav__link">
          <ThemeButton />
        </li>
      </ul>
    </nav>
  );
}

type PanelLinkProps = {
  onOpenPanel?: () => void;
  className: string;
  children: string;
};

function PanelLink({ onOpenPanel, className, children }: PanelLinkProps) {
  if (onOpenPanel) {
    return (
      <button type="button" className={className} onClick={onOpenPanel}>
        {children}
      </button>
    );
  }
  return (
    <Link href="/#about" className={className}>
      {children}
    </Link>
  );
}
