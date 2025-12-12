import { motion } from "framer-motion";
import { CheckCircle2, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

import imgTaxi from "@assets/generated_images/suv_taxi_on_scenic_mountain_road.png";

export default function TaxiService() {
  return (
    <section id="taxi" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={imgTaxi} 
                alt="Premium Taxi Service" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground">Verified Drivers</p>
                  <p className="text-sm text-muted-foreground">Safe & Reliable</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-medium tracking-wider uppercase mb-2 block">
              Comfortable Travel
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Premium Taxi Services
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Travel across Himachal Pradesh in comfort and style. Whether it's an airport pickup from Chandigarh or a sightseeing tour in Manali, our fleet of well-maintained SUVs and sedans ensures a smooth journey.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Pickups from Chandigarh, Delhi & Amritsar Airports",
                "Local Sightseeing in Manali, Shimla & Dharamshala",
                "Experienced drivers familiar with mountain terrain",
                "Clean, sanitized, and comfortable vehicles"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Phone className="mr-2" size={18} /> Book via WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                View Rates
              </Button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
