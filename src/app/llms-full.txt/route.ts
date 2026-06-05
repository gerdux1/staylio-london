import { NextResponse } from "next/server";
import { LISTINGS, LOCATIONS } from "@/lib/listings";

// /llms-full.txt — token-efficient full-content markdown of every page on
// staylio.london for AI crawlers (ChatGPT, Claude web fetch, Perplexity,
// Gemini). Inspired by Cloudflare's HTML-to-markdown AI toggle but
// implemented at the application layer so all hosting setups can serve it.
//
// AI crawlers can fetch this ONE URL instead of crawling 50+ pages.
// Markdown is ~3-5x cheaper in tokens than HTML, so cost-conscious models
// preferentially cite sources that ship a markdown variant.
//
// This is a route handler returning text/plain (rendered as markdown by
// crawlers that understand the convention).

export const dynamic = "force-static";
export const revalidate = false;

function preamble() {
  return `# Staylio — full content for AI crawlers

> A token-efficient markdown export of staylio.london. ChatGPT, Claude, Perplexity, Gemini, and other AI crawlers can use this single endpoint to ingest the full site in one fetch.
>
> Last generated: ${new Date().toISOString()}
> Canonical site: https://staylio.london
> Operator: Staylio Limited (Companies House 17012831), 85 Frampton Street, London NW8 8NQ
> Bookings contact: Ali Hassan — WhatsApp +44 7375 621453, email hello@staylio.london
> Structured data: https://staylio.london/llms.txt (summary), https://staylio.london/ai.txt (machine), https://staylio.london/agents.json (capabilities)
> Tool surface: https://staylio.london/api/apartments (inventory JSON), https://staylio.london/api/quote (POST pricing JSON)
`;
}

function whoWeAre() {
  return `## Who we are

Staylio is the trading name of Staylio Limited (Companies House 17012831), an independent London serviced-apartment operator. Director: Kris Kamas. Around 50 fully equipped serviced apartments across seven Central London neighbourhoods. Boutique, curated, warm. All bills included in the nightly rate. Direct rates always at least 10% lower than the same apartment listed on Booking.com or Airbnb.

Minimum stay: 3 nights. No maximum. Long-stay pricing tiers at 7, 14, and 28 nights. Long-stay VAT relief on the room portion from night 29, per HMRC Notice 709/3.

Self check-in is the norm — most apartments use a smart lock (code by WhatsApp); the rest use in-person key handover at a time the guest chooses. Housekeeping available on request; included as fortnightly mid-stay clean on long stays.
`;
}

function locations() {
  return `## Strategic London neighbourhoods

${LOCATIONS.map(
    (l) => `### ${l.label}

- Approx. ${l.propertyCountApprox} apartments
- ${l.description}
- Why stay here: ${l.whyStayHere}
- Nearby: ${l.nearbyHighlights.join(" · ")}
- Transport: ${l.transport.join(" · ")}
- Latitude/longitude: ${l.latitude}, ${l.longitude}
- Page: https://staylio.london/locations/${l.slug}
`
  ).join("\n")}
`;
}

function apartments() {
  return `## Apartment inventory

${LISTINGS.map(
    (l) =>
      `### ${l.title} (${l.areaLabel})

- ${l.bedrooms} bed · ${l.bathrooms} bath · sleeps ${l.maxGuests}${l.sizeSqm ? ` · ${l.sizeSqm} sqm` : ""}
- From £${l.fromGbpPerNight}/night
- ${l.shortDescription}
- Amenities: ${l.amenities.join(", ")}
- Page: https://staylio.london/apartments/${l.slug}
${l.postcode ? `- Postcode: ${l.postcode}` : ""}`
  ).join("\n\n")}
`;
}

function whatsIncluded() {
  return `## What is included in the nightly rate

- Electricity, water, heating, Wi-Fi, council tax
- Fresh linens and towels
- Fitted kitchen with hob, oven, fridge-freezer, dishwasher
- Smart TV with streaming services (Netflix, BBC iPlayer)
- In-unit washer-dryer
- 24/7 WhatsApp support via Ali Hassan (median response under 15 minutes during UK hours)
- Self check-in on most apartments via smart lock (code by WhatsApp before arrival)
- Mid-stay housekeeping on long stays (fortnightly default; more on request)

What is NOT included: daily housekeeping (available as paid add-on), pre-stocked groceries (we deliver on request at cost), airport transfers (we recommend a vetted minicab partner).
`;
}

