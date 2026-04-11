import { motion } from "motion/react";
import PageHeader from "../components/PageHeader";
import { Calendar, ArrowRight, PlayCircle, Newspaper, Image as ImageIcon } from "lucide-react";

const mediaItems = [
  {
    type: "news",
    title: "Mandal Industries Expands Fleet with 50 New High-Capacity Trucks",
    date: "April 10, 2026",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop",
    excerpt: "In a major move to strengthen its pan-India presence, Mandal Industries has announced the addition of 50 new multi-axle trucks to its logistics fleet."
  },
  {
    type: "news",
    title: "New Strategic Hub Opened in Mithapur to Streamline Bihar Operations",
    date: "March 25, 2026",
    category: "Expansion",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    excerpt: "The new state-of-the-art warehousing facility will serve as a central node for regional distribution, reducing turnaround times by 30%."
  },
  {
    type: "video",
    title: "Project Logistics: Moving a 200-Ton Transformer",
    date: "March 10, 2026",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop",
    excerpt: "Watch how our specialized team managed the complex transportation of a massive transformer across challenging terrain."
  },
  {
    type: "news",
    title: "Mandal Industries Receives 'Best Logistics Partner' Award 2025",
    date: "February 12, 2026",
    category: "Awards",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
    excerpt: "Recognition for excellence in supply chain management and commitment to safety standards in the industrial transport sector."
  },
  {
    type: "gallery",
    title: "Annual Safety Training Workshop 2026",
    date: "January 20, 2026",
    category: "Safety",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    excerpt: "Highlights from our comprehensive safety training program for drivers and warehouse staff."
  }
];

export default function Media() {
  return (
    <div className="pb-24">
      <PageHeader 
        title="Media Room" 
        subtitle="Stay updated with the latest news, events, and insights from Mandal Industries."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item, index) => (
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
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full">
                    {item.type === "video" && <PlayCircle size={20} />}
                    {item.type === "news" && <Newspaper size={20} />}
                    {item.type === "gallery" && <ImageIcon size={20} />}
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
    </div>
  );
}
