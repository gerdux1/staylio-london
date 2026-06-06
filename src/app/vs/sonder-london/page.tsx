import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumb, faqSchema } from "@/lib/schema";

const SLUG = "sonder-london";
const HEADLINE = "Sonder London alternative: how Staylio compares";
const DESCRIPTION =
  "Sonder is the design-led tech-first short-stay chain. Staylio is the boutique-curated 40-apartment operator with a human on WhatsApp. Honest side-by-side on price, contact, neighbourhoods, and check-in — and a clear answer on which one fits your stay.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/vs/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/vs/${SLUG}`, type: "article" },
};

const FAQS = [
  {
    question: "Is Staylio cheaper than Sonder London?",
    answer:
      "Usually yes, by 10-20%, for an equivalent apartment in the same neighbourhood. Sonder runs on a venture-funded model with growth marketing and tech overhead priced into the nightly rate. Staylio is operator-led with no platform commission to pay, and we publish a direct-rate guarantee of at least 10% below Booking.com or Airbnb. Where Sonder occasionally beats us is last-minute deeply-discounted weekend slots.",
  },
  {
    question: "Sonder is app-first — what's wrong with that?",
    answer:
      "Nothing for short stays. The Sonder app is well-designed and check-in is clean. The friction shows up around night five when something needs explaining and the only contact route is in-app chat with whoever's online. For a fortnight or longer, a single WhatsApp thread with a named human (Ali at Staylio) beats a chatbot escalation queue every time.",
  },
  {
    question: "Does Sonder have apartments in the same London areas as Staylio?",
    answer:
      "Partial overlap. Sonder has a strong presence in the City fringe (Shoreditch, Aldgate, Bermondsey) and a handful in Mayfair. They don't operate in Marylebone, Maida Vale, or Borough/Pimlico — Staylio's largest neighbourhoods. If you're committed to Marylebone (largest Staylio concentration) or Maida Vale (canalside, quieter), Sonder isn't really an option.",
  },
  {
    question: "What about cleaning and maintenance response time?",
    answer:
      "Sonder cleans on a regular schedule with an in-app request for ad-hoc. Maintenance routes through a contractor pool. Staylio cleans on the same fortnightly cadence on long stays plus extras on WhatsApp; maintenance goes through Ali for triage and a contractor on the same day for urgent issues. The honest difference is response latency: chain ops vs single-team ops.",
  },
  {
    question: "Which one is better for corporate procurement?",
    answer:
      "Sonder has a sales team for multi-unit corporate accounts — better fit if you need 15 apartments booked simultaneously across cities. Staylio handles individual corporate stays with PO terms and monthly invoicing, with a dedicated point of contact. For one to five team members at a time in Central London, Staylio is the simpler procurement story. For a global mobility programme, Sonder or a chain like SACO is the better shape.",
  },
];

const COMPARISON = [
  { row: "Portfolio scale", sonder: "~5,000 apartments across 35+ cities", staylio: "~40 apartments across 7 Central London areas" },
  { row: "London neighbourhoods", sonder: "City fringe (Shoreditch, Aldgate, Bermondsey), Mayfair", staylio: "Marylebone, Shoreditch, Kensington, Mayfair, Farringdon, Borough/Pimlico, Maida Vale" },
  { row: "Pricing model", sonder: "Venture-funded growth pricing", staylio: "Operator direct, ≥10% below Booking.com/Airbnb guarantee" },
  { row: "Contact channel", sonder: "App + in-app chat (bot first, agent second)", staylio: "WhatsApp with Ali, named human, ~15min response UK hours" },
  { row: "Check-in", sonder: "Smart lock via app", staylio: "Smart lock (most units), in-person handover (some)" },
  { row: "Minimum stay", sonder: "Variable, often 1-3 nights", staylio: "3 nights" },
  { row: "Long-stay discount", sonder: "Built into longer dates", staylio: "Auto step-down at 1 week, again at 1 month, plus HMRC 80% VAT relief from night 28" },
  { row: "Bills bundled", sonder: "Yes (in nightly rate)", staylio: "Yes (electricity, water, heating, Wi-Fi, council tax)" },
  { row: "Washer-dryer in unit", sonder: "Varies by unit", staylio: "Every apartment" },
  { row: "Corporate procurement", sonder: "Multi-city sales team, global mobility", staylio: "PO terms + monthly invoicing, single-account contact" },
  { row: "Insurance & registration", sonder: "Corporate-scale", staylio: "Staylio Limited, Companies House 17012831, £1m PL via Premierline" },
];

export default function VsSonderLondon() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          breadcrumb([
            { name: "Home", url: "https://staylio.london" },
            { name: "Compare", url: "https://staylio.london/vs/" },
            { name: "Sonder London", url: `https://staylio.london/vs/${SLUG}` },
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
            about: "Sonder vs Staylio London serviced apartments comparison",
          },
          faqSchema(FAQS),
        ]}
      />
      <p className="text-sm uppercase tracking-widest text-stone-500">Compare · vs Sonder</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Updated 6 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">Ali Hassan</Link>, Direct Bookings Lead · 7 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          Sonder is the tech-first, app-led, venture-funded short-stay chain — well-designed,
          consistent across cities, no in-person team. Staylio is the boutique-curated
          40-apartment Central London operator with one named human on WhatsApp. For 1-3 nights,
          either works; for a fortnight or longer in Marylebone or Maida Vale, Staylio is the
          one you want. We'll happily say so if it's the other way round.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Side by side</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
            <tr>
              <th className="py-2 pr-4 text-left">&nbsp;</th>
              <th className="py-2 pr-4 text-left">Sonder London</th>
              <th className="py-2 text-left">Staylio</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {COMPARISON.map((c) => (
              <tr key={c.row}>
                <td className="py-3 pr-4 align-top font-medium">{c.row}</td>
                <td className="py-3 pr-4 align-top">{c.sonder}</td>
                <td className="py-3 align-top">{c.staylio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">When Sonder is the right call</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Picking Sonder over Staylio makes sense when: (1) you want stays across multiple
        cities under one operator, (2) you're committed to app-only contact (which is
        legitimately faster for short trips), or (3) your dates are in a Shoreditch /
        Aldgate / Mayfair sweet-spot where they have inventory and we don't. Honest
        framing: Sonder built a slick product. For people who fit the box, it works.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">When Staylio is the better fit</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Picking Staylio over Sonder makes sense when: (1) you're staying a fortnight or
        longer and want a single WhatsApp thread instead of an app, (2) you want
        Marylebone / Maida Vale / Borough specifically (Sonder doesn't operate there),
        (3) you want a direct-rate guarantee in writing, or (4) you want to know the
        team by first name by the second message.
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Browse our{" "}
        <Link href="/apartments" className="underline underline-offset-4 hover:text-stone-900">full catalogue</Link>
        , see{" "}
        <Link href="/guides/boutique-serviced-apartments-london" className="underline underline-offset-4 hover:text-stone-900">what boutique actually means</Link>
        , or read{" "}
        <Link href="/trust" className="underline underline-offset-4 hover:text-stone-900">how Staylio is licensed and insured</Link>{" "}
        for the credentials trail.
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
        <h2 className="font-serif text-3xl text-stone-50">Talk to a human, not an app.</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">Send Ali your dates and area. Reply usually inside 15 minutes during UK hours.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20I%27m%20comparing%20Sonder%20vs%20Staylio.%20Can%20you%20help%3F%20Dates%3A%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
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
