'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Navigation, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CONTACT_INFO, getWhatsappUrl } from '@/lib/constants';
export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative h-[55vh] min-h-[380px] overflow-hidden flex items-center justify-center">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage:
                "url('https://cdn.venuelook.com/uploads/space_38868/1715169304_595x400.png')",
            }}
          />
          {/* Dark overlay with gold tint at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/90" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative z-10 text-center px-6"
          >
            <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              We'd love to hear from you
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-playfair leading-tight">
              Get in <span className="text-[#D4AF37]">Touch</span>
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto">
              Interested in hosting your event with us? Reach out through any of
              the options below and we'll get back to you promptly.
            </p>
          </motion.div>
        </section>

        {/* ── INTRO LINE ── */}
        <section className="bg-black pt-16 pb-2">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center text-gray-400 text-base tracking-wide"
          >
            Interested? Please contact us using one of the options below.
          </motion.p>
        </section>

        {/* ── TWO CARDS ── */}
        <section className="bg-black py-12 pb-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

              {/* Card 1 — Come by */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="group relative bg-[#111111] border border-white/10 rounded-2xl p-10 hover:border-[#D4AF37]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)]"
              >
                {/* Gold accent bar */}
                <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent rounded-full" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                    <MapPin size={18} className="text-[#D4AF37]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white font-playfair">Come by</h2>
                </div>

                <div className="space-y-1 text-gray-300 text-base leading-relaxed mb-8">
                  <p>{CONTACT_INFO.address}</p>
                </div>

                <a
                  href="https://maps.app.goo.gl/3A52672d38b7a807"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold text-sm border-b border-[#D4AF37]/50 pb-0.5 hover:border-[#D4AF37] transition-colors duration-300"
                >
                  <Navigation size={14} />
                  Get Directions
                </a>
              </motion.div>

              {/* Card 2 — Contact Us */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="group relative bg-[#111111] border border-white/10 rounded-2xl p-10 hover:border-[#D4AF37]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)]"
              >
                {/* Gold accent bar */}
                <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent rounded-full" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                    <Mail size={18} className="text-[#D4AF37]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white font-playfair">Contact Us</h2>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail size={16} className="text-[#D4AF37] flex-shrink-0" />
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="hover:text-[#D4AF37] transition-colors duration-300 text-base"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone size={16} className="text-[#D4AF37] flex-shrink-0" />
                    <a
                      href={`tel:+91${CONTACT_INFO.phone}`}
                      className="hover:text-[#D4AF37] transition-colors duration-300 text-base"
                    >
                      {CONTACT_INFO.displayPhone}
                    </a>
                  </div>
                </div>

                <a
                  href={getWhatsappUrl("Hello I would like to inquire about Olive & Orchard Banquet Hall")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold text-sm border-b border-[#D4AF37]/50 pb-0.5 hover:border-[#D4AF37] transition-colors duration-300"
                >
                  <MessageCircle size={14} />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── MAP SECTION ── */}
        <section className="bg-gradient-to-b from-black to-[#0a0a0a] py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair">
                Find <span className="text-[#D4AF37]">Us</span>
              </h2>
              <p className="mt-3 text-gray-400">
                Visit us at our prime location in the heart of the city
              </p>
            </motion.div>

            {/* Map embed placeholder — styled to look like a real map frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(212,175,55,0.06)] h-[450px]"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7314745109775!2d80.21855227454776!3d13.0527568130948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52672d38b7a807%3A0xf7fa65d32d51deb0!2sOlive%20and%20Orchard%20Banquet%20Halls!5e0!3m2!1sen!2sus!4v1778722620523!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </motion.div>
          </div>
        </section>

        {/* ── HOURS STRIP ── */}
        <section className="bg-[#0a0a0a] border-t border-white/5 py-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="container mx-auto px-6 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="text-center sm:text-left">
              <p className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-1">
                Working Hours
              </p>
              <p className="text-white text-lg font-semibold">
                Monday – Sunday &nbsp;·&nbsp; 9:00 AM – 10:00 PM
              </p>
            </div>
            <motion.a
              href={getWhatsappUrl("Hello I would like to book Olive & Orchard Banquet Hall")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="gold-gradient text-[#7A0F19] px-8 py-3 rounded-full font-semibold hover-glow transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle size={18} />
              Book Now on WhatsApp
            </motion.a>
          </motion.div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
  );
}
