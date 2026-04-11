import { motion } from "motion/react";
import PageHeader from "../components/PageHeader";
import { Train, Truck, Layers, Zap, CheckCircle2 } from "lucide-react";

export default function RailService() {
  return (
    <div className="pb-24">
      <PageHeader 
        title="Rail & Multimodal" 
        subtitle="Harnessing the power of rail networks for reliable long-distance transportation."
        image="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Strategic Multimodal Connectivity</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our multimodal services combine the speed of road transport with the volume capacity of rail. By integrating different modes of transport, we optimize routes to reduce costs and improve delivery reliability for long-haul shipments.
              </p>
              <div className="space-y-4">
                {[
                  "Containerized rail transport (CONCOR integration)",
                  "First-mile and last-mile road connectivity",
                  "Dedicated rakes for bulk industrial commodities",
                  "Reduced transit risk compared to pure road transport",
                  "Environmentally friendly logistics solutions"
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
                src="https://images.unsplash.com/photo-1515165562839-978bbcf18277?q=80&w=800&auto=format&fit=crop" 
                alt="Rail Logistics" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <Train className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Rail Freight</h3>
              <p className="text-muted-foreground">High-capacity transport for industrial goods using national rail corridors.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <Truck className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Road Integration</h3>
              <p className="text-muted-foreground">Seamless transfer between rail terminals and your warehouse or factory.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <Layers className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Optimized Routing</h3>
              <p className="text-muted-foreground">Advanced planning to find the most cost-effective mix of transport modes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
