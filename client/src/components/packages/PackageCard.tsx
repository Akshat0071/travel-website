import { motion } from "framer-motion";
import { Link } from "wouter";
import { Star, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Package } from "@/data/packages";
import { scaleUp } from "@/lib/animations";
import { formatCurrency } from "@/lib/whatsapp";

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <motion.div
      variants={scaleUp}
      className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={pkg.images[0]}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {pkg.isPopular && (
            <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              Popular
            </span>
          )}
          {pkg.isNew && (
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              New
            </span>
          )}
        </div>

        {/* Region Badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white/90 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md text-sm">
          <MapPin size={14} />
          <span>{pkg.region}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {pkg.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-yellow-400">
            <Star size={16} fill="currentColor" />
          </div>
          <span className="text-sm font-medium">{pkg.rating}</span>
          <span className="text-xs text-muted-foreground">({pkg.reviewsCount} reviews)</span>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
          {pkg.description}
        </p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 bg-muted/50 p-2 rounded-lg">
          <Clock size={16} className="text-accent" />
          <span>{pkg.duration}</span>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-lg font-bold text-primary">{formatCurrency(pkg.price)}</p>
          </div>
          <Link href={`/packages/${pkg.slug}`}>
            <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white shadow-sm">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
