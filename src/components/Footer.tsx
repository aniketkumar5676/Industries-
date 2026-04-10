import { Link } from "react-router-dom";
import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-border relative">
      <div className="absolute top-0 left-0 w-full h-1 hazard-stripe" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                <Truck size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Mandal <span className="text-accent">Industries</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              End-to-end logistics and industrial solutions designed to move your business forward with speed, reliability, and precision.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-accent text-sm transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-accent text-sm transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/industries" className="text-slate-400 hover:text-accent text-sm transition-colors">Industries We Serve</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-accent text-sm transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-slate-400 hover:text-accent text-sm transition-colors">Cargo Transport</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-accent text-sm transition-colors">Freight Management</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-accent text-sm transition-colors">Warehousing</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-accent text-sm transition-colors">Project Logistics</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span>Mandal Industries Private Limited<br />Mithapur, Patna, Bihar</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+91 9608877131</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail size={18} className="text-accent shrink-0" />
                <span>mandalindustries.com@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Mandal Industries. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
