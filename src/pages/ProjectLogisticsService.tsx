import { motion } from "motion/react";
import PageHeader from "../components/PageHeader";
import { Settings, Ruler, Map, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ProjectLogisticsService() {
  return (
    <div className="pb-24">
      <PageHeader 
        title="Project Logistics" 
        subtitle="End-to-end management of complex, high-value industrial projects from planning to final installation."
        image="https://images.unsplash.com/photo-1506784919140-50754a818655?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Specialized Solutions for Complex Projects</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our Project Logistics division handles the most challenging transportation tasks. We specialize in moving oversized, heavy, and high-value cargo for sectors like power, infrastructure, and manufacturing.
              </p>
              <div className="space-y-4">
                {[
                  "Detailed route surveys and feasibility studies",
                  "Handling of Over Dimensional Cargo (ODC)",
                  "Heavy lift operations and specialized equipment",
                  "End-to-end project management and coordination",
                  "On-site supervision and installation support"
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
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop" 
                alt="Project Logistics Operations" 
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
              <Ruler className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Route Surveys</h3>
              <p className="text-muted-foreground">Comprehensive analysis of routes to ensure safe passage for oversized cargo.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <Map className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Strategic Planning</h3>
              <p className="text-muted-foreground">Customized logistics plans tailored to the specific needs of your project.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <ShieldCheck className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Risk Management</h3>
              <p className="text-muted-foreground">Proactive identification and mitigation of risks throughout the project lifecycle.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