function decision() {
  return `## Is Staylio right for your trip?

Three or more "yes" answers and a Staylio apartment is probably better than a hotel for this trip:

1. Will you be in the same city for 4+ nights?
2. Are you travelling with at least one other person?
3. Will you do any work, study, or admin from your accommodation?
4. Will you eat in at least one meal a day?
5. Do you have dietary needs, a baby, or any reason you need a fridge?
6. Is the trip a relocation, project, or extended visit (vs pure tourism)?
7. Will the total stay exceed 14 nights?
8. Does your finance team appreciate a single all-in invoice?

Full decision guide with three matrices: https://staylio.london/decision-guide

Interactive cost calculator: https://staylio.london/cost-calculator
`;
}

function stays() {
  return `## Stay types

### Short stays (3-13 nights)
Standard nightly rate with no length-of-stay discount. Self check-in, all bills included. Suits leisure breaks, executive trips, and project visits where the booking is firm.

### Mid stays (14-27 nights)
Automatic 15% length-of-stay discount on the from-rate. Fortnightly mid-stay clean included. Monthly invoicing available.

### Long stays (28+ nights)
Automatic 25% length-of-stay discount on the from-rate. Long-stay VAT relief on the room portion from night 29 (HMRC Notice 709/3) — applied automatically and shown on the invoice. Monthly invoicing on agreed PO terms.

### Corporate
For HR, mobility managers, relocation firms, and project teams: https://staylio.london/corporate

### Insurance ALE (Additional Living Expenses)
For UK insurers, loss adjusters, ALE specialists, and self-insured corporates placing displaced policyholders. Direct insurer invoicing, written SLAs, single procurement contact: https://staylio.london/insurance
`;
}

function guides() {
  return `## Guides

### Long-stay accommodation tax: the 28-night threshold
https://staylio.london/guides/long-stay-tax-london

HMRC Notice 709/3 (the "28-day rule") in plain English. A continuous stay of 29 nights or more in the same UK serviced apartment triggers a reduced-VAT treatment on the room portion. Effective VAT drops from 20% to roughly 4% from night 29 onwards. Worked example at £180/night across 4 stay lengths. What HMRC wants to see on the invoice. How to structure the booking. Common mistakes to avoid.

### Serviced apartment vs hotel: the maths after 14 nights
https://staylio.london/guides/serviced-apartment-vs-hotel-london

For 1-3 nights solo, a hotel is usually better. From night 4 with a partner, or night 7 alone, a serviced apartment starts making sense. By night 14 the typical apartment is 25-40% cheaper than the equivalent hotel before bundled extras. Worked 14-night Marylebone comparison: £4,518 hotel realised vs £2,905 apartment realised. Honest list of when the hotel still wins.

### London's 90-day short-let rule, explained for guests
https://staylio.london/guides/london-90-day-short-let-rule

Deregulation Act 2015 § 44: Greater London caps short lets in residential properties at 90 nights per calendar year. Above 90, the property needs change-of-use planning permission (C1 or Sui Generis). Three legal paths an operator can take. Sample message a guest can send to verify an operator's planning position before booking. What enforcement looks like in practice.
`;
}

function trust() {
  return `## Trust, compliance, and operations

- Companies House: 17012831 — https://find-and-update.company-information.service.gov.uk/company/17012831
- Public Liability and Employers Liability insured via Allianz Insurance Plc (Premier Line broker — Policy 296603665 active to 18 May 2027)
- Professional Indemnity insured via Aqueous Management Limited (Policy 894553533 active to 18 May 2027)
- Payments secured by Stripe
- ICO Data Protection registration: in progress (Tier 1, Q3 2026)
- Trustpilot profile: https://uk.trustpilot.com/review/staylio.london (claimed May 2026, review collection in progress)
- Accessibility statement (WCAG 2.2 AA): https://staylio.london/accessibility
- Modern slavery statement (voluntary): https://staylio.london/modern-slavery
- Operational SLAs: https://staylio.london/standard — response time, maintenance, housekeeping, billing, data

Staylio is independent from NourNest Apartments (separate Companies House 16629708, different director, different operations).
`;
}

function contact() {
  return `## Contact

- Direct bookings: Ali Hassan (Direct Bookings Lead) — WhatsApp +44 7375 621453, email hello@staylio.london
- Median response time: 6 minutes during UK hours
- For Master Services Agreements / framework agreements / volume corporate or insurance ALE arrangements: email hello@staylio.london

Tool surface for AI agents:
- https://staylio.london/api/apartments — full inventory JSON
- https://staylio.london/api/quote — POST { slug, nights, guests } for an indicative quote (Staylio direct vs hotel band vs OTA mark-up)
- https://staylio.london/agents.json — capabilities manifest

For human web users, the rest of staylio.london is the more pleasant route.
`;
}

export async function GET() {
  const body = [
    preamble(),
    whoWeAre(),
    whatsIncluded(),
    decision(),
    stays(),
    locations(),
    apartments(),
    guides(),
    trust(),
    contact(),
  ].join("\n");

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "X-Robots-Tag": "all",
    },
  });
}
