const reelTransitionName = "project-reel";

type WindowWithNavigation = Window & {
  navigation?: { activation?: NavigationActivation | null };
};

function projectSlug(url: string | null | undefined) {
  if (!url) {
    return null;
  }
  const match = new URL(url, location.href).pathname.match(/^\/projects\/([^/]+)\/?$/);
  return match ? match[1] : null;
}

function visibleReel(slug: string | null) {
  if (!slug) {
    return null;
  }
  const reel = document.querySelector<HTMLElement>(`[data-reel="${slug}"]`);
  if (!reel) {
    return null;
  }
  const rect = reel.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight ? reel : null;
}

function nameReelFor(slug: string | null, transition: ViewTransition) {
  const reel = visibleReel(slug);
  if (!reel) {
    return;
  }
  reel.style.viewTransitionName = reelTransitionName;
  transition.finished.finally(() => {
    reel.style.viewTransitionName = "";
  });
}

// Pairs the reel on a project card with the reel in that project's case study
// header, so it grows into place instead of cross-fading.
export function setupPageTransitions() {
  window.addEventListener("pageswap", (event) => {
    if (!event.viewTransition) {
      return;
    }
    const slug = projectSlug(event.activation?.entry.url) ?? projectSlug(location.href);
    nameReelFor(slug, event.viewTransition);
  });

  window.addEventListener("pagereveal", (event) => {
    if (!event.viewTransition) {
      return;
    }
    const from = (window as WindowWithNavigation).navigation?.activation?.from;
    const slug = projectSlug(location.href) ?? projectSlug(from?.url);
    nameReelFor(slug, event.viewTransition);
  });
}
