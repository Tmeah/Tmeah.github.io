import { siteConfig } from "@/content/site";

type SiteFooterProps = {
  onOpenContact: () => void;
};

export function SiteFooter({ onOpenContact }: SiteFooterProps) {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <img src="/brand/logo.jpg" alt="" width={56} height={56} />
          <div>
            <p className="footer__name">{siteConfig.name}</p>
            <p className="footer__role">
              {siteConfig.title} · {siteConfig.location}
            </p>
            <p className="note footer__made">designed and built in Wales</p>
          </div>
        </div>
        <div className="footer__cols">
          <div>
            <p className="label">Work</p>
            <ul>
              <li>
                <a href="/#projects" className="footer__link">
                  Selected work
                </a>
              </li>
              <li>
                <a href="/projects/" className="footer__link">
                  Case studies
                </a>
              </li>
              <li>
                <a href="/archive/" className="footer__link">
                  Archive
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="label">Connect</p>
            <ul>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.cvPath}
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link"
                >
                  CV
                </a>
              </li>
              <li>
                <button type="button" onClick={onOpenContact} className="footer__link">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap footer__bottom">
        <span>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </span>
        <a href="#top">
          Back to top <i className="fas fa-arrow-up" aria-hidden />
        </a>
      </div>
    </footer>
  );
}
