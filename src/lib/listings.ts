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

// Hero / location imagery sourced from Unsplash (free for commercial use under Unsplash licence).
// Swap for owned photography once exports from current BOOM/Boostly install land.
const IMG = {
  canaryWharfHero: "https://images.unsplash.com/photo-1572297870735-d04ec150e0d2?w=1600&q=80",
  kensingtonHero: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80",
  cityHero: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
  livingRoom1: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
  livingRoom2: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
  livingRoom3: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  bedroom1: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
  bedroom2: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80",
  bedroom3: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
  kitchen1: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
  kitchen2: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80",
};

export const LOCATIONS: { slug: Area; label: string; description: string; latitude: number; longitude: number; heroImage: string }[] = [
  {
    slug: "canary-wharf",
    label: "Canary Wharf",
    description:
      "London's modern business district. Steps from Jubilee line stations, surrounded by waterside restaurants and corporate headquarters. Ideal for finance professionals and project teams.",
    latitude: 51.5054,
    longitude: -0.0235,
    heroImage: IMG.canaryWharfHero,
  },
  {
    slug: "kensington",
    label: "Kensington",
    description:
      "One of London's most prestigious residential neighbourhoods. Close to museums, parks, international schools, and embassy row. Perfect for families and leisure visitors.",
    latitude: 51.4988,
    longitude: -0.1749,
    heroImage: IMG.kensingtonHero,
  },
  {
    slug: "city-of-london",
    label: "City of London",
    description:
      "The historic financial heart of London. Walk to Bank, Monument, and St Paul's. Weekend access to Borough Market, the Barbican, and the South Bank.",
    latitude: 51.5155,
    longitude: -0.0922,
    heroImage: IMG.cityHero,
  },
];

// Placeholder listings — replace with BOOM API pull when MCP wired up.
// Structure mirrors what BOOM returns so the swap is mechanical.
export const LISTINGS: Listing[] = [
  // ─── Canary Wharf ───
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
    heroImage: IMG.livingRoom1,
    gallery: [IMG.bedroom1, IMG.kitchen1, IMG.livingRoom1],
    latitude: 51.5042,
    longitude: -0.0186,
    postcode: "E14 5",
  },
  {
    slug: "canary-wharf-two-bed-skyline",
    title: "Canary Wharf Two-Bed Skyline",
    area: "canary-wharf",
    areaLabel: "Canary Wharf",
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    sizeSqm: 74,
    fromGbpPerNight: 245,
    shortDescription: "Corner two-bed on a high floor with panoramic City and river views.",
    longDescription:
      "Light-filled corner unit with floor-to-ceiling glass on two sides. Two double bedrooms, one ensuite. Open-plan living/dining/kitchen with breakfast bar. Concierge in the building, gym access included. Two minutes to Jubilee + Elizabeth lines. Ideal for finance project teams and short-relocations.",
    amenities: ["Wi-Fi", "Smart TV", "Fitted kitchen", "Washer-dryer", "Smart lock", "Concierge", "Gym access", "Workspace", "All bills included"],
    heroImage: IMG.livingRoom2,
    gallery: [IMG.livingRoom2, IMG.bedroom2, IMG.kitchen2],
    latitude: 51.5054,
    longitude: -0.0235,
    postcode: "E14 5",
  },

  // ─── Kensington ───
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
    heroImage: IMG.livingRoom3,
    gallery: [IMG.livingRoom3, IMG.bedroom3, IMG.kitchen2],
    latitude: 51.4955,
    longitude: -0.1738,
    postcode: "SW7 2",
  },
  {
    slug: "kensington-one-bed-mews",
    title: "Kensington One-Bed Mews",
    area: "kensington",
    areaLabel: "Kensington",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    sizeSqm: 56,
    fromGbpPerNight: 195,
    shortDescription: "Quiet cobbled-mews one-bed minutes from Kensington High Street.",
    longDescription:
      "Tucked-away mews conversion on a cobbled street, fully renovated in 2024. Double bedroom, marble bathroom, open-plan living with bay window. Easy walk to Holland Park, the Design Museum, and Kensington High Street. Ideal for leisure stays and couples on extended trips.",
    amenities: ["Wi-Fi", "Smart TV", "Fitted kitchen", "Washer-dryer", "Smart lock", "Workspace", "Linen + towels", "All bills included"],
    heroImage: IMG.bedroom2,
    gallery: [IMG.bedroom2, IMG.livingRoom1, IMG.kitchen1],
    latitude: 51.5009,
    longitude: -0.1925,
    postcode: "W8 6",
  },

  // ─── City of London ───
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
    heroImage: IMG.livingRoom1,
    gallery: [IMG.livingRoom1, IMG.bedroom1, IMG.kitchen2],
    latitude: 51.5142,
    longitude: -0.0925,
    postcode: "EC2V 6",
  },
  {
    slug: "city-of-london-studio-shoreditch-edge",
    title: "City of London Studio Shoreditch-Edge",
    area: "city-of-london",
    areaLabel: "City of London",
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    sizeSqm: 36,
    fromGbpPerNight: 135,
    shortDescription: "Compact studio on the Shoreditch border. Bank in 8 minutes, Old Street in 4.",
    longDescription:
      "Smart studio on the edge of Shoreditch — design-led interior, full-size bed, fitted kitchenette, walk-in rain shower. On the doorstep of Spitalfields Market, Brick Lane, and Liverpool Street. Suits solo travellers and short-stay creatives.",
    amenities: ["Wi-Fi", "Smart TV", "Kitchenette", "Smart lock", "Workspace", "Linen + towels", "All bills included"],
    heroImage: IMG.bedroom3,
    gallery: [IMG.bedroom3, IMG.livingRoom2, IMG.kitchen1],
    latitude: 51.5198,
    longitude: -0.0780,
    postcode: "EC1V 9",
  },
  {
    slug: "city-of-london-three-bed-family",
    title: "City of London Three-Bed Family",
    area: "city-of-london",
    areaLabel: "City of London",
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    sizeSqm: 96,
    fromGbpPerNight: 325,
    shortDescription: "Three-bed family flat in a converted period building. Quiet street, central location.",
    longDescription:
      "Spacious three-bed converted from a former counting-house off Cheapside. Master with ensuite, two further doubles, family bathroom, large open-plan living. Quiet despite being central — single-pane windows replaced with acoustic double-glazing in 2024. Travel cot, high chair, and stair gates on request.",
    amenities: ["Wi-Fi", "Smart TV", "Fitted kitchen", "Washer-dryer", "Smart lock", "Family-friendly", "Workspace", "Linen + towels", "All bills included"],
    heroImage: IMG.livingRoom2,
    gallery: [IMG.livingRoom2, IMG.bedroom2, IMG.kitchen2],
    latitude: 51.5155,
    longitude: -0.0922,
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
