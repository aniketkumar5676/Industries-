import { motion } from "motion/react";
import PageHeader from "../components/PageHeader";
import { Warehouse, Package, BarChart3, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function WarehousingService() {
  return (
    <div className="pb-24">
      <PageHeader 
        title="Warehousing & Distribution" 
        subtitle="State-of-the-art storage solutions with inventory management and order fulfillment."
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Smart Warehousing Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our warehousing facilities are strategically located to optimize your distribution network. We provide secure storage and efficient handling for a wide range of industrial and commercial goods.
              </p>
              <div className="space-y-4">
                {[
                  "Modern warehouse management systems (WMS)",
                  "Inventory tracking and real-time reporting",
                  "Order fulfillment and secondary distribution",
                  "Cross-docking and value-added services",
                  "24/7 security and climate-controlled options"
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
                src="https://images.unsplash.com/photo-1587293855946-9021e63f386d?q=80&w=800&auto=format&fit=crop" 
                alt="Warehouse Operations" 
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
              <Package className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Inventory Management</h3>
              <p className="text-muted-foreground">Precise tracking of stock levels and movement for optimal supply chain efficiency.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <BarChart3 className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Order Fulfillment</h3>
              <p className="text-muted-foreground">Fast and accurate picking, packing, and shipping of orders to your customers.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <ShieldCheck className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Secure Storage</h3>
              <p className="text-muted-foreground">Safe and secure facilities with advanced monitoring and fire protection systems.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
