// Listing data layer. Local typed data; will swap to BOOM API (boom-mcp, ~/boom-mcp).
// BOOM syncs to Rentals United under the hood, so pulling from BOOM gives RU coverage automatically.
//
// LOCATIONS canonical list locked in decision_staylio_brochure_voice_14may.md
// Real property concentration (per ~staylio_system.md): Regent's Park & Marylebone biggest.

export type AreaSlug =
  | "regents-park-marylebone"
  | "old-street-shoreditch"
  | "kensington-hammersmith"
  | "fitzrovia-mayfair"
  | "barbican-farringdon"
  | "borough-pimlico"
  | "little-venice-maida-vale";

export type Listing = {
  slug: string;
  title: string;
  area: AreaSlug;
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
  boomListingId?: string;
};

// Unsplash interior + neighbourhood imagery (free under Unsplash licence, hot-linkable).
// Swap for owned photography once exports from BOOM media library land.
const IMG = {
  hero: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=2000&q=80",
  regents: "https://images.unsplash.com/photo-1543226798-9b00f5b53ddf?w=1600&q=80",
  shoreditch: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1600&q=80",
  kensington: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80",
  mayfair: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
  barbican: "https://images.unsplash.com/photo-1520637836862-4d197d17c43a?w=1600&q=80",
  borough: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80",
  littleVenice: "https://images.unsplash.com/photo-1572297870735-d04ec150e0d2?w=1600&q=80",
  livingRoom1: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
  livingRoom2: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
  livingRoom3: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  livingRoom4: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
  bedroom1: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
  bedroom2: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80",
  bedroom3: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
  kitchen1: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
  kitchen2: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80",
};

export type Location = {
  slug: AreaSlug;
  label: string;
  shortLabel: string;
  propertyCountApprox: number;
  description: string;
  whyStayHere: string;
  nearbyHighlights: string[];
  transport: string[];
  latitude: number;
  longitude: number;
  heroImage: string;
};

