import Link from "next/link";
import { siteConfig } from "@/lib/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{siteConfig.name}</p>
          <p className="text-sm text-muted-foreground">{siteConfig.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            © {year} {siteConfig.name}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand"
          >
            GitHub
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-brand">
            Email
          </a>
          <Link href="/archive/" className="hover:text-brand">
            Archive
          </Link>
        </div>
      </div>
    </footer>
  );
}
