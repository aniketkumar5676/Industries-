import { motion } from "motion/react";
import { Award, ShieldCheck, Star, Trophy } from "lucide-react";

const awards = [
  {
    title: "Logistics Excellence Award",
    year: "2025",
    org: "National Transport Federation",
    icon: <Trophy className="text-yellow-500" size={40} />,
    desc: "Recognized for maintaining 99.8% on-time delivery across pan-India operations."
  },
  {
    title: "Safety First Certification",
    year: "2024",
    org: "Industrial Safety Board",
    icon: <ShieldCheck className="text-blue-500" size={40} />,
    desc: "Awarded for zero-accident records in heavy equipment and ODC transportation."
  },
  {
    title: "Customer Choice Award",
    year: "2024",
    org: "Supply Chain Leaders Forum",
    icon: <Star className="text-orange-500" size={40} />,
    desc: "Voted as the most reliable logistics partner by top industrial clients."
  },
  {
    title: "Green Logistics Initiative",
    year: "2023",
    org: "Eco-Transport India",
    icon: <Award className="text-green-500" size={40} />,
    desc: "For implementing fuel-efficient routing and sustainable warehousing practices."
  }
];

export default function AwardsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-4">
            <span className="w-8 h-1 bg-primary"></span>
            Recognition
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Awards & Achievements</h2>
          <p className="text-muted-foreground text-lg">
            Our commitment to excellence has been recognized by industry leaders and regulatory bodies across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/20 border border-border p-8 rounded-2xl text-center hover:bg-secondary/40 transition-all group"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {award.icon}
              </div>
              <div className="text-primary font-bold text-sm mb-2">{award.year}</div>
              <h3 className="text-xl font-bold mb-3">{award.title}</h3>
              <div className="text-primary font-semibold text-xs uppercase tracking-widest mb-4">{award.org}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {award.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
