import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "boutique-serviced-apartments-london";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "Boutique serviced apartments in Central London";
const DESCRIPTION =
  "What 'boutique' actually means for a London serviced apartment — small portfolio, curated by neighbourhood, one team you can name on WhatsApp. Honest comparison with the corporate-chain operators, three example units, and how to tell whether boutique is right for your stay.";

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
    question: "What makes a serviced apartment 'boutique'?",
    answer:
      "Two things: scale and curation. A boutique operator runs a small portfolio (typically 20-80 apartments) instead of a chain's 500+ units, and every apartment is picked and finished individually rather than rolled out from a single corporate spec. The trade-off is a smaller selection and more limited availability; the upside is space that doesn't feel beige, a real human on WhatsApp, and a team that knows every unit by name.",
  },
  {
    question: "Who are Staylio's main competitors?",
    answer:
      "On the corporate-chain end: SACO, Edyn (parent of Locke and Cove), Native Places, Cheval Residences, and Sonder. On the smaller-operator end: a handful of independents across central London, plus serviced-apartment listings on Booking.com and SilverDoor's broker platform. We're closer in size and feel to the smaller operators; closer in operating standards to the chains.",
  },
  {
    question: "Are boutique apartments more expensive than chain ones?",
    answer:
      "Not usually — and often less. Chain operators carry head-office overhead and platform commission costs that boutique operators avoid. Staylio's direct rate is always at least 10% lower than the same apartment listed on Booking.com or Airbnb. Where boutique sometimes costs more is the high end (Cheval, for instance, is genuinely premium and prices accordingly). At Staylio's mid-market position, you're typically 10-20% below the equivalent Native or SACO unit in the same area.",
  },
  {
    question: "How many apartments does Staylio actually have?",
    answer:
      "Around forty fully equipped serviced apartments across seven Central London neighbourhoods. Marylebone &amp; Regent's Park is the largest concentration (about a dozen units). The other six areas have between one and eight units each. We grow by curating new buildings, not bolting on whole towers.",
  },
  {
    question: "Where in Central London does Staylio operate?",
    answer:
      "Seven neighbourhoods: Regent's Park &amp; Marylebone (largest), Old Street &amp; Shoreditch, Kensington &amp; Hammersmith, Fitzrovia &amp; Mayfair, Barbican &amp; Farringdon, Borough &amp; Pimlico, and Little Venice &amp; Maida Vale. All units are inside a 6 km radius of Marylebone, which means almost everywhere is on the Bakerloo, Central, or Elizabeth line.",
  },
  {
    question: "How do I tell whether boutique is right for my stay?",
    answer:
      "Boutique wins for: longer stays where the unit becomes home for a month or more, repeat visitors who want the same team each time, and travellers who care about how the room actually feels (windows, light, ceiling height). Chains win for: very last-minute single-night stays, large groups needing many units at once, or when you genuinely don't mind which apartment you end up in. If you can name your dates and your area, boutique is usually the right call.",
  },
];

