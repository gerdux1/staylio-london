import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "what-is-a-serviced-apartment";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "What is a serviced apartment? A plain-English definition";
const DESCRIPTION =
  "A serviced apartment is a fully equipped private flat let on a short or long stay, with hotel-style housekeeping and all bills included. Here is the honest definition, what's actually inside one, and when it makes sense vs a hotel, Airbnb, or a regular rental.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/guides/${SLUG}` },
  openGraph: {
    title: HEADLINE,
    description: DESCRIPTION,
    url: `https://staylio.london/guides/${SLUG}`,
    type: "article",
  },
};

const FAQS = [
  {
    question: "What exactly is a serviced apartment?",
    answer:
      "A serviced apartment is a fully furnished private flat let on flexible terms (typically three nights to many months) with bundled bills, regular housekeeping, professional management, and self check-in. Think of it as a private home that has been operationally set up for short and medium stays. In the UK, the operator holds the lease or freehold and lets the property under a licence (not an assured shorthold tenancy), which is what keeps the stay flexible.",
  },
  {
    question: "How is a serviced apartment different from a hotel?",
    answer:
      "Three things: space, kitchen, and bills. A serviced apartment gives you a separate sitting room, a fitted kitchen, and a washer-dryer — none of which a standard hotel room has. Electricity, water, heating, Wi-Fi, and council tax are all included in the rate, with no daily resort fee or extras at checkout. The trade-off is no daily housekeeping (usually weekly or fortnightly instead) and no front desk, so you self-check-in via a smart lock or code.",
  },
  {
    question: "How is a serviced apartment different from an Airbnb?",
    answer:
      "A serviced apartment is run by a licensed operator with insurance, professional cleaning, a real business invoice, and a single point of contact. An Airbnb is a peer-to-peer listing that may be run by a hobbyist host or a professional, and quality, response time, and cleaning standards vary widely. Serviced apartments also tend to be exempt from London's 90-day short-let cap when the operator holds the right planning permission, which lets you stay longer than 89 nights legally.",
  },
  {
    question: "How is a serviced apartment different from renting a flat?",
    answer:
      "A regular rental in the UK is an assured shorthold tenancy: six or twelve-month minimum, deposit, credit check, council tax in your name, bills in your name, and an inventory at move-in. A serviced apartment skips all of that. You arrive, drop your bags, and start living — no setup, no admin, no exit notice. The trade-off is a modest premium over an equivalent long-term rental — roughly 25-40 % more per month, depending on the area.",
  },
  {
    question: "What's included in the nightly rate?",
    answer:
      "At Staylio: electricity, water, heating, Wi-Fi, council tax, fresh linen and towels, a fully fitted kitchen (oven, hob, full-size fridge-freezer, dishwasher, kettle, toaster, microwave, cookware, utensils, glassware), smart TV with streaming, in-unit washer-dryer, fortnightly housekeeping, smart-lock keyless entry, and a real human on WhatsApp for the entire stay. Different operators bundle different things, so always check the inclusion list before you book.",
  },
  {
    question: "How long can I stay in a serviced apartment?",
    answer:
      "Staylio's minimum is three nights. There is no maximum — we have hosted multi-month relocations and 14-month sabbaticals. Long-stay pricing automatically steps down at the one-week mark, again at one month, and HMRC's 80 % VAT reduction applies after night 28 if you stay continuously in the same apartment (worth knowing if your employer is paying).",
  },
];

