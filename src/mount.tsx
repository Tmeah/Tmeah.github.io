import { StrictMode, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { createRoot, hydrateRoot } from "react-dom/client";
import { setupPageTransitions } from "@/components/site/page-transitions";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import "@/styles/site.css";
import "@/styles/showcase.css";
import "@/styles/case-study.css";
import "@/styles/reels.css";
import "@/styles/reel-viralz.css";
import "@/styles/reel-snappd.css";
import "@/styles/reel-gogrow.css";
import "@/styles/motion.css";

export function Shell({ page }: { page: ReactNode }) {
  return (
    <StrictMode>
      {page}
      <ScrollReveal />
    </StrictMode>
  );
}

export function mount(page: ReactNode) {
  if (import.meta.env.SSR) {
    return;
  }
  const root = document.getElementById("root");
  if (!root) {
    throw new Error("Missing #root element");
  }
  setupPageTransitions();
  if (root.hasChildNodes()) {
    hydrateRoot(root, <Shell page={page} />);
  } else {
    // Render synchronously so the page is on screen before the browser captures
    // it for the incoming page transition.
    flushSync(() => {
      createRoot(root).render(<Shell page={page} />);
    });
  }
  document.documentElement.classList.add("hydrated");
}
