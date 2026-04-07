import { motion } from "motion/react";
import ServicesGrid from "../components/ServicesGrid";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Services() {
  const supplyChainFeatures = [
    "Full Truck Load (FTL)",
    "Part Truck Load (PTL)",
    "Inventory & warehouse management",
    "Last-mile delivery",
  ];

  return (
    <div className="pb-16">
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive logistics and supply chain solutions designed for modern industrial needs."
        image="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop"
      />

      <ServicesGrid />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm mb-4">
                <span className="w-8 h-1 bg-accent"></span>
                Supply Chain
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">End-to-End Solutions</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We provide end-to-end supply chain management that optimizes your operations from origin to destination. Our tailored approach ensures efficiency at every step.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {supplyChainFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 bg-secondary/50 p-4 rounded-xl border-l-4 border-l-accent border-y border-r border-border">
                    <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute -inset-4 hazard-stripe rounded-2xl transform translate-x-4 -translate-y-4 -z-10 hidden md:block" />
              <div className="rounded-2xl overflow-hidden aspect-video border-4 border-background shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Supply Chain Operations" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
