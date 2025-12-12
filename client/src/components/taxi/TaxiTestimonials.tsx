import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import { taxiTestimonials } from "@/data/taxis";

export default function TaxiTestimonials() {
  return (
    <div className="bg-primary py-16 text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-10">What Our Riders Say</h2>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {taxiTestimonials.map((t, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-white">
                    <CardContent className="flex flex-col p-6">
                      <Quote className="text-accent mb-4 rotate-180" size={24} />
                      <p className="text-sm italic mb-6 leading-relaxed opacity-90 min-h-[80px]">
                        "{t.text}"
                      </p>
                      <div className="mt-auto">
                        <div className="flex text-accent mb-2">
                           {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                        <p className="font-bold">{t.name}</p>
                        <p className="text-xs opacity-70">{t.route}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/20 border-transparent hover:bg-white/40 text-white" />
          <CarouselNext className="bg-white/20 border-transparent hover:bg-white/40 text-white" />
        </Carousel>
      </div>
    </div>
  );
}
