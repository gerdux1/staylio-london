#!/usr/bin/env python3
"""Generate hero images for Staylio + NN location pages via OpenAI gpt-image-1.

Resumable: re-running skips slugs that already have all 4 candidates.
Budget: ~36 images x ~$0.04 (medium 1536x1024) = ~$1.44.

Usage:
  source ~/shared/.env && export OPENAI_API_KEY
  python3 scripts/generate-location-heroes.py [--quality medium|high|low] [--only slug1,slug2]
"""
from __future__ import annotations

import argparse
import base64
import json
import os
import sys
import time
import urllib.request
import urllib.error
from pathlib import Path

OUT_DIR = Path("/tmp/hero-candidates")
ENDPOINT = "https://api.openai.com/v1/images/generations"
MODEL = "gpt-image-1"
SIZE = "1536x1024"

STYLE_COMMON = (
    " Photoreal editorial photography, slight film-grain finish, magazine-quality boutique aesthetic, "
    "no people in frame, no faces, no hands, no visible signage, no logos, no readable text anywhere, "
    "no fictional buildings — must match real London architecture for the named area, "
    "16:9 cinematic landscape framing, natural lens, no fish-eye distortion."
)

STYLE_NN = (
    " Warmer, cosier home-away-from-home feel than typical editorial. Cream, sage-green, tan and "
    "soft lime-yellow palette emphasis. Warm interior glow if windows visible. "
    + STYLE_COMMON
)

BRIEFS = [
    {
        "repo": "staylio",
        "slug": "regents-park-marylebone",
        "prompt": (
            "The real Regent's Park boating lake in central London at golden-hour late afternoon. "
            "A small classic wooden rowing boat moored empty at the lake's edge, reflections of mature "
            "plane trees and weeping willows on the calm water, a pair of swans drifting in the middle "
            "distance. Through the trees on the far side, Regency-era white-stucco terraces are "
            "softly glimpsed (the iconic Nash terraces of Regent's Park). Soft warm late-afternoon "
            "golden light, instantly recognisable London park scene. " + STYLE_COMMON
        ),
    },
    {
        "repo": "staylio",
        "slug": "old-street-shoreditch",
        "prompt": (
            "A real Shoreditch / Spitalfields London side-street at golden-hour dusk. "
            "Tall Victorian red-brick warehouse walls framing the view on both sides, with arched windows "
            "above, cast-iron Victorian street lamps casting amber pools onto wet cobbles. "
            "At the end of the street, the iconic tall red-brick chimney of the Old Truman Brewery "
            "rises clearly and prominently against a warm golden sky — the recognisable Shoreditch silhouette. "
            "A glimpse of modern City of London glass skyscrapers beyond the chimney in the misty far distance. "
            "Layered foreground / mid / background depth. " + STYLE_COMMON
        ),
    },
    {
        "repo": "staylio",
        "slug": "kensington-hammersmith",
        "prompt": (
            "The real Royal Albert Hall in Kensington London at golden-hour late afternoon. "
            "The iconic Victorian terracotta-red-brick round concert hall with its glass-and-iron dome "
            "catching warm golden light, recognisable cultural landmark, soft pink-gold sky behind. "
            "In the foreground, mature plane trees softly frame the view and the green grass of Hyde "
            "Park / Kensington Gardens spreads out softly. The gilded spire of the Albert Memorial just "
            "visible at the left edge of the frame catching a glint of sun. " + STYLE_COMMON
        ),
    },
    {
        "repo": "staylio",
        "slug": "fitzrovia-mayfair",
        "prompt": (
            "A real Fitzrovia London Georgian side-street at golden-hour dusk. "
            "Red-brick and warm-stucco Georgian townhouses with sash windows and iron railings line both "
            "sides of a quiet street. At the end of the street, the iconic BT Tower (Tottenham Court "
            "Tower) rises clearly against the warm golden sky — the recognisable cylindrical concrete-and-glass "
            "communications tower with a soft glow of its restaurant ring near the top. Reserved boutique "
            "atmosphere, layered foreground / mid / background. Reference real Fitzrovia streets like "
            "Fitzroy Square, Whitfield Street or Cleveland Street." + STYLE_COMMON
        ),
    },
    {
        "repo": "staylio",
        "slug": "barbican-farringdon",
        "prompt": (
            "A real Barbican Estate scene in London at dawn. "
            "Brutalist board-marked concrete arches and vertical pilotis softened in the foreground by lush "
            "green water-garden planting and a still reflecting pool. Dawn light catches the concrete with a "
            "warm peach glow against a soft pale sky. Architectural confidence, geometric repetition, calm. "
            "Must be a recognisable nod to the real Barbican estate (Chamberlin Powell & Bon, 1965–76), "
            "not generic fictional brutalism." + STYLE_COMMON
        ),
    },
    {
        "repo": "staylio",
        "slug": "borough-pimlico",
        "prompt": (
            "The real Borough Market in London at very early morning before opening — interior atmosphere. "
            "Victorian wrought-iron market hall structure with an arched glass roof above, brick walls beyond, "
            "polished green-painted iron columns, hanging brass pendant lamps glowing softly, neatly empty "
            "wooden stalls with crates and produce boxes (no labels or visible writing). "
            "Soft early-morning sunlight slanting through the glass roof and brick archways, slight mist, "
            "a warm golden glow. A distant glimpse of the Shard skyscraper silhouetted in the misty distance "
            "through one archway opening at the far end. Layered foreground / mid / background, "
            "foodie / cultural mood. Reference the real Borough Market Victorian architecture." + STYLE_COMMON
        ),
    },
    {
        "repo": "staylio",
        "slug": "little-venice-maida-vale",
        "prompt": (
            "A real Little Venice / Regent's Canal scene in London. "
            "A traditional painted canal narrowboat (deep green or maroon livery, no lettering or names) "
            "moored under a willow tree, pastel-painted Regency mansion-block facades softly reflected in the "
            "calm canal water, gentle late-afternoon golden light, hidden-London neighbourhood feel. "
            "Reference real Browning's Pool / Blomfield Road in Little Venice." + STYLE_COMMON
        ),
    },
    {
        "repo": "nournest",
        "slug": "old-street-shoreditch",
        "prompt": (
            "A real Shoreditch / Spitalfields London side-street at golden-hour dusk, warm welcoming "
            "home-away-from-home feel. Victorian red-brick walls, cast-iron Victorian street lamps "
            "glowing amber on wet cobbles, soft strings of warm fairy lights crisscrossing overhead "
            "between buildings. At the end of the street, the iconic tall red-brick chimney of the "
            "Old Truman Brewery rises clearly against a warm pink-gold sky — recognisable Shoreditch "
            "silhouette. The warm window glow of a curated home-style café with potted plants and small "
            "ceramics on the sill (no readable signage). A vintage bicycle leaning against an iron post. "
            "Sage-green / cream / tan / soft-amber palette." + STYLE_NN
        ),
    },
    {
        "repo": "nournest",
        "slug": "borough-pimlico",
        "prompt": (
            "A real Pimlico Regency terraced street in London at twilight. "
            "A row of pastel-coloured Regency stucco facades (soft cream and pale-blue painted houses), "
            "a corner house with a glowing bay window in warm amber lamplight visible from outside, "
            "curtains slightly open hinting at an interior shelf within, wrought-iron railings, brass house "
            "numbers, a low row of terracotta herb planters along the step (rosemary, thyme, basil). "
            "Soft twilight blue sky, gas-lamp style street lamps casting warm pools onto a clean pavement, "
            "slight mist softening the distance. Welcoming home-away-from-home, cosy, layered depth. "
            "Cream / sage-green / tan / lime-yellow palette. "
            "Reference real Pimlico Regency terraces like Lupus Street, Sussex Street or Warwick Square." + STYLE_NN
        ),
    },
]

