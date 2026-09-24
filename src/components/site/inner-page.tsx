import type { ReactNode } from "react";
import { AboutDialog } from "@/components/site/about-dialog";
import { ShapeField } from "@/components/site/shape-field";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import { useAboutDialog } from "@/components/site/use-about-dialog";
import type { ProjectTheme } from "@/content/types";

type InnerPageProps = {
  children: ReactNode;
  theme?: ProjectTheme;
};

export function InnerPage({ children, theme }: InnerPageProps) {
  const { section, openAbout, openContact, close } = useAboutDialog();

  return (
    <div className={theme ? `page page--themed page--${theme}` : "page"} id="top">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ShapeField />
      <div className="page__content">
        <SiteNav onOpenAbout={openAbout} onOpenContact={openContact} />
        <main id="main-content">{children}</main>
        <SiteFooter onOpenContact={openContact} />
      </div>
      <AboutDialog section={section} onClose={close} />
    </div>
  );
}
