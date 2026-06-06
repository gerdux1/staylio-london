import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumb, faqSchema } from "@/lib/schema";

const SLUG = "native-vs-staylio";
const HEADLINE = "Native Places vs Staylio: aparthotel or pure serviced apartment?";
const DESCRIPTION =
  "Native Places is the design-led London aparthotel — reception, bar, lounge, restaurant. Staylio is the pure serviced apartment — private flat, no front desk, all bills in the rate. Honest side-by-side on price, neighbourhoods, fit, and which one suits which stay.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/vs/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/vs/${SLUG}`, type: "article" },
};

const FAQS = [
  {
    question: "Is Native an aparthotel or a serviced apartment?",
    answer:
      "Aparthotel. Native Places buildings have a reception desk, a bar or café, and sometimes a restaurant on the ground floor. That makes them hotel-like in feel even though each unit has a kitchenette. Staylio is pure serviced apartment — your flat is in a residential building with no shared public spaces, no front desk, no bar tab to ignore.",
  },
  {
    question: "Is Native more expensive than Staylio?",
    answer:
      "Usually 10-25% higher per night in comparable Central London areas. Native bundles ground-floor staffing, bar inventory, and design-spec fit-out into the rate. Staylio bundles only what's in the apartment — bills, linens, smart lock, fortnightly housekeeping. Both bundle Wi-Fi and standard amenities; we just don't charge you for a lobby bar.",
  },
  {
    question: "Where does Native operate in London?",
    answer:
      "Native has buildings in Bankside, Hyde Park, Mayfair, Bishopsgate, and around the City. Staylio covers seven neighbourhoods that mostly don't overlap: Marylebone (largest concentration), Maida Vale, Borough/Pimlico, Old Street/Shoreditch, Kensington/Hammersmith, Barbican/Farringdon, and Fitzrovia/Mayfair (overlap with Native here). If you want Marylebone or Maida Vale specifically, we have inventory and they don't.",
  },
  {
    question: "Native has a 24/7 reception. Doesn't that beat a smart lock?",
    answer:
      "For luggage storage and late questions, sometimes yes. For 23 hours and 50 minutes of every day where you don't need either, the smart lock is faster. The honest answer is: if you value an in-person greeting on arrival and a concierge-style desk for the whole stay, Native earns the premium. If you'd rather walk straight to your flat, Staylio doesn't waste your money on staff you didn't ask for.",
  },
  {
    question: "Which is better for long stays of one month or more?",
    answer:
      "Staylio. Aparthotels are designed for short-medium stays where the ground floor and reception matter. After three weeks the bar and lobby stop being interesting and the lack of a proper sofa or kitchen starts to bite. Pure serviced apartments scale to month-long stays better. Long-stay pricing also steps down more steeply at Staylio (one-week threshold, again at one month).",
  },
  {
    question: "Can corporate procurement deal with either?",
    answer:
      "Both. Native has a corporate sales team for multi-location accounts. Staylio handles individual corporate stays with PO terms, monthly invoicing, and a single point of contact (Ali). For 1-5 team members at a time in Central London, Staylio is the simpler procurement story; for 20 units across 4 European cities, Native or a multi-city chain like Edyn fits better.",
  },
];

const COMPARISON = [
  { row: "Category", native: "Aparthotel", staylio: "Serviced apartment" },
  { row: "Reception desk", native: "Yes, 24/7", staylio: "No — smart lock entry" },
  { row: "Bar / café / lobby", native: "Yes, in most buildings", staylio: "None — residential building" },
  { row: "Building scale", native: "Often 100+ units per building", staylio: "Distributed across small residential blocks" },
  { row: "London neighbourhoods", native: "Bankside, Mayfair, Bishopsgate, City fringe", staylio: "Marylebone (largest), Maida Vale, Borough, Shoreditch, Kensington, Farringdon, Mayfair" },
  { row: "Headline rate", native: "Higher (~10-25% premium)", staylio: "Direct rate ≥10% below Booking.com/Airbnb" },
  { row: "Kitchen", native: "Kitchenette (hob + microwave + small fridge)", staylio: "Full kitchen (oven, hob, dishwasher, full-size fridge-freezer)" },
  { row: "Washer-dryer in unit", native: "Some buildings; shared laundry in others", staylio: "Every unit" },
  { row: "Best stay length", native: "Short-medium (3-21 nights)", staylio: "3 nights to many months; long-stay pricing scales" },
  { row: "Vibe", native: "Hotel-meets-coworking, social", staylio: "Residential, private, home-like" },
];

