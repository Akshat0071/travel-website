import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

import imgBanner from "@assets/generated_images/panoramic_himachal_valley_sunset.png";

export default function CTABanner() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={imgBanner} 
          alt="Plan your trip" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Plan Your Himachal Trip Today
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl mx-auto font-light">
            Customized packages, reliable taxi services, and unforgettable memories await you.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
          >
            <MessageCircle className="mr-2" /> Chat on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
