import Link from "next/link";
import { LISTINGS, LOCATIONS } from "@/lib/listings";
import { JsonLd, breadcrumb, faqSchema, bookDirectHowToSchema, speakableSchema } from "@/lib/schema";

// Common pre-booking concerns answered above the fold (audit feedback).
// Renders to both visible accordion AND FAQPage Schema.org for AI search citation.
const HOMEPAGE_FAQS = [
  {
    question: "How long can I stay?",
    answer:
      "Minimum stay is 3 nights. There is no maximum — we host weekly stays, month-long projects, and multi-month relocations. Pricing steps down for stays of one week or more.",
  },
  {
    question: "What is included in the price?",
    answer:
      "Every nightly rate includes electricity, water, heating, Wi-Fi, council tax, fresh linens and towels, fitted kitchen, and smart TV with streaming. Housekeeping available on request; included on long stays. Self check-in (smart lock on most apartments, in-person key handover on the rest). No surprise charges on departure.",
  },
  {
    question: "How does check-in work?",
    answer:
      "Self check-in. Most apartments use a smart lock — you receive your access code by WhatsApp before arrival so you can arrive any hour. A few use in-person key handover at a convenient time. Either way, no reception-desk wait.",
  },
  {
    question: "Are families and groups welcome?",
    answer:
      "Yes. Several Staylio apartments have two or more bedrooms and sleep up to nine guests. Cots and high chairs available on request when you book.",
  },
  {
    question: "Why book direct instead of Booking.com or Airbnb?",
    answer:
      "Our direct rate is always at least 10% lower than the same apartment on Booking.com or Airbnb, because we don't pay platform commission. You also get a real person on WhatsApp for the whole stay, not a platform support queue.",
  },
  {
    question: "Can I extend my stay?",
    answer:
      "Yes, subject to availability. Message Ali on WhatsApp at any point during your stay and we will check the calendar. Long-stay pricing applies automatically once your stay crosses one week.",
  },
] as const;

