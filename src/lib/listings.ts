// Listing data layer. Initially uses local JSON; later swaps to BOOM API.
// BOOM MCP is at ~/boom-mcp (Python). For now, hard-typed listings mirror BOOM's shape.

export type Area = "canary-wharf" | "kensington" | "city-of-london";

export type Listing = {
  slug: string;
  title: string;
  area: Area;
  areaLabel: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  sizeSqm: number;
  fromGbpPerNight: number;
  shortDescription: string;
  longDescription: string;
  amenities: string[];
  heroImage: string;
  gallery: string[];
  latitude?: number;
  longitude?: number;
  postcode?: string;
  // BOOM IDs to wire up later
  boomListingId?: string;
};

export const LOCATIONS: { slug: Area; label: string; description: string; latitude: number; longitude: number }[] = [
  {
    slug: "canary-wharf",
    label: "Canary Wharf",
    description:
      "London's modern business district. Steps from Jubilee line stations, surrounded by waterside restaurants and corporate headquarters. Ideal for finance professionals and project teams.",
    latitude: 51.5054,
    longitude: -0.0235,
  },
  {
    slug: "kensington",
    label: "Kensington",
    description:
      "One of London's most prestigious residential neighbourhoods. Close to museums, parks, international schools, and embassy row. Perfect for families and leisure visitors.",
    latitude: 51.4988,
    longitude: -0.1749,
  },
  {
    slug: "city-of-london",
    label: "City of London",
    description:
      "The historic financial heart of London. Walk to Bank, Monument, and St Paul's. Weekend access to Borough Market, the Barbican, and the South Bank.",
    latitude: 51.5155,
    longitude: -0.0922,
  },
];

// Placeholder listings — replace with BOOM API pull when MCP wired up.
// Structure mirrors what BOOM returns so the swap is mechanical.
export const LISTINGS: Listing[] = [
  {
    slug: "canary-wharf-one-bed-riverside",
    title: "Canary Wharf One-Bed Riverside",
    area: "canary-wharf",
    areaLabel: "Canary Wharf",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    sizeSqm: 52,
    fromGbpPerNight: 165,
    shortDescription: "River-facing one-bed with skyline views. Walk to Jubilee line in 4 minutes.",
    longDescription:
      "Floor-to-ceiling windows looking onto the Thames. Fully equipped open-plan kitchen with induction hob, full-size fridge, dishwasher, and Nespresso. Smart TV, fast Wi-Fi, in-unit washer-dryer. King bed with hotel-grade linens. Walking distance to Canary Wharf Jubilee, Crossrail, and DLR stations.",
    amenities: ["Wi-Fi", "Smart TV", "Fitted kitchen", "Washer-dryer", "Smart lock", "Workspace", "Linen + towels", "All bills included"],
    heroImage: "/images/placeholder-canary-wharf.jpg",
    gallery: [],
    latitude: 51.5042,
    longitude: -0.0186,
    postcode: "E14 5",
  },
  {
    slug: "kensington-two-bed-garden",
    title: "Kensington Two-Bed Garden",
    area: "kensington",
    areaLabel: "Kensington",
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    sizeSqm: 78,
    fromGbpPerNight: 235,
    shortDescription: "Garden-flat two-bed near Hyde Park and the Natural History Museum.",
    longDescription:
      "Period conversion with original cornicing, modernised throughout. Two double bedrooms (one with ensuite), south-facing private patio, fitted kitchen with breakfast bar. Five minutes' walk to South Kensington station, ten minutes to Hyde Park. Family-friendly: travel cot and high chair on request.",
    amenities: ["Wi-Fi", "Smart TV", "Fitted kitchen", "Washer-dryer", "Smart lock", "Private patio", "Workspace", "Family-friendly", "All bills included"],
    heroImage: "/images/placeholder-kensington.jpg",
    gallery: [],
    latitude: 51.4955,
    longitude: -0.1738,
    postcode: "SW7 2",
  },
  {
    slug: "city-of-london-one-bed-historic",
    title: "City of London One-Bed Historic",
    area: "city-of-london",
    areaLabel: "City of London",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    sizeSqm: 48,
    fromGbpPerNight: 175,
    shortDescription: "Steps from Bank and St Paul's. Quiet street, modern interior, historic building.",
    longDescription:
      "Refurbished one-bed in a converted warehouse off Cheapside. Exposed brick feature wall, fitted kitchen, separate workspace with monitor. Two minutes to Bank, five to St Paul's. Ideal for short business trips and weekend culture stays.",
    amenities: ["Wi-Fi", "Smart TV", "Fitted kitchen", "Washer-dryer", "Smart lock", "Workspace + monitor", "Linen + towels", "All bills included"],
    heroImage: "/images/placeholder-city-of-london.jpg",
    gallery: [],
    latitude: 51.5142,
    longitude: -0.0925,
    postcode: "EC2V 6",
  },
];

export function listingsByArea(area: Area): Listing[] {
  return LISTINGS.filter((l) => l.area === area);
}

export function getListing(slug: string): Listing | undefined {
  return LISTINGS.find((l) => l.slug === slug);
}

export function getLocation(slug: Area) {
  return LOCATIONS.find((l) => l.slug === slug);
}
