#!/usr/bin/env python3
"""Generate hero images for Staylio + NN via Google Imagen 4 (paid AI Studio).

Resumable. ~36 images x ~$0.04 (imagen-4 standard) = ~$1.44, or
            ~36 images x ~$0.02 (imagen-4 fast)   = ~$0.72.

Usage:
  python3 scripts/generate-location-heroes-imagen.py [--model fast|standard|ultra] [--only slug1,slug2]
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

# Reuse the same BRIEFS list from the OpenAI generator
sys.path.insert(0, str(Path(__file__).parent))
from importlib import util as _util
_spec = _util.spec_from_file_location("_oai_gen", Path(__file__).parent / "generate-location-heroes.py")
_oai = _util.module_from_spec(_spec)
_spec.loader.exec_module(_oai)
BRIEFS = _oai.BRIEFS
OUT_DIR = _oai.OUT_DIR

MODEL_MAP = {
    "fast":     "imagen-4.0-fast-generate-001",
    "standard": "imagen-4.0-generate-001",
    "ultra":    "imagen-4.0-ultra-generate-001",
}


def generate(prompt: str, out_path: Path, model: str) -> dict:
    url = (
        f"https://generativelanguage.googleapis.com/v1beta/models/{model}:predict"
        f"?key={os.environ['GEMINI_API_TOKEN']}"
    )
    payload = json.dumps({
        "instances": [{"prompt": prompt}],
        "parameters": {
            "sampleCount": 1,
            "aspectRatio": "16:9",
            "personGeneration": "dont_allow",
        },
    }).encode()
    req = urllib.request.Request(
        url, data=payload, headers={"Content-Type": "application/json"}, method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=180) as resp:
            body = json.loads(resp.read())
    except urllib.error.HTTPError as e:
        return {"error": f"HTTP {e.code}", "body": e.read().decode("utf-8", errors="replace")}
    preds = body.get("predictions", [])
    if not preds or "bytesBase64Encoded" not in preds[0]:
        return {"error": "no_image", "body": json.dumps(body)[:400]}
    img_bytes = base64.b64decode(preds[0]["bytesBase64Encoded"])
    out_path.write_bytes(img_bytes)
    return {"ok": True, "bytes": len(img_bytes), "mime": preds[0].get("mimeType", "image/png")}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--model", default="standard", choices=list(MODEL_MAP))
    ap.add_argument("--only", help="comma-separated repo:slug filter")
    ap.add_argument("--candidates", type=int, default=4)
    args = ap.parse_args()
    # Prefer the paid business-project key (image gen) over the personal grounded-search key
    if "GEMINI_IMAGE_API_TOKEN" in os.environ:
        os.environ["GEMINI_API_TOKEN"] = os.environ["GEMINI_IMAGE_API_TOKEN"]
    if "GEMINI_API_TOKEN" not in os.environ:
        print("GEMINI_IMAGE_API_TOKEN (or GEMINI_API_TOKEN) not set. source ~/shared/.env first.",
              file=sys.stderr)
        return 2
    model_id = MODEL_MAP[args.model]
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
            print(f"[{key} c{n}] {model_id}...", flush=True)
            t0 = time.time()
            # Retry transient capacity errors with backoff
            for attempt in range(5):
                result = generate(brief["prompt"], out, model_id)
                if "error" not in result:
                    break
                body = result.get("body", "")
                if "RESOURCE_EXHAUSTED" in body or "temporarily out of capacity" in body or "Resource exhausted" in body:
                    delay = 5 * (2 ** attempt)
                    print(f"  retry {attempt+1}/5 after {delay}s (capacity)", flush=True)
                    time.sleep(delay)
                    continue
                break
            time.sleep(2)  # gentle pacing between successful calls
            dt = time.time() - t0
            meta.write_text(json.dumps({
                "prompt": brief["prompt"],
                "model": model_id,
                "result": result,
                "duration_s": round(dt, 1),
            }, indent=2))
            if "error" in result:
                err_body = result.get("body", "")
                print(f"  ERROR {dt:.1f}s {result['error']} :: {err_body[:200]}", flush=True)
                if "FreeTier" in err_body or "Imagen" in err_body and "paid" in err_body:
                    print("  ↪ Quota/billing — exiting.", flush=True)
                    return 1
            else:
                ok += 1
                print(f"  OK {result['bytes']/1024:.0f}KB in {dt:.1f}s", flush=True)
    print(f"\nDone. {ok}/{total} generated, {skipped} skipped.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
