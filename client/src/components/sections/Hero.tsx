import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Parallax speed={-20} className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
            height: "120%"
          }}
        />
      </Parallax>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-montserrat">
            Transform Your Home into the Space You've Always Dreamed Of
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-poppins">
            From kitchens and bathrooms to whole-home transformations, we make your dream home a reality — on time and on budget.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onContactClick}
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg shadow-lg"
            >
              FREE ESTIMATE
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.instagram.com/az_propertygroup/?igsh=MmxiZWtoYzcwdnk5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white hover:bg-neutral-100 text-neutral-800 font-bold py-3 px-8 rounded-full transition duration-300 text-lg shadow-lg flex items-center gap-2"
            >
              <i className="fab fa-instagram text-secondary text-xl"></i>
              Follow Us
            </motion.a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-90 px-6 py-4 rounded-lg shadow-lg"
            >
              <p className="text-primary font-bold text-lg">✅ Save Up To $1,500</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-90 px-6 py-4 rounded-lg shadow-lg"
            >
              <p className="text-primary font-bold text-lg">✅ Guaranteed Satisfaction</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <motion.a
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white inline-block"
          onClick={onContactClick}
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </motion.a>
      </motion.div>
    </section>
  );
}
