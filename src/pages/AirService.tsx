import { motion } from "motion/react";
import PageHeader from "../components/PageHeader";
import { Plane, Clock, ShieldCheck, Globe, CheckCircle2 } from "lucide-react";

export default function AirService() {
  return (
    <div className="pb-24">
      <PageHeader 
        title="Air Cargo" 
        subtitle="Express delivery solutions for your most time-sensitive shipments."
        image="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Speed and Reliability in the Air</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                When time is of the essence, our air cargo services provide the fastest possible transit for your goods. We work with leading airlines to ensure priority handling and guaranteed space for your urgent industrial components or high-value products.
              </p>
              <div className="space-y-4">
                {[
                  "Next-flight-out services for critical shipments",
                  "Door-to-door express delivery across India",
                  "Specialized handling for temperature-sensitive goods",
                  "Real-time tracking from pickup to final delivery",
                  "Expert customs clearance for international air freight"
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
                alt="Air Freight" 
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
              <Clock className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Express Transit</h3>
              <p className="text-muted-foreground">The fastest mode of transport for urgent spare parts and critical inventory.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <ShieldCheck className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Secure Handling</h3>
              <p className="text-muted-foreground">Enhanced security measures for high-value electronics and sensitive equipment.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <Globe className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-muted-foreground">Connecting your business to international markets via major global air hubs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
