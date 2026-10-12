import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/button";
import { img } from "@/lib/media";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "PI Locks' delivery methodology — a design consultation, a line-by-line proposal, installation by our own trained crews, and commissioned, documented handover.",
};

const STEPS = [
  {
    key: "01",
    title: "Design Consultation",
    body: "We start with the requirement, not the product. Needs analysis, site constraints, applicable codes and standards, and what the system actually needs to do day to day.",
  },
  {
    key: "02",
    title: "Proposal Detail",
    body: "A line-by-line proposal with system specification, platform choices and clear budget ranges. You see exactly what is being installed and why.",
  },
  {
    key: "03",
    title: "Solution Build",
    body: "Installation by our own trained crews — not subcontracted unknowns. Structured cabling, devices, head-end and commissioning handled as one scope.",
  },
  {
    key: "04",
    title: "Project Handover",
    body: "Every system is programmed, tested, labelled and demonstrated against the agreed scope, then handed over with as-built documentation.",
  },
  {
    key: "05",
    title: "Ongoing Service & Support",
    body: "Responsive maintenance and support for the life of the system, from our Coquitlam base across Metro Vancouver and BC.",
  },
];

const ENGAGEMENTS = [
  { name: "New Builds", body: "Single-accountability delivery from ground-up construction." },
  { name: "Tenant Improvements", body: "Fit-out low voltage delivered around live trading hours." },
  { name: "Retrofits", body: "Modernisation of existing systems with minimal disruption to operations." },
  { name: "Maintenance & MAC", body: "Low-voltage maintenance, move-add-change and fault response on installed systems." },
];

export default function Approach() {
  return (
    <>
      <section className="phero">
        <div className="container">
          <h1 className="phero__title">Approach</h1>
          <p className="h-lede phero__lede">
            Independent, quality-first guidance on choosing and specifying the
            right building technology systems — before a single cable is pulled.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="media ratio-16x9">
          <img src={img.approach} alt="Rooftop terrace and skyline of a contemporary mixed-use development" loading="lazy" />
        </div>
      </section>

      <section className="container">
        <div className="prose prose--tight">
          <h2 className="prose__label">Engagement Types</h2>
          <div className="prose__body">
            <ul className="ticks ticks--lg">
              {ENGAGEMENTS.map((e) => (
                <li key={e.name} className="tick">
                  <strong>{e.name}</strong> — {e.body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container">
        <ol className="journey journey--stack">
          {STEPS.map((s) => (
            <li key={s.key} className="journey__step reveal">
              <span className="journey__key">{s.key}</span>
              <h2 className="journey__title">{s.title}</h2>
              <p className="journey__body">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container">
        <nav className="pagenav" aria-label="About sub-pages">
          <Link href="/about">About</Link>
          <Link href="/about/team">Team</Link>
          <Link href="/about/impact">Impact</Link>
          <Link href="/about/history">History</Link>
        </nav>
        <div className="pagefoot">
          <Button href="/contact">Start a Consultation</Button>
        </div>
      </section>
    </>
  );
}