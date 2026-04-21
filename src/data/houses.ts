export interface RateRow {
  label: string
  price: string
}

export interface HouseData {
  slug: string
  name: string
  location: string
  meta: string[]
  quote: string
  story: string[]
  amenities: string[]
  rates: RateRow[]
  nightlyRate: number
  gallery: string[]
  heroImage: string
  mapLabels: {
    area: string
    landmark: string
    address: string
    direction1: string
    direction2: string
  }
}

export const houses: HouseData[] = [
  {
    slug: 'bornholm',
    name: 'Arnager',
    location: 'Arnager · Bornholms sydkyst · 250 m fra havet',
    meta: [
      'Sleeps 6 · 3 bedrooms',
      '250 m to the beach',
      'Terrace & first-floor balcony',
      'Wood stove · Billiards',
    ],
    quote:
      '"The house on the south coast — original beams in the ceiling, a balcony for morning coffee, and the sea just a short walk through the village."',
    story: [
      'The apartment sits on the farm Pilegaard in Arnager, a small fishing village on the south coast of Bornholm, with its own entrance, garden and parking. Built in 1890 and thoroughly renovated in 2022, the interior keeps the original exposed timber beams in the ceiling. The beach is 250 metres away.',
      'The house is spread across two floors. The large combined living and dining room is the natural gathering point for the whole family, with a wood stove for cooler evenings. The well-equipped kitchen has four induction hobs, a hot-air oven and a dishwasher. Morning coffee can be taken on the terrace in front of the house or on the first-floor balcony.',
      "Arnager has a fine sandy beach and one of the two island harbours — connected to shore by Scandinavia's longest wooden bridge at 200 metres, well worth a walk. Rønne, the largest town on Bornholm, is nearby — as is the airport. The island's famous smokeries, round churches, and coastal paths are all within easy reach by bicycle.",
    ],
    amenities: [
      'Wood stove + firewood',
      'Washer & dryer',
      'Dishwasher',
      'Induction cooktop (4 plates)',
      'Hot-air oven',
      'Fridge + freezer (70L)',
      'WiFi (wireless)',
      'Smart TV (streaming only)',
      'Air-to-air heat pump',
      'Underfloor heating (bathroom)',
      'BBQ grill',
      'Billiards table',
      'Terrace',
      'First-floor balcony',
      'Parking on site',
      'Playground 100 m away',
    ],
    rates: [
      { label: 'Low · Oct–Mar',      price: '4.800 kr' },
      { label: 'Mid · Apr–Jun, Sep', price: '6.400 kr' },
      { label: 'High · Jul–Aug',     price: '8.900 kr' },
      { label: 'Cleaning (once)',     price: '650 kr' },
    ],
    nightlyRate: 685,
    gallery: [
      '/Bornholm/facade_1.jpg',
      '/Bornholm/living_1.jpg',
      '/Bornholm/terrace_1.jpg',
    ],
    heroImage: '/Bornholm/facade_1.jpg',
    mapLabels: {
      area: 'BALTIC SEA',
      landmark: 'ARNAGER · SYDKYST',
      address: 'Arnager, Bornholm',
      direction1: '← RØNNE · 10 MIN',
      direction2: 'NEXØ · 20 MIN →',
    },
  },
  {
    slug: 'kregme',
    name: 'Kregme',
    location: 'Dagsværmervej 11 · Kregme · 400 m fra Isefjord',
    meta: [
      'Sleeps 6 · 2 bedrooms',
      '400 m to the fjord',
      'Wood stove · Heat pump',
      'Terrace & grill',
    ],
    quote:
      '"The red house in Kregme. The terrace is where everyone ends up — mornings with coffee, evenings with a glass of wine and the garden going quiet."',
    story: [
      'The Kregme house is a classic red Danish summer cabin on a 1,175 m² plot in peaceful, green surroundings. Built in 1969 and fully renovated in 2016 — with a further partial renovation in 2025 — it sleeps six across two bedrooms. The terrace has outdoor furniture and a grill, and the garden has space to breathe.',
      'Inside, the bright living room flows into the kitchen and dining area. The kitchen has four ceramic hobs, a fan oven and a dishwasher. A wood-burning stove keeps the shoulder seasons warm, backed up by an air-to-air heat pump for the colder months.',
      'Isefjord is 400 metres away, and the lake Arresø — one of Denmark\'s largest — is 1.5 km. Shops are 900 m from the door. The area is ideal for cycling through quiet farmland and along the fjord edge, with Frederikssund and Hundested easy day trips.',
    ],
    amenities: [
      'Wood stove + firewood',
      'Air-to-air heat pump',
      'Dishwasher',
      'Washer & dryer',
      'Ceramic cooktop (4 plates)',
      'Fan oven',
      'Fridge + freezer (50L)',
      'WiFi (wireless)',
      'Smart TV (streaming only)',
      'BBQ grill',
      'Open terrace',
      'Parking on site',
    ],
    rates: [
      { label: 'Low · Oct–Mar',      price: '4.200 kr' },
      { label: 'Mid · Apr–Jun, Sep', price: '5.800 kr' },
      { label: 'High · Jul–Aug',     price: '7.900 kr' },
      { label: 'Cleaning (once)',     price: '600 kr' },
    ],
    nightlyRate: 600,
    gallery: [
      '/Kregme/facade_2.jpg',
      '/Kregme/terrace_1.jpg',
      '/Kregme/living_1.jpg',
    ],
    heroImage: '/Kregme/facade_2.jpg',
    mapLabels: {
      area: 'ISEFJORD',
      landmark: 'KREGME · NORDSJÆLLAND',
      address: 'Dagsværmervej 11, Kregme',
      direction1: '← FREDERIKSSUND · 15 MIN',
      direction2: 'HUNDESTED · 25 MIN →',
    },
  },
]

export function getHouse(slug: string): HouseData | undefined {
  return houses.find(h => h.slug === slug)
}
