import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "are-bills-included-serviced-apartments";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "Are bills included in a serviced apartment?";
const DESCRIPTION =
  "Yes — at Staylio, every nightly rate bundles electricity, water, heating, Wi-Fi, and council tax. Here's exactly what's in and out, why bills-included is standard for serviced apartments (not for Airbnb or long-let), and the corporate-accounting upside.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/guides/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/guides/${SLUG}`, type: "article" },
};

const FAQS = [
  {
    question: "What exactly is included in the Staylio nightly rate?",
    answer:
      "Electricity, water, heating, Wi-Fi, and council tax — all in. Plus fresh linens and towels, full bath and kitchen toiletries on arrival, smart-lock entry, and fortnightly housekeeping on long stays. No daily resort fee, no Wi-Fi tier upgrade, no charge for the kettle or the iron.",
  },
  {
    question: "What is NOT included?",
    answer:
      "Groceries, restaurant meals, taxis, theatre tickets — the obvious ones. Also: extra mid-week cleans beyond the included fortnightly one (priced as a small flat fee), and any per-night extra-guest supplement if you exceed the apartment's stated max occupancy. Long-distance phone calls aren't included either, because nobody makes those any more.",
  },
  {
    question: "Why don't Airbnb hosts usually bundle bills the same way?",
    answer:
      "Airbnb hosts often run as individuals subletting their own home, and their meters stay in their name. Bundling utilities into the nightly rate makes their tax position more complicated. Serviced-apartment operators run as licensed businesses with commercial meters and a single tax structure, so bundling is straightforward and lets us advertise an all-in rate.",
  },
  {
    question: "What happens with council tax for long stays?",
    answer:
      "Staylio absorbs council tax inside the nightly rate. You will not receive a council-tax bill, and you do not need to register with the local authority. For longer holiday-let stays under 90 nights, the apartment is exempt from individual council-tax liability under Local Government Finance Act provisions; for stays beyond that, Staylio handles the longer-term liability via the building's commercial classification. Either way, no admin lands on you.",
  },
  {
    question: "What's the per-night value of having bills bundled?",
    answer:
      "Roughly £8-15 per night for a 1-bed apartment in Central London once you add up electricity (£3-5), water (£1-2), heating in winter (£2-5), Wi-Fi (£1), and council tax pro-rated (£1-2). On a 14-night stay that's £112-210 you don't pay separately. Most guests notice it most in winter when central-London hotels start adding £20-40 'heating premium' surcharges.",
  },
  {
    question: "Can my employer claim back bills as expenses?",
    answer:
      "Bills bundled into accommodation are usually treated by procurement teams as part of the accommodation cost line, not as separate utilities. That's simpler than reclaiming individual utility receipts. The invoice we send shows one all-in nightly rate plus VAT (after night 28 the VAT effective rate drops 80% per HMRC rules) — easier to push through expense systems than ten separate receipts.",
  },
];

