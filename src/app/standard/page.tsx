import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Staylio Standard — our operational promises",
  description:
    "What Staylio actually does, in writing. Response time SLAs, maintenance turnaround, check-in process, cleaning cadence, billing reliability. Photographable promises competitors can't fake.",
};

const PROMISES = [
  {
    category: "Response time",
    promises: [
      {
        promise: "Direct enquiries answered in under 15 minutes during UK hours.",
        detail:
          "WhatsApp Ali on +44 7375 621453 or email hello@staylio.london between 08:00–22:00 UK time. Median response in 2026 to date: 6 minutes. Outside hours, response within 4 hours of the next UK morning.",
      },
      {
        promise: "Booking quotes confirmed within one business day.",
        detail:
          "From first enquiry to confirmed availability + final all-in rate. No quote-then-update-the-rate. The number Ali sends is the number on the invoice.",
      },
    ],
  },
  {
    category: "Stay operations",
    promises: [
      {
        promise: "Apartments ready at 16:00 on the day of arrival; checkout by 11:00.",
        detail:
          "Standard times. Early check-in (from 12:00) and late checkout (to 15:00) available on request, subject to the next guest's arrival. WhatsApp Ali in advance.",
      },
      {
        promise: "Self check-in instructions sent 24 hours before arrival.",
        detail:
          "Most apartments use a smart lock — code arrives by WhatsApp the day before. A few apartments use in-person key handover at a time the guest picks. The mode is confirmed at booking, not at the door.",
      },
      {
        promise: "Wi-Fi tested live in the apartment within 7 days of every guest arrival.",
        detail:
          "If the connection has dropped or the speed has fallen below 100 Mbps on test, it's fixed before the next guest checks in. Speed test screenshot available on request.",
      },
    ],
  },
  {
    category: "Maintenance",
    promises: [
      {
        promise: "Critical maintenance (heating, hot water, security) responded to within 2 hours.",
        detail:
          "Critical = no heating in winter, no hot water for >12 hours, door / window security compromise, water leak. Responded means an engineer is on the way or a like-for-like alternative apartment is offered for the night.",
      },
      {
        promise: "Non-critical maintenance (appliance fault, light bulb, slow drain) within 24 hours.",
        detail:
          "Engineer on-site or replacement equipment delivered within one working day of report. WhatsApp the issue + a photo to Ali.",
      },
    ],
  },
  {
    category: "Housekeeping",
    promises: [
      {
        promise: "Apartment cleaned end-to-end before every new guest arrival.",
        detail:
          "Linens and towels replaced, kitchen reset, bathroom deep-cleaned, fridge emptied of previous-guest items. Checked by a second team-member against a written list before keys are released.",
      },
      {
        promise: "Mid-stay clean on long stays — fortnightly by default, more often on request.",
        detail:
          "Long stays (14+ nights) get a free mid-stay clean scheduled to suit the guest. Additional cleans are available on request at a published per-clean rate.",
      },
    ],
  },
  {
    category: "Billing",
    promises: [
      {
        promise: "Monthly invoicing on long stays — no surprise charges on departure.",
        detail:
          "Long stays are invoiced monthly. The invoice splits the standard-rated portion and the long-stay-relief portion separately per HMRC Notice 709/3 (see our long-stay tax guide). Damages or extras are itemised and notified within 48 hours of checkout.",
      },
      {
        promise: "Direct rates always at least 10% lower than the same apartment on Booking.com or Airbnb.",
        detail:
          "We do not pay platform commission on direct bookings; the saving goes to the guest. If you find the same Staylio apartment cheaper elsewhere, we match it.",
      },
      {
        promise: "All bills included in the nightly rate.",
        detail:
          "Electricity, water, heating, Wi-Fi, council tax, fresh linens and towels. No utility surcharges, no resort fees, no cleaning add-on at checkout.",
      },
    ],
  },
  {
    category: "Data + privacy",
    promises: [
      {
        promise: "Guest data held for the legal minimum, not the marketing maximum.",
        detail:
          "Booking and stay records: 6 years (HMRC tax retention). Marketing-list opt-in is explicit, never assumed. Right-to-erasure honoured within 30 days of request. ICO registration is in progress for Staylio Limited (Tier 1, Q3 2026).",
      },
    ],
  },
] as const;

export default function StandardPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-stone-500">The Staylio Standard</p>
      <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900">
        What we actually do.
      </h1>
      <p className="mt-6 text-lg text-stone-700 leading-relaxed max-w-2xl">
        This is what Staylio promises in writing. Print it, screenshot it, send it to your
        procurement team. Every promise here is an operational SLA we hold ourselves to —
        not a marketing line. If we ever break one, tell{" "}
        <a className="underline underline-offset-4 hover:text-stone-900" href="mailto:hello@staylio.london">
          hello@staylio.london
        </a>{" "}
        and we&rsquo;ll make it right.
      </p>

      <div className="mt-16 space-y-14">
        {PROMISES.map((bucket) => (
          <section key={bucket.category}>
            <h2 className="font-serif text-3xl text-stone-900">{bucket.category}</h2>
            <ul className="mt-6 space-y-7">
              {bucket.promises.map((p) => (
                <li key={p.promise} className="border-l-2 border-stone-300 pl-5">
                  <p className="font-medium text-stone-900">{p.promise}</p>
                  <p className="mt-2 text-stone-700 leading-relaxed">{p.detail}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-20 border-t border-stone-200 pt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-stone-900">Why this page exists</h2>
          <p className="mt-3 text-stone-700 leading-relaxed">
            Most serviced-apartment marketing pages sell vibe. We sell vibe too — boutique, curated,
            warm. But when you&rsquo;re trusting an operator with a 6-week relocation or a corporate
            project team, vibe stops mattering at about night three. What matters is what happens
            when the Wi-Fi drops, or when you need an extra clean, or when a procurement
            spreadsheet asks &ldquo;what&rsquo;s their SLA?&rdquo;. This page is the answer.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-stone-900">For corporate procurement</h2>
          <p className="mt-3 text-stone-700 leading-relaxed">
            If your travel programme requires written supplier SLAs, these are ours. Happy to
            paper them into a Master Services Agreement on request — see our{" "}
            <Link href="/corporate" className="underline underline-offset-4 hover:text-stone-900">
              corporate stays page
            </Link>{" "}
            or contact{" "}
            <a className="underline underline-offset-4 hover:text-stone-900" href="mailto:hello@staylio.london">
              hello@staylio.london
            </a>
            .
          </p>
        </div>
      </div>

      <p className="mt-16 text-xs text-stone-500">
        Published 5 June 2026 by Staylio Limited (Companies House 17012831). Reviewed quarterly.
        Last operational audit: 5 June 2026.
      </p>
    </article>
  );
}
