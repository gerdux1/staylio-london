// Schema.org JSON-LD generators. Each page renders one or more of these
// inside <script type="application/ld+json"> so AI engines + Google can cite.

import type { Listing } from "./listings";

const ORG_BASE = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://staylio.london#organization",
  name: "Staylio",
  legalName: "Staylio Limited",
  slogan: "London, lived in properly.",
  description:
    "Serviced apartments across Central London. Fully equipped, all bills included. Boutique, curated, warm.",
  url: "https://staylio.london",
  // Telephone = Ali Hassan (Direct Bookings Lead) per
  // reference_staylio_ali_phone_05jun. DO NOT bulk-swap to the brand
  // line 7304 353 640 — the direct-book funnel terminates with Ali.
  telephone: "+44 7375 621453",
  email: "hello@staylio.london",
  address: {
    "@type": "PostalAddress",
    streetAddress: "85 Frampton Street",
    addressLocality: "London",
    postalCode: "NW8 8NQ",
    addressCountry: "GB",
  },
  // Identifier array — AI engines use these as entity-resolution anchors.
  // Append ICO + VAT PropertyValues once those refs land (see
  // project_staylio_ico_registration_packet_5jun.md for ICO state).
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "Companies House",
      value: "17012831",
    },
    // TODO: append once ICO Tier 1 reg lands (Mon 8 Jun, Kris):
    // { "@type": "PropertyValue", propertyID: "ICO", value: "ZA######" },
    // TODO: append if/when Staylio Ltd VAT-registers:
    // { "@type": "PropertyValue", propertyID: "VAT", value: "GB#########" },
  ],
  // sameAs — the spine of AI-engine entity resolution. Every additional
  // verified profile here gives engines another node to triangulate against
  // when answering "is Staylio a real company?". Add new URLs ONLY after
  // the profile is live + claimed; never speculative.
  sameAs: [
    "https://find-and-update.company-information.service.gov.uk/company/17012831",
    "https://uk.trustpilot.com/review/staylio.london",
    // TODO: append once GBP postcard verifies (Mon 8 Jun → +4-14d):
    // "https://g.page/staylio-london" (final URL set by Google),
    // TODO: append once Bing Places listing live:
    // "https://www.bing.com/maps?ss=ypid.<id>",
    // TODO: append once Wikidata Q-ID created (gated on 2 editorial citations
    // landing first via Featured.com / direct outreach):
    // "https://www.wikidata.org/wiki/Q########",
  ],
  // award — Schema.org/award is a free-text field. Populate ONLY when an
  // award is actually held. Per session 5 Jun 2026, VisitEngland Quality
  // Scheme considered but parked pending free GEO moves; revisit Q3 2026.
  // Example shape once VisitEngland lands:
  // award: "4 Star Serviced Apartments — VisitEngland Quality in Tourism",
  // starRating — only populate with an official rating body (e.g.
  // VisitEngland). Do NOT use review-derived stars here.
  // aggregateRating — wire to LIVE Trustpilot count once ≥10 verified
  // reviews are flowing (Mon Trustpilot setup + Sofia past-guest emails).
  // Adding empty/zero ratings hurts more than missing them entirely.
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
    "Self check-in",
    "All bills included",
    "24/7 guest support",
  ],
  // Property scale signals — give AI engines a sense of the operation.
  numberOfRooms: {
    "@type": "QuantitativeValue",
    value: 50,
    unitText: "apartments",
  },
  priceRange: "££",
  paymentAccepted: "Credit Card, Debit Card, Apple Pay, Google Pay",
  currenciesAccepted: "GBP",
  inLanguage: "en-GB",
  // Concrete service-area boundary — GeoCircle around Central London (a 6 km radius
  // from Marylebone covers all seven Staylio neighbourhoods). Gives AI engines a
  // crisp geographic answer to "do you have apartments in {London neighbourhood}?".
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 51.5236, // Marylebone
      longitude: -0.1591,
    },
    geoRadius: "6000", // metres
  },
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
        "3–7 night stays in fully equipped Central London serviced apartments. Self check-in, all bills included, housekeeping on request. Best direct rate, at least 10% lower than Booking.com or Airbnb.",
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
        name: "Receive check-in details by WhatsApp",
        text: "Closer to check-in, Ali sends your check-in details by WhatsApp — smart-lock code on most apartments, key handover instructions on the rest. Arrive at a time that works for you.",
      },
    ],
  };
}

