#!/usr/bin/env python3
"""
Builds the Staylio GEO Phase 1 keyword candidate sheet.

Run once. Writes to a NEW Google Sheet via the claude-sheets service account,
shares with the operator. DataForSEO columns left blank (status PENDING_DATAFORSEO)
until creds are wired and the seo-dataforseo agents are re-run.

Re-run safety: this script CREATES a new sheet each invocation. If a sheet
already exists, edit it via the API or update SPREADSHEET_ID below.
"""

import json
import sys
import warnings
warnings.filterwarnings("ignore", category=FutureWarning)

from google.oauth2 import service_account
from googleapiclient.discovery import build

KEY_FILE = "/Users/<owner>/.config/gcloud/claude-sheets-sa.json"
OPERATIONS_EMAIL = "<redacted>"
OPERATIONS_PERSONAL = "<redacted>"
SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive",
]
SHEET_TITLE = "Staylio GEO Phase 1 — Long-tail keyword candidates (5 Jun 2026)"

# 7 areas → short labels for keyword construction
AREA_LABELS = {
    "marylebone": "Regent's Park & Marylebone",
    "shoreditch": "Old Street & Shoreditch",
    "kensington": "Kensington & Hammersmith",
    "mayfair": "Fitzrovia & Mayfair",
    "farringdon": "Barbican & Farringdon",
    "borough": "Borough & Pimlico",
    "maida-vale": "Little Venice & Maida Vale",
}
AREA_ROUTE = {
    "marylebone": "regents-park-marylebone",
    "shoreditch": "old-street-shoreditch",
    "kensington": "kensington-hammersmith",
    "mayfair": "fitzrovia-mayfair",
    "farringdon": "barbican-farringdon",
    "borough": "borough-pimlico",
    "maida-vale": "little-venice-maida-vale",
}

# Column headers
HEADERS = [
    "#",
    "Keyword",
    "Bucket",
    "Intent",
    "Est. MSV band (claude)",
    "Likely competition",
    "AI Overview likely?",
    "DataForSEO MSV",
    "DataForSEO competition",
    "SERP top 3 (live)",
    "Our content angle (Staylio's unique take)",
    "Target route",
    "Page status",
    "Primary CTA",
    "Internal links (3-5)",
    "Schema additions",
    "Status",
    "Notes / decisions",
]

# Helper to build a row: keyword + bucket + intent + my estimate + content angle
def row(idx, kw, bucket, intent, est_msv, est_comp, ai_ov, angle, route, page_status, internal, schema_add, notes=""):
    return [
        idx,
        kw,
        bucket,
        intent,
        est_msv,
        est_comp,
        ai_ov,
        "",  # DataForSEO MSV — fill from agent run
        "",  # DataForSEO competition
        "",  # SERP top 3
        angle,
        route,
        page_status,
        "WhatsApp Ali +44 7375 621453",  # per brief (note: brand identity locks 7304 353 640 — flagged in summary)
        internal,
        schema_add,
        "CANDIDATE · PENDING_DATAFORSEO",
        notes,
    ]


