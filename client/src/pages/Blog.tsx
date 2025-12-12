import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { sampleBlogs } from "@/data/blogs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");

  const categories = ["all", "Travel Guide", "Tips", "Food", "Culture"];

  const filteredBlogs = sampleBlogs.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCat === "all" || post.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <div className="bg-muted/30 py-20 md:py-28">
         <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4"
            >
              Travel Guides & Tips
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Expert advice, itineraries, and cultural insights to help you plan your perfect Himachal trip.
            </motion.p>
         </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
           <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              {categories.map(cat => (
                <Badge 
                  key={cat}
                  variant={selectedCat === cat ? "default" : "secondary"}
                  className="cursor-pointer px-4 py-2 text-sm whitespace-nowrap"
                  onClick={() => setSelectedCat(cat)}
                >
                  {cat}
                </Badge>
              ))}
           </div>
           <div className="relative w-full md:w-72">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
             <Input 
               placeholder="Search articles..." 
               className="pl-9" 
               value={search}
               onChange={(e) => setSearch(e.target.value)}
             />
           </div>
        </div>

        {/* Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredBlogs.map((post) => (
            <motion.div key={post.slug} variants={fadeInUp}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No articles found.
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
