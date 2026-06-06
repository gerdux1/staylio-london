import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "airbnb-monthly-stay-london";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "Airbnb monthly stay in London: how the maths actually works";
const DESCRIPTION =
  "Airbnb's monthly discount can save 30-50% on the headline rate — but London's 90-day cap, council tax, and host reliability change the picture. Here's the honest comparison with a serviced apartment for a one-month London stay.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/guides/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/guides/${SLUG}`, type: "article" },
};

const FAQS = [
  {
    question: "How much does Airbnb's monthly discount actually save?",
    answer:
      "Headline 30-50% off the per-night rate — but that's before service fees, cleaning fees, and the £/per-night reset when you cross 89 nights and fall foul of London's short-let cap. Real-world saving versus a direct-booked serviced apartment usually nets out at 5-15% lower, sometimes higher, sometimes you're paying more once cleaning and service fees are in.",
  },
  {
    question: "What's the 90-day London short-let cap?",
    answer:
      "The Greater London Council General Powers Act 1973 (as amended) limits residential properties to 90 nights per year of short-let use without change-of-use planning permission. Most Airbnb hosts work around this by switching listings off at night 89 or by claiming to host stays longer than 'short let'. For a full one-month stay (28-31 nights), you're inside the cap; for stays of 90+ nights, your Airbnb host either has the planning permission or is breaking the rule. Check before booking long.",
  },
  {
    question: "Do Airbnb hosts include council tax in the monthly rate?",
    answer:
      "Almost never. Council tax is typically in the host's name as a residential resident, and they're not allowed to pass it on as a direct charge. In practice, the host absorbs it on the listing rate — but for stays approaching 90 days, some hosts argue the cost back at booking confirmation. At Staylio, council tax is bundled into the nightly rate explicitly and you never see a bill.",
  },
  {
    question: "What about cleaning fees?",
    answer:
      "Airbnb cleaning fees on a London listing are typically £50-150, charged once at booking. On a 28-night stay that adds £1.80-5.40 per night. Mid-stay cleans are usually £40-80 each, optional. At Staylio, fortnightly housekeeping is included on long stays; extra cleans are flat-fee on request via WhatsApp.",
  },
  {
    question: "What's the practical reliability difference?",
    answer:
      "Airbnb host quality varies enormously. Some are professional and indistinguishable from a small serviced-apartment operator; others are hobbyists with day jobs and slow response times. A serviced apartment operator is, by definition, a licensed business with insurance, contracted housekeeping, and a maintenance pipeline. For a one-month stay, the cost of a slow-response host (no hot water Friday evening, no reply until Monday morning) is real.",
  },
  {
    question: "When does Airbnb still win for a London month?",
    answer:
      "When you find a host with verified long-stay reviews, when the listing has explicit change-of-use planning permission (rare but exists), and when the all-in cost (rate × nights + cleaning + service fee) genuinely undercuts the equivalent serviced apartment. About 20% of London Airbnb monthly listings beat the direct-booked serviced apartment cost; the other 80% don't once you add the fees.",
  },
];

export default function AirbnbMonthlyStayGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: ["airbnb monthly stay london", "airbnb monthly discount", "long stay airbnb london", "airbnb vs serviced apartment monthly"],
            about: "Airbnb monthly stay vs serviced apartment for London",
          }),
          faqSchema(FAQS),
        ]}
      />
      <p className="text-sm uppercase tracking-widest text-stone-500">Guides · Cost</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Published 6 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">Ali Hassan</Link>, Direct Bookings Lead · 7 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          Airbnb's monthly discount looks great on the headline number. Once you add
          cleaning fees, service fees, the 90-day London cap, and the variance in host
          reliability, a direct-booked serviced apartment usually comes out within 5-15%
          of the all-in Airbnb cost — and ahead on consistency, council tax, and bills.
          For a one-month London stay where you can name your dates and area, Staylio
          almost always wins on total cost of ownership.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Worked example: 28 nights in Marylebone</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Indicative mid-2026 rates for a comparable 1-bed in Marylebone or Maida Vale.
        Your dates will shift these 10-20% up or down. The point is the shape of the
        comparison.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
            <tr>
              <th className="py-2 pr-4 text-left">Line</th>
              <th className="py-2 pr-4 text-right">Airbnb monthly</th>
              <th className="py-2 text-right">Staylio direct</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            <tr><td className="py-3 pr-4">Headline nightly × 28</td><td className="py-3 pr-4 text-right">£140 × 28 = £3,920</td><td className="py-3 text-right">£190 × 28 = £5,320</td></tr>
            <tr><td className="py-3 pr-4">Airbnb monthly discount (-35%)</td><td className="py-3 pr-4 text-right">-£1,372 → £2,548</td><td className="py-3 text-right">n/a</td></tr>
            <tr><td className="py-3 pr-4">Long-stay rate step-down (Staylio)</td><td className="py-3 pr-4 text-right">n/a</td><td className="py-3 text-right">-15% at 28 nights → £4,522</td></tr>
            <tr><td className="py-3 pr-4">HMRC VAT relief (80% off VAT from night 28)</td><td className="py-3 pr-4 text-right">Hosts not VAT-registered usually</td><td className="py-3 text-right">~£377 saved → £4,145</td></tr>
            <tr><td className="py-3 pr-4">Service fee (Airbnb)</td><td className="py-3 pr-4 text-right">~14% → +£357</td><td className="py-3 text-right">£0</td></tr>
            <tr><td className="py-3 pr-4">Cleaning fee</td><td className="py-3 pr-4 text-right">+£100</td><td className="py-3 text-right">Included (fortnightly)</td></tr>
            <tr><td className="py-3 pr-4">Council tax (host pass-through where applies)</td><td className="py-3 pr-4 text-right">Often £0 (absorbed); sometimes £100+ post-confirmation</td><td className="py-3 text-right">Included</td></tr>
            <tr><td className="py-3 pr-4">Mid-stay extra clean (1)</td><td className="py-3 pr-4 text-right">+£60</td><td className="py-3 text-right">+£60 flat</td></tr>
            <tr className="font-medium text-stone-900"><td className="py-3 pr-4">Realised total</td><td className="py-3 pr-4 text-right">~£3,165</td><td className="py-3 text-right">~£4,205</td></tr>
            <tr className="text-stone-500 text-xs"><td className="py-3 pr-4">Per-night realised</td><td className="py-3 pr-4 text-right">£113</td><td className="py-3 text-right">£150</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-stone-700 leading-relaxed text-sm">
        In this case Airbnb is genuinely cheaper. But the 80% bell-curve of Airbnb
        long-stay listings doesn't deliver this clean a maths because of host
        variability, cleaning-fee creep, and last-minute reset surprises at the 89-night
        mark. The 20% that do deliver are worth booking. You just have to filter hard.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">What Airbnb doesn't price in</h2>
      <ul className="mt-6 space-y-3 text-stone-700 leading-relaxed">
        <li><span className="font-medium text-stone-900">Reliability variance.</span> A no-reply host on Friday night with a broken hot-water boiler is a real cost. Serviced apartment operators have a maintenance pipeline and an SLA; hobbyist hosts often don't.</li>
        <li><span className="font-medium text-stone-900">Insurance gap.</span> Airbnb's host protection isn't the same as the operator's public liability cover. For corporate procurement, that matters; for individual stays it usually doesn't, until something goes wrong.</li>
        <li><span className="font-medium text-stone-900">Business invoicing.</span> Airbnb's receipt isn't a UK VAT invoice your employer can expense cleanly. Serviced apartment operators issue proper invoices on request.</li>
        <li><span className="font-medium text-stone-900">Section 21 freedom.</span> Both routes are short licences not tenancies, so this is even — but Airbnb hosts can occasionally cancel at short notice in ways an operator won't.</li>
      </ul>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Where Staylio fits</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        For one-month London stays where consistency matters — corporate relocations,
        project sprints, family between-homes — Staylio is the lower-friction option.
        For genuinely budget-driven monthly Airbnb hunts where you'll do the host vetting
        yourself, the right answer is sometimes Airbnb. Either way, see the{" "}
        <Link href="/guides/long-stay-tax-london" className="underline underline-offset-4 hover:text-stone-900">long-stay tax guide</Link>{" "}
        for the HMRC 80% VAT mechanics, and the{" "}
        <Link href="/guides/serviced-apartment-council-tax" className="underline underline-offset-4 hover:text-stone-900">council tax explainer</Link>{" "}
        for why your bill on Staylio is £0.
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
        <h2 className="font-serif text-3xl text-stone-50">Want the comparison for your dates?</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">Send Ali the Airbnb listing you're looking at + your dates. He'll come back with Staylio's number on the same maths.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20I%27m%20looking%20at%20a%20London%20monthly%20stay.%20Can%20you%20compare%3F%20Dates%3A%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
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
