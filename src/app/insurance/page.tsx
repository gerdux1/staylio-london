import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insurance ALE accommodation — Central London serviced apartments",
  description:
    "Insurance-grade temporary accommodation for displaced policyholders. Central London serviced apartments for 4-12+ week claim placements. Written SLAs, monthly insurer invoicing, single point of contact for claims handlers and loss adjusters.",
};

const FOR_INSURERS = [
  {
    headline: "Insurance-grade SLAs in writing",
    body:
      "Public Liability and Employers Liability via Allianz, Professional Indemnity via Aqueous Management. Operational SLAs published at /standard — response time, maintenance turnaround, cleaning cadence, billing reliability. Procurement-ready documentation on first request.",
  },
  {
    headline: "Direct insurer billing, not policyholder",
    body:
      "We invoice the insurer or appointed ALE specialist directly each month on agreed PO terms. The displaced family never sees a bill. VAT split per HMRC Notice 709/3 from night 29, shown separately on every invoice so your claims-finance team has a clean audit trail.",
  },
  {
    headline: "50 apartments across 7 Central London neighbourhoods",
    body:
      "Marylebone, Shoreditch, Kensington, Mayfair, Barbican, Pimlico, Maida Vale. Match the claimant to a neighbourhood close to their original address so children stay in school and routines hold. 1-bed to 4-bed inventory, sleeps up to 10.",
  },
  {
    headline: "All bills included, no policyholder surprises",
    body:
      "Electricity, water, heating, Wi-Fi, council tax, linens, towels, fitted kitchen — bundled into the nightly rate. No utility set-up. No surprise add-on costs. The first night's experience matches the last night's experience.",
  },
  {
    headline: "Self check-in, 24/7 guest support",
    body:
      "Smart-lock entry on most apartments (code by WhatsApp) so claimants can move in late evening or weekends. In-person key handover on the rest. WhatsApp support to Ali Hassan averages under 15 minutes during UK hours — useful when a displaced family is overwhelmed.",
  },
  {
    headline: "Single procurement contact",
    body:
      "One email, one WhatsApp, one invoice contact. No shifting CSMs, no after-hours escalation tree. For high-volume ALE specialists we can pre-block inventory and hold pricing for the next quarter.",
  },
];

const FAQ = [
  {
    q: "What stay length suits your operation?",
    a: "Most claim placements are 4-12 weeks. Long-stay pricing applies from night 7; further reductions at 14 and 28 nights. Long-stay VAT relief on the room portion kicks in from night 29 (HMRC Notice 709/3, applied automatically and shown on the invoice).",
  },
  {
    q: "Can you place a family with school-age children near a specific catchment?",
    a: "Yes. Send the original postcode and the school catchment and we'll prioritise apartments within walking or one-stop transit distance. Marylebone, Maida Vale, Kensington, and Pimlico have the highest concentration of family-suitable units.",
  },
  {
    q: "What about accessibility, pets, or specific medical needs?",
    a: "Mention on enquiry. Some apartments have step-free access, lift access, or ground-floor entry — confirmable in writing before placement. Pet placements considered case-by-case. Allergy-friendly setup (no carpets, fresh linens) available in specific units.",
  },
  {
    q: "How do you handle disputes or guest concerns?",
    a: "Direct line to Ali Hassan for the displaced family. Any safeguarding or maintenance concern is logged, photo-documented, and resolved on the published /standard SLAs. Insurer is copied on all formal communications. We do not negotiate compensation with policyholders — that stays with the claims handler.",
  },
  {
    q: "Do you cover the rest of the UK?",
    a: "Central London only at the moment. For nationwide ALE we recommend a national specialist alongside us; we focus exclusively on the London claim placements where the rate and quality calculus genuinely works.",
  },
  {
    q: "What's the procurement lead-time?",
    a: "Same-day for urgent placements where inventory exists. Otherwise 24-48 hours from enquiry to confirmed apartment, dates, and rate. We hold the rate in writing for 7 days from confirmation.",
  },
];

