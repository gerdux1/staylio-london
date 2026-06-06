# Staylio review infrastructure — runbook

_Built 5 Jun 2026. Owners: Kris (director / verification), Operations (DNS / site code), Sofia (email drafts), Iris (review routing)._

## TL;DR — current state (verified live 5 Jun)

| Surface | State | Action needed |
|---|---|---|
| **Trustpilot** profile for staylio.london | **Already CLAIMED** (May 2026), 0 reviews — https://uk.trustpilot.com/review/staylio.london | Find login + configure |
| **Google Business Profile** | Not found in search | Create from scratch, postcard to 85 Frampton |
| **DNS** | Hostinger (NS = atlas/hyperion.dns-parking.com); site served by Vercel | TXT records added in Hostinger when tokens issued |
| **Site testimonials** | Fabricated "Marie L." / "James R." / "4.9" live on homepage | **Remove now — CMA fake-review rules risk** |
| **Phone number on site** | Intentional split per commit `33ddb9f` + the 5 Jun rule: Ali `+44 7375 621453` (Direct Bookings / sales / **marketing-public** — use on GBP, Trustpilot, IG, FB, Bing) ・ Guest service `+44 7304 353 640` (in-stay support only) ・ Kris's personal number = for one-off verification SMS / OTP only, never published | None — split is correct as-is |

## Phase 1A — Trustpilot (someone on Staylio team already claimed it)

