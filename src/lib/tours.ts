export type TourStop = {
  name: string
  days: string
  copy: string
}

export type Tour = {
  slug: string
  name: string
  title: string
  days: number
  listPrice: string
  price: string
  rating: string
  tags: string[]
  image: string
  hero: string
  region: string
  intro: string
  description: string
  route: string
  stops: TourStop[]
}

export const tours: Tour[] = [
  {
    slug: "tour-india-rajasthan-nepal-30-days",
    name: "Grand India & Nepal",
    title: "Grand India, Rajasthan & Nepal",
    days: 30,
    listPrice: "€2,695",
    price: "€2,695",
    rating: "4.9",
    tags: ["Ultimate", "Deserts", "Himalayas"],
    image: "/images/RI-1.png",
    hero: "/images/Sub-1-1.webp",
    region: "India & Nepal",
    intro:
      "Our most complete journey pairs North India’s royal heritage and sacred cities with Nepal’s serene landscapes—from desert forts to jungle safaris, Himalayan lakes and Kathmandu Valley.",
    description:
      "A 30-day grand tour of Rajasthan, North India and Nepal, from desert forts to Chitwan, Pokhara and Kathmandu. From €2,695.",
    route:
      "Delhi → Nawalgarh → Bikaner → Jaisalmer → Jodhpur → Udaipur → Pushkar → Jaipur → Ranthambore → Agra → Varanasi → Lumbini → Chitwan → Pokhara → Bhaktapur → Kathmandu",
    stops: [
      {
        name: "Delhi & Shekhawati",
        days: "Days 1–5",
        copy: "Discover India’s capital before entering Rajasthan through lanes of painted havelis.",
      },
      {
        name: "Desert Rajasthan",
        days: "Days 6–12",
        copy: "Journey through Bikaner, golden Jaisalmer, Jodhpur and changing desert landscapes.",
      },
      {
        name: "Udaipur to Jaipur",
        days: "Days 13–18",
        copy: "Move through lake palaces, sacred ghats, Jaipur’s forts and Ranthambore forest.",
      },
      {
        name: "Agra & Varanasi",
        days: "Days 19–22",
        copy: "Experience the Taj Mahal and the spiritual intensity of the Ganges.",
      },
      {
        name: "Chitwan & Pokhara",
        days: "Days 23–27",
        copy: "Cross into Nepal for Buddhist heritage, jungle wildlife and a Himalayan lake.",
      },
      {
        name: "Kathmandu Valley",
        days: "Days 28–30",
        copy: "Finish among brick squares, mountain views and Kathmandu’s living temples.",
      },
    ],
  },
  {
    slug: "tour-india-nepal-22-days",
    name: "Tour India & Nepal",
    title: "India & Nepal: Culture to Himalayas",
    days: 22,
    listPrice: "€2,395",
    price: "€2,395",
    rating: "4.9",
    tags: ["Heritage", "Safari", "Himalayas"],
    image: "/images/IN-NP-2-1.png",
    hero: "/images/2.jpg",
    region: "India & Nepal",
    intro:
      "Move through two vibrant nations, from India’s royal palaces and sacred rivers to Nepal’s quiet valleys and mountain views. Ideal for culture, nature and genuine local encounters.",
    description:
      "A 22-day India and Nepal journey from Delhi and the Taj Mahal to Pokhara and Kathmandu. From €2,395.",
    route:
      "Delhi → Jaipur → Agra → Orchha → Khajuraho → Varanasi → Lumbini → Chitwan → Pokhara → Kathmandu",
    stops: [
      {
        name: "Delhi & Jaipur",
        days: "Days 1–4",
        copy: "Meet Delhi’s layered history, then enter Rajasthan through Jaipur’s markets and forts.",
      },
      {
        name: "Agra & Orchha",
        days: "Days 5–8",
        copy: "See the Taj Mahal before slowing down beside Orchha’s temples and river.",
      },
      {
        name: "Khajuraho & Varanasi",
        days: "Days 9–13",
        copy: "Study temple artistry, then encounter the ancient spiritual rhythm of the Ganges.",
      },
      {
        name: "Lumbini & Chitwan",
        days: "Days 14–17",
        copy: "Enter Nepal through Buddha’s birthplace and continue into subtropical jungle.",
      },
      {
        name: "Pokhara",
        days: "Days 18–19",
        copy: "Relax beside Phewa Lake with Himalayan horizons and a calmer pace.",
      },
      {
        name: "Kathmandu",
        days: "Days 20–22",
        copy: "Explore sacred stupas, temple squares and the cultural heart of the valley.",
      },
    ],
  },
  {
    slug: "tour-rajasthan-22-days",
    name: "Tour Rajasthan",
    title: "Rajasthan, Delhi, Agra & Varanasi",
    days: 22,
    listPrice: "€2,390",
    price: "€2,390",
    rating: "4.9",
    tags: ["Heritage", "Leopard Safari", "Sacred Ghats"],
    image: "/images/RJ-1.png",
    hero: "/images/3-1.jpg",
    region: "Rajasthan",
    intro:
      "See the best of North India, from painted havelis and golden desert forts to the Taj Mahal and morning prayers beside the Ganges. This journey balances history, food, wildlife and living culture.",
    description:
      "A 22-day private or small-group journey through Rajasthan, Delhi, Agra and Varanasi, from desert forts to the Ganges. From €2,390.",
    route:
      "Delhi → Nawalgarh → Bikaner → Jaisalmer → Jodhpur → Jawai → Udaipur → Pushkar → Jaipur → Agra → Varanasi → Delhi",
    stops: [
      {
        name: "Delhi",
        days: "Days 1–2",
        copy: "Begin among Mughal architecture, spice-filled lanes, lively markets and the broad avenues of New Delhi.",
      },
      {
        name: "Shekhawati & Bikaner",
        days: "Days 3–5",
        copy: "Discover frescoed havelis, quiet heritage towns, Junagarh Fort and the character of desert Rajasthan.",
      },
      {
        name: "Jaisalmer & Jodhpur",
        days: "Days 6–9",
        copy: "Explore the living Golden Fort, Thar dunes, Jodhpur’s blue lanes and mighty Mehrangarh Fort.",
      },
      {
        name: "Jawai & Udaipur",
        days: "Days 10–12",
        copy: "Track leopards among granite hills before slowing down beside Udaipur’s lakes and palaces.",
      },
      {
        name: "Pushkar & Jaipur",
        days: "Days 13–16",
        copy: "Move from sacred lakeside rituals to Jaipur’s royal forts, pink façades and traditional crafts.",
      },
      {
        name: "Agra & Varanasi",
        days: "Days 17–22",
        copy: "Meet the Taj Mahal at sunrise and finish with ancient ceremonies on the Ganges.",
      },
    ],
  },
  {
    slug: "tour-india-gujarat-22-days",
    name: "Gujarat Heritage Safari",
    title: "Gujarat & Rajasthan Heritage Safari",
    days: 22,
    listPrice: "€2,950",
    price: "€2,750",
    rating: "4.7",
    tags: ["Culture", "Safari", "Desert"],
    image: "/images/RJ-GJ-1.png",
    hero: "/images/4.jpg",
    region: "Gujarat",
    intro:
      "Travel from royal lake cities to Kutch’s white desert, Asiatic lion country and coastal Diu. Hidden craftsmanship, wildlife and changing landscapes reveal a surprising side of India.",
    description:
      "A 22-day Gujarat and Rajasthan heritage safari with Kutch, Gir lions, Diu and Ahmedabad. From €2,750.",
    route:
      "Delhi → Ranthambore → Pushkar → Jawasiya → Udaipur → Bajana → Bhuj → Junagadh → Sasan Gir → Diu → Bhavnagar → Ahmedabad",
    stops: [
      {
        name: "Delhi & Ranthambore",
        days: "Days 1–4",
        copy: "Begin in the capital before heading into rugged tiger habitat, lakes and forest ruins.",
      },
      {
        name: "Pushkar & Jawasiya",
        days: "Days 5–7",
        copy: "Experience sacred traditions and the unhurried hospitality of rural Rajasthan.",
      },
      {
        name: "Udaipur & Bajana",
        days: "Days 8–11",
        copy: "Explore lake palaces, then continue into Gujarat’s salt-flat landscapes.",
      },
      {
        name: "Bhuj & Kutch",
        days: "Days 12–14",
        copy: "Meet artisan communities and discover bold textiles, desert traditions and local architecture.",
      },
      {
        name: "Gir & Diu",
        days: "Days 15–18",
        copy: "Search for Asiatic lions before relaxing amid Diu’s beaches and Portuguese heritage.",
      },
      {
        name: "Ahmedabad",
        days: "Days 19–22",
        copy: "Close with stepwells, Jain heritage and the energetic design culture of Ahmedabad.",
      },
    ],
  },
  {
    slug: "north-india-trip-22-days",
    name: "North India Trip",
    title: "North India’s Untouched Corners",
    days: 22,
    listPrice: "€1,650",
    price: "€1,650",
    rating: "4.9",
    tags: ["Heritage", "Spiritual", "Wildlife"],
    image: "/images/NIT-2.png",
    hero: "/images/NIT-2.png",
    region: "North India",
    intro:
      "A structured journey through heritage cities, painted havelis, rural forts, temples and India’s spiritual capital—designed for travellers who want depth without a rushed pace.",
    description:
      "A 22-day North India itinerary from Delhi through Shekhawati, Jaipur, Agra, Orchha, Khajuraho and Varanasi. From €1,650.",
    route:
      "Delhi → Shekhawati → Khejarla → Pushkar → Pachewar Fort → Jaipur → Agra → Orchha → Khajuraho → Varanasi → Delhi",
    stops: [
      {
        name: "Delhi",
        days: "Days 1–2",
        copy: "Step into the contrasts of Old and New Delhi through monuments, neighbourhood walks and local food.",
      },
      {
        name: "Nawalgarh & Khejarla",
        days: "Days 3–6",
        copy: "Trade city noise for frescoed mansions, village rhythms and the quiet of a storied rural fort.",
      },
      {
        name: "Pushkar & Pachewar",
        days: "Days 7–8",
        copy: "Pause beside Pushkar’s sacred lake, then experience intimate countryside heritage.",
      },
      {
        name: "Jaipur & Agra",
        days: "Days 9–13",
        copy: "Explore Amber Fort, palace architecture and artisans before continuing to the Taj Mahal.",
      },
      {
        name: "Orchha & Khajuraho",
        days: "Days 14–18",
        copy: "Slow down among riverside palaces, cenotaphs and extraordinary temple carving.",
      },
      {
        name: "Varanasi",
        days: "Days 19–22",
        copy: "Finish with sunrise on the Ganges, ancient lanes and the powerful evening aarti.",
      },
    ],
  },
  {
    slug: "tour-india-15-days",
    name: "Royal India Journey",
    title: "Royal India Journey",
    days: 15,
    listPrice: "€1,700",
    price: "€1,700",
    rating: "4.8",
    tags: ["Forts", "Desert", "Bazaars"],
    image: "/images/NIT-1.png",
    hero: "/images/6.jpg",
    region: "North India",
    intro:
      "A focused North India journey combining Delhi, Jaipur, Ranthambore, the Taj Mahal at sunrise and a boat ride on the Ganges in Varanasi.",
    description:
      "A 15-day North India journey through Delhi, Jaipur, Ranthambore, the Taj Mahal and Varanasi. From €1,700.",
    route:
      "Delhi → Jaipur → Pachewar Garh Fort → Ranthambore National Park → Agra → Varanasi → Delhi",
    stops: [
      {
        name: "Delhi",
        days: "Days 1–2",
        copy: "Begin with Mughal landmarks, a Sikh temple and a walk through Old Delhi.",
      },
      {
        name: "Jaipur",
        days: "Days 3–5",
        copy: "Experience Amber Fort, royal architecture, artisans and local food.",
      },
      {
        name: "Pachewar Garh",
        days: "Day 6",
        copy: "Settle into a rural heritage fort and walk through the surrounding village.",
      },
      {
        name: "Ranthambore",
        days: "Days 7–8",
        copy: "Head into the jungle at first light to seek tigers among lakes and ruins.",
      },
      {
        name: "Agra",
        days: "Days 9–10",
        copy: "Discover Mughal history and the Taj Mahal in the gentle light of sunrise.",
      },
      {
        name: "Varanasi",
        days: "Days 11–15",
        copy: "End with ceremonies, a dawn boat ride and India’s most sacred city.",
      },
    ],
  },
]

export function getTour(slug: string) {
  return tours.find((tour) => tour.slug === slug)
}

export function euroAmount(price: string) {
  return price.replace(/[^\d]/g, "")
}

export function tourPath(slug: string) {
  return `/${slug}/`
}
