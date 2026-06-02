// Schema.org JSON-LD generators. Each page renders one or more of these
// inside <script type="application/ld+json"> so AI engines + Google can cite.

import type { Listing } from "./listings";

const ORG_BASE = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Staylio",
  description:
    "Serviced apartments across London. Fully equipped, all bills included, flexible stay lengths.",
  url: "https://staylio.london",
  telephone: "+44 7802 666672",
  email: "hello@staylio.london",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "Place", name: "Canary Wharf, London" },
    { "@type": "Place", name: "Kensington, London" },
    { "@type": "Place", name: "City of London" },
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

// Render helper — drop into JSX:
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
