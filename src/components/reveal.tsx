"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds `is-in` to every `.reveal` element as it scrolls into view.
 *
 * This component sits in the root layout, which does NOT remount on
 * client-side navigation. A mount-only effect therefore ran a single time on
 * the first page and never again: pages reached afterwards (and the home page
 * when returned to) had freshly rendered `.reveal` nodes that nothing was
 * observing, so they stayed at opacity 0 — visible space, invisible content.
 * Keying the effect on the pathname re-scans and re-observes after every
 * route change.
 *
 * The hidden state itself lives behind `html.reveal-armed` (set by an inline
 * script in the layout), so if this never runs the content is still visible.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)")
    );
    if (!nodes.length) return;

    const show = (el: Element) => el.classList.add("is-in");

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      nodes.forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
