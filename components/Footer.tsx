'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO, getWhatsappUrl } from '@/lib/constants';

const Footer = () => {
  const quickLinks = ['Home', 'About Us', 'Gallery', 'Services', 'Contact'];
  const whatsappUrl = getWhatsappUrl("Hello I would like to book Olive & Orchard Banquet Hall");

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
                <span className="text-gray-300">{CONTACT_INFO.displayPhone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#D4AF37]" size={20} />
                <span className="text-gray-300">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#D4AF37] mt-1 shrink-0" size={20} />
                <span className="text-gray-300">
                  {CONTACT_INFO.address}
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
