import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "best-area-to-stay-london-business";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "Best area to stay in London for a business trip";
const DESCRIPTION =
  "Where to base yourself for a London business trip depends on which industry your meetings are in. Tech goes Shoreditch / Farringdon. Finance goes City / Barbican. Pharma and healthcare go Kensington. Here's the honest area-by-industry picker, with Central London serviced apartments in each.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/guides/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/guides/${SLUG}`, type: "article" },
};

const AREAS = [
  {
    sector: "Tech, scale-ups, venture capital",
    area: "Old Street & Shoreditch / Barbican & Farringdon",
    why: "Silicon Roundabout, Google's London HQ, Meta's London office, Microsoft, and most VC offices sit in this corridor. Elizabeth line from Farringdon also gets you to Liverpool Street and Canary Wharf in under 15 minutes.",
    href: "/locations/old-street-shoreditch",
    label: "Shoreditch apartments",
  },
  {
    sector: "Finance, banking, the City",
    area: "Barbican & Farringdon / Borough & Pimlico",
    why: "Barbican walks to Bank in 12 minutes; Farringdon's Elizabeth line is direct to Canary Wharf. Borough Bridge crosses straight into Bank. For private equity and asset management based in Mayfair, the Fitzrovia & Mayfair area below fits better.",
    href: "/locations/barbican-farringdon",
    label: "Farringdon apartments",
  },
  {
    sector: "Pharma, healthcare, life sciences",
    area: "Kensington & Hammersmith",
    why: "Imperial College, the Imperial Healthcare Trust, GSK, AstraZeneca's London presence, and most pharma consultancies sit in this corridor. Piccadilly line direct to Heathrow for visiting principal-investigator sessions.",
    href: "/locations/kensington-hammersmith",
    label: "Kensington apartments",
  },
  {
    sector: "Private equity, VC, luxury, advisory, legal",
    area: "Fitzrovia & Mayfair",
    why: "Mayfair holds nearly every London PE house, most VC firms with European books, all the prestige legal firms, and the management consultancies. Walking distance to Berkeley Square, Bond Street, and Charlotte Street client meetings.",
    href: "/locations/fitzrovia-mayfair",
    label: "Mayfair apartments",
  },
  {
    sector: "Media, publishing, advertising, design",
    area: "Regent's Park & Marylebone / Fitzrovia",
    why: "Charlotte Street is London's advertising-and-design row. BBC Broadcasting House anchors Marylebone. Most boutique creative agencies are in Fitzrovia. Quiet residential evenings 10 minutes from Oxford Circus.",
    href: "/locations/regents-park-marylebone",
    label: "Marylebone apartments",
  },
  {
    sector: "Government, civil service, NGO, Westminster",
    area: "Borough & Pimlico",
    why: "Pimlico walks to Westminster in 10 minutes. Borough crosses London Bridge to the South Bank and Lambeth. Most policy think tanks and government-adjacent firms cluster between Victoria and Vauxhall.",
    href: "/locations/borough-pimlico",
    label: "Pimlico apartments",
  },
  {
    sector: "Fly-in / fly-out, airport-heavy travel",
    area: "Little Venice & Maida Vale",
    why: "Paddington station is one stop away — Heathrow Express to LHR in 15 minutes flat, plus mainline to Reading and the south-west. Bakerloo to Oxford Circus in 4 stops. Quietest residential pocket in this list.",
    href: "/locations/little-venice-maida-vale",
    label: "Maida Vale apartments",
  },
];