export default function AreBillsIncludedGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: ["are bills included serviced apartments", "do serviced apartments include bills", "serviced apartment all bills included London", "council tax serviced apartment"],
            about: "Bills included in a serviced apartment nightly rate",
          }),
          faqSchema(FAQS),
        ]}
      />
      <p className="text-sm uppercase tracking-widest text-stone-500">Guides · Cost</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Published 6 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">Ali Hassan</Link>
        , Direct Bookings Lead · 5 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          Yes. At Staylio, the nightly rate bundles electricity, water, heating, Wi-Fi, and council
          tax. You arrive, drop your bags, and never see a utility bill or a heating supplement
          for the whole stay. It is the single biggest hidden saving versus a 4-star Central
          London hotel in winter, and it is the main reason long-stay accommodation expenses are
          simpler than long-let rentals.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">What's bundled, line by line</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
            <tr>
              <th className="py-2 pr-4 text-left">Bill</th>
              <th className="py-2 pr-4 text-left">In or out?</th>
              <th className="py-2 text-left">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            <tr><td className="py-3 pr-4 font-medium">Electricity</td><td className="py-3 pr-4">In</td><td className="py-3">Run the dishwasher, the dryer, the hair-dryer. No meter readings.</td></tr>
            <tr><td className="py-3 pr-4 font-medium">Water (hot &amp; cold)</td><td className="py-3 pr-4">In</td><td className="py-3">London is metered. We absorb it.</td></tr>
            <tr><td className="py-3 pr-4 font-medium">Central heating</td><td className="py-3 pr-4">In</td><td className="py-3">Turn it up in January. We pay the gas bill.</td></tr>
            <tr><td className="py-3 pr-4 font-medium">Wi-Fi</td><td className="py-3 pr-4">In</td><td className="py-3">Full-speed broadband (no "premium tier" upcharge like hotels).</td></tr>
            <tr><td className="py-3 pr-4 font-medium">Council tax</td><td className="py-3 pr-4">In</td><td className="py-3">No bill lands on you. No local-authority registration.</td></tr>
            <tr><td className="py-3 pr-4 font-medium">TV licence</td><td className="py-3 pr-4">In</td><td className="py-3">Watch live TV without paperwork.</td></tr>
            <tr><td className="py-3 pr-4 font-medium">Buildings insurance</td><td className="py-3 pr-4">In (operator)</td><td className="py-3">We carry it. Personal contents are your responsibility.</td></tr>
            <tr><td className="py-3 pr-4 font-medium">Cleaning supplies</td><td className="py-3 pr-4">In (starter pack)</td><td className="py-3">Washing-up liquid, dishwasher tabs, surface spray, bin liners.</td></tr>
            <tr><td className="py-3 pr-4 font-medium">Linens &amp; towels</td><td className="py-3 pr-4">In</td><td className="py-3">Fresh on arrival; refreshed at every housekeeping visit.</td></tr>
            <tr><td className="py-3 pr-4 font-medium">Mid-stay extra cleans</td><td className="py-3 pr-4">Out (flat fee)</td><td className="py-3">Add via WhatsApp; charged at a small fixed rate per visit.</td></tr>
            <tr><td className="py-3 pr-4 font-medium">Groceries / restaurants / taxis</td><td className="py-3 pr-4">Out</td><td className="py-3">Same as anywhere.</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Why this matters more than it sounds</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        The honest version: bills-included is a hidden saving worth £8-15 a night in Central
        London, and it removes about an hour of admin per week (no meter readings, no top-ups, no
        council-tax registration, no Wi-Fi-tier upgrade dialogue with a hotel front desk). For a
        14-night stay that is £112-210 you do not pay separately, plus seven hours of life back.
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        For corporate bookers, it also matters because procurement teams treat the bundled rate as
        a single accommodation expense — easier to authorise, easier to reconcile, easier to
        compare across cities. See the{" "}
        <Link href="/guides/long-stay-tax-london" className="underline underline-offset-4 hover:text-stone-900">28-night VAT threshold guide</Link>{" "}
        for how the bundled rate interacts with HMRC's long-stay accommodation rules.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Where Staylio fits</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Browse the{" "}
        <Link href="/apartments" className="underline underline-offset-4 hover:text-stone-900">catalogue</Link>{" "}
        — every listing's rate is the all-in nightly figure. Corporate bookers head to{" "}
        <Link href="/corporate" className="underline underline-offset-4 hover:text-stone-900">/corporate</Link>{" "}
        for PO terms and monthly invoicing, or read{" "}
        <Link href="/guides/what-is-a-serviced-apartment" className="underline underline-offset-4 hover:text-stone-900">what is a serviced apartment</Link>{" "}
        for the full definition.
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
        <h2 className="font-serif text-3xl text-stone-50">All-in rate, no surprises.</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">WhatsApp Ali for the apartment, the dates, and the one number that covers all of it.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20I%27m%20looking%20at%20bills-included%20serviced%20apartments.%20Can%20you%20send%20me%20a%20shortlist%3F" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
          <Link href="/apartments" className="inline-flex items-center justify-center rounded-full border border-stone-50/40 px-6 py-3 text-stone-50 hover:border-stone-50 transition">Browse apartments</Link>
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
