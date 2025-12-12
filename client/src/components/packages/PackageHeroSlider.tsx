import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSliderProps {
  images: string[];
}

export default function PackageHeroSlider({ images }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative h-[60vh] w-full overflow-hidden rounded-b-3xl shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt="Package Hero"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-black/20 backdrop-blur-md border-white/20 text-white hover:bg-white/20 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-black/20 backdrop-blur-md border-white/20 text-white hover:bg-white/20 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </Button>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
