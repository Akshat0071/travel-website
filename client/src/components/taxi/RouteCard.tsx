import { motion } from "framer-motion";
import { Map, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RouteTemplate } from "@/data/taxis";
import { formatCurrency, generateWhatsAppLink } from "@/lib/whatsapp";

interface RouteCardProps {
  route: RouteTemplate;
}

export default function RouteCard({ route }: RouteCardProps) {
  const handleBook = () => {
    const message = `Hi, I want to book a taxi for route: ${route.from} to ${route.to}. Please provide details.`;
    window.open(generateWhatsAppLink("911234567890", message), "_blank");
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg p-5 shadow-sm border border-border hover:border-primary/30 transition-all"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-primary">
          <Map size={20} />
          <h4 className="font-bold text-lg">{route.from} <span className="text-muted-foreground mx-1">→</span> {route.to}</h4>
        </div>
        {route.isPopular && (
           <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
             Popular
           </span>
        )}
      </div>
      
      <div className="flex gap-4 text-sm text-muted-foreground mb-4">
        <span>{route.distance}</span>
        <span>•</span>
        <span>{route.duration}</span>
      </div>
      
      <div className="space-y-2 mb-4 bg-muted/30 p-3 rounded text-sm">
        <div className="flex justify-between">
          <span>Sedan</span>
          <span className="font-bold">{formatCurrency(route.priceSedan)}</span>
        </div>
        <div className="flex justify-between">
          <span>SUV</span>
          <span className="font-bold">{formatCurrency(route.priceSUV)}</span>
        </div>
      </div>
      
      <Button variant="outline" className="w-full hover:bg-primary hover:text-white" onClick={handleBook}>
        Book This Route <ArrowRight size={16} className="ml-2" />
      </Button>
    </motion.div>
  );
}
