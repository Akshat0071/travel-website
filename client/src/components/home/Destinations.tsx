import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import generated images
import imgManali from "@assets/generated_images/snowy_manali_landscape.png";
import imgShimla from "@assets/generated_images/shimla_colonial_architecture.png";
import imgSpiti from "@assets/generated_images/spiti_valley_rugged_mountains.png";
import imgDharamshala from "@assets/generated_images/ancient_himachal_temple_with_mountains.png"; // Reusing temple for Dharamshala

const destinations = [
  {
    id: 1,
    name: "Manali",
    image: imgManali,
    duration: "4 Days / 3 Nights",
    price: "₹12,999",
    description: "Experience snow-capped peaks, Solang Valley adventures, and cozy cafes.",
  },
  {
    id: 2,
    name: "Shimla",
    image: imgShimla,
    duration: "3 Days / 2 Nights",
    price: "₹9,999",
    description: "Walk the Mall Road and explore the colonial charm of the Queen of Hills.",
  },
  {
    id: 3,
    name: "Spiti Valley",
    image: imgSpiti,
    duration: "7 Days / 6 Nights",
    price: "₹18,500",
    description: "Discover the middle land, ancient monasteries, and rugged landscapes.",
  },
  {
    id: 4,
    name: "Dharamshala",
    image: imgDharamshala,
    duration: "4 Days / 3 Nights",
    price: "₹11,500",
    description: "Visit the Dalai Lama Temple and experience Tibetan culture in Mcleodganj.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="text-accent font-medium tracking-wider uppercase mb-2 block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Explore
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Popular Destinations
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Handpicked packages for the most sought-after locations in Himachal Pradesh.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {destinations.map((dest) => (
            <motion.div 
              key={dest.id} 
              variants={item}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1 text-sm font-medium mb-1">
                    <Clock size={14} className="text-accent" />
                    <span>{dest.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                    {dest.name}
                  </h3>
                  <span className="text-lg font-bold text-primary">
                    {dest.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {dest.description}
                </p>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white group-hover:translate-y-0 transition-all">
                  View Details <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