export default function VsNativeStaylio() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          breadcrumb([
            { name: "Home", url: "https://staylio.london" },
            { name: "Compare", url: "https://staylio.london/vs" },
            { name: "Native vs Staylio", url: `https://staylio.london/vs/${SLUG}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `https://staylio.london/vs/${SLUG}#article`,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: "2026-06-06T00:00:00Z",
            author: { "@type": "Person", "@id": "https://staylio.london/contact#ali-hassan", name: "Ali Hassan" },
            publisher: { "@id": "https://staylio.london#organization" },
            mainEntityOfPage: { "@type": "WebPage", "@id": `https://staylio.london/vs/${SLUG}` },
            inLanguage: "en-GB",
            about: "Native Places vs Staylio London aparthotel vs serviced apartment comparison",
          },
          faqSchema(FAQS),
        ]}
      />
      <p className="text-sm uppercase tracking-widest text-stone-500">Compare · vs Native Places</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Updated 6 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">Ali Hassan</Link>, Direct Bookings Lead · 7 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          Native Places is an aparthotel — design-led building with a reception, bar,
          and lounge downstairs and a kitchenette in each unit. Staylio is a pure
          serviced apartment — full kitchen, no front desk, residential block. For
          short hotel-like stays in their neighbourhoods, Native wins on amenity vibe.
          For longer stays, for Marylebone or Maida Vale specifically, and for anyone
          who'd rather skip the lobby bar premium, Staylio is the better fit.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Side by side</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
            <tr>
              <th className="py-2 pr-4 text-left">&nbsp;</th>
              <th className="py-2 pr-4 text-left">Native Places</th>
              <th className="py-2 text-left">Staylio</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {COMPARISON.map((c) => (
              <tr key={c.row}>
                <td className="py-3 pr-4 align-top font-medium">{c.row}</td>
                <td className="py-3 pr-4 align-top">{c.native}</td>
                <td className="py-3 align-top">{c.staylio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">When Native is the right call</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Pick Native if you want the hotel-meets-coworking aparthotel feel, you value a
        reception desk and a building bar, and your dates land in Bankside / Mayfair /
        Bishopsgate. For three to twelve nights with a colleague or partner who'd happily
        spend evenings on the lobby sofa, Native is genuinely lovely.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">When Staylio is the better fit</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Pick Staylio if you want a proper kitchen and a real sitting room, you'd
        rather skip the lobby bar premium, your stay is longer than two weeks, or
        you're committed to Marylebone or Maida Vale. The aparthotel format starts to
        feel small after three weeks; a residential serviced apartment doesn't.
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Browse the{" "}
        <Link href="/apartments" className="underline underline-offset-4 hover:text-stone-900">catalogue</Link>
        , read{" "}
        <Link href="/guides/serviced-apartment-vs-aparthotel" className="underline underline-offset-4 hover:text-stone-900">serviced apartment vs aparthotel</Link>{" "}
        for the category explainer, or see{" "}
        <Link href="/guides/boutique-serviced-apartments-london" className="underline underline-offset-4 hover:text-stone-900">what boutique means here</Link>.
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
        <h2 className="font-serif text-3xl text-stone-50">Want the honest answer for your dates?</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">WhatsApp Ali with the dates, area, and party size. If Native is the better fit for your trip, he'll say so.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20I%27m%20weighing%20Native%20vs%20Staylio.%20Can%20you%20give%20me%20an%20honest%20answer%3F%20Dates%3A%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
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
