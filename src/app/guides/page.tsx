import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides — long stays, neighbourhoods, the practical bits",
  description:
    "Plain-English guides on long-stay London accommodation: tax, the 90-day short-let rule, picking the right neighbourhood, and the maths of serviced apartments vs hotels. Written by Ali Hassan, Direct Bookings Lead at Staylio.",
};

const GUIDES = [
  {
    slug: "what-is-a-serviced-apartment",
    pillar: "Basics",
    title: "What is a serviced apartment? A plain-English definition",
    summary:
      "A serviced apartment is a fully equipped private flat let on a short or long stay, with hotel-style housekeeping and all bills included. Honest definition, full inclusion checklist, and when it makes sense vs a hotel, Airbnb, or rental.",
    minRead: 7,
  },
  {
    slug: "boutique-serviced-apartments-london",
    pillar: "Brand",
    title: "Boutique serviced apartments in Central London",
    summary:
      "What 'boutique' actually means for a London serviced apartment, an honest comparison with the corporate chains (SACO, Edyn, Native, Cheval, Sonder, Locke), and three example units across Marylebone, Maida Vale, and Shoreditch.",
    minRead: 8,
  },
  {
    slug: "how-do-serviced-apartments-work",
    pillar: "Basics",
    title: "How do serviced apartments work? The full process, end to end",
    summary:
      "The six-step flow from catalogue to check-out, the legal framework (licence not tenancy), how payment works, late check-in, in-stay support, and extensions.",
    minRead: 6,
  },
  {
    slug: "are-bills-included-serviced-apartments",
    pillar: "Cost",
    title: "Are bills included in a serviced apartment?",
    summary:
      "Yes — at Staylio, every nightly rate bundles electricity, water, heating, Wi-Fi, and council tax. Here's exactly what's in and out, the per-night value, and how procurement teams handle it.",
    minRead: 5,
  },
  {
    slug: "serviced-apartments-with-washing-machine-london",
    pillar: "Amenities",
    title: "Serviced apartments with a washing machine in London",
    summary:
      "Every Staylio apartment has an in-unit washer-dryer with detergent supplied. Why it matters more than guests expect beyond four nights, and the operators that don't bundle one.",
    minRead: 4,
  },
  {
    slug: "serviced-apartment-vs-aparthotel",
    pillar: "Choice",
    title: "Serviced apartment vs aparthotel: the actual difference",
    summary:
      "An aparthotel adds a reception, a bar, and a lounge to the building. A pure serviced apartment skips all of that and gives you a residential flat. Which one your trip actually needs.",
    minRead: 6,
  },
  {
    slug: "serviced-apartment-council-tax",
    pillar: "Legal",
    title: "Council tax on a serviced apartment: who actually pays it?",
    summary:
      "The operator pays. You don't. Here's the legal basis (Local Government Finance Act 1992), the under-90-night holiday-let route, and why long stays stay tax-efficient.",
    minRead: 5,
  },
  {
    slug: "best-area-to-stay-london-business",
    pillar: "Location",
    title: "Best area to stay in London for a business trip",
    summary:
      "Tech goes Shoreditch. Finance goes Barbican / Farringdon. Pharma goes Kensington. PE / VC / legal go Mayfair. Government goes Pimlico. Heathrow-heavy travel goes Maida Vale. Industry-by-industry area picker.",
    minRead: 6,
  },
  {
    slug: "long-stay-regents-park-marylebone",
    pillar: "Neighbourhood",
    title: "Long-stay serviced apartments in Regent's Park & Marylebone",
    summary:
      "The flagship Staylio neighbourhood — about a dozen apartments across Georgian townhouses and mansion blocks. The long-stay price step-down, the HMRC VAT relief maths, and who picks Marylebone for one to six months.",
    minRead: 6,
  },
  {
    slug: "airbnb-monthly-stay-london",
    pillar: "Cost",
    title: "Airbnb monthly stay in London: how the maths actually works",
    summary:
      "The headline 30-50% Airbnb monthly discount versus the all-in serviced apartment rate. Worked 28-night example with service fees, cleaning, council tax, and HMRC VAT relief. When Airbnb wins, when Staylio wins.",
    minRead: 7,
  },
  {
    slug: "what-is-included-serviced-apartment",
    pillar: "Basics",
    title: "What is included in a serviced apartment? The full Staylio list",
    summary:
      "Twelve-category inclusion checklist from kitchen and pantry through laundry, connectivity, climate, and safety. The items most guests don't think to ask about until night three.",
    minRead: 5,
  },
  {
    slug: "long-stay-tax-london",
    pillar: "Cost",
    title: "Long-stay accommodation tax: the 28-night threshold",
    summary:
      "Why corporate clients save 20 % VAT after night 29, what evidence HMRC actually wants, and how procurement teams should structure a relocation booking to qualify.",
    minRead: 8,
  },
  {
    slug: "serviced-apartment-vs-hotel-london",
    pillar: "Choice",
    title: "Serviced apartment vs hotel: the maths after 14 nights",
    summary:
      "By night 14 the price-per-night gap typically reverses. Here's the breakdown — bundled bills, kitchen value, laundry, and the hidden costs hotels don't tell you about until checkout.",
    minRead: 9,
  },
  {
    slug: "london-90-day-short-let-rule",
    pillar: "Legal",
    title: "London's 90-day short-let rule, explained for guests",
    summary:
      "Why some London apartments quietly cap stays at 89 nights, what change-of-use planning permission actually means, and how to tell whether your booking is compliant before you arrive.",
    minRead: 7,
  },
];

export default function GuidesIndexPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-stone-500">Guides</p>
      <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900">
        The practical bits, written down.
      </h1>
      <p className="mt-6 text-lg text-stone-700 leading-relaxed max-w-2xl">
        Honest guides to long-stay London accommodation — the cost maths, the legal bits,
        and how to pick the right neighbourhood for what you&rsquo;re actually doing here. Written
        by{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">
          Ali Hassan
        </Link>
        , Direct Bookings Lead at Staylio.
      </p>

      <div className="mt-16 grid gap-8">
        {GUIDES.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="group block rounded-2xl border border-stone-200 bg-white p-8 transition hover:border-stone-400 hover:shadow-sm"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-xs uppercase tracking-widest text-stone-500">{g.pillar}</span>
              <span className="text-xs text-stone-500">{g.minRead} min read</span>
            </div>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-stone-900 group-hover:underline underline-offset-4">
              {g.title}
            </h2>
            <p className="mt-3 text-stone-700 leading-relaxed">{g.summary}</p>
            <p className="mt-5 text-sm text-stone-500 group-hover:text-stone-900">Read the guide →</p>
          </Link>
        ))}
      </div>

      <div className="mt-20 border-t border-stone-200 pt-10">
        <h2 className="font-serif text-3xl text-stone-900">Have a question we haven&rsquo;t written about?</h2>
        <p className="mt-4 text-stone-700">
          WhatsApp{" "}
          <a className="underline underline-offset-4 hover:text-stone-900" href="https://wa.me/447375621453">
            Ali on +44 7375 621453
          </a>{" "}
          or email{" "}
          <a className="underline underline-offset-4 hover:text-stone-900" href="mailto:hello@staylio.london">
            hello@staylio.london
          </a>
          . If it&rsquo;s a question worth answering once and writing down properly, it ends up on this
          page next.
        </p>
      </div>
    </article>
  );
}