def build_rows():
    rows = []
    i = 1

    # ====== BUCKET A — Area-anchored (50) ======

    # A1 Long-stay (7)
    for key, full in AREA_LABELS.items():
        kw = f"long stay serviced apartments {key}".replace("-", " ")
        rows.append(row(
            i, kw, "A1 long-stay", "commercial", "50–200", "medium", "Y",
            f"Authoritative 'how long-stay actually works in {full}' — real per-week pricing math, bills-included breakdown vs assured shorthold tenancy, council-tax angle. Staylio has actual multi-month bookings here.",
            f"/guides/long-stay-{AREA_ROUTE[key]}", "NEW",
            f"/locations/{AREA_ROUTE[key]}, /corporate, /faq, 2× listings in area",
            "Article, FAQPage, BreadcrumbList",
        ))
        i += 1

    # A2 Monthly rental (7)
    for key, full in AREA_LABELS.items():
        suffix = " london" if key in ("borough",) else ""
        kw = f"monthly rental apartments {key}{suffix}".replace("-", " ")
        rows.append(row(
            i, kw, "A2 monthly", "commercial", "30–150", "medium", "N",
            f"Monthly stay math in {full}: from-£/month vs Airbnb monthly vs traditional rental. Show 4-week vs 8-week price step-down. Real Staylio rates.",
            f"/guides/monthly-rental-{AREA_ROUTE[key]}", "NEW",
            f"/locations/{AREA_ROUTE[key]}, /apartments-vs-hotels, 3× listings",
            "Article, FAQPage, Offer/PriceSpecification",
        ))
        i += 1

    # A3 Furnished / relocation (7)
    furnished_specs = {
        "marylebone": "furnished apartments marylebone short term",
        "shoreditch": "furnished apartments shoreditch",
        "kensington": "furnished apartments kensington london",
        "mayfair": "furnished apartments mayfair short term",
        "farringdon": "furnished apartments farringdon",
        "borough": "furnished apartments pimlico london",
        "maida-vale": "furnished apartments maida vale",
    }
    for key, full in AREA_LABELS.items():
        kw = furnished_specs[key]
        rows.append(row(
            i, kw, "A3 furnished", "commercial", "100–400", "medium-high", "N",
            f"Relocation-grade furnished apartments in {full}. What's included (linen, kitchen kit, smart lock, council tax), photo walkthrough of 3 representative units, how soon you can move in.",
            f"/guides/furnished-{AREA_ROUTE[key]}", "NEW",
            f"/locations/{AREA_ROUTE[key]}, /corporate, 3× listings",
            "Article, FAQPage, Product (each listing)",
        ))
        i += 1

    # A4 Family / multi-bed (7)
    family_specs = [
        ("family apartments marylebone london", "marylebone"),
        ("family apartments shoreditch", "shoreditch"),
        ("family apartments kensington london", "kensington"),
        ("family apartments mayfair", "mayfair"),
        ("family apartments near barbican", "farringdon"),
        ("2 bedroom apartment borough london", "borough"),
        ("2 bedroom apartment little venice", "maida-vale"),
    ]
    for kw, key in family_specs:
        full = AREA_LABELS[key]
        rows.append(row(
            i, kw, "A4 family", "commercial", "30–120", "medium", "N",
            f"Family-friendly stays in {full}: 2-bed config, cot/highchair availability, walking distance to playgrounds + museums, school-half-term-friendly cancellation. Show 2-bed inventory only.",
            f"/guides/family-{AREA_ROUTE[key]}", "NEW",
            f"/locations/{AREA_ROUTE[key]}, /apartments?bedrooms=2, /faq#family",
            "Article, FAQPage, Product",
        ))
        i += 1

    # A5 Corporate × area (7)
    corp_specs = [
        ("corporate serviced apartments marylebone", "marylebone"),
        ("corporate apartments shoreditch tech companies", "shoreditch"),
        ("corporate apartments kensington", "kensington"),
        ("corporate apartments mayfair", "mayfair"),
        ("corporate apartments farringdon", "farringdon"),
        ("corporate apartments pimlico london", "borough"),
        ("corporate apartments near paddington", "maida-vale"),
    ]
    for kw, key in corp_specs:
        full = AREA_LABELS[key]
        rows.append(row(
            i, kw, "A5 corporate×area", "commercial", "30–150", "medium", "N",
            f"Corporate stays in {full}: PO billing, monthly invoicing, dedicated AM, Wi-Fi speed receipts, work-from-home set-up, who else has stayed (anonymised sectors).",
            f"/guides/corporate-stays-{AREA_ROUTE[key]}", "NEW (cross-link from /corporate)",
            f"/corporate, /locations/{AREA_ROUTE[key]}, 2× business-friendly listings",
            "Article, FAQPage, Service",
        ))
        i += 1

    # A6 Landmark-anchored (15)
    landmark_specs = [
        ("apartments near regents park london", "marylebone", "Regent's Park"),
        ("apartments near hyde park london", "kensington", "Hyde Park / Kensington Gardens"),
        ("apartments near borough market", "borough", "Borough Market"),
        ("apartments near imperial college london", "kensington", "Imperial College + Imperial Healthcare Trust"),
        ("apartments near barbican centre", "farringdon", "Barbican Centre"),
        ("apartments near liverpool street station", "shoreditch", "Liverpool Street station (Elizabeth/Stansted Express)"),
        ("apartments near marylebone station", "marylebone", "Marylebone station (Chiltern Rail)"),
        ("apartments near paddington station", "maida-vale", "Paddington (Heathrow Express)"),
        ("apartments near london bridge station", "borough", "London Bridge station"),
        ("apartments near old street roundabout", "shoreditch", "Old Street / Silicon Roundabout"),
        ("apartments near oxford circus", "marylebone", "Oxford Circus / Bond Street"),
        ("apartments near tate modern", "borough", "Tate Modern / South Bank"),
        ("apartments near west end theatres", "mayfair", "West End theatres"),
        ("apartments near canary wharf serviced", "borough", "Canary Wharf (via Elizabeth line from London Bridge / Farringdon)"),
        ("apartments near city of london", "farringdon", "City of London / Bank"),
    ]
    for kw, key, landmark in landmark_specs:
        full = AREA_LABELS[key]
        rows.append(row(
            i, kw, "A6 landmark", "navigational-commercial", "50–300", "high", "Y",
            f"Walking-time matrix from each Staylio {full} listing to {landmark}. 5-15 min walk = real proof. Tube alternatives, taxi cost. Genuine guest map.",
            f"/guides/near-{kw.replace('apartments near ', '').replace(' ', '-').replace('london', '').strip('-')}", "NEW",
            f"/locations/{AREA_ROUTE[key]}, 3× nearest listings, /faq#transport",
            "Article, FAQPage, Place (landmark schema), GeoCoordinates",
            f"Cross-link multiple area pages where multiple listings qualify (e.g. Hyde Park is also Marylebone-walkable).",
        ))
        i += 1

    # ====== BUCKET B — Question-intent (25) ======
    question_specs = [
        ("are serviced apartments cheaper than hotels", "informational", "500–2000", "medium", "Y",
         "Real cost comparison for 3 stay lengths (3 nights, 1 week, 1 month) at matched London 4-star vs Staylio. Honest: hotels win at 2 nights, SA wins at 5+. Show the actual maths.",
         "/guides/serviced-apartments-vs-hotels-cost", "NEW (deep dive — sits under existing /apartments-vs-hotels)"),
        ("are serviced apartments cheaper than hotels long term", "informational", "100–500", "medium", "Y",
         "Long-term (30+ nights) cost analysis. Bills-included math destroys hotel BAR. Council-tax exclusion. Loyalty pricing. Concrete example: Marylebone 30-night Staylio vs hotel.",
         "/guides/serviced-apartments-vs-hotels-long-term", "NEW"),
        ("what is a serviced apartment", "informational", "1000–5000", "high", "Y",
         "AI Overviews bait. Schema.org definition + Staylio's 1-paragraph version + 3-photo example unit + 8-bullet 'what's included'. Embeds well as featured snippet.",
         "/guides/what-is-a-serviced-apartment", "NEW"),
        ("difference between serviced apartment and hotel", "informational", "200–800", "medium", "Y",
         "Side-by-side table: kitchen / laundry / housekeeping cadence / bills / minimum stay / breakfast / front desk / dog policy. Cite Booking.com / Sonder / Airbnb for comparison rigour.",
         "/guides/serviced-apartment-vs-hotel-difference", "MERGE into existing /apartments-vs-hotels (expand to 800 words)"),
        ("difference between airbnb and serviced apartment", "informational", "300–1000", "medium", "Y",
         "Airbnb-vs-SA: licensed-operator status, professional cleaning, business invoicing, Section 21 freedom. Honest where Airbnb wins (true entire-home, host charm).",
         "/guides/airbnb-vs-serviced-apartment", "NEW"),
        ("best area to stay in london for first time visitor", "informational", "1000–4000", "high", "Y",
         "Mini-guide using Staylio's 7 areas as the framework. Honest: 'first-timer' best in Marylebone or Borough (walkable, central, not Mayfair-priced). Soft pitch.",
         "/guides/best-area-to-stay-london-first-time", "NEW"),
        ("best area to stay in london for business", "informational", "500–1500", "medium", "Y",
         "Business-stay area picker. Tech meeting? Shoreditch / Farringdon. Finance? City via Farringdon or Barbican. Pharma / hospitals? Kensington. Maps to Staylio's listing zones.",
         "/guides/best-area-to-stay-london-business", "NEW"),
        ("best area to stay in london with family", "informational", "300–1000", "medium", "Y",
         "Family pick: Kensington (museums + Hyde Park) or Marylebone (Regent's Park + Zoo). 2-bed inventory map. Stroller-friendly tube stations.",
         "/guides/best-area-to-stay-london-family", "NEW"),
        ("best area to stay in london near tube", "informational", "100–500", "medium", "Y",
         "Tube-line picker. Every Staylio area has ≤5min walk to a station — show which lines + Elizabeth-line wins. Cross-references all 7 location pages.",
         "/guides/best-area-to-stay-london-near-tube", "NEW"),
        ("pet friendly serviced apartments london", "commercial", "100–500", "medium", "N",
         "DECISION GATE: Staylio pet policy unclear in current FAQ — needs the operator confirmation before writing. If yes-some-units, list which. If no, skip this keyword.",
         "/guides/pet-friendly-apartments-london", "BLOCKED (needs policy decision)"),
        ("can you bring a dog to a serviced apartment", "informational", "50–200", "low", "Y",
         "Same blocker as above. If yes-some: schema-friendly Q&A 'Yes, in select Staylio units — currently 2 in Borough, 1 in Marylebone — £40 cleaning supplement'.",
         "/faq/dogs", "BLOCKED (needs policy decision)"),
        ("do serviced apartments include bills", "informational", "100–500", "low", "Y",
         "Staylio's full bills-included statement (already in llms.txt — promote to its own page for AI Overviews). What 'all bills' actually covers (elec/water/heat/Wi-Fi/council tax).",
         "/guides/are-bills-included-serviced-apartments", "NEW"),
        ("do serviced apartments include council tax", "informational", "50–200", "low", "Y",
         "Council tax UK SA explainer. Staylio's position: included at all properties under <90-night holiday-let exemption + landlord pays for longer stays. Cite gov.uk.",
         "/guides/serviced-apartment-council-tax", "NEW"),
        ("how long can you stay in a serviced apartment", "informational", "200–600", "low", "Y",
         "Minimum 3 nights, maximum (Staylio: indefinite via month-to-month renewal). Legal context (when does it become a tenancy). Tax thresholds. Real guest example: 14-month Marylebone stay.",
         "/guides/how-long-can-you-stay-serviced-apartment", "NEW"),
        ("serviced apartment vs flat rental london", "informational", "100–400", "medium", "Y",
         "SA vs AST tenancy. Deposit-free, no credit check, no tenancy agreement, flexible exit. Cost premium honestly stated (~30% over comparable AST). When SA wins (relocation, project work, between homes).",
         "/guides/serviced-apartment-vs-flat-rental", "NEW"),
        ("minimum stay serviced apartments london", "informational", "100–300", "low", "Y",
         "Staylio = 3 nights minimum, drops to 7 in shoulder season. Industry context: SACO/Native often 7-night min, hotels 1-night. Honest table.",
         "/faq/minimum-stay", "EXPAND existing /faq"),
        ("serviced apartment vs aparthotel", "informational", "100–400", "medium", "Y",
         "SA = self-contained no front desk vs aparthotel = front desk + breakfast bar + smaller units. Pricing, target stay length, who picks which. Reference Locke/Native as aparthotels, Staylio/SilverDoor as SA.",
         "/guides/serviced-apartment-vs-aparthotel", "NEW"),
        ("what is included in a serviced apartment", "informational", "300–800", "medium", "Y",
         "AI Overviews target. The Staylio inclusion list, photographed (linen, kitchen, smart lock, Wi-Fi router, council tax statement). Specific not generic.",
         "/guides/what-is-included-serviced-apartment", "NEW"),
        ("how do serviced apartments work", "informational", "300–1000", "medium", "Y",
         "Process from search → book → check-in → live → check-out. Staylio's actual flow with screenshots. Demystifies for newcomers. Strong SEO + AI bait.",
         "/guides/how-do-serviced-apartments-work", "NEW"),
        ("cheapest serviced apartments central london", "commercial", "200–800", "high", "N",
         "Be careful — 'cheapest' invites price-shopping that may not be Staylio's positioning (boutique/curated). Frame as 'best-value' not 'cheapest'. Show £125+ entry units.",
         "/guides/best-value-serviced-apartments-london", "NEW (renamed — see notes)",
         "RENAMED from 'cheapest' to 'best-value' per the operator's boutique positioning. Decision needed: is the operator OK targeting this intent at all?"),
        ("serviced apartments with washing machine london", "navigational", "30–100", "low", "Y",
         "Bundle into an inclusion-table page. Every Staylio unit has washer-dryer — easy win, will rank quickly with low competition.",
         "/guides/serviced-apartments-with-washing-machine", "NEW (low-effort)"),
        ("self catering apartments central london", "commercial", "200–800", "medium", "N",
         "'Self-catering' is a holiday-let synonym that ranks separately. Same Staylio inventory, different framing — emphasise fitted kitchen, Borough Market access.",
         "/guides/self-catering-apartments-central-london", "NEW"),
        ("where to stay in london for business trip", "informational", "200–800", "medium", "Y",
         "Variant of 'best area for business'. Pure informational with soft hand-off to /corporate. Could merge with /guides/best-area-to-stay-london-business.",
         "/guides/where-to-stay-london-business-trip", "CONSIDER MERGING with B7"),
        ("best london area for monthly stay", "informational", "100–400", "low", "Y",
         "Variant of 'best area for first time' but framed for 30-night-plus. Marylebone wins (longest-stay portfolio). Cross-links to monthly-rental pages (A2).",
         "/guides/best-london-area-monthly-stay", "NEW"),
        ("serviced apartments for relocation london", "commercial", "100–500", "medium", "N",
         "Relocation-package angle. Single-contact AM, monthly invoicing, school/area input on first call. Differentiates from Sonder's self-serve flow.",
         "/guides/serviced-apartments-relocation-london", "NEW"),
    ]
    for kw, intent, est_msv, est_comp, ai_ov, angle, route, page_status, *extra in question_specs:
        notes = extra[0] if extra else ""
        rows.append(row(
            i, kw, "B question-intent", intent, est_msv, est_comp, ai_ov, angle, route, page_status,
            "/faq, /apartments-vs-hotels, /corporate, 2× listings, relevant /locations/{slug}",
            "FAQPage (primary), Article, BreadcrumbList",
            notes,
        ))
        i += 1

    # ====== BUCKET C — Vs / alternative (15) ======
    vs_specs = [
        ("sonder alternative london", "commercial", "10–50", "low-mid", "N",
         "Honest comp: Sonder (tech-first, self-serve, no in-person AM) vs Staylio (boutique, human contact, lower price). Don't bash — describe. Bundle into single /vs/ table page.",
         "/vs/sonder-london", "NEW (low MSV but red-hot intent)"),
        ("sonder vs serviced apartment london", "informational", "<10", "low", "N",
         "Skip as standalone — fold into the Sonder comp page above.",
         "/vs/sonder-london", "FOLD INTO C1"),
        ("silverdoor alternative", "commercial", "10–30", "low", "N",
         "SilverDoor is a B2B broker — different shape. Staylio is direct operator. Honest framing: 'we are what SilverDoor brokers'. Bundle.",
         "/vs/silverdoor-london", "NEW"),
        ("native london serviced apartments", "navigational-commercial", "100–300", "medium", "N",
         "Native is the dominant search-competitor. Don't try to rank for their branded term head-on — write a 'Staylio vs Native: same neighbourhoods, different rate card' angle.",
         "/vs/native-vs-staylio", "NEW (careful with branded-term policy)"),
        ("airbnb monthly stay london", "commercial", "500–1500", "high", "Y",
         "Top of intent funnel. Airbnb's monthly discount math vs Staylio direct. Tax/regulation context (90-night cap, Section 21 protections). Strong AI Overview bait.",
         "/guides/airbnb-monthly-stay-london", "NEW"),
        ("airbnb vs serviced apartment long stay", "informational", "30–100", "low", "Y",
         "Variant of B5 — could fold into /guides/airbnb-vs-serviced-apartment.",
         "/guides/airbnb-vs-serviced-apartment", "FOLD INTO B5"),
        ("cheaper than sonder london", "commercial", "<10", "low", "N",
         "Very low MSV but ultra-hot. Fold into /vs/sonder-london as a section.",
         "/vs/sonder-london", "FOLD INTO C1"),
        ("locke aparthotel alternative", "commercial", "<30", "low", "N",
         "Locke is aparthotel category (smaller units + bar). Different positioning. Fold into a Locke comp section in a bundled /vs/ page.",
         "/vs/london-serviced-apartments", "FOLD INTO C13"),
        ("native places alternative", "commercial", "<30", "low", "N",
         "Same as C8.",
         "/vs/london-serviced-apartments", "FOLD INTO C13"),
        ("cheval residences alternative", "commercial", "<30", "low", "N",
         "Cheval is luxury (£500+). ICP mismatch — Staylio is mid-market. Mention but don't pursue as primary.",
         "/vs/london-serviced-apartments", "FOLD INTO C13 (with disclaimer)"),
        ("saco apartments alternative", "commercial", "10–50", "low", "N",
         "SACO/Edyn is corporate-broker scale. Fold.",
         "/vs/london-serviced-apartments", "FOLD INTO C13"),
        ("edyn group alternative", "commercial", "<10", "low", "N",
         "Same as C11.",
         "/vs/london-serviced-apartments", "FOLD INTO C13"),
        ("best serviced apartment operator london", "commercial", "50–200", "medium", "Y",
         "Listicle-format target. Honest ranking: who wins on price (Staylio), volume (SACO), luxury (Cheval), tech (Sonder), aparthotel (Locke). Cite ourselves last in the ranking — gives credibility.",
         "/guides/best-serviced-apartment-operators-london", "NEW (could host the bundled vs/ table)"),
        ("independent serviced apartment london", "commercial", "30–100", "low", "N",
         "Strong Staylio fit. 'Independent' = not part of SACO/Edyn/Cheval roll-up. Founder-led. Honest about size (43 units = small not tiny).",
         "/guides/independent-serviced-apartments-london", "NEW"),
        ("boutique serviced apartments london", "commercial", "100–500", "medium", "N",
         "ON-BRAND target. Staylio's brand voice is locked 'boutique, curated, warm'. Map to actual portfolio: Marylebone townhouses, Maida Vale mansion blocks. Hero page.",
         "/guides/boutique-serviced-apartments-london", "NEW (priority — strongest brand fit)"),
    ]
    for kw, intent, est_msv, est_comp, ai_ov, angle, route, page_status in vs_specs:
        rows.append(row(
            i, kw, "C vs/alternative", intent, est_msv, est_comp, ai_ov, angle, route, page_status,
            "/apartments, /corporate, /about, relevant /locations/{slug}",
            "Article, FAQPage, ComparativeContent (custom schema). For C5 add ItemList.",
        ))
        i += 1

    return rows


