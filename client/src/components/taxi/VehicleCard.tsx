import { motion } from "framer-motion";
import { Users, Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VehicleType } from "@/data/taxis";
import { formatCurrency } from "@/lib/whatsapp";

interface VehicleCardProps {
  vehicle: VehicleType;
  onSelect: (vehicle: VehicleType) => void;
}

export default function VehicleCard({ vehicle, onSelect }: VehicleCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-card rounded-xl overflow-hidden shadow-md border border-border group"
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {vehicle.category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-1">{vehicle.name}</h3>
        <div className="flex gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1"><Users size={14} /> {vehicle.capacity} Pax</span>
          <span className="flex items-center gap-1"><Briefcase size={14} /> {vehicle.luggage} Bags</span>
        </div>
        
        <div className="space-y-2 mb-4">
           {vehicle.features.slice(0, 3).map((feature, i) => (
             <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
               <CheckCircle2 size={12} className="text-green-500" /> {feature}
             </div>
           ))}
        </div>

        <div className="flex items-end justify-between mt-4 pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Rate</p>
            <p className="text-lg font-bold text-primary">₹{vehicle.ratePerKm}<span className="text-sm font-normal text-muted-foreground">/km</span></p>
          </div>
          <Button onClick={() => onSelect(vehicle)} className="bg-accent hover:bg-accent/90 text-white">
            Select
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
