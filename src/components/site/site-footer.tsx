import { siteConfig } from "@/content/site";

type SiteFooterProps = {
  onOpenPanel?: () => void;
};

export function SiteFooter({ onOpenPanel }: SiteFooterProps) {
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
            className="footer__social--link link__hover--effect link__hover--effect--white"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="footer__social--link link__hover--effect link__hover--effect--white"
          >
            GitHub
          </a>
          <a
            href={siteConfig.cvPath}
            target="_blank"
            rel="noreferrer"
            className="footer__social--link link__hover--effect link__hover--effect--white"
          >
            CV
          </a>
          {onOpenPanel ? (
            <button
              type="button"
              onClick={onOpenPanel}
              className="footer__social--link link__hover--effect link__hover--effect--white"
            >
              Contact
            </button>
          ) : (
            <a
              href="/#contact"
              className="footer__social--link link__hover--effect link__hover--effect--white"
            >
              Contact
            </a>
          )}
          <a
            href="/projects/"
            className="footer__social--link link__hover--effect link__hover--effect--white"
          >
            Case Studies
          </a>
          <a
            href="/archive/"
            className="footer__social--link link__hover--effect link__hover--effect--white"
          >
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
