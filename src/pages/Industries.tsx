import { motion } from "motion/react";
import IndustriesSection from "../components/IndustriesSection";
import PageHeader from "../components/PageHeader";

export default function Industries() {
  return (
    <div className="pb-16">
      <PageHeader 
        title="Industries We Serve" 
        subtitle="Tailored logistics solutions for specialized industrial sectors."
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
      />

      <IndustriesSection />
      
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-4">
              <span className="w-8 h-1 bg-primary"></span>
              Expertise
              <span className="w-8 h-1 bg-primary"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Industry Specialization Matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Different industries have vastly different logistics requirements. A one-size-fits-all approach doesn't work when handling sensitive power equipment versus bulk cement. Our deep domain expertise ensures that your cargo is handled according to the specific regulations, safety standards, and operational realities of your industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-card p-8 rounded-xl border-t-4 border-t-primary border-x border-b border-border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl mb-3">Compliance</h3>
                <p className="text-muted-foreground">We navigate the complex regulatory landscapes specific to each sector, ensuring full compliance.</p>
              </div>
              <div className="bg-card p-8 rounded-xl border-t-4 border-t-primary border-x border-b border-border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl mb-3">Safety</h3>
                <p className="text-muted-foreground">Industry-specific safety protocols are strictly adhered to, minimizing risk to personnel and cargo.</p>
              </div>
              <div className="bg-card p-8 rounded-xl border-t-4 border-t-primary border-x border-b border-border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl mb-3">Efficiency</h3>
                <p className="text-muted-foreground">Understanding your industry allows us to anticipate challenges and optimize routes and methods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
