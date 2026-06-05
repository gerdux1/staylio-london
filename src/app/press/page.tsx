import type { Metadata } from "next";
import { JsonLd, breadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Press kit · Staylio",
  description:
    "Press kit for Staylio London serviced apartments. Brand assets, founder bio, fact sheet, image library, and media contact.",
  alternates: { canonical: "https://staylio.london/press" },
  openGraph: {
    title: "Press kit · Staylio",
    description: "Brand assets, fact sheet, and media contact for Staylio London serviced apartments.",
    url: "https://staylio.london/press",
    type: "website",
  },
};

export default function PressPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <JsonLd
        data={[
          breadcrumb([
            { name: "Home", url: "https://staylio.london" },
            { name: "Press", url: "https://staylio.london/press" },
          ]),
        ]}
      />

      <p className="text-sm uppercase tracking-widest text-stone-500">Press kit</p>
      <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900">For editors, journalists, and bookers.</h1>
      <p className="mt-6 text-lg text-stone-700 leading-relaxed">
        Everything you need to write about Staylio in one place. Brand facts, photography,
        bookable apartments, and a direct line to our team.
      </p>

      <section className="mt-12">
        <h2 className="font-serif text-3xl text-stone-900">Fact sheet</h2>
        <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 text-stone-700">
          <div>
            <dt className="font-medium text-stone-900">Founded</dt>
            <dd>Staylio Limited incorporated at Companies House 17012831</dd>
          </div>
          <div>
            <dt className="font-medium text-stone-900">Registered office</dt>
            <dd>85 Frampton Street, London NW8 8NQ</dd>
          </div>
          <div>
            <dt className="font-medium text-stone-900">Inventory</dt>
            <dd>43 fully equipped serviced apartments</dd>
          </div>
          <div>
            <dt className="font-medium text-stone-900">Neighbourhoods</dt>
            <dd>7 Central London areas, within 6 km of Marylebone</dd>
          </div>
          <div>
            <dt className="font-medium text-stone-900">Apartment sizes</dt>
            <dd>Studio to 4-bed, sleeping up to 10 guests</dd>
          </div>
          <div>
            <dt className="font-medium text-stone-900">Minimum stay</dt>
            <dd>3 nights, with long-stay rates from one week</dd>
          </div>
          <div>
            <dt className="font-medium text-stone-900">Direct-rate promise</dt>
            <dd>At least 10% lower than the same apartment on Booking.com or Airbnb</dd>
          </div>
          <div>
            <dt className="font-medium text-stone-900">Bills included</dt>
            <dd>Electricity, water, heating, Wi-Fi, council tax</dd>
          </div>
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl text-stone-900">What makes Staylio different</h2>
        <ol className="mt-6 list-decimal pl-6 space-y-3 text-stone-700">
          <li>
            <span className="font-medium text-stone-900">Independent, not a chain.</span>{" "}
            Staylio is owner-operated, not a franchise of SACO, Native, Sonder, or similar.
            Every apartment is selected and maintained directly by the Staylio team.
          </li>
          <li>
            <span className="font-medium text-stone-900">Direct rate always beats OTAs.</span>{" "}
            Without platform commission, the discount is passed back to guests as a guaranteed
            at-least-10% saving versus the same apartment on Booking.com or Airbnb.
          </li>
          <li>
            <span className="font-medium text-stone-900">Real-person support.</span>{" "}
            Direct bookings lead Ali Hassan responds personally on WhatsApp, typically within
            15 minutes during UK hours. No ticket numbers, no offshore call centres.
          </li>
          <li>
            <span className="font-medium text-stone-900">Self check-in, any hour.</span>{" "}
            Smart-lock entry on every apartment; access codes delivered by WhatsApp pre-arrival.
          </li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl text-stone-900">Story angles</h2>
        <p className="mt-3 text-sm text-stone-600">Ideas we can speak to with portfolio data and named guests (with permission).</p>
        <ul className="mt-6 list-disc pl-6 space-y-2 text-stone-700">
          <li>How independent London operators are taking direct bookings back from Booking.com and Airbnb</li>
          <li>The 28-day rule: why HMRC's VAT reduction matters for relocation budgets</li>
          <li>What corporate clients ask for that hotels can't deliver (kitchens, laundry, real desks)</li>
          <li>Marylebone vs Shoreditch vs Mayfair: where to base a London project team in 2026</li>
          <li>The case against aparthotel chains: why guests prefer independent operators on long stays</li>
          <li>Smart-lock check-in: how UK serviced apartments are removing the front desk</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl text-stone-900">Brand assets</h2>
        <ul className="mt-6 list-disc pl-6 space-y-2 text-stone-700">
          <li>
            <a href="/icon.svg" className="underline underline-offset-4">Staylio favicon SVG</a> · cream + stone-900
          </li>
          <li>
            <a href="/apple-icon.svg" className="underline underline-offset-4">Staylio app icon SVG</a>
          </li>
          <li>
            <a href="/llms.txt" className="underline underline-offset-4">llms.txt</a>{" "}
            and{" "}
            <a href="/ai.txt" className="underline underline-offset-4">ai.txt</a>{" "}
            — machine-readable brand facts
          </li>
          <li>
            <a href="/ai-search-data" className="underline underline-offset-4">AI knowledge base</a> — full structured fact sheet
          </li>
          <li>
            <a href="/sitemap.xml" className="underline underline-offset-4">sitemap.xml</a>{" "}
            with image entries for every apartment
          </li>
          <li>
            Higher-resolution apartment imagery available on request — email{" "}
            <a href="mailto:hello@staylio.london" className="underline underline-offset-4">hello@staylio.london</a>{" "}
            with publication and angle.
          </li>
        </ul>
      </section>

      <section className="mt-12 rounded-2xl border border-stone-200 bg-stone-50 p-7">
        <h2 className="font-serif text-3xl text-stone-900">Media contact</h2>
        <p className="mt-3 text-stone-700">
          Ali Hassan · Direct Bookings Lead
        </p>
        <p className="mt-2 text-stone-700">
          Email:{" "}
          <a className="underline underline-offset-4" href="mailto:hello@staylio.london?subject=Press%20enquiry">
            hello@staylio.london
          </a>
        </p>
        <p className="mt-1 text-stone-700">
          WhatsApp:{" "}
          <a className="underline underline-offset-4" href="https://wa.me/447375621453">
            +44 7375 621453
          </a>
        </p>
        <p className="mt-4 text-xs text-stone-500">
          For exclusive features, named-guest case studies, or on-site visits, give us 5
          working days. We can usually accommodate same-week fact-checks and quote requests.
        </p>
      </section>

      <p className="mt-12 text-xs text-stone-500">
        Last updated on build. Companies House 17012831 · staylio.london
      </p>
    </article>
  );
}
