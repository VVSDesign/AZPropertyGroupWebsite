import { motion } from "framer-motion";

interface FooterProps {
  onNavigate: {
    about: () => void;
    gallery: () => void;
    services: () => void;
    contact: () => void;
  };
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-neutral-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1"
          >
            <h2 className="text-2xl font-bold mb-6 font-montserrat">AZ Property Group</h2>
            <p className="text-neutral-300 mb-6">
              Florida's premier home renovation company, dedicated to transforming your living spaces with exceptional craftsmanship and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition duration-300">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition duration-300">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition duration-300">
                <i className="fab fa-pinterest-p text-xl"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 font-montserrat">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={onNavigate.about} className="text-neutral-300 hover:text-white transition duration-300">About Us</button></li>
              <li><button onClick={onNavigate.services} className="text-neutral-300 hover:text-white transition duration-300">Services</button></li>
              <li><button onClick={onNavigate.gallery} className="text-neutral-300 hover:text-white transition duration-300">Gallery</button></li>
              <li><button onClick={onNavigate.contact} className="text-neutral-300 hover:text-white transition duration-300">Contact</button></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 font-montserrat">Services</h3>
            <ul className="space-y-3">
              <li><button onClick={onNavigate.services} className="text-neutral-300 hover:text-white transition duration-300">Kitchen Renovation</button></li>
              <li><button onClick={onNavigate.services} className="text-neutral-300 hover:text-white transition duration-300">Bathroom Renovation</button></li>
              <li><button onClick={onNavigate.services} className="text-neutral-300 hover:text-white transition duration-300">Full Home Renovation</button></li>
              <li><button onClick={onNavigate.services} className="text-neutral-300 hover:text-white transition duration-300">Living Room Remodel</button></li>
              <li><button onClick={onNavigate.services} className="text-neutral-300 hover:text-white transition duration-300">Flooring Installation</button></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 font-montserrat">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-secondary"></i>
                <span className="text-neutral-300">123 Renovation Ave, Orlando, FL 32801</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3 text-secondary"></i>
                <a href="tel:(617) 678-5426" className="text-neutral-300 hover:text-white transition duration-300">(617) 678-5426</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-secondary"></i>
                <a href="mailto:info@azpropertygroupfl.com" className="text-neutral-300 hover:text-white transition duration-300">info@azpropertygroupfl.com</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-secondary"></i>
                <span className="text-neutral-300">Mon-Fri: 8am-6pm, Sat: 9am-4pm</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-neutral-700 mt-12 pt-8 text-center">
          <p className="text-neutral-400">
            Copyright © AZ Property Group Inc. 2024. All Rights Reserved. <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>. <a href="#" className="hover:text-white transition duration-300">Terms & Conditions</a>. Web Design by Ark Media Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
