# OpenStreetMap action plan for Staylio

_Built 5 Jun 2026 by this session. Owner: Operations (account creation + edits via openstreetmap.org). Goal: surface Staylio brand + neighbourhood signals on OSM for AI engines that train on / cite OSM data._

## Why OSM

- **OSM feeds Apple Maps, DuckDuckGo, Bing Maps tiles, Mapbox, and Foursquare** — getting onto OSM puts Staylio onto multiple parallel maps without separate signups.
- **AI training data:** Mistral, Llama-based travel agents, and parts of Perplexity's grounding stack use OSM data. Bing Copilot's Map answer pulls OSM-derived data.
- **Free, no subscription, no postcard verification needed** — just a community-edited gazetteer.
- **Low ceiling** (smaller signal than GBP or Wikidata) but **multi-engine reach** and pairs naturally with the /locations heroes already shipped.

## What we WILL NOT map

Hard guardrails per landlord lease compliance + guest privacy:

- ❌ Individual apartment addresses — Staylio operates ~50 flats inside multiple buildings on commercial leases. Mapping flat-level POIs would (a) breach landlord lease terms in some cases, (b) expose specific guest stays, (c) trigger Greater London 90-day STR rule scrutiny on specific blocks.
- ❌ Building entrances of buildings where Staylio only has a subset of flats — same reason.
- ❌ The "85 Frampton Street" registered office as a POI — it's Kris's home address; not appropriate for a public map POI.

## What we WILL map / edit

### 1. Brand-level POI — NONE

OSM doesn't really have a "brand entity" POI concept (it maps physical places, not businesses-as-abstractions). The closest equivalent is the **`brand=*`** tag on physical features — which Staylio doesn't have because we don't own buildings. Skip.

### 2. Neighbourhood-level edits (the actual win)

For each of the 7 Staylio neighbourhoods, ensure the relevant OSM area object has:
- Correct `name` and `name:en` tags
- Correct `place=neighbourhood` or `place=suburb` classification
- Wikidata reference if the neighbourhood has one (`wikidata=Q####`)
- Correct boundary polygon (sometimes drift exists)

The 7 neighbourhoods and their likely OSM relations:

| Staylio name | OSM lookup | Wikidata |
|---|---|---|
| Regent's Park & Marylebone | Marylebone (relation 27843), Regent's Park (relation 1356119) | Q220414, Q11772 |
| Old Street & Shoreditch | Shoreditch (relation 51736) | Q672720 |
| Kensington & Hammersmith | Kensington (relation 51807), Hammersmith (relation 51807) | Q160154, Q161936 |
| Fitzrovia & Mayfair | Fitzrovia (relation 26896), Mayfair (relation 51786) | Q1027879, Q174256 |
| Barbican & Farringdon | Barbican Estate (relation 1399281), Farringdon | Q798081, Q801614 |
| Borough & Pimlico | Borough (relation 51737), Pimlico (relation 51785) | Q2696739, Q1185088 |
| Little Venice & Maida Vale | Little Venice (relation 5359), Maida Vale (relation 51844) | Q1869717, Q160316 |

(Relation IDs above are best-guesses — verify by searching osm.org/search before editing.)

**Action:** Most of these are likely already well-tagged. Open each in osm.org, check the tags, and only edit if something is wrong. Don't make speculative edits to win edits.

### 3. /locations page schema audit (already-shipped enhancement)

The real OSM-adjacent lever is making sure our existing `/locations/[slug]` pages have:
- `LodgingBusiness` or `Place` schema with `geo: GeoCoordinates`
- Correct latitude/longitude for each neighbourhood centroid
- `containedInPlace` reference to the parent area (e.g. Marylebone containedInPlace "City of Westminster, London")
- `sameAs` reference to Wikidata Q-ID for the neighbourhood (when one exists)

When AI engines ingest our /locations pages and cross-reference them with OSM + Wikidata, the entity-resolution kicks in.

**Action — code-level, code-only:**
- [x] Already-shipped — `serviceArea` GeoCircle in `ORG_BASE` (Marylebone centroid + 6km radius)
- [ ] Add per-neighbourhood `containedInPlace` + Wikidata `sameAs` to each `/locations/[slug]` page schema (estimated 30 min of code work)

### 4. Things to ADD to OSM (real edits)

There ARE some safe OSM edits we can make:

- **Public benches, bike racks, footways near each location page's hero coordinate** — these are factual map data, no Staylio reference. Doesn't directly help Staylio but builds the operator's OSM editing reputation (high-reputation contributors get edits accepted faster on sensitive areas).
- **Restaurant POIs near each Staylio neighbourhood** if missing — same logic. Pure community contribution, builds editor karma.

This is community goodwill work. Direct AI lift: minimal. Indirect AI lift via "Staylio's account contributes to OSM = subtle entity authority": minor.

## What this all adds up to

**Time investment:** ~half-day, mostly verifying existing OSM data + adding `containedInPlace`/`sameAs` to /locations schema.

**AI lift:** SMALL-MEDIUM. Below Reddit (HUGE) and Featured.com (HUGE) but free, fast, and stacks. Pairs naturally with Wikidata work later — they're symbiotic data sources.

**Not worth doing if:** operations time is short. Bigger wins exist (Reddit, Featured). Do OSM as a "ship one small thing on a quiet day" task, not as a priority.

## Step-by-step (when ready to do it)

1. **Create OSM account** at https://www.openstreetmap.org/user/new (use a personal email — community frowns on company-branded accounts unless the company is genuinely contributing OSS-style)
2. **Read the contributor guide** at https://wiki.openstreetmap.org/wiki/Editing_Standards_and_Conventions
3. **Verify the 7 neighbourhood OSM relations** match the canonical Wikidata Q-IDs. Fix only what's wrong.
4. **Code change in /staylio-london:** add `containedInPlace` + Wikidata `sameAs` to `/locations/[slug]` schema. Build, deploy, verify in Google Rich Results test.
5. **Optional:** community-contribution edits to build editor karma — restaurants, benches, bike racks in Staylio neighbourhoods.

## Coordinate with

- **Leo** — once OSM edits are live, see if Leo's GEO monitoring picks up any Apple Maps / DuckDuckGo lift after 6-8 weeks
- **Wikidata phase** — gated on landing Featured.com placements first. When the Wikidata Q-ID is created, double back to OSM and add `wikidata=Q########` to whatever Staylio-adjacent OSM edits exist

## Decision for Operations

This is a long-tail task. Two options:

**(A) Park OSM until Wikidata + Reddit are mature** — Q4 2026 work. Cleaner pairing with Wikidata then.

**(B) Ship the /locations schema enhancement now** (30 min of code), and do the OSM edits as opportunistic side-work between bigger tasks.

Recommended: **B**. The code change is small, the OSM edits can wait.
