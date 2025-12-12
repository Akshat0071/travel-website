import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Destinations from "@/components/home/Destinations";
import TaxiService from "@/components/home/TaxiService";
import TravelThemes from "@/components/home/TravelThemes";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import BlogSection from "@/components/home/BlogSection";
import CTABanner from "@/components/home/CTABanner";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/30">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <TaxiService />
        <TravelThemes />
        <WhyChooseUs />
        <Testimonials />
        <BlogSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
