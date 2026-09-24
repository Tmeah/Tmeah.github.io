import type { ReactNode } from "react";
import { ShapeField } from "@/components/site/shape-field";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import type { ProjectTheme } from "@/content/types";

type InnerPageProps = {
  children: ReactNode;
  theme?: ProjectTheme;
};

export function InnerPage({ children, theme }: InnerPageProps) {
  return (
    <div className={theme ? `page page--themed page--${theme}` : "page"} id="top">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ShapeField />
      <div className="page__content">
        <SiteNav />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
