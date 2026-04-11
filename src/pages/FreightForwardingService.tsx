import { motion } from "motion/react";
import PageHeader from "../components/PageHeader";
import { Globe, FileText, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export default function FreightForwardingService() {
  return (
    <div className="pb-24">
      <PageHeader 
        title="Freight Forwarding" 
        subtitle="Global logistics coordination including customs clearance and international shipping."
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Seamless Global Logistics</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our freight forwarding services simplify international trade. We handle the complexities of global shipping, ensuring your cargo moves smoothly across borders and reaches its destination on time.
              </p>
              <div className="space-y-4">
                {[
                  "International sea and air freight coordination",
                  "Expert customs clearance and documentation",
                  "Door-to-door global delivery solutions",
                  "Cargo insurance and risk management",
                  "Real-time tracking of international shipments"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary" size={20} />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=800&auto=format&fit=crop" 
                alt="Freight Forwarding Operations" 
                className="rounded-2xl shadow-2xl w-full max-h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <FileText className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Customs Expertise</h3>
              <p className="text-muted-foreground">Navigating complex international regulations and documentation with ease.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <Globe className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Global Network</h3>
              <p className="text-muted-foreground">Connecting your business to major markets around the world through our partner network.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <Clock className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Reliable Transit</h3>
              <p className="text-muted-foreground">Ensuring timely delivery of your international shipments through optimized routing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
