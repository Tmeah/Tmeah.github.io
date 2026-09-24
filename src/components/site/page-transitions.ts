const phoneTransitionName = "project-phone";

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

function visiblePhone(slug: string | null) {
  if (!slug) {
    return null;
  }
  const phone = document.querySelector<HTMLElement>(`.device--${slug}`);
  if (!phone) {
    return null;
  }
  const rect = phone.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight ? phone : null;
}

function namePhoneFor(slug: string | null, transition: ViewTransition) {
  const phone = visiblePhone(slug);
  if (!phone) {
    return;
  }
  phone.style.viewTransitionName = phoneTransitionName;
  transition.finished.finally(() => {
    phone.style.viewTransitionName = "";
  });
}

// Pairs the phone on a project card with the phone in that project's case study
// header, so it glides between pages instead of cross-fading.
export function setupPageTransitions() {
  window.addEventListener("pageswap", (event) => {
    if (!event.viewTransition) {
      return;
    }
    const slug = projectSlug(event.activation?.entry.url) ?? projectSlug(location.href);
    namePhoneFor(slug, event.viewTransition);
  });

  window.addEventListener("pagereveal", (event) => {
    if (!event.viewTransition) {
      return;
    }
    const from = (window as WindowWithNavigation).navigation?.activation?.from;
    const slug = projectSlug(location.href) ?? projectSlug(from?.url);
    namePhoneFor(slug, event.viewTransition);
  });
}
