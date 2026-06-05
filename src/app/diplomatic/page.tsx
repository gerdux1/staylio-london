import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Diplomatic stays — Central London apartments for embassy postings",
  description:
    "Discreet serviced apartments for incoming diplomats, defence attachés, trade commissioners and visiting delegations during the 4-12 week onboarding gap before permanent residence is allocated. Kensington / Mayfair / Belgravia adjacency, multi-currency invoicing, NDA on request.",
};

const WHO_THIS_HELPS = [
  {
    headline: "Incoming diplomats and consular officers",
    body:
      "Diplomats arriving on a new posting typically need 4-12 weeks of temporary housing before their permanent embassy residence is allocated or refurbished. Multi-bedroom units suit family postings; we pre-confirm pet, accessibility, and dietary needs before arrival.",
  },
  {
    headline: "Defence attachés and military missions",
    body:
      "Service personnel on diplomatic postings — typically arriving with families, on multi-year tours, often needing a quieter residential neighbourhood close to embassy facilities. Discreet self check-in, no front-desk visibility, single point of contact throughout the placement.",
  },
  {
    headline: "Trade commissioners and visiting delegations",
    body:
      "Short-burst 1-3 week official visits — trade missions, ministerial delegations, parliamentary exchanges. Walking distance to Whitehall, the City, and Mayfair business addresses. Single invoice billed to the sending ministry or appointed agency.",
  },
  {
    headline: "Ambassador residency overflow",
    body:
      "When the official residence is being refurbished, the family is between rotations, or a state visit requires additional discreet accommodation for visiting principals. Multi-apartment block bookings on a single invoice, NDA on first request.",
  },
  {
    headline: "Foreign government training programmes",
    body:
      "Civil-service exchanges, judicial-cooperation programmes, customs and immigration officer training. Mid-stay 4-12 week placements, monthly invoicing to the home ministry or training partner.",
  },
  {
    headline: "International organisations and consulates",
    body:
      "Non-embassy missions: UN agencies, IMO, Commonwealth Secretariat, Council of the Inns of Court visitors. Same operational profile as embassy stays — institutional booker, defined posting window, written SLAs.",
  },
];

const FAQ = [
  {
    q: "How do you handle privacy and security for diplomatic guests?",
    a: "We do not publish guest names anywhere. The Staylio team is contracted under confidentiality. There is no public guest register in apartments or on our website. NDA terms are signed on first request — typically agreed within 24 hours. Apartment addresses are disclosed only to the booking institution and the named guest. We do not co-market that a diplomatic mission is a Staylio booking partner unless that mission explicitly requests it.",
  },
  {
    q: "What about per-diem alignment and multi-currency invoicing?",
    a: "Many foreign missions have fixed daily subsistence allowances. We can publish a held rate for a quarter so the mission's finance office can budget cleanly. Invoicing in GBP is standard; we can issue invoices stating the equivalent in EUR or USD for the mission's books, and accept payment by international wire in GBP, EUR, or USD on request.",
  },
  {
    q: "Are apartments suitable for diplomatic families with children?",
    a: "Yes. We have 2-, 3- and 4-bedroom units across most neighbourhoods. Walking distance to international schools where applicable (American School, French Lycée, Japanese School — all in central or west London). Cots, high chairs, and stair-gates available on request. We can arrange a private GP referral and an introduction to a vetted nanny agency for the duration of the placement.",
  },
  {
    q: "What's the lead time for a placement?",
    a: "For a confirmed posting with 4+ weeks notice: 24-48 hours from enquiry to apartment offer + held quarterly rate. For visiting delegations with 7-14 days notice: same-day to 48 hours. For state visits where the dates are highly confidential before announcement, we can work to an unspecified hold and convert to a confirmed booking on 24 hours notice.",
  },
  {
    q: "Do you accept payment from foreign government agencies directly?",
    a: "Yes. Diplomatic accounts pay by international wire transfer in GBP. Some missions prefer payment via a UK-based agent or law firm — we can invoice either party with the underlying booking remaining the embassy's responsibility.",
  },
  {
    q: "Are the apartments diplomatic-list / FCDO compliant?",
    a: "We are a commercial serviced-apartment operator, not a registered diplomatic residence provider. Our apartments are suitable for diplomatic temporary accommodation by mutual agreement, but we do not hold formal FCDO Diplomatic List status. Where a specific compliance regime is required (vetted-staff cleaning, secure-zone parking), we coordinate with the mission's facilities team and procure to that brief separately.",
  },
];

