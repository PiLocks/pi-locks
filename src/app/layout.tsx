import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import "./globals.css";
import "./site.css";

/*
  Gotham Narrow is licensed and cannot be redistributed. Roboto Condensed is
  the closest freely-available match for its narrow proportions and carries the
  full 100-900 range the layout needs (thin display numerals, light body).
*/
const gotham = Roboto_Condensed({
  variable: "--font-gotham",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

/*
  Absolute URLs (OG images, canonical) need a host. This is the intended
  production domain — switch to the Pages URL while the domain is pending so
  social previews do not point at a host that does not resolve yet.
*/
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mevikrampawar.github.io/pi-locks";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pi Locks | Secure. Connect. Control.",
    template: "%s | Pi Locks",
  },
  description:
    "Access control, structured cabling, IP surveillance and low-voltage systems for contractors, architects, property managers and strata across Metro Vancouver and British Columbia.",
  keywords: [
    "access control",
    "structured cabling",
    "IP surveillance",
    "CCTV",
    "low voltage",
    "Coquitlam",
    "Metro Vancouver",
    "British Columbia",
  ],
  openGraph: {
    type: "website",
    siteName: "Pi Locks",
    title: "Pi Locks | Secure. Connect. Control.",
    description:
      "Security, structured cabling and access control across Metro Vancouver and British Columbia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={gotham.variable} suppressHydrationWarning>
      <body>
        {/*
          Arm the reveal animation only once this script has run. It is first
          in the body, so it executes before any page content is painted and
          there is no flash. If JS is disabled or the script is blocked,
          `reveal-armed` is never set and every `.reveal` section stays
          visible — the reveal effect is enhancement, never a requirement.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('reveal-armed')",
          }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Reveal />
      </body>
    </html>
  );
}