export const LOCATIONS: Location[] = [
  {
    slug: "regents-park-marylebone",
    label: "Regent's Park & Marylebone",
    shortLabel: "Regent's Park & Marylebone",
    propertyCountApprox: 10,
    description:
      "The heart of Staylio's portfolio — green parkland, Marylebone village, and St John's Wood townhouses. A quiet, leafy base ten minutes from Oxford Circus.",
    whyStayHere:
      "Our biggest concentration of apartments. Wide streets, Georgian terraces, the Park at the end of the road. Suits relocations, longer stays, and families wanting calm with central access.",
    nearbyHighlights: [
      "Regent's Park (5–10 min walk from most apartments)",
      "Marylebone High Street — Daunt Books, La Fromagerie, the Conran Shop",
      "Madame Tussauds and Sherlock Holmes Museum",
      "Lord's Cricket Ground (St John's Wood)",
      "Wallace Collection (free, ten minutes south)",
    ],
    transport: [
      "Marylebone (Bakerloo, Chiltern Rail to Birmingham/Oxford)",
      "Baker Street (Bakerloo, Circle, Hammersmith & City, Jubilee, Metropolitan)",
      "St John's Wood (Jubilee)",
      "Edgware Road (Bakerloo, Circle, District, H&C)",
    ],
    latitude: 51.5234,
    longitude: -0.1660,
    heroImage: IMG.regents,
  },
  {
    slug: "old-street-shoreditch",
    label: "Old Street & Shoreditch",
    shortLabel: "Old Street & Shoreditch",
    propertyCountApprox: 6,
    description:
      "London's creative and tech corridor — Silicon Roundabout, Spitalfields, Brick Lane. Design-led apartments at the seam of finance and east-end street culture.",
    whyStayHere:
      "Walk to your meeting in the City, then bar-hop through Shoreditch the same evening. Suits founders, designers, consultants on short engagements.",
    nearbyHighlights: [
      "Spitalfields Market and Old Spitalfields antiques",
      "Brick Lane (Sunday market, curry mile, vintage)",
      "Boxpark Shoreditch and Box Hall",
      "The Curtain rooftop and Shoreditch House (members only)",
      "Whitechapel Gallery",
    ],
    transport: [
      "Old Street (Northern)",
      "Liverpool Street (Central, Circle, Elizabeth, H&C, Metropolitan, National Rail)",
      "Shoreditch High Street (Overground)",
      "Hoxton (Overground)",
    ],
    latitude: 51.5253,
    longitude: -0.0801,
    heroImage: IMG.shoreditch,
  },
  {
    slug: "kensington-hammersmith",
    label: "Kensington & Hammersmith",
    shortLabel: "Kensington & Hammersmith",
    propertyCountApprox: 5,
    description:
      "Museums, embassies, leafy garden squares — and across the river, modern Hammersmith with quick Heathrow access. Pairs prestige and practicality.",
    whyStayHere:
      "Family relocations, museum-week holidays, executive stays close to the Imperial College / Imperial Health Trust patch. Easy Piccadilly line to Heathrow.",
    nearbyHighlights: [
      "Natural History Museum, V&A, Science Museum (free)",
      "Hyde Park and Kensington Gardens",
      "Holland Park and the Kyoto Garden",
      "Westfield London (Shepherd's Bush)",
      "The Design Museum (Holland Park)",
    ],
    transport: [
      "South Kensington (Circle, District, Piccadilly)",
      "High Street Kensington (Circle, District)",
      "Hammersmith (Circle, District, H&C, Piccadilly)",
      "Direct Piccadilly line to Heathrow",
    ],
    latitude: 51.4988,
    longitude: -0.1749,
    heroImage: IMG.kensington,
  },
  {
    slug: "fitzrovia-mayfair",
    label: "Fitzrovia & Mayfair",
    shortLabel: "Fitzrovia & Mayfair",
    propertyCountApprox: 5,
    description:
      "Charlotte Street restaurants, Mayfair garden squares, Bond Street shopping. London's most prestigious postcodes, walkable to Soho and the West End.",
    whyStayHere:
      "Executive stays, premium leisure trips, theatre weekends. Five minutes from Oxford Circus and the New Bond Street flagship stores.",
    nearbyHighlights: [
      "Bond Street and Mount Street shops",
      "Berkeley Square Gardens",
      "Charlotte Street restaurant row",
      "The Wallace Collection (free)",
      "BFI IMAX and West End theatres",
    ],
    transport: [
      "Bond Street (Central, Jubilee, Elizabeth)",
      "Oxford Circus (Bakerloo, Central, Victoria)",
      "Tottenham Court Road (Central, Northern, Elizabeth)",
      "Green Park (Jubilee, Piccadilly, Victoria)",
    ],
    latitude: 51.5141,
    longitude: -0.1413,
    heroImage: IMG.mayfair,
  },
  {
    slug: "barbican-farringdon",
    label: "Barbican & Farringdon",
    shortLabel: "Barbican & Farringdon",
    propertyCountApprox: 5,
    description:
      "Brutalist architecture, hidden squares, and the new Elizabeth line. Quiet at weekends, central in the week — the sweet spot of City and culture.",
    whyStayHere:
      "Walk to the City for finance and tech meetings, walk to Sadler's Wells and the Barbican for arts. Direct Elizabeth line to Heathrow and Canary Wharf.",
    nearbyHighlights: [
      "The Barbican Centre (concerts, theatre, art-house cinema)",
      "Sadler's Wells",
      "Smithfield Market and Charterhouse Square",
      "St John restaurant and Caravan Exmouth Market",
      "Museum of London (reopening soon at Smithfield)",
    ],
    transport: [
      "Barbican (Circle, H&C, Metropolitan)",
      "Farringdon (Circle, H&C, Metropolitan, Elizabeth, Thameslink)",
      "Direct Elizabeth line to Heathrow + Canary Wharf",
      "Direct Thameslink to Gatwick + Luton",
    ],
    latitude: 51.5208,
    longitude: -0.1010,
    heroImage: IMG.barbican,
  },
  {
    slug: "borough-pimlico",
    label: "Borough & Pimlico",
    shortLabel: "Borough & Pimlico",
    propertyCountApprox: 5,
    description:
      "South Bank food culture and Pimlico's Regency streets. Walk to Tate Modern, the Globe, and Borough Market for breakfast.",
    whyStayHere:
      "Weekend leisure stays, foodie trips, family-friendly walks along the river. Quieter than the West End, ten minutes from Waterloo.",
    nearbyHighlights: [
      "Borough Market (one of London's best food markets)",
      "Tate Modern and the Tate Britain",
      "The Shard and the Globe",
      "Westminster, Lambeth Palace, Vauxhall Pleasure Gardens",
      "Battersea Power Station",
    ],
    transport: [
      "Borough (Northern)",
      "London Bridge (Jubilee, Northern, National Rail)",
      "Pimlico (Victoria)",
      "Vauxhall (Victoria, National Rail)",
    ],
    latitude: 51.4970,
    longitude: -0.1057,
    heroImage: IMG.borough,
  },
  {
    slug: "little-venice-maida-vale",
    label: "Little Venice & Maida Vale",
    shortLabel: "Little Venice & Maida Vale",
    propertyCountApprox: 4,
    description:
      "Canalside cafés, mansion-block flats, the Regent's Canal towpath — London's most underrated residential pocket.",
    whyStayHere:
      "Longer stays where you want a real neighbourhood feel. Walk along the canal to Camden, or two stops on the Bakerloo to Oxford Circus.",
    nearbyHighlights: [
      "Little Venice and Regent's Canal towpath",
      "The Puppet Theatre Barge",
      "Clifton Nurseries (the oldest garden centre in London)",
      "Lord's Cricket Ground (next door)",
      "Walk to Marylebone in 15 minutes",
    ],
    transport: [
      "Warwick Avenue (Bakerloo)",
      "Maida Vale (Bakerloo)",
      "Paddington (Bakerloo, Circle, District, H&C, Elizabeth, Heathrow Express)",
      "Edgware Road (Bakerloo, Circle, District, H&C)",
    ],
    latitude: 51.5236,
    longitude: -0.1827,
    heroImage: IMG.littleVenice,
  },
];

