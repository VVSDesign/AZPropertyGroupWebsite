import { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import OfferBanner from "@/components/sections/OfferBanner";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/ui/ScrollToTop";
import AbstractElements from "@/components/ui/AbstractElements";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-x-hidden">
      <AbstractElements />
      <Navbar 
        onNavigate={{
          about: () => scrollToSection(aboutRef),
          gallery: () => scrollToSection(galleryRef),
          services: () => scrollToSection(servicesRef),
          contact: () => scrollToSection(contactRef)
        }}
      />
      <Hero onContactClick={() => scrollToSection(contactRef)} />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={servicesRef}>
        <Services onContactClick={() => scrollToSection(contactRef)} />
      </div>
      <OfferBanner />
      <div ref={galleryRef}>
        <Gallery onContactClick={() => scrollToSection(contactRef)} />
      </div>
      <Testimonials />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer 
        onNavigate={{
          about: () => scrollToSection(aboutRef),
          gallery: () => scrollToSection(galleryRef),
          services: () => scrollToSection(servicesRef),
          contact: () => scrollToSection(contactRef)
        }}
      />
      <ScrollToTop />
    </div>
  );
}
