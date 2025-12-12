import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Wallet, Map, Clock, MessageCircle } from "lucide-react";

const features = [
  {
    icon: <UserCheck size={32} />,
    title: "Local Experts",
    description: "Born and raised in Himachal, we know the hidden gems."
  },
  {
    icon: <Wallet size={32} />,
    title: "Affordable Packages",
    description: "Best prices guaranteed without compromising on quality."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Safe & Secure",
    description: "Verified drivers and 24/7 support for your safety."
  },
  {
    icon: <MessageCircle size={32} />,
    title: "Instant Booking",
    description: "Easy booking via WhatsApp with quick confirmation."
  },
  {
    icon: <Map size={32} />,
    title: "Custom Itineraries",
    description: "Tailor-made trips designed around your preferences."
  },
  {
    icon: <Clock size={32} />,
    title: "24/7 Support",
    description: "We are always just a phone call away during your trip."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We don't just sell packages; we craft unforgettable experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/50 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
