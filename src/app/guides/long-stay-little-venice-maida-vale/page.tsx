import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "long-stay-little-venice-maida-vale";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "Long-stay serviced apartments in Little Venice & Maida Vale";
const DESCRIPTION =
  "Maida Vale is London's underrated residential pocket — Edwardian mansion blocks, the Regent's Canal, Lord's Cricket Ground around the corner. Paddington one stop for Heathrow Express. Honest long-stay guide for writers, longer stays, and Heathrow-heavy travellers.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/guides/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/guides/${SLUG}`, type: "article" },
};

const FAQS = [
  {
    question: "Why pick Maida Vale for a long stay?",
    answer:
      "Quietest residential pocket in Zone 1 / 2. Edwardian mansion-block flats, the Regent's Canal towpath at the end of most streets, Lord's Cricket Ground next door. Bakerloo line to Oxford Circus in four stops; Paddington one stop for Heathrow Express in 15 minutes. The 'live like a Londoner' option of the portfolio.",
  },
  {
    question: "How does Maida Vale compare to Marylebone?",
    answer:
      "Sister neighbourhoods. Marylebone is more central and busier; Maida Vale is more residential and quieter. For 1-3 month stays where evenings matter, Maida Vale often feels more like 'living' than Marylebone. For workday meeting access, Marylebone has the edge by one tube stop.",
  },
  {
    question: "What's the long-stay maths in Maida Vale?",
    answer:
      "1-bed monthly realised around £150-185/night. Cheaper than Marylebone by 10-15% for similar quality of mansion-block 1-beds. Pricing structure unchanged: 5-10% off at one week, 15-25% at one month, plus HMRC's 80% VAT relief from night 28.",
  },
  {
    question: "Tube access and airport runs?",
    answer:
      "Warwick Avenue (Bakerloo), Maida Vale (Bakerloo), Paddington (Bakerloo, Circle, District, H&C, Elizabeth, Heathrow Express). Heathrow Express from Paddington in 15 minutes is the area's superpower. Bakerloo to Oxford Circus in 8 minutes for West End meetings.",
  },
  {
    question: "Who picks Maida Vale?",
    answer:
      "Writers and academics on month-long retreats. Longer-stay relocators who want a real residential neighbourhood without central London noise. Heathrow-heavy executives who want a quiet base and easy airport runs. Families looking for an alternative to Marylebone with more space per pound.",
  },
  {
    question: "Anything to do nearby?",
    answer:
      "Regent's Canal towpath walks to Camden Lock in 30 minutes or to Little Venice basin in 5. Clifton Nurseries (the oldest garden centre in London). Lord's Cricket Ground for summer Test matches. Marylebone in 15 minutes' walk; Notting Hill in 20.",
  },
];

export default function LongStayMaidaValeGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: ["long stay serviced apartments maida vale", "little venice serviced apartment", "monthly apartment maida vale london"],
            about: "Long-stay serviced apartments in Little Venice & Maida Vale, London",
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
          Maida Vale is the quietest neighbourhood in the Staylio portfolio.
          Mansion-block flats, canal walks, Heathrow Express from Paddington in 15
          minutes, Bakerloo to Oxford Circus in 8. For 1-3 month stays where you want
          to feel like a Londoner rather than a visitor, hard to beat.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Why Maida Vale works for long stays</h2>
      <ol className="mt-6 space-y-5 text-stone-700 leading-relaxed">
        <li><span className="font-medium text-stone-900">Genuine residential character.</span> No reception desks, no aparthotel lobbies, no clusters of tourists. Edwardian mansion blocks where people live actual lives.</li>
        <li><span className="font-medium text-stone-900">Heathrow Express edge.</span> Paddington one stop, then 15 minutes to LHR. For fly-in / fly-out execs and monthly-return-home stays, this is the area's selling point.</li>
        <li><span className="font-medium text-stone-900">Canal towpath.</span> Walking and running options most central London areas can't match. Towpath to Camden in 30 minutes; to Little Venice basin in 5; to Marylebone in 15.</li>
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
      <p className="mt-4 text-stone-700 leading-relaxed">Across Maida Vale's mansion-block streets, with most units within 10 minutes of Warwick Avenue or Maida Vale tube. Browse on the{" "}<Link href="/locations/little-venice-maida-vale" className="underline underline-offset-4 hover:text-stone-900">Little Venice &amp; Maida Vale area page</Link>.</p>

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
        <h2 className="font-serif text-3xl text-stone-50">Long stay in Maida Vale?</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">WhatsApp Ali — quiet mansion block on Warrington Crescent or canal-facing on Blomfield Road, he'll match the apartment to the stay.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20long%20stay%20in%20Maida%20Vale.%20Dates%3A%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
          <Link href="/locations/little-venice-maida-vale" className="inline-flex items-center justify-center rounded-full border border-stone-50/40 px-6 py-3 text-stone-50 hover:border-stone-50 transition">Maida Vale area page</Link>
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