// Representative sample listings — replace with full BOOM API pull when MCP wired up.
// Real Staylio portfolio is ~43 properties; these 9 are illustrative.
export const LISTINGS: Listing[] = [
  // ─── Regent's Park & Marylebone (largest concentration) ───
  {
    slug: "marylebone-one-bed-frampton",
    title: "Marylebone One-Bed (Frampton Street)",
    area: "regents-park-marylebone",
    areaLabel: "Regent's Park & Marylebone",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    sizeSqm: 54,
    fromGbpPerNight: 175,
    shortDescription:
      "Bright one-bed off Edgware Road, ten minutes' walk to Regent's Park and Marylebone Village.",
    longDescription:
      "Mansion-block conversion on Frampton Street, redesigned in 2024. Fitted kitchen with induction hob and dishwasher, in-unit washer-dryer, fast Wi-Fi, smart TV, king bed. Walk to Regent's Park, Marylebone High Street, and Paddington station within ten minutes.",
    amenities: ["Wi-Fi", "Smart TV", "Fitted kitchen", "Washer-dryer", "Smart lock", "Workspace", "Linen + towels", "Fortnightly housekeeping", "All bills included"],
    heroImage: IMG.livingRoom1,
    gallery: [IMG.livingRoom1, IMG.bedroom1, IMG.kitchen1],
    latitude: 51.5234,
    longitude: -0.1660,
    postcode: "NW8 8NQ",
  },
  {
    slug: "regents-park-two-bed-stjohns-wood",
    title: "Regent's Park Two-Bed (St John's Wood)",
    area: "regents-park-marylebone",
    areaLabel: "Regent's Park & Marylebone",
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    sizeSqm: 82,
    fromGbpPerNight: 245,
    shortDescription:
      "Two-bed garden-flat steps from Regent's Park. Family-friendly with travel cot on request.",
    longDescription:
      "Sympathetically converted ground-floor flat with original cornicing and large south-facing windows. Two double bedrooms, two bathrooms, separate dining and lounge. Walk to Regent's Park in five minutes. Lord's Cricket Ground next door. Family-friendly: cot, high chair, and stair gates on request.",
    amenities: ["Wi-Fi", "Smart TV", "Fitted kitchen", "Washer-dryer", "Smart lock", "Family-friendly", "Workspace", "Linen + towels", "Fortnightly housekeeping", "All bills included"],
    heroImage: IMG.livingRoom2,
    gallery: [IMG.livingRoom2, IMG.bedroom2, IMG.kitchen2],
    latitude: 51.5340,
    longitude: -0.1740,
    postcode: "NW8 7",
  },

  // ─── Old Street & Shoreditch ───
  {
    slug: "shoreditch-studio-old-street",
    title: "Shoreditch Studio (Old Street)",
    area: "old-street-shoreditch",
    areaLabel: "Old Street & Shoreditch",
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    sizeSqm: 38,
    fromGbpPerNight: 135,
    shortDescription:
      "Design-led studio four minutes from Old Street. Walk to Spitalfields, ride one stop to the City.",
    longDescription:
      "Smart studio in a converted warehouse with exposed brick and a full-size kitchenette. Double bed, walk-in rain shower, fitted workspace with monitor. Two minutes to Old Street tube, ten to Liverpool Street. Ideal for solo travellers and short-stay creatives.",
    amenities: ["Wi-Fi", "Smart TV", "Kitchenette", "Smart lock", "Workspace + monitor", "Linen + towels", "Fortnightly housekeeping", "All bills included"],
    heroImage: IMG.bedroom3,
    gallery: [IMG.bedroom3, IMG.livingRoom2, IMG.kitchen1],
    latitude: 51.5253,
    longitude: -0.0801,
    postcode: "EC1V 9",
  },
  {
    slug: "shoreditch-one-bed-spitalfields",
    title: "Shoreditch One-Bed (Spitalfields)",
    area: "old-street-shoreditch",
    areaLabel: "Old Street & Shoreditch",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    sizeSqm: 56,
    fromGbpPerNight: 165,
    shortDescription:
      "Newly refurbished one-bed minutes from Spitalfields Market and Brick Lane.",
    longDescription:
      "Open-plan one-bed with full-height windows and a quiet courtyard outlook. Fully fitted kitchen, breakfast bar, separate workspace. King bed with blackout curtains. Walk to Spitalfields, Liverpool Street, and Boxpark Shoreditch.",
    amenities: ["Wi-Fi", "Smart TV", "Fitted kitchen", "Washer-dryer", "Smart lock", "Workspace", "Linen + towels", "Fortnightly housekeeping", "All bills included"],
    heroImage: IMG.livingRoom3,
    gallery: [IMG.livingRoom3, IMG.bedroom2, IMG.kitchen2],
    latitude: 51.5198,
    longitude: -0.0780,
    postcode: "E1 6",
  },

  // ─── Kensington & Hammersmith ───
  {
    slug: "kensington-two-bed-garden",
    title: "Kensington Two-Bed Garden",
    area: "kensington-hammersmith",
    areaLabel: "Kensington & Hammersmith",
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    sizeSqm: 78,
    fromGbpPerNight: 235,
    shortDescription:
      "Garden-flat two-bed near Hyde Park and the Natural History Museum. Family-friendly.",
    longDescription:
      "Period conversion with original cornicing, modernised throughout. Two double bedrooms (one with ensuite), south-facing private patio, fitted kitchen with breakfast bar. Five minutes' walk to South Kensington station, ten to Hyde Park. Travel cot and high chair on request.",
    amenities: ["Wi-Fi", "Smart TV", "Fitted kitchen", "Washer-dryer", "Smart lock", "Private patio", "Family-friendly", "Workspace", "Linen + towels", "Fortnightly housekeeping", "All bills included"],
    heroImage: IMG.livingRoom4,
    gallery: [IMG.livingRoom4, IMG.bedroom3, IMG.kitchen2],
    latitude: 51.4955,
    longitude: -0.1738,
    postcode: "SW7 2",
  },

  // ─── Fitzrovia & Mayfair ───
  {
    slug: "mayfair-one-bed-mount-street",
    title: "Mayfair One-Bed (Mount Street)",
    area: "fitzrovia-mayfair",
    areaLabel: "Fitzrovia & Mayfair",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    sizeSqm: 58,
    fromGbpPerNight: 215,
    shortDescription:
      "Premium one-bed off Mount Street. Walk to Berkeley Square, Bond Street, and Green Park.",
    longDescription:
      "Mayfair conversion with sash windows, polished oak floors, and a marble bathroom. King bed, fitted kitchen, dining area, separate workspace. Steps to Mount Street shops, two minutes from Berkeley Square. Walking distance to Hyde Park and the West End theatres.",
    amenities: ["Wi-Fi", "Smart TV", "Fitted kitchen", "Washer-dryer", "Smart lock", "Workspace", "Concierge in building", "Linen + towels", "Fortnightly housekeeping", "All bills included"],
    heroImage: IMG.bedroom2,
    gallery: [IMG.bedroom2, IMG.livingRoom1, IMG.kitchen1],
    latitude: 51.5099,
    longitude: -0.1481,
    postcode: "W1K 2",
  },

  // ─── Barbican & Farringdon ───
  {
    slug: "barbican-one-bed-charterhouse",
    title: "Barbican One-Bed (Charterhouse Square)",
    area: "barbican-farringdon",
    areaLabel: "Barbican & Farringdon",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    sizeSqm: 52,
    fromGbpPerNight: 175,
    shortDescription:
      "Quiet square one-bed, four minutes to Farringdon Elizabeth line. Direct trains to Heathrow + Canary Wharf.",
    longDescription:
      "Converted period flat on Charterhouse Square. Restored sash windows, marble fireplace, modern kitchen. King bed, deep bath, separate workspace. Walk to the Barbican Centre, Smithfield, and Exmouth Market. Direct Elizabeth line to Heathrow in 30 minutes.",
    amenities: ["Wi-Fi", "Smart TV", "Fitted kitchen", "Washer-dryer", "Smart lock", "Workspace", "Linen + towels", "Fortnightly housekeeping", "All bills included"],
    heroImage: IMG.livingRoom1,
    gallery: [IMG.livingRoom1, IMG.bedroom1, IMG.kitchen2],
    latitude: 51.5208,
    longitude: -0.1010,
    postcode: "EC1M 6",
  },

  // ─── Borough & Pimlico ───
  {
    slug: "borough-one-bed-market",
    title: "Borough One-Bed (Borough Market)",
    area: "borough-pimlico",
    areaLabel: "Borough & Pimlico",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    sizeSqm: 50,
    fromGbpPerNight: 165,
    shortDescription:
      "One-bed steps from Borough Market and the Thames. Walk to London Bridge in three minutes.",
    longDescription:
      "Light-filled one-bed in a converted Victorian warehouse off Borough High Street. Open-plan living, fitted kitchen with full-size appliances, queen bed. Two minutes to Borough Market for breakfast, eight to the Tate Modern. London Bridge station in three minutes.",
    amenities: ["Wi-Fi", "Smart TV", "Fitted kitchen", "Washer-dryer", "Smart lock", "Workspace", "Linen + towels", "Fortnightly housekeeping", "All bills included"],
    heroImage: IMG.livingRoom3,
    gallery: [IMG.livingRoom3, IMG.bedroom3, IMG.kitchen1],
    latitude: 51.5054,
    longitude: -0.0907,
    postcode: "SE1 9",
  },

  // ─── Little Venice & Maida Vale ───
  {
    slug: "little-venice-two-bed-canal",
    title: "Little Venice Two-Bed (Canalside)",
    area: "little-venice-maida-vale",
    areaLabel: "Little Venice & Maida Vale",
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    sizeSqm: 84,
    fromGbpPerNight: 225,
    shortDescription:
      "Two-bed mansion-block flat overlooking the Regent's Canal. Quiet neighbourhood, fifteen minutes to Oxford Circus.",
    longDescription:
      "Top-floor flat in a 1920s mansion block with canal views from the lounge. Two double bedrooms (master with ensuite), large kitchen-diner, separate workspace. Walk to Warwick Avenue tube (Bakerloo) in three minutes, Paddington in eight. Family-friendly with cot and high chair on request.",
    amenities: ["Wi-Fi", "Smart TV", "Fitted kitchen", "Washer-dryer", "Smart lock", "Family-friendly", "Canal-view", "Workspace", "Linen + towels", "Fortnightly housekeeping", "All bills included"],
    heroImage: IMG.livingRoom4,
    gallery: [IMG.livingRoom4, IMG.bedroom2, IMG.kitchen2],
    latitude: 51.5236,
    longitude: -0.1827,
    postcode: "W9 2",
  },
];

export function listingsByArea(area: AreaSlug): Listing[] {
  return LISTINGS.filter((l) => l.area === area);
}

export function getListing(slug: string): Listing | undefined {
  return LISTINGS.find((l) => l.slug === slug);
}

export function getLocation(slug: AreaSlug): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
