import Link from "next/link";
import { InnerPage } from "@/components/site/inner-page";

export default function NotFound() {
  return (
    <InnerPage>
      <div className="inner not-found">
        <h1>
          Oops<span className="text--blue">.</span>
        </h1>
        <p>That page doesn&apos;t exist or has moved.</p>
        <Link href="/" className="pill">
          Back home
        </Link>
      </div>
    </InnerPage>
  );
}