def main():
    creds = service_account.Credentials.from_service_account_file(KEY_FILE, scopes=SCOPES)
    sheets = build("sheets", "v4", credentials=creds)
    drive = build("drive", "v3", credentials=creds)

    rows = build_rows()
    print(f"Built {len(rows)} candidate rows.")

    # Create sheet
    body = {
        "properties": {"title": SHEET_TITLE, "locale": "en_GB"},
        "sheets": [
            {"properties": {"title": "Candidates", "gridProperties": {"frozenRowCount": 1, "frozenColumnCount": 2}}},
            {"properties": {"title": "Brief / readme"}},
            {"properties": {"title": "Page-status legend"}},
        ],
    }
    sheet = sheets.spreadsheets().create(body=body, fields="spreadsheetId,spreadsheetUrl").execute()
    sid = sheet["spreadsheetId"]
    url = sheet["spreadsheetUrl"]
    print(f"Created: {url}")

    # Write headers + data on Candidates tab
    values = [HEADERS] + rows
    sheets.spreadsheets().values().update(
        spreadsheetId=sid,
        range="Candidates!A1",
        valueInputOption="RAW",
        body={"values": values},
    ).execute()

    # Brief / readme tab
    readme = [
        ["Staylio GEO Phase 1 — Long-tail keyword candidates"],
        ["Built", "5 Jun 2026"],
        ["Source brief", "Two Instagram reels operations saved: (1) Neil Patel — long-tail strategy; (2) Justin Hubbard — Google Preferred Sources push"],
        ["Phase", "1 of 5 — keyword research"],
        [""],
        ["Status of MSV columns", "Est. MSV band = Claude's first-principles estimate (NOT authoritative). DataForSEO MSV = empty until DataForSEO MCP is wired."],
        ["DataForSEO blocker", "MCP not installed. Install: bash ~/claude-seo/extensions/dataforseo/install.sh (prompts for username + password from https://app.dataforseo.com). Est. credit cost for all 90 keywords: ~£0.30."],
        ["Sequence (per brief)", "Phase 1 build sheet (this) → the operator reviews 50-keyword shortlist → Phase 2 content production (3 weeks) → Phase 3 Preferred Sources (parallel) → Phase 4 internal linking → Phase 5 measurement via Leo"],
        ["Budget", "£0 — DataForSEO already authed (per CLAUDE.md, NOT actually wired — see decision asks)"],
        ["Quality gate", "Don't ship a page that doesn't answer a real question better than what currently ranks #1. 15 great > 50 mediocre."],
        [""],
        ["Decisions Operations needs to make"],
        ["1. Install DataForSEO MCP?", "Run installer + paste creds — unblocks all real MSV/competition/SERP data. ~5 min."],
        ["2. Pet policy", "B10/B11 keywords blocked. Confirm: do any Staylio units accept dogs? If yes, which?"],
        ["3. 'Cheapest' vs 'best value' framing", "B20 keyword 'cheapest serviced apartments central london' — keep as 'best-value' rename per brand voice, or skip entirely?"],
        ["4. WhatsApp number drift", "Brief says +44 7375 621453. brand_identity memory (22 May) locks +44 7304 353 640. Three numbers in circulation per project_staylio_reviews_05jun.md. Which is correct on hello@/staylio.london for the CTA across 30-50 new pages?"],
        ["5. Branded-term policy", "C4 'native london serviced apartments' targets a competitor's brand. Ethical/legal — acceptable to pursue 'X vs Y' comparison ranking? (UK common practice; Sonder/Native both do it)"],
        ["6. Single bundled /vs/ page or 8 separate?", "Per seo-dataforseo agent C analysis: bundle all low-MSV operator comparisons into one /vs/london-serviced-apartments table (C7-C12) rather than 6 thin pages. Aligns with quality gate."],
        [""],
        ["Sheet columns explained"],
        ["#", "Row index"],
        ["Keyword", "Exact long-tail keyword target"],
        ["Bucket", "A area-anchored / B question-intent / C vs/alternative — and sub-bucket"],
        ["Intent", "commercial / informational / navigational / mixed"],
        ["Est. MSV band (claude)", "First-principles estimate ONLY — replace with DataForSEO MSV once available"],
        ["Likely competition", "low / medium / high — based on competitor backlink heuristic"],
        ["AI Overview likely?", "Whether SERP for this keyword tends to surface an AI Overview (Y/N estimate)"],
        ["DataForSEO MSV", "REAL monthly search volume — empty until DataForSEO MCP is live"],
        ["DataForSEO competition", "REAL competition score — empty until DataForSEO is live"],
        ["SERP top 3 (live)", "Top 3 organic domains for this keyword — empty until DataForSEO is live"],
        ["Our content angle", "What Staylio brings that the current SERP top-3 doesn't"],
        ["Target route", "Where this content lives on staylio.london"],
        ["Page status", "NEW / EXPAND existing / MERGE into existing / FOLD INTO another / BLOCKED"],
        ["Primary CTA", "WhatsApp Ali — per brief. See decision #4 about number drift."],
        ["Internal links", "3-5 internal links each page should have (per brief)"],
        ["Schema additions", "JSON-LD types to add on this page"],
        ["Status", "CANDIDATE (now) → APPROVED (after the operator review) → DRAFT → LIVE"],
        ["Notes / decisions", "Decision asks or considerations"],
    ]
    sheets.spreadsheets().values().update(
        spreadsheetId=sid,
        range="Brief / readme!A1",
        valueInputOption="RAW",
        body={"values": readme},
    ).execute()

    # Page-status legend
    legend = [
        ["Page status", "Meaning", "Existing on site?"],
        ["NEW", "Build a brand-new page at the target route", "No"],
        ["EXPAND existing", "Take an existing page (/apartments-vs-hotels, /faq, /corporate, /locations/[slug]) and grow it to 600+ words with the angle described", "Yes — expand"],
        ["MERGE into existing", "Don't build a new page — add a section to an existing page", "Yes — graft"],
        ["FOLD INTO C13", "This low-MSV keyword should become one row/section of the bundled /vs/ table, not a standalone page", "No — bundled"],
        ["BLOCKED", "Cannot ship until a decision is made (e.g. pet policy)", "n/a"],
        [""],
        ["Existing pages on staylio.london (do not duplicate)"],
        ["/", "Homepage"],
        ["/about", "Brand + Companies House info"],
        ["/apartments", "Catalogue"],
        ["/apartments/[slug]", "43 listing detail pages"],
        ["/apartments-vs-hotels", "Existing comparison"],
        ["/corporate", "Corporate stays"],
        ["/contact", "Contact"],
        ["/faq", "General FAQ"],
        ["/locations", "Locations index"],
        ["/locations/[slug]", "7 area landing pages — already have local-guide blocks (shipped 3 Jun)"],
    ]
    sheets.spreadsheets().values().update(
        spreadsheetId=sid,
        range="Page-status legend!A1",
        valueInputOption="RAW",
        body={"values": legend},
    ).execute()

    # Formatting — bold headers, column widths, alternating banding, conditional fills
    # Get sheetIds
    meta = sheets.spreadsheets().get(spreadsheetId=sid).execute()
    sheet_ids = {s["properties"]["title"]: s["properties"]["sheetId"] for s in meta["sheets"]}

    requests = []
    # Bold header row on each tab
    for tab in ["Candidates", "Brief / readme", "Page-status legend"]:
        requests.append({
            "repeatCell": {
                "range": {"sheetId": sheet_ids[tab], "startRowIndex": 0, "endRowIndex": 1},
                "cell": {
                    "userEnteredFormat": {
                        "textFormat": {"bold": True},
                        "backgroundColor": {"red": 0.94, "green": 0.92, "blue": 0.86},
                    }
                },
                "fields": "userEnteredFormat(textFormat,backgroundColor)",
            }
        })

    # Set column widths on Candidates
    candidates_id = sheet_ids["Candidates"]
    widths = [
        (0, 1, 40),    # #
        (1, 2, 280),   # Keyword
        (2, 3, 110),   # Bucket
        (3, 4, 100),   # Intent
        (4, 5, 130),   # Est. MSV
        (5, 6, 110),   # Likely competition
        (6, 7, 90),    # AI Overview
        (7, 8, 110),   # DataForSEO MSV
        (8, 9, 110),   # DataForSEO comp
        (9, 10, 200),  # SERP top 3
        (10, 11, 460), # Content angle
        (11, 12, 260), # Target route
        (12, 13, 140), # Page status
        (13, 14, 220), # Primary CTA
        (14, 15, 280), # Internal links
        (15, 16, 220), # Schema additions
        (16, 17, 200), # Status
        (17, 18, 260), # Notes
    ]
    for start, end, width in widths:
        requests.append({
            "updateDimensionProperties": {
                "range": {"sheetId": candidates_id, "dimension": "COLUMNS", "startIndex": start, "endIndex": end},
                "properties": {"pixelSize": width},
                "fields": "pixelSize",
            }
        })

    # Wrap text on long columns
    requests.append({
        "repeatCell": {
            "range": {"sheetId": candidates_id, "startColumnIndex": 10, "endColumnIndex": 16, "startRowIndex": 1},
            "cell": {"userEnteredFormat": {"wrapStrategy": "WRAP", "verticalAlignment": "TOP"}},
            "fields": "userEnteredFormat(wrapStrategy,verticalAlignment)",
        }
    })

    # Conditional formatting on page-status column (M = col index 12)
    requests.append({
        "addConditionalFormatRule": {
            "rule": {
                "ranges": [{"sheetId": candidates_id, "startColumnIndex": 12, "endColumnIndex": 13, "startRowIndex": 1}],
                "booleanRule": {
                    "condition": {"type": "TEXT_CONTAINS", "values": [{"userEnteredValue": "BLOCKED"}]},
                    "format": {"backgroundColor": {"red": 0.98, "green": 0.78, "blue": 0.78}},
                },
            },
            "index": 0,
        }
    })
    requests.append({
        "addConditionalFormatRule": {
            "rule": {
                "ranges": [{"sheetId": candidates_id, "startColumnIndex": 12, "endColumnIndex": 13, "startRowIndex": 1}],
                "booleanRule": {
                    "condition": {"type": "TEXT_CONTAINS", "values": [{"userEnteredValue": "FOLD INTO"}]},
                    "format": {"backgroundColor": {"red": 0.98, "green": 0.95, "blue": 0.82}},
                },
            },
            "index": 1,
        }
    })
    requests.append({
        "addConditionalFormatRule": {
            "rule": {
                "ranges": [{"sheetId": candidates_id, "startColumnIndex": 12, "endColumnIndex": 13, "startRowIndex": 1}],
                "booleanRule": {
                    "condition": {"type": "TEXT_CONTAINS", "values": [{"userEnteredValue": "NEW"}]},
                    "format": {"backgroundColor": {"red": 0.84, "green": 0.94, "blue": 0.86}},
                },
            },
            "index": 2,
        }
    })

    sheets.spreadsheets().batchUpdate(spreadsheetId=sid, body={"requests": requests}).execute()

    # Share
    for email in [OPERATIONS_EMAIL, OPERATIONS_PERSONAL]:
        try:
            drive.permissions().create(
                fileId=sid,
                body={"type": "user", "role": "writer", "emailAddress": email},
                sendNotificationEmail=False,
                fields="id",
            ).execute()
            print(f"Shared with {email}")
        except Exception as e:
            print(f"Share to {email} failed: {e}", file=sys.stderr)

    print("\n=========")
    print(f"SHEET URL: {url}")
    print(f"SPREADSHEET_ID: {sid}")
    print("=========\n")

    # Persist ID for downstream sessions
    with open("/Users/<owner>/staylio-london/.geo/sheet_id.txt", "w") as f:
        f.write(sid + "\n")
        f.write(url + "\n")

    return sid, url


if __name__ == "__main__":
    main()
