'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, image, delay = 0 }) => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappPhone}?text=Hello%20I%20would%20like%20to%20book%20Olive%20%26%20Orchard%20Banquet%20Hall%20for%20${encodeURIComponent(title)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="relative overflow-hidden rounded-2xl p-8 card-hover cursor-pointer group min-h-[320px] flex flex-col justify-end"
    >
      {/* Background Image */}
      {image && (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${image}')` }}
        />
      )}
      
      {/* Overlays */}
      <div className={`absolute inset-0 z-10 transition-colors duration-300 ${image ? 'bg-black/60 group-hover:bg-black/40' : 'glass-morphism'}`} />
      
      <div className="relative z-20">
        <div className="text-[#D4AF37] mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 font-playfair">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>
        
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:text-white transition-colors duration-300"
        >
          Book This Service
          <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
