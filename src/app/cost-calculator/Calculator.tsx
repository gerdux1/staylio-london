"use client";

import { useMemo, useState } from "react";

type ListingIndex = {
  slug: string;
  title: string;
  area: string;
  areaLabel: string;
  bedrooms: number;
  maxGuests: number;
  fromGbpPerNight: number;
};

type QuoteResponse = {
  apartment: { title: string; areaLabel: string; bedrooms: number; sizeSqm: number; maxGuests: number };
  stay: { nights: number; guests: number; sleepsTooMany: boolean; fitsInBookingPolicy: boolean };
  staylio: { nightlyRate: number; discount: { pct: number; label: string }; total: number; vatTreatment: "standard" | "long-stay-relief" };
  comparison: {
    hotel: { nightlyRate: number; unbundledExtrasPerNight: number; realisedTotal: number };
    ota: { nightlyRate: number; total: number; operator: string };
  };
  savings: { vsHotel: number; vsHotelPct: number; vsOta: number; vsOtaPct: number };
  contact: { whatsapp: string; email: string; bookingUrl: string };
  disclaimer: string;
};

const NIGHT_PRESETS = [3, 7, 14, 30, 60, 90];
const AREAS = [
  { slug: "regents-park-marylebone", label: "Regent's Park & Marylebone" },
  { slug: "old-street-shoreditch", label: "Old Street & Shoreditch" },
  { slug: "kensington-hammersmith", label: "Kensington & Hammersmith" },
  { slug: "fitzrovia-mayfair", label: "Fitzrovia & Mayfair" },
  { slug: "barbican-farringdon", label: "Barbican & Farringdon" },
  { slug: "borough-pimlico", label: "Borough & Pimlico" },
  { slug: "little-venice-maida-vale", label: "Little Venice & Maida Vale" },
];

const gbp = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(n);

export default function Calculator({ listings }: { listings: ListingIndex[] }) {
  const [area, setArea] = useState<string>("regents-park-marylebone");
  const [nights, setNights] = useState<number>(14);
  const [guests, setGuests] = useState<number>(2);
  const [bedrooms, setBedrooms] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Pick the cheapest matching apartment in the selected area + bedroom range.
  const matching = useMemo(() => {
    return listings
      .filter((l) => l.area === area && l.bedrooms >= bedrooms && l.maxGuests >= guests)
      .sort((a, b) => a.fromGbpPerNight - b.fromGbpPerNight);
  }, [listings, area, bedrooms, guests]);

  const targetListing = matching[0];

  async function runQuote() {
    if (!targetListing) {
      setError(
        `We don't have a ${bedrooms}-bed Staylio apartment in this neighbourhood that sleeps ${guests}. Try a different combination, or WhatsApp Ali on +44 7375 621453.`
      );
      setQuote(null);
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: targetListing.slug, nights, guests }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `Request failed (${res.status})`);
      }
      const data: QuoteResponse = await res.json();
      setQuote(data);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Something went wrong. Try again or WhatsApp Ali.";
      setError(msg);
      setQuote(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-10">
      {/* Form */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-xs uppercase tracking-widest text-stone-500" htmlFor="area">
            Neighbourhood
          </label>
          <select
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-stone-900 focus:border-stone-900 focus:outline-none"
          >
            {AREAS.map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-stone-500" htmlFor="bedrooms">
            Bedrooms (minimum)
          </label>
          <select
            id="bedrooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-stone-900 focus:border-stone-900 focus:outline-none"
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n}-bed
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-stone-500" htmlFor="guests">
            Guests
          </label>
          <select
            id="guests"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-stone-900 focus:border-stone-900 focus:outline-none"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-stone-500" htmlFor="nights">
            Nights ({nights})
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {NIGHT_PRESETS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setNights(n)}
                className={`rounded-lg border px-3 py-2 text-sm transition ${
                  nights === n
                    ? "border-stone-900 bg-stone-900 text-white"
                    : "border-stone-300 bg-white text-stone-700 hover:border-stone-900"
                }`}
              >
                {n}
              </button>
            ))}
            <input
              type="number"
              min={1}
              max={365}
              value={nights}
              onChange={(e) => setNights(Math.max(1, Math.min(365, Number(e.target.value) || 1)))}
              className="w-20 rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-stone-900 focus:outline-none"
              aria-label="Custom nights"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={runQuote}
          disabled={loading}
          className="rounded-lg bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Calculating…" : "Show me the numbers"}
        </button>
        {targetListing && (
          <p className="text-xs text-stone-500">
            Quoting <strong className="font-medium text-stone-700">{targetListing.title}</strong> (from{" "}
            {gbp(targetListing.fromGbpPerNight)}/night base)
          </p>
        )}
      </div>

      {error && (
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      {/* Result */}
      {quote && (
        <div className="mt-10 border-t border-stone-200 pt-8">
          <p className="text-xs uppercase tracking-widest text-stone-500">Estimate</p>
          <h3 className="mt-2 font-serif text-2xl text-stone-900">
            {quote.apartment.title} · {quote.apartment.areaLabel} · {quote.stay.nights} nights · {quote.stay.guests} guests
          </h3>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border-2 border-stone-900 bg-stone-50 p-5">
              <p className="text-xs uppercase tracking-widest text-stone-700">Staylio direct</p>
              <p className="mt-2 font-serif text-3xl text-stone-900">{gbp(quote.staylio.total)}</p>
              <p className="mt-1 text-xs text-stone-600">
                {gbp(quote.staylio.nightlyRate)}/night · {quote.staylio.discount.label}
              </p>
              {quote.staylio.vatTreatment === "long-stay-relief" && (
                <p className="mt-2 text-xs text-stone-700">Includes long-stay VAT relief (N29+).</p>
              )}
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-5">
              <p className="text-xs uppercase tracking-widest text-stone-500">4-star hotel (est.)</p>
              <p className="mt-2 font-serif text-3xl text-stone-700">{gbp(quote.comparison.hotel.realisedTotal)}</p>
              <p className="mt-1 text-xs text-stone-500">
                {gbp(quote.comparison.hotel.nightlyRate)}/night + ~{gbp(quote.comparison.hotel.unbundledExtrasPerNight)} extras
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-5">
              <p className="text-xs uppercase tracking-widest text-stone-500">Same flat via OTA (est.)</p>
              <p className="mt-2 font-serif text-3xl text-stone-700">{gbp(quote.comparison.ota.total)}</p>
              <p className="mt-1 text-xs text-stone-500">
                {gbp(quote.comparison.ota.nightlyRate)}/night (incl. ~15% platform commission)
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-stone-900 px-5 py-4 text-white">
            <p className="text-sm">
              Staylio direct saves you{" "}
              <strong className="font-medium">
                {gbp(quote.savings.vsHotel)} vs the hotel ({quote.savings.vsHotelPct}%)
              </strong>{" "}
              and{" "}
              <strong className="font-medium">
                {gbp(quote.savings.vsOta)} vs the same flat on an OTA ({quote.savings.vsOtaPct}%)
              </strong>
              .
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={quote.contact.whatsapp}
              className="rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Ali for a confirmed quote
            </a>
            <a
              href={quote.contact.bookingUrl}
              className="rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-900 transition hover:border-stone-900"
            >
              View this apartment
            </a>
          </div>

          <p className="mt-6 text-xs text-stone-500 leading-relaxed">{quote.disclaimer}</p>
        </div>
      )}
    </div>
  );
}
