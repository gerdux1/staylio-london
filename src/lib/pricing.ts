// Pricing helpers used by /api/quote, /cost-calculator, and any downstream
// agentic tool surface. All comparison rates here are INDICATIVE — based on
// the table in /guides/serviced-apartment-vs-hotel-london — and surfaced as
// estimates, never as "guaranteed quotes". Real Staylio rates come from BOOM
// PMS once the API integration lands.

import type { Listing, AreaSlug } from "./listings";

// 4-star hotel headline rate by neighbourhood band (mid-2026, indicative).
// Source: /guides/serviced-apartment-vs-hotel-london — public worked example.
const HOTEL_NIGHTLY_BY_AREA: Record<AreaSlug, number> = {
  "fitzrovia-mayfair": 300,
  "regents-park-marylebone": 260,
  "kensington-hammersmith": 250,
  "barbican-farringdon": 230,
  "old-street-shoreditch": 200,
  "borough-pimlico": 180,
  "little-venice-maida-vale": 180,
};

// Average per-night unbundled-extras a hotel guest realises (breakfast, Wi-Fi
// premium, laundry, eating-out frequency). Conservative mid-band.
const HOTEL_EXTRAS_PER_NIGHT = 30;

// Airbnb / OTA premium over the same Staylio apartment, because platforms
// pass commission costs back to guests. Per /guides/serviced-apartment-vs-hotel-london.
const OTA_MARKUP = 0.15;

// Staylio long-stay discount tiers applied to fromGbpPerNight.
// Mid-stay (7+) and long-stay (28+) brackets match the operational policy
// referenced in /corporate and /guides/long-stay-tax-london.
export function staylioLengthDiscount(nights: number): {
  pct: number;
  label: string;
} {
  if (nights >= 28) return { pct: 0.25, label: "Long-stay discount (28+ nights)" };
  if (nights >= 14) return { pct: 0.15, label: "Two-week discount (14-27 nights)" };
  if (nights >= 7) return { pct: 0.10, label: "Week-long discount (7-13 nights)" };
  return { pct: 0, label: "Standard nightly rate" };
}

export type QuoteInput = {
  slug: string;
  nights: number;
  guests: number;
};

export type QuoteResult = {
  apartment: {
    slug: string;
    title: string;
    area: AreaSlug;
    areaLabel: string;
    bedrooms: number;
    maxGuests: number;
    sizeSqm: number;
    fromGbpPerNight: number;
  };
  stay: {
    nights: number;
    guests: number;
    sleepsTooMany: boolean;
    fitsInBookingPolicy: boolean;
  };
  staylio: {
    nightlyRate: number;
    discount: { pct: number; label: string };
    subtotal: number;
    total: number;
    vatTreatment: "standard" | "long-stay-relief";
  };
  comparison: {
    hotel: {
      nightlyRate: number;
      unbundledExtrasPerNight: number;
      realisedTotal: number;
    };
    ota: {
      nightlyRate: number;
      total: number;
      operator: string;
    };
  };
  savings: {
    vsHotel: number;
    vsHotelPct: number;
    vsOta: number;
    vsOtaPct: number;
  };
  contact: {
    whatsapp: string;
    email: string;
    bookingUrl: string;
  };
  disclaimer: string;
  generatedAt: string;
};

const BUILD_TIME = new Date().toISOString();

export function quote(listing: Listing, opts: { nights: number; guests: number }): QuoteResult {
  const nights = Math.max(1, Math.min(365, Math.floor(opts.nights)));
  const guests = Math.max(1, Math.min(20, Math.floor(opts.guests)));
  const sleepsTooMany = guests > listing.maxGuests;
  const fitsInBookingPolicy = nights >= 3;

  const discount = staylioLengthDiscount(nights);
  const baseNightly = listing.fromGbpPerNight;
  const staylioNightly = Math.round(baseNightly * (1 - discount.pct));
  const staylioSubtotal = staylioNightly * nights;
  // Long-stay VAT relief approximation: per /guides/long-stay-tax-london, from
  // night 29 the effective VAT drops from 20% to ~4% on the room portion. The
  // FROM-PRICE in listings.ts already excludes VAT discount; we apply a flat
  // 4% effective adjustment on the post-N28 nights to keep the maths legible.
  let staylioTotal = staylioSubtotal;
  let vatTreatment: "standard" | "long-stay-relief" = "standard";
  if (nights > 28) {
    const postN28Nights = nights - 28;
    const vatSavingPerNight = Math.round(staylioNightly * 0.16); // 20% - 4% effective
    staylioTotal = staylioSubtotal - postN28Nights * vatSavingPerNight;
    vatTreatment = "long-stay-relief";
  }

  const hotelNightly = HOTEL_NIGHTLY_BY_AREA[listing.area] ?? 220;
  const hotelRealised = (hotelNightly + HOTEL_EXTRAS_PER_NIGHT) * nights;

  const otaNightly = Math.round(staylioNightly * (1 + OTA_MARKUP));
  const otaTotal = otaNightly * nights;

  const vsHotel = hotelRealised - staylioTotal;
  const vsOta = otaTotal - staylioTotal;

  return {
    apartment: {
      slug: listing.slug,
      title: listing.title,
      area: listing.area,
      areaLabel: listing.areaLabel,
      bedrooms: listing.bedrooms,
      maxGuests: listing.maxGuests,
      sizeSqm: listing.sizeSqm,
      fromGbpPerNight: listing.fromGbpPerNight,
    },
    stay: { nights, guests, sleepsTooMany, fitsInBookingPolicy },
    staylio: {
      nightlyRate: staylioNightly,
      discount,
      subtotal: staylioSubtotal,
      total: staylioTotal,
      vatTreatment,
    },
    comparison: {
      hotel: {
        nightlyRate: hotelNightly,
        unbundledExtrasPerNight: HOTEL_EXTRAS_PER_NIGHT,
        realisedTotal: hotelRealised,
      },
      ota: {
        nightlyRate: otaNightly,
        total: otaTotal,
        operator: "Booking.com / Airbnb estimate (15% platform-commission markup)",
      },
    },
    savings: {
      vsHotel,
      vsHotelPct: Math.round((vsHotel / hotelRealised) * 100),
      vsOta,
      vsOtaPct: Math.round((vsOta / otaTotal) * 100),
    },
    contact: {
      whatsapp: "https://wa.me/447375621453",
      email: "mailto:hello@staylio.london",
      bookingUrl: `https://staylio.london/apartments/${listing.slug}`,
    },
    disclaimer:
      "Indicative estimate. Hotel and OTA comparison rates are mid-2026 Central London bands. Real-time Staylio pricing depends on dates and demand — WhatsApp Ali on +44 7375 621453 or email hello@staylio.london for a confirmed quote.",
    generatedAt: BUILD_TIME,
  };
}
