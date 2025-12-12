// src/components/home/TaxiService.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

// Try to import your local generated images. If these imports don't resolve
// in your environment, the component will fall back to remote placeholders.
import imgMountains from "@assets/generated_images/majestic_snow-capped_himalayan_peaks_at_sunrise.png";
import imgTemple from "@assets/generated_images/ancient_himachal_temple_with_mountains.png";
import imgRiver from "@assets/generated_images/crystal_clear_river_in_green_valley.png";
import imgTrekking from "@assets/generated_images/hikers_on_a_scenic_mountain_trail.png";
import imgParagliding from "@assets/generated_images/paragliding_over_green_valley.png";

/* ---------- Fallback remote images (Cloudinary/demo placeholders) ---------- */
const FALLBACK_SLIDES = [
  {
    id: "f1",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1/hero_mountain1.jpg",
    alt: "Majestic Himalayas (fallback)",
  },
  {
    id: "f2",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1/hero_temple1.jpg",
    alt: "Ancient Himachal Temple (fallback)",
  },
  {
    id: "f3",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1/hero_river1.jpg",
    alt: "Crystal River Valley (fallback)",
  },
  {
    id: "f4",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1/hero_trekking1.jpg",
    alt: "Scenic Mountain Trail (fallback)",
  },
  {
    id: "f5",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1/hero_paragliding1.jpg",
    alt: "Paragliding Over Valley (fallback)",
  },
];

/* ---------- Helper to resolve imported asset shapes to string src ---------- */
function resolveSrc(img: any): string {
  if (!img) return "";
  if (typeof img === "string") return img;
  if (typeof img === "object") {
    if ("default" in img && typeof img.default === "string") return img.default;
    if ("src" in img && typeof img.src === "string") return img.src;
  }
  try {
    return String(img);
  } catch {
    return "";
  }
}

/* ---------- Build slides from imports or fallbacks ---------- */
function buildSlidesFromImports() {
  const local = [
    { id: "s1", image: imgMountains, alt: "Majestic Himalayas" },
    { id: "s2", image: imgTemple, alt: "Ancient Himachal Temple" },
    { id: "s3", image: imgRiver, alt: "Crystal Clear River Valley" },
    { id: "s4", image: imgTrekking, alt: "Scenic Mountain Trail" },
    { id: "s5", image: imgParagliding, alt: "Paragliding Over Valley" },
  ];

  const resolved = local
    .map((s) => ({ id: s.id, image: resolveSrc(s.image), alt: s.alt }))
    .filter((s) => !!s.image);

  if (resolved.length === 0) return FALLBACK_SLIDES;
  if (resolved.length < 5) {
    const filled = [...resolved];
    for (const fb of FALLBACK_SLIDES) {
      if (filled.length >= 5) break;
      if (!filled.some((r) => r.image === fb.image)) filled.push(fb);
    }
    return filled.slice(0, 5);
  }
  return resolved.slice(0, 5);
}

/* ---------------- TaxiService Component ---------------- */
export default function TaxiService() {
  const slides = buildSlidesFromImports();

  // measurement ref & state
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [slideWidth, setSlideWidth] = useState<number>(0);

  // reduced motion detection
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !reduceMotion;

  // animation timing (discrete)
  const moveDuration = 0.6; // seconds to animate between slides
  const pauseDuration = 1.5; // seconds to pause on each slide
  const n = slides.length;
  const totalDuration = n * (moveDuration + pauseDuration);

  // Build px keyframes given measured width
  const buildFramesAndTimes = (w: number) => {
    const frames: string[] = [];
    const times: number[] = [];

    for (let k = 0; k < n; k++) {
      const posPx = -k * w;
      frames.push(`${posPx}px`); // arrival
      frames.push(`${posPx}px`); // hold

      times.push((k * (moveDuration + pauseDuration)) / totalDuration); // arrival
      times.push(
        (k * (moveDuration + pauseDuration) + pauseDuration) / totalDuration
      ); // hold
    }

    // Final endpoint into the duplicated block
    const finalPosPx = -n * w;
    frames.push(`${finalPosPx}px`);
    frames.push(`${finalPosPx}px`);
    times.push((n * (moveDuration + pauseDuration)) / totalDuration);
    times.push((n * (moveDuration + pauseDuration)) / totalDuration);

    return { frames, times, trackWidthPx: 2 * n * w };
  };

  // Measure viewport width with ResizeObserver (robust)
  useEffect(() => {
    const measure = () => {
      const el = viewportRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const w = Math.round(rect.width);
      if (w && w !== slideWidth) setSlideWidth(w);
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      if (viewportRef.current) ro.unobserve(viewportRef.current);
    };
  }, [slideWidth]);

  const measured = slideWidth > 0;
  const built = measured ? buildFramesAndTimes(slideWidth) : null;

  return (
    <section id="taxi" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image / Carousel Side */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* This is the measured viewport. Make sure it's position:relative & overflow:hidden */}
              <div
                ref={viewportRef}
                className="w-full h-72 md:h-[420px] lg:h-[480px] relative overflow-hidden bg-slate-800"
              >
                {/* Static fallback until measurement completes */}
                {!measured && (
                  <img
                    src={slides[0].image}
                    alt={slides[0].alt}
                    className="w-full h-full object-cover object-center block"
                    style={{ display: "block", width: "100%", height: "100%" }}
                  />
                )}

                {/* Animated track once measured and animations enabled */}
                {measured && shouldAnimate && built && (
                  <motion.div
                    key={slideWidth} // remount when slideWidth changes so animation restarts cleanly
                    className="flex h-full"
                    animate={{ x: built.frames }}
                    transition={{
                      duration: totalDuration,
                      times: built.times,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ width: `${built.trackWidthPx}px` }}
                    aria-hidden="true"
                  >
                    {[...slides, ...slides].map((s, idx) => (
                      <div
                        key={`${s.id}-${idx}`}
                        className="relative flex-shrink-0"
                        style={{
                          width: `${slideWidth}px`,
                          minWidth: `${slideWidth}px`,
                          height: "100%",
                        }}
                      >
                        <img
                          src={s.image}
                          alt={s.alt}
                          className="w-full h-full object-cover object-center"
                          style={{ display: "block", width: "100%", height: "100%" }}
                        />
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* If user prefers reduced motion, show the slides statically side-by-side */}
                {measured && !shouldAnimate && (
                  <div className="flex h-full">
                    {[...slides].map((s, idx) => (
                      <div
                        key={`static-${s.id}-${idx}`}
                        className="relative flex-shrink-0"
                        style={{
                          width: `${slideWidth}px`,
                          minWidth: `${slideWidth}px`,
                          height: "100%",
                        }}
                      >
                        <img
                          src={s.image}
                          alt={s.alt}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Overlay gradient (keeps images visible but not hidden) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay pointer-events-none" />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground">Verified Drivers</p>
                  <p className="text-sm text-muted-foreground">Safe & Reliable</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-medium tracking-wider uppercase mb-2 block">
              Comfortable Travel
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Premium Taxi Services
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Travel across Himachal Pradesh in comfort and style. Whether it's an airport pickup from Chandigarh or a sightseeing tour in Manali, our fleet of well-maintained SUVs and sedans ensures a smooth journey.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Pickups from Chandigarh, Delhi & Amritsar Airports",
                "Local Sightseeing in Manali, Shimla & Dharamshala",
                "Experienced drivers familiar with mountain terrain",
                "Clean, sanitized, and comfortable vehicles"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Phone className="mr-2" size={18} /> Book via WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                View Rates
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
