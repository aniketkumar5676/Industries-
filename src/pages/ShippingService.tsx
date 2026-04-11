import { motion } from "motion/react";
import PageHeader from "../components/PageHeader";
import { Anchor, Ship, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ShippingService() {
  return (
    <div className="pb-24">
      <PageHeader 
        title="Shipping & Coastal" 
        subtitle="Cost-effective maritime logistics for bulk commodities and industrial goods."
        image="https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Efficient Coastal Logistics</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our coastal shipping services offer a sustainable and economical alternative to road transport for bulk commodities. We leverage India's extensive coastline to move large volumes of cargo between major ports with high efficiency.
              </p>
              <div className="space-y-4">
                {[
                  "Port-to-port and door-to-door integration",
                  "Handling of bulk, break-bulk, and containerized cargo",
                  "Significant cost savings on long-distance hauls",
                  "Lower carbon footprint compared to road transport",
                  "Expertise in customs and port documentation"
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
                src="https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&w=800&auto=format&fit=crop" 
                alt="Coastal Shipping" 
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
              <Ship className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Vessel Chartering</h3>
              <p className="text-muted-foreground">Tailored chartering solutions for unique cargo requirements and specific project timelines.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <Globe className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Multimodal Linkage</h3>
              <p className="text-muted-foreground">Seamless connection between sea, rail, and road for a complete end-to-end supply chain.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <ShieldCheck className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Cargo Security</h3>
              <p className="text-muted-foreground">Advanced lashing and securing techniques to ensure cargo safety during maritime transit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
