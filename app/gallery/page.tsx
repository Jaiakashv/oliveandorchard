'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
  height: string;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = ['all', 'weddings', 'receptions', 'birthdays', 'corporate'];

  const galleryImages: GalleryImage[] = [
    // Weddings
    { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', category: 'weddings', title: 'Elegant Wedding Ceremony', height: 'h-64' },
    { id: 2, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', category: 'weddings', title: 'Romantic Reception', height: 'h-80' },
    { id: 3, src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', category: 'weddings', title: 'Beautiful Decor', height: 'h-56' },
    { id: 4, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', category: 'weddings', title: 'Grand Entrance', height: 'h-72' },
    
    // Receptions
    { id: 5, src: 'https://images.unsplash.com/photo-1519225421984-9461b484b945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', category: 'receptions', title: 'Gala Dinner', height: 'h-64' },
    { id: 6, src: 'https://images.unsplash.com/photo-1527529482837-4698179dc4ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', category: 'receptions', title: 'Evening Reception', height: 'h-80' },
    { id: 7, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', category: 'receptions', title: 'Elegant Dining', height: 'h-56' },
    
    // Birthdays
    { id: 8, src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', category: 'birthdays', title: 'Sweet 16 Celebration', height: 'h-72' },
    { id: 9, src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', category: 'birthdays', title: 'Birthday Party', height: 'h-64' },
    { id: 10, src: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', category: 'birthdays', title: 'Kids Birthday', height: 'h-80' },
    
    // Corporate
    { id: 11, src: 'https://images.unsplash.com/photo-1497366214043-936ac2534523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', category: 'corporate', title: 'Business Conference', height: 'h-56' },
    { id: 12, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', category: 'corporate', title: 'Corporate Meeting', height: 'h-72' },
    { id: 13, src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', category: 'corporate', title: 'Team Building Event', height: 'h-64' },
    { id: 14, src: 'https://images.unsplash.com/photo-1515378791036-0648a815c5d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', category: 'corporate', title: 'Award Ceremony', height: 'h-80' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="mb-8">
              <img 
                src="/olive-logo.png" 
                alt="Olive & Orchard Banquet Hall"
                className="h-24 w-auto mx-auto"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair">
              Our <span className="text-[#D4AF37]">Gallery</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore the beautiful moments and celebrations we've had the privilege to host
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'gold-gradient text-[#7A0F19]'
                    : 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#7A0F19]'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
            >
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className={`break-inside-avoid ${image.height} relative group cursor-pointer overflow-hidden rounded-lg`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-[#D4AF37] text-sm capitalize">{image.category}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <ZoomIn className="text-white" size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-xl">No images found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#D4AF37] transition-colors duration-300"
              >
                <X size={32} />
              </button>
              
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-bold text-xl mb-2">{selectedImage.title}</h3>
                <p className="text-[#D4AF37] capitalize">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Ready to Create Your <span className="text-[#D4AF37]">Perfect Event?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let us help you create beautiful memories that will last a lifetime. 
              Contact us today to schedule a visit and discuss your event requirements.
            </p>
            
            <motion.a
              href="https://wa.me/919999999999?text=Hello%20I%20would%20like%20to%20book%20Olive%20%26%20Orchard%20Banquet%20Hall"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block gold-gradient text-[#7A0F19] px-8 py-4 rounded-full font-semibold text-lg hover-glow transition-all duration-300"
            >
              Book Your Event
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
