import { motion } from "motion/react";
import StatsSection from "../components/StatsSection";
import PageHeader from "../components/PageHeader";

export default function About() {
  return (
    <div className="pb-16">
      <PageHeader 
        title="About Mandal Industries" 
        subtitle="Delivering 360-degree solutions tailored to modern industrial needs."
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-4">
                <span className="w-8 h-1 bg-primary"></span>
                Who We Are
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Mandal Industries was founded in 2018 with a clear vision — to provide dependable and efficient transport solutions in India. Starting from a small base with limited trucks, the company focused on local transport services.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Through dedication, hard work, and strong client relationships, we expanded our operations into: Packers & Movers, Car & Bike Transportation, Full Truck Load Services, Heavy Equipment Transport, and Over Dimensional Cargo (ODC).
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Over the years, we have successfully completed numerous projects across India, building trust with both individual customers and large industrial clients. We have also worked with reputed organizations such as the Defence Sector, BHEL, HAL, NPCIL, and various Steel & Power Plants.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Today, Mandal Industries stands as a trusted logistics partner, known for reliability, safety, and professional execution.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 hazard-stripe rounded-2xl transform -translate-x-4 translate-y-4 -z-10 hidden md:block" />
              <div className="rounded-2xl overflow-hidden aspect-video border-4 border-background shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Warehouse Operations" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border-t-4 border-t-primary border-x border-b border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-secondary text-foreground rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide high-quality logistics and transportation services with a focus on safety, efficiency, and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border-t-4 border-t-primary border-x border-b border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-secondary text-foreground rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h10"/><path d="M9 4v16"/><path d="m3 9 3 3-3 3"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become one of India’s most reliable and recognized logistics companies by delivering innovative and scalable transport solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection />
    </div>
  );
}
