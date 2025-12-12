import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import ContactForm from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero */}
      <div className="bg-primary text-white py-24 md:py-32">
         <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif font-bold mb-6"
            >
              Let's Plan Your Trip
            </motion.h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-light mb-8">
              Have questions or ready to book? Reach out to us directly or fill the form below.
            </p>
         </div>
      </div>

      <main className="container mx-auto px-4 py-12 -mt-16">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="bg-white p-6 rounded-xl shadow-lg border border-border"
               >
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                     <Phone size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-4">+91 98765 43210</p>
                  <Button variant="outline" className="w-full">Call Now</Button>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.1 }}
                 className="bg-white p-6 rounded-xl shadow-lg border border-border"
               >
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                     <Mail size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-4">info@himachaltravels.com</p>
                  <Button variant="outline" className="w-full">Send Email</Button>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.2 }}
                 className="bg-white p-6 rounded-xl shadow-lg border border-border"
               >
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                     <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Shop No. 12, Mall Road,<br />
                    Manali, Himachal Pradesh
                  </p>
                  <Button variant="outline" className="w-full">Get Directions</Button>
               </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
               <ContactForm />
            </div>
         </div>
      </main>

      {/* Map Section */}
      <section className="h-96 w-full bg-muted mt-12 relative">
         <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <p>Google Map Embed Placeholder</p>
         </div>
         {/* In production, use iframe here */}
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.846685822369!2d77.1892!3d32.2396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd067%3A0x26fbd14151e4ddc4!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1625567890123!5m2!1sen!2sin" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen 
           loading="lazy"
           className="grayscale hover:grayscale-0 transition-all duration-500"
         />
      </section>

      <Footer />
    </div>
  );
}