export default function InsurancePage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://staylio.london/insurance#service",
            name: "Insurance ALE (Additional Living Expenses) Accommodation",
            description:
              "Central London serviced apartments for insurer-funded temporary accommodation during home insurance claims. Direct insurer invoicing, written SLAs, geographic match-to-claimant.",
            serviceType: "Insurance temporary accommodation / Additional Living Expenses",
            provider: { "@id": "https://staylio.london#organization" },
            audience: {
              "@type": "BusinessAudience",
              name: "UK insurers, loss adjusters, ALE specialists, claims handlers, self-insured corporates",
            },
            offers: {
              "@type": "Offer",
              url: "https://staylio.london/insurance",
              availability: "https://schema.org/InStock",
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: { "@type": "GeoCoordinates", latitude: 51.5236, longitude: -0.1591 },
              geoRadius: "6000",
            },
            url: "https://staylio.london/insurance",
          },
        ]}
      />

      <p className="text-sm uppercase tracking-widest text-stone-500">Staylio for insurers</p>
      <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900">
        ALE accommodation, written down and signed off.
      </h1>
      <p className="mt-6 text-lg text-stone-700 leading-relaxed max-w-2xl">
        Central London serviced apartments for displaced policyholders during home-insurance
        claims. Direct insurer billing, written SLAs, single point of contact, 4 to 12+ week
        placements across seven neighbourhoods. Designed for claims handlers, loss adjusters, and
        ALE specialists who need the placement to be a non-issue.
      </p>

      <div className="mt-12 flex flex-wrap gap-3">
        <a
          href="mailto:hello@staylio.london?subject=Insurance ALE enquiry"
          className="rounded-full bg-stone-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
        >
          Send a placement enquiry
        </a>
        <Link
          href="/standard"
          className="rounded-full border border-stone-300 bg-white px-7 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-900"
        >
          Read our written SLAs
        </Link>
      </div>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">Why this works for insurers</h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {FOR_INSURERS.map((item) => (
          <div key={item.headline} className="border-l-2 border-stone-300 pl-5">
            <h3 className="font-serif text-xl text-stone-900">{item.headline}</h3>
            <p className="mt-2 text-stone-700 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">The numbers and the maths</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Hotel ALE placements work for 1-2 weeks. Past two weeks, a family with two children in a
        single room starts adding cost to the claim — meals out, no laundry, no kitchen, kids out
        of school routine. A serviced apartment matches the family back to a real home environment
        at a lower total realised cost. The maths is in our public{" "}
        <Link href="/cost-calculator" className="underline underline-offset-4 hover:text-stone-900">
          cost calculator
        </Link>
        ; the operational evidence is in{" "}
        <Link href="/standard" className="underline underline-offset-4 hover:text-stone-900">
          /standard
        </Link>
        .
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Long-stay VAT relief from night 29 (
        <Link href="/guides/long-stay-tax-london" className="underline underline-offset-4 hover:text-stone-900">
          HMRC Notice 709/3
        </Link>
        ) is applied automatically. For a typical 8-week placement at £190/night, the relief
        reduces the realised tax cost by approximately £760 vs a hotel at the same nightly band.
        Insurers covering longer claim periods see a proportionally larger saving.
      </p>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">Procurement FAQ</h2>
      <dl className="mt-8 space-y-7">
        {FAQ.map((f) => (
          <div key={f.q}>
            <dt className="font-medium text-stone-900">{f.q}</dt>
            <dd className="mt-2 text-stone-700 leading-relaxed">{f.a}</dd>
          </div>
        ))}
      </dl>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">Who we work with</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        UK insurers and ALE intermediaries placing displaced households in Central London —
        directly via claims handlers, via loss adjusters, or via specialist ALE booking
        intermediaries. Also: self-insured organisations (universities, NHS Trusts, foreign
        missions, banks) with their own temporary-accommodation budgets.
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        For a Master Services Agreement or a framework agreement covering multiple placements
        per quarter, email{" "}
        <a className="underline underline-offset-4 hover:text-stone-900" href="mailto:hello@staylio.london?subject=Staylio MSA enquiry">
          hello@staylio.london
        </a>
        . For an urgent same-day placement, WhatsApp Ali Hassan on{" "}
        <a className="underline underline-offset-4 hover:text-stone-900" href="https://wa.me/447375621453">
          +44 7375 621453
        </a>
        .
      </p>

      <div className="mt-20 rounded-2xl border border-stone-200 bg-stone-50 p-8">
        <p className="text-sm uppercase tracking-widest text-stone-500">Operating commitments</p>
        <p className="mt-3 font-serif text-2xl text-stone-900">What you can rely on</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-stone-700 leading-relaxed">
          <li>· Direct insurer invoicing, monthly</li>
          <li>· Written SLAs, signed off by Staylio Limited</li>
          <li>· Single procurement + escalation contact</li>
          <li>· VAT split shown on every invoice (HMRC 709/3)</li>
          <li>· 50 apartments, 7 Central London neighbourhoods</li>
          <li>· Allianz Public Liability + Employers Liability live</li>
          <li>· Aqueous Management PI policy live</li>
          <li>· All bills included; no surprise charges</li>
          <li>· Fortnightly mid-stay clean default; more on request</li>
          <li>· WhatsApp + email contact, both monitored</li>
        </ul>
      </div>

      <p className="mt-12 text-xs text-stone-500 leading-relaxed">
        Staylio Limited (Companies House 17012831), 85 Frampton Street, London NW8 8NQ. This page
        describes a B2B accommodation service for insurance ALE placements; it is not insurance
        advice. Operational SLAs published at{" "}
        <Link href="/standard" className="underline underline-offset-4 hover:text-stone-900">
          /standard
        </Link>{" "}
        and reviewed quarterly.
      </p>
    </article>
  );
}
