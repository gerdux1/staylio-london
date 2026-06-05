// Schema.org JSON-LD generators. Each page renders one or more of these
// inside <script type="application/ld+json"> so AI engines + Google can cite.

import type { Listing } from "./listings";

const ORG_BASE = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://staylio.london#organization",
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

// WebSite + SearchAction at root layout — tells search + AI engines our site is
// searchable as an entity. Earns the sitelink-searchbox feature in Google SERPs
// and signals to AI Overviews that we have a structured catalog.
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://staylio.london#website",
    name: "Staylio",
    alternateName: "Staylio London Serviced Apartments",
    url: "https://staylio.london",
    inLanguage: "en-GB",
    publisher: { "@id": "https://staylio.london#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://staylio.london/apartments?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// Service schemas — Staylio offers 4 distinct stay services. AI engines route
// queries like "corporate apartments London" to the right page when each service
// is declared as a Service entity with structured offer + audience data.
export function serviceSchemas() {
  const base = "https://staylio.london";
  const provider = { "@id": `${base}#organization` };
  const areaServed = ORG_BASE.areaServed;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${base}/corporate#service`,
      name: "Corporate serviced apartments in Central London",
      description:
        "Long-stay rates, monthly billing on PO terms, single point of contact for relocations and project teams. Suitable for 28-night stays and longer with reduced VAT exposure.",
      serviceType: "Corporate Housing",
      provider,
      areaServed,
      audience: { "@type": "BusinessAudience", name: "Corporate clients, relocation firms" },
      offers: {
        "@type": "Offer",
        url: `${base}/corporate`,
        availability: "https://schema.org/InStock",
      },
      url: `${base}/corporate`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${base}/short-stays#service`,
      name: "Short-break serviced apartments in Central London",
      description:
        "3–7 night stays in fully equipped Central London serviced apartments. Smart-lock keyless entry, all bills included, fortnightly housekeeping. Best direct rate, at least 10% lower than Booking.com or Airbnb.",
      serviceType: "Short-Stay Accommodation",
      provider,
      areaServed,
      offers: {
        "@type": "Offer",
        url: `${base}/apartments`,
        availability: "https://schema.org/InStock",
      },
      url: `${base}/apartments`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${base}/long-stays#service`,
      name: "Long-stay serviced apartments in London (weekly and monthly)",
      description:
        "Stays of one week or longer with discounted weekly and monthly pricing. Mid-term (28+ night) stays qualify for the 80% VAT reduction under HMRC rules. Full kitchen, in-unit laundry, real workspace.",
      serviceType: "Long-Stay Accommodation",
      provider,
      areaServed,
      offers: {
        "@type": "Offer",
        url: `${base}/apartments`,
        availability: "https://schema.org/InStock",
      },
      url: `${base}/apartments`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${base}/relocation#service`,
      name: "Relocation serviced apartments in Central London",
      description:
        "Furnished, fully equipped Central London apartments for relocations of one month or longer. Single point of contact, monthly billing, easy extension. Suits family relocations, executive transfers, and project teams.",
      serviceType: "Relocation Housing",
      provider,
      areaServed,
      audience: { "@type": "PeopleAudience", name: "Relocating professionals and families" },
      offers: {
        "@type": "Offer",
        url: `${base}/corporate`,
        availability: "https://schema.org/InStock",
      },
      url: `${base}/corporate`,
    },
  ];
}

// HowTo — high-leverage for AI Overviews. AI engines lift HowTo steps into
// step-by-step answers when users ask "how do I book a serviced apartment in London?"
export function bookDirectHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to book direct with Staylio (and save 10% or more)",
    description:
      "Direct bookings with Staylio save at least 10% vs Booking.com or Airbnb because there is no platform commission. Booking takes under 15 minutes via WhatsApp.",
    estimatedCost: { "@type": "MonetaryAmount", currency: "GBP", value: "0" },
    totalTime: "PT15M",
    tool: [
      { "@type": "HowToTool", name: "Phone or computer" },
      { "@type": "HowToTool", name: "WhatsApp (or email)" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Browse apartments",
        text: "Visit staylio.london/apartments and pick a Central London neighbourhood that suits your stay (Marylebone, Shoreditch, Kensington, Mayfair, Farringdon, Pimlico, or Maida Vale).",
        url: "https://staylio.london/apartments",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "WhatsApp Ali Hassan with dates",
        text: "Send Ali a WhatsApp message on +44 7375 621453 with your apartment shortlist, check-in and check-out dates, and number of guests. Ali is Staylio's Direct Bookings sales lead.",
        url: "https://wa.me/447375621453",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Get your direct quote",
        text: "Ali confirms availability and sends your direct rate — always at least 10% lower than the same apartment on Booking.com or Airbnb. Usually replies within 15 minutes during UK hours.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Pay securely via Stripe",
        text: "Confirm by paying through the secure Stripe link Ali sends. No deposit padding, no platform commission, no surprise charges on departure.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Receive smart-lock code by WhatsApp",
        text: "Closer to check-in, Ali sends your smart-lock access code by WhatsApp. Arrive at any hour, day or night — no front desk, no waiting.",
      },
    ],
  };
}

// Person schema for Ali Hassan — named E-E-A-T accountability on /contact.
// AI engines treat named, contactable humans as a stronger trust signal than
// generic "contact us" pages.
export function aliPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://staylio.london/contact#ali-hassan",
    name: "Ali Hassan",
    jobTitle: "Direct Bookings Lead",
    worksFor: { "@id": "https://staylio.london#organization" },
    telephone: "+44 7375 621453",
    email: "hello@staylio.london",
    knowsLanguage: ["en-GB", "en"],
    knowsAbout: [
      "Central London serviced apartments",
      "Corporate housing",
      "Long-stay relocations",
      "Direct booking discounts",
    ],
    availableLanguage: ["English"],
  };
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
