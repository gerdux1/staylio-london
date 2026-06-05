import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Staylio",
  description:
    "Staylio Limited is an independent London serviced apartment operator. Boutique, curated, warm. Fully equipped apartments across seven Central London neighbourhoods.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-stone-500">About</p>
      <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900">London, lived in properly.</h1>

      <div className="mt-10 space-y-6 text-lg text-stone-700 leading-relaxed">
        <p>
          Staylio is an independent operator of fully equipped serviced apartments across Central
          London. We started because hotels feel impersonal, holiday lets are inconsistent, and
          renting takes weeks of admin you don&rsquo;t have time for.
        </p>
        <p>
          Every apartment is set up so you can arrive, drop your bags, and start living from the
          moment you walk in. Fitted kitchen, fast Wi-Fi, smart TV, fresh linens, full toiletries,
          and all bills already paid. Self check-in is the norm — most apartments use a smart lock so you can arrive any hour; the rest use in-person key handover at a time that works for you. Housekeeping is available on request and included on long-stay
          housekeeping is included; additional cleans are available on request.
        </p>
        <p>
          We&rsquo;re a small team of real people. When something needs sorting, you can WhatsApp
          us. No call centres, no ticket numbers, no chasing.
        </p>
      </div>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">What we believe</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {[
          { t: "Space matters", b: "A real kitchen, a proper desk, and a sofa to sprawl on aren't luxuries. They're the difference between surviving a long trip and enjoying one." },
          { t: "Bills should be simple", b: "One rate. Electricity, water, heating, Wi-Fi, council tax, all in. No surprise charges on departure." },
          { t: "Support means people", b: "Our guest team have names, faces, and WhatsApp. Every message gets a real human reply, usually within 15 minutes." },
          { t: "Direct is better", b: "Our direct rates are always at least 10% lower than the same apartment listed on Booking.com or Airbnb, because we don't pay commission, we pass the saving back to you." },
        ].map((v) => (
          <div key={v.t}>
            <h3 className="font-serif text-xl text-stone-900">{v.t}</h3>
            <p className="mt-2 text-stone-700">{v.b}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-20 font-serif text-3xl text-stone-900">Company information</h2>
      <dl className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 text-sm text-stone-700">
        <div>
          <dt className="font-medium text-stone-900">Legal entity</dt>
          <dd>Staylio Limited</dd>
        </div>
        <div>
          <dt className="font-medium text-stone-900">Companies House</dt>
          <dd>
            <a
              href="https://find-and-update.company-information.service.gov.uk/company/17012831"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              17012831
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-medium text-stone-900">Registered office</dt>
          <dd>85 Frampton Street, London NW8 8NQ</dd>
        </div>
        <div>
          <dt className="font-medium text-stone-900">Contact</dt>
          <dd>hello@staylio.london</dd>
        </div>
      </dl>

      {/* Insurance & compliance — source: Entity Registry "Compliance & Memberships" tab.
          Only credentials Staylio Limited specifically holds — no cross-entity stuff from EPL/LERM. */}
      <h2 className="mt-20 font-serif text-3xl text-stone-900">Insurance &amp; compliance</h2>
      <p className="mt-3 text-sm text-stone-600">
        Staylio Limited carries the insurance and registration cover you&rsquo;d expect from a
        professional London accommodation operator. Every credential below is verifiable against
        the issuer.
      </p>
      <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 text-sm text-stone-700">
        <div>
          <dt className="font-medium text-stone-900">Public Liability insurance</dt>
          <dd>Allianz Insurance Plc · Trades &amp; Professions package · policy 296603665 · valid to 18 May 2027</dd>
        </div>
        <div>
          <dt className="font-medium text-stone-900">Employers Liability insurance</dt>
          <dd>Allianz Insurance Plc · included in the same Trades &amp; Professions package · valid to 18 May 2027</dd>
        </div>
        <div>
          <dt className="font-medium text-stone-900">Professional Indemnity insurance</dt>
          <dd>Aqueous Management Limited · broker policy 894553533 via Premier Line · valid to 18 May 2027</dd>
        </div>
        <div>
          <dt className="font-medium text-stone-900">Insurance broker</dt>
          <dd>Premier Line Insurance Brokers · Megan Aitken</dd>
        </div>
      </dl>
      <p className="mt-6 text-xs text-stone-500">
        Policy references shown for transparency. If you need a copy of any certificate for
        corporate procurement, email{" "}
        <a className="underline underline-offset-4" href="mailto:hello@staylio.london">hello@staylio.london</a>{" "}
        and we&rsquo;ll send it over the same business day.
      </p>

      <div className="mt-16">
        <Link
          href="/apartments"
          className="inline-flex rounded-full bg-stone-900 px-7 py-3 text-sm font-medium text-white hover:bg-stone-700 transition"
        >
          Explore our apartments
        </Link>
      </div>
    </article>
  );
}
