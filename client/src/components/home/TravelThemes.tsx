import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import imgSpiritual from "@assets/generated_images/spiritual_himachal_temple_detail.png";
import imgHoneymoon from "@assets/generated_images/romantic_couple_in_himalayas.png";
import imgAdventure from "@assets/generated_images/adventure_rafting_in_himachal.png";
import imgFamily from "@assets/generated_images/happy_family_picnic_in_meadow.png";

const themes = [
  {
    id: 1,
    title: "Spiritual Tours",
    image: imgSpiritual,
    description: "Visit ancient Shaktipeeths and monasteries."
  },
  {
    id: 2,
    title: "Honeymoon",
    image: imgHoneymoon,
    description: "Romantic getaways in secluded valleys."
  },
  {
    id: 3,
    title: "Adventure",
    image: imgAdventure,
    description: "Paragliding, rafting, and trekking thrills."
  },
  {
    id: 4,
    title: "Family Trips",
    image: imgFamily,
    description: "Relaxing vacations for the whole family."
  }
];

export default function TravelThemes() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="text-accent font-medium tracking-wider uppercase mb-2 block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Find Your Vibe
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Curated Travel Themes
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.id}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img 
                src={theme.image} 
                alt={theme.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-2xl font-serif font-bold mb-2 flex items-center justify-between">
                  {theme.title}
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {theme.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
