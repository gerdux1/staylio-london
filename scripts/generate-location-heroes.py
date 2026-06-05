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
            "A real Marylebone London townhouse facade in golden-hour late-afternoon sunlight. "
            "Wisteria vines drape over the white stucco wall, traditional black iron railings, "
            "white sash windows in proper Georgian proportions, ornate door surround. "
            "Quiet residential side street, not the tourist high street. Long warm shadows. "
            "Reference real architecture around Devonshire Street, Marylebone Lane, Wimpole Mews."
            + STYLE_COMMON
        ),
    },
    {
        "repo": "staylio",
        "slug": "old-street-shoreditch",
        "prompt": (
            "A real Shoreditch London converted-warehouse loft interior at blue hour. "
            "Authentic exposed dark-red brick wall, large industrial black steel-framed Crittall windows "
            "looking out onto an urban dusk cityscape with soft amber street lights in the distance. "
            "Moody but warm interior glow from a single brass desk lamp, polished concrete floor, "
            "minimal styling. Reference real warehouses like the Tea Building or Boundary Estate." + STYLE_COMMON
        ),
    },
    {
        "repo": "staylio",
        "slug": "kensington-hammersmith",
        "prompt": (
            "A real Kensington London white-stucco Italianate terrace facade. "
            "Polished black iron railings, columned porticos with painted black-and-white detailing, "
            "large planters with topiary at the front door, mature plane tree branches in the foreground "
            "filtering soft morning light into dappled patches on the pavement. "
            "Embassy-quiet residential street, no traffic, no shop fronts. "
            "Reference real streets like Cornwall Gardens or Stanhope Gardens — NOT tourist Knightsbridge." + STYLE_COMMON
        ),
    },
    {
        "repo": "staylio",
        "slug": "fitzrovia-mayfair",
        "prompt": (
            "Close-mid shot of a real Fitzrovia or Mayfair London Georgian facade detail. "
            "A wrought-iron lantern hangs beside an immaculately painted dark-green panelled door with "
            "polished brass knocker and door furniture; warm-stucco or red-brick wall around it, sash "
            "windows visible above. Late-afternoon golden raking light from the side casting long shadows "
            "across the brickwork. Reserved, refined, not flashy. "
            "Reference real Charlotte Street, Fitzroy Square or South Audley Street architecture." + STYLE_COMMON
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
            "A real Borough London cobbled side-street scene at early morning. "
            "Wet cobblestones glisten after rain, a Victorian red-brick industrial chimney suggestive of the "
            "Bankside / Tate Modern silhouette in the misty background, narrow Victorian terraced shopfronts "
            "with closed shutters, soft golden-pink sunrise light catching the brick. Empty of people, "
            "foodie/cultural early-morning mood. Reference real Bedale Street, Stoney Street or Park Street "
            "around Borough Market." + STYLE_COMMON
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
            "A real Shoreditch London converted-warehouse loft interior at blue hour, warm and inviting. "
            "Authentic exposed dark-red brick interior wall, large industrial black steel-framed Crittall "
            "windows. Warm amber interior glow from a brass floor lamp, soft fairy lights strung casually "
            "along one wall, a vintage rug, a single open book on a side table, a steaming mug. "
            "Inviting home-away-from-home feel." + STYLE_NN
        ),
    },
    {
        "repo": "nournest",
        "slug": "borough-pimlico",
        "prompt": (
            "A real Borough or Pimlico London residential terraced house front-door scene. "
            "A glossy sage-green panelled door with polished brass furniture and a brass house number on a "
            "brick or pale-stucco facade. A row of terracotta herb planters on the step (rosemary, thyme, "
            "basil). Warm soft golden morning light from the side. Welcoming home-away-from-home mood. "
            "Reference real Pimlico Regency terraces like Lupus Street or Sussex Street." + STYLE_NN
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
