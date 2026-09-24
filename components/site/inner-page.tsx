import type { ReactNode } from "react";
import { ShapeField } from "@/components/site/shape-field";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";

type InnerPageProps = {
  children: ReactNode;
};

export function InnerPage({ children }: InnerPageProps) {
  return (
    <div className="page" id="top">
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