// Article schema with author byline + dateModified — wraps each listing detail
// page and each location page in a CreativeWork. AI engines weight content with
// a named author + recent dateModified higher than anonymous, undated content.
//
// dateModified is set to BUILD_DATE so every redeploy bumps the freshness signal.
export const BUILD_DATE = new Date().toISOString();

export function listingArticleSchema(listing: import("./listings").Listing) {
  const url = `https://staylio.london/apartments/${listing.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: listing.title,
    description: listing.shortDescription,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: listing.heroImage,
    datePublished: "2026-06-02T00:00:00Z", // Staylio site launch
    dateModified: BUILD_DATE,
    author: {
      "@type": "Person",
      "@id": "https://staylio.london/contact#ali-hassan",
      name: "Ali Hassan",
      jobTitle: "Direct Bookings Lead",
      worksFor: { "@id": "https://staylio.london#organization" },
    },
    publisher: { "@id": "https://staylio.london#organization" },
    inLanguage: "en-GB",
    about: { "@id": url },
  };
}

// guideArticleSchema — long-form authority content in `/guides/*`. Each cornerstone
// piece carries Ali Hassan as named author for E-E-A-T accountability + a
// real datePublished (not BUILD_DATE) so AI engines can age the content correctly.
// Keywords array helps Google + Bing match to query intent without keyword-stuffing
// the body copy.
export function guideArticleSchema(opts: {
  slug: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
  about?: string;
}) {
  const url = `https://staylio.london/guides/${opts.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? BUILD_DATE,
    keywords: opts.keywords?.join(", "),
    author: {
      "@type": "Person",
      "@id": "https://staylio.london/contact#ali-hassan",
      name: "Ali Hassan",
      jobTitle: "Direct Bookings Lead",
      worksFor: { "@id": "https://staylio.london#organization" },
    },
    publisher: { "@id": "https://staylio.london#organization" },
    inLanguage: "en-GB",
    about: opts.about,
  };
}

export function locationArticleSchema(loc: import("./listings").Location) {
  const url = `https://staylio.london/locations/${loc.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: `Serviced apartments in ${loc.label}`,
    description: loc.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: loc.heroImage,
    datePublished: "2026-06-02T00:00:00Z",
    dateModified: BUILD_DATE,
    author: {
      "@type": "Person",
      "@id": "https://staylio.london/contact#ali-hassan",
      name: "Ali Hassan",
      jobTitle: "Direct Bookings Lead",
      worksFor: { "@id": "https://staylio.london#organization" },
    },
    publisher: { "@id": "https://staylio.london#organization" },
    inLanguage: "en-GB",
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
      answer: `Every nightly rate includes electricity, water, heating, Wi-Fi, council tax, fresh linens and towels, fitted kitchen, and smart TV with streaming. Housekeeping available on request. Self check-in (smart lock on most apartments, key handover on the rest). No surprise charges on departure.`,
    },
    {
      question: `How do I check in to ${listing.title}?`,
      answer: `Self check-in. Most apartments use a smart lock (code by WhatsApp before arrival); a few use in-person key handover at a convenient time. Either way you can arrive without a reception desk.`,
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

// Speakable schema — tells voice assistants (Siri, Google Assistant, Alexa)
// which parts of a page are good to read aloud. Marks our FAQ summary blocks
// + the listing summary chips. Pairs with FAQPage and HowTo for voice queries
// like "Hey Siri, how do I book a London serviced apartment?".
export function speakableSchema(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable", "summary", "h1", "h2"],
    },
    inLanguage: "en-GB",
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
