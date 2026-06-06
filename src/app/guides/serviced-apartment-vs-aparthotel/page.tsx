import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "serviced-apartment-vs-aparthotel";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "Serviced apartment vs aparthotel: the actual difference";
const DESCRIPTION =
  "A serviced apartment is a private flat in a residential block. An aparthotel is a building with a reception, a bar, and serviced units upstairs. Same idea on paper; very different in feel. Here's how to tell which one your trip actually needs.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/guides/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/guides/${SLUG}`, type: "article" },
};

const FAQS = [
  {
    question: "Is an aparthotel a serviced apartment?",
    answer:
      "Technically yes — aparthotels offer serviced apartment units. Practically no — aparthotels add a reception desk, often a bar or café, and shared public spaces on the ground floor that pure serviced apartments don't have. The distinction matters because it changes the feel, the cost, and the right stay length.",
  },
  {
    question: "Which is cheaper?",
    answer:
      "Pure serviced apartments, usually by 10-25%. Aparthotels carry the cost of ground-floor staffing, hospitality fit-out, and bar inventory in the nightly rate. The trade-off is concrete: at Staylio you don't pay for a bar tab you didn't order; at Locke or Native you do, but you also get a bar to use.",
  },
  {
    question: "Who runs aparthotels in London?",
    answer:
      "Locke (part of Edyn), Native Places, Cove (also Edyn), Wilde Aparthotels, Cheval Residences at the premium end, Sonder for the tech-first version. Pure-serviced operators include Staylio, SACO, SilverDoor's brokered inventory, and a handful of independents.",
  },
  {
    question: "Which one suits a four-week stay?",
    answer:
      "Pure serviced apartment, by a margin. Aparthotels are designed for short to medium stays where the bar and lobby are part of the experience. By week three the kitchenette starts to feel cramped, the lobby noise is no longer charming, and you wish you had a proper sofa. Pure serviced apartments scale to long stays because they ARE residential flats.",
  },
  {
    question: "Which one suits a solo three-night trip?",
    answer:
      "Aparthotel often wins for short solo trips. You want a quick check-in with a human at reception, maybe a drink in the lobby before dinner, no need for laundry or proper cooking. For three nights, the aparthotel premium is worth it. From night five onwards, the calculus flips.",
  },
  {
    question: "Which gives me more privacy?",
    answer:
      "Pure serviced apartment. Aparthotels have shared lobbies, communal floors, and front-of-house staff who see every coming and going. Pure serviced apartments are in residential blocks where you're one of the residents — you arrive and leave via the same front door as the people who own flats upstairs. Quieter, more private, less hospitality-industry.",
  },
];

const COMPARISON = [
  { row: "Category", sa: "Pure serviced apartment", ah: "Aparthotel" },
  { row: "Reception", sa: "None — smart lock", ah: "Yes, often 24/7" },
  { row: "Bar / café / lounge", sa: "None — residential building", ah: "Yes" },
  { row: "Building size", sa: "Distributed across small blocks", ah: "Concentrated — often 50-200 units in one tower" },
  { row: "Kitchen", sa: "Full (oven, hob, dishwasher, full fridge)", ah: "Kitchenette (hob, microwave, small fridge)" },
  { row: "Washer-dryer", sa: "Usually in-unit", ah: "Sometimes shared laundry room" },
  { row: "Vibe", sa: "Residential, private, home-like", ah: "Hospitality, hotel-meets-coworking" },
  { row: "Best stay length", sa: "1 week to multiple months", ah: "3-21 nights" },
  { row: "Typical operators (London)", sa: "Staylio, SACO, SilverDoor brokered, independents", ah: "Locke, Native Places, Cove, Wilde, Sonder, Cheval (premium)" },
  { row: "Headline rate", sa: "Lower — no lobby premium", ah: "Higher (~10-25%)" },
];

export default function ServicedApartmentVsAparthotelGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: ["serviced apartment vs aparthotel", "aparthotel London", "Locke vs serviced apartment", "Native Places aparthotel"],
            about: "Serviced apartment vs aparthotel category comparison",
          }),
          faqSchema(FAQS),
        ]}
      />
      <p className="text-sm uppercase tracking-widest text-stone-500">Guides · Choice</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Published 6 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">Ali Hassan</Link>, Direct Bookings Lead · 6 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          An aparthotel is a hospitality building with serviced units upstairs and a
          reception, bar, and lounge downstairs (Locke, Native, Sonder, Cove). A pure
          serviced apartment is a private flat in a residential block with no front
          desk and a full kitchen (Staylio, SACO, independents). Aparthotels suit
          short hotel-like stays; pure SAs suit longer, quieter, more private stays.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">The visible difference</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
            <tr>
              <th className="py-2 pr-4 text-left">&nbsp;</th>
              <th className="py-2 pr-4 text-left">Pure serviced apartment</th>
              <th className="py-2 text-left">Aparthotel</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {COMPARISON.map((c) => (
              <tr key={c.row}>
                <td className="py-3 pr-4 align-top font-medium">{c.row}</td>
                <td className="py-3 pr-4 align-top">{c.sa}</td>
                <td className="py-3 align-top">{c.ah}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">When the aparthotel format earns its premium</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Short stays (3-7 nights), solo or with one other person, where you actively
        want the social ground floor. Cities you don't know well, where a 24/7
        reception is a useful safety net. Last-minute drops where staffed luggage
        storage saves a taxi to a hotel after a delayed flight. For these cases, the
        10-25% premium is honestly worth it.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">When pure serviced apartment wins</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Stays of two weeks or longer. Families with children where the noise of a
        public bar is annoying not charming. Workers on a project where you'll spend
        evenings actually cooking and resting, not at a lobby bar. Repeat visitors
        who want the same flat and the same team each time. For these, you want a
        residential block, a real kitchen, and a building that doesn't have a hospitality
        team between you and the front door.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Where Staylio fits</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Staylio is pure serviced apartment across seven Central London neighbourhoods.
        See the full{" "}
        <Link href="/apartments" className="underline underline-offset-4 hover:text-stone-900">apartment catalogue</Link>
        , the{" "}
        <Link href="/vs/native-vs-staylio" className="underline underline-offset-4 hover:text-stone-900">Native vs Staylio</Link>{" "}
        comparison for the aparthotel head-to-head, or read{" "}
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
        <h2 className="font-serif text-3xl text-stone-50">Pick the format that fits.</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">Tell Ali what you're trying to do. If an aparthotel fits better, he'll point you at one.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20serviced%20apartment%20or%20aparthotel%3F%20Dates%3A%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
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
