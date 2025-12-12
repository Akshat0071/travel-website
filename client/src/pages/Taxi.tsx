// src/pages/Taxi.tsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import VehicleCard from "@/components/taxi/VehicleCard";
import RouteCard from "@/components/taxi/RouteCard";
import TaxiBookingForm from "@/components/taxi/TaxiBookingForm";
import SafetyFeatures from "@/components/taxi/SafetyFeatures";
import TaxiTestimonials from "@/components/taxi/TaxiTestimonials";
import { vehicleTypes, commonRoutes, taxiFaqs } from "@/data/taxis";
import { Phone, MapPin, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Local hero images (same as Home/Packages). Update paths if your alias differs.
import imgMountains from "@assets/generated_images/majestic_snow-capped_himalayan_peaks_at_sunrise.png";
import imgTemple from "@assets/generated_images/ancient_himachal_temple_with_mountains.png";
import imgRiver from "@assets/generated_images/crystal_clear_river_in_green_valley.png";
import imgTrekking from "@assets/generated_images/hikers_on_a_scenic_mountain_trail.png";
import imgParagliding from "@assets/generated_images/paragliding_over_green_valley.png";

export default function Taxi() {
  const scrollToBooking = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  // ---------- Hero carousel configuration ----------
  // Slides (use the same 5 images as Home/Packages)
  const slides = [
    { id: "s1", image: imgMountains, alt: "Majestic Himalayas" },
    { id: "s2", image: imgTemple, alt: "Ancient Himachal Temple" },
    { id: "s3", image: imgRiver, alt: "Crystal Clear River Valley" },
    { id: "s4", image: imgTrekking, alt: "Scenic Mountain Trail" },
    { id: "s5", image: imgParagliding, alt: "Paragliding Over Valley" },
  ];

  // Timing: discrete slide -> pause -> slide
  const moveDuration = 0.6; // seconds to slide between slides
  const pauseDuration = 1.5; // seconds to pause on each slide
  const n = slides.length;
  const totalDuration = n * (moveDuration + pauseDuration);

  // Build keyframes & times using vw so each slide == 100vw
  const frames: string[] = [];
  const times: number[] = [];
  for (let k = 0; k < n; k++) {
    const pos = `${-k * 100}vw`;
    frames.push(pos); // arrival
    frames.push(pos); // hold

    times.push((k * (moveDuration + pauseDuration)) / totalDuration); // arrival time
    times.push((k * (moveDuration + pauseDuration) + pauseDuration) / totalDuration); // hold time
  }
  // final endpoint (move into the duplicated block)
  const finalPos = `${-n * 100}vw`;
  frames.push(finalPos);
  frames.push(finalPos);
  times.push((n * (moveDuration + pauseDuration)) / totalDuration);
  times.push((n * (moveDuration + pauseDuration)) / totalDuration);

  // track width for duplicated slides (in vw)
  const trackWidthVW = 2 * n * 100;

  // Respect reduced motion preference
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !reduceMotion;

  return (
    <div className="min-h-screen bg-background font-sans text-slate-900">
      <Header />

      {/* Hero Section - replaced static image with animated carousel */}
      <header className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden" aria-label="Taxi hero">
        {/* Carousel track (absolute full-bleed) */}
        <div className="absolute inset-0">
          {/* If reduced motion, render first slide statically */}
          {shouldAnimate ? (
            <motion.div
              className="flex h-full"
              animate={{ x: frames }}
              transition={{
                duration: totalDuration,
                times: times,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ width: `${trackWidthVW}vw` }}
              aria-hidden="true"
            >
              {[...slides, ...slides].map((slide, idx) => (
                <div
                  key={`${slide.id}-${idx}`}
                  className="relative flex-shrink-0"
                  style={{ width: "100vw", minWidth: "100vw", height: "100%" }}
                >
                  <img
                    src={String(slide.image)}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center"
                    style={{ display: "block", width: "100%", height: "100%" }}
                  />
                </div>
              ))}
            </motion.div>
          ) : (
            // reduced-motion fallback: static first image
            <div className="w-full h-full">
              <img
                src={String(slides[0].image)}
                alt={slides[0].alt}
                className="w-full h-full object-cover object-center"
                style={{ display: "block", width: "100%", height: "100%" }}
              />
            </div>
          )}

          {/* Dark gradient overlay to improve readability of foreground */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 pointer-events-none" />
        </div>

        {/* Foreground container (content aligned within container) */}
        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <span className="text-accent font-bold uppercase tracking-wider mb-2 block">Premium & Reliable</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Taxi Services Across Himachal
            </h1>
            <p className="text-lg opacity-90 mb-8 max-w-lg">
              Airport pickups, sightseeing tours, and outstation cabs. Safe drivers, clean cars, and transparent pricing.
            </p>
            <div className="flex gap-4">
              <Button onClick={scrollToBooking} size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Book a Cab
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm">
                <Phone className="mr-2" size={18} /> Call Now
              </Button>
            </div>

            <div className="flex gap-6 mt-12 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold text-accent">10+</p>
                <p className="text-sm opacity-70">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">5000+</p>
                <p className="text-sm opacity-70">Happy Riders</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">100%</p>
                <p className="text-sm opacity-70">Safety Record</p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        {/* Vehicle Types */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Fleet</h2>
              <p className="text-muted-foreground">Choose the perfect vehicle for your journey</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vehicleTypes.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} onSelect={scrollToBooking} />
              ))}
            </div>
          </div>
        </section>

        {/* Popular Routes */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Popular Routes</h2>
              <p className="text-muted-foreground">Fixed price packages for common destinations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonRoutes.map((route) => (
                <RouteCard key={route.id} route={route} />
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking-form" className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Ride?</h2>
                <p className="text-xl opacity-90 mb-8 font-light">
                  Fill out the form to get an instant quote and booking confirmation via WhatsApp. No advance payment required for inquiry.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full"><MapPin size={20} /></div>
                    <span>Door-to-door pickup & drop</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full"><Phone size={20} /></div>
                    <span>Driver details shared 2 hours before trip</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full"><UserCheck size={20} /></div>
                    <span>Professional & polite chauffeurs</span>
                  </li>
                </ul>
              </div>

              <TaxiBookingForm />
            </div>
          </div>
        </section>

        <SafetyFeatures />

        <TaxiTestimonials />

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
              {taxiFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-medium text-lg">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
