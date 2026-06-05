# Staylio Instagram setup — runbook

_Built 5 Jun 2026. Same pattern as `KRIS_REVIEW_SETUP.md` — the operator or Kris does the signup, everything else is paste-ready._

## Owner
- **Account creation**: Kris or the operator-as-Operations (~5 min)
- **Content**: TBD — Arianne / Mark Erquiza / external if hired; agent option = a content-writer skill loop later
- **Email for account**: `stayliolondon@gmail.com` (same shared inbox pattern as GBP — survives staff turnover, never use a personal account)

## Phase 1 — Handle (pick one before signing up)

Priority order, claim the first that's free:

| # | Handle | Notes |
|---|---|---|
| 1 | `@staylio.london` | Matches the domain exactly. Periods allowed in IG handles. |
| 2 | `@staylio_london` | Backup if `.london` taken. |
| 3 | `@staylio.uk` | Shorter; only if both above taken. |
| 4 | `@staylio.stays` | Last resort — slightly off-brand from `.london`. |

⚠️ Avoid `@staylio` alone — likely taken. Confusable competitors exist (per Google search 5 Jun): `Stayo Kensington`, `Stayo`, `Stayio`. Don't claim anything that lets a guest land on a competitor by mistype.

Check availability at https://www.instagram.com/<handle>/ before signing up (404 = free).

## Phase 2 — Account creation (Kris or the operator, ~5 min)

