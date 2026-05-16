'use client';

import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';
import { CONTACT_INFO, getWhatsappUrl } from '@/lib/constants';

const CTASection = () => {
  const whatsappUrl = getWhatsappUrl("Hello I would like to book Olive & Orchard Banquet Hall");

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 wine-gradient"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
            Ready to Create Your
            <span className="text-[#D4AF37]"> Perfect Event?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Let us help you create unforgettable memories at Olive & Orchard Banquet Hall. 
            Contact us today to schedule a visit and discuss your dream celebration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gold-gradient text-[#7A0F19] px-8 py-4 rounded-full font-semibold text-lg hover-glow transition-all duration-300 flex items-center gap-3"
            >
              <Calendar size={24} />
              Book Your Event
            </motion.a>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#D4AF37] hover:text-[#7A0F19] transition-all duration-300 flex items-center gap-3"
            >
              <Phone size={24} />
              Request Quote
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