const EMBASSY_GEOGRAPHY = [
  {
    area: "Kensington & Hammersmith",
    role: "Embassy Row — the densest cluster of foreign missions in London",
    missions: [
      "French Embassy (Knightsbridge)",
      "Russian Embassy (Kensington Palace Gardens)",
      "Israeli Embassy (Kensington Palace Gardens)",
      "Saudi Arabian Embassy (Curzon Street, Mayfair edge)",
      "Royal Thai Embassy (Queen's Gate)",
      "Royal Embassy of Cambodia (Holland Park)",
      "Belgian Embassy (Belgrave Square)",
    ],
  },
  {
    area: "Fitzrovia & Mayfair",
    role: "Embassy + diplomatic-business cluster",
    missions: [
      "Japanese Embassy (Piccadilly)",
      "Italian Embassy (Three Kings Yard, Mayfair)",
      "Brazilian Embassy (Cockspur Street)",
      "Egyptian Embassy (South Audley Street)",
      "Mexican Embassy (St George Street, Hanover Square)",
      "UAE Embassy (Princes Gate)",
      "Qatar Embassy (Mayfair / South Audley)",
    ],
  },
  {
    area: "Regent's Park & Marylebone",
    role: "Central diplomatic cluster",
    missions: [
      "Chinese Embassy (Portland Place)",
      "Embassy of Sweden (Montagu Place)",
      "Norwegian Embassy (Belgrave Square — South Marylebone edge)",
      "Royal Danish Embassy (Sloane Street — Knightsbridge)",
      "Royal Netherlands Embassy (Hyde Park Gate)",
      "Royal Society of Medicine (host for visiting medical-diplomatic delegations)",
    ],
  },
  {
    area: "Borough & Pimlico",
    role: "Whitehall + South Bank cluster + new US Embassy at Nine Elms (10 min by tube)",
    missions: [
      "US Embassy (Nine Elms / Vauxhall) — 10 min by Victoria line from Pimlico Staylio",
      "Australian High Commission (Strand — short walk via Westminster)",
      "Canadian High Commission (Trafalgar Square)",
      "Indian High Commission (Aldwych)",
      "South African High Commission (Trafalgar Square)",
    ],
  },
  {
    area: "Barbican & Farringdon",
    role: "Visiting trade commissioners + City-facing delegations",
    missions: [
      "Singapore High Commission (Belgravia — 10 min via Circle/District)",
      "Hong Kong Economic and Trade Office (Pall Mall)",
      "Various Commonwealth and trade-missions located in the City",
    ],
  },
] as const;

