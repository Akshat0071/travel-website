import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import PackageCard from "@/components/packages/PackageCard";
import PackageFilter from "@/components/packages/PackageFilter";
import { samplePackages, Package } from "@/data/packages";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Packages() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");
  const [duration, setDuration] = useState("all");
  const [sort, setSort] = useState("popular");
  const [priceRange, setPriceRange] = useState([50000]);
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter Logic
  const filteredPackages = useMemo(() => {
    let result = samplePackages.filter((pkg) => {
      // Search
      const matchesSearch = 
        pkg.title.toLowerCase().includes(search.toLowerCase()) || 
        pkg.region.toLowerCase().includes(search.toLowerCase());
      
      // Region
      const matchesRegion = region === "all" || pkg.region === region;

      // Duration
      let matchesDuration = true;
      if (duration === "short") matchesDuration = pkg.durationDays <= 3;
      if (duration === "medium") matchesDuration = pkg.durationDays >= 4 && pkg.durationDays <= 6;
      if (duration === "long") matchesDuration = pkg.durationDays >= 7;

      // Price
      const matchesPrice = pkg.price <= priceRange[0];

      return matchesSearch && matchesRegion && matchesDuration && matchesPrice;
    });

    // Sorting
    result.sort((a, b) => {
      if (sort === "price_low") return a.price - b.price;
      if (sort === "price_high") return b.price - a.price;
      if (sort === "duration_short") return a.durationDays - b.durationDays;
      // Default: Popularity (simulated by ID or isPopular flag if we had more logic, putting popular first)
      if (sort === "popular") return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      return 0;
    });

    return result;
  }, [search, region, duration, sort, priceRange]);

  const visiblePackages = filteredPackages.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/demo/image/upload/v1/hero_mountain1.jpg" 
            alt="Travel Packages" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            Traveler Packages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto"
          >
            Curated itineraries for every kind of traveler. From snowy peaks to spiritual retreats.
          </motion.p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <PackageFilter 
          onSearchChange={setSearch}
          onRegionChange={setRegion}
          onDurationChange={setDuration}
          onSortChange={setSort}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visiblePackages.length > 0 ? (
            visiblePackages.map((pkg) => (
              <motion.div key={pkg.id} variants={fadeInUp}>
                <PackageCard pkg={pkg} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-muted-foreground">
              No packages found matching your criteria.
            </div>
          )}
        </motion.div>

        {filteredPackages.length > visibleCount && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="group"
            >
              Load More <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-20 bg-primary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-4">Never Miss a Deal</h2>
            <p className="mb-8 opacity-90">Subscribe to get exclusive offers and travel inspiration directly to your inbox.</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
