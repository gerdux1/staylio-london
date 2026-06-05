import { NextRequest, NextResponse } from "next/server";
import { LISTINGS } from "@/lib/listings";
import { quote } from "@/lib/pricing";

// /api/quote — agentic-LLM-friendly pricing endpoint. Accepts POST with
// { slug, nights, guests } and returns a structured QuoteResult comparing
// Staylio vs a hotel band vs a typical OTA mark-up.
//
// Designed so an agentic LLM (ChatGPT, Perplexity, Gemini) can call this
// directly to answer transactional intent ("how much for 30 nights in
// Marylebone for 2 adults?") without scraping HTML.
//
// GET requests return a minimal usage example so the endpoint is
// self-documenting for AI engines that crawl it.

export const dynamic = "force-dynamic";

const SAMPLE_PAYLOAD = {
  slug: "wells-mansions-2-bed",
  nights: 14,
  guests: 2,
};

function example() {
  // Best-effort example using a real listing slug if it exists.
  const exampleListing = LISTINGS[0];
  const exampleQuote = quote(exampleListing, { nights: 14, guests: 2 });
  return {
    description:
      "POST { slug, nights, guests } to receive a structured QuoteResult comparing Staylio direct vs a hotel band vs typical OTA mark-up.",
    method: "POST",
    contentType: "application/json",
    schema: {
      slug: "string — apartment slug; see /api/apartments inventory[].slug",
      nights: "integer 1-365",
      guests: "integer 1-20",
    },
    samplePayload: { ...SAMPLE_PAYLOAD, slug: exampleListing.slug },
    sampleResponse: exampleQuote,
    notes: [
      "Hotel and OTA comparison rates are indicative mid-2026 Central London bands.",
      "Real-time Staylio rates depend on dates and demand. This endpoint returns an estimate; confirm via WhatsApp +44 7375 621453.",
      "Long-stay VAT relief is approximated for nights >28 per HMRC Notice 709/3.",
    ],
  };
}

export async function GET() {
  return NextResponse.json(example(), {
    headers: {
      "Cache-Control": "public, s-maxage=3600",
      "X-Robots-Tag": "all",
    },
  });
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body", example: example() },
      { status: 400 }
    );
  }

  const b = body as { slug?: string; nights?: number; guests?: number };
  if (!b || typeof b.slug !== "string" || typeof b.nights !== "number" || typeof b.guests !== "number") {
    return NextResponse.json(
      { error: "Missing required fields: slug (string), nights (number), guests (number)", example: example() },
      { status: 400 }
    );
  }

  const listing = LISTINGS.find((l) => l.slug === b.slug);
  if (!listing) {
    return NextResponse.json(
      {
        error: `No apartment found for slug "${b.slug}".`,
        hint: "List available slugs at /api/apartments → inventory[].slug",
      },
      { status: 404 }
    );
  }

  const result = quote(listing, { nights: b.nights, guests: b.guests });
  return NextResponse.json(result, {
    headers: {
      "Cache-Control": "no-store",
      "X-Robots-Tag": "all",
    },
  });
}
