import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "serviced-apartments-with-washing-machine-london";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "Serviced apartments with a washing machine in London";
const DESCRIPTION =
  "Every Staylio apartment in Central London has an in-unit washer-dryer with detergent supplied. Here's why it matters more than guests expect on stays longer than four nights, and the operators that don't bundle it.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/guides/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/guides/${SLUG}`, type: "article" },
};

const FAQS = [
  {
    question: "Do all Staylio apartments have a washing machine?",
    answer:
      "Yes — every apartment has an in-unit washer-dryer (combined unit) or a separate washer plus a dryer where space allows. Detergent and fabric softener are supplied as a starter pack on arrival. No on-site laundry rooms, no hotel laundry queue, no quarters required.",
  },
  {
    question: "Washer-dryer combo or separate units?",
    answer:
      "Most Central London serviced apartments use combined washer-dryer units because UK kitchens are smaller than US ones — the same appliance washes and dries one drum. A few larger apartments have separate machines stacked. Both work; combined units are slightly slower per full cycle but only need one appliance footprint.",
  },
  {
    question: "How fast is a typical cycle?",
    answer:
      "Wash-only: 1.5-2 hours. Wash + dry combined: 3-4 hours start to finish. For a one-week stay one cycle mid-week covers the laundry. For a one-month relocation we typically see guests run two cycles a week.",
  },
  {
    question: "Is washing-up liquid and dishwasher detergent also included?",
    answer:
      "Yes. The starter pack on arrival has washing-up liquid, dishwasher tabs (or powder where the machine prefers it), and surface cleaner. Top-ups are at your usual corner shop — no Staylio store run required.",
  },
  {
    question: "Can I dry-clean items at the apartment?",
    answer:
      "Not on the appliance — washer-dryers don't dry-clean. But every Staylio neighbourhood has a dry-cleaner within five minutes' walk. We can recommend one and most do same-day or next-day return. For business stays where a suit needs pressing the night before a meeting, this works fine.",
  },
];

export default function WithWashingMachineGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: ["serviced apartments with washing machine London", "London apartment washer dryer", "self-catering apartment London laundry"],
            about: "Serviced apartment laundry amenities",
          }),
          faqSchema(FAQS),
        ]}
      />
      <p className="text-sm uppercase tracking-widest text-stone-500">Guides · Amenities</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Published 6 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">Ali Hassan</Link>, Direct Bookings Lead · 4 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          Every Staylio apartment has an in-unit washer-dryer. Detergent supplied. No queueing for
          a hotel laundry, no taxi to a launderette, no £8-per-shirt hotel pricing. Beyond four
          nights this single feature usually decides between a hotel and a serviced apartment for
          guests who travel with a carry-on.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Why a washing machine matters more than guests expect</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Hotels charge £6-12 per shirt for laundry, £15-25 for a suit, and the turnaround is
        usually 24 hours. For a four-night business trip the maths is fine; for a fortnight it
        adds up to £150-300 you do not need to spend. Worse, on weekends the hotel laundry service
        is often closed.
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        For relocators with a family, an in-unit washer-dryer is non-negotiable. Children's
        clothes, school sports kit, swimming towels — there is no living through a month-long
        relocation without one.
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        For digital nomads and consultants, it is the difference between packing two weeks of
        clothes and packing four days' worth, which fits in a carry-on. Less luggage, fewer
        airport queues.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Who DOESN'T bundle a washer-dryer?</h2>
      <ul className="mt-6 space-y-3 text-stone-700 leading-relaxed">
        <li><span className="font-medium text-stone-900">Aparthotels (Locke, Native at some locations).</span> Many have shared laundry rooms instead, which means quarters or an app and a walk to the basement.</li>
        <li><span className="font-medium text-stone-900">Smaller Sonder studios.</span> Some include laundry, some do not — check the listing carefully.</li>
        <li><span className="font-medium text-stone-900">Hotel-converted aparthotels.</span> Often re-purpose hotel rooms; kitchenettes yes, in-unit washers rarely.</li>
        <li><span className="font-medium text-stone-900">Airbnb at the budget end.</span> Highly variable. Filter the search to "washer" and "dryer" or you'll waste time.</li>
      </ul>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Where Staylio fits</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Every Staylio apartment in{" "}
        <Link href="/locations" className="underline underline-offset-4 hover:text-stone-900">all seven Central London neighbourhoods</Link>{" "}
        has an in-unit washer-dryer. Browse the{" "}
        <Link href="/apartments" className="underline underline-offset-4 hover:text-stone-900">full catalogue</Link>{" "}
        or read our{" "}
        <Link href="/guides/what-is-a-serviced-apartment" className="underline underline-offset-4 hover:text-stone-900">serviced-apartment guide</Link>{" "}
        for the full inclusion list.
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
        <h2 className="font-serif text-3xl text-stone-50">Pack lighter. Stay longer.</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">WhatsApp Ali — every apartment on the catalogue includes the washer-dryer.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20I%20need%20an%20apartment%20with%20a%20washer-dryer.%20Dates%3A%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
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
