import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-2">
              Himachal<span className="text-accent">Travels</span>
            </h2>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for exploring the majestic landscapes of Himachal Pradesh. We provide premium tour packages and reliable taxi services tailored to your needs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Tour Packages', 'Taxi Service', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-2 inline-block">Popular Destinations</h3>
            <ul className="space-y-3">
              {['Manali', 'Shimla', 'Dharamshala', 'Spiti Valley', 'Kasol', 'Dalhousie'].map((dest) => (
                <li key={dest}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={20} />
                <span className="text-primary-foreground/80">
                  Shop No. 12, Mall Road,<br />
                  Manali, Himachal Pradesh, 175131
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={20} />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={20} />
                <span className="text-primary-foreground/80">info@himachaltravels.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Himachal Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
