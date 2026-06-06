import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare Staylio with other London serviced apartment operators",
  description:
    "Honest, side-by-side comparisons between Staylio and the other Central London serviced apartment operators — Sonder, SACO, Native Places, Cheval Residences, Locke, and SilverDoor. Written by Ali Hassan, Direct Bookings Lead.",
  alternates: { canonical: "https://staylio.london/vs" },
};

const COMPARISONS = [
  {
    slug: "sonder-london",
    competitor: "Sonder",
    pillar: "Tech-first chain",
    summary:
      "Sonder is the design-led app-led short-stay chain. Staylio is the boutique-curated 40-apartment operator with a human on WhatsApp. Side-by-side on price, contact, neighbourhoods, and check-in.",
    minRead: 7,
  },
  {
    slug: "native-vs-staylio",
    competitor: "Native Places",
    pillar: "Aparthotel",
    summary:
      "Native is the design-led aparthotel — reception, bar, lounge, kitchenette unit. Staylio is the pure serviced apartment — full kitchen, no front desk, residential block. Honest side-by-side.",
    minRead: 7,
  },
  {
    slug: "london-serviced-apartments",
    competitor: "The whole London market",
    pillar: "Operator scorecard",
    summary:
      "Side-by-side of nine London operators — SACO, Edyn, Locke, Native, Cheval, SilverDoor, Cove, Sonder, Staylio. Format, scale, best-for, watch-outs. Quick pickers by stay length and use case.",
    minRead: 9,
  },
];

export default function VsIndexPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-stone-500">Compare</p>
      <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900">
        Honest comparisons. No flame-throwing.
      </h1>
      <p className="mt-6 text-lg text-stone-700 leading-relaxed max-w-2xl">
        Side-by-side comparisons between Staylio and the other Central London serviced
        apartment operators. We&rsquo;ll tell you when the other operator is the right
        call — that&rsquo;s usually the most useful answer.
      </p>

      <div className="mt-16 grid gap-8">
        {COMPARISONS.map((c) => (
          <Link
            key={c.slug}
            href={`/vs/${c.slug}`}
            className="group block rounded-2xl border border-stone-200 bg-white p-8 transition hover:border-stone-400 hover:shadow-sm"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-xs uppercase tracking-widest text-stone-500">{c.pillar}</span>
              <span className="text-xs text-stone-500">{c.minRead} min read</span>
            </div>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-stone-900 group-hover:underline underline-offset-4">
              Staylio vs {c.competitor}
            </h2>
            <p className="mt-3 text-stone-700 leading-relaxed">{c.summary}</p>
            <p className="mt-5 text-sm text-stone-500 group-hover:text-stone-900">Read the comparison →</p>
          </Link>
        ))}
      </div>

      <div className="mt-20 border-t border-stone-200 pt-10">
        <h2 className="font-serif text-3xl text-stone-900">Comparing us to someone we haven&rsquo;t written about?</h2>
        <p className="mt-4 text-stone-700">
          WhatsApp{" "}
          <a className="underline underline-offset-4 hover:text-stone-900" href="https://wa.me/447375621453">
            Ali on +44 7375 621453
          </a>
          . Tell me which operator you&rsquo;re weighing us against, and I&rsquo;ll come back
          with an honest take by reply. If it&rsquo;s worth writing down properly, it ends up here next.
        </p>
      </div>
    </article>
  );
}
