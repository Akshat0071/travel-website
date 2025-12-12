import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Phone, Receipt } from "lucide-react";
import { safetyFeatures } from "@/data/taxis";

const iconMap: Record<string, any> = {
  "shield-check": ShieldCheck,
  "user-check": UserCheck,
  "phone": Phone,
  "receipt": Receipt
};

export default function SafetyFeatures() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-border shadow-sm flex flex-col items-center text-center"
              >
                <div className="bg-primary/10 p-4 rounded-full text-primary mb-4">
                  {Icon && <Icon size={28} />}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
