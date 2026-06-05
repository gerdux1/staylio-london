#!/usr/bin/env node
// IndexNow client — submits sitemap URLs to Bing, Yandex, Seznam, and Naver in one call.
// Triggered as `postbuild` script in package.json so every Vercel deploy notifies AI search engines instantly.
// Docs: https://www.indexnow.org/documentation
//
// Why this matters for GEO:
// - Microsoft Bing → feeds Copilot (Microsoft's AI search) + Duck Duck Go
// - Yandex feeds Yandex Search + Alice
// - Without IndexNow, new pages take 1-4 weeks to be indexed by these engines.
//   With IndexNow, indexing happens within minutes.
// - Google does NOT support IndexNow — for Google we rely on the sitemap + organic crawl.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const KEY = "3a8f9b2c5e4d7a1f6b8c2d9e4a7f1c3b";
const HOST = "staylio.london";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Skip when not in a production build (avoids spamming IndexNow on local `next dev`).
if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
  console.log(`[indexnow] skipping — VERCEL_ENV=${process.env.VERCEL_ENV}`);
  process.exit(0);
}
if (!process.env.VERCEL_ENV && process.env.NODE_ENV !== "production") {
  console.log("[indexnow] skipping — not a production build");
  process.exit(0);
}

// Read the canonical URL list from the sitemap module so we don't drift.
// The Next.js build output writes the rendered sitemap.xml into .next/server/app/sitemap.xml/route.js
// but the simplest path is to import the source sitemap function directly.
async function collectUrls() {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const sitemapTsPath = join(__dirname, "..", "src", "app", "sitemap.ts");
  const src = readFileSync(sitemapTsPath, "utf8");
  // Quick extraction of base URL + pull listing slugs + location slugs from listings.ts
  const baseMatch = src.match(/const base = "(https?:\/\/[^"]+)"/);
  const base = baseMatch ? baseMatch[1] : `https://${HOST}`;
  const listingsPath = join(__dirname, "..", "src", "lib", "listings.ts");
  const listingsSrc = readFileSync(listingsPath, "utf8");

  const slugs = (regex) =>
    Array.from(listingsSrc.matchAll(regex)).map((m) => m[1]);
  const listingSlugs = slugs(/slug:\s*"([^"]+)"[^}]*?title:/g);
  const locationSlugs = slugs(/slug:\s*"([^"]+)"[^}]*?label:[^}]*?propertyCountApprox/g);

  // Hardcoded static routes — keep in sync with src/app/sitemap.ts staticPages
  const statics = [
    "",
    "/apartments",
    "/locations",
    "/corporate",
    "/apartments-vs-hotels",
    "/faq",
    "/about",
    "/contact",
  ];

  const urls = [
    ...statics.map((p) => `${base}${p}`),
    ...locationSlugs.map((s) => `${base}/locations/${s}`),
    ...listingSlugs.map((s) => `${base}/apartments/${s}`),
  ];

  return Array.from(new Set(urls));
}

async function notify(urls) {
  // Single endpoint pings the whole network — Bing forwards to Yandex/Seznam/Naver.
  // Spec: https://api.indexnow.org/IndexNow accepts up to 10,000 URLs per request.
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };
  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  return res;
}

try {
  const urls = await collectUrls();
  console.log(`[indexnow] submitting ${urls.length} URLs for ${HOST}`);
  const res = await notify(urls);
  if (res.ok || res.status === 202) {
    console.log(`[indexnow] ✓ submitted (${res.status})`);
  } else {
    const text = await res.text().catch(() => "(no body)");
    console.warn(`[indexnow] ⚠ unexpected ${res.status}: ${text.substring(0, 200)}`);
  }
} catch (err) {
  console.warn(`[indexnow] ⚠ failed: ${err.message}`);
  // Don't fail the build — IndexNow is fire-and-forget
}