export default function WhatIsAServicedApartmentGuide() {
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
              "what is a serviced apartment",
              "serviced apartment definition",
              "serviced apartments London",
              "what is included in a serviced apartment",
              "how does a serviced apartment work",
            ],
            about: "Serviced apartment definition and how it differs from hotels, Airbnb, and rentals",
          }),
          faqSchema(FAQS),
          {
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            "@id": `https://staylio.london/guides/${SLUG}#term`,
            name: "Serviced apartment",
            description:
              "A fully equipped private flat let on a short or long stay by a professional operator. Hotel-style housekeeping, all bills included, flexible booking via a licence (not a tenancy). Common in city-centre business districts for stays from three nights to multiple months.",
            url: `https://staylio.london/guides/${SLUG}`,
            inDefinedTermSet: { "@type": "DefinedTermSet", name: "Accommodation types" },
          },
        ]}
      />

      <p className="text-sm uppercase tracking-widest text-stone-500">Guides · Basics</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Published 6 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">
          Ali Hassan
        </Link>
        , Direct Bookings Lead · 7 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          A serviced apartment is a fully equipped private flat — kitchen, sitting room, washer-dryer
          — let on flexible terms by a professional operator. All bills are included, housekeeping is
          weekly or fortnightly, and you check in with a smart lock instead of a front desk. Best
          for stays of one week or longer, where space, a kitchen, and a real desk make the
          difference between surviving a trip and living somewhere.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">The honest definition</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        A serviced apartment is a private flat that an operator has fully kitted out, professionally
        cleaned, and let to a guest on a short licence rather than a tenancy. In practice that means
        you get a sitting room, a bedroom (or several), a fully working kitchen, and a bathroom that
        all belong to one apartment, not shared with anyone else. The operator handles linen,
        cleaning, maintenance, and bills; you handle living there.
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        The word &ldquo;serviced&rdquo; is the key bit. It separates this category from a holiday
        let (often DIY, run by an individual host) and from a regular rental (no service, no
        flexibility). The service is what justifies the rate — and what makes it possible to arrive
        on a Tuesday evening with one suitcase and be working from a desk by Wednesday morning,
        with the heating on and a kettle that boils.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">What&rsquo;s actually inside one</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Inclusion lists vary by operator. The Staylio standard is below. Use this as a checklist
        when you compare us against anyone else — if a competitor doesn&rsquo;t bundle the basics,
        the lower headline rate usually evaporates once you add them back.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
            <tr>
              <th className="py-2 pr-4 text-left">Category</th>
              <th className="py-2 text-left">What you get</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            <tr>
              <td className="py-3 pr-4 align-top font-medium">Kitchen</td>
              <td className="py-3">Fitted units with full-size fridge-freezer, oven, hob, dishwasher, microwave, kettle, toaster, cookware, utensils, crockery, glassware. Salt, pepper, oil, cleaning supplies for the first stay.</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 align-top font-medium">Connectivity</td>
              <td className="py-3">Full-speed Wi-Fi, smart TV with streaming sign-in for Netflix/Disney+/Prime, work-from-anywhere broadband good enough for Zoom and Teams calls.</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 align-top font-medium">Laundry</td>
              <td className="py-3">In-unit washer-dryer in every apartment. Detergent supplied at check-in. No queueing for a hotel laundry.</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 align-top font-medium">Linens &amp; toiletries</td>
              <td className="py-3">Fresh sheets, duvets, pillows, towels, bath mats, hand towels. Shampoo, conditioner, body wash, hand soap.</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 align-top font-medium">Bills</td>
              <td className="py-3">Electricity, water, heating, Wi-Fi, council tax — all included in the nightly rate. No meter readings, no estimated bills, no deposit on standing orders.</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 align-top font-medium">Access</td>
              <td className="py-3">Smart-lock keyless entry on most apartments — you receive a code by WhatsApp before arrival. A few use in-person key handover at a time that suits you. No reception desk.</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 align-top font-medium">Housekeeping</td>
              <td className="py-3">Fortnightly clean included on long stays. Extra cleans on request at a flat fee. The standard is hotel-grade, not Airbnb-grade.</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 align-top font-medium">Support</td>
              <td className="py-3">A real human on WhatsApp for the whole stay. Average reply time during UK hours is under 15 minutes. No ticket numbers, no call centres.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">When a serviced apartment makes sense</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Three audiences book serviced apartments most often, in my experience running direct
        bookings at Staylio:
      </p>
      <ol className="mt-6 space-y-5 text-stone-700 leading-relaxed">
        <li>
          <span className="font-medium text-stone-900">Project workers and consultants on a multi-week engagement.</span>{" "}
          You&rsquo;re in London for a month doing M&amp;A diligence or a system migration. You need
          a desk, a real bed, somewhere to take an evening call without housekeeping interrupting,
          and somewhere to actually cook so you&rsquo;re not eating out every night for thirty days.
        </li>
        <li>
          <span className="font-medium text-stone-900">Relocators between homes.</span> You&rsquo;ve
          moved your family from Singapore or San Francisco and the house exchange is still six
          weeks out. The kids need space, the partner needs a laundry, and nobody needs the daily
          performance of a hotel breakfast room. A 2-bed serviced apartment with a kitchen turns a
          stressful interim into a normal-ish life.
        </li>
        <li>
          <span className="font-medium text-stone-900">Leisure stays of one week or longer.</span>{" "}
          For a quiet week in London with a partner or a long weekend with friends, a serviced
          apartment is more space, more freedom, and a kitchen you can actually use. By night five
          the price per night usually beats an equivalent hotel — see{" "}
          <Link href="/guides/serviced-apartment-vs-hotel-london" className="underline underline-offset-4 hover:text-stone-900">
            our 14-night maths
          </Link>{" "}
          for the worked example.
        </li>
      </ol>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Where Staylio fits</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Staylio operates around forty serviced apartments across seven Central London
        neighbourhoods, from Regent&rsquo;s Park &amp; Marylebone (our largest concentration) to
        Old Street &amp; Shoreditch, Kensington &amp; Hammersmith, Fitzrovia &amp; Mayfair, Barbican
        &amp; Farringdon, Borough &amp; Pimlico, and Little Venice &amp; Maida Vale. Browse the{" "}
        <Link href="/apartments" className="underline underline-offset-4 hover:text-stone-900">
          full catalogue
        </Link>
        , see the{" "}
        <Link href="/locations/regents-park-marylebone" className="underline underline-offset-4 hover:text-stone-900">
          flagship Marylebone area page
        </Link>
        , or read{" "}
        <Link href="/apartments-vs-hotels" className="underline underline-offset-4 hover:text-stone-900">
          how we compare to hotels
        </Link>{" "}
        for a side-by-side. Corporate bookers should head to{" "}
        <Link href="/corporate" className="underline underline-offset-4 hover:text-stone-900">
          /corporate
        </Link>{" "}
        for PO terms and monthly invoicing.
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
        <h2 className="font-serif text-3xl text-stone-50">Ready for a real apartment in London?</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">
          Send Ali your dates and area, and you&rsquo;ll have a direct quote on WhatsApp before the
          kettle finishes boiling.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://wa.me/447375621453?text=Hi%20Ali%2C%20I%20just%20read%20your%20serviced-apartment%20guide.%20Can%20you%20help%20with%20a%20stay%3F"
            className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition"
          >
            WhatsApp Ali
          </a>
          <Link
            href="/apartments"
            className="inline-flex items-center justify-center rounded-full border border-stone-50/40 px-6 py-3 text-stone-50 hover:border-stone-50 transition"
          >
            Browse apartments
          </Link>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
        <p className="text-xs uppercase tracking-widest text-stone-500">Already staying with us?</p>
        <h3 className="mt-2 font-serif text-2xl text-stone-900">Reach guest service direct.</h3>
        <p className="mt-3 text-stone-700 leading-relaxed">
          For in-stay matters — anything that needs fixing, replacing, or explaining about the
          apartment you&rsquo;re currently in — message the guest team. Separate line from sales,
          faster for in-stay support.
        </p>
        <a
          href="https://wa.me/447304353640?text=Hi%2C%20I%27m%20staying%20with%20Staylio%20and%20need%20help."
          className="mt-4 inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-2.5 text-sm text-stone-50 hover:bg-stone-800 transition"
        >
          WhatsApp guest service · +44 7304 353 640
        </a>
      </section>
    </article>
  );
}
