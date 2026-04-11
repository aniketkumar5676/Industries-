import { motion } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

const testimonials = [
  {
    quote: "We rely on Mandal Industries for critical logistics operations. Their reliability is unmatched and their team always delivers on time.",
    name: "Rajesh Kumar",
    title: "Operations Director, SteelCo",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "The level of professionalism and efficiency they bring to our supply chain has significantly reduced our operational costs.",
    name: "Sarah Jenkins",
    title: "Supply Chain Manager, TechCorp",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Handling our over-dimensional cargo was a breeze with Mandal. Their route planning and execution are flawless.",
    name: "Amit Patel",
    title: "Project Head, HeavyEngg",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"
          alt="Logistics Background"
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground mb-8 shadow-lg shadow-accent/20"
          >
            <Quote size={32} />
          </motion.div>
          
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-2xl md:text-4xl font-medium leading-tight mb-8 px-4 md:px-12"
                  >
                    "{testimonial.quote}"
                  </motion.blockquote>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center justify-center gap-4"
                  >
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-accent font-medium uppercase tracking-wider">{testimonial.title}</div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={scrollPrev}
              className="p-2 rounded-full bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border border-border backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollNext}
              className="p-2 rounded-full bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border border-border backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
