import { motion } from "motion/react";

const clients = [
  { name: "ArcelorMittal", logo: "https://i.ibb.co/sJP4NMsf/Arcelor-Mittal-1-1.png" },
  { name: "Jindal Steel", logo: "https://i.ibb.co/JRC4vwKg/jindal-steel-1-2.png" },
  { name: "JSL", logo: "https://i.ibb.co/fdNhH89C/JSL-1-1.png" },
  { name: "Microtek", logo: "https://i.ibb.co/DfHj9kJB/Microtek-2.png" },
  { name: "Patanjali", logo: "https://i.ibb.co/DxWBvrX/patanjali-1-1.png" },
  { name: "Posco", logo: "https://i.ibb.co/HLLNwHbn/posco-1-1.png" },
  { name: "Saint-Gobain", logo: "https://i.ibb.co/dsFZktGR/Saint-gobain-1.png" },
  { name: "Tata Steel", logo: "https://i.ibb.co/mVJx1r3n/tata-steel-1-1.png" },
];

export default function ClientsSection() {
  return (
    <section className="py-24 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-4">
            <span className="w-8 h-1 bg-primary"></span>
            Partnerships
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Trusted Customers</h2>
          <p className="text-muted-foreground text-lg">
            We are proud to partner with some of India's leading industrial and commercial organizations.
          </p>
        </div>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap flex items-center">
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="mx-16 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-20 md:h-28 w-auto object-contain max-w-[280px]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/200x80?text=${client.name}`;
                }}
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center">
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="mx-16 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-20 md:h-28 w-auto object-contain max-w-[280px]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/200x80?text=${client.name}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
