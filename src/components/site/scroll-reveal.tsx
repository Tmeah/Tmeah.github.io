import { useLayoutEffect } from "react";
import { revealTargets } from "@/components/site/reveal-targets";

const staggerMs = 90;

export function ScrollReveal() {
  useLayoutEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document.documentElement.classList.add("no-reveal");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, index) => {
            const target = entry.target as HTMLElement;
            target.style.setProperty("--reveal-delay", `${index * staggerMs}ms`);
            target.classList.add("is-revealed");
            observer.unobserve(target);
          });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll<HTMLElement>(revealTargets).forEach((target) => {
      if (!target.classList.contains("is-revealed")) {
        target.classList.add("reveal");
        observer.observe(target);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
