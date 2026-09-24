import { useTheme } from "@/components/site/use-theme";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="nav__theme"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <i className="fas fa-adjust" aria-hidden />
    </button>
  );
}
