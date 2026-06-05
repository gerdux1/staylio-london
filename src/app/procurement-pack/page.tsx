import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Procurement pack — Staylio",
  description:
    "Single-document summary of Staylio Limited's operational, legal, and insurance position for B2B procurement teams. Suitable for screenshot or browser-print to PDF.",
};

const COMPANY = {
  legalName: "Staylio Limited",
  number: "17012831",
  registeredOffice: "85 Frampton Street, London NW8 8NQ",
  registeredCountry: "England and Wales",
  contact: "hello@staylio.london",
  bookings: "Ali Hassan, Direct Bookings Lead — WhatsApp +44 7375 621453",
};

const INSURANCE = [
  {
    type: "Employers Liability + Public Liability (package)",
    insurer: "Allianz Insurance Plc",
    policy: "Allianz 296603665 · Premier Line 894688615",
    expires: "18 May 2027",
  },
  {
    type: "Professional Indemnity",
    insurer: "Aqueous Management Limited",
    policy: "Premier Line 894553533",
    expires: "18 May 2027",
  },
];

const COMPLIANCE = [
  { label: "Companies House registration", value: "Active — 17012831 (England + Wales)" },
  { label: "ICO Data Protection registration", value: "In progress — Tier 1 (Q3 2026)" },
  { label: "Modern Slavery statement", value: "Published (voluntary, below £36m threshold) — /modern-slavery" },
  { label: "Accessibility statement", value: "WCAG 2.2 AA — /accessibility" },
  { label: "Operational SLAs", value: "Published and reviewed quarterly — /standard" },
];

const INVENTORY = [
  { area: "Regent's Park & Marylebone", apartments: "Around 12 apartments" },
  { area: "Old Street & Shoreditch", apartments: "Around 14 apartments" },
  { area: "Kensington & Hammersmith", apartments: "Around 6 apartments" },
  { area: "Fitzrovia & Mayfair", apartments: "Selected inventory" },
  { area: "Barbican & Farringdon", apartments: "Selected inventory" },
  { area: "Borough & Pimlico", apartments: "Around 4 apartments" },
  { area: "Little Venice & Maida Vale", apartments: "Around 5 apartments" },
];

const VERTICALS = [
  {
    name: "Insurance ALE (Additional Living Expenses)",
    url: "/insurance",
    forBuyers:
      "Loss adjusters, insurers, ALE specialists, claims handlers, self-insured corporates. Displaced policyholders during home-claim repair windows.",
  },
  {
    name: "Medical stays",
    url: "/medical-stays",
    forBuyers:
      "Hospitals, private medical insurance, charities, international patient services. Patient families, post-operative recovery, medical tourism aftercare.",
  },
  {
    name: "Arbitration and long-trial accommodation",
    url: "/arbitration",
    forBuyers:
      "Magic Circle and US London disputes firms, arbitral institutions, forensic and expert consultancies. Multi-week hearings at the Rolls Building, IDRC, RCJ, LCIA, ICC.",
  },
  {
    name: "Corporate stays",
    url: "/corporate",
    forBuyers:
      "HR, mobility managers, procurement leads. Long-stay rates, monthly billing on PO terms, single point of contact.",
  },
];

const BILLING = [
  "Monthly invoicing on agreed PO terms (Net 30 default; Net 7 / 14 / 60 on request)",
  "Direct billing to insurer / firm / institution — never to the individual guest unless explicitly requested",
  "VAT split per HMRC Notice 709/3 (long-stay accommodation): standard-rated nights 1-28; reduced-rated room portion from night 29",
  "Multi-apartment block bookings invoiced on a single statement",
  "Payment by BACS, Stripe corporate card, or wire (GBP)",
  "Receipts and statements compatible with most expense and matter-management systems",
];

const SLA_HIGHLIGHTS = [
  "Direct booking enquiries answered in under 15 minutes during UK hours (median: 6 minutes)",
  "Booking quotes confirmed within one business day — the number quoted is the number invoiced",
  "Apartments ready at 16:00; checkout by 11:00; early-in / late-out on request",
  "Self check-in instructions sent 24 hours before arrival (smart-lock on most apartments)",
  "Wi-Fi tested in every apartment within 7 days of every arrival (100 Mbps minimum target)",
  "Critical maintenance (heating / hot water / security) responded within 2 hours",
  "Non-critical maintenance within 24 hours",
  "End-to-end clean before every new guest arrival, checked against a written list",
  "Mid-stay clean on long stays (fortnightly default; more on request)",
  "Direct rates always at least 10% lower than the same apartment listed on Booking.com or Airbnb",
  "All bills included in the nightly rate (electricity, water, heating, Wi-Fi, council tax)",
];

