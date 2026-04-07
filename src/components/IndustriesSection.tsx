import { motion } from "motion/react";
import { Train, Zap, Droplet, Factory, HardHat, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

const industries = [
  { 
    name: "Rail & Transit", 
    icon: <Train size={24} />,
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800&auto=format&fit=crop"
  },
  { 
    name: "Power & Energy", 
    icon: <Zap size={24} />,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
  },
  { 
    name: "Oil & Gas", 
    icon: <Droplet size={24} />,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop"
  },
  { 
    name: "Steel & Cement", 
    icon: <Factory size={24} />,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop"
  },
  { 
    name: "Heavy Engineering", 
    icon: <HardHat size={24} />,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
  },
];

export default function IndustriesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 4000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm mb-4">
              <span className="w-8 h-1 bg-accent"></span>
              Sectors
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground text-lg">
              Mandal Industries provides specialized, tailored logistics solutions across core industrial sectors, understanding the unique challenges of each.
            </p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={scrollPrev}
              className="p-3 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="p-3 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {industries.map((industry, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative h-80 rounded-2xl overflow-hidden group border border-border"
                >
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{industry.name}</h3>
                      <div className="w-12 h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center backdrop-blur-sm group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      {industry.icon}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
