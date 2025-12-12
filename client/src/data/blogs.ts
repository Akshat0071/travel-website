export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  tags: string[];
  category: "Travel Guide" | "Tips" | "Food" | "Culture";
}

export const sampleBlogs: BlogPost[] = [
  {
    slug: "packing-list-himachal-winter",
    title: "The Ultimate Packing List for Himachal in Winter",
    excerpt: "Don't freeze! Here is everything you need to pack for a comfortable winter trip to Manali and Spiti.",
    image: "https://res.cloudinary.com/demo/image/upload/v1/blog_travel1.jpg",
    author: "Team Himachal Travels",
    authorAvatar: "https://github.com/shadcn.png",
    date: "Dec 01, 2025",
    readTime: "5 min read",
    tags: ["Tips", "Winter", "Packing"],
    category: "Tips",
    content: `
# Winter Packing Guide

Traveling to Himachal in winter is magical, but it requires preparation. Temperatures can drop to -20°C in places like Spiti.

## Layering is Key
Don't rely on one heavy jacket. Layering traps heat better.
1. **Base Layer:** Thermals (Merino wool is best).
2. **Mid Layer:** Fleece or woolen sweater.
3. **Outer Layer:** Windproof and waterproof down jacket.

## Footwear
- Waterproof boots with good grip.
- Woolen socks (carry extras).

## Accessories
- Sunglasses (mandatory for snow).
- Woolen cap covering ears.
- Waterproof gloves.

> Pro Tip: Keep your camera batteries warm inside your jacket pocket. They drain fast in the cold!
    `
  },
  {
    slug: "best-time-visit-manali",
    title: "Best Time to Visit Manali: A Seasonal Guide",
    excerpt: "Whether you want snow, flowers, or apples, find out the perfect month for your Manali trip.",
    image: "https://res.cloudinary.com/demo/image/upload/v1/blog_itinerary.jpg",
    author: "Team Himachal Travels",
    authorAvatar: "https://github.com/shadcn.png",
    date: "Nov 15, 2025",
    readTime: "4 min read",
    tags: ["Manali", "Guide", "Weather"],
    category: "Travel Guide",
    content: `
# When to Go?

Manali is a year-round destination, but each season offers something different.

## Summer (March - June)
- **Best for:** Families, Honeymooners, Sightseeing.
- **Weather:** Pleasant (10°C to 25°C).
- **Highlights:** Rohtang Pass opens, apple orchards bloom.

## Monsoon (July - September)
- **Best for:** Budget travelers, Nature lovers.
- **Warning:** Landslides are common. Check weather forecasts.

## Winter (October - February)
- **Best for:** Snow lovers, Skiing.
- **Weather:** Cold (-5°C to 10°C).
- **Highlights:** Solang Valley skiing, fresh snowfall.
    `
  },
  {
    slug: "himachali-food-guide",
    title: "5 Himachali Dishes You Must Try",
    excerpt: "Beyond Maggi: Explore the rich and spicy flavors of traditional Himachali cuisine.",
    image: "https://res.cloudinary.com/demo/image/upload/v1/blog_seo1.jpg",
    author: "Foodie Traveller",
    authorAvatar: "https://randomuser.me/api/portraits/women/33.jpg",
    date: "Oct 20, 2025",
    readTime: "6 min read",
    tags: ["Food", "Culture"],
    category: "Food",
    content: `
# A Culinary Journey

Himachali food is hearty, spicy, and uses a lot of yogurt and cardamom.

1. **Dham:** A traditional festive meal served on leaf plates. Includes rice, dal, madra (yogurt-based chickpea curry), and sweet rice.
2. **Siddu:** Steamed buns stuffed with poppy seeds or walnuts. Best eaten with ghee.
3. **Babru:** Like kachoris but stuffed with black gram dal.
4. **Tudkiya Bhath:** A spicy rice dish cooked with lentils, potatoes, and yogurt.
5. **Mittha:** Sweet rice with raisins and dry fruits.

> "The best way to understand a culture is to taste it."
    `
  },
  {
    slug: "safe-taxi-tips",
    title: "How to Choose a Safe Taxi Service in Himachal",
    excerpt: "Avoid scams and unsafe drivers. Tips for booking reliable cabs in the mountains.",
    image: "https://res.cloudinary.com/demo/image/upload/v1/blog_travel1.jpg",
    author: "Safety First",
    authorAvatar: "https://github.com/shadcn.png",
    date: "Sep 05, 2025",
    readTime: "3 min read",
    tags: ["Safety", "Taxi", "Tips"],
    category: "Tips",
    content: `
# Safety on the Road

Mountain roads are tricky. Here is how to ensure a safe ride.

- **Verify the Driver:** Ask for the driver's license and experience. Hill driving requires specific skills.
- **Check the Vehicle:** Ensure tires have treads and brakes are working.
- **Avoid Night Driving:** It's safer to drive during daylight hours to avoid black ice and visibility issues.
- **Pre-book:** Booking with a reputed agency (like us!) ensures accountability.

## Red Flags
- Extremely low prices (might be a trap).
- Driver refusing to share live location.
- Car condition looks poor.
    `
  },
  {
    slug: "offbeat-places-himachal",
    title: "Hidden Gems: Offbeat Places in Himachal",
    excerpt: "Escape the crowds. Discover Jibhi, Barot, and Kalpa.",
    image: "https://res.cloudinary.com/demo/image/upload/v1/blog_itinerary.jpg",
    author: "Explorer",
    authorAvatar: "https://randomuser.me/api/portraits/men/11.jpg",
    date: "Aug 12, 2025",
    readTime: "7 min read",
    tags: ["Offbeat", "Guide"],
    category: "Travel Guide",
    content: `
# Go Off the Beaten Path

If you hate crowds, skip Shimla and head here:

## Jibhi
A tiny hamlet in Tirthan Valley. Wooden houses, waterfalls, and peace.

## Barot
Known for trout fishing and the haulage trolley.

## Kalpa
Offers the best view of the Kinner Kailash peak.

These places have limited connectivity, which is a blessing in disguise.
    `
  },
  {
    slug: "budget-trip-planning",
    title: "How to Plan a Budget Trip to Himachal",
    excerpt: "Travel smarter, not harder. Save money on transport and stay without compromising fun.",
    image: "https://res.cloudinary.com/demo/image/upload/v1/blog_seo1.jpg",
    author: "Budget Backpacker",
    authorAvatar: "https://randomuser.me/api/portraits/women/55.jpg",
    date: "Jul 30, 2025",
    readTime: "5 min read",
    tags: ["Budget", "Tips"],
    category: "Tips",
    content: `
# Budget Travel Hacks

1. **Travel by Volvo/HRTC:** Taxis are expensive. Buses are cheap and reliable.
2. **Stay in Hostels:** Manali and Kasol have amazing backpacker hostels for ₹500/night.
3. **Eat Local:** Dhabas are cheaper and tastier than fancy cafes.
4. **Travel Off-season:** Prices drop by 50% in July-August and January-February.

## Estimated Cost (5 Days)
- Transport: ₹2000
- Stay: ₹2500
- Food: ₹2000
- **Total: ₹6500**
    `
  }
];
