'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = ['Home', 'About Us', 'Gallery', 'Services', 'Contact'];
  const whatsappUrl = "https://wa.me/919999999999?text=Hello%20I%20would%20like%20to%20book%20Olive%20%26%20Orchard%20Banquet%20Hall";

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase().replace(' ', '-'));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center mb-4">
              <img 
                src="/olive-logo.png" 
                alt="Olive & Orchard Banquet Hall"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating unforgettable celebrations with luxury, elegance, and perfection. 
              Your dream event deserves the perfect venue.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-sm border border-gray-600 px-3 py-1 rounded-full hover:border-[#D4AF37]"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-[#D4AF37]">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-[#D4AF37]" size={20} />
                <span className="text-gray-300">+91 99999 99999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#D4AF37]" size={20} />
                <span className="text-gray-300">info@oliveorchard.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#D4AF37] mt-1 shrink-0" size={20} />
                <span className="text-gray-300">
                  New no: 148, 1, Arcot Rd, next to Slam Fitness,<br />
                  Ganga Nagar, Kodambakkam, Chennai,<br />
                  Tamil Nadu 600024, India
                </span>
              </div>
            </div>
            
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-block gold-gradient text-[#7A0F19] px-6 py-3 rounded-full font-semibold hover-glow transition-all duration-300"
            >
              Book Now on WhatsApp
            </motion.a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2026 Olive & Orchard Banquet Hall. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
