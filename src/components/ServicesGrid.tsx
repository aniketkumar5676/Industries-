import { motion } from "motion/react";
import { Truck, PackageSearch, Warehouse, Map, ShieldCheck, Car, Home, HardHat, Settings, Anchor, Train, Plane, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "ftl",
    icon: <Truck size={40} />,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
    title: "Full Truck Load (FTL)",
    path: "/services/ftl",
    description: "Dedicated transport solutions for large volume shipments across India. We provide a wide range of vehicles from 14ft to 32ft containers to suit your specific cargo requirements.",
  },
  {
    id: "shipping",
    icon: <Anchor size={40} />,
    image: "https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=800&auto=format&fit=crop",
    title: "Shipping & Coastal",
    path: "/services/shipping",
    description: "Cost-effective coastal shipping and maritime logistics for bulk commodities. We handle port-to-port and door-to-port movements with seamless integration.",
  },
  {
    id: "rail",
    icon: <Train size={40} />,
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800&auto=format&fit=crop",
    title: "Rail & Multimodal",
    path: "/services/rail",
    description: "Efficient long-haul transportation using India's vast rail network combined with road transport for first and last-mile connectivity.",
  },
  {
    id: "project",
    icon: <Settings size={40} />,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop",
    title: "Project Logistics",
    path: "/services/project",
    description: "End-to-end management of complex, high-value industrial projects. From planning and route surveys to final installation support.",
  },
  {
    id: "warehousing",
    icon: <Warehouse size={40} />,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    title: "Warehousing & Distribution",
    path: "/services/warehousing",
    description: "State-of-the-art storage solutions with inventory management, order fulfillment, and secondary distribution across major industrial hubs.",
  },
  {
    id: "freight",
    icon: <Globe size={40} />,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
    title: "Freight Forwarding",
    path: "/services/freight",
    description: "Global logistics coordination including customs clearance, documentation, and international shipping via sea and air routes.",
  },
  {
    id: "air",
    icon: <Plane size={40} />,
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&auto=format&fit=crop",
    title: "Air Cargo",
    path: "/services/air",
    description: "Time-sensitive delivery solutions for urgent shipments. We offer express air freight with guaranteed space and priority handling.",
  },
  {
    id: "odc",
    icon: <PackageSearch size={40} />,
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=800&auto=format&fit=crop",
    title: "ODC & Heavy Lift",
    path: "/contact",
    description: "Specialized transport for oversized and heavy cargo like transformers and turbines with specialized trailers and escorts.",
  },
];

export default function ServicesGrid({ limit }: { limit?: number }) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-16 bg-secondary/50">
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
              className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm hover:underline underline-offset-4"
            >
              View All Services
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => (
            <motion.div
              key={index}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={service.path || "/services"} className="bg-card border border-border rounded-xl hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden flex flex-col h-full relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-20" />
                
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
