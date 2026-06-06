import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "long-stay-kensington-hammersmith";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "Long-stay serviced apartments in Kensington & Hammersmith";
const DESCRIPTION =
  "Kensington is the museum-and-embassy belt; Hammersmith is the modern Imperial-college fringe. Together they suit pharma, healthcare, family relocations, and anyone who needs Heathrow on the Piccadilly line. Honest long-stay guide for 1-6 month stays.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/guides/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/guides/${SLUG}`, type: "article" },
};

const FAQS = [
  {
    question: "Why pick Kensington over more central neighbourhoods?",
    answer:
      "Three reasons specific to long stays: family-grade housing stock (more 2-3 bed inventory in the area than in central London), museums and parks on the doorstep (V&A, Natural History, Science, Kensington Gardens, Hyde Park), and direct Piccadilly-line Heathrow access — useful if you're flying in monthly or back home every other weekend.",
  },
  {
    question: "Is Kensington commute-friendly for City meetings?",
    answer:
      "Reasonable, not ideal. South Kensington to Bank is ~25 minutes on the District/Circle line. Hammersmith to Liverpool Street is similar via Piccadilly + Central. If most of your week is the City or Canary Wharf, base in Barbican/Farringdon instead. Kensington wins for healthcare/Imperial College/pharma meetings + family weekends + airport runs.",
  },
  {
    question: "What's the long-stay price step-down at Staylio Kensington?",
    answer:
      "Same structure: 5-10% at one week, 15-25% at one month, plus HMRC's 80% VAT relief from night 28. Kensington 1-bed monthly rate lands around £165-210/night realised; 2-beds £225-285. Bigger units mean the per-bedroom maths often beats Marylebone for families.",
  },
  {
    question: "Tube access?",
    answer:
      "South Kensington (Circle, District, Piccadilly), High Street Kensington (Circle, District), Earl's Court (District, Piccadilly), Hammersmith (Circle, District, H&C, Piccadilly). Direct Piccadilly line to Heathrow in 50 minutes (cheaper than the Heathrow Express, only 15 minutes slower).",
  },
  {
    question: "Schools and family bits?",
    answer:
      "Several international schools nearby: American School in London (St John's Wood, 20 minutes), Lycée Français Charles de Gaulle (5 minutes), Hammersmith and West London College. For under-5s, Princess Diana Memorial Playground in Kensington Gardens is a 10-minute walk for most apartments.",
  },
  {
    question: "Is this where Imperial College / pharma stays go?",
    answer:
      "Yes. Imperial's main campus, the Imperial Healthcare Trust, and most pharma consultancies cluster around South Kensington. Visiting principal investigators, GSK and AstraZeneca London teams, healthcare M&A consultants — typically base here.",
  },
];

export default function LongStayKensingtonGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: ["long stay serviced apartments kensington", "monthly apartment kensington london", "hammersmith serviced apartment long stay"],
            about: "Long-stay serviced apartments in Kensington & Hammersmith, London",
          }),
          faqSchema(FAQS),
        ]}
      />
      <p className="text-sm uppercase tracking-widest text-stone-500">Guides · Neighbourhood</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Published 6 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">Ali Hassan</Link>, Direct Bookings Lead · 6 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          Kensington and Hammersmith make sense for long stays when families, museums,
          parks, Imperial College, or Heathrow access are part of the story. More 2-3 bed
          inventory than central London, direct Piccadilly line to LHR, and quieter
          residential streets. Less ideal for City-only meeting weeks; head to Barbican
          or Shoreditch for those.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Why Kensington works for long stays</h2>
      <ol className="mt-6 space-y-5 text-stone-700 leading-relaxed">
        <li><span className="font-medium text-stone-900">Family-friendly housing.</span> Larger 2-3 bed inventory than the central neighbourhoods. Quiet garden squares, leafy roads, and Princess Diana Playground in Kensington Gardens.</li>
        <li><span className="font-medium text-stone-900">Heathrow on the Piccadilly line.</span> Direct from South Ken / Hammersmith to LHR in 50 minutes. For fly-in / fly-out weeks, the airport-access edge over central is real.</li>
        <li><span className="font-medium text-stone-900">Cultural density.</span> V&A, Natural History, Science Museum, Royal Albert Hall, Holland Park — all free or low-cost weekend options. Makes a long stay feel less monotonous.</li>
      </ol>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">The long-stay maths</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
            <tr><th className="py-2 pr-4 text-left">Stay length</th><th className="py-2 pr-4 text-right">1-bed band</th><th className="py-2 text-right">2-bed band</th></tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            <tr><td className="py-3 pr-4">3-6 nights (short)</td><td className="py-3 pr-4 text-right">£195-245</td><td className="py-3 text-right">£275-345</td></tr>
            <tr><td className="py-3 pr-4">7-27 nights (weekly+)</td><td className="py-3 pr-4 text-right">£180-225</td><td className="py-3 text-right">£255-315</td></tr>
            <tr><td className="py-3 pr-4">28-89 nights (monthly + HMRC VAT)</td><td className="py-3 pr-4 text-right">£145-180</td><td className="py-3 text-right">£205-260</td></tr>
            <tr><td className="py-3 pr-4">90+ nights (multi-month)</td><td className="py-3 pr-4 text-right">£135-165</td><td className="py-3 text-right">£195-240</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-stone-700 leading-relaxed text-sm">All bands include all bills + Wi-Fi + fortnightly housekeeping + council tax.</p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Where Staylio operates</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">Across the Kensington and Hammersmith corridor including a Shepherd's Bush concentration. Browse on the{" "}<Link href="/locations/kensington-hammersmith" className="underline underline-offset-4 hover:text-stone-900">Kensington &amp; Hammersmith area page</Link>.</p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Who picks Kensington</h2>
      <ol className="mt-6 space-y-4 text-stone-700 leading-relaxed">
        <li><span className="font-medium text-stone-900">Family relocations</span> from the US, Asia, or the Middle East — interim before the house exchange.</li>
        <li><span className="font-medium text-stone-900">Imperial College and pharma teams</span> on visiting-investigator or consulting rotations.</li>
        <li><span className="font-medium text-stone-900">Heathrow-heavy executives</span> who want a quiet base with a clean airport run.</li>
      </ol>

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
        <h2 className="font-serif text-3xl text-stone-50">Long stay in Kensington?</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">WhatsApp Ali with dates and party size. We'll match you to the right unit — 1-bed for solo / couple, 2-bed for family.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20long%20stay%20in%20Kensington.%20Dates%3A%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
          <Link href="/locations/kensington-hammersmith" className="inline-flex items-center justify-center rounded-full border border-stone-50/40 px-6 py-3 text-stone-50 hover:border-stone-50 transition">Kensington area page</Link>
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
