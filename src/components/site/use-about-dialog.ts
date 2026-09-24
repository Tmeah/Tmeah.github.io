import { useCallback, useEffect, useState } from "react";

export type AboutSection = "about" | "contact";

function sectionFromHash(hash: string): AboutSection | null {
  switch (hash) {
    case "#about":
      return "about";
    case "#contact":
      return "contact";
    default:
      return null;
  }
}

export function useAboutDialog() {
  const [section, setSection] = useState<AboutSection | null>(null);

  useEffect(() => {
    function syncFromHash() {
      const fromHash = sectionFromHash(window.location.hash);
      if (fromHash) {
        setSection(fromHash);
      }
    }
    const frame = requestAnimationFrame(syncFromHash);
    window.addEventListener("hashchange", syncFromHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  const openAbout = useCallback(() => setSection("about"), []);
  const openContact = useCallback(() => setSection("contact"), []);
  const close = useCallback(() => {
    setSection(null);
    if (sectionFromHash(window.location.hash)) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  return { section, openAbout, openContact, close };
}
