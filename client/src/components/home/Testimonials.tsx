import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    city: "Mumbai",
    rating: 5,
    text: "The trip to Spiti Valley was absolutely magical. The driver was very experienced and the hotels were top-notch. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Priya Patel",
    city: "Ahmedabad",
    rating: 5,
    text: "We booked a honeymoon package for Manali. Everything was perfectly arranged, from the candlelight dinner to the sightseeing. Thank you!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Amit Verma",
    city: "Delhi",
    rating: 5,
    text: "Best taxi service in Himachal. The Innova was clean and comfortable. Our driver, Singh Ji, was very polite and guided us well.",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    city: "Bangalore",
    rating: 4,
    text: "Great experience trekking in Kasol. The guides were professional and safety was their priority. Will definitely come back.",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 5,
    name: "David Miller",
    city: "UK",
    rating: 5,
    text: "Incredible hospitality! Himachal is beautiful and this agency made sure we saw the best of it without any hassle.",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Slide every 5 seconds (includes pause)

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Guest Experiences
          </motion.h2>
          <p className="text-muted-foreground">What our travelers say about us</p>
        </div>

        <div className="relative max-w-4xl mx-auto h-[400px] md:h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full px-4"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative border border-border">
                <Quote className="absolute top-6 left-6 text-accent/20 rotate-180" size={60} />
                
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonials[current].image} 
                      alt={testimonials[current].name} 
                      className="w-20 h-20 rounded-full object-cover border-4 border-primary/10"
                    />
                  </div>
                  
                  <div className="text-center md:text-left flex-1">
                    <div className="flex justify-center md:justify-start gap-1 mb-3 text-yellow-400">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-foreground font-light italic mb-6 leading-relaxed">
                      "{testimonials[current].text}"
                    </p>
                    <div>
                      <h4 className="font-bold text-primary text-lg">{testimonials[current].name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonials[current].city}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 z-20">
            <Button variant="outline" size="icon" className="rounded-full bg-white shadow-lg hover:bg-accent hover:text-white border-none" onClick={prevSlide}>
              <ChevronLeft size={24} />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 z-20">
            <Button variant="outline" size="icon" className="rounded-full bg-white shadow-lg hover:bg-accent hover:text-white border-none" onClick={nextSlide}>
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
