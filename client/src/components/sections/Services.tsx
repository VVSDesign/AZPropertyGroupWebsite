import { motion } from "framer-motion";

interface ServicesProps {
  onContactClick: () => void;
}

export default function Services({ onContactClick }: ServicesProps) {
  const services = [
    {
      title: "Kitchen Renovation",
      description: "Transform your kitchen into a stunning, functional space with custom cabinets, countertops, and modern appliances.",
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Bathroom Renovation",
      description: "Create a luxurious bathroom retreat with custom showers, vanities, and high-end fixtures tailored to your style.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Full Home Renovation",
      description: "Comprehensive home transformation services that completely revitalize your living space from floor to ceiling.",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Living Room/Family Room Remodel",
      description: "Create inviting, functional living spaces with custom built-ins, flooring, and architectural details.",
      image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Home Office Renovation",
      description: "Design productive, inspiring workspaces with custom desks, storage solutions, and technology integration.",
      image: "https://images.unsplash.com/photo-1593476550610-87baa860004a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Flooring Installation",
      description: "Expert installation of hardwood, tile, luxury vinyl, and other premium flooring materials to elevate your home.",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-neutral-100 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 font-montserrat">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We offer a comprehensive range of home renovation services to transform your space into something extraordinary.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-56 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-3 font-poppins">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>

              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContactClick}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block shadow-lg"
          >
            Get a Free Estimate
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