1. **Find the login.** Try shared account first: `stayliolondon@gmail.com` / `Property2021!` (per Staylio Drive `Login doc`, folder `1jcU7EGITlg_PjGzv0FcVdkLOjISzuQnX`). If wrong, ask Kris which email he used to claim. Trustpilot doesn't disclose the claimer; only password reset on file works. Last resort: support.trustpilot.com → "request admin transfer" with Companies House 17012831 + Kris's director ID.
2. **Log in** at https://business.trustpilot.com/login
3. **Configure profile** — paste verbatim:
 - Company name: `Staylio`
 - Legal name: `Staylio Limited`
 - Companies House: `17012831`
 - Address: `85 Frampton Street, London NW8 8NQ`
 - Website: `https://staylio.london`
 - Public email: `hello@staylio.london`
 - Phone: `+44 7375 621453` (Ali Direct Bookings — marketing-public per the 5 Jun rule)
 - Category: Hospitality > Serviced Apartment (or Holiday Apartment if that's not present)
 - Logo: Staylio Drive folder `1ICCgGv-qkQnJS1NhaXirgcx05tFqOE5b`
 - Bio (use the live one published on the Trustpilot profile — do not regenerate. Last published Option B v4 116-word version per session 5 Jun; honest about self check-in being on most apartments, not all, and housekeeping on request not universal):
 > London serviced apartments for short lets, mid lets, long stays and corporate housing. Around 50 fully equipped apartments across seven Central London neighbourhoods — Regent's Park & Marylebone, Old Street & Shoreditch, Kensington & Hammersmith, Fitzrovia & Mayfair, Barbican & Farringdon, Borough & Pimlico, and Little Venice & Maida Vale. All bills included. Boutique, curated, warm.
4. **Verify the domain.** Settings → Verify your business → Verify with TXT record. Trustpilot generates `trustpilot-domain-verification=<token>`. Add in Hostinger (Phase 1C). Click Verify in Trustpilot. Allow up to 72h; usually < 1h.
5. **Get the free TrustBox embed.** Settings → Showcase → Carousel widget → copy snippet. Goes into `src/app/page.tsx` replacing the fabricated testimonials (Phase 3B below).
6. **Decline paid tier (Lite £200/mo) for now.** Free covers everything needed until review velocity actually stalls.

> 🚨 Name-on-Staylio rule: never list the parent-entity owner as admin / owner / contact / responsible person on any Staylio profile (Trustpilot, GBP, Bing, IG, FB). The Staylio team has Kris (director) + Ali (operations) + the shared inbox `hello@staylio.london`. If extra admin access is needed, use the shared inbox account, not a personal one. See `~/.claude/projects/-Users-<owner>/memory/feedback_never_sign_as_staylio_director.md` for the full rule + grep checklist.

## Phase 1B — Google Business Profile (new)

1. Sign in at https://www.google.com/business with **`stayliolondon@gmail.com`** (the shared Staylio account survives staff turnover; never use a personal Google account for company listings).
2. **Add business** with:
 - Name: `Staylio`
 - Primary category: `Serviced apartment` (try "Serviced accommodation" if not in dropdown)
 - Secondary: `Furnished apartment building`
 - Address: `85 Frampton Street, London NW8 8NQ`
 - Service area: London, 25-mile radius
 - Phone: `+44 7375 621453` (Ali Direct Bookings — marketing-public per the 5 Jun rule. For verification SMS only, Kris's personal number can be swapped in temporarily then reverted.)
 - Website: `https://staylio.london`
 - Hours: Open 24/7 (smart-lock self check-in + WhatsApp Ali)
 - Booking link: `https://staylio.london/apartments`
3. **Structure decision: ONE profile, not seven.** Per-neighbourhood GBPs (one per location page) trip Google's Operator Status checks because we lack staffed offices at each. Start with one at 85 Frampton; expand only if traffic justifies the operational cost.
4. **Upload 10+ photos** (Staylio Drive + BOOM media library):
 - 1 London hero (Tower Bridge / cityscape)
 - 7 apartment interiors (one per neighbourhood)
 - 1 brand logo
 - 1 team / guest-facing photo (Ali Hassan or Kris — humanises the listing; do NOT use a photo of the NN/EPL-side owner on Staylio GBP per name-on-Staylio rule)
5. **Verification.** Google posts a 5-digit code to 85 Frampton, 4-14 working days. Kris or whoever opens post there enters the code in GBP. 30-day expiry. If lost twice, request video verification (continuous phone walk from a public landmark to the door + inside).

## Phase 1B-bis — Bing Places for Business (depends on GBP above)

Microsoft's equivalent of GBP. Feeds Bing search + Yahoo + Microsoft Copilot AI. Different audience to Google (B2B / older corporates often default to Bing on work machines). 10 minutes once GBP is set up.

1. Open https://www.bingplaces.com → Sign in with the SAME shared `stayliolondon@gmail.com` Google account used for GBP (or a Microsoft account on the same address — Bing accepts both).
2. Choose **"Import from Google Business Profile"** — one-click pulls everything across (name, category, address, phone, website, photos, hours).
3. Confirm the details match. Save.
4. Verification: Bing Places piggybacks on GBP verification — once GBP postcard is verified, Bing auto-verifies within ~7 days. No separate postcard.
5. Add `https://www.bing.com/maps?...` profile URL to the Staylio Organization schema `sameAs` array once live.

If "Import from Google" is greyed out (GBP not yet verified at the time of Bing setup), pick **"Add a single business"** and fill the same fields manually; Bing will then merge once GBP verifies.

## Phase 1C — DNS records at Hostinger (pre-staged)

Login: https://hpanel.hostinger.com → Domains → staylio.london → DNS / Name Servers → DNS Records.

**Already present — DO NOT modify:**

| Type | Host | Value | Note |
|---|---|---|---|
| A | @ | 216.198.79.1 | Vercel |
| CNAME | www | cname.vercel-dns.com. | Vercel |
| TXT | @ | v=spf1 include:_spf.google.com ~all | Google Workspace SPF |
| MX | @ | smtp.google.com | Google Workspace |

**Add when Trustpilot issues a token** (Settings → Verify your business):

```
Type: TXT
Host: @
Value: trustpilot-domain-verification=<paste token here>
TTL: 14400
```

**Add only if GBP postcard fails twice + fallback to Search Console verification:**

```
Type: TXT
Host: @
Value: google-site-verification=<paste token here>
TTL: 14400
```

Allow propagation up to 72 h, then click Verify in the respective dashboard. Once verified, the TXT can be deleted (Trustpilot says so explicitly; GBP keep it).

## Phase 2 — Past-guest review-request emails (gated on operations approval)

**Source list:** BOOM past-guest emails, last 12 months, status = checked out. Filter OUT anyone with a ≤3-star OTA review or a complaint in `ai_tags` (cross-reference OTA Registry sheet `1cknTr9J6BSkqpHIebo17oNQZJsp4v9CLmGZc-iL6SZA` → Reviews tab).

**Owner:** Sofia drafts, Operations approves, send in batches of 50/day via `hello@staylio.london`.

**Subject:** `Quick favour from Ali at Staylio`

**Body:**

> Hi {first_name},
>
> Ali here from Staylio — thank you again for choosing our apartment in {area_label} for your stay in {month}.
>
> If your stay went well, would you spend 60 seconds leaving us a star rating? Two links below — pick whichever's easier:
>
> • Trustpilot: https://uk.trustpilot.com/evaluate/staylio.london
> • Google: <paste `https://g.page/r/<CID>/review` once GBP live>
>
> Honest feedback only. We use every review to improve the next stay.
>
> Thanks so much,
> Ali Hassan · Staylio
> hello@staylio.london · WhatsApp +44 7304 353 640

**Don't send until both review links are live + Operations has reviewed the first batch.**

## Phase 3 — Site changes (in `~/staylio-london`)

### 3A. Deploy NOW (risk mitigation — independent of Phase 1)

| File | Change | Reason |
|---|---|---|
| `src/app/page.tsx` lines ~252–292 | Replace the fabricated testimonials block (see paste-ready JSX below) | CMA fake-review rules (Apr 2025) = strict liability for fabricated testimonials presented as customer reviews |
| `src/app/page.tsx` line ~256 (`4.9`) | Replace with `7` (= 7 neighbourhoods) or remove the column | Same |
| Keep `40+` and `15 min` | These are factually accurate (43 BOOM listings, WhatsApp SLA) | — |
| `src/app/contact/page.tsx` lines 7, 41, 42, 51, 54 | `7375 621453` → `7304 353 640`; also update `wa.me/447375621453` → `wa.me/447304353640` | Locked phone per `reference_staylio_brand_identity.md` 22 May |
| `src/app/page.tsx` line 327 (`wa.me/447375621453`) | Same | Same |
| `src/lib/schema.tsx` line 13 (`telephone`) | Same | Same |

**Paste-ready replacement for `src/app/page.tsx` lines ~252–292** (the Trust signals + reviews section):

```tsx
 {/* Trust signals — real, no fabricated ratings */}
 <section className="mx-auto max-w-7xl px-6 py-24">
 <div className="grid gap-12 md:grid-cols-3 text-center">
 <div>
 <p className="font-serif text-5xl text-stone-900">7</p>
 <p className="mt-2 text-sm text-stone-600">Central London neighbourhoods</p>
 </div>
 <div>
 <p className="font-serif text-5xl text-stone-900">40+</p>
 <p className="mt-2 text-sm text-stone-600">Apartments under one operator</p>
 </div>
 <div>
 <p className="font-serif text-5xl text-stone-900">15 min</p>
 <p className="mt-2 text-sm text-stone-600">Average response time, 24/7</p>
 </div>
 </div>

 <div className="mt-16 rounded-2xl border border-stone-200 bg-stone-50 p-8 text-center">
 <p className="font-serif text-2xl text-stone-900">Review collection is now live.</p>
 <p className="mt-3 text-stone-700">
 We are building our public review profile from real Staylio guests. If you have stayed
 with us, you can leave a review on{" "}
 <a
 href="https://uk.trustpilot.com/review/staylio.london"
 target="_blank"
 rel="noopener noreferrer"
 className="font-medium text-stone-900 underline underline-offset-4"
 >
 Trustpilot
 </a>
 .
 </p>
 </div>
 </section>
```

Deploy: `cd ~/staylio-london && npx vercel --prod --yes` (push to GitHub does NOT auto-deploy on this repo — see `project_staylio_local_guide_02jun.md`).

### 3B. Once Trustpilot domain is verified

1. Embed TrustBox carousel in `src/app/page.tsx` where testimonials were.
2. Update `src/lib/schema.tsx` `sameAs` array:
 ```ts
 sameAs: [
 "https://find-and-update.company-information.service.gov.uk/company/17012831",
 "https://uk.trustpilot.com/review/staylio.london",
 ],
 ```
3. Append to `public/llms.txt` under `## Brand`:
 ```
 - Reviews: https://uk.trustpilot.com/review/staylio.london (Trustpilot Business)
 ```

### 3C. Once GBP is verified

1. Add `https://g.page/r/<CID>` to the same `sameAs` array.
2. Optional: GBP review badge on `/about` + `/contact`.

### 3D. Once ≥ 10 reviews avg ≥ 4.5

Add `aggregateRating` to `organizationSchema()` in `src/lib/schema.tsx`:

```ts
aggregateRating: {
 "@type": "AggregateRating",
 ratingValue: "4.X",
 reviewCount: "NN",
 bestRating: "5",
}
```

Hand-update weekly OR have Leo wire the Trustpilot Business Units API (free tier: `numberOfReviews`, `trustScore`, `stars`).

## Phase 4 — Routing + reporting (Operations sign-off before wiring)

- **Negative review SOP.** `#reviews` (`C04MXK12D17`) + Taylor (`U0AAZSNLW6T`) / John (`U0ASNLR4X4N`) already handle OTA negatives via Iris. Extend Iris to ingest Trustpilot + GBP feeds (Trustpilot offers free RSS at the public profile; GBP needs Google My Business API — service account).
- **Monthly Trustpilot + GBP report → Leo.** Add the two new sources to Leo's `~/leo/ROADMAP.md` GEO scan. Track velocity, avg rating, sentiment themes, response time.

## Risks + decisions Operations needs to make

1. **Fabricated testimonials still live.** Recommend deploying Phase 3A today regardless of Phase 1 progress.
2. **Trustpilot already claimed.** Don't sign up a new account or you create a duplicate. Recover access first.
3. **GBP postcard logistics.** Someone at 85 Frampton needs to open post within ~30 days of trigger. Brief Kris.
4. **Trustpilot tier.** Free is fine. Paid (£200/mo Lite) only if real velocity stalls below 5 reviews/month after 60 days.
5. **Phone number drift across the site.** Fix in 3A. Out-of-task-scope but a Staylio brand error currently in production.

## Done criteria

- [ ] Trustpilot login recovered or admin transferred — Kris or Operations has access
- [ ] Trustpilot profile configured (logo, bio, categories, phone)
- [ ] Trustpilot domain verified
- [ ] GBP created at 85 Frampton with 10+ photos
- [ ] GBP postcard received + code entered + listing live in search
- [ ] Schema.org `sameAs` updated with both URLs
- [ ] Fabricated testimonials removed from homepage
- [ ] Past-guest email approved + first batch sent
- [ ] First real review on Trustpilot

## Cross-references

- `~/.claude/projects/-Users-<owner>/memory/feedback_never_sign_as_staylio_director.md` — Kris is director, not Operations
- `~/.claude/projects/-Users-<owner>/memory/reference_staylio_brand_identity.md` — locked phone `7304 353 640`, contact `hello@staylio.london`
- `~/.claude/projects/-Users-<owner>/memory/project_staylio_london_nextjs_rebuild_02jun.md` — Vercel project id `prj_DT1RCGziIE8AlkKtT6RDtOTNMdl8`, manual `vercel --prod` required
- `~/.claude/projects/-Users-<owner>/memory/project_review_solicitation_strategy.md` — OTA-side review solicitation owned by Iris
- `~/.claude/projects/-Users-<owner>/memory/project_iris_negative_reviews_hybrid.md` — `#reviews` channel routing
- `~/.claude/projects/-Users-<owner>/memory/project_clear_225_review_backlog_and_restore_review_response_rate_to.md` — 225 OTA backlog cleardown
