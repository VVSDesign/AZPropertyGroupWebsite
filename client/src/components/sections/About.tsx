import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-neutral-900 text-white relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
            About AZ Property Group
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-primary mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-300 max-w-3xl mx-auto">
            At AZ Property Group, we are dedicated to bringing your dream vision to life through our many years of expertise and experienced home renovation & indoor living services.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="AZ Property Group Team" 
              className="rounded-lg shadow-2xl w-full object-cover"
              style={{ height: "500px", objectPosition: "center" }}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg w-40 h-40 flex items-center justify-center text-center"
            >
              <p className="font-montserrat font-bold">Florida's #1 Renovation Team</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6 font-montserrat">Why Choose Us?</h3>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-full flex-shrink-0">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-poppins">Expert Craftsmanship</h4>
                  <p className="text-gray-300">Our skilled team brings years of experience to every project, ensuring the highest quality workmanship.</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-full flex-shrink-0">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-poppins">On-Time Completion</h4>
                  <p className="text-gray-300">We understand the importance of timelines and work diligently to complete your project on schedule.</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-full flex-shrink-0">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-poppins">Transparent Pricing</h4>
                  <p className="text-white">No hidden fees or surprises. We provide detailed estimates and stick to your budget.</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-full flex-shrink-0">
                  <i className="fas fa-home"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-poppins">Comprehensive Services</h4>
                  <p className="text-white">From kitchens and bathrooms to whole-home renovations, we handle every aspect of your project.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-8 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg"
            >
              Request a Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
