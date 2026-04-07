import { motion } from "motion/react";
import ContactForm from "../components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <div className="pb-16">
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team to discuss your logistics requirements."
        image="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm mb-4">
                <span className="w-8 h-1 bg-accent"></span>
                Get a Quote
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and our logistics experts will get back to you within 24 hours with a customized solution.
              </p>
              
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:pl-12"
            >
              <div className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm mb-4">
                <span className="w-8 h-1 bg-accent"></span>
                Office Information
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Network</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We operate a pan-India network with strategic hubs across major industrial corridors.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Headquarters</h3>
                    <p className="text-muted-foreground">Mandal Industries<br />India (Pan-India Operations)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 1800 123 4567<br />+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@mandalindustries.com<br />quotes@mandalindustries.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Operating Hours</h3>
                    <p className="text-muted-foreground">24/7 Operations Support<br />Office: Mon-Sat, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
