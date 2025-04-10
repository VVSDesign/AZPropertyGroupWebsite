import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export default function OfferBanner() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <Parallax speed={10} className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1628592102751-ba83b0314276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
          }}
        />
      </Parallax>
      <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">LIMITED TIME OFFER: Save Up To $1,500</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto font-poppins">
            Take advantage of our special promotion and transform your home for less. Contact us today to learn more about this limited-time offer.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="tel:(617) 678-5426"
            className="bg-white hover:bg-neutral-100 text-primary font-bold py-3 px-8 rounded-full transition duration-300 text-lg inline-block shadow-lg"
          >
            Call Now: (617) 678-5426
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
