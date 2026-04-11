import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const aboutImages = [
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop",
];

export default function AboutSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  const features = [
    "Proven industry expertise",
    "Pan-region logistics network",
    "Reliable and scalable operations",
    "End-to-end customized solutions",
  ];

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Yellow decorative box behind image */}
            <div className="absolute -inset-4 hazard-stripe rounded-2xl transform translate-x-4 translate-y-4 -z-10 hidden md:block" />
            
            {/* Image Slider */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border-4 border-background shadow-2xl relative z-10">
              <div className="embla h-full" ref={emblaRef}>
                <div className="embla__container h-full flex">
                  {aboutImages.map((img, index) => (
                    <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 h-full relative">
                      <img
                        src={img}
                        alt={`Logistics Operations ${index + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-slate-950 text-white p-6 rounded-xl shadow-xl hidden md:block z-20 border border-slate-800">
              <div className="text-4xl font-bold text-accent mb-1">10+</div>
              <div className="text-sm font-medium uppercase tracking-wider">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-12"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-4">
              <span className="w-8 h-1 bg-primary"></span>
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Delivering 360-Degree Logistics Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Mandal Industries is a professionally managed logistics company headquartered in Patna, Bihar. Since 2018, we have grown into a multi-dimensional logistics service provider, handling everything from small household goods to large-scale industrial and ODC cargo.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary shrink-0" size={24} />
                  <span className="font-semibold text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-wide shadow-md"
            >
              More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
