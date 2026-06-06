import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumb, faqSchema } from "@/lib/schema";

const SLUG = "london-serviced-apartments";
const HEADLINE = "London serviced apartment operators compared: an honest scorecard";
const DESCRIPTION =
  "Side-by-side comparison of the main London serviced apartment operators — SACO, Edyn, Locke, Native Places, Cheval Residences, SilverDoor, Cove, Sonder, and Staylio. Honest scoring on price, neighbourhood coverage, format (SA vs aparthotel), and best-stay-length fit.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/vs/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/vs/${SLUG}`, type: "article" },
};

const OPERATORS = [
  {
    name: "SACO / Edyn",
    format: "Mixed — pure SA + aparthotels (Locke, Cove)",
    scale: "Large — 500+ units across UK + Europe",
    bestFor: "Multi-unit corporate accounts, multi-city travel, large group bookings",
    watchOut: "Beige fit-out across most units; head-office overhead in rate",
  },
  {
    name: "Locke (Edyn)",
    format: "Aparthotel — design-led, kitchenette + lobby + co-working",
    scale: "Mid — ~10 buildings central London",
    bestFor: "Tech-friendly stays 3-14 nights, ground-floor sociability, central locations",
    watchOut: "Smaller units; lobby/bar tax in rate; no full kitchen",
  },
  {
    name: "Native Places",
    format: "Aparthotel — kitchenette + reception + bar",
    scale: "Mid — ~6 London buildings",
    bestFor: "Short-medium hotel-like stays, design-conscious guests",
    watchOut: "Premium pricing; kitchenette not full kitchen; lobby-bar premium",
  },
  {
    name: "Cheval Residences",
    format: "Pure SA — premium scale (large units, often 100+ sqm)",
    scale: "Small — ~8 London residences",
    bestFor: "Premium family stays, diplomatic/UHNW, addresses like Knightsbridge",
    watchOut: "Genuinely premium pricing (£500-1,500/night); ICP mismatch for most stays",
  },
  {
    name: "SilverDoor",
    format: "Broker — aggregates many operator inventories",
    scale: "Very large via aggregation",
    bestFor: "Corporate procurement consolidating across many cities/operators",
    watchOut: "Booker not operator — you don't have a direct relationship with the team running the building",
  },
  {
    name: "Cove (Edyn)",
    format: "Aparthotel — more residential vibe than Locke",
    scale: "Small — handful of London buildings",
    bestFor: "Stays where you want some Locke-like amenity without the bar focus",
    watchOut: "Smaller portfolio means availability often limited",
  },
  {
    name: "Sonder",
    format: "Pure SA — tech-first, app-led",
    scale: "Large — multi-city chain (5,000+ units globally)",
    bestFor: "Short stays in their inventory areas, app-comfortable travellers",
    watchOut: "No in-person team; reception-by-app feels off after night 5",
  },
  {
    name: "Wilde Aparthotels",
    format: "Aparthotel — design-led",
    scale: "Small in London — a couple of locations",
    bestFor: "Stays where Wilde already has the address you want",
    watchOut: "Limited London footprint vs Native/Locke",
  },
  {
    name: "Staylio",
    format: "Pure SA — boutique-curated 40-unit operator",
    scale: "Small — 40 units across 7 Central London neighbourhoods",
    bestFor: "Boutique stays, Marylebone/Maida Vale specifically, longer stays, single point of contact",
    watchOut: "Smaller selection; no multi-city; fewer 3+ bed units",
  },
];

const FAQS = [
  {
    question: "Which is the cheapest London serviced apartment operator?",
    answer:
      "Direct from Staylio is usually the cheapest like-for-like — we guarantee at least 10% below the same apartment on Booking.com or Airbnb. Aparthotels (Locke, Native, Cove) carry lobby/staff overhead in the rate. SACO scales but doesn't undercut at the unit level. Sonder occasionally beats us on deeply discounted weekend slots but rarely on weekday or long stays.",
  },
  {
    question: "Which is best for a one-week stay?",
    answer:
      "Aparthotels (Locke, Native) make most sense for 3-7 nights where the bar and lobby are an active part of the experience. Pure serviced apartments (Staylio, Sonder, SACO at the smaller end) take over from night seven when you want a real kitchen and a quiet sitting room.",
  },
  {
    question: "Which is best for one to three months?",
    answer:
      "Pure serviced apartment, by a margin. Aparthotel format starts to feel small after three weeks. Among pure SAs, the choice usually comes down to neighbourhood coverage: Staylio for Marylebone / Maida Vale / Borough / Pimlico, Sonder for Shoreditch / Aldgate / Mayfair fringe, SACO for breadth across central London.",
  },
  {
    question: "Which is best for corporate procurement?",
    answer:
      "Depends on scale. Single-account, 1-5 units at a time: Staylio direct or Native Places. 20+ units across cities: SACO, Edyn, or SilverDoor brokered. For global mobility programmes, SilverDoor's broker model handles the consolidation pain.",
  },
  {
    question: "Are any of these operators owned by the same group?",
    answer:
      "Yes. Edyn owns Locke and Cove (and operates SACO branded inventory in some markets). Cheval Residences is independent. Native Places is independent. Sonder is independent (NASDAQ-listed). SilverDoor is a broker not an operator. Staylio is independent (Companies House 17012831, director Kris Kamas).",
  },
];

