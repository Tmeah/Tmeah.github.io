import { InnerPage } from "@/components/site/inner-page";

export function NotFoundPage() {
  return (
    <InnerPage>
      <div className="inner not-found wrap">
        <p className="note">404</p>
        <h1>
          Oops<span className="text--blue">.</span>
        </h1>
        <p>That page doesn&apos;t exist or has moved.</p>
        <a href="/" className="btn btn--primary">
          Back home <i className="fas fa-arrow-right" aria-hidden />
        </a>
      </div>
    </InnerPage>
  );
}
