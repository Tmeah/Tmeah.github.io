import { InnerPage } from "@/components/site/inner-page";

export function NotFoundPage() {
  return (
    <InnerPage>
      <div className="inner not-found">
        <h1>
          Oops<span className="text--blue">.</span>
        </h1>
        <p>That page doesn&apos;t exist or has moved.</p>
        <a href="/" className="pill">
          Back home
        </a>
      </div>
    </InnerPage>
  );
}
