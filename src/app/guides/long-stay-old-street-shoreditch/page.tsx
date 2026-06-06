import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "long-stay-old-street-shoreditch";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "Long-stay serviced apartments in Old Street & Shoreditch";
const DESCRIPTION =
  "Shoreditch is Staylio's second-largest concentration — warehouse conversions and design-led flats across the tech corridor. Honest guide to long stays in the area: who books, the actual maths after 28 nights, and which Staylio units fit which stay.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/guides/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/guides/${SLUG}`, type: "article" },
};

const FAQS = [
  {
    question: "Why pick Shoreditch for a long stay over Marylebone or Farringdon?",
    answer:
      "Shoreditch wins if your meetings are tech, design, or VC — Silicon Roundabout, Google's London HQ, and most engineering-led startups sit between Old Street and Liverpool Street. Marylebone is quieter; Farringdon is closer to the traditional City; Shoreditch puts you in the middle of the founder corridor with brick warehouse aesthetics and a 7-minute walk to Liverpool Street.",
  },
  {
    question: "Is Shoreditch quiet enough for a long stay?",
    answer:
      "Side streets yes; high streets no. Curtain Road, Hoxton Square, and Brick Lane proper are loud at night, especially Thursday-Saturday. Set back one street from those — Charlotte Road, Calvert Avenue, Bath Street — and it's residential. Staylio's Shoreditch units sit on the residential side streets. Specific addresses come with the shortlist when you enquire.",
  },
  {
    question: "What's the long-stay price step-down at Staylio Shoreditch?",
    answer:
      "Same structure as the rest of the portfolio: 5-10% at one week, 15-25% at one month, plus HMRC's 80% VAT relief from night 28. Indicative 1-bed monthly rate lands around £160-200/night realised. The Shoreditch warehouse-conversion 1-beds sit in a similar band to the Marylebone Georgian portfolio.",
  },
  {
    question: "Tube access?",
    answer:
      "Old Street (Northern), Liverpool Street (Central, Circle, H&C, Elizabeth, Metropolitan, National Rail to Stansted), Shoreditch High Street (Overground), Hoxton (Overground), and Bethnal Green (Central) within 10 minutes' walk of most Staylio Shoreditch apartments. Elizabeth line from Liverpool Street to Canary Wharf in 9 minutes; to Paddington in 14.",
  },
  {
    question: "Is Shoreditch good for working from?",
    answer:
      "Excellent. Every apartment has a real desk + full-speed Wi-Fi. Plus the area is dense with cafés that welcome laptops: Allpress on Redchurch, Workshop on Charlotte Road, Caravan on King's Cross Road (one stop). Multiple WeWork and Second Home locations within 5 minutes if you want a day-pass desk.",
  },
  {
    question: "What about gyms and food shopping?",
    answer:
      "Gymbox on Old Street, 1Rebel on Threadneedle Street (10 min on the Northern line). Marks & Spencer Simply Food at Liverpool Street; Sainsbury's on Old Street; Whole Foods at Shoreditch Box Park. Brick Lane Sunday market for groceries with character.",
  },
];

export default function LongStayShoreditchGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: ["long stay serviced apartments shoreditch", "monthly apartment shoreditch", "old street serviced apartment", "shoreditch serviced apartment long stay"],
            about: "Long-stay serviced apartments in Old Street & Shoreditch, London",
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
          Shoreditch is the founder corridor. Brick walls, sash windows, 7-minute walk
          to Liverpool Street, and the Elizabeth line to Canary Wharf in 9 minutes.
          Staylio's Shoreditch units sit on residential side streets one block back
          from the loud bits, so you get the area's character without the Curtain Road
          weekend noise. Long-stay pricing steps down at one week and again at one
          month; HMRC's 80% VAT relief kicks in from night 28.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Why Shoreditch works for long stays</h2>
      <ol className="mt-6 space-y-5 text-stone-700 leading-relaxed">
        <li><span className="font-medium text-stone-900">Meeting density.</span> Google, Meta, Visa, Amazon, and most London-based scale-ups have offices between Old Street and Liverpool Street. If your week is mostly meetings with engineers, founders, or growth teams, you'll walk to nearly all of them.</li>
        <li><span className="font-medium text-stone-900">Elizabeth line connectivity.</span> Liverpool Street puts you on the new Elizabeth line: Canary Wharf in 9 minutes, Paddington in 14, Heathrow in 35. Game-changing for fly-in / fly-out weeks.</li>
        <li><span className="font-medium text-stone-900">Aesthetic.</span> Warehouse conversions, exposed brick, big windows. Different from the Marylebone Georgian quietness — energetic in a way that fits some long stays better than corporate-design aparthotels.</li>
      </ol>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">The long-stay maths</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
            <tr><th className="py-2 pr-4 text-left">Stay length</th><th className="py-2 pr-4 text-right">Per-night band (1-bed)</th><th className="py-2 text-right">Effective discount</th></tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            <tr><td className="py-3 pr-4">3-6 nights (short)</td><td className="py-3 pr-4 text-right">£180-225</td><td className="py-3 text-right">Baseline</td></tr>
            <tr><td className="py-3 pr-4">7-27 nights (weekly+)</td><td className="py-3 pr-4 text-right">£165-205</td><td className="py-3 text-right">~8-10%</td></tr>
            <tr><td className="py-3 pr-4">28-89 nights (monthly + HMRC VAT)</td><td className="py-3 pr-4 text-right">£135-165</td><td className="py-3 text-right">~25-30%</td></tr>
            <tr><td className="py-3 pr-4">90+ nights (multi-month)</td><td className="py-3 pr-4 text-right">£125-150 (negotiable)</td><td className="py-3 text-right">~30-35%</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-stone-700 leading-relaxed text-sm">All bands include all bills + Wi-Fi + fortnightly housekeeping + council tax. See the{" "}<Link href="/guides/long-stay-tax-london" className="underline underline-offset-4 hover:text-stone-900">long-stay tax guide</Link>{" "}for HMRC mechanics.</p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Where Staylio operates in Shoreditch</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">Roughly between Old Street roundabout and Liverpool Street, with most units on the quieter side streets — Calvert Avenue, Bath Street, Hackney Road residential blocks. Browse them on the{" "}<Link href="/locations/old-street-shoreditch" className="underline underline-offset-4 hover:text-stone-900">Old Street &amp; Shoreditch area page</Link>.</p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Who picks Shoreditch</h2>
      <ol className="mt-6 space-y-4 text-stone-700 leading-relaxed">
        <li><span className="font-medium text-stone-900">Founders mid-fundraise</span> — staying near the VC firms in Bishopsgate / Spitalfields while pitching.</li>
        <li><span className="font-medium text-stone-900">Engineering teams on residency</span> — 2-12 week sprints at Google, Meta, or scale-up clients.</li>
        <li><span className="font-medium text-stone-900">Design and creative consultants</span> on multi-week briefs with agencies in the corridor.</li>
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
        <h2 className="font-serif text-3xl text-stone-50">Long stay in Shoreditch?</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">WhatsApp Ali with the dates and the specifics. He'll match you to the side street, not the loud one.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20long%20stay%20in%20Shoreditch.%20Dates%3A%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
          <Link href="/locations/old-street-shoreditch" className="inline-flex items-center justify-center rounded-full border border-stone-50/40 px-6 py-3 text-stone-50 hover:border-stone-50 transition">Shoreditch area page</Link>
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
