import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Import generated images
import imgMountains from "@assets/generated_images/majestic_snow-capped_himalayan_peaks_at_sunrise.png";
import imgTemple from "@assets/generated_images/ancient_himachal_temple_with_mountains.png";
import imgRiver from "@assets/generated_images/crystal_clear_river_in_green_valley.png";
import imgTrekking from "@assets/generated_images/hikers_on_a_scenic_mountain_trail.png";
import imgParagliding from "@assets/generated_images/paragliding_over_green_valley.png";

const slides = [
  { id: 1, image: imgMountains, alt: "Majestic Himalayas" },
  { id: 2, image: imgTemple, alt: "Spiritual Journeys" },
  { id: 3, image: imgRiver, alt: "Serene Valleys" },
  { id: 4, image: imgTrekking, alt: "Adventure Trekking" },
  { id: 5, image: imgParagliding, alt: "Sky High Adventures" },
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Infinite Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          className="flex h-full"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 20, // Adjust speed
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: `${slides.length * 100}%` }}
        >
          {/* Duplicate slides for seamless loop */}
          {[...slides, ...slides].map((slide, index) => (
            <div key={`${slide.id}-${index}`} className="relative w-full h-full flex-shrink-0">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
        <div className="max-w-4xl">
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the <span className="text-accent italic">Divine</span> Himalayas
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From spiritual journeys to adrenaline-pumping adventures, discover the magic of Himachal Pradesh with us.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full">
              Explore Packages
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full">
              Taxi Booking
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
