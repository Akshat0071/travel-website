import { motion } from "framer-motion";
import { Package } from "@/data/packages";
import PackageCard from "./PackageCard";

interface RelatedProps {
  currentPkgId: string;
  packages: Package[];
}

export default function RelatedPackagesCarousel({ currentPkgId, packages }: RelatedProps) {
  // Filter out current package and take up to 3 random ones
  const related = packages
    .filter(p => p.id !== currentPkgId)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-serif font-bold mb-8">You Might Also Like</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
