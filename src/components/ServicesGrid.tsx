import { motion } from "motion/react";
import { Truck, PackageSearch, Warehouse, Map, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Truck size={32} />,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
    title: "Cargo Transportation",
    description: "Efficient transportation solutions for all types of industrial cargo, ensuring timely and safe delivery.",
  },
  {
    icon: <Map size={32} />,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    title: "Freight Management",
    description: "Multi-modal logistics solutions combining road, rail, and other transport methods for optimized delivery.",
  },
  {
    icon: <Warehouse size={32} />,
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop",
    title: "Warehousing & Storage",
    description: "Secure and scalable storage solutions with advanced inventory management capabilities.",
  },
  {
    icon: <PackageSearch size={32} />,
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=800&auto=format&fit=crop",
    title: "Over Dimensional Cargo",
    description: "Handling heavy and over-dimensional cargo (ODC) with precision engineering and route planning.",
  },
  {
    icon: <ShieldCheck size={32} />,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
    title: "Customs Clearance",
    description: "Expert consulting and seamless customs clearance for cross-border industrial shipments.",
  },
];

export default function ServicesGrid({ limit }: { limit?: number }) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer a complete suite of supply chain services tailored to meet the complex demands of modern industries.
            </p>
          </div>
          {limit && (
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm hover:underline underline-offset-4"
            >
              View All Services
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl hover:shadow-xl transition-all hover:-translate-y-1 group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-20" />
              
              <div className="h-48 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col relative">
                <div className="w-14 h-14 rounded-lg bg-secondary text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm -mt-14 relative z-20 border-4 border-card">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
