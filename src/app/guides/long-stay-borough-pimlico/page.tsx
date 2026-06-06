import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "long-stay-borough-pimlico";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "Long-stay serviced apartments in Borough & Pimlico";
const DESCRIPTION =
  "Borough sits on the south bank; Pimlico holds the Regency streets behind Westminster. Together they suit government, civil-service, NGO, foodie, and leisure long stays. Honest long-stay guide for 1-6 month stays.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/guides/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/guides/${SLUG}`, type: "article" },
};

const FAQS = [
  {
    question: "Why Borough & Pimlico for a long stay?",
    answer:
      "Three reasons: residential character that's quieter than central London, government and civil-service meeting access via Westminster + Lambeth, and weekend food culture (Borough Market is one of London's best). Often the price-to-quality optimum of the Staylio portfolio.",
  },
  {
    question: "Is this a cheaper neighbourhood than the rest?",
    answer:
      "Slightly. 1-bed monthly realised around £140-175/night — a small step below Marylebone for similar quality of building. Pimlico Regency streets in particular are underpriced versus their actual quality and central position.",
  },
  {
    question: "Tube access?",
    answer:
      "Borough (Northern), London Bridge (Jubilee, Northern, National Rail to Brighton/Gatwick), Pimlico (Victoria), Vauxhall (Victoria, National Rail). Across the river to Westminster + Lambeth in 5-10 minutes on foot. Good for both south-of-river and Westminster meetings.",
  },
  {
    question: "Who picks Borough or Pimlico?",
    answer:
      "Government and civil-service contractors during multi-month engagements. NGO and think-tank visitors. Foodies who want Borough Market on weekend mornings. Leisure stays that lean towards riverside walking and South Bank culture. Less common for City finance — they go Barbican/Farringdon.",
  },
  {
    question: "Is Borough Market actually open on weekdays for a long-stay weekly shop?",
    answer:
      "Yes — full market is Tuesday through Saturday, with the famous food stalls open Wednesday-Saturday. Weekday mornings are calmer and cheaper than weekend tourist hours. A 28-day stay in Borough means roughly four Saturday market mornings — worth planning around.",
  },
  {
    question: "Family-friendly?",
    answer:
      "Yes. Pimlico is one of the quieter family residential pockets in Zone 1. Several primary schools nearby. The South Bank's playgrounds (Jubilee Gardens, Bernie Spain Gardens) are within walking distance. Borough High Street is louder; the Borough side streets and the Tate area are calmer.",
  },
];

export default function LongStayBoroughGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: ["long stay serviced apartments borough", "pimlico serviced apartment monthly", "borough monthly apartment london"],
            about: "Long-stay serviced apartments in Borough & Pimlico, London",
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
          Two distinct neighbourhoods grouped because they share the same Staylio
          inventory band: residential, quieter than central London, government and
          foodie audiences. Slightly cheaper than Marylebone for similar quality, with
          Borough Market and the South Bank on your doorstep. Right call for
          Westminster meetings, NGO stays, and family long stays where Zone-1 prices
          matter.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Why Borough & Pimlico work for long stays</h2>
      <ol className="mt-6 space-y-5 text-stone-700 leading-relaxed">
        <li><span className="font-medium text-stone-900">Westminster + Lambeth access.</span> Both areas walk to Westminster in 10-15 minutes. For civil-service and government-adjacent work, harder to beat without going significantly further out.</li>
        <li><span className="font-medium text-stone-900">Underpriced quality.</span> Pimlico's Regency-square inventory is genuinely beautiful and routinely 15-25% cheaper than equivalent Marylebone. The trade-off is fewer tube lines.</li>
        <li><span className="font-medium text-stone-900">Borough Market.</span> Best food market in central London. For 1-6 month stays where Saturday mornings matter, it's a real lifestyle upgrade.</li>
      </ol>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">The long-stay maths</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500"><tr><th className="py-2 pr-4 text-left">Stay length</th><th className="py-2 pr-4 text-right">Per-night band (1-bed)</th><th className="py-2 text-right">Effective discount</th></tr></thead>
          <tbody className="divide-y divide-stone-200">
            <tr><td className="py-3 pr-4">3-6 nights (short)</td><td className="py-3 pr-4 text-right">£175-220</td><td className="py-3 text-right">Baseline</td></tr>
            <tr><td className="py-3 pr-4">7-27 nights (weekly+)</td><td className="py-3 pr-4 text-right">£160-200</td><td className="py-3 text-right">~8-10%</td></tr>
            <tr><td className="py-3 pr-4">28-89 nights (monthly + HMRC VAT)</td><td className="py-3 pr-4 text-right">£135-170</td><td className="py-3 text-right">~25-30%</td></tr>
            <tr><td className="py-3 pr-4">90+ nights (multi-month)</td><td className="py-3 pr-4 text-right">£125-150</td><td className="py-3 text-right">~30-35%</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Where Staylio operates</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">Including New Kent Road (Borough), Pimlico Regency streets, and a Vauxhall outpost. Browse on the{" "}<Link href="/locations/borough-pimlico" className="underline underline-offset-4 hover:text-stone-900">Borough &amp; Pimlico area page</Link>.</p>

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
        <h2 className="font-serif text-3xl text-stone-50">Long stay in Borough or Pimlico?</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">WhatsApp Ali — south of the river or Regency Pimlico, he'll match you to the right side street.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20long%20stay%20in%20Borough%2FPimlico.%20Dates%3A%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
          <Link href="/locations/borough-pimlico" className="inline-flex items-center justify-center rounded-full border border-stone-50/40 px-6 py-3 text-stone-50 hover:border-stone-50 transition">Borough &amp; Pimlico area page</Link>
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
