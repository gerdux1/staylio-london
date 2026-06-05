# Staylio GEO — next steps after this session

## What's done (5 Jun 2026)
- `.geo/keyword_candidates_05jun.{csv,tsv,json}` — 91 keyword candidates with content angles, target routes, internal-link plans, schema additions, first-principles MSV estimates
- `.geo/build_keyword_sheet.py` — Python builder (works once SA quota issue is resolved or via OAuth)
- DataForSEO MCP **pre-staged** in `~/.claude/settings.json` (skill, agent, field config, npm package cached)
- 4 of 8 the operator decisions captured in the JSON (pets, vs bundle, phone, DataForSEO path)

## What you (the operator) need to do next — 5 min

### 1. Activate DataForSEO MCP (~2 min)
Open `~/.claude/settings.json`, find the `dataforseo` block:

```json
"dataforseo": {
  "command": "npx",
  "args": ["-y", "dataforseo-mcp-server"],
  "env": {
    "DATAFORSEO_USERNAME": "REPLACE_WITH_YOUR_DATAFORSEO_USERNAME",
    "DATAFORSEO_PASSWORD": "REPLACE_WITH_YOUR_DATAFORSEO_API_PASSWORD",
    ...
  }
}
```

Replace the two REPLACE_* values with your real DataForSEO credentials:
- Sign up if you haven't: https://app.dataforseo.com/register (free $1 trial credit — enough to run all 91 keywords)
- Get them from: https://app.dataforseo.com → Sign in → API Access
- `DATAFORSEO_USERNAME` is your account email
- `DATAFORSEO_PASSWORD` is your API password (NOT the dashboard login password — they're separate)

Then **restart Claude Code** (Cmd+Q, reopen) so the MCP loads.

### 2. Upload CSV to Drive (~1 min — optional but recommended)
- Drag `/Users/<owner>/staylio-london/.geo/keyword_candidates_05jun.csv` to https://drive.google.com
- Right-click → Open with → Google Sheets (auto-imports)
- File → Share → add `claude-sheets@cogent-tide-492600-r6.iam.gserviceaccount.com` as Editor
- Paste the sheet ID into `~/staylio-london/.geo/sheet_id.txt` (one line)

### 3. Decide the remaining 4 (still pending — see project memory)
- Decision 5: branded-term targeting for C79 (native london serviced apartments)?
- Decision 6: confirmed bundle vs split (Sonder + Native standalone, rest folded into /vs/london-serviced-apartments) → the operator answered "go with recommended" ✅ already applied
- Decision 7: /locations expand vs new /guides parallel?
- Decision 8: Canary Wharf (no inventory) — keep as honest-framing or skip?

### 4. Next session prompt
Open a new Claude Code session in `~/staylio-london/` with:

```
Continue Staylio GEO Phase 1.
- DataForSEO MCP is now installed.
- Read ~/.claude/projects/-Users-<owner>/memory/project_staylio_geo_phase1_keywords_05jun.md and ~/staylio-london/.geo/NEXT_STEPS.md.
- Re-run 3 seo-dataforseo agents to populate real MSV / competition / SERP top 3 / AI Overview / PAA columns for all 91 keywords in keyword_candidates_05jun.json.
- Filter to 30-50 viable keywords (≥100 real MSV, intent match, no entrenched top-3 with 1k+ backlinks per page).
- Update sheet_id.txt if I've uploaded to Drive — share the live sheet with claude-sheets@cogent-tide-492600-r6.iam.gserviceaccount.com so future sessions can write directly.
- Then ask me about decisions 5, 7, 8.
```

## Pet policy follow-up (operational)
operations confirmed: select Staylio units accept dogs with £40 surcharge per stay. Before B60 + B61 pages can ship, need the per-unit list. Suggest asking Arianne to compile from BOOM listing notes / property briefs.

## Phase 2 readiness checklist
Phase 2 (content production) can start when ALL of these are green:
- [ ] DataForSEO MSV in for all 91 candidates → top 30-50 picked
- [ ] the operator's decisions 5, 7, 8 made
- [ ] Pet-policy per-unit list received (B60/B61 only)
- [ ] Site code: existing /apartments-vs-hotels confirmed as expand-target for B54
- [ ] Phone number confirmed for production (currently +44 7375 621453 per the 5 Jun rule — but this conflicts with brand-identity-locked 7304 353 640 from 22 May; surfacing again here in case it changed)

## Files
- `keyword_candidates_05jun.csv` — Sheets-ready (Drive drag-drop import)
- `keyword_candidates_05jun.tsv` — clipboard paste-ready (Cmd+A in TextEdit → Cmd+C → paste into Sheets)
- `keyword_candidates_05jun.json` — machine-readable for downstream agent runs
- `keyword_candidates_05jun.md` — human-readable pre-DataForSEO candidate list (no content angles)
- `dataforseo_bucket_a.json` — empty schema from blocked first agent run; re-fill in place once MCP is live
- `build_keyword_sheet.py` — Python builder for Sheets API (currently blocked by SA quota)
- `NEXT_STEPS.md` — this file
