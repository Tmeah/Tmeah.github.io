import { siteConfig } from "@/content/site";

type SiteFooterProps = {
  onOpenContact: () => void;
};

export function SiteFooter({ onOpenContact }: SiteFooterProps) {
  return (
    <footer>
      <div className="row footer__row">
        <a href="#top" className="footer__anchor">
          <img
            src="/brand/logo.jpg"
            alt="Back to top"
            width={70}
            height={70}
            className="footer__logo--img"
          />
          <span className="footer__logo--popper">
            Top <i className="fas fa-arrow-up" aria-hidden />
          </span>
        </a>
        <div className="footer__social--list">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="footer__social--link"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="footer__social--link"
          >
            GitHub
          </a>
          <a
            href={siteConfig.cvPath}
            target="_blank"
            rel="noreferrer"
            className="footer__social--link"
          >
            CV
          </a>
          <button type="button" onClick={onOpenContact} className="footer__social--link">
            Contact
          </button>
          <a href="/projects/" className="footer__social--link">
            Case Studies
          </a>
          <a href="/archive/" className="footer__social--link">
            Archive
          </a>
        </div>
        <div className="footer__copyright">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </div>
      </div>
    </footer>
  );
}
