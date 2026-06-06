import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "long-stay-fitzrovia-mayfair";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "Long-stay serviced apartments in Fitzrovia & Mayfair";
const DESCRIPTION =
  "Fitzrovia and Mayfair are London's PE / VC / luxury / legal corridor. For long stays, that means premium addresses, walking-distance Bond Street / Charlotte Street meetings, and a markedly higher rate. Here's the honest long-stay guide.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/guides/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/guides/${SLUG}`, type: "article" },
};

const FAQS = [
  {
    question: "Why pick Mayfair / Fitzrovia for a long stay?",
    answer:
      "Walking distance to nearly every PE firm, VC house, prestige law firm, and management consultancy in London. Bond Street and Charlotte Street meetings without a tube ride. Theatre, fine dining, and Hyde Park within five minutes of most apartments. The address itself counts in some industries.",
  },
  {
    question: "Is Fitzrovia / Mayfair expensive for a long stay?",
    answer:
      "Yes. Premium versus Marylebone or Maida Vale by 25-40% per night. The address and the inventory class explain most of it; some operators add a 'prestige tax' too. For 1-2 week stays, often worth the premium if your meetings cluster here. For 1-3 month stays, Marylebone is usually the better economic call with similar tube access.",
  },
  {
    question: "What's Staylio's Fitzrovia/Mayfair long-stay maths?",
    answer:
      "Premium tier of the portfolio: 1-bed rates start around £245-310/night base and drop to £200-250 on a monthly stay (28+ nights with HMRC VAT relief). Smaller inventory than Marylebone — usually one or two units available at a time. Quote your dates and we'll send what's free.",
  },
  {
    question: "Tube access?",
    answer:
      "Bond Street (Central, Jubilee, Elizabeth), Oxford Circus (Bakerloo, Central, Victoria), Tottenham Court Road (Central, Northern, Elizabeth), Green Park (Jubilee, Piccadilly, Victoria), Goodge Street (Northern). Elizabeth-line from Bond Street to Heathrow in 26 minutes; to Canary Wharf in 14.",
  },
  {
    question: "Who picks Mayfair for a long stay?",
    answer:
      "Private equity partners on relocations, VC partners between funds, prestige-firm legal teams on multi-week matters, family offices managing UK property exposure, and luxury brand executives on London rotations. Less common: tech and creative — they tend to base in Shoreditch or Marylebone.",
  },
  {
    question: "Is it noisy?",
    answer:
      "Surprisingly not. Mayfair side streets are residential, quiet, and well-policed. Charlotte Street Fitzrovia is busier on Thursday-Saturday evenings but still nothing like Soho. Staylio's units sit on the calmer streets, not the headline ones.",
  },
];

export default function LongStayMayfairGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: ["long stay serviced apartments mayfair", "fitzrovia serviced apartment monthly", "mayfair monthly apartment london"],
            about: "Long-stay serviced apartments in Fitzrovia & Mayfair, London",
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
          Fitzrovia and Mayfair are London's premium business corridor. Walking distance
          to PE, VC, legal, and luxury-brand offices. The rate reflects it — 25-40%
          above Marylebone. Worth it for 1-2 week stays where your meetings cluster
          here. For 1-3 month stays where you'd rather save the premium and tube three
          stops, Marylebone is usually the smarter long-stay call.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Why Mayfair works for the right long stay</h2>
      <ol className="mt-6 space-y-5 text-stone-700 leading-relaxed">
        <li><span className="font-medium text-stone-900">Meeting density.</span> Every London PE house, most VC firms, all prestige legal practices, most management consultancies — within 10 minutes' walk. Charlotte Street is the advertising-and-creative spine.</li>
        <li><span className="font-medium text-stone-900">Elizabeth-line connectivity.</span> Bond Street to Heathrow in 26 minutes, to Canary Wharf in 14. Mayfair gets the same Elizabeth-line advantage as Farringdon.</li>
        <li><span className="font-medium text-stone-900">Lifestyle on the doorstep.</span> Berkeley Square Gardens, Hyde Park, Bond Street, the Wallace Collection, the West End theatres. For long stays where evenings matter as much as days, hard to beat.</li>
      </ol>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">The long-stay maths</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500"><tr><th className="py-2 pr-4 text-left">Stay length</th><th className="py-2 pr-4 text-right">Per-night band (1-bed)</th><th className="py-2 text-right">Effective discount</th></tr></thead>
          <tbody className="divide-y divide-stone-200">
            <tr><td className="py-3 pr-4">3-6 nights (short)</td><td className="py-3 pr-4 text-right">£245-310</td><td className="py-3 text-right">Baseline</td></tr>
            <tr><td className="py-3 pr-4">7-27 nights (weekly+)</td><td className="py-3 pr-4 text-right">£225-285</td><td className="py-3 text-right">~8-10%</td></tr>
            <tr><td className="py-3 pr-4">28-89 nights (monthly + HMRC VAT)</td><td className="py-3 pr-4 text-right">£185-230</td><td className="py-3 text-right">~25-30%</td></tr>
            <tr><td className="py-3 pr-4">90+ nights (multi-month)</td><td className="py-3 pr-4 text-right">£170-210 (negotiable)</td><td className="py-3 text-right">~30-35%</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Where Staylio operates</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">Smaller portfolio than Marylebone — typically one or two units available at a time, on quiet Mayfair side streets and Fitzrovia residential blocks. Browse on the{" "}<Link href="/locations/fitzrovia-mayfair" className="underline underline-offset-4 hover:text-stone-900">Fitzrovia &amp; Mayfair area page</Link>.</p>

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
        <h2 className="font-serif text-3xl text-stone-50">Long stay in Mayfair?</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">Send Ali your dates. If a Marylebone unit serves your meetings just as well at less cost, he'll say so.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20long%20stay%20in%20Mayfair%2FFitzrovia.%20Dates%3A%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
          <Link href="/locations/fitzrovia-mayfair" className="inline-flex items-center justify-center rounded-full border border-stone-50/40 px-6 py-3 text-stone-50 hover:border-stone-50 transition">Mayfair area page</Link>
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