CANDIDATES_PER_SLUG = 4


def generate(prompt: str, out_path: Path, quality: str) -> dict:
    payload = json.dumps({
        "model": MODEL,
        "prompt": prompt,
        "n": 1,
        "size": SIZE,
        "quality": quality,
    }).encode()
    req = urllib.request.Request(
        ENDPOINT,
        data=payload,
        headers={
            "Authorization": f"Bearer {os.environ['OPENAI_API_KEY']}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=180) as resp:
            body = json.loads(resp.read())
    except urllib.error.HTTPError as e:
        err_body = e.read().decode("utf-8", errors="replace")
        return {"error": f"HTTP {e.code}", "body": err_body}
    if "data" not in body or not body["data"] or "b64_json" not in body["data"][0]:
        return {"error": "no_image", "body": json.dumps(body)[:400]}
    img_bytes = base64.b64decode(body["data"][0]["b64_json"])
    out_path.write_bytes(img_bytes)
    return {"ok": True, "bytes": len(img_bytes), "usage": body.get("usage")}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--quality", default="medium", choices=["low", "medium", "high", "auto"])
    ap.add_argument("--only", help="comma-separated repo:slug filter, e.g. staylio:regents-park-marylebone")
    ap.add_argument("--candidates", type=int, default=CANDIDATES_PER_SLUG)
    args = ap.parse_args()
    if "OPENAI_API_KEY" not in os.environ:
        print("OPENAI_API_KEY not set. Run: set -a; source ~/shared/.env; set +a", file=sys.stderr)
        return 2
    only = set(args.only.split(",")) if args.only else None
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    total = ok = skipped = 0
    for brief in BRIEFS:
        key = f"{brief['repo']}:{brief['slug']}"
        if only and key not in only:
            continue
        slug_dir = OUT_DIR / brief["repo"] / brief["slug"]
        slug_dir.mkdir(parents=True, exist_ok=True)
        (slug_dir / "_prompt.txt").write_text(brief["prompt"])
        for n in range(1, args.candidates + 1):
            out = slug_dir / f"cand_{n}.png"
            meta = slug_dir / f"cand_{n}.json"
            total += 1
            if out.exists() and out.stat().st_size > 50_000:
                skipped += 1
                continue
            print(f"[{key} c{n}] generating ({args.quality}, {SIZE})...", flush=True)
            t0 = time.time()
            result = generate(brief["prompt"], out, args.quality)
            dt = time.time() - t0
            meta.write_text(json.dumps({
                "prompt": brief["prompt"],
                "model": MODEL,
                "size": SIZE,
                "quality": args.quality,
                "result": result,
                "duration_s": round(dt, 1),
            }, indent=2))
            if "error" in result:
                print(f"  ERROR after {dt:.1f}s: {result['error']} :: {result.get('body','')[:200]}",
                      flush=True)
                if "billing_hard_limit" in result.get("body", ""):
                    print("  ↪ Billing limit hit — exiting so you can top up.", flush=True)
                    return 1
            else:
                ok += 1
                print(f"  OK {result['bytes']/1024:.0f}KB in {dt:.1f}s", flush=True)
    print(f"\nDone. {ok}/{total} generated, {skipped} skipped (already present).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
