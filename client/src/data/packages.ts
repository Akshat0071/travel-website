export interface Package {
  id: string;
  slug: string;
  title: string;
  region: string;
  duration: string; // e.g. "4 Days / 3 Nights"
  durationDays: number; // for filtering
  price: number;
  description: string;
  rating: number;
  reviewsCount: number;
  images: string[];
  themes: string[]; // "Adventure", "Spiritual", "Honeymoon", etc.
  isPopular?: boolean;
  isNew?: boolean;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
}

export const samplePackages: Package[] = [
  {
    id: "1",
    slug: "manali-volvo-package",
    title: "Magical Manali Volvo Package",
    region: "Manali",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    price: 12999,
    description: "Experience the snow-capped peaks and vibrant culture of Manali with our premium Volvo package.",
    rating: 4.8,
    reviewsCount: 124,
    images: [
      "https://res.cloudinary.com/demo/image/upload/v1/hero_mountain1.jpg",
      "https://res.cloudinary.com/demo/image/upload/v1/valley1.jpg",
      "https://res.cloudinary.com/demo/image/upload/v1/river1.jpg"
    ],
    themes: ["Honeymoon", "Family"],
    isPopular: true,
    highlights: ["Solang Valley Snow Point", "Hadimba Temple Visit", "Mall Road Shopping", "Rohtang Pass (Optional)"],
    itinerary: [
      { day: 1, title: "Arrival in Manali", description: "Arrive in Manali by morning Volvo. Check-in to your hotel and rest. Evening free for Mall Road." },
      { day: 2, title: "Solang Valley Tour", description: "Full day excursion to Solang Valley for adventure activities like paragliding and skiing." },
      { day: 3, title: "Manali Sightseeing", description: "Visit Hadimba Devi Temple, Vashisht Hot Springs, and Tibetan Monastery." },
      { day: 4, title: "Departure", description: "Check out from hotel. Free time for shopping. Board evening Volvo to Delhi." }
    ],
    inclusions: ["Volvo Tickets (Delhi-Manali-Delhi)", "3 Nights Accommodation", "Breakfast & Dinner", "Sightseeing by Private Car"],
    exclusions: ["Lunch", "Adventure Activity Fees", "Rohtang Pass Permit", "Personal Expenses"]
  },
  {
    id: "2",
    slug: "shimla-weekend-gateway",
    title: "Shimla Colonial Charm",
    region: "Shimla",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    price: 8999,
    description: "Walk through the colonial history of the Queen of Hills and enjoy scenic views.",
    rating: 4.5,
    reviewsCount: 89,
    images: [
      "https://res.cloudinary.com/demo/image/upload/v1/temple1.jpg",
      "https://res.cloudinary.com/demo/image/upload/v1/hero_mountain1.jpg"
    ],
    themes: ["Family", "Weekend"],
    highlights: ["The Ridge & Mall Road", "Jakhu Temple", "Kufri Fun World", "Christ Church"],
    itinerary: [
      { day: 1, title: "Arrival in Shimla", description: "Reach Shimla and check-in. Evening walk at The Ridge and Mall Road." },
      { day: 2, title: "Kufri Excursion", description: "Visit Kufri for yak rides and panoramic views. Visit Jakhu Temple in the evening." },
      { day: 3, title: "Departure", description: "Morning breakfast. Visit Christ Church and local market before departure." }
    ],
    inclusions: ["2 Nights Stay", "Breakfast & Dinner", "Kufri Sightseeing", "Pick/Drop from Bus Stand"],
    exclusions: ["Train/Flight Tickets", "Entry Fees", "Lunch", "Personal Expenses"]
  },
  {
    id: "3",
    slug: "spiti-adventure-tour",
    title: "Spiti Valley Road Trip",
    region: "Spiti",
    duration: "8 Days / 7 Nights",
    durationDays: 8,
    price: 24500,
    description: "The ultimate adventure road trip to the Middle Land. Rugged mountains and ancient monasteries.",
    rating: 4.9,
    reviewsCount: 56,
    images: [
      "https://res.cloudinary.com/demo/image/upload/v1/trek1.jpg",
      "https://res.cloudinary.com/demo/image/upload/v1/valley1.jpg"
    ],
    themes: ["Adventure", "Spiritual"],
    isNew: true,
    highlights: ["Key Monastery", "Chandratal Lake", "Kunzum Pass", "World's Highest Post Office (Hikkim)"],
    itinerary: [
      { day: 1, title: "Manali to Kaza", description: "Early morning drive from Manali to Kaza via Atal Tunnel and Kunzum Pass." },
      { day: 2, title: "Kaza Sightseeing", description: "Visit Key Monastery, Kibber Village, and Chicham Bridge." },
      { day: 3, title: "Langza - Hikkim - Komic", description: "Visit the fossil village, highest post office, and highest village connected by motorable road." },
      { day: 4, title: "Tabo & Dhankar", description: "Visit the 1000-year-old Tabo Monastery and Dhankar Lake trek." },
      { day: 5, title: "Kaza to Chandratal", description: "Drive to Chandratal Lake. Overnight camping near the lake." },
      { day: 6, title: "Chandratal to Manali", description: "Morning drive back to Manali via Rohtang Pass." },
      { day: 7, title: "Rest Day in Manali", description: "Relax and explore local cafes." },
      { day: 8, title: "Departure", description: "Tour ends with drop at bus stand." }
    ],
    inclusions: ["Accommodation in Homestays/Camps", "Breakfast & Dinner", "Innova/Tempo Traveller", "Experienced Driver/Guide"],
    exclusions: ["Lunch", "Permits", "Monastery Entry Fees", "Personal Gear"]
  },
  {
    id: "4",
    slug: "dharamshala-dalhousie-combo",
    title: "Dharamshala & Dalhousie",
    region: "Dharamshala",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    price: 18500,
    description: "Combine the spiritual vibes of Mcleodganj with the colonial beauty of Dalhousie and Khajjiar.",
    rating: 4.7,
    reviewsCount: 92,
    images: [
      "https://res.cloudinary.com/demo/image/upload/v1/temple1.jpg",
      "https://res.cloudinary.com/demo/image/upload/v1/paragliding1.jpg"
    ],
    themes: ["Spiritual", "Family", "Nature"],
    highlights: ["Dalai Lama Temple", "HPCA Stadium", "Khajjiar (Mini Switzerland)", "Dainkund Peak"],
    itinerary: [
      { day: 1, title: "Arrival in Dharamshala", description: "Check-in at Mcleodganj hotel. Visit Dalai Lama Temple and local market." },
      { day: 2, title: "Dharamshala Sightseeing", description: "Visit Bhagsunag Waterfall, St. John Church, and War Memorial." },
      { day: 3, title: "Transfer to Dalhousie", description: "Scenic drive to Dalhousie. Evening walk on Mall Road." },
      { day: 4, title: "Khajjiar Excursion", description: "Full day trip to Khajjiar. Enjoy horse riding and lush green meadows." },
      { day: 5, title: "Dalhousie Sightseeing", description: "Visit Panchpula, Satdhara Falls, and Kalatop Wildlife Sanctuary." },
      { day: 6, title: "Departure", description: "Transfer to Pathankot railway station or bus stand." }
    ],
    inclusions: ["5 Nights Accommodation", "Daily Breakfast", "Private Cab for Transfers & Sightseeing", "Toll & Parking"],
    exclusions: ["Lunch & Dinner", "Adventure Activities", "Guide Charges", "GST"]
  },
  {
    id: "5",
    slug: "bir-billing-paragliding",
    title: "Bir Billing Adventure Weekend",
    region: "Kangra",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    price: 7500,
    description: "Fly high at the world's second-highest paragliding site and explore Tibetan culture.",
    rating: 4.9,
    reviewsCount: 45,
    images: [
      "https://res.cloudinary.com/demo/image/upload/v1/paragliding1.jpg",
      "https://res.cloudinary.com/demo/image/upload/v1/temple1.jpg"
    ],
    themes: ["Adventure", "Weekend"],
    highlights: ["Paragliding (15-20 mins)", "Monastery Visits", "Cafe Hopping", "Cycling"],
    itinerary: [
      { day: 1, title: "Arrival in Bir", description: "Check-in to hotel/hostel. Explore the landing site and local cafes." },
      { day: 2, title: "Paragliding & Monasteries", description: "Drive to Billing for takeoff. Paragliding session. Visit Sherab Ling Monastery." },
      { day: 3, title: "Departure", description: "Morning cycling in the village. Departure in the evening." }
    ],
    inclusions: ["2 Nights Stay", "Paragliding Session", "GoPro Video", "Breakfast"],
    exclusions: ["Lunch & Dinner", "Travel to Bir", "Personal Expenses", "Insurance"]
  },
  {
    id: "6",
    slug: "kasol-kheerganga-trek",
    title: "Kasol & Kheerganga Trek",
    region: "Kasol",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    price: 6500,
    description: "Trek through the mystical Parvati Valley and take a dip in natural hot springs.",
    rating: 4.6,
    reviewsCount: 110,
    images: [
      "https://res.cloudinary.com/demo/image/upload/v1/river1.jpg",
      "https://res.cloudinary.com/demo/image/upload/v1/trek1.jpg"
    ],
    themes: ["Adventure", "Trekking", "Youth"],
    isPopular: true,
    highlights: ["Kheerganga Trek", "Manikaran Sahib", "Chalal Village Walk", "Hot Springs"],
    itinerary: [
      { day: 1, title: "Arrival in Kasol", description: "Reach Kasol. Walk to Chalal village. Enjoy riverside cafes." },
      { day: 2, title: "Trek to Kheerganga", description: "Start trek from Barshaini. 12km trek through forests. Overnight camping." },
      { day: 3, title: "Kheerganga to Kasol", description: "Dip in hot springs. Trek down to Barshaini. Return to Kasol hotel." },
      { day: 4, title: "Manikaran & Departure", description: "Visit Manikaran Gurudwara. Departure to Bhuntar/Delhi." }
    ],
    inclusions: ["Camping & Hotel Stay", "All Meals during Trek", "Trek Guide", "Bonfire"],
    exclusions: ["Travel to Kasol", "Porter for personal bags", "Lunch in Kasol", "Tips"]
  }
];
