import { StrictMode, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
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

export function mount(page: ReactNode) {
  const root = document.getElementById("root");
  if (!root) {
    throw new Error("Missing #root element");
  }
  setupPageTransitions();
  // Render synchronously so the page is on screen before the browser captures
  // it for the incoming page transition.
  flushSync(() => {
    createRoot(root).render(
      <StrictMode>
        {page}
        <ScrollReveal />
      </StrictMode>,
    );
  });
}
