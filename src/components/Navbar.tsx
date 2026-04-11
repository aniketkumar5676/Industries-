import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Truck, ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "motion/react";

const logoLight = "https://i.ibb.co/zTtTrG9R/logo-light-nav.png";
const logoDark = "https://i.ibb.co/fVFr1Yqs/logo-dark-nav.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isScrolledThreshold = 20;
  const isTransparent = isHomePage && !isScrolled;

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > isScrolledThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setResolvedTheme(systemTheme);
    } else {
      setResolvedTheme(theme as "light" | "dark");
    }
  }, [theme]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const logoSrc = resolvedTheme === "dark" 
    ? logoDark 
    : logoLight;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Services", 
      path: "/services",
      submenu: [
        { name: "Full Truck Load", path: "/services/ftl" },
        { name: "Shipping/Coastal", path: "/services/shipping" },
        { name: "Rail & Multimodal", path: "/services/rail" },
        { name: "Project Logistics", path: "/services/project" },
        { name: "Warehousing & Distribution", path: "/services/warehousing" },
        { name: "Freight Forwarding", path: "/services/freight" },
        { name: "Air Cargo", path: "/services/air" },
      ]
    },
    { name: "Industries", path: "/industries" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
    <header
      className={`fixed top-10 w-full z-50 transition-all duration-300 bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-3`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={logoSrc} 
            alt="Mandal Industries Logo" 
            className="h-10 w-auto object-contain transition-all duration-300"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group/menu">
              <Link
                to={link.path}
                className={`text-base font-medium transition-colors hover:text-primary flex items-center gap-1 py-2 relative ${
                  location.pathname === link.path
                    ? (resolvedTheme === "dark" ? "text-blue-300" : "text-primary")
                    : "text-slate-600"
                }`}
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} className="group-hover/menu:rotate-180 transition-transform" />}
                
                {location.pathname === link.path && (
                  <motion.span 
                    layoutId="nav-active"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  />
                )}
              </Link>
              
              {link.submenu && (
                <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:translate-y-0 group-hover/menu:pointer-events-auto transition-all duration-200 z-50">
                  <div className="bg-background border border-border rounded-lg shadow-xl py-2 min-w-[240px]">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 text-sm hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full transition-colors text-muted-foreground hover:text-foreground hover:bg-secondary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-sm text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm uppercase tracking-wider"
            >
              Get a Quote
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full transition-colors text-muted-foreground hover:bg-secondary"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <Link
                    to={link.path}
                    className={`text-lg font-medium py-2 border-b border-border/50 flex justify-between items-center ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4 flex flex-col gap-2 py-2">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="text-sm text-muted-foreground hover:text-primary py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-4 py-3 rounded-sm text-center font-bold mt-2 uppercase tracking-wider"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
