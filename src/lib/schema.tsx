// Schema.org JSON-LD generators. Each page renders one or more of these
// inside <script type="application/ld+json"> so AI engines + Google can cite.

import type { Listing } from "./listings";

const ORG_BASE = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Staylio",
  legalName: "Staylio Limited",
  description:
    "Serviced apartments across Central London. Fully equipped, all bills included, fortnightly housekeeping. Boutique, curated, warm.",
  url: "https://staylio.london",
  telephone: "+44 7375 621453",
  email: "hello@staylio.london",
  address: {
    "@type": "PostalAddress",
    streetAddress: "85 Frampton Street",
    addressLocality: "London",
    postalCode: "NW8 8NQ",
    addressCountry: "GB",
  },
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Companies House",
    value: "17012831",
  },
  sameAs: [
    "https://find-and-update.company-information.service.gov.uk/company/17012831",
  ],
  areaServed: [
    { "@type": "Place", name: "Regent's Park & Marylebone, London" },
    { "@type": "Place", name: "Old Street & Shoreditch, London" },
    { "@type": "Place", name: "Kensington & Hammersmith, London" },
    { "@type": "Place", name: "Fitzrovia & Mayfair, London" },
    { "@type": "Place", name: "Barbican & Farringdon, London" },
    { "@type": "Place", name: "Borough & Pimlico, London" },
    { "@type": "Place", name: "Little Venice & Maida Vale, London" },
  ],
  amenityFeature: [
    "Fully fitted kitchen",
    "Wi-Fi",
    "Smart TV",
    "In-unit washer-dryer",
    "Smart lock keyless entry",
    "All bills included",
    "24/7 guest support",
  ],
};

export function organizationSchema() {
  return ORG_BASE;
}

export function listingSchema(listing: Listing) {
  return {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    "@id": `https://staylio.london/apartments/${listing.slug}`,
    name: listing.title,
    description: listing.longDescription,
    numberOfRooms: listing.bedrooms,
    numberOfBedrooms: listing.bedrooms,
    numberOfBathroomsTotal: listing.bathrooms,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: listing.maxGuests,
    },
    floorSize: {
      "@type": "QuantitativeValue",
      value: listing.sizeSqm,
      unitCode: "MTK",
    },
    amenityFeature: listing.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a,
      value: true,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: listing.areaLabel,
      addressRegion: "London",
      postalCode: listing.postcode,
      addressCountry: "GB",
    },
    ...(listing.latitude && listing.longitude
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: listing.latitude,
            longitude: listing.longitude,
          },
        }
      : {}),
    image: listing.heroImage.startsWith("http")
      ? listing.heroImage
      : `https://staylio.london${listing.heroImage}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: listing.fromGbpPerNight,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: listing.fromGbpPerNight,
        priceCurrency: "GBP",
        unitText: "night",
        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "DAY" },
      },
      availability: "https://schema.org/InStock",
      url: `https://staylio.london/apartments/${listing.slug}`,
    },
    brand: { "@type": "Brand", name: "Staylio" },
  };
}

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Curated neighbourhood guide → schema.org ItemList. Kept light on purpose:
// name + description only, no fabricated addresses or geo for third-party venues.
export function localGuideSchema(
  areaLabel: string,
  items: { type: "Restaurant" | "CafeOrCoffeeShop" | "TouristAttraction"; name: string; description: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Local guide to ${areaLabel}`,
    description: `Staylio's curated food, coffee and things to do near our ${areaLabel} apartments.`,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": it.type,
        name: it.name,
        description: it.description,
      },
    })),
  };
}

// Auto-generate listing-specific FAQs from a Listing record.
// Each /apartments/{slug} page renders these as Schema.org FAQPage JSON-LD so
// AI engines (ChatGPT, Perplexity, AI Overviews) can quote them directly.
export function listingFAQs(listing: import("./listings").Listing) {
  const beds = listing.bedrooms > 0 ? `${listing.bedrooms}-bed` : "studio";
  const guests = listing.maxGuests;
  return [
    {
      question: `How many guests can stay at ${listing.title}?`,
      answer: `This ${beds} apartment sleeps up to ${guests} guests across ${listing.bedrooms || 1} bedroom${listing.bedrooms > 1 ? "s" : ""} and ${listing.bathrooms} bathroom${listing.bathrooms > 1 ? "s" : ""}.`,
    },
    {
      question: `Is ${listing.title} suitable for long stays?`,
      answer: `Yes. The apartment is fully equipped for stays from 3 nights up to several months. Long-stay pricing applies automatically once your stay crosses one week.`,
    },
    {
      question: `What is included at ${listing.title}?`,
      answer: `Every nightly rate includes electricity, water, heating, Wi-Fi, council tax, fortnightly housekeeping, fresh linens and towels, fitted kitchen, smart TV with streaming, and smart-lock keyless entry. No surprise charges on departure.`,
    },
    {
      question: `How do I check in to ${listing.title}?`,
      answer: `Self check-in via smart lock. You receive your access code by WhatsApp before arrival, so you can arrive at any hour — no front desk, no waiting.`,
    },
    {
      question: `How does the direct rate compare to Booking.com or Airbnb?`,
      answer: `The Staylio direct rate is always at least 10% lower than the same apartment listed on Booking.com or Airbnb, because we don't pay platform commission. WhatsApp Ali Hassan on +44 7375 621453 for your exact quote based on dates.`,
    },
  ];
}

// Auto-generate area-specific FAQs from a Location record and its listings.
export function locationFAQs(
  loc: import("./listings").Location,
  listings: import("./listings").Listing[],
) {
  const count = listings.length;
  const beds = Array.from(new Set(listings.map((l) => l.bedrooms))).filter((b) => b > 0).sort();
  const bedSummary = beds.length
    ? beds.map((b) => `${b}-bed`).join(", ")
    : "studio and 1-bed";
  return [
    {
      question: `How many Staylio apartments are there in ${loc.label}?`,
      answer: `Staylio currently operates around ${count} fully equipped serviced apartment${count > 1 ? "s" : ""} in ${loc.label}, ranging from ${bedSummary}. Every apartment is set up for stays of 3 nights or longer with all bills included.`,
    },
    {
      question: `What is ${loc.label} like to stay in?`,
      answer: loc.description,
    },
    {
      question: `What transport is near Staylio's ${loc.label} apartments?`,
      answer: `Nearest stations and lines include: ${loc.transport.slice(0, 3).join(", ")}.`,
    },
    {
      question: `Who is staying in ${loc.label} a good fit for?`,
      answer: loc.whyStayHere,
    },
    {
      question: `Can I book direct for ${loc.label} without going through Booking.com or Airbnb?`,
      answer: `Yes. The Staylio direct rate is always at least 10% lower than Booking.com or Airbnb because there is no platform commission. WhatsApp Ali Hassan on +44 7375 621453 for availability and your direct rate.`,
    },
  ];
}

export function faqSchema(qa: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((x) => ({
      "@type": "Question",
      name: x.question,
      acceptedAnswer: { "@type": "Answer", text: x.answer },
    })),
  };
}

// Render helper · drop into JSX:
//   <Json data={listingSchema(listing)} />
export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <>
      {json.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
