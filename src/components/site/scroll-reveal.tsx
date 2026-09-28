import { useLayoutEffect } from "react";

const revealTargets = [
  ".section__head",
  ".projects__list > li",
  ".case-index__item",
  ".experience__row",
  ".cta__title",
  ".cta__row",
  ".archive__card",
  ".case-hero__facts",
  ".case-story__section",
  ".case-screens",
  ".case-next-wrap",
].join(", ");

const staggerMs = 90;

export function ScrollReveal() {
  useLayoutEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
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