const FAQS = [
  {
    question: "What if my meetings are in more than one of these areas?",
    answer:
      "Pick the area with the most-frequent meetings, or pick a Zone 1 base with good Elizabeth-line connectivity (Farringdon or Paddington are the strongest hubs for hopping between sectors). For a week with three days of Mayfair meetings and two of Shoreditch, Marylebone or Fitzrovia bridges both reasonably well.",
  },
  {
    question: "What about Canary Wharf for finance?",
    answer:
      "If 80%+ of your meetings are at Canary Wharf specifically, base at the Wharf itself — there are dedicated aparthotel options on-site. If it's mixed City + Wharf, Farringdon or Barbican are better picks because the Elizabeth line gets you to the Wharf in 8-12 minutes while keeping you in walking distance of the City and the West End for evenings.",
  },
  {
    question: "How close to the airport do I need to be for a fly-in / fly-out trip?",
    answer:
      "For Heathrow: Paddington area is best (Heathrow Express, 15 minutes). For Gatwick: Borough/Pimlico has Thameslink at London Bridge. For City Airport: Old Street/Shoreditch via Bank/DLR. For Stansted: Liverpool Street area via Shoreditch.",
  },
  {
    question: "Does Staylio have multi-bed apartments for team trips?",
    answer:
      "Yes, in most areas. Marylebone and Kensington have the largest 2-bed inventory. For 3-4 team members on the same project, two adjacent 1-beds often work out cheaper than a single 2-bed and give everyone privacy. WhatsApp Ali with the team size and we'll send a shortlist.",
  },
  {
    question: "What's the typical Staylio business stay length?",
    answer:
      "From three nights for a project kick-off to three months for a relocation. The sweet spot is 2-6 weeks for project work. Long-stay pricing steps down at one week, again at one month, and HMRC's 80% VAT reduction kicks in from night 28.",
  },
];

export default function BestAreaBusinessGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: ["best area to stay in London for business", "where to stay London business trip", "London business district accommodation", "best London neighbourhood corporate"],
            about: "London business district accommodation picker",
          }),
          faqSchema(FAQS),
        ]}
      />
      <p className="text-sm uppercase tracking-widest text-stone-500">Guides · Location</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Published 6 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">Ali Hassan</Link>, Direct Bookings Lead · 6 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          Pick by industry, not by glamour. Tech goes Shoreditch or Farringdon.
          Finance goes Barbican or Farringdon. Pharma goes Kensington. PE / VC / legal
          / luxury go Mayfair. Government goes Pimlico. Media goes Marylebone or
          Fitzrovia. Heathrow-heavy travel goes Maida Vale. The table below maps
          Staylio's seven neighbourhoods to the sector that makes most sense in each.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Area picker by industry</h2>
      <div className="mt-8 space-y-6">
        {AREAS.map((a) => (
          <Link
            key={a.area}
            href={a.href}
            className="group block rounded-2xl border border-stone-200 bg-white p-6 hover:border-stone-400 transition"
          >
            <p className="text-xs uppercase tracking-widest text-stone-500">{a.sector}</p>
            <h3 className="mt-2 font-serif text-xl text-stone-900 group-hover:underline underline-offset-4">{a.area}</h3>
            <p className="mt-3 text-stone-700 leading-relaxed text-sm">{a.why}</p>
            <p className="mt-4 text-sm text-stone-500 group-hover:text-stone-900">{a.label} →</p>
          </Link>
        ))}
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">For corporate procurement</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Staylio runs PO terms and monthly invoicing for corporate accounts.
        Single point of contact, dedicated account management, full documentation pack
        on request (Certificate of Insurance, GDPR data-processing terms, supplier
        code of conduct). Read the{" "}
        <Link href="/trust" className="underline underline-offset-4 hover:text-stone-900">trust &amp; credentials page</Link>{" "}
        for the full credential trail or head to{" "}
        <Link href="/corporate" className="underline underline-offset-4 hover:text-stone-900">/corporate</Link>{" "}
        for procurement specifics.
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
        <h2 className="font-serif text-3xl text-stone-50">Tell us where you're meeting.</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">Ali knows which Staylio apartment is the right base for which meeting district. Send him your week's calendar headlines.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20I%27m%20in%20London%20for%20business.%20Meetings%20mostly%20in%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
          <Link href="/corporate" className="inline-flex items-center justify-center rounded-full border border-stone-50/40 px-6 py-3 text-stone-50 hover:border-stone-50 transition">Corporate stays</Link>
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
