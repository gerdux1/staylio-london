import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema } from "@/lib/schema";

const SLUG = "long-stay-tax-london";
const PUBLISHED = "2026-06-05T00:00:00Z";
const HEADLINE = "Long-stay accommodation tax: the 28-night threshold";
const DESCRIPTION =
  "Why corporate clients save 20 % VAT after night 29 in a UK serviced apartment, what evidence HMRC actually wants, and how procurement should structure a relocation booking to qualify.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  openGraph: { title: HEADLINE, description: DESCRIPTION, type: "article" },
};

export default function LongStayTaxGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: [
              "long stay London tax",
              "28-night VAT serviced apartment",
              "corporate housing VAT UK",
              "HMRC long stay accommodation",
              "relocation tax UK",
            ],
            about: "https://www.gov.uk/vat-businesses",
          }),
        ]}
      />

      <p className="text-sm uppercase tracking-widest text-stone-500">Guides · Cost</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Published 5 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">
          Ali Hassan
        </Link>
        , Direct Bookings Lead · 8 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          A continuous stay of 29 nights or more in the same UK serviced apartment triggers a reduced-VAT
          treatment under HMRC&rsquo;s long-stay accommodation rules. Effective VAT drops from 20 % to
          roughly 4 % from night 29 onwards. This is not a discount the operator can choose to give —
          it&rsquo;s a statutory adjustment. To qualify, the booking must be a single, continuous stay
          for the same guest in the same unit. Splitting the same trip across two reservations
          forfeits the relief.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">The rule, exactly</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        UK VAT Notice 709/3 — &ldquo;Hotels and holiday accommodation&rdquo; — sets out a long-stay
        treatment commonly called the &ldquo;28-day rule&rdquo;. Past the 28-night mark of a continuous
        stay, the supply value attributable to facilities (cleaning, reception, services) stays VAT-able,
        but the value attributable to the room itself becomes exempt. In practice operators apply a
        ratio that brings effective VAT on the nightly rate to roughly 4 % from night 29 onwards.
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        The Notice has been in force since 1995 in substantially this form. It is not new, not
        optional, and not negotiable — but it is widely under-claimed because procurement teams
        don&rsquo;t always know it exists, and operators don&rsquo;t always apply it automatically.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">What it&rsquo;s worth in money</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Take a typical Central London serviced apartment at £180/night including 20 % VAT.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
            <tr>
              <th className="py-2 pr-4 text-left">Stay length</th>
              <th className="py-2 pr-4 text-right">Headline rate/night</th>
              <th className="py-2 pr-4 text-right">Effective VAT</th>
              <th className="py-2 text-right">Total tax cost</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            <tr>
              <td className="py-3 pr-4">14 nights</td>
              <td className="py-3 pr-4 text-right">£180</td>
              <td className="py-3 pr-4 text-right">20 % throughout</td>
              <td className="py-3 text-right">£420</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">28 nights</td>
              <td className="py-3 pr-4 text-right">£180</td>
              <td className="py-3 pr-4 text-right">20 % throughout</td>
              <td className="py-3 text-right">£840</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">42 nights</td>
              <td className="py-3 pr-4 text-right">£180</td>
              <td className="py-3 pr-4 text-right">20 % then ~4 % from N29</td>
              <td className="py-3 text-right">£884</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">84 nights</td>
              <td className="py-3 pr-4 text-right">£180</td>
              <td className="py-3 pr-4 text-right">20 % then ~4 % from N29</td>
              <td className="py-3 text-right">£1,260</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Compare that 84-night line against a naïve 20 %-throughout calculation (£2,520) and the
        relocation is roughly £1,260 cheaper in tax alone. That gap widens at higher nightly rates and
        longer stays — a 6-month corporate posting at £250/night saves around £4,500 in VAT versus the
        equivalent hotel booking, where the relief doesn&rsquo;t apply because rooms are typically rebooked
        rather than continuously occupied.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">What HMRC wants to see</h2>
      <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-6">
        <li>
          <strong className="font-medium text-stone-900">One booking, one apartment, one guest.</strong>{" "}
          A 60-night stay across two adjacent flats does not qualify even if the guest is the same.
          Procurement should book the whole stay in one reservation.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Continuous occupation.</strong> If the guest
          leaves for a week and returns, the clock restarts. Brief weekends home (Friday evening to
          Sunday evening) generally don&rsquo;t break the clock, but anything beyond a few days does.
        </li>
        <li>
          <strong className="font-medium text-stone-900">An invoice that shows the split.</strong>{" "}
          The operator&rsquo;s invoice should show the standard-rated portion and the exempted portion
          separately. If you&rsquo;re a finance manager reviewing serviced-apartment invoices and don&rsquo;t
          see this split, ask the operator to reissue.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Same legal entity throughout.</strong>{" "}
          If a guest&rsquo;s employer changes mid-stay or the invoice payer switches companies, the
          continuous-stay test can be questioned. Document any change in writing.
        </li>
      </ul>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">How to structure the booking</h2>
      <ol className="mt-4 space-y-3 text-stone-700 leading-relaxed list-decimal pl-6">
        <li>
          <strong className="font-medium text-stone-900">Book the full estimated stay up-front,</strong>{" "}
          not week-by-week. Most operators will hold the rate for a defined window and bill monthly in
          arrears.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Ask the operator in writing</strong> if they
          apply the 28-night HMRC rule automatically. If they say &ldquo;no&rdquo; or &ldquo;we don&rsquo;t
          do that&rdquo;, they should — push back or pick a different operator.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Confirm the cancellation/early-departure
          terms separately.</strong> Operators usually need at least 7 days notice for an early
          departure to keep the relief intact.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Get the invoice issued at month-end, not
          stay-end.</strong> Long stays span tax periods; monthly invoices make the VAT split easier
          to follow.
        </li>
      </ol>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Common mistakes</h2>
      <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-6">
        <li>
          <strong className="font-medium text-stone-900">Splitting the stay between two flats for
          &ldquo;variety&rdquo;.</strong> Costs the relief. If the guest needs a different
          neighbourhood for the second month, take the hit or accept the standard-rated VAT.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Booking through an OTA that won&rsquo;t
          issue a proper invoice.</strong> Booking.com&rsquo;s standard guest invoice doesn&rsquo;t
          break out the long-stay split. Book direct or via a corporate travel platform that does.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Assuming the discount is the same as the
          relief.</strong> Operators often quote a discounted nightly rate for stays over 28 nights;
          that&rsquo;s a commercial discount, not the VAT relief. You can have both at the same time.
        </li>
      </ul>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">How Staylio handles it</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Every Staylio long-stay booking is invoiced monthly with the standard-rated portion and the
        exempted portion shown separately, so your finance team has a clean audit trail. If you&rsquo;re
        a corporate procurement team and you&rsquo;d like a worked example for a specific stay length —
        4 weeks, 6 weeks, 12 weeks — WhatsApp{" "}
        <a className="underline underline-offset-4 hover:text-stone-900" href="https://wa.me/447375621453">
          Ali on +44 7375 621453
        </a>{" "}
        or email{" "}
        <a className="underline underline-offset-4 hover:text-stone-900" href="mailto:hello@staylio.london">
          hello@staylio.london
        </a>{" "}
        with your dates and apartment size. We&rsquo;ll send a per-night and per-month breakdown showing
        what your finance team will see on the invoice.
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        See also our{" "}
        <Link href="/corporate" className="underline underline-offset-4 hover:text-stone-900">
          corporate stays page
        </Link>{" "}
        for monthly billing on PO terms.
      </p>

      <div className="mt-16 border-t border-stone-200 pt-6 text-xs text-stone-500 leading-relaxed">
        This guide is general information published by a serviced-apartment operator, not regulated
        tax advice. Confirm the application of long-stay VAT to your specific arrangement with your
        accountant or HMRC. Reference: HMRC{" "}
        <a
          className="underline underline-offset-4 hover:text-stone-900"
          href="https://www.gov.uk/government/publications/vat-notice-7093-hotels-and-holiday-accommodation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Notice 709/3 (Hotels and holiday accommodation)
        </a>
        .
      </div>
    </article>
  );
}
