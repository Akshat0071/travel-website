export interface VehicleType {
  id: string;
  name: string;
  category: "Sedan" | "SUV" | "Tempo Traveller" | "Luxury";
  capacity: number; // passengers
  luggage: number; // bags
  ratePerKm: number;
  minDailyRate: number;
  image: string;
  features: string[];
}

export const vehicleTypes: VehicleType[] = [
  {
    id: "sedan",
    name: "Dzire / Etios",
    category: "Sedan",
    capacity: 4,
    luggage: 2,
    ratePerKm: 14,
    minDailyRate: 3000,
    image: "https://res.cloudinary.com/demo/image/upload/v1/taxi1.jpg",
    features: ["AC", "Music System", "Comfortable Seats", "Budget Friendly"]
  },
  {
    id: "suv",
    name: "Innova Crysta",
    category: "SUV",
    capacity: 6,
    luggage: 4,
    ratePerKm: 22,
    minDailyRate: 4500,
    image: "https://res.cloudinary.com/demo/image/upload/v1/taxi2.jpg",
    features: ["AC", "Captain Seats", "Ample Legroom", "Hill Assist", "Premium Comfort"]
  },
  {
    id: "tempo",
    name: "Force Traveller",
    category: "Tempo Traveller",
    capacity: 12,
    luggage: 8,
    ratePerKm: 35,
    minDailyRate: 6500,
    image: "https://res.cloudinary.com/demo/image/upload/v1/tempo_traveller.jpg",
    features: ["AC", "Pushback Seats", "Music System", "Ideal for Groups", "Spacious"]
  },
  {
    id: "luxury",
    name: "Fortuner",
    category: "Luxury",
    capacity: 6,
    luggage: 4,
    ratePerKm: 45,
    minDailyRate: 8000,
    image: "https://res.cloudinary.com/demo/image/upload/v1/cab_interior.jpg",
    features: ["Luxury Interiors", "4x4 Capability", "Sunroof", "Premium Sound", "VIP Experience"]
  }
];

export interface RouteTemplate {
  id: string;
  from: string;
  to: string;
  distance: string; // e.g. "250 km"
  duration: string; // e.g. "7-8 hrs"
  priceSedan: number;
  priceSUV: number;
  isPopular?: boolean;
}

export const commonRoutes: RouteTemplate[] = [
  {
    id: "chd-shimla",
    from: "Chandigarh",
    to: "Shimla",
    distance: "115 km",
    duration: "3-4 hrs",
    priceSedan: 3500,
    priceSUV: 5500,
    isPopular: true
  },
  {
    id: "chd-manali",
    from: "Chandigarh",
    to: "Manali",
    distance: "310 km",
    duration: "8-9 hrs",
    priceSedan: 6500,
    priceSUV: 9500,
    isPopular: true
  },
  {
    id: "del-shimla",
    from: "Delhi Airport",
    to: "Shimla",
    distance: "360 km",
    duration: "7-8 hrs",
    priceSedan: 6000,
    priceSUV: 9000
  },
  {
    id: "del-manali",
    from: "Delhi Airport",
    to: "Manali",
    distance: "550 km",
    duration: "12-14 hrs",
    priceSedan: 10000,
    priceSUV: 14000
  },
  {
    id: "manali-leh",
    from: "Manali",
    to: "Leh",
    distance: "428 km",
    duration: "2 Days",
    priceSedan: 18000,
    priceSUV: 25000,
    isPopular: true
  },
  {
    id: "shimla-manali",
    from: "Shimla",
    to: "Manali",
    distance: "250 km",
    duration: "7-8 hrs",
    priceSedan: 5500,
    priceSUV: 8500
  }
];

export const safetyFeatures = [
  { title: "Verified Drivers", desc: "Background checked & experienced hill drivers", icon: "user-check" },
  { title: "Sanitized Cabs", desc: "Cleaned and sanitized before every trip", icon: "shield-check" },
  { title: "24/7 Support", desc: "Round the clock assistance during your trip", icon: "phone" },
  { title: "Transparent Billing", desc: "No hidden charges, pay what you see", icon: "receipt" }
];

export const taxiTestimonials = [
  {
    name: "Sandeep Gill",
    route: "Chandigarh to Manali",
    text: "Excellent service. The Innova was brand new and the driver was very polite.",
    rating: 5
  },
  {
    name: "Meera Reddy",
    route: "Shimla Sightseeing",
    text: "booked a tempo traveller for our family. Very spacious and comfortable.",
    rating: 5
  },
  {
    name: "John Doe",
    route: "Delhi to Dharamshala",
    text: "On time pickup from airport. Smooth drive despite the rain.",
    rating: 4
  }
];

export const taxiFaqs = [
  {
    question: "Do you include toll and parking charges?",
    answer: "Toll and parking charges are usually extra and to be paid by the guest directly, unless specified in a package."
  },
  {
    question: "Is there a night driving charge?",
    answer: "Yes, a night charge of ₹300-500 is applicable if the driver drives between 10 PM and 6 AM."
  },
  {
    question: "Can I stop for sightseeing on the way?",
    answer: "Yes, you can take small breaks for tea/food. For detours or sightseeing, extra charges may apply based on km/time."
  },
  {
    question: "How do I confirm my booking?",
    answer: "You can pay a small token amount (10-20%) to confirm your booking. The rest can be paid to the driver during the trip."
  }
];
