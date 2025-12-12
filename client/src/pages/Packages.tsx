// src/pages/Packages.tsx
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import PackageCard from "@/components/packages/PackageCard";
import PackageFilter from "@/components/packages/PackageFilter";
import { samplePackages } from "@/data/packages";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Use the same images as Home hero (local static imports)
import imgMountains from "@assets/generated_images/majestic_snow-capped_himalayan_peaks_at_sunrise.png";
import imgTemple from "@assets/generated_images/ancient_himachal_temple_with_mountains.png";
import imgRiver from "@assets/generated_images/crystal_clear_river_in_green_valley.png";
import imgTrekking from "@assets/generated_images/hikers_on_a_scenic_mountain_trail.png";
import imgParagliding from "@assets/generated_images/paragliding_over_green_valley.png";

/**
 * Packages Page (Vite + React)
 * - Hero uses the same discrete slide -> pause -> slide animation as Home
 * - Uses standard <img/> tags so it works in a Vite environment
 */

const heroSlides = [
  { id: "h1", image: imgMountains, alt: "Majestic Himalayas" },
  { id: "h2", image: imgTemple, alt: "Ancient Himachal Temple" },
  { id: "h3", image: imgRiver, alt: "Crystal Clear River Valley" },
  { id: "h4", image: imgTrekking, alt: "Scenic Mountain Trail Trekking" },
  { id: "h5", image: imgParagliding, alt: "Paragliding Over Valley" },
];

export default function Packages(): JSX.Element {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");
  const [duration, setDuration] = useState("all");
  const [sort, setSort] = useState("popular");
  const [priceRange, setPriceRange] = useState([50000]);
  const [visibleCount, setVisibleCount] = useState(6);

  // --- Filter & sort logic (unchanged) ---
  const filteredPackages = useMemo(() => {
    let result = samplePackages.filter((pkg) => {
      const matchesSearch =
        pkg.title.toLowerCase().includes(search.toLowerCase()) ||
        pkg.region.toLowerCase().includes(search.toLowerCase());

      const matchesRegion = region === "all" || pkg.region === region;

      let matchesDuration = true;
      if (duration === "short") matchesDuration = pkg.durationDays <= 3;
      if (duration === "medium")
        matchesDuration = pkg.durationDays >= 4 && pkg.durationDays <= 6;
      if (duration === "long") matchesDuration = pkg.durationDays >= 7;

      const matchesPrice = pkg.price <= priceRange[0];

      return matchesSearch && matchesRegion && matchesDuration && matchesPrice;
    });

    // Sorting
    result.sort((a, b) => {
      if (sort === "price_low") return a.price - b.price;
      if (sort === "price_high") return b.price - a.price;
      if (sort === "duration_short") return a.durationDays - b.durationDays;
      if (sort === "popular")
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      return 0;
    });

    return result;
  }, [search, region, duration, sort, priceRange]);

  const visiblePackages = filteredPackages.slice(0, visibleCount);

  // --- HERO CAROUSEL TIMING & KEYFRAMES (discrete step behavior) ---
  const moveDuration = 0.6; // time to slide between slides (seconds)
  const pauseDuration = 1.5; // pause duration on each slide (seconds)
  const slides = heroSlides;
  const n = slides.length;
  const totalDuration = n * (moveDuration + pauseDuration);

  // Build frames & times arrays for Framer Motion keyframes (using vw units so each slide == 100vw)
  const frames: string[] = [];
  const times: number[] = [];
  for (let k = 0; k < n; k++) {
    const pos = `${-k * 100}vw`;
    // arrival
    frames.push(pos);
    // hold
    frames.push(pos);

    times.push((k * (moveDuration + pauseDuration)) / totalDuration); // arrival time
    times.push(
      (k * (moveDuration + pauseDuration) + pauseDuration) / totalDuration
    ); // hold time
  }
  // final endpoint (move into duplicated slides block)
  const finalPos = `${-n * 100}vw`;
  frames.push(finalPos);
  frames.push(finalPos);
  times.push((n * (moveDuration + pauseDuration)) / totalDuration);
  times.push((n * (moveDuration + pauseDuration)) / totalDuration);

  // Track width (original + duplicate) in vw so each slide = 100vw exactly
  const trackWidthVW = 2 * n * 100;

  // Hero height settings
  const heroHeightClass = "h-[40vh] min-h-[300px]";

  return (
    <div className="min-h-screen bg-background font-sans text-slate-900">
      <Header />

      {/* Animated Hero */}
      <section
        aria-label="Packages hero"
        className={`relative ${heroHeightClass} flex items-center justify-center text-white overflow-hidden`}
      >
        {/* Carousel track (absolute so overlay sits above) */}
        <div className="absolute inset-0 w-full h-full">
          <motion.div
            className="flex h-full"
            animate={{ x: frames }}
            transition={{
              duration: totalDuration,
              times: times,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: `${trackWidthVW}vw` }}
            // improve rendering during transforms
            aria-hidden="true"
          >
            {[...slides, ...slides].map((slide, index) => (
              <div
                key={`${slide.id}-${index}`}
                className="relative flex-shrink-0"
                style={{ width: "100vw", minWidth: "100vw", height: "100%" }}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center"
                  style={{ display: "block", width: "100%", height: "100%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60 pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Overlay text & CTA */}
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight"
          >
            Traveler Packages
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto"
          >
            Curated itineraries for every kind of traveler — from snowy peaks to spiritual retreats.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
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
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="group inline-flex items-center"
            >
              Load More
              <ChevronDown className="ml-2 transition-transform group-hover:-translate-y-1" />
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