1. Open https://www.instagram.com/accounts/emailsignup/
2. Email: `stayliolondon@gmail.com`
3. Full name: `Staylio`
4. Username: from Phase 1 list above
5. Password: store in 1Password / Staylio Drive Login doc (folder `1jcU7EGITlg_PjGzv0FcVdkLOjISzuQnX`)
6. Confirm email link from inbox
7. **Switch to Professional account** → "I am a business" → Category: `Holiday & Travel` / `Vacation Home Rental` (Instagram doesn't have a "Serviced Apartments" tag — `Vacation Home Rental` is the closest, alternatively `Hotel & Resort`)
8. Skip phone (or add `+44 7304 353 640` only if comfortable — public-visible on the profile)

## Phase 3 — Profile configuration (paste-ready)

### Profile photo
Staylio logo PNG from Drive folder `1ICCgGv-qkQnJS1NhaXirgcx05tFqOE5b`. Use a square crop on a cream / off-white background. Avoid the wordmark on a busy photo — at 110x110px display, only the mark / symbol reads.

### Display name
`Staylio · London Serviced Apartments`

### Bio (148 chars, fits the 150 limit)
```
Independent London serviced apartments.
40+ flats · 7 neighbourhoods.
All bills in. Boutique, curated, warm.
Book direct → 10% off OTAs
```

Alt voice (longer, more direct):
```
London serviced apartments, lived in properly.
45–80 sqm with kitchen, laundry, all bills in.
3 nights to 3 months.
WhatsApp Ali for direct rates.
```

### Website / link
`https://staylio.london` — direct, no Linktree.

(If you ever need multiple links, add Beacons or Stan Store later — but a single clean link first to keep attribution clean to Vercel analytics.)

### Contact options (Professional account)
- Email button: `hello@staylio.london`
- WhatsApp button: `+44 7304 353 640` (locked brand line)
- Address: 85 Frampton Street, London NW8 8NQ

### Category
- Primary: `Vacation Home Rental`
- Show category on profile: YES

## Phase 4 — Link to Facebook Page (optional but recommended)

For Meta Ads + cross-posting + better insights, create a matching Facebook Page:

1. https://www.facebook.com/pages/create → "Business or brand"
2. Page name: `Staylio`
3. Category: `Vacation Home Rental`
4. Address + phone same as above
5. Link to Instagram via Meta Business Suite → Settings → Linked accounts

Skip if not running ads in the next 90 days — Instagram Business now works standalone for organic posting + DMs.

## Phase 5 — First 9 grid posts (cornerstone aesthetic)

Audience opens a new profile and judges by the top 9 in 2 seconds. Goal: instant read of "boutique London serviced apartments". Posting cadence: 1 per day for the first 9 days, then 3-4× per week.

| # | Post | Content | Caption seed |
|---|---|---|---|
| 1 | Hero brand statement | Cream background, Cormorant Garamond serif text on image: **"Live in London on your own terms."** | "Welcome to Staylio. 40+ serviced apartments across 7 Central London neighbourhoods. Lived in properly." |
| 2 | Apartment hero #1 (Marylebone) | Wide interior shot of the best Marylebone listing | "Near Regent's Park. 10 min to Oxford Circus. Fitted kitchen, all bills in." |
| 3 | The map | Simple stone-coloured London map with 7 dots marked | "Where we live: 7 neighbourhoods. Marylebone. Shoreditch. Kensington. Fitzrovia. Farringdon. Borough. Little Venice." |
| 4 | Apartment hero #2 (Shoreditch) | Wide interior shot, contrasting palette | "Old Street tech corridor. Walk to Spitalfields. 4 nights or 4 months." |
| 5 | What's included | Text-on-image graphic: "Electricity. Water. Heating. Wi-Fi. Council tax. All in." | "One rate. No surprises on departure. No exit fees." |
| 6 | Apartment hero #3 (Little Venice) | Canalside, soft light | "Little Venice. Canal at the door. 4 mansion-block flats." |
| 7 | Booking direct USP | Simple text-on-image: "Direct is always 10% lower than Booking.com or Airbnb." | "We don't pay platform commission. We pass it back." |
| 8 | Apartment hero #4 (Kensington) | Wide interior | "Kensington. Museum mile. Direct Piccadilly to Heathrow." |
| 9 | Real human | Ali on WhatsApp (or Operations + Kris) candid shot | "Real people. WhatsApp Ali for direct rates and answers — average reply 15 minutes." |

After grid #9, mix:
- **50% apartment interiors** (rotation across all 43 listings, longest-stay properties priority)
- **25% London neighbourhood content** (walks, cafés, hidden gems — reuse `src/lib/local-recommendations.ts` curated venues)
- **15% guest stories** (anonymised, with permission — quote + photo if shared)
- **10% behind-the-scenes** (housekeeping standard, smart-lock setup, WhatsApp threads censored)

Reels: 1-2 per week. Best-performing format for SA brands = walking tour through a neighbourhood ending at an apartment door (under 30 sec, no talking head needed — overlay text + ambient sound).

## Phase 6 — Caption + hashtag pack

### Hashtag set (rotate, max 10 per post to avoid shadow-ban signals)

**Core (always):**
`#staylio #londonserviced #servicedapartmentslondon #londonstays`

**Discovery (rotate by neighbourhood):**
- Marylebone: `#marylebone #regentspark #marylebonelife`
- Shoreditch: `#shoreditch #oldstreet #eastlondon`
- Kensington: `#kensington #southkensington #notinghill` (if cross-pollinating)
- Fitzrovia: `#fitzrovia #mayfair #charlottestreet`
- Farringdon: `#farringdon #barbican #clerkenwell`
- Borough: `#boroughmarket #bermondsey #southbank`
- Little Venice: `#littlevenice #maidavale #regentscanal`

**Audience (rotate sparingly):**
`#londonrelocation #expatlondon #corporatehousing #longstaylondon #monthlyrentals #digitalnomadlondon`

### Default caption skeleton (boutique, curated, warm)
```
{Specific apartment / neighbourhood hook · one short sentence}.

{Two-line concrete detail: what's there, what works}.

{Soft CTA — never pushy. e.g. "Direct rates via the link in bio." or "WhatsApp Ali to enquire."}

#staylio #londonserviced + 6-8 from the rotate set
```

Voice rules (per `decision_staylio_brochure_voice_14may.md`):
- UK spelling everywhere
- "Fortnightly housekeeping" (never weekly or bi-weekly)
- "Long-stay" threshold = "one week or more"
- No "flexible" wording
- The OTA-comparison line: "Direct is always at least 10% lower than Booking.com or Airbnb" — that's the locked phrasing.

## Phase 7 — Cross-link on staylio.london (site code, gated on account live)

Add Instagram URL to:

1. `src/lib/schema.tsx` Organization `sameAs` (already pending Trustpilot/GBP additions per `KRIS_REVIEW_SETUP.md`):
```ts
sameAs: [
  "https://find-and-update.company-information.service.gov.uk/company/17012831",
  "https://uk.trustpilot.com/review/staylio.london",
  "https://www.instagram.com/<handle>/",
],
```

2. Site footer (`src/components/Footer.tsx` if exists, otherwise wherever the social row lives) — add Instagram icon link.

3. `public/llms.txt` — append to `## Brand`:
```
- Instagram: https://www.instagram.com/<handle>/
```

## Phase 8 — Ongoing posting

Decision Operations needs to make: **who runs the account?**

Options:
1. **Arianne** — already in ops, knows the brand. Probably 30 min/post too expensive given her load.
2. **Mark Erquiza** — existing paid capacity per `project_staylio_london_nextjs_rebuild_02jun.md` "redirected to Staylio.london WP-side maintenance tasks within his wheelhouse" — could expand to content.
3. **VA in Pakistan / Philippines** with content brief — cheapest, needs tight brand-voice guardrails.
4. **Content-writer agent loop** (deferred) — Leo or new agent drafts from `decision_staylio_brochure_voice_14may.md` voice + apartments data + Local Guide; human approves; posts via Meta Graph API. This is buildable but needs an Instagram Business API access token (separate Meta app review).

Recommend Option 2 or 3 with a 4-week trial, then evaluate. Skip the agent loop until volume justifies it.

## Risks + decisions Operations needs to make

1. **Handle choice** — pick from Phase 1 list before signup. If `@staylio.london` is free, take it without further deliberation.
2. **Account email** — use `stayliolondon@gmail.com` (shared) not personal.
3. **Facebook Page** — create alongside Instagram or skip. Recommend: create the Page, even if not advertising yet. 5 extra minutes, future-proofs ads.
4. **Profile photo** — confirm Staylio logo in Drive folder `1ICCgGv-qkQnJS1NhaXirgcx05tFqOE5b` works at 110x110px or commission a square-format mark from the brand pack.
5. **Posting owner + cadence** — Phase 8 above.

## Done criteria

- [ ] Handle claimed
- [ ] Account switched to Professional / Business
- [ ] Bio + link + profile photo set
- [ ] Email + WhatsApp + address contact buttons populated
- [ ] (Optional) Facebook Page created + linked
- [ ] First 9 grid posts scheduled / posted
- [ ] Instagram URL added to `src/lib/schema.tsx` sameAs + `public/llms.txt`
- [ ] Footer link added to staylio.london (TBD whether footer has social row)
- [ ] Posting owner assigned

## Cross-references

- `~/staylio-london/KRIS_REVIEW_SETUP.md` — Trustpilot + GBP setup (companion runbook)
- `~/.claude/projects/-Users-<owner>/memory/decision_staylio_brochure_voice_14may.md` — locked brand voice
- `~/.claude/projects/-Users-<owner>/memory/reference_staylio_brand_identity.md` — locked phone + email
- `~/.claude/projects/-Users-<owner>/memory/project_staylio_london_nextjs_rebuild_02jun.md` — site code paths
- `~/staylio-london/src/lib/local-recommendations.ts` — reusable venue content for neighbourhood posts
