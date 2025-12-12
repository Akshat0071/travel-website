export interface Diary {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  tags: string[];
  date: string;
  readTime: string;
  location: string;
}

export const sampleDiaries: Diary[] = [
  {
    slug: "chasing-snow-spiti",
    title: "Chasing Snow in Spiti Valley: A Winter Tale",
    excerpt: "Surviving -20 degrees, frozen waterfalls, and the warmest hospitality in the coldest desert of India.",
    content: `
      <p>The white desert of Spiti in winter is not for the faint-hearted. It demands resilience, but rewards you with landscapes that look like they belong to another planet.</p>
      
      <h3>The Journey Begins</h3>
      <p>We started our journey from Shimla, winding through the snow-laden roads of Kinnaur. The air got thinner, and the temperature dropped with every kilometer.</p>

      <blockquote>"In the mountains, you don't conquer the peak, you conquer yourself."</blockquote>

      <h3>Key Monastery in Winter</h3>
      <p>Seeing the Key Monastery covered in a blanket of snow was a spiritual experience. The monks offered us butter tea, which was a lifesaver in the biting cold.</p>

      <ul>
        <li>Carry multiple layers of thermals</li>
        <li>Don't forget sunglasses (snow blindness is real)</li>
        <li>Stay hydrated even if you don't feel thirsty</li>
      </ul>

      <p>The silence of the valley is deafening. It forces you to look inward. Spiti isn't just a destination; it's a feeling.</p>
    `,
    image: "https://res.cloudinary.com/demo/image/upload/v1/diary_mountain.jpg",
    author: {
      name: "Rohan Das",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Adventure photographer and storyteller based in Manali."
    },
    tags: ["Adventure", "Winter", "Spiti"],
    date: "Jan 15, 2025",
    readTime: "8 min read",
    location: "Kaza, Spiti Valley"
  },
  {
    slug: "spiritual-awakening-dharamshala",
    title: "Finding Peace in the Abode of Dalai Lama",
    excerpt: "A week of meditation, momos, and mindfulness in the streets of Mcleodganj.",
    content: `
      <p>Mcleodganj is a unique blend of Tibetan culture and Himachali hospitality. The air smells of incense and pine.</p>
      
      <h3>The Dalai Lama Temple</h3>
      <p>Walking the Kora around the temple complex, spinning the prayer wheels, I felt a sense of calm I hadn't felt in years.</p>

      <p>We spent our evenings at the local cafes, debating philosophy and enjoying thukpa. The sunset from Naddi point is unmissable.</p>
    `,
    image: "https://res.cloudinary.com/demo/image/upload/v1/diary_temple.jpg",
    author: {
      name: "Sarah Jenkins",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Yoga instructor and travel writer."
    },
    tags: ["Spiritual", "Culture", "Dharamshala"],
    date: "Dec 20, 2024",
    readTime: "5 min read",
    location: "Mcleodganj, Dharamshala"
  },
  {
    slug: "paragliding-bir-billing",
    title: "Flying High: My First Paragliding Experience",
    excerpt: "Jumping off a cliff at 8000ft requires madness, but soaring like a bird requires faith.",
    content: `
      <p>Bir Billing is the paragliding capital of India for a reason. The take-off site at Billing offers a panoramic view of the Dhauladhar range.</p>
      
      <h3>The Jump</h3>
      <p>My pilot said, "Run, run, run, and don't stop!" I ran off the edge, and suddenly, my feet were dangling in the air.</p>
      
      <p>For 20 minutes, I was a bird. The wind in my face, the tiny houses below, the vast blue sky above. It was pure freedom.</p>
    `,
    image: "https://res.cloudinary.com/demo/image/upload/v1/diary_paragliding.jpg",
    author: {
      name: "Amit Verma",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      bio: "Software engineer by day, adrenaline junkie by weekend."
    },
    tags: ["Adventure", "Bir Billing"],
    date: "Nov 10, 2024",
    readTime: "6 min read",
    location: "Bir, Kangra"
  },
  {
    slug: "kheerganga-trek-memoir",
    title: "Stars, Hot Springs and a Long Walk",
    excerpt: "The trek to Kheerganga is a rite of passage for every backpacker in India.",
    content: `
      <p>The trail starts from Barshaini, winding through dense pine forests and crossing gushing waterfalls.</p>
      
      <p>Reaching the top and dipping into the natural hot sulfur spring washes away all the fatigue. Sitting there, looking at the snow-clad peaks, you realize how small you are.</p>
    `,
    image: "https://res.cloudinary.com/demo/image/upload/v1/diary_trek.jpg",
    author: {
      name: "Priya Patel",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      bio: "Solo traveler exploring the Himalayas."
    },
    tags: ["Trekking", "Kasol", "Nature"],
    date: "Oct 05, 2024",
    readTime: "10 min read",
    location: "Parvati Valley"
  },
  {
    slug: "tirthan-valley-fishing",
    title: "Silence and Trout in Tirthan Valley",
    excerpt: "Escaping the crowds to finding solace by the riverside in the Great Himalayan National Park.",
    content: `
      <p>Tirthan is untouched. It's raw. The river is crystal clear, and the trout fishing is world-class.</p>
      <p>We stayed in a homestay right by the river. The sound of water was our lullaby.</p>
    `,
    image: "https://res.cloudinary.com/demo/image/upload/v1/diary_river.jpg",
    author: {
      name: "David Miller",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Nature lover and avid angler."
    },
    tags: ["Nature", "Offbeat", "Tirthan"],
    date: "Sep 15, 2024",
    readTime: "7 min read",
    location: "Gushaini, Tirthan"
  },
  {
    slug: "shimla-nostalgia",
    title: "Walking Down Memory Lane in Shimla",
    excerpt: "Rediscovering the colonial charm of Shimla beyond the touristy Mall Road.",
    content: `
      <p>Shimla has a soul that lives in its old architecture. The Viceregal Lodge, the Gaiety Theatre, the old bookshops.</p>
      <p>We took the heritage walk through the forest to Potters Hill. It was magical.</p>
    `,
    image: "https://res.cloudinary.com/demo/image/upload/v1/diary_mountain.jpg",
    author: {
      name: "Anjali Gupta",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "History buff and heritage enthusiast."
    },
    tags: ["History", "Shimla", "Family"],
    date: "Aug 22, 2024",
    readTime: "5 min read",
    location: "Shimla"
  }
];
