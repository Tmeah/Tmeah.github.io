import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a href="#top" className="mb-6 inline-block">
        <Image
          src="/brand/logo-white.jpg"
          alt="Back to top"
          width={70}
          height={70}
          className="rounded-xl border-2 border-white"
        />
      </a>
      <div className="mb-6 flex flex-wrap justify-center">
        <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={siteConfig.cvPath} download>
          CV
        </a>
        <a href="#contact">Contact</a>
        <Link href="/archive/">Archive</Link>
      </div>
      <p>© {new Date().getFullYear()} {siteConfig.name}</p>
    </footer>
  );
}
