import type { MouseEvent } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "@/components/site/use-theme";
import { Icon } from "@/components/site/icon";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  function onClick(event: MouseEvent<HTMLButtonElement>) {
    const next = isDark ? "light" : "dark";
    if (
      !("startViewTransition" in document) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(next);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );
    const html = document.documentElement;
    html.style.setProperty("--theme-x", `${x}px`);
    html.style.setProperty("--theme-y", `${y}px`);
    html.style.setProperty("--theme-r", `${radius}px`);
    html.classList.add("theme-switching");

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });
    transition.finished.finally(() => html.classList.remove("theme-switching"));
  }

  return (
    <button
      type="button"
      className="nav__theme"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={onClick}
    >
      <Icon name="adjust" />
    </button>
  );
}
