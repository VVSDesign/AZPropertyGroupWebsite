import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onNavigate: {
    about: () => void;
    gallery: () => void;
    services: () => void;
    contact: () => void;
  };
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (callback: () => void) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    callback();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`${
            isScrolled ? "bg-white bg-opacity-95 shadow-lg" : "bg-white bg-opacity-95"
          } rounded-full py-2 px-6 shadow-lg flex justify-between items-center`}
        >
          <a href="#" className="text-2xl font-bold text-primary font-montserrat">
            AZ Property Group
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavClick(onNavigate.about)}
              className="text-neutral-700 hover:text-primary font-medium transition duration-300"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick(onNavigate.gallery)}
              className="text-neutral-700 hover:text-primary font-medium transition duration-300"
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick(onNavigate.services)}
              className="text-neutral-700 hover:text-primary font-medium transition duration-300"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick(onNavigate.contact)}
              className="text-neutral-700 hover:text-primary font-medium transition duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-neutral-800"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white mt-2 rounded-xl shadow-lg absolute left-4 right-4 overflow-hidden z-50"
            >
              <div className="flex flex-col p-4 space-y-3">
                <button
                  onClick={() => handleNavClick(onNavigate.about)}
                  className="text-neutral-700 hover:text-primary font-medium py-2 transition duration-300 text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleNavClick(onNavigate.gallery)}
                  className="text-neutral-700 hover:text-primary font-medium py-2 transition duration-300 text-left"
                >
                  Gallery
                </button>
                <button
                  onClick={() => handleNavClick(onNavigate.services)}
                  className="text-neutral-700 hover:text-primary font-medium py-2 transition duration-300 text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => handleNavClick(onNavigate.contact)}
                  className="text-neutral-700 hover:text-primary font-medium py-2 transition duration-300 text-left"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
