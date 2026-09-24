import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const storageKey = "theme";
const listeners = new Set<() => void>();
const systemDark = () => window.matchMedia("(prefers-color-scheme: dark)");

function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(storageKey);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function currentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const media = systemDark();
  const onSystemChange = () => {
    if (readStoredTheme() === null) {
      applyTheme(media.matches ? "dark" : "light");
    }
  };
  media.addEventListener("change", onSystemChange);
  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", onSystemChange);
  };
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, currentTheme, () => "light" as Theme);

  const setTheme = useCallback((next: Theme) => {
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // Private browsing can block storage; the class still switches for this visit.
    }
    applyTheme(next);
  }, []);

  return { theme, setTheme };
}
