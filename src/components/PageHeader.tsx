import { motion } from "motion/react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border mt-[104px] bg-slate-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[300px] lg:min-h-[350px]">
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 relative z-10 bg-slate-950">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-300 max-w-xl"
          >
            {subtitle}
          </motion.p>
          
          {/* Decorative accent line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-20 h-1 bg-primary mt-6 origin-left"
          />
        </div>

        {/* Right Side: Image with flush effect */}
        <div className="relative h-[250px] lg:h-auto overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Gradient for flushing effect in the middle */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/10 to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-transparent lg:hidden" />
          
          {/* Industrial Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        </div>
      </div>
    </section>
  );
}
