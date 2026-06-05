import type { MetadataRoute } from "next";
import { LISTINGS, LOCATIONS } from "@/lib/listings";

// Sitemap is the freshness signal for both classic search (Google, Bing) and
// AI search (their crawlers also pull sitemap.xml). Per-page lastModified +
// images-per-page maximises both crawl budget and multimodal indexability.

const SITE_LAUNCH = new Date("2026-06-02"); // Staylio.london launched on Vercel
const ABOUT_REVIEW = new Date("2026-06-02");
const FAQ_REVIEW = new Date("2026-06-02");
const APARTMENTS_INDEX_REVIEW = new Date("2026-06-02");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://staylio.london";
  const buildTime = new Date(); // listings refresh on every build via BOOM regen script

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}`,                       lastModified: buildTime,        changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/apartments`,            lastModified: APARTMENTS_INDEX_REVIEW, changeFrequency: "daily",   priority: 0.95 },
    { url: `${base}/locations`,             lastModified: SITE_LAUNCH,      changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/corporate`,             lastModified: SITE_LAUNCH,      changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/apartments-vs-hotels`,  lastModified: SITE_LAUNCH,      changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`,                   lastModified: FAQ_REVIEW,       changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/about`,                 lastModified: ABOUT_REVIEW,     changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`,               lastModified: buildTime,        changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/preferred-source`,      lastModified: SITE_LAUNCH,      changeFrequency: "monthly", priority: 0.6 },
  ];

  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: buildTime,
    changeFrequency: "weekly" as const,
    priority: 0.85,
    images: l.heroImage ? [l.heroImage] : undefined,
  }));

  const listingPages: MetadataRoute.Sitemap = LISTINGS.map((l) => ({
    url: `${base}/apartments/${l.slug}`,
    lastModified: buildTime,
    changeFrequency: "daily" as const,
    priority: 0.9,
    images: [l.heroImage, ...l.gallery].filter(Boolean),
  }));

  return [...staticPages, ...locationPages, ...listingPages];
}
