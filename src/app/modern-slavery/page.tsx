import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Modern slavery and human trafficking statement",
  description:
    "Voluntary Modern Slavery Act statement from Staylio Limited covering policies, supplier due diligence, and review schedule.",
};

const FINANCIAL_YEAR = "year ending 31 March 2027";
const PUBLISHED = "5 June 2026";

export default function ModernSlaveryPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-stone-500">Policy</p>
      <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900">
        Modern slavery &amp; human trafficking statement
      </h1>

      <div className="mt-10 space-y-6 text-lg text-stone-700 leading-relaxed">
        <p>
          Staylio Limited is committed to operating with integrity in all its activities and to
          ensuring slavery and human trafficking have no place in its operations or supply chain.
        </p>
        <p>
          Our turnover is below the £36 million statutory threshold under section 54 of the Modern
          Slavery Act 2015, so publication is voluntary. We choose to publish to give guests,
          corporate clients, and partners visibility of the steps we take.
        </p>
      </div>

      <h2 className="mt-16 font-serif text-3xl text-stone-900">Our business</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Staylio Limited operates fully equipped serviced apartments across Central London for
        short, mid, and long-stay guests. The company is registered in England and Wales (company
        number 17012831), with its registered office at 85 Frampton Street, London NW8 8NQ.
      </p>

      <h2 className="mt-16 font-serif text-3xl text-stone-900">Our supply chain</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        Our supply chain is small and largely UK-based. It includes:
      </p>
      <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-6">
        <li>UK-registered housekeeping, laundry, and maintenance contractors</li>
        <li>UK-registered insurance providers (Allianz, Aqueous Management)</li>
        <li>UK-registered furniture and consumables suppliers</li>
        <li>Software and payment processors based in the EU/UK with their own modern slavery commitments</li>
      </ul>

      <h2 className="mt-16 font-serif text-3xl text-stone-900">Our policies</h2>
      <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-6">
        <li>
          <strong className="font-medium text-stone-900">Recruitment.</strong> All staff and
          contractors have a written agreement, are paid at or above the National Living Wage, and
          have full Right-to-Work checks completed before they begin work.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Supplier due diligence.</strong> New
          supplier engagements include confirmation of UK business registration and a request for
          their own modern slavery position. We do not engage suppliers we cannot verify.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Whistleblowing.</strong> Anyone — staff,
          contractor, supplier, guest — can raise a concern confidentially by emailing{" "}
          <a className="underline underline-offset-4 hover:text-stone-900" href="mailto:hello@staylio.london">
            hello@staylio.london
          </a>
          . Concerns are reviewed by the company director.
        </li>
        <li>
          <strong className="font-medium text-stone-900">Training.</strong> Onboarding for new
          staff and contractors includes a written briefing on the indicators of modern slavery and
          how to report them.
        </li>
      </ul>

      <h2 className="mt-16 font-serif text-3xl text-stone-900">Risk assessment</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        We assess our highest-risk areas as: cleaning and laundry contractors (sector-wide risk in
        the UK), and furniture and consumables sourced from overseas manufacturers. We mitigate by
        using contractors registered in the UK, requesting their own anti-slavery position, and
        favouring suppliers with traceable manufacturing.
      </p>

      <h2 className="mt-16 font-serif text-3xl text-stone-900">Reviewing this statement</h2>
      <p className="mt-4 text-stone-700 leading-relaxed">
        This statement covers the {FINANCIAL_YEAR} and will be reviewed annually. It is approved
        by the director of Staylio Limited.
      </p>

      <p className="mt-12 text-sm text-stone-500">
        Published {PUBLISHED} by Staylio Limited (Companies House 17012831), 85 Frampton Street,
        London NW8 8NQ. Get in touch:{" "}
        <Link href="/contact" className="underline underline-offset-4 hover:text-stone-900">
          /contact
        </Link>
        .
      </p>
    </article>
  );
}
