import { useState } from "react";
import { motion } from "framer-motion";
import { PenTool, Search } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import DiaryCard from "@/components/diaries/DiaryCard";
import { sampleDiaries } from "@/data/diaries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Diaries() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const tags = ["all", "Adventure", "Spiritual", "Culture", "Nature", "Trekking"];

  const filteredDiaries = sampleDiaries.filter(diary => {
    const matchesSearch = diary.title.toLowerCase().includes(search.toLowerCase()) || 
                          diary.location.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag === "all" || diary.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero Banner */}
      <div className="relative py-24 md:py-32 bg-primary text-white overflow-hidden">
         <div className="absolute inset-0">
           <img 
             src="https://res.cloudinary.com/demo/image/upload/v1/diary_trek.jpg" 
             alt="Travel Diaries" 
             className="w-full h-full object-cover opacity-30"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95" />
         </div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-medium tracking-wider uppercase mb-2 block">Community Stories</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Travel Diaries</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto font-light mb-8">
                Real stories from real travelers. Discover the hidden gems of Himachal through their eyes.
              </p>
            </motion.div>
         </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 sticky top-20 z-30 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-border shadow-sm">
           
           <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
              {tags.map(tag => (
                <Badge 
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 rounded-full text-sm whitespace-nowrap ${selectedTag === tag ? 'bg-primary text-white' : 'hover:bg-muted'}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </Badge>
              ))}
           </div>

           <div className="relative w-full md:w-72">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
             <Input 
               placeholder="Search stories..." 
               className="pl-9 bg-muted/50 border-none" 
               value={search}
               onChange={(e) => setSearch(e.target.value)}
             />
           </div>
        </div>

        {/* Featured Diary (First item if no filter) */}
        {search === "" && selectedTag === "all" && filteredDiaries.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-16 relative rounded-2xl overflow-hidden aspect-[21/9] group cursor-pointer"
          >
             <Link href={`/diaries/${filteredDiaries[0].slug}`}>
               <img 
                 src={filteredDiaries[0].image} 
                 alt={filteredDiaries[0].title}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
               <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white max-w-3xl">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Featured Story</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">{filteredDiaries[0].title}</h2>
                  <p className="text-lg opacity-90 line-clamp-2 mb-6">{filteredDiaries[0].excerpt}</p>
                  <div className="flex items-center gap-3">
                    <img src={filteredDiaries[0].author.avatar} className="w-10 h-10 rounded-full border-2 border-white" />
                    <div>
                      <p className="font-bold text-sm">{filteredDiaries[0].author.name}</p>
                      <p className="text-xs opacity-70">{filteredDiaries[0].date}</p>
                    </div>
                  </div>
               </div>
             </Link>
          </motion.div>
        )}

        {/* Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {(search === "" && selectedTag === "all" ? filteredDiaries.slice(1) : filteredDiaries).map((diary) => (
            <motion.div key={diary.slug} variants={fadeInUp}>
              <DiaryCard diary={diary} />
            </motion.div>
          ))}
        </motion.div>

        {filteredDiaries.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No stories found matching your criteria.
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