export default function DiplomaticPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://staylio.london/diplomatic#service",
            name: "Diplomatic stays — Central London serviced apartments for embassy postings",
            description:
              "Discreet Central London serviced apartments for incoming diplomats, defence attachés, trade commissioners, visiting delegations, ambassador-residency overflow, and foreign government training programmes. Multi-currency invoicing, NDA on first request, walking distance to embassy belt.",
            serviceType:
              "Temporary accommodation for foreign diplomatic missions and visiting delegations",
            provider: { "@id": "https://staylio.london#organization" },
            audience: {
              "@type": "BusinessAudience",
              name: "Embassy Administrative Counsellors, Heads of Chancery, Defence Attaché Offices, Trade Commission Procurement, Foreign Ministry Mobility Officers",
            },
            offers: {
              "@type": "Offer",
              url: "https://staylio.london/diplomatic",
              availability: "https://schema.org/InStock",
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: { "@type": "GeoCoordinates", latitude: 51.5009, longitude: -0.1786 },
              geoRadius: "4000",
            },
            url: "https://staylio.london/diplomatic",
          },
        ]}
      />

      <p className="text-sm uppercase tracking-widest text-stone-500">Staylio for diplomatic missions</p>
      <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900">
        Discreet apartments for the gap between posting and residence.
      </h1>
      <p className="mt-6 text-lg text-stone-700 leading-relaxed max-w-2xl">
        Serviced apartments for incoming diplomats, defence attachés, trade commissioners, and
        visiting delegations during the 4-12 week onboarding window. Walking distance to the
        embassy belt in Kensington, Mayfair, and Belgravia. Discreet self check-in, multi-currency
        invoicing, NDA on first request, single point of contact throughout the posting.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="mailto:hello@staylio.london?subject=Diplomatic placement enquiry"
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
        <Link
          href="/procurement-pack"
          className="rounded-full border border-stone-300 bg-white px-7 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-900"
        >
          Procurement pack
        </Link>
      </div>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">Who this helps</h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {WHO_THIS_HELPS.map((item) => (
          <div key={item.headline} className="border-l-2 border-stone-300 pl-5">
            <h3 className="font-serif text-xl text-stone-900">{item.headline}</h3>
            <p className="mt-2 text-stone-700 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">
        Walking distance to the embassy belt
      </h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        London hosts around 168 foreign missions. Most cluster in Kensington, Mayfair, and
        Belgravia — three of Staylio&rsquo;s strongest neighbourhood overlaps. Below is a quick
        guide to which Staylio area sits closest to which mission cluster. Final apartment
        selection depends on posting length, family size, and specific security or accessibility
        needs.
      </p>

      <div className="mt-8 space-y-10">
        {EMBASSY_GEOGRAPHY.map((row) => (
          <section key={row.area} className="border-t border-stone-200 pt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif text-2xl text-stone-900">{row.area}</h3>
              <p className="text-sm text-stone-500 italic">{row.role}</p>
            </div>
            <ul className="mt-4 space-y-2 text-stone-700">
              {row.missions.map((m) => (
                <li key={m} className="text-sm">
                  · {m}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">Why our setup works for diplomatic stays</h2>
      <ul className="mt-6 space-y-4 text-stone-700 leading-relaxed list-disc pl-6">
        <li>
          <strong className="font-medium text-stone-900">Discreet self check-in.</strong> Smart-lock
          entry on most apartments — no front desk, no public arrival register, no porters logging
          guest names. The arrival is invisible to the building&rsquo;s other residents and to
          social media.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Quiet residential streets.</strong> All
          seven neighbourhoods are residential, not tourist strips. Apartment buildings, not hotel
          frontage. The kind of street a deputy ambassador can live on without comment.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Family-suitable inventory.</strong> 2-,
          3-, and 4-bedroom apartments across the embassy-cluster neighbourhoods. Cots, high
          chairs, stair-gates pre-arranged on request. Walking distance to the major
          international schools.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Multi-currency invoicing.</strong> GBP
          billing standard; EUR / USD equivalents stated on the invoice for the mission&rsquo;s
          books. International wire payments accepted from foreign government accounts.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Single procurement contact.</strong>{" "}
          One named contact for the whole placement: from MSA negotiation through to checkout.
          Kris Kamas for contract; Ali Hassan for placement logistics.
        </li>
        <li>
          <strong className="font-medium text-stone-900">NDA on first request.</strong> Drafted
          and returned within 24 hours. Our team operate under confidentiality by default; the NDA
          formalises it for the mission&rsquo;s records.
        </li>
      </ul>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">Procurement FAQ</h2>
      <dl className="mt-8 space-y-7">
        {FAQ.map((f) => (
          <div key={f.q}>
            <dt className="font-medium text-stone-900">{f.q}</dt>
            <dd className="mt-2 text-stone-700 leading-relaxed">{f.a}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-20 rounded-2xl border border-stone-200 bg-stone-50 p-8">
        <p className="text-sm uppercase tracking-widest text-stone-500">For booking partners</p>
        <p className="mt-3 font-serif text-2xl text-stone-900">
          Foreign missions · trade commissions · ministries · international organisations
        </p>
        <p className="mt-4 text-stone-700 leading-relaxed">
          For a Master Services Agreement covering multiple incoming postings per year, a held
          quarterly rate, or pre-blocked inventory for a state-visit window, email{" "}
          <a className="underline underline-offset-4 hover:text-stone-900" href="mailto:hello@staylio.london?subject=Diplomatic MSA enquiry">
            hello@staylio.london
          </a>{" "}
          marked &ldquo;MSA enquiry &mdash; diplomatic&rdquo;. For urgent same-week placement of a
          visiting delegation, WhatsApp{" "}
          <a className="underline underline-offset-4 hover:text-stone-900" href="https://wa.me/447375621453">
            Ali on +44 7375 621453
          </a>
          .
        </p>
      </div>

      <p className="mt-12 text-xs text-stone-500 leading-relaxed">
        Staylio Limited (Companies House 17012831), 85 Frampton Street, London NW8 8NQ. Staylio is
        a commercial serviced-apartment operator, not a registered diplomatic residence. This page
        describes accommodation suitable for diplomatic temporary stays by mutual agreement; it is
        not legal or diplomatic advice. Walking-time estimates depend on the specific apartment
        within each neighbourhood and the destination. Embassy addresses listed are illustrative;
        for the live diplomatic list see the UK FCDO London Diplomatic List.
      </p>
    </article>
  );
}
