import { motion } from "motion/react";

const stats = [
  { value: "7+", label: "Trucks & Growing Fleet" },
  { value: "Pan India", label: "Delivery Network" },
  { value: "100+", label: "Projects Completed" },
  { value: "Multi-Crore", label: "Business Growth" },
];

export default function StatsSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
          alt="Logistics Port"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-blue-950/90 dark:bg-slate-950/95" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center space-y-2 p-6 border border-blue-900/50 bg-blue-900/20 backdrop-blur-sm rounded-lg"
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tight text-accent">
                {stat.value}
              </div>
              <div className="text-blue-100 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
