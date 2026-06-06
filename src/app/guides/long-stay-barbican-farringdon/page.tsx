import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "long-stay-barbican-farringdon";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "Long-stay serviced apartments in Barbican & Farringdon";
const DESCRIPTION =
  "Barbican and Farringdon sit on the Elizabeth line — direct to Heathrow + Canary Wharf in under 14 minutes. Walking distance to the City. Brutalist architecture, the Barbican Centre, and Smithfield. Honest long-stay guide for finance, audit, and tech-finance hybrids.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/guides/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/guides/${SLUG}`, type: "article" },
};

const FAQS = [
  {
    question: "Why Barbican / Farringdon over Mayfair or Borough for City work?",
    answer:
      "Closer to Bank, on the Elizabeth line, and ~30% cheaper than Mayfair while keeping the same business-travel utility. Borough crosses the river to Bank in similar time but lacks the Elizabeth line advantage. For 1-3 month finance / audit / consulting stays, Farringdon is the optimal corner.",
  },
  {
    question: "What's the long-stay maths in Farringdon?",
    answer:
      "Mid-band: 1-bed monthly rate £150-190/night realised. Cheaper than Marylebone, much cheaper than Mayfair, with arguably better business-utility. Same step-down structure (one-week, one-month, plus HMRC VAT relief from night 28).",
  },
  {
    question: "Tube access?",
    answer:
      "Barbican (Circle, H&C, Metropolitan), Farringdon (Circle, H&C, Metropolitan, Elizabeth, Thameslink). Elizabeth-line to Heathrow in 36 minutes; to Canary Wharf in 12; to Reading in 35. Thameslink to Gatwick in 40. The transport position is the area's superpower.",
  },
  {
    question: "Is it residential enough for a long stay?",
    answer:
      "Yes, surprisingly. Barbican estate itself is residential — 4,000 flats in the brutalist towers, populated by people who live there normally. Farringdon to the west is mixed: residential side streets between the Smithfield commercial area. Quieter than you'd expect for a Zone 1 City-fringe address.",
  },
  {
    question: "Cultural and food nearby?",
    answer:
      "Barbican Centre (concerts, theatre, art-house cinema, free exhibitions). Smithfield Market (early-morning food market, soon to be the new Museum of London). St John restaurant, Caravan Exmouth Market, Moro on Exmouth Market — three of London's best restaurants within walking distance.",
  },
  {
    question: "Who picks Farringdon for a long stay?",
    answer:
      "Big-4 audit teams on multi-week engagements. M&A consultants and law firms with City clients. Tech-finance hybrids — fintech founders, exchange engineers, banking-tech vendors. Arts visitors who want Barbican Centre and Sadler's Wells on the doorstep.",
  },
];

export default function LongStayFarringdonGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: ["long stay serviced apartments farringdon", "barbican serviced apartment monthly", "long stay farringdon london"],
            about: "Long-stay serviced apartments in Barbican & Farringdon, London",
          }),
          faqSchema(FAQS),
        ]}
      />
      <p className="text-sm uppercase tracking-widest text-stone-500">Guides · Neighbourhood</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Published 6 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">Ali Hassan</Link>, Direct Bookings Lead · 5 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          Best transport-to-cost ratio in the Staylio portfolio. Elizabeth line direct
          to Heathrow + Canary Wharf, walking to Bank, ~30% cheaper than Mayfair.
          Brutalist architecture, the Barbican Centre, Smithfield restaurants. Right
          call for City-meeting weeks of 1-12 weeks where the rate matters.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Why Farringdon works for long stays</h2>
      <ol className="mt-6 space-y-5 text-stone-700 leading-relaxed">
        <li><span className="font-medium text-stone-900">The Elizabeth line.</span> Heathrow in 36 minutes, Canary Wharf in 12. For fly-in / fly-out weeks or cross-river City + Wharf split meetings, no other area beats this.</li>
        <li><span className="font-medium text-stone-900">Walking to the City.</span> Bank in 12 minutes, Liverpool Street in 10, Holborn in 8. Most City finance and legal addresses are within a 15-minute walk.</li>
        <li><span className="font-medium text-stone-900">Rate-to-utility advantage.</span> ~30% cheaper than Mayfair for a comparable 1-bed, with arguably better business utility. The unsung optimal corner of the portfolio.</li>
      </ol>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">The long-stay maths</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500"><tr><th className="py-2 pr-4 text-left">Stay length</th><th className="py-2 pr-4 text-right">Per-night band (1-bed)</th><th className="py-2 text-right">Effective discount</th></tr></thead>
          <tbody className="divide-y divide-stone-200">
            <tr><td className="py-3 pr-4">3-6 nights (short)</td><td className="py-3 pr-4 text-right">£185-235</td><td className="py-3 text-right">Baseline</td></tr>
            <tr><td className="py-3 pr-4">7-27 nights (weekly+)</td><td className="py-3 pr-4 text-right">£170-215</td><td className="py-3 text-right">~8-10%</td></tr>
            <tr><td className="py-3 pr-4">28-89 nights (monthly + HMRC VAT)</td><td className="py-3 pr-4 text-right">£140-175</td><td className="py-3 text-right">~25-30%</td></tr>
            <tr><td className="py-3 pr-4">90+ nights (multi-month)</td><td className="py-3 pr-4 text-right">£130-160</td><td className="py-3 text-right">~30-35%</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Where Staylio operates</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">Smaller portfolio in this area — usually one apartment available at a time. Browse on the{" "}<Link href="/locations/barbican-farringdon" className="underline underline-offset-4 hover:text-stone-900">Barbican &amp; Farringdon area page</Link>.</p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Common questions</h2>
      <div className="mt-6 divide-y divide-stone-200">
        {FAQS.map((q) => (
          <details key={q.question} className="group py-5">
            <summary className="cursor-pointer font-medium text-stone-900 list-none flex items-start justify-between gap-4">
              <span>{q.question}</span><span className="font-sans text-stone-400 text-base mt-1 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-4 text-stone-700 leading-relaxed">{q.answer}</p>
          </details>
        ))}
      </div>

      <section className="mt-16 rounded-3xl bg-stone-900 text-stone-50 p-10 sm:p-14">
        <h2 className="font-serif text-3xl text-stone-50">Long stay in Farringdon?</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">Tell Ali your dates and your typical week. He'll match the apartment to the commute.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20long%20stay%20in%20Farringdon%2FBarbican.%20Dates%3A%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
          <Link href="/locations/barbican-farringdon" className="inline-flex items-center justify-center rounded-full border border-stone-50/40 px-6 py-3 text-stone-50 hover:border-stone-50 transition">Farringdon area page</Link>
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
