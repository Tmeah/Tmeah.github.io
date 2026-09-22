import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-start justify-center px-4 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        The page you requested does not exist or has moved.
      </p>
      <ButtonLink href="/" className="mt-6">
        Back home
      </ButtonLink>
    </main>
  );
}
