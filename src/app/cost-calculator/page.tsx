import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "./Calculator";
import { LISTINGS } from "@/lib/listings";

export const metadata: Metadata = {
  title: "Cost calculator — Staylio vs hotel vs OTA",
  description:
    "Estimate the cost of a Staylio serviced-apartment stay vs a comparable hotel and a typical OTA mark-up. Indicative pricing for short, mid, and long stays across Central London.",
};

// Surface to the client a minimal listing index — slug, area, fromGbpPerNight,
// title — so it can populate the dropdown without shipping the entire 50-row
// listings payload. The /api/quote endpoint does the heavy maths.
const LISTING_INDEX = LISTINGS.map((l) => ({
  slug: l.slug,
  title: l.title,
  area: l.area,
  areaLabel: l.areaLabel,
  bedrooms: l.bedrooms,
  maxGuests: l.maxGuests,
  fromGbpPerNight: l.fromGbpPerNight,
}));

export default function CostCalculatorPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-stone-500">Cost calculator</p>
      <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-stone-900">
        What will it actually cost?
      </h1>
      <p className="mt-6 text-lg text-stone-700 leading-relaxed max-w-2xl">
        Pick an apartment, your stay length, and party size. We&rsquo;ll show what Staylio costs
        you direct, what a comparable 4-star hotel realises (headline + unbundled extras), and
        what the same Staylio apartment would cost via Booking.com or Airbnb. All indicative — the
        confirmed quote comes from a quick WhatsApp.
      </p>

      <div className="mt-12">
        <Calculator listings={LISTING_INDEX} />
      </div>

      <section className="mt-20 grid gap-8 sm:grid-cols-2">
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <h2 className="font-serif text-2xl text-stone-900">How the numbers work</h2>
          <ul className="mt-3 space-y-2 text-sm text-stone-700 leading-relaxed list-disc pl-5">
            <li>
              <strong className="font-medium text-stone-900">Staylio</strong>: from-rate from the
              apartment&rsquo;s live listing, with length-of-stay discount applied (10% at 7+
              nights, 15% at 14+, 25% at 28+).
            </li>
            <li>
              <strong className="font-medium text-stone-900">Long-stay VAT relief</strong> applied
              automatically for stays over 28 nights, per{" "}
              <Link href="/guides/long-stay-tax-london" className="underline underline-offset-4 hover:text-stone-900">
                HMRC Notice 709/3
              </Link>
              .
            </li>
            <li>
              <strong className="font-medium text-stone-900">Hotel realised</strong>: indicative
              4-star headline rate by neighbourhood + £30/night unbundled extras (breakfast, Wi-Fi
              premium, mid-stay laundry).
            </li>
            <li>
              <strong className="font-medium text-stone-900">OTA</strong>: same Staylio apartment,
              marked up 15% to reflect typical Booking.com / Airbnb platform commission passed back
              to the guest.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <h2 className="font-serif text-2xl text-stone-900">Want a confirmed quote?</h2>
          <p className="mt-3 text-stone-700 leading-relaxed">
            The calculator gives a structural estimate, not your final invoice. For dates,
            availability, and an exact rate:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-stone-700">
            <li>
              WhatsApp{" "}
              <a className="underline underline-offset-4 hover:text-stone-900" href="https://wa.me/447375621453">
                Ali on +44 7375 621453
              </a>
            </li>
            <li>
              Email{" "}
              <a className="underline underline-offset-4 hover:text-stone-900" href="mailto:hello@staylio.london">
                hello@staylio.london
              </a>
            </li>
            <li>
              Browse{" "}
              <Link href="/apartments" className="underline underline-offset-4 hover:text-stone-900">
                all 50 apartments
              </Link>{" "}
              and pick the right unit first
            </li>
          </ul>
        </div>
      </section>

      <p className="mt-12 text-xs text-stone-500 leading-relaxed">
        The calculator is also available as a JSON tool surface for AI agents at{" "}
        <a className="underline underline-offset-4 hover:text-stone-900" href="/api/quote">
          /api/quote
        </a>{" "}
        (POST). Full inventory at{" "}
        <a className="underline underline-offset-4 hover:text-stone-900" href="/api/apartments">
          /api/apartments
        </a>
        .
      </p>
    </article>
  );
}
