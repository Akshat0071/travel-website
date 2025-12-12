import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Taxi Service", href: "/taxi" },
    { name: "Travel Diaries", href: "/diaries" }, // Anchors on home page need /# if on other pages
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isHome = location === "/";

  // Helper to determine if link is active
  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? "bg-white/90 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-serif font-bold text-primary flex items-center gap-2">
              <span className={`text-3xl ${isScrolled || !isHome ? "text-primary" : "text-white"}`}>Himachal</span>
              <span className={`text-accent ${isScrolled || !isHome ? "" : "text-yellow-400"}`}>Travels</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={`font-medium hover:text-accent transition-colors ${
                    isActive(link.href) ? "text-accent" : (isScrolled || !isHome ? "text-foreground" : "text-white/90")
                  }`}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Button
              className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-6"
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className={isScrolled || !isHome ? "text-foreground" : "text-white"} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-background z-50 shadow-2xl p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-2xl font-serif font-bold text-primary">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="text-foreground" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <a
                      className={`text-lg font-medium transition-colors ${
                        isActive(link.href) ? "text-accent" : "text-foreground hover:text-primary"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </Link>
                ))}
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white mt-4"
                  onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                >
                  Book on WhatsApp
                </Button>
              </nav>
              
              <div className="mt-auto pt-8 border-t border-border">
                <div className="flex gap-4 justify-center text-muted-foreground">
                  <Facebook size={20} />
                  <Instagram size={20} />
                  <Twitter size={20} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