const USPS = [
  {
    title: "Fully equipped from day one",
    body:
      "Every apartment comes with a fitted kitchen, fast Wi-Fi, smart TV, fresh linens, and toiletries. Move in and start living straight away.",
  },
  {
    title: "Strategic London locations",
    body:
      "From Regent's Park and Marylebone to Shoreditch, Kensington, and Little Venice. Positioned for easy commutes and weekend exploration.",
  },
  {
    title: "Long-stay friendly",
    body:
      "Book for three nights or three months. Our pricing steps down for stays of one week or more, with no penalty for extending.",
  },
  {
    title: "Personal guest support",
    body:
      "Our team are real people who respond quickly and actually solve problems. No call centres. No ticket numbers.",
  },
  {
    title: "All bills included",
    body:
      "Electricity, water, heating, Wi-Fi, council tax. All in the price. One simple rate with no surprise charges.",
  },
  {
    title: "Self check-in",
    body:
      "Arrive on your schedule. Smart lock on most apartments lets you check in any time; the rest use in-person key handover at a time that works for you.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumb([{ name: "Home", url: "https://staylio.london" }]),
          faqSchema([...HOMEPAGE_FAQS]),
          bookDirectHowToSchema(),
          speakableSchema("https://staylio.london"),
        ]}
      />

      <section className="relative isolate min-h-[85vh] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=2000&q=80"
          alt="Tower Bridge, London at sunset"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/30 to-stone-900/70" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-end px-6 pb-24 pt-32 text-white">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-stone-200">London serviced apartments</p>
            <h1 className="mt-4 font-serif text-5xl sm:text-7xl lg:text-8xl leading-[1.02]">
              Live in London on your own terms.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-stone-100">
              Fully equipped apartments with everything you need, whether you are here for a week, a
              month, or longer. More space than a hotel. More freedom than a rental.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/apartments"
                className="inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-medium text-stone-900 hover:bg-stone-100 transition"
              >
                Browse apartments
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white px-7 py-3 text-sm font-medium text-white hover:bg-white hover:text-stone-900 transition"
              >
                Enquire now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-stone-500">Why guests choose Staylio</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">
          More than a place to sleep.
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {USPS.map((u) => (
            <div key={u.title}>
              <h3 className="font-serif text-2xl text-stone-900">{u.title}</h3>
              <p className="mt-3 text-stone-600 leading-relaxed">{u.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm uppercase tracking-widest text-stone-500">Featured apartments</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">A space for every stay.</h2>
            </div>
            <Link href="/apartments" className="text-sm font-medium text-stone-900 underline underline-offset-4">
              View all apartments →
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {LISTINGS.slice(0, 6).map((l) => (
              <Link
                key={l.slug}
                href={`/apartments/${l.slug}`}
                className="group rounded-2xl overflow-hidden bg-white border border-stone-200 hover:shadow-lg transition"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={l.heroImage}
                  alt={`${l.title} interior`}
                  className="aspect-[4/3] w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-stone-500">{l.areaLabel}</p>
                  <h3 className="mt-2 font-serif text-2xl text-stone-900 group-hover:underline underline-offset-4">
                    {l.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600">{l.shortDescription}</p>
                  <div className="mt-4 flex justify-between text-sm text-stone-700">
                    <span>
                      {l.bedrooms > 0 ? `${l.bedrooms} bed` : "Studio"} · {l.bathrooms} bath{l.sizeSqm > 0 ? ` · ${l.sizeSqm} sqm` : ""}
                    </span>
                    <span className="font-medium text-stone-900">Save 10% or more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-stone-500">Strategic London locations</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">Seven neighbourhoods, one operator.</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group relative overflow-hidden rounded-2xl h-96"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={loc.heroImage}
                alt={loc.label}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/85 via-stone-900/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-7 text-white">
                <p className="text-xs uppercase tracking-widest text-stone-200">
                  ~{loc.propertyCountApprox} apartments
                </p>
                <h3 className="mt-2 font-serif text-3xl">{loc.label}</h3>
                <p className="mt-2 text-sm text-stone-100 line-clamp-3">{loc.description}</p>
                <p className="mt-4 text-sm font-medium underline underline-offset-4">
                  Explore {loc.shortLabel} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-stone-900 text-stone-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm uppercase tracking-widest text-stone-400">Serviced apartments vs hotels</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">More room. Lower cost. Real kitchens.</h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-stone-700 text-sm uppercase tracking-widest text-stone-400">
                  <th className="py-4 pr-6">Feature</th>
                  <th className="py-4 pr-6">Staylio apartment</th>
                  <th className="py-4">Typical hotel</th>
                </tr>
              </thead>
              <tbody className="text-stone-100">
                {[
                  ["Average living space", "45–80 sqm", "20–30 sqm"],
                  ["Private kitchen", "Yes, fully equipped", "No"],
                  ["In-unit laundry", "Yes", "No"],
                  ["Cost for one-week-plus stay", "15–20% less", "Standard rate"],
                  ["Guest support", "Named team members", "Reception desk"],
                  ["Family suitability", "Excellent, multi-bedroom", "Limited"],
                  ["Direct rate vs Booking.com / Airbnb", "Always 10% lower (no commission)", "Same rate, plus fees"],
                ].map(([f, s, h]) => (
                  <tr key={f} className="border-b border-stone-800 last:border-0">
                    <td className="py-4 pr-6 text-stone-300">{f}</td>
                    <td className="py-4 pr-6">{s}</td>
                    <td className="py-4 text-stone-400">{h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12">
            <Link
              href="/apartments-vs-hotels"
              className="inline-flex items-center text-sm font-medium text-stone-100 underline underline-offset-4"
            >
              See the full comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust signals — real, no fabricated ratings (CMA fake-review compliance) */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-3 text-center">
          <div>
            <p className="font-serif text-5xl text-stone-900">7</p>
            <p className="mt-2 text-sm text-stone-600">Central London neighbourhoods</p>
          </div>
          <div>
            <p className="font-serif text-5xl text-stone-900">40+</p>
            <p className="mt-2 text-sm text-stone-600">Apartments under one operator</p>
          </div>
          <div>
            <p className="font-serif text-5xl text-stone-900">15 min</p>
            <p className="mt-2 text-sm text-stone-600">Average response time, 24/7</p>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-stone-200 bg-stone-50 p-8 text-center">
          <p className="font-serif text-2xl text-stone-900">Help us build the review profile.</p>
          <p className="mt-3 text-stone-700">
            We are building our public Trustpilot profile from real Staylio guests. If you have
            stayed with us, a 60-second review is the single biggest help you can give us.
          </p>

          {/* Direct review CTAs — primary "leave a review" + secondary "see existing profile". */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://uk.trustpilot.com/evaluate/staylio.london"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              Leave a review on Trustpilot
            </a>
            <a
              href="https://uk.trustpilot.com/review/staylio.london"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-900"
            >
              See our public profile
            </a>
          </div>

          {/* TrustBox widget — Review Collector (embedded form rendered by Trustpilot JS) */}
          <div className="mt-8 flex justify-center">
            <div
              className="trustpilot-widget"
              data-locale="en-GB"
              data-template-id="56278e9abfbbba0bdcd568bc"
              data-businessunit-id="6a06e961cba16895b21e41dc"
              data-style-height="52px"
              data-style-width="280px"
              data-token="5de2e702-d2eb-43a9-bec4-84ad1f39ca6e"
            >
              <a
                href="https://uk.trustpilot.com/review/staylio.london"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trustpilot
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Homepage FAQ — answers common pre-booking objections above the fold (audit feedback) */}
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm uppercase tracking-widest text-stone-500">Frequently asked</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">
            Quick answers, before you enquire.
          </h2>
          <div className="mt-12 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
            {HOMEPAGE_FAQS.map((f, i) => (
              <details key={i} className="group p-6 sm:p-7">
                <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                  <span className="font-serif text-lg sm:text-xl text-stone-900">{f.question}</span>
                  <span
                    className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-stone-700 leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-stone-600">
            More on the{" "}
            <Link href="/faq" className="font-medium text-stone-900 underline underline-offset-4">
              full FAQ page
            </Link>
            , or WhatsApp Ali on{" "}
            <a
              href="https://wa.me/447375621453"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-stone-900 underline underline-offset-4"
            >
              +44 7375 621453
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl text-stone-900">Ready to book your London stay?</h2>
        <p className="mt-6 text-stone-700">
          Whether you are visiting for work, relocating your family, or simply need a comfortable base in
          London, Staylio has an apartment that fits.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/apartments"
            className="inline-flex rounded-full bg-stone-900 px-8 py-3 text-sm font-medium text-white hover:bg-stone-700 transition"
          >
            Browse apartments
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-stone-900 px-8 py-3 text-sm font-medium text-stone-900 hover:bg-stone-900 hover:text-white transition"
          >
            Enquire now
          </Link>
        </div>
      </section>
    </>
  );
}
