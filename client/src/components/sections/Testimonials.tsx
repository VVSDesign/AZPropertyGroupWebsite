import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "AZ Property Group transformed our outdated kitchen into a modern masterpiece! From the initial consultation to the final touches, their team was professional, responsive, and truly listened to our needs. They helped us choose the perfect countertops, cabinets, and backsplash, and the results exceeded our expectations. Cooking at home has been a joy! If you're looking for top-notch remodeling services in Orlando, look no further than them!",
      author: "Sarah & James T.",
      location: "Orlando, FL",
      initial: "S"
    },
    {
      quote: "We couldn't be happier with the work AZ Property Group did on our bathroom remodel. We had a cramped and dark bathroom that they turned into a bright, luxurious spa-like retreat. The walk-in shower with custom tile work is stunning, and the attention to detail was incredible. They stayed on schedule and within budget, which is rare these days. Highly recommend AZ Property Group for anyone looking to elevate their home in Tampa!",
      author: "Amanda L.",
      location: "Tampa, FL",
      initial: "A"
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
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 font-montserrat">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear what our satisfied clients have to say about their experience with AZ Property Group.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              className="bg-white p-8 rounded-xl shadow-lg relative"
            >
              <div className="text-primary text-6xl absolute -top-6 left-6 opacity-20">
                <i className="fas fa-quote-left"></i>
              </div>
              <div className="relative z-10">
                <p className="text-neutral-600 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.initial}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 font-poppins">{testimonial.author}</h4>
                    <p className="text-neutral-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
