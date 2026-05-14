'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  event: string;
  rating: number;
  testimonial: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  event, 
  rating, 
  testimonial, 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      className="glass-morphism rounded-2xl p-8 card-hover relative"
    >
      <Quote className="absolute top-6 right-6 text-[#D4AF37]/20" size={40} />
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < rating ? "text-[#D4AF37] fill-current" : "text-gray-600"}
          />
        ))}
      </div>
      
      <p className="text-gray-300 mb-6 leading-relaxed italic">
        "{testimonial}"
      </p>
      
      <div className="border-t border-gray-700 pt-4">
        <h4 className="text-white font-semibold text-lg">{name}</h4>
        <p className="text-[#D4AF37] text-sm">{event}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
