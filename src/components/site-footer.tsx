import Link from "next/link";

const INFO = [
  { href: "/portfolio", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const ABOUT = [
  { href: "/about/approach", label: "Approach" },
  { href: "/about/team", label: "Team" },
  { href: "/about/impact", label: "Impact" },
  { href: "/about/history", label: "History" },
];

export default function SiteFooter() {
  return (
    <footer className="ftr">
      <div className="container ftr__inner">
        <div className="ftr__cols">
          <div className="ftr__brand">
            <WordmarkFooter />
            <p className="ftr__tag">Secure. Connect. Control.</p>
          </div>

          <nav className="ftr__col" aria-labelledby="ftr-info">
            <h4 id="ftr-info" className="ftr__label">
              Information
            </h4>
            <ul>
              {INFO.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="ftr__col" aria-labelledby="ftr-about">
            <h4 id="ftr-about" className="ftr__label">
              About Us
            </h4>
            <ul>
              {ABOUT.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="ftr__col" aria-labelledby="ftr-connect">
            <h4 id="ftr-connect" className="ftr__label">
              Connect With Us
            </h4>
            <ul>
              <li>
                <a href="mailto:info@pilocks.ca">info@pilocks.ca</a>
              </li>
              <li>
                <a href="tel:7787300914">778-730-0914</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="ftr__base">
          <div className="ftr__addr">
            <h4>Pi Locks Integration INC.</h4>
            <p>
              #1 - 1322 Ketch Court, Coquitlam, BC V3K 6W1
            </p>
          </div>
          <div className="ftr__legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms &amp; Conditions</Link>
            <span>© {new Date().getFullYear()} Pi Locks Integration INC.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WordmarkFooter() {
  return (
    <svg
      viewBox="0 0 250 29"
      role="img"
      aria-label="Pi Locks"
      fill="currentColor"
      className="ftr__logo"
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
        Pi Locks Integration INC.
      </text>
    </svg>
  );
}
