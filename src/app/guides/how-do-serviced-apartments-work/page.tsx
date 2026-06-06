import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "how-do-serviced-apartments-work";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "How do serviced apartments work? The full process, end to end";
const DESCRIPTION =
  "Serviced apartments are let by a professional operator on a flexible licence — not a tenancy. Here's the full flow from browsing the catalogue to checking out, including the legal framework, payment, check-in, in-stay support, and extension.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/guides/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/guides/${SLUG}`, type: "article" },
};

const STEPS = [
  { n: 1, title: "Browse the catalogue", body: "Pick a neighbourhood, a bedroom count, and a date range. Most operators list a from-rate per night; the firm number comes back once you share dates because pricing flexes with demand. At Staylio you can browse 40+ apartments across 7 Central London areas without signing in." },
  { n: 2, title: "Enquire — WhatsApp, email, or form", body: "Send your dates, area shortlist, party size, and any specifics (cot, parking, ground floor). Reply usually within 15 minutes during UK hours. We send a shortlist of 2-3 units with photos and the direct rate — not a price-comparison engine result, an actual unit-by-unit answer." },
  { n: 3, title: "Confirm and pay via Stripe", body: "Once you pick a unit, we send a Stripe payment link. Card or Apple/Google Pay. The deposit/full-payment split depends on stay length: short stays usually full payment; longer stays often a deposit and monthly schedule. Corporate clients can run on PO and monthly invoicing instead." },
  { n: 4, title: "Receive arrival info", body: "Within minutes of payment, we send the apartment address, the smart-lock code (or in-person key handover instructions), and a one-page guide with Wi-Fi, heating, dishwasher, and emergency-contact details. You arrive when you arrive — there's no front desk to make." },
  { n: 5, title: "Live in the apartment", body: "Cook, work, sleep, repeat. Housekeeping is included fortnightly on long stays; extra cleans via WhatsApp at a small flat fee. If anything breaks, message the guest-service line and someone usually turns up within hours." },
  { n: 6, title: "Extend or check out", body: "Want to stay longer? WhatsApp Ali — extensions are routine and the long-stay rate applies automatically once you cross one week. Check-out is usually just leaving the keys on the table; the smart-lock auto-disables at the end of your stay." },
];

const FAQS = [
  {
    question: "What's the legal framework — is it a tenancy?",
    answer:
      "No. Serviced apartments are let under a licence (short-term occupation agreement), not an assured shorthold tenancy. The operator retains the right to enter for cleaning and maintenance; you have the right to occupy for the booked dates. This is what keeps the stay flexible — no notice period, no deposit dispute, no Section 21 timeline.",
  },
  {
    question: "How is payment handled — daily, weekly, or upfront?",
    answer:
      "Short stays (3-13 nights): full payment at booking. Medium stays (14-89 nights): typically 50% on booking + balance at check-in, or a fortnightly schedule. Long stays (90+ nights): often a monthly direct-debit schedule with two months upfront. Corporate clients run on PO and 30-day invoicing instead. We send a Stripe link or an invoice; whichever fits.",
  },
  {
    question: "What happens if something breaks during my stay?",
    answer:
      "Message the guest-service WhatsApp line. For urgent things (no heating, no hot water, a broken lock) someone usually turns up within hours during UK hours and a contractor within 24 hours otherwise. For non-urgent things (a tap drips, the dishwasher's quieter than usual) we batch them into the next housekeeping visit.",
  },
  {
    question: "Can I check in late at night or on the weekend?",
    answer:
      "Yes — that's one of the main reasons serviced apartments exist. Smart-lock apartments let you arrive any hour; we send the code by WhatsApp before you fly. For the apartments that use in-person key handover, we coordinate with you on arrival window. No reception-desk staffing hours.",
  },
  {
    question: "What about cleaning and laundry?",
    answer:
      "Every apartment has an in-unit washer-dryer with detergent supplied. Housekeeping is fortnightly on long stays (included), and you can add extra mid-week cleans via WhatsApp at a small flat fee. We bring fresh linens and towels at every housekeeping visit; we do not remove your laundry to clean it externally.",
  },
  {
    question: "Can I cook? Properly cook?",
    answer:
      "Yes. Every Staylio kitchen has an oven, hob, full-size fridge-freezer, dishwasher, kettle, toaster, microwave, cookware, utensils, crockery, glassware, and starter pantry items (salt, pepper, oil). Cooking a Sunday roast is realistic. Some apartments have additional appliances (rice cooker, blender) — listed per unit.",
  },
];

export default function HowDoServicedApartmentsWorkGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: ["how do serviced apartments work", "serviced apartment process", "booking a serviced apartment", "serviced apartment check-in"],
            about: "Serviced apartment booking and stay process",
          }),
          faqSchema(FAQS),
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How a serviced apartment stay works",
            description: "The six-step process from browsing to check-out at a Central London serviced apartment.",
            totalTime: "PT60M",
            step: STEPS.map((s) => ({ "@type": "HowToStep", position: s.n, name: s.title, text: s.body })),
          },
        ]}
      />
      <p className="text-sm uppercase tracking-widest text-stone-500">Guides · Basics</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Published 6 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">Ali Hassan</Link>, Direct Bookings Lead · 6 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          You browse the catalogue, WhatsApp the dates, get a shortlist back in 15 minutes, pay via
          Stripe, receive the smart-lock code, walk in whenever you land, live in the flat, and
          leave the keys on the table. The whole arc takes about an hour of your time across the
          whole stay — most of it on the first day.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">The six-step flow</h2>
      <ol className="mt-8 space-y-8">
        {STEPS.map((s) => (
          <li key={s.n} className="relative pl-16">
            <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 text-stone-50 font-serif text-xl">{s.n}</span>
            <h3 className="font-serif text-xl text-stone-900">{s.title}</h3>
            <p className="mt-3 text-stone-700 leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">What makes the process work</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Three operational things separate a smooth serviced-apartment stay from a frustrating one:
      </p>
      <ol className="mt-6 space-y-4 text-stone-700 leading-relaxed">
        <li><span className="font-medium text-stone-900">Direct contact.</span> One WhatsApp thread for the whole stay, with one human (not a queue) replying in 15 minutes. No ticket numbers, no escalation paths.</li>
        <li><span className="font-medium text-stone-900">Operational ownership.</span> The operator holds the lease and the keys and the cleaning contract. There's no host-vs-platform finger-pointing when something breaks.</li>
        <li><span className="font-medium text-stone-900">Standardised inclusions.</span> You know what is in the apartment without checking each listing — see our{" "}
          <Link href="/guides/are-bills-included-serviced-apartments" className="underline underline-offset-4 hover:text-stone-900">bills-included guide</Link>{" "}
          and{" "}
          <Link href="/guides/what-is-a-serviced-apartment" className="underline underline-offset-4 hover:text-stone-900">what's-inside guide</Link>.
        </li>
      </ol>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">When to start the process</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Short stays (3-7 nights): 2-4 weeks ahead for popular dates, less for last-minute. Medium
        stays (1-4 weeks): 4-6 weeks ahead in busy seasons. Long stays (1+ months): 6-8 weeks
        ahead, especially for 2-bed apartments in Marylebone and Kensington where inventory turns
        slower. Outside these windows, the right answer is usually a quick WhatsApp message —
        we'll tell you honestly whether to book now or wait.
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
        <h2 className="font-serif text-3xl text-stone-50">Ready to start the process?</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">Send Ali your dates and area. Step 2 takes about thirty seconds on your end.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20can%20you%20send%20me%20a%20shortlist%3F%20Dates%3A%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
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
