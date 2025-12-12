import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Reuse existing images for blog
import imgTrekking from "@assets/generated_images/hikers_on_a_scenic_mountain_trail.png";
import imgCulture from "@assets/generated_images/ancient_himachal_temple_with_mountains.png";
import imgFood from "@assets/generated_images/happy_family_picnic_in_meadow.png";

const posts = [
  {
    id: 1,
    title: "Top 5 Trekking Trails for Beginners in Himachal",
    excerpt: "Discover the best trails to start your trekking journey in the Himalayas.",
    date: "Dec 10, 2025",
    author: "Amit Kumar",
    image: imgTrekking
  },
  {
    id: 2,
    title: "Exploring the Ancient Temples of Kangra Valley",
    excerpt: "A spiritual journey through the historic temples of Himachal Pradesh.",
    date: "Dec 05, 2025",
    author: "Priya Singh",
    image: imgCulture
  },
  {
    id: 3,
    title: "Traditional Himachali Cuisine You Must Try",
    excerpt: "From Siddu to Dham, explore the rich flavors of the mountains.",
    date: "Nov 28, 2025",
    author: "Rahul Verma",
    image: imgFood
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-accent font-medium tracking-wider uppercase mb-2 block">Travel Diaries</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Latest From Blog</h2>
          </div>
          <Button variant="outline" className="hidden md:flex">View All Posts</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              
              <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Read More <ArrowRight size={16} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
