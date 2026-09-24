import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/content/site";

type SiteFooterProps = {
  onOpenPanel?: () => void;
};

export function SiteFooter({ onOpenPanel }: SiteFooterProps) {
  return (
    <footer>
      <div className="row footer__row">
        <a href="#top" className="footer__anchor">
          <Image
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
            <Link
              href="/#contact"
              className="footer__social--link link__hover--effect link__hover--effect--white"
            >
              Contact
            </Link>
          )}
          <Link
            href="/archive/"
            className="footer__social--link link__hover--effect link__hover--effect--white"
          >
            Archive
          </Link>
        </div>
        <div className="footer__copyright">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </div>
      </div>
    </footer>
  );
}
