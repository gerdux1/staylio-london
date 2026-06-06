import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "long-stay-regents-park-marylebone";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "Long-stay serviced apartments in Regent's Park & Marylebone";
const DESCRIPTION =
  "Marylebone is Staylio's largest concentration — about a dozen apartments across Georgian townhouses and mansion blocks. Honest guide to long stays in the area: tube access, the actual maths after 28 nights, neighbourhood character, and which Staylio units fit which stay.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/guides/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/guides/${SLUG}`, type: "article" },
};

const FAQS = [
  {
    question: "Why pick Marylebone for a long stay over Mayfair or Kensington?",
    answer:
      "Three reasons: quieter (residential, not stewarded), tube-rich (Baker Street, Bond Street, Marylebone, Regent's Park, Edgware Road within 5-10 min walk), and the largest Staylio inventory means real choice on the specific apartment. Mayfair is more prestige-priced; Kensington further out for City meetings.",
  },
  {
    question: "What's the long-stay price step-down at Staylio Marylebone?",
    answer:
      "Long-stay pricing steps down at one week (~5-10% off the per-night rate) and again at one month (~15-25% off). For stays of 28+ continuous nights in the same apartment, HMRC's 80% VAT reduction also applies — so the effective rate drops further. Quote the dates and we'll send the maths.",
  },
  {
    question: "How is Marylebone for working from?",
    answer:
      "Good. Every Staylio apartment has a real desk, full-speed Wi-Fi (50+ Mbps), and quiet residential streets. Several great coffee shops (Monocle, Workshop, Caravan within 10 min) for changes of scenery. Marylebone Library on Marylebone Road has free study space. Regent's Park benches for taking calls outdoors in summer.",
  },
  {
    question: "Is Marylebone good for families on relocation?",
    answer:
      "Yes — especially for primary-school-age children. Regent's Park is a 5-10 min walk for nearly every apartment, with playgrounds, the boating lake, and the Zoo. Marylebone High Street has the kind of independent food shops that make weekly cooking enjoyable. Several international schools have catchment in the area (American School in London, North Bridge House, Wetherby).",
  },
  {
    question: "What about gym access?",
    answer:
      "Gymbox at Bank Building is the closest gym chain. Equinox at Kensington-High Street is the premium pick. Several smaller boutique studios (1Rebel, Frame, Barry's) within 10-15 min by tube. For pool access, Seymour Leisure Centre on Seymour Place is the closest council pool.",
  },
  {
    question: "What about heating and bills in winter?",
    answer:
      "Bundled. Heating is in the rate, no separate utility bill, no meter readings. Marylebone winter heating costs would otherwise add £80-150 to a typical 1-bed monthly bill — you don't pay it separately at Staylio.",
  },
];

