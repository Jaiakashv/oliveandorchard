'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT_INFO, getWhatsappUrl } from '@/lib/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About Us', 'Gallery', 'Services', 'Contact'];

  const navigateToSection = (section: string) => {
    setIsOpen(false);
    
    // Handle navigation based on current page
    if (section === 'Home') {
      window.location.href = '/';
    } else if (section === 'About Us') {
      window.location.href = '/about';
    } else if (section === 'Gallery') {
      window.location.href = '/gallery';
    } else if (section === 'Services') {
      window.location.href = '/services';
    } else if (section === 'Contact') {
      window.location.href = '/contact';
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img 
              src="/olive-logo.png" 
              alt="Olive & Orchard Banquet Hall"
              className="h-14 w-auto"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigateToSection(item)}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium"
              >
                {item}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              href={getWhatsappUrl("Hello I would like to book Olive & Orchard Banquet Hall")}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient text-[#7A0F19] px-6 py-2 rounded-full font-semibold hover-glow transition-all duration-300 flex items-center gap-2"
            >
              <Phone size={18} />
              Book Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass-morphism rounded-2xl p-8 flex flex-col items-center space-y-4"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => navigateToSection(item)}
                className="w-full text-center py-2 text-white hover:text-[#D4AF37] transition-colors duration-300 font-semibold text-lg"
              >
                {item}
              </button>
            ))}
            <a
              href={getWhatsappUrl("Hello I would like to book Olive & Orchard Banquet Hall")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 gold-gradient text-[#7A0F19] px-6 py-4 rounded-full font-bold text-center shadow-lg transform active:scale-95 transition-transform"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
