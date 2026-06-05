import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Staylio for business — overview of B2B verticals",
  description:
    "Overview of Staylio's B2B verticals: insurance ALE, medical stays, arbitration accommodation, diplomatic stays, and corporate relocation. Single point of contact, written SLAs, multi-currency invoicing, monthly billing on PO terms.",
};

const VERTICALS = [
  {
    href: "/insurance",
    name: "Insurance ALE",
    pitch:
      "Additional Living Expenses placements for displaced policyholders during home-claim repair windows. Direct insurer billing, written SLAs, single point of contact.",
    buyers: "Loss adjusters · insurers · ALE specialists · claims handlers · self-insured corporates",
    stay: "4-12 weeks typical",
    rate: "£180-300/night band",
    hasPage: true,
  },
  {
    href: "/medical-stays",
    name: "Medical stays",
    pitch:
      "Apartments near London's major teaching hospitals and private hospitals for patient families during inpatient treatment, post-operative recovery, and medical-tourism aftercare. Every Staylio neighbourhood maps to a major hospital cluster.",
    buyers:
      "Private hospital concierges · NHS Trust accommodation officers · private medical insurance · charity placement officers · international patient services",
    stay: "1-12 weeks typical",
    rate: "£200-400+/night band",
    hasPage: true,
  },
  {
    href: "/arbitration",
    name: "Arbitration & long-trial accommodation",
    pitch:
      "Walking-distance apartments for international arbitration counsel, expert witnesses, and parties during multi-week hearings at the Rolls Building, IDRC, RCJ, LCIA, and ICC London venues. Disbursement-billable to the client matter.",
    buyers:
      "Magic Circle Practice Managers · US London disputes · arbitral institutions · forensic and expert consultancies · public inquiry teams",
    stay: "2-12 weeks (6 months for major merits trials)",
    rate: "£250-400+/night band",
    hasPage: true,
  },
  {
    href: "/diplomatic",
    name: "Diplomatic stays",
    pitch:
      "Discreet apartments for incoming diplomats, defence attachés, trade commissioners, and visiting delegations during the onboarding gap before permanent residence. Walking distance to the Kensington / Mayfair / Belgravia embassy belt.",
    buyers:
      "Embassy Administrative Counsellors · Heads of Chancery · Defence Attaché offices · Trade Commission procurement · foreign ministry mobility",
    stay: "1-12 weeks typical; delegations 1-3 weeks",
    rate: "£200-300+/night band",
    hasPage: true,
  },
  {
    href: null,
    name: "Corporate relocation",
    pitch:
      "Long-stay rates, monthly billing on PO terms, single point of contact for HR teams, mobility managers, and procurement leads. Honest framing: Staylio works best where quality + location matter; if pure volume / lowest-rate is the brief, an aparthotel chain may suit better.",
    buyers:
      "Global mobility managers · HR · procurement · Relocation Management Companies (RMCs) on agreed-panel basis",
    stay: "4-12 weeks (mean ~83 days)",
    rate: "£150-250/night band",
    hasPage: false,
  },
] as const;

const SHARED_OPERATING_MODEL = [
  "Direct billing to the institutional booker, never to the individual guest unless requested",
  "Monthly invoicing on agreed PO terms (Net 30 default; Net 7/14/60 on request)",
  "VAT split per HMRC Notice 709/3 on long stays from night 29",
  "Held quarterly rate available under MSA, reviewed every 3 months",
  "Pre-blocked inventory for known booking windows",
  "Single point of contact: Kris Kamas (Director, MSA negotiation) + Ali Hassan (placement logistics)",
  "NDA on first request, agreed within 24 hours",
  "Written SLAs published at /standard, reviewed quarterly",
];