export default function LongStayMaryleboneGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: ["long stay serviced apartments marylebone", "monthly apartment marylebone", "marylebone serviced apartment", "regents park serviced apartment long stay"],
            about: "Long-stay serviced apartments in Regent's Park & Marylebone, London",
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
          Marylebone is the heart of the Staylio portfolio. Quiet streets, Regent's Park
          at the end of nearly every road, tube-rich (five lines within walking distance),
          and the largest inventory choice. Long-stay pricing steps down at one week and
          again at one month, and the HMRC 80% VAT relief kicks in from night 28 —
          making it one of the most tax-efficient London neighbourhoods to base in for
          a one-to-six-month stay.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Why Marylebone works for long stays</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Three things make Marylebone a long-stay sweet spot:
      </p>
      <ol className="mt-6 space-y-5 text-stone-700 leading-relaxed">
        <li>
          <span className="font-medium text-stone-900">Residential not stewarded.</span>{" "}
          Mayfair and parts of Knightsbridge have a curated, almost-corporate feel after
          a few weeks. Marylebone has actual residents — families on the school run,
          dogs being walked, lights in flat windows on a Tuesday evening. That residential
          texture makes a month-long stay feel like living somewhere, not staying somewhere.
        </li>
        <li>
          <span className="font-medium text-stone-900">Tube access is unusually generous.</span>{" "}
          Baker Street (Bakerloo, Circle, Jubilee, H&amp;C, Metropolitan), Bond Street (Central,
          Jubilee, Elizabeth), Marylebone (Bakerloo, Chiltern), Regent's Park (Bakerloo),
          Edgware Road (Bakerloo, Circle, H&amp;C). Five tube stops within 10 minutes' walk
          of nearly every Staylio Marylebone apartment.
        </li>
        <li>
          <span className="font-medium text-stone-900">Inventory choice.</span> About a
          dozen apartments — Georgian townhouse studios, mansion-block 1-beds, and a couple
          of 2-bed family units. Largest single-area concentration in the Staylio portfolio,
          so we can match you to the specific apartment that fits the stay.
        </li>
      </ol>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">The long-stay maths</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
            <tr>
              <th className="py-2 pr-4 text-left">Stay length</th>
              <th className="py-2 pr-4 text-right">Per-night band (1-bed)</th>
              <th className="py-2 text-right">Effective discount vs nightly</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            <tr><td className="py-3 pr-4">3-6 nights (short)</td><td className="py-3 pr-4 text-right">£190-240</td><td className="py-3 text-right">Baseline</td></tr>
            <tr><td className="py-3 pr-4">7-27 nights (weekly+)</td><td className="py-3 pr-4 text-right">£175-220</td><td className="py-3 text-right">~8-10%</td></tr>
            <tr><td className="py-3 pr-4">28-89 nights (monthly + HMRC VAT relief)</td><td className="py-3 pr-4 text-right">£140-175</td><td className="py-3 text-right">~25-30%</td></tr>
            <tr><td className="py-3 pr-4">90+ nights (multi-month)</td><td className="py-3 pr-4 text-right">£130-160 (negotiable)</td><td className="py-3 text-right">~30-35%</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-stone-700 leading-relaxed text-sm">
        Bands are indicative for the Marylebone 1-bed inventory in mid-2026. Final rate
        comes back on enquiry with exact dates. All bands include all bills + Wi-Fi +
        fortnightly housekeeping + council tax. See the{" "}
        <Link href="/guides/long-stay-tax-london" className="underline underline-offset-4 hover:text-stone-900">long-stay tax guide</Link>{" "}
        for the HMRC mechanics and the{" "}
        <Link href="/guides/serviced-apartment-council-tax" className="underline underline-offset-4 hover:text-stone-900">council tax explainer</Link>{" "}
        for why your bill is £0.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Where in Marylebone Staylio operates</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        The portfolio sits roughly between Edgware Road in the west and Great Portland
        Street in the east, between Marylebone Road in the north and Wigmore Street in
        the south. Most apartments are on quiet residential side streets — the kind
        of address where you can take a phone call from a window and hear traffic
        only faintly. Browse them on the{" "}
        <Link href="/locations/regents-park-marylebone" className="underline underline-offset-4 hover:text-stone-900">Regent's Park &amp; Marylebone area page</Link>{" "}
        for the specific neighbourhood character, transport, and the dozen apartments
        on offer.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Who picks Marylebone</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Three audiences book Marylebone most often for long stays:
      </p>
      <ol className="mt-6 space-y-4 text-stone-700 leading-relaxed">
        <li><span className="font-medium text-stone-900">Family relocators</span> who want a residential neighbourhood with school options and Regent's Park within stroller distance.</li>
        <li><span className="font-medium text-stone-900">Project consultants and executives</span> doing 4-12 week engagements who value quiet evenings and easy West End access.</li>
        <li><span className="font-medium text-stone-900">Writers, sabbaticals, and longer-term visitors</span> who want a real London neighbourhood for a month or two, not a hotel-shaped one.</li>
      </ol>

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
        <h2 className="font-serif text-3xl text-stone-50">Long stay in Marylebone?</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">Tell Ali your dates and the specifics. He'll match you to the right Marylebone apartment within the day.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20long%20stay%20in%20Marylebone.%20Dates%3A%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
          <Link href="/locations/regents-park-marylebone" className="inline-flex items-center justify-center rounded-full border border-stone-50/40 px-6 py-3 text-stone-50 hover:border-stone-50 transition">Marylebone area page</Link>
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
