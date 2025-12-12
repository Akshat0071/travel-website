import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Calendar } from "lucide-react";

interface ItineraryItem {
  day: number;
  title: string;
  description: string;
}

interface ItineraryProps {
  itinerary: ItineraryItem[];
}

export default function ItineraryAccordion({ itinerary }: ItineraryProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border p-6">
      <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
        <Calendar className="text-accent" /> Day-by-Day Itinerary
      </h3>
      
      <Accordion type="single" collapsible className="w-full">
        {itinerary.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b-border/50">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex text-left gap-4 items-center">
                <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded text-sm whitespace-nowrap">
                  Day {item.day}
                </span>
                <span className="font-semibold text-lg">{item.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pl-[4.5rem] leading-relaxed">
              <div className="relative border-l-2 border-border pl-4 ml-1 py-2">
                 {item.description}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