export default function VsLondonServicedApartments() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          breadcrumb([
            { name: "Home", url: "https://staylio.london" },
            { name: "Compare", url: "https://staylio.london/vs" },
            { name: "London operators compared", url: `https://staylio.london/vs/${SLUG}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `https://staylio.london/vs/${SLUG}#article`,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: "2026-06-06T00:00:00Z",
            author: { "@type": "Person", "@id": "https://staylio.london/contact#ali-hassan", name: "Ali Hassan" },
            publisher: { "@id": "https://staylio.london#organization" },
            mainEntityOfPage: { "@type": "WebPage", "@id": `https://staylio.london/vs/${SLUG}` },
            inLanguage: "en-GB",
            about: "London serviced apartment operators comparison",
          },
          faqSchema(FAQS),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "London serviced apartment operators",
            itemListElement: OPERATORS.map((o, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: o.name,
            })),
          },
        ]}
      />
      <p className="text-sm uppercase tracking-widest text-stone-500">Compare · The whole London market</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Updated 6 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">Ali Hassan</Link>, Direct Bookings Lead · 9 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          Nine operators dominate London's serviced apartment market. They split into
          three categories: aparthotels (Locke, Native, Cove, Wilde) with a reception
          and bar downstairs; pure serviced apartments (Staylio, SACO, Sonder, Cheval)
          which are residential flats with no front desk; and brokers (SilverDoor) who
          aggregate other people's inventory. Picking the right one depends on stay
          length, neighbourhood, and whether you value the lobby premium.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">The nine operators, scored honestly</h2>
      <div className="mt-8 space-y-5">
        {OPERATORS.map((o) => (
          <div key={o.name} className="rounded-2xl border border-stone-200 bg-white p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif text-xl text-stone-900">{o.name}</h3>
              <span className="text-xs uppercase tracking-widest text-stone-500">{o.format}</span>
            </div>
            <p className="mt-2 text-xs text-stone-500">{o.scale}</p>
            <p className="mt-3 text-sm text-stone-700 leading-relaxed"><span className="font-medium text-stone-900">Best for:</span> {o.bestFor}</p>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed"><span className="font-medium text-stone-900">Watch out for:</span> {o.watchOut}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Quick pickers</h2>
      <ul className="mt-6 space-y-3 text-stone-700 leading-relaxed">
        <li><span className="font-medium text-stone-900">For 3-7 nights, design-led, social building:</span> Locke or Native</li>
        <li><span className="font-medium text-stone-900">For 1-3 months, residential feel:</span> Staylio or SACO</li>
        <li><span className="font-medium text-stone-900">For premium family stays:</span> Cheval Residences</li>
        <li><span className="font-medium text-stone-900">For multi-city / global mobility:</span> SilverDoor (broker) or Edyn (operator)</li>
        <li><span className="font-medium text-stone-900">For app-first short stays:</span> Sonder</li>
        <li><span className="font-medium text-stone-900">For Marylebone / Maida Vale / Borough specifically:</span> Staylio (we operate where others don't)</li>
      </ul>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Where Staylio fits in the lineup</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        We're the small end of the pure-serviced-apartment category — 40 units across
        7 neighbourhoods, no aparthotel format, no multi-city operation, no broker
        model. We win on neighbourhood coverage (Marylebone is our largest, others
        don't operate there at scale), direct contact (one WhatsApp line with Ali),
        and price (we publish the at-least-10%-below-OTA guarantee). We lose when you
        want stays outside London or fifteen units booked simultaneously.
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        For deeper individual comparisons, see{" "}
        <Link href="/vs/sonder-london" className="underline underline-offset-4 hover:text-stone-900">Sonder vs Staylio</Link>{" "}
        and{" "}
        <Link href="/vs/native-vs-staylio" className="underline underline-offset-4 hover:text-stone-900">Native vs Staylio</Link>.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Common questions</h2>
      <div className="mt-6 divide-y divide-stone-200">
        {FAQS.map((q) => (
          <details key={q.question} className="group py-5">
            <summary className="cursor-pointer font-medium text-stone-900 list-none flex items-start justify-between gap-4">
              <span>{q.question}</span>
              <span className="font-sans text-stone-400 text-base mt-1 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-4 text-stone-700 leading-relaxed">{q.answer}</p>
          </details>
        ))}
      </div>

      <section className="mt-16 rounded-3xl bg-stone-900 text-stone-50 p-10 sm:p-14">
        <h2 className="font-serif text-3xl text-stone-50">Want a steer for your specific dates?</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">Send Ali the dates and area. If another operator fits better, he'll point you at them and explain why.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20I%27m%20comparing%20London%20SA%20operators.%20Dates%3A%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
          <Link href="/apartments" className="inline-flex items-center justify-center rounded-full border border-stone-50/40 px-6 py-3 text-stone-50 hover:border-stone-50 transition">Browse Staylio apartments</Link>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
        <p className="text-xs uppercase tracking-widest text-stone-500">Already staying with us?</p>
        <h3 className="mt-2 font-serif text-2xl text-stone-900">Reach guest service direct.</h3>
        <p className="mt-3 text-stone-700 leading-relaxed">For in-stay matters — separate line from sales.</p>
        <a href="https://wa.me/447304353640?text=Hi%2C%20I%27m%20staying%20with%20Staylio%20and%20need%20help." className="mt-4 inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-2.5 text-sm text-stone-50 hover:bg-stone-800 transition">WhatsApp guest service · +44 7304 353 640</a>
      </section>
    </article>
  );
}
