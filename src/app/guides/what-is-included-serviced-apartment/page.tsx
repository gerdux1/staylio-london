import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "what-is-included-serviced-apartment";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "What is included in a serviced apartment? The full Staylio list";
const DESCRIPTION =
  "A serviced apartment bundles bills, linens, kitchen, laundry, and housekeeping into one nightly rate. Here's exactly what's in a Staylio apartment from the moment you walk in, including the items most guests don't think to ask about until night three.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/guides/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/guides/${SLUG}`, type: "article" },
};

const INCLUSIONS = [
  { category: "Kitchen", items: "Oven, induction or gas hob, full-size fridge-freezer, dishwasher, microwave, kettle, toaster, sharp knives, cookware (pots, pans, baking trays), utensils, crockery for 4-6, glassware (wine, water, mugs), tea towels, dish brush, washing-up liquid, dishwasher tabs" },
  { category: "Pantry starter", items: "Salt, pepper, olive oil, sugar, tea bags, instant coffee, cling film, foil, kitchen roll" },
  { category: "Sleeping", items: "Made-up beds with fresh linen on arrival, duvet (4.5 tog summer, 13.5 tog winter), spare pillow per bed, extra duvet on request, bedside lamps" },
  { category: "Bathroom", items: "Bath towels, hand towels, face cloths, bath mat, shampoo, conditioner, body wash, hand soap, hairdryer, toilet paper starter, cotton pads, dental glass" },
  { category: "Laundry", items: "In-unit washer-dryer, washing detergent, fabric softener, iron, ironing board, clothes drying rack, basket, clothes pegs" },
  { category: "Connectivity & entertainment", items: "Full-speed broadband Wi-Fi (50+ Mbps typical), smart TV with sign-in for Netflix/Disney+/Prime, HDMI cable, USB charging points by every bed and the desk" },
  { category: "Workspace", items: "Real desk (not a kitchen table makeshift), desk chair, desk lamp, hidden cable management" },
  { category: "Climate", items: "Central heating (included in rate), fan in summer, opening windows, blackout blinds or curtains" },
  { category: "Cleaning supplies", items: "All-surface spray, glass cleaner, bin liners, sponges, dust cloth, vacuum cleaner, mop &amp; bucket" },
  { category: "Bills (all included)", items: "Electricity, water (hot &amp; cold), heating, full-speed Wi-Fi, council tax, TV licence, buildings insurance (operator)" },
  { category: "Safety", items: "Smoke detector, carbon-monoxide detector, fire blanket, emergency-contact card, smart lock or key handover, secure double-glazing on most windows" },
  { category: "Service", items: "WhatsApp number with named human, ~15 min response UK hours, fortnightly housekeeping on long stays, extras at flat fee on request" },
  { category: "Personal touches", items: "Local-area guide with the operator's actual coffee/dinner recommendations, nearest tube/bus stop card, hello-on-arrival WhatsApp message" },
];

const FAQS = [
  {
    question: "Do I need to bring anything?",
    answer:
      "Personal toiletries you're particular about, your favourite kitchen tools if you're a serious cook, and your laptop charger. Everything else is in the apartment. Most guests arrive with hand luggage only.",
  },
  {
    question: "What's NOT included in a Staylio apartment?",
    answer:
      "Groceries, restaurant meals, taxis, theatre tickets — the obvious ones. Mid-week extra cleans beyond the included fortnightly clean (small flat fee). Long-distance phone calls. Beach towels (we're in London). A car parking space (apartment-specific; some have, most don't).",
  },
  {
    question: "Is there enough for a four-person family?",
    answer:
      "Yes. Towels and linens for the stated max occupancy. Crockery and cutlery for 4-6. Cot and high chair available on request when you book. If you need a fifth person sometimes, message us and we'll bring extras.",
  },
  {
    question: "How does the smart TV work?",
    answer:
      "Sign in with your own streaming credentials (Netflix, Disney+, Prime). The apartment doesn't carry account subscriptions — you'd be signing into someone else's, which streamings tend not to allow. Standard freeview channels work without sign-in.",
  },
  {
    question: "Will the Wi-Fi handle video calls?",
    answer:
      "Yes. We run full-speed broadband (50+ Mbps download is the baseline; most apartments are 100-500 Mbps). Zoom, Teams, Google Meet all work without buffering at HD. We don't run an artificial 'free tier' that throttles your speed.",
  },
  {
    question: "Are toiletries refilled during a long stay?",
    answer:
      "Starter shampoo / conditioner / body wash / hand soap are full-size and last 2-4 weeks. Topped up at every fortnightly housekeeping visit. For preferred brands or larger sizes, the nearest Boots or Tesco is usually 3-5 minutes' walk.",
  },
];

export default function WhatIsIncludedGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: ["what is included in a serviced apartment", "serviced apartment inclusions", "what's provided serviced apartment London", "serviced apartment amenities checklist"],
            about: "Serviced apartment inclusions checklist",
          }),
          faqSchema(FAQS),
        ]}
      />
      <p className="text-sm uppercase tracking-widest text-stone-500">Guides · Basics</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Published 6 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">Ali Hassan</Link>, Direct Bookings Lead · 5 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          You walk in, drop your bag, and start living. The kitchen is fully stocked. The
          bed is made. The bills are paid. Wi-Fi works the moment you join the SSID. There
          is detergent in the washer-dryer and toilet paper on the holder. Bring your
          clothes, your laptop, your toothbrush — leave the rest.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">The full inclusion list, by category</h2>
      <div className="mt-6 space-y-6">
        {INCLUSIONS.map((c) => (
          <div key={c.category} className="rounded-2xl border border-stone-200 bg-white p-5">
            <p className="text-xs uppercase tracking-widest text-stone-500">{c.category}</p>
            <p className="mt-2 text-stone-700 leading-relaxed text-sm">{c.items}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Why this matters</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        The unspoken cost of a hotel for any stay longer than three nights is the
        accumulation of small things you didn't think to pack — a wooden spoon for the
        kitchenette, a phone charger, a screwdriver to fix the loose cabinet hinge. In
        a serviced apartment, you don't accumulate. Everything is already there.
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        For business travellers, this matters because it removes about an hour of
        admin per day on a four-week stay. For relocators, it's the difference between
        an interim that feels like camping and one that feels like a soft landing into
        a new city.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Where Staylio fits</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Every Staylio apartment runs to this standard inclusion list. Browse the{" "}
        <Link href="/apartments" className="underline underline-offset-4 hover:text-stone-900">catalogue</Link>{" "}
        for unit-specific extras (some have additional appliances, balconies, or
        parking — listed per unit), or read{" "}
        <Link href="/guides/what-is-a-serviced-apartment" className="underline underline-offset-4 hover:text-stone-900">what is a serviced apartment</Link>{" "}
        for the broader definition.
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
        <h2 className="font-serif text-3xl text-stone-50">Arrive, drop your bag, start living.</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">WhatsApp Ali — every apartment in the catalogue runs to this standard.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20I%27d%20like%20a%20Staylio%20apartment.%20Dates%3A%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
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
