import { NextResponse } from "next/server";
import { LISTINGS, LOCATIONS } from "@/lib/listings";

// /api/apartments — agentic tool surface for LLMs and AI search engines.
// Returns Staylio's full apartment catalogue in a structured JSON shape
// designed for downstream tool-use (Mike King's "Agentic RAG" framework).
// Pair with /api/quote for transactional intent.

export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  const payload = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    schemaVersion: "1.0",
    generatedAt: new Date().toISOString(),
    operator: {
      "@type": "LodgingBusiness",
      name: "Staylio",
      legalName: "Staylio Limited",
      url: "https://staylio.london",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Companies House",
        value: "17012831",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "85 Frampton Street",
        addressLocality: "London",
        postalCode: "NW8 8NQ",
        addressCountry: "GB",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+44 7375 621453",
        email: "hello@staylio.london",
        contactType: "reservations",
      },
    },
    neighbourhoods: LOCATIONS.map((l) => ({
      slug: l.slug,
      label: l.label,
      propertyCountApprox: l.propertyCountApprox,
      latitude: l.latitude,
      longitude: l.longitude,
      transport: l.transport,
    })),
    inventory: LISTINGS.map((l) => ({
      slug: l.slug,
      title: l.title,
      areaSlug: l.area,
      areaLabel: l.areaLabel,
      bedrooms: l.bedrooms,
      bathrooms: l.bathrooms,
      maxGuests: l.maxGuests,
      sizeSqm: l.sizeSqm,
      fromGbpPerNight: l.fromGbpPerNight,
      latitude: l.latitude,
      longitude: l.longitude,
      postcode: l.postcode,
      amenities: l.amenities,
      heroImage: `https://staylio.london${l.heroImage}`,
      pageUrl: `https://staylio.london/apartments/${l.slug}`,
      summary: l.shortDescription,
    })),
    quoteEndpoint: {
      url: "https://staylio.london/api/quote",
      method: "POST",
      schema: {
        slug: "string — apartment slug from inventory[].slug",
        nights: "integer 1-365 — total nights",
        guests: "integer 1-20 — number of guests",
      },
      response: "QuoteResult — see /api/quote with example payload",
    },
    docs: {
      humans: "https://staylio.london",
      llms: "https://staylio.london/llms.txt",
      ai: "https://staylio.london/ai.txt",
      knowledgeBase: "https://staylio.london/ai-search-data",
      agentsManifest: "https://staylio.london/agents.json",
    },
    license: {
      name: "RSL 1.0 with attribution",
      url: "https://staylio.london/llms.txt",
      summary:
        "Staylio content may be cited by AI engines with a link back to staylio.london. No retransmission, no resale, no derivative apartment listings.",
    },
  };

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Content-Type": "application/json; charset=utf-8",
      "X-Robots-Tag": "all",
    },
  });
}