export default function CorporatePage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-stone-500">Staylio for business</p>
      <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900">
        Five B2B routes, one operating model.
      </h1>
      <p className="mt-6 text-lg text-stone-700 leading-relaxed max-w-2xl">
        Staylio works with five distinct kinds of institutional buyer. Each has its own
        procurement-focused landing page, but the operating model underneath is the same: direct
        billing, written SLAs, single point of contact, monthly invoicing on PO terms. Pick the
        page that matches your buyer profile, or contact us if your need spans multiple.
      </p>

      <div className="mt-12 flex flex-wrap gap-3">
        <a
          href="mailto:hello@staylio.london?subject=Staylio B2B enquiry"
          className="rounded-full bg-stone-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
        >
          Email B2B team
        </a>
        <Link
          href="/procurement-pack"
          className="rounded-full border border-stone-300 bg-white px-7 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-900"
        >
          Procurement pack (single-page summary)
        </Link>
        <Link
          href="/standard"
          className="rounded-full border border-stone-300 bg-white px-7 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-900"
        >
          Operational SLAs
        </Link>
      </div>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">Pick the vertical that matches your buyer</h2>
      <div className="mt-10 space-y-6">
        {VERTICALS.map((v) =>
          v.hasPage && v.href ? (
            <Link
              key={v.name}
              href={v.href}
              className="group block rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 transition hover:border-stone-400 hover:shadow-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-2xl text-stone-900 group-hover:underline underline-offset-4">
                  {v.name}
                </h3>
                <p className="text-sm text-stone-500 group-hover:text-stone-900">Open the page →</p>
              </div>
              <p className="mt-3 text-stone-700 leading-relaxed">{v.pitch}</p>
              <dl className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-3 text-sm">
                <div>
                  <dt className="text-stone-500">Buyer personas</dt>
                  <dd className="mt-1 text-stone-800">{v.buyers}</dd>
                </div>
                <div>
                  <dt className="text-stone-500">Stay length</dt>
                  <dd className="mt-1 text-stone-800">{v.stay}</dd>
                </div>
                <div>
                  <dt className="text-stone-500">Rate band</dt>
                  <dd className="mt-1 text-stone-800">{v.rate}</dd>
                </div>
              </dl>
            </Link>
          ) : (
            <div
              key={v.name}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-2xl text-stone-900">{v.name}</h3>
                <p className="text-xs text-stone-500">No dedicated landing page yet — see below</p>
              </div>
              <p className="mt-3 text-stone-700 leading-relaxed">{v.pitch}</p>
              <dl className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-3 text-sm">
                <div>
                  <dt className="text-stone-500">Buyer personas</dt>
                  <dd className="mt-1 text-stone-800">{v.buyers}</dd>
                </div>
                <div>
                  <dt className="text-stone-500">Stay length</dt>
                  <dd className="mt-1 text-stone-800">{v.stay}</dd>
                </div>
                <div>
                  <dt className="text-stone-500">Rate band</dt>
                  <dd className="mt-1 text-stone-800">{v.rate}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm text-stone-700">
                For HR / mobility / RMC procurement enquiries, email{" "}
                <a className="underline underline-offset-4 hover:text-stone-900" href="mailto:hello@staylio.london?subject=Corporate relocation enquiry">
                  hello@staylio.london
                </a>{" "}
                with the expected volume of placements per quarter, primary neighbourhoods, and
                typical stay length.
              </p>
            </div>
          )
        )}
      </div>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">Shared operating model</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Whichever vertical applies, the operating shape underneath is the same:
      </p>
      <ul className="mt-6 space-y-3 text-stone-700 leading-relaxed list-disc pl-6">
        {SHARED_OPERATING_MODEL.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <div className="mt-20 rounded-2xl border border-stone-200 bg-stone-50 p-8">
        <p className="text-sm uppercase tracking-widest text-stone-500">Two contacts</p>
        <p className="mt-3 font-serif text-2xl text-stone-900">For MSA · for placement</p>
        <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed">
          <li>
            <strong className="font-medium text-stone-900">MSA, framework agreements, and pricing strategy</strong>{" "}
            — email Kris Kamas (Director) via{" "}
            <a className="underline underline-offset-4 hover:text-stone-900" href="mailto:hello@staylio.london?subject=Staylio MSA enquiry">
              hello@staylio.london
            </a>{" "}
            with &ldquo;MSA enquiry&rdquo; in the subject and the expected booking volume per
            quarter, geography, and typical stay length.
          </li>
          <li>
            <strong className="font-medium text-stone-900">Urgent placements + day-to-day logistics</strong>{" "}
            — WhatsApp Ali Hassan (Direct Bookings Lead) on{" "}
            <a className="underline underline-offset-4 hover:text-stone-900" href="https://wa.me/447375621453">
              +44 7375 621453
            </a>
            . Median response under 15 minutes during UK hours.
          </li>
        </ul>
      </div>

      <p className="mt-12 text-xs text-stone-500 leading-relaxed">
        Staylio Limited (Companies House 17012831), 85 Frampton Street, London NW8 8NQ. This page
        summarises the five B2B verticals Staylio currently serves. The dedicated landing pages
        carry the specific procurement detail, FAQ, and Schema.org markup for each.
      </p>
    </article>
  );
}
