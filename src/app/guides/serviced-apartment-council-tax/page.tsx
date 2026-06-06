import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, guideArticleSchema, faqSchema } from "@/lib/schema";

const SLUG = "serviced-apartment-council-tax";
const PUBLISHED = "2026-06-06T00:00:00Z";
const HEADLINE = "Council tax on a serviced apartment: who actually pays it?";
const DESCRIPTION =
  "Council tax on a UK serviced apartment is the operator's problem, not the guest's. Here's how the rules work for stays under 90 nights, what changes after that, and why Staylio bundles council tax into the nightly rate so you never see a bill.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: `https://staylio.london/guides/${SLUG}` },
  openGraph: { title: HEADLINE, description: DESCRIPTION, url: `https://staylio.london/guides/${SLUG}`, type: "article" },
};

const FAQS = [
  {
    question: "Do I pay council tax in a serviced apartment?",
    answer:
      "No. The operator carries the council-tax liability and bundles the cost into the nightly rate. You never receive a council-tax bill, never register with the local authority, and never appear on the electoral roll for that address. This is one of the defining differences between a serviced apartment (operator-paid) and an assured shorthold tenancy (tenant-paid).",
  },
  {
    question: "What's the legal basis for that?",
    answer:
      "Two routes depending on stay length. For stays under 90 nights, the apartment qualifies as holiday accommodation under the Local Government Finance Act 1992 (sections 6-7), and the operator pays a single business-rate-style charge instead of standard residential council tax. For stays beyond 90 nights, the building usually sits in the operator's commercial classification and the long-term liability remains with them as the licence-holder.",
  },
  {
    question: "What about the 90-day London short-let cap?",
    answer:
      "Different law. The 90-day cap (Greater London Council General Powers Act 1973, as amended) limits how long a residential property can be let on short-stay terms without change-of-use planning permission. Some serviced apartments have explicit change-of-use permission and can be let beyond 89 nights; others (Airbnb hosts in particular) work around the cap. Council tax and the 90-day cap are separate issues, even when they overlap.",
  },
  {
    question: "Will my employer be billed council tax for a relocation stay?",
    answer:
      "No. The bundled rate is what you (or your employer) pay. There is no separate council-tax invoice. Procurement teams find this easier — one accommodation expense line rather than two. See the{' '}",
  },
  {
    question: "Does HMRC's 80% VAT reduction interact with this?",
    answer:
      "Slightly. HMRC's accommodation VAT rule (VAT Notice 709/3) reduces the effective VAT rate by 80% on stays of 28+ continuous nights in the same room — meaning long-stay accommodation gets a notable tax break. Council tax sits separately from VAT; both work in your favour on a long stay. See the long-stay tax guide for the full mechanics.",
  },
  {
    question: "Can I get a council-tax discount as a guest?",
    answer:
      "Not in a serviced apartment — because you never pay council tax to begin with. The standard residential council-tax discounts (single-occupant, student exemption, disability reduction) apply to assured shorthold tenancies and owner-occupiers, not to short-stay holiday accommodation.",
  },
];

export default function CouncilTaxGuide() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <JsonLd
        data={[
          guideArticleSchema({
            slug: SLUG,
            headline: HEADLINE,
            description: DESCRIPTION,
            datePublished: PUBLISHED,
            keywords: ["serviced apartment council tax", "council tax holiday let UK", "do you pay council tax in a serviced apartment", "council tax long stay London"],
            about: "Council tax liability on UK serviced apartments",
          }),
          faqSchema(FAQS),
        ]}
      />
      <p className="text-sm uppercase tracking-widest text-stone-500">Guides · Legal</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-stone-900">{HEADLINE}</h1>
      <p className="mt-4 text-sm text-stone-500">
        Published 6 June 2026 · By{" "}
        <Link href="/contact#ali-hassan" className="underline underline-offset-4 hover:text-stone-900">Ali Hassan</Link>, Direct Bookings Lead · 5 min read
      </p>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <p className="text-sm font-medium text-stone-900">TL;DR</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          Council tax on a UK serviced apartment is the operator's problem, not the
          guest's. At Staylio it's bundled into the nightly rate. You receive no bill,
          register with no local authority, and stay off the electoral roll for that
          address. This is one of the defining differences between a serviced apartment
          and renting a flat under an assured shorthold tenancy.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">How the law works (short version)</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Council tax follows the legal occupier of a property. In a serviced apartment,
        the legal occupier is the operator under a licence; you're a guest with a
        short-term right to occupy. The operator is the council-tax-liable party,
        which is why Staylio bundles it into the rate. There is no path by which a
        guest receives a council-tax bill for a Staylio stay.
      </p>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Two regulatory routes apply depending on stay length:
      </p>
      <ul className="mt-6 space-y-3 text-stone-700 leading-relaxed">
        <li>
          <span className="font-medium text-stone-900">Stays under 90 nights:</span>{" "}
          the apartment is treated as holiday accommodation. The operator pays a
          single business-rate-style charge that replaces standard residential council
          tax (Local Government Finance Act 1992, sections 6-7).
        </li>
        <li>
          <span className="font-medium text-stone-900">Stays of 90+ nights:</span> the
          building sits in the operator's commercial classification, with the long-term
          council-tax liability staying with them as the licence-holder. Practically
          identical from the guest's view.
        </li>
      </ul>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Why this matters for long stays</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        For corporate relocations and project stays of one to six months, council tax
        on an equivalent assured shorthold tenancy in Central London is typically
        £1,800-3,000 a year (Band D-F). On a six-month stay that's £900-1,500 you don't
        pay at a serviced apartment because it's already in the bundled rate. Combined
        with the HMRC 28-night VAT reduction (see{" "}
        <Link href="/guides/long-stay-tax-london" className="underline underline-offset-4 hover:text-stone-900">long-stay tax guide</Link>
        ), long stays in serviced apartments are markedly tax-efficient versus traditional
        rentals.
      </p>

      <h2 className="mt-12 font-serif text-2xl text-stone-900">Where Staylio fits</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Council tax is one of the five bundled bills at Staylio — alongside
        electricity, water, heating, and Wi-Fi. See the full inclusion list at{" "}
        <Link href="/guides/are-bills-included-serviced-apartments" className="underline underline-offset-4 hover:text-stone-900">are bills included</Link>{" "}
        or browse the{" "}
        <Link href="/apartments" className="underline underline-offset-4 hover:text-stone-900">catalogue</Link>.
        For HMRC long-stay accommodation rules, read the{" "}
        <Link href="/guides/long-stay-tax-london" className="underline underline-offset-4 hover:text-stone-900">28-night threshold guide</Link>.
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
        <h2 className="font-serif text-3xl text-stone-50">No bills. One rate.</h2>
        <p className="mt-4 text-stone-300 leading-relaxed">WhatsApp Ali for the apartment and the one all-in number that covers it.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/447375621453?text=Hi%20Ali%2C%20I%27m%20looking%20at%20a%20long%20stay%20and%20want%20no%20council%20tax%20hassle.%20Dates%3A%20" className="inline-flex items-center justify-center rounded-full bg-stone-50 px-6 py-3 text-stone-900 font-medium hover:bg-stone-200 transition">WhatsApp Ali</a>
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
