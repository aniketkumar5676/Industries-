import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    title: "Mandal Industries Expands Fleet with 50 New High-Capacity Trucks",
    date: "April 10, 2026",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop",
    excerpt: "In a major move to strengthen its pan-India presence, Mandal Industries has announced the addition of 50 new multi-axle trucks to its logistics fleet."
  },
  {
    title: "New Strategic Hub Opened in Mithapur to Streamline Bihar Operations",
    date: "March 25, 2026",
    category: "Expansion",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    excerpt: "The new state-of-the-art warehousing facility will serve as a central node for regional distribution, reducing turnaround times by 30%."
  },
  {
    title: "Mandal Industries Receives 'Best Logistics Partner' Award 2025",
    date: "February 12, 2026",
    category: "Awards",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
    excerpt: "Recognition for excellence in supply chain management and commitment to safety standards in the industrial transport sector."
  }
];

export default function MediaRoom() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-4">
              <span className="w-8 h-1 bg-primary"></span>
              Media Room
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">A glimpse into our portfolio of services</h2>
          </div>
          <Link to="/media" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All News <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden border border-border group hover:shadow-xl transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                  {item.excerpt}
                </p>
                <button className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
