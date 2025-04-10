import { motion } from "framer-motion";
import { useState } from "react";

interface GalleryProps {
  onContactClick: () => void;
}

export default function Gallery({ onContactClick }: GalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/enqJzahyFdCAX9nsfdde/media/6773123ba28a50b06ce6b115.jpeg",
      title: "Kitchen renovation project"
    },
    {
      image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/enqJzahyFdCAX9nsfdde/media/6773123ba28a503cc5e6b114.jpeg",
      title: "Bathroom renovation project"
    },
    {
      image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/enqJzahyFdCAX9nsfdde/media/6773123bd515b155439b2cf4.jpeg",
      title: "Living room renovation project"
    },
    {
      image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/enqJzahyFdCAX9nsfdde/media/6773123b79b7b65c86b34d66.jpeg",
      title: "Home office renovation project"
    },
    {
      image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/enqJzahyFdCAX9nsfdde/media/6773123b9be26b3d724aa9b1.jpeg",
      title: "Kitchen renovation project"
    },
    {
      image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/enqJzahyFdCAX9nsfdde/media/6773123b2ec4eb1ef25dcbe9.jpeg",
      title: "Bathroom renovation project"
    },
    {
      image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/enqJzahyFdCAX9nsfdde/media/6773123c10f86207fde221b6.jpeg",
      title: "Full home renovation project"
    },
    {
      image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/enqJzahyFdCAX9nsfdde/media/6784455599f61f1ccc6b0e1f.jpeg",
      title: "Living room renovation project"
    },
    {
      image: "https://images.unsplash.com/photo-1609347744403-2306e8a9ae27?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
      title: "Home office renovation project"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };
  
  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryItems.length);
    }
  };
  
  const goToPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 font-montserrat">Our Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Browse through our portfolio of stunning renovations and transformations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-xl shadow-lg overflow-hidden relative group"
            >
              <div className="relative overflow-hidden h-64">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => openLightbox(index)}
                    className="text-white border-2 border-white hover:bg-white hover:text-primary px-6 py-2 rounded-full transition duration-300"
                  >
                    View Project
                  </motion.button>
                </motion.div>
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
            Start Your Project
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-5 right-5 text-white text-3xl hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <i className="fas fa-times"></i>
          </button>
          
          <button 
            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={goToPrevImage}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button 
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={goToNextImage}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={galleryItems[selectedImageIndex].image} 
              alt={galleryItems[selectedImageIndex].title} 
              className="max-w-full max-h-[90vh] object-contain" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 text-center">
              <h3 className="text-xl font-semibold">{galleryItems[selectedImageIndex].title}</h3>
              <p className="text-sm mt-1">Image {selectedImageIndex + 1} of {galleryItems.length}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
