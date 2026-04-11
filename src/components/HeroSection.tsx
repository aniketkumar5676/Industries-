import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop",
    title: "Warehousing & Distribution",
    description: "State-of-the-art storage solutions with inventory management and order fulfillment across major industrial hubs."
  },
  {
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1920&auto=format&fit=crop",
    title: "Full Truck Load (FTL)",
    description: "Dedicated transport solutions for large volume shipments across India with unmatched reliability and safety."
  },
  {
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1920&auto=format&fit=crop",
    title: "Project Logistics",
    description: "End-to-end management of complex, high-value industrial projects from planning to final installation."
  },
  {
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1920&auto=format&fit=crop",
    title: "Freight Forwarding",
    description: "Global logistics coordination including customs clearance, documentation, and international shipping."
  },
  {
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1920&auto=format&fit=crop",
    title: "ODC & Heavy Lift",
    description: "Specialized transport for oversized and heavy cargo like transformers and turbines with precision."
  }
];

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    skipSnaps: false,
    dragFree: false,
  }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Background Slider & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="embla h-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="embla__container h-full flex">
            {slides.map((slide, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 h-full relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Reduced opacity overlay for better visibility - pointer-events-none to allow dragging */}
        <div className="absolute inset-0 bg-slate-950/40 dark:bg-slate-950/50 pointer-events-none" />
        {/* Industrial Grid Pattern Overlay - pointer-events-none to allow dragging */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pointer-events-none">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary text-primary-foreground text-sm font-bold mb-6 uppercase tracking-wider"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
            </span>
            Integrated Logistics Provider
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-white">
                Mandal Industries – <br />
                <span className="text-accent">
                  {slides[selectedIndex].title}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                {slides[selectedIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pointer-events-auto"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-sm font-bold hover:bg-accent/90 transition-all hover:gap-3 shadow-lg hover:shadow-accent/25 uppercase tracking-wide"
            >
              Get Instant Quote
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/919608877131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-sm font-bold border border-accent text-accent bg-slate-900/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-colors uppercase tracking-wide"
            >
              WhatsApp Now
            </a>
          </motion.div>
          
          {/* Slider Indicators */}
          <div className="flex gap-2 mt-12 pointer-events-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  index === selectedIndex ? "w-8 bg-accent" : "w-4 bg-white/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
