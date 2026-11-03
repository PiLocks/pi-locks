"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ABOUT_LINKS = [
  { href: "/about/approach", label: "Approach" },
  { href: "/about/team", label: "Team" },
  { href: "/about/impact", label: "Impact" },
  { href: "/about/history", label: "History" },
];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 250 29"
      role="img"
      aria-label="Pi Locks"
      fill="currentColor"
    >
      <text
        x="0"
        y="22"
        fontFamily="inherit"
        fontSize="25"
        fontWeight="500"
        letterSpacing="-0.5"
        textLength="250"
        lengthAdjust="spacingAndGlyphs"
      >
        Pi Lock Integration INC.
      </text>
    </svg>
  );
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className={`hdr${scrolled || open ? " is-solid" : ""}`}>
        <div className="container hdr__inner">
          <button
            className="burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
            <span />
            <span />
          </button>

          <nav className="hdr__nav" aria-label="Primary">
            <ul>
              <li>
                <Link
                  href="/portfolio"
                  className={isActive("/portfolio") ? "is-active" : ""}
                >
                  Services
                </Link>
              </li>
              <li className="hdr__has-sub">
                <Link
                  href="/about"
                  className={isActive("/about") ? "is-active" : ""}
                >
                  About
                </Link>
                <div className="hdr__sub">
                  <ul>
                    {ABOUT_LINKS.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className={pathname === l.href ? "is-active" : ""}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={isActive("/contact") ? "is-active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <Link href="/" className="hdr__logo" aria-label="Pi Locks — home">
            <Wordmark className="hdr__logo-light" />
          </Link>
        </div>
      </header>

      {/* Mobile / tablet overlay menu */}
      <div className={`drawer${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="container drawer__inner">
          <nav className="drawer__nav" aria-label="Mobile">
            <ul>
              <li>
                <Link href="/portfolio" onClick={close}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={close}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={close}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="drawer__sub" aria-label="About sub-pages">
            <ul>
              {ABOUT_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="drawer__meta" aria-label="Secondary">
            <ul>
              <li>
                <a href="mailto:info@pilocks.ca" onClick={close}>
                  Customer Care
                </a>
              </li>
              <li>
                <a href="tel:+17787300914" onClick={close}>
                  Service Requests
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