const VERIFICATION_LINKS = [
  {
    label: "Companies House — Staylio Limited (17012831)",
    url: "https://find-and-update.company-information.service.gov.uk/company/17012831",
  },
  {
    label: "Operational SLAs (/standard)",
    url: "https://staylio.london/standard",
  },
  {
    label: "Accessibility statement",
    url: "https://staylio.london/accessibility",
  },
  {
    label: "Modern slavery statement",
    url: "https://staylio.london/modern-slavery",
  },
  {
    label: "Decision guide for booking partners",
    url: "https://staylio.london/decision-guide",
  },
  {
    label: "Cost calculator (Staylio vs hotel vs OTA)",
    url: "https://staylio.london/cost-calculator",
  },
];

export default function ProcurementPackPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16 print:py-6">
      {/* Print instructions — visible on screen, hidden when printed */}
      <div className="mb-10 rounded-lg border border-stone-200 bg-stone-50 p-5 text-sm text-stone-700 print:hidden">
        <p className="font-medium text-stone-900">For procurement teams</p>
        <p className="mt-2 leading-relaxed">
          Single-page summary of Staylio Limited&rsquo;s legal, insurance, operational, and
          billing position for B2B procurement files. Print to PDF (Cmd+P / Ctrl+P → "Save as
          PDF") if you need a document attachment for a supplier file. Live verification links at
          the bottom of the page.
        </p>
      </div>

      <header className="border-b border-stone-300 pb-6">
        <p className="text-xs uppercase tracking-widest text-stone-500">Procurement pack · v1</p>
        <h1 className="mt-2 font-serif text-4xl text-stone-900">Staylio Limited — supplier summary</h1>
        <p className="mt-2 text-sm text-stone-600">Issued 5 June 2026 · reviewed quarterly</p>
      </header>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-stone-900">Company</h2>
        <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-stone-800">
          <div><dt className="text-stone-500">Legal name</dt><dd className="font-medium">{COMPANY.legalName}</dd></div>
          <div><dt className="text-stone-500">Companies House number</dt><dd className="font-medium">{COMPANY.number}</dd></div>
          <div><dt className="text-stone-500">Country of registration</dt><dd className="font-medium">{COMPANY.registeredCountry}</dd></div>
          <div><dt className="text-stone-500">Registered office</dt><dd className="font-medium">{COMPANY.registeredOffice}</dd></div>
          <div><dt className="text-stone-500">B2B contact</dt><dd className="font-medium">{COMPANY.contact}</dd></div>
          <div><dt className="text-stone-500">Bookings + escalation</dt><dd className="font-medium">{COMPANY.bookings}</dd></div>
        </dl>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-stone-900">Insurance position</h2>
        <table className="mt-4 w-full text-left text-sm text-stone-800 border-collapse">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
            <tr>
              <th className="py-2 pr-4">Cover</th>
              <th className="py-2 pr-4">Insurer</th>
              <th className="py-2 pr-4">Policy ref</th>
              <th className="py-2">Expires</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {INSURANCE.map((ins) => (
              <tr key={ins.type}>
                <td className="py-3 pr-4 font-medium">{ins.type}</td>
                <td className="py-3 pr-4">{ins.insurer}</td>
                <td className="py-3 pr-4 text-xs text-stone-600">{ins.policy}</td>
                <td className="py-3">{ins.expires}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-xs text-stone-500">
          Certificates and broker contact (Megan Aitken @ Premier Line) available on request via{" "}
          <a className="underline underline-offset-4" href="mailto:hello@staylio.london">hello@staylio.london</a>.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-stone-900">Compliance &amp; governance</h2>
        <dl className="mt-4 space-y-3 text-sm text-stone-800">
          {COMPLIANCE.map((c) => (
            <div key={c.label} className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <dt className="text-stone-500">{c.label}</dt>
              <dd className="sm:col-span-2 font-medium">{c.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-stone-900">Operating SLA highlights</h2>
        <ul className="mt-4 grid gap-2 text-sm text-stone-800 list-disc pl-5">
          {SLA_HIGHLIGHTS.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <p className="mt-3 text-xs text-stone-500">
          Full SLA document at <Link href="/standard" className="underline underline-offset-4">/standard</Link>.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-stone-900">Billing &amp; VAT</h2>
        <ul className="mt-4 space-y-2 text-sm text-stone-800 list-disc pl-5">
          {BILLING.map((b) => <li key={b}>{b}</li>)}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-stone-900">Inventory geography</h2>
        <p className="mt-3 text-sm text-stone-700">
          Around 50 fully equipped serviced apartments across 7 Central London neighbourhoods.
          1-bed to 4-bed inventory; some apartments sleep up to 10. Step-free / lift / ground-floor
          access confirmable in writing per apartment.
        </p>
        <table className="mt-4 w-full text-left text-sm text-stone-800 border-collapse">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
            <tr><th className="py-2 pr-4">Neighbourhood</th><th className="py-2">Scale</th></tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {INVENTORY.map((i) => (
              <tr key={i.area}>
                <td className="py-2 pr-4 font-medium">{i.area}</td>
                <td className="py-2">{i.apartments}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-xs text-stone-500">
          Live inventory JSON for AI agents and procurement systems at <a className="underline underline-offset-4" href="/api/apartments">/api/apartments</a>.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-stone-900">B2B verticals served</h2>
        <ul className="mt-4 space-y-4 text-sm text-stone-800">
          {VERTICALS.map((v) => (
            <li key={v.url}>
              <Link href={v.url} className="font-medium text-stone-900 underline underline-offset-4">
                {v.name}
              </Link>
              <p className="mt-1 text-stone-700">{v.forBuyers}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-stone-900">Pricing &amp; quote tools</h2>
        <p className="mt-3 text-sm text-stone-700">
          Indicative pricing for any stay length, neighbourhood, and party size via the public{" "}
          <Link href="/cost-calculator" className="underline underline-offset-4">cost calculator</Link>.
          For an API-driven quote (agentic LLM, procurement system, or finance team), POST to{" "}
          <a className="underline underline-offset-4" href="/api/quote">/api/quote</a>.
          Confirmed pricing depends on dates and is held in writing for 7 days from confirmation.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-stone-900">Public verification links</h2>
        <ul className="mt-4 space-y-2 text-sm text-stone-800 list-disc pl-5">
          {VERIFICATION_LINKS.map((l) => (
            <li key={l.url}>
              <a href={l.url} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 border-t border-stone-300 pt-6">
        <h2 className="font-serif text-2xl text-stone-900">Master Services Agreement</h2>
        <p className="mt-3 text-sm text-stone-700">
          For booking partners running multiple placements per quarter (insurers, hospitals, law
          firms, charities, embassies, universities, production companies), we offer a Master
          Services Agreement with:
        </p>
        <ul className="mt-3 space-y-2 text-sm text-stone-800 list-disc pl-5">
          <li>Held quarterly rate, reviewed every 3 months</li>
          <li>Pre-blocked inventory for known windows</li>
          <li>Volume-rebate where contractual minimums apply</li>
          <li>Named procurement contact (Kris Kamas, Director — for MSA negotiation) and a single placement contact (Ali Hassan)</li>
          <li>NDA terms agreed on first request</li>
        </ul>
        <p className="mt-4 text-sm text-stone-700">
          To open an MSA conversation, email{" "}
          <a className="underline underline-offset-4" href="mailto:hello@staylio.london?subject=Staylio MSA enquiry">
            hello@staylio.london
          </a>{" "}
          with the expected number of placements per quarter, primary geography, and typical stay
          length. We aim to send a draft MSA within 5 working days.
        </p>
      </section>

      <footer className="mt-12 border-t border-stone-300 pt-6 text-xs text-stone-500">
        <p>
          Document v1 · Issued 5 June 2026 · Reviewed quarterly · Staylio Limited (Companies House
          17012831), 85 Frampton Street, London NW8 8NQ.
        </p>
        <p className="mt-2">
          Live version: <a className="underline underline-offset-4" href="https://staylio.london/procurement-pack">https://staylio.london/procurement-pack</a>
        </p>
      </footer>
    </article>
  );
}
