'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Phone, Calendar } from 'lucide-react';
import { getWhatsappUrl } from '@/lib/constants';

interface HeroProps {
  logo?: string;
}

const Hero = ({ logo }: HeroProps) => {
  const whatsappUrl = getWhatsappUrl("Hello I would like to book Olive & Orchard Banquet Hall");

  const scrollToNext = () => {
    const nextSection = document.getElementById('features');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://cdn.venuelook.com/uploads/space_38868/1715169304_595x400.png')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          {logo && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src={logo} 
                alt="Olive & Orchard Banquet Hall"
                className="h-32 w-auto mx-auto"
              />
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair">
              Create
              <span className="text-[#D4AF37]"> Unforgettable </span>
              Celebrations
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
            >
              Luxury Banquet Hall for Weddings, Receptions, Birthdays & Corporate Events
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gold-gradient text-[#7A0F19] px-8 py-4 rounded-full font-semibold text-lg hover-glow transition-all duration-300 flex items-center gap-3"
              >
                <Calendar size={24} />
                Book Now
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
                Request a Quote
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} className="text-[#D4AF37]" />
        </motion.div>
      </motion.div>

      {/* Floating Animation for Background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 bg-gradient-to-t from-[#7A0F19]/20 to-transparent pointer-events-none"
      />
    </section>
  );
};

export default Hero;
