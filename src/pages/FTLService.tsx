import { motion } from "motion/react";
import PageHeader from "../components/PageHeader";
import { Truck, Shield, Clock, MapPin, CheckCircle2 } from "lucide-react";

export default function FTLService() {
  return (
    <div className="pb-24">
      <PageHeader 
        title="Full Truck Load (FTL)" 
        subtitle="Dedicated transport solutions for high-volume cargo with pan-India reach."
        image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Optimized Logistics for Bulk Shipments</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our Full Truck Load (FTL) services are designed for businesses that require the exclusive use of a truck for their shipments. Whether you're moving industrial raw materials or finished consumer goods, we provide the right vehicle for your specific needs.
              </p>
              <div className="space-y-4">
                {[
                  "Dedicated vehicles for faster transit times",
                  "Direct door-to-door delivery without transshipment",
                  "Real-time GPS tracking for every shipment",
                  "Range of vehicles from 14ft to 32ft containers",
                  "Specialized handling for fragile or high-value cargo"
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
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop" 
                alt="FTL Transport" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Service Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <Shield className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Full Insurance Cover</h3>
              <p className="text-muted-foreground">Comprehensive transit insurance options to protect your valuable cargo against any unforeseen events.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <Clock className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
              <p className="text-muted-foreground">Strict adherence to delivery schedules with a 98% track record of arriving within the promised window.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <MapPin className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Pan-India Network</h3>
              <p className="text-muted-foreground">Extensive reach covering even the most remote locations across the Indian subcontinent.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
