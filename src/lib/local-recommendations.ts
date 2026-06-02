// Curated, hand-maintained local guide for each Staylio neighbourhood.
// Driven by the most common guest questions (food, coffee, things to do).
// NOT auto-generated — edit freely. Keep notes evergreen (describe the place,
// avoid prices and transient accolades) and use UK spelling. This same data
// can later feed the BOOM guest knowledge base + concierge.

import type { AreaSlug } from "./listings";

export type Recommendation = {
  name: string;
  where: string; // street / sub-area so guests can orient, e.g. "Marylebone High Street"
  note: string; // one warm line on why it's worth the walk
};

export type LocalGuide = {
  eat: Recommendation[];
  coffee: Recommendation[];
  do: Recommendation[];
};

export const LOCAL_RECOMMENDATIONS: Record<AreaSlug, LocalGuide> = {
  "regents-park-marylebone": {
    eat: [
      { name: "The Ivy Café", where: "Marylebone High Street", note: "All-day British brasserie — a reliable, handsome spot for breakfast through dinner." },
      { name: "Trishna", where: "Blandford Street", note: "Refined coastal Indian cooking that locals have loved for years." },
      { name: "La Fromagerie", where: "Moxon Street", note: "Cheese room and café — perfect for a long, slow weekend lunch." },
    ],
    coffee: [
      { name: "Monocle Café", where: "Chiltern Street", note: "Tiny Scandi-Japanese café from the magazine — excellent coffee and pastries." },
      { name: "Workshop Coffee", where: "Marylebone Lane", note: "Serious speciality coffee for your morning flat white." },
    ],
    do: [
      { name: "Regent's Park & Queen Mary's Gardens", where: "5 minutes north", note: "One of London's grandest royal parks, with a famous rose garden in summer." },
      { name: "The Wallace Collection", where: "Manchester Square", note: "A free national museum of art and armour in a beautiful townhouse." },
      { name: "Daunt Books", where: "Marylebone High Street", note: "The Edwardian travel bookshop with the oak galleries — worth a browse even if you don't buy." },
    ],
  },
  "old-street-shoreditch": {
    eat: [
      { name: "Dishoom Shoreditch", where: "Boundary Street", note: "Bombay-café cooking in a buzzy room — the bacon naan is a local rite of passage." },
      { name: "Beigel Bake", where: "Brick Lane", note: "The 24-hour salt-beef beigel institution. Cash-friendly, always open, always a queue." },
      { name: "St. John Bread and Wine", where: "Commercial Street", note: "Nose-to-tail British cooking from one of the city's most influential kitchens." },
    ],
    coffee: [
      { name: "Allpress Espresso", where: "Redchurch Street", note: "New Zealand roastery café — consistently among the area's best brews." },
      { name: "Ozone Coffee", where: "Leonard Street", note: "Big, friendly roastery with all-day food alongside the coffee." },
    ],
    do: [
      { name: "Old Spitalfields Market", where: "5 minutes south", note: "Covered Victorian market with traders, food stalls and weekend antiques." },
      { name: "Columbia Road Flower Market", where: "Columbia Road (Sundays)", note: "A riot of colour and cockney banter every Sunday morning." },
      { name: "Brick Lane", where: "10 minutes east", note: "Vintage shops, street art and curry houses end to end." },
    ],
  },
  "kensington-hammersmith": {
    eat: [
      { name: "Ottolenghi", where: "Ledbury Road, Notting Hill", note: "The original deli-restaurant — bright Middle Eastern plates and famous salads." },
      { name: "Granger & Co", where: "Westbourne Grove", note: "Bill Granger's sunny Australian all-day dining — go for the ricotta hotcakes." },
      { name: "The Shed", where: "Palace Gardens Terrace", note: "Rustic British small plates from a family of farmers, in a cosy room." },
    ],
    coffee: [
      { name: "Farm Girl", where: "Portobello Road", note: "Pretty café known for its rose lattes and healthy brunch crowd." },
      { name: "Coffee Plant", where: "Portobello Road", note: "A long-standing Portobello roaster for a proper market-day coffee." },
    ],
    do: [
      { name: "Natural History Museum", where: "South Kensington", note: "Free, cathedral-like, and endlessly good with or without children." },
      { name: "Victoria & Albert Museum", where: "South Kensington", note: "The world's leading museum of art and design — free entry." },
      { name: "Portobello Road Market", where: "Notting Hill", note: "Antiques, street food and pastel houses — busiest and best on Saturdays." },
      { name: "Holland Park & the Kyoto Garden", where: "Kensington", note: "A leafy hideaway with peacocks and a serene Japanese garden." },
    ],
  },
  "fitzrovia-mayfair": {
    eat: [
      { name: "Roka", where: "Charlotte Street", note: "Robatayaki grill at the heart of Fitzrovia's restaurant row." },
      { name: "BAO Fitzrovia", where: "Windmill Street", note: "Pillowy Taiwanese steamed buns — simple, brilliant, often a wait." },
      { name: "Scott's", where: "Mount Street, Mayfair", note: "A grand Mayfair seafood institution for a special occasion." },
    ],
    coffee: [
      { name: "Kaffeine", where: "Great Titchfield Street", note: "An Antipodean-style café that's been setting the London standard for years." },
      { name: "Attendant", where: "Foley Street", note: "Speciality coffee served in a beautifully restored Victorian public lavatory." },
    ],
    do: [
      { name: "Royal Academy of Arts", where: "Piccadilly", note: "Major exhibitions in a courtyard palace, a short walk south." },
      { name: "The Photographers' Gallery", where: "Ramillies Street", note: "Britain's leading gallery dedicated to photography, near Oxford Circus." },
      { name: "Bond Street", where: "Mayfair", note: "The address for flagship fashion houses and jewellers — window-shopping included." },
      { name: "Mount Street Gardens", where: "Mayfair", note: "A quiet, bird-filled garden square that few visitors find." },
    ],
  },
  "barbican-farringdon": {
    eat: [
      { name: "St. JOHN", where: "St John Street", note: "Fergus Henderson's nose-to-tail original — order the bone marrow and the Eccles cake." },
      { name: "Moro", where: "Exmouth Market", note: "Moorish-Spanish cooking that's been a Clerkenwell favourite for decades." },
      { name: "The Quality Chop House", where: "Farringdon Road", note: "A listed Victorian dining room serving superb British fare." },
    ],
    coffee: [
      { name: "Prufrock Coffee", where: "Leather Lane", note: "A pilgrimage spot for coffee nerds and a lovely place to sit." },
      { name: "Caravan", where: "Exmouth Market", note: "All-day dining and in-house roastery — brunch is the move." },
    ],
    do: [
      { name: "Barbican Centre", where: "5 minutes east", note: "Europe's largest arts centre — film, theatre, art and a hidden tropical conservatory." },
      { name: "The Postal Museum & Mail Rail", where: "Mount Pleasant", note: "Ride the miniature underground postal railway beneath the city." },
      { name: "Exmouth Market", where: "Clerkenwell", note: "A pedestrian street of independent shops, stalls and restaurants." },
    ],
  },
  "borough-pimlico": {
    eat: [
      { name: "Borough Market", where: "Southwark Street", note: "London's most famous food market — come hungry and graze your way through." },
      { name: "Padella", where: "Southwark Street", note: "Handmade pasta at a counter; the pici cacio e pepe has a cult following." },
      { name: "José Tapas Bar", where: "Bermondsey Street", note: "Standing-room sherry and tapas from José Pizarro — small, loud, wonderful." },
    ],
    coffee: [
      { name: "Monmouth Coffee", where: "Park Street, Borough", note: "A London coffee institution beside the market." },
      { name: "WatchHouse", where: "Bermondsey Street", note: "Speciality coffee in a tiny former 19th-century watch house." },
    ],
    do: [
      { name: "Tate Modern", where: "Bankside", note: "Free modern-art powerhouse in a former power station, with river views from the top." },
      { name: "Shakespeare's Globe", where: "Bankside", note: "An open-air reconstruction of the Elizabethan playhouse on the Thames." },
      { name: "The View from The Shard", where: "London Bridge", note: "Western Europe's highest viewing gallery, 5 minutes away." },
    ],
  },
  "little-venice-maida-vale": {
    eat: [
      { name: "The Summerhouse", where: "Blomfield Road", note: "Canal-side seafood with a terrace right over the water — Little Venice at its prettiest." },
      { name: "The Waterway", where: "Formosa Street", note: "A smart gastropub with one of the best canal-side terraces in London." },
      { name: "Raoul's Café", where: "Clifton Road, Maida Vale", note: "A long-loved neighbourhood café for unhurried brunches." },
    ],
    coffee: [
      { name: "Sea Containers / local cafés on Clifton Road", where: "Maida Vale", note: "Clifton Road's parade of cafés and delis is the village's morning hub." },
      { name: "The Bridge House café", where: "Delamere Terrace", note: "A relaxed canal-side stop for coffee before a towpath walk." },
    ],
    do: [
      { name: "Regent's Canal & the Waterbus", where: "Little Venice", note: "Hop a narrowboat through Regent's Park and London Zoo to Camden Lock." },
      { name: "Puppet Theatre Barge", where: "Blomfield Road", note: "A charming floating marionette theatre moored on the canal." },
      { name: "Abbey Road Crossing", where: "St John's Wood", note: "Recreate the Beatles album cover at the world's most famous zebra crossing." },
      { name: "Lord's Cricket Ground", where: "St John's Wood", note: "The home of cricket, with tours of the pavilion and museum." },
    ],
  },
};

export function getLocalGuide(area: AreaSlug): LocalGuide | undefined {
  return LOCAL_RECOMMENDATIONS[area];
}