export default function BoutiqueServicedApartmentsGuide() {
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
              "boutique serviced apartments London",
              "independent serviced apartment operator London",
              "small serviced apartment operator London",
              "Marylebone boutique apartment",
              "Maida Vale serviced apartment",
            ],
            about: "Boutique serviced apartment operators in Central London",
          }),
          faqSchema(FAQS),
        ]}
      />

      <p className="text-sm uppercase tracking-widest text-stone-500">Guides · Brand</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Published 6 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">
          Ali Hassan
        </Link>
        , Direct Bookings Lead · 8 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          A boutique serviced apartment is what you get when one small team picks every
          unit individually instead of rolling out a corporate spec across hundreds of
          buildings. For Staylio, that means forty apartments across seven Central
          London neighbourhoods, finished one by one — Marylebone townhouses, Maida Vale
          mansion blocks, Shoreditch warehouse conversions. Smaller selection, less
          beige, and a real human on WhatsApp whose first name you'll know by the second
          message.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">What &lsquo;boutique&rsquo; actually means here</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        The word gets overused in hospitality. For a serviced apartment operator, two
        practical things separate boutique from corporate chain:
      </p>
      <ol className="mt-6 space-y-5 text-stone-700 leading-relaxed">
        <li>
          <span className="font-medium text-stone-900">Scale.</span> A boutique
          operator runs maybe 20-80 apartments in total. A corporate chain runs 500 to
          5,000 across multiple cities. That difference shows up in how the operator
          can know each unit, how quickly someone can come round when a tap drips, and
          how much the building feels like a hotel versus a real residential block.
        </li>
        <li>
          <span className="font-medium text-stone-900">Curation.</span> Boutique
          operators usually pick buildings individually — a Marylebone Georgian
          townhouse here, a Maida Vale mansion block there. Chains tend to roll out a
          single fit-out spec across whole towers. Both can be done well; they just
          feel different to live in for a week.
        </li>
      </ol>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Honest comparison with the chains</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Five operators come up most often when guests ask who else they should look
        at. The summary below is my honest read after running direct bookings against
        these names for the last several years.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-stone-800">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-widest text-stone-500">
            <tr>
              <th className="py-2 pr-4 text-left">Operator</th>
              <th className="py-2 pr-4 text-left">Best at</th>
              <th className="py-2 text-left">Watch out for</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            <tr>
              <td className="py-3 pr-4 align-top font-medium">SACO / Edyn</td>
              <td className="py-3 pr-4 align-top">Volume, corporate procurement, large group bookings, multi-city</td>
              <td className="py-3 align-top">Beige fit-out across most units; head-office cost in the rate</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 align-top font-medium">Native Places</td>
              <td className="py-3 pr-4 align-top">Design-led aparthotels with reception; aparthotel feel</td>
              <td className="py-3 align-top">Often a front desk and bar bundled in; less &lsquo;private home&rsquo; than serviced apartment proper</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 align-top font-medium">Cheval Residences</td>
              <td className="py-3 pr-4 align-top">High-end family-sized units (200+ sqm), concierge, prestige addresses</td>
              <td className="py-3 align-top">Genuinely premium pricing (£500-1,500/night); ICP mismatch for most stays</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 align-top font-medium">Sonder</td>
              <td className="py-3 pr-4 align-top">Self-serve booking flow; consistent across cities; well-designed app</td>
              <td className="py-3 align-top">No in-person team; reception-by-app feels off after night five</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 align-top font-medium">Locke (Edyn)</td>
              <td className="py-3 pr-4 align-top">Aparthotel with co-working spaces; tech-friendly; central locations</td>
              <td className="py-3 align-top">Smaller units; bar / lobby tax in the rate</td>
            </tr>
            <tr className="font-medium text-stone-900 bg-stone-50">
              <td className="py-3 pr-4 align-top">Staylio</td>
              <td className="py-3 pr-4 align-top">Curated 40-unit portfolio across 7 Central London neighbourhoods; one WhatsApp line; 10%+ cheaper than the same unit on OTA</td>
              <td className="py-3 align-top">Smaller selection; fewer multi-bed units in some areas; not a chain so no other-city stays</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Three example units to anchor the idea</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Rather than describe boutique in the abstract, here is what the portfolio
        actually looks like — three apartments that show the range across price,
        bedroom count, and neighbourhood.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <Link
          href="/locations/regents-park-marylebone"
          className="group rounded-2xl border border-stone-200 bg-white p-5 hover:border-stone-400 transition"
        >
          <p className="text-xs uppercase tracking-widest text-stone-500">Marylebone</p>
          <h3 className="mt-2 font-serif text-lg text-stone-900 group-hover:underline underline-offset-4">
            Georgian townhouse studios
          </h3>
          <p className="mt-2 text-sm text-stone-700">
            Largest concentration. Quiet residential streets ten minutes from Oxford
            Circus. Best for relocations and longer stays where you want a real
            neighbourhood.
          </p>
        </Link>
        <Link
          href="/locations/little-venice-maida-vale"
          className="group rounded-2xl border border-stone-200 bg-white p-5 hover:border-stone-400 transition"
        >
          <p className="text-xs uppercase tracking-widest text-stone-500">Maida Vale</p>
          <h3 className="mt-2 font-serif text-lg text-stone-900 group-hover:underline underline-offset-4">
            Edwardian mansion blocks
          </h3>
          <p className="mt-2 text-sm text-stone-700">
            Canalside calm, Bakerloo line to Oxford Circus in four stops, Paddington
            for Heathrow Express. Best for longer leisure stays and writers&rsquo;
            month-long retreats.
          </p>
        </Link>
        <Link
          href="/locations/old-street-shoreditch"
          className="group rounded-2xl border border-stone-200 bg-white p-5 hover:border-stone-400 transition"
        >
          <p className="text-xs uppercase tracking-widest text-stone-500">Shoreditch</p>
          <h3 className="mt-2 font-serif text-lg text-stone-900 group-hover:underline underline-offset-4">
            Warehouse conversions
          </h3>
          <p className="mt-2 text-sm text-stone-700">
            Brick walls, sash windows, ten minutes to the City and Liverpool Street.
            Best for founders, design firms, and consultants on multi-week engagements.
          </p>
        </Link>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Who picks boutique over a chain</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Three audiences book Staylio direct, in my experience:
      </p>
      <ol className="mt-6 space-y-5 text-stone-700 leading-relaxed">
        <li>
          <span className="font-medium text-stone-900">Repeat visitors.</span> Once
          you&rsquo;ve stayed in the Marylebone unit on Crawford Street and met Ali
          twice, you don&rsquo;t want a new building, a new key, and a new app every
          time you come back to London. The same team and the same building beat
          variety after the second visit.
        </li>
        <li>
          <span className="font-medium text-stone-900">Longer-stay corporate teams.</span>{" "}
          Two-week diligence rotations and project sprints want a flat that feels
          residential by evening, not an aparthotel with a bar in the lobby. A
          curated boutique unit makes a four-week stay feel less like a hotel sentence.
        </li>
        <li>
          <span className="font-medium text-stone-900">People who actually care
          how a room feels.</span> Light, ceiling height, the sash window vs the
          double-glazed unit, the kind of sofa you&rsquo;d sit on for a Saturday morning
          coffee — these things show up in a boutique-curated apartment and rarely
          in a chain rolled out from a single spec.
        </li>
      </ol>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Where Staylio fits — and where we don&rsquo;t</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Staylio is the right call when you can name your dates and your area, when you
        want one team to know you, and when you&rsquo;d rather have a curated forty
        than a generic four hundred. We&rsquo;re the wrong call if you need stays
        outside London, last-minute single-night drops on weekends when the calendar
        is full, or fifteen units booked together for a corporate offsite. For those,
        SACO or Edyn will serve you better and we&rsquo;ll happily say so on the
        first WhatsApp message.
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Browse the{" "}
        <Link href="/apartments" className="underline underline-offset-4 hover:text-stone-900">
          full catalogue
        </Link>
        , read the{" "}
        <Link href="/about" className="underline underline-offset-4 hover:text-stone-900">
          about page
        </Link>{" "}
        for company background, or jump straight to the{" "}
        <Link href="/guides/what-is-a-serviced-apartment" className="underline underline-offset-4 hover:text-stone-900">
          serviced-apartment definition
        </Link>{" "}
        if &lsquo;boutique&rsquo; is the second word you&rsquo;re still working out and
        &lsquo;serviced apartment&rsquo; is the first.
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
        <h2 className="font-serif text-3xl text-stone-50">Talk to the team that picked the apartment.</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">
          Tell Ali your dates and your area. You&rsquo;ll have a shortlist back on
          WhatsApp before the kettle finishes boiling, with photos and the direct
          rate.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://wa.me/447375621453?text=Hi%20Ali%2C%20I%27m%20looking%20at%20boutique%20London%20apartments%20and%20could%20use%20a%20shortlist.%20My%20dates%3A%20"
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
