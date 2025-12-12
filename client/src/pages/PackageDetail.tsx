import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Check, Star, Download, MessageCircle, MapPin, Info } from "lucide-react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import PackageHeroSlider from "@/components/packages/PackageHeroSlider";
import ItineraryAccordion from "@/components/packages/ItineraryAccordion";
import RelatedPackagesCarousel from "@/components/packages/RelatedPackagesCarousel";
import { Button } from "@/components/ui/button";
import { samplePackages } from "@/data/packages";
import { formatCurrency, generateWhatsAppLink } from "@/lib/whatsapp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PackageDetail() {
  const params = useParams<{ slug: string }>();
  const [location, setLocation] = useLocation();
  
  const pkg = samplePackages.find(p => p.slug === params.slug);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-bold">Package Not Found</h1>
        <Button onClick={() => setLocation("/packages")}>Back to Packages</Button>
      </div>
    );
  }

  const handleBookNow = () => {
    const message = `Hi, I'm interested in the "${pkg.title}" package. Please share availability and booking details.`;
    window.open(generateWhatsAppLink("911234567890", message), "_blank");
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      <main className="pb-20">
        <PackageHeroSlider images={pkg.images} />

        <div className="container mx-auto px-4 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Header Info */}
              <div>
                 <div className="flex items-center gap-2 text-sm text-accent font-bold uppercase tracking-wider mb-2">
                   <MapPin size={16} /> {pkg.region}
                 </div>
                 <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                   {pkg.title}
                 </h1>
                 <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="bg-muted px-3 py-1 rounded-full">{pkg.duration}</span>
                    <span className="flex items-center gap-1 text-yellow-500 font-medium">
                      <Star size={16} fill="currentColor" /> {pkg.rating} ({pkg.reviewsCount} Reviews)
                    </span>
                 </div>
                 <p className="text-lg leading-relaxed text-muted-foreground">
                   {pkg.description}
                 </p>
              </div>

              {/* Highlights */}
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/10">
                <h3 className="text-2xl font-serif font-bold mb-6">Trip Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="bg-primary text-white p-1 rounded-full mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-foreground font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <ItineraryAccordion itinerary={pkg.itinerary} />

              {/* Inclusions / Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-700">Inclusions</h3>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" /> {inc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">Exclusions</h3>
                  <ul className="space-y-2">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Info size={16} className="text-red-500 mt-0.5 flex-shrink-0" /> {exc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="mt-8">
                 <h3 className="text-2xl font-serif font-bold mb-6">Frequently Asked Questions</h3>
                 <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is the cancellation policy?</AccordionTrigger>
                      <AccordionContent>
                        Free cancellation up to 7 days before departure. 50% refund if cancelled within 3-7 days.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is it safe for solo female travelers?</AccordionTrigger>
                      <AccordionContent>
                        Yes, Himachal is considered very safe. We also provide trusted drivers and safe accommodations.
                      </AccordionContent>
                    </AccordionItem>
                 </Accordion>
              </div>

            </div>

            {/* Right Column: Sticky Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl shadow-xl border border-border p-6">
                <div className="flex justify-between items-end mb-6">
                   <div>
                     <p className="text-sm text-muted-foreground">Starting from</p>
                     <p className="text-3xl font-bold text-primary">{formatCurrency(pkg.price)}</p>
                   </div>
                   <div className="text-right">
                     <p className="text-xs text-muted-foreground">per person</p>
                   </div>
                </div>

                <Button 
                  onClick={handleBookNow} 
                  className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6 mb-4 shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="mr-2" /> Book Now via WhatsApp
                </Button>

                <Button variant="outline" className="w-full mb-6">
                  <Download className="mr-2" size={16} /> Download Itinerary
                </Button>

                <div className="text-xs text-muted-foreground text-center space-y-2">
                  <p>Secure booking with instant confirmation</p>
                  <p>Customizable upon request</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <RelatedPackagesCarousel currentPkgId={pkg.id} packages={samplePackages} />
      </main>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 lg:hidden z-40 flex items-center justify-between shadow-[0_-5px_10px_rgba(0,0,0,0.1)]">
        <div>
           <p className="text-xs text-muted-foreground">Total Price</p>
           <p className="text-xl font-bold text-primary">{formatCurrency(pkg.price)}</p>
        </div>
        <Button onClick={handleBookNow} className="bg-accent text-white px-8">
          Book Now
        </Button>
      </div>

      <Footer />
    </div>
  );
}
