'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Heart, Briefcase, Cake, Coffee, Palette, Camera,
  Car, Zap, Wind, Volume2, Lightbulb, Shield,
  ArrowUpRight, CheckCircle2, ChevronRight, Sparkles
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getWhatsappUrl, CONTACT_INFO } from '@/lib/constants';

const WA_BASE = `https://wa.me/${CONTACT_INFO.whatsappPhone}?text=Hello%20I%20would%20like%20to%20inquire%20about%20`;

/* ─── Data ─── */
const services = [
  {
    id: 'weddings',
    icon: Heart,
    label: 'Weddings',
    tagline: 'Your perfect day, flawlessly executed',
    description: 'Complete wedding packages from sacred ceremony to grand reception — with a dedicated coordinator, bridal suite, mandap setup, and premium staging that makes every moment feel like a fairy tale.',
    features: ['Bridal Suite Access', 'Mandap / Altar Setup', 'Reception Staging', 'Dedicated Coordinator', 'Floral Arrangements', 'Custom Lighting'],
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
    color: '#D4AF37',
  },
  {
    id: 'receptions',
    icon: Briefcase,
    label: 'Receptions',
    tagline: 'Grand celebrations, intimate memories',
    description: 'Elevate your reception with premium stage setups, professional sound systems, themed lighting, and customisable décor that transforms our hall into the setting of your dreams.',
    features: ['Grand Stage Setup', 'Pro Sound System', 'Theme Lighting', 'Custom Décor', '500 Guest Capacity', 'Valet Parking'],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    color: '#C9A227',
  },
  {
    id: 'birthdays',
    icon: Cake,
    label: 'Birthdays',
    tagline: 'Make every age worth celebrating',
    description: 'From sweet sixteens to milestone 50ths — themed décor, entertainment setups, cake arrangements, and photography services turn your birthday into an unforgettable spectacle.',
    features: ['Theme Decoration', 'Entertainment Setup', 'Cake Ceremony', 'Photography', 'DJ & Music', 'Kids Zone'],
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
    color: '#E8C96B',
  },
  {
    id: 'engagements',
    icon: Sparkles,
    label: 'Engagements',
    tagline: 'The beginning of forever',
    description: 'Celebrate the start of your love story with elegant engagement setups — intimate or grand, traditional or modern — all tailored to reflect your unique bond.',
    features: ['Traditional Setup', 'Modern Options', 'Intimate Spaces', 'Custom Décor', 'Floral Design', 'Photo Spots'],
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80',
    color: '#D4AF37',
  },
  {
    id: 'corporate',
    icon: Briefcase,
    label: 'Corporate',
    tagline: 'Professional events, lasting impressions',
    description: 'From board meetings to annual galas — conference facilities, AV equipment, high-speed Wi-Fi, and professional staff ensure your corporate event runs without a hitch.',
    features: ['Conference Rooms', 'AV Equipment', 'High-Speed Wi-Fi', 'Business Amenities', 'Catering Service', 'Security'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    color: '#B8922E',
  },
  {
    id: 'catering',
    icon: Coffee,
    label: 'Catering',
    tagline: 'Flavours as memorable as the moments',
    description: 'Our in-house catering offers customisable menus, professional chefs, serving staff, and dietary accommodations — from lavish buffets to plated fine dining.',
    features: ['Custom Menus', 'Professional Chefs', 'Serving Staff', 'Dietary Options', 'Live Counters', 'Dessert Bar'],
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
    color: '#D4AF37',
  },
];

const amenities = [
  { icon: Car, label: 'Valet Parking', desc: '200+ vehicle capacity with professional valet' },
  { icon: Shield, label: 'Security', desc: '24/7 trained security personnel on-site' },
  { icon: Zap, label: 'Power Backup', desc: 'Uninterrupted supply with backup generators' },
  { icon: Wind, label: 'Climate Control', desc: 'Advanced AC & heating throughout all halls' },
  { icon: Volume2, label: 'Pro Audio', desc: 'Studio-grade sound systems in every hall' },
  { icon: Lightbulb, label: 'Smart Lighting', desc: 'Programmable ambient and stage lighting' },
];

const packages = [
  {
    name: 'Essential',
    badge: null,
    sub: 'Elegant Foundation',
    perks: ['Hall rental · 6 hrs', 'Basic seating', 'Standard lighting', 'Parking facility', 'Security service'],
  },
  {
    name: 'Signature',
    badge: 'Most Popular',
    sub: 'Full Experience',
    perks: ['Hall rental · 8 hrs', 'Premium seating', 'Lighting & sound', 'Basic decoration', 'Catering coordination', 'Photography package'],
  },
  {
    name: 'Prestige',
    badge: 'All-Inclusive',
    sub: 'Absolute Luxury',
    perks: ['Hall rental · 12 hrs', 'Luxury seating', 'Premium A/V', 'Full décor service', 'Complete catering', 'Pro photography', 'Event coordinator'],
  },
];

/* ─── Service Tab ─── */
function ServicePanel({ service, isActive, onClick }: { service: typeof services[0]; isActive: boolean; onClick: () => void }) {
  const Icon = service.icon;
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: 4 }}
      className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-300 group ${
        isActive
          ? 'bg-[#D4AF37]/15 border border-[#D4AF37]/50'
          : 'border border-transparent hover:border-white/10'
      }`}
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isActive ? 'bg-[#D4AF37]' : 'bg-white/5 group-hover:bg-white/10'}`}>
        <Icon size={18} className={isActive ? 'text-[#7A0F19]' : 'text-gray-400'} />
      </div>
      <div className="flex-1 min-w-0">
        <div className={`font-semibold text-sm transition-colors duration-300 ${isActive ? 'text-[#D4AF37]' : 'text-gray-300 group-hover:text-white'}`}>{service.label}</div>
        <div className="text-gray-600 text-xs truncate">{service.tagline}</div>
      </div>
      <ChevronRight size={14} className={`flex-shrink-0 transition-all duration-300 ${isActive ? 'text-[#D4AF37] translate-x-1' : 'text-gray-600'}`} />
    </motion.button>
  );
}

/* ─── Package Card ─── */
function PackageCard({ pkg, i }: { pkg: typeof packages[0]; i: number }) {
  const isCenter = i === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.12, type: 'spring', stiffness: 80 }}
      whileHover={{ y: -6 }}
      className={`relative rounded-2xl p-8 flex flex-col transition-shadow duration-300 ${
        isCenter
          ? 'bg-[#D4AF37]/10 border-2 border-[#D4AF37] shadow-[0_0_60px_rgba(212,175,55,0.2)]'
          : 'bg-[#0d0d0d] border border-white/10 hover:border-white/20'
      }`}
    >
      {pkg.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#7A0F19] text-xs font-bold px-4 py-1 rounded-full">
          {pkg.badge}
        </div>
      )}
      <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">{pkg.sub}</p>
      <h3 className="font-playfair text-3xl font-bold text-white mb-6">{pkg.name}</h3>
      <ul className="space-y-3 mb-8 flex-1">
        {pkg.perks.map((p, j) => (
          <li key={j} className="flex items-start gap-2.5 text-gray-300 text-sm">
            <CheckCircle2 size={15} className={`flex-shrink-0 mt-0.5 ${isCenter ? 'text-[#D4AF37]' : 'text-gray-600'}`} />
            {p}
          </li>
        ))}
      </ul>
      <motion.a
        href={`${WA_BASE}${encodeURIComponent(pkg.name + ' Package')}`}
        target="_blank" rel="noopener noreferrer"
        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
        className={`w-full py-3.5 rounded-full font-bold text-sm text-center transition-all duration-300 flex items-center justify-center gap-2 ${
          isCenter
            ? 'gold-gradient text-[#7A0F19] hover-glow'
            : 'border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10'
        }`}
      >
        Get Quote <ArrowUpRight size={14} />
      </motion.a>
    </motion.div>
  );
}

/* ─── Main ─── */
export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const active = services[activeIdx];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/50 to-[#050505]" />
        </motion.div>

        <motion.div style={{ opacity: textOpacity }} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-[#D4AF37]/40 bg-[#D4AF37]/5 backdrop-blur-sm text-[#D4AF37] text-xs font-bold tracking-[0.35em] uppercase px-6 py-2.5 rounded-full mb-8"
          >
            <Sparkles size={12} /> Premium Services
          </motion.span>

          {/* Stagger headline */}
          {['Everything your', 'celebration deserves.'].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.2 + i * 0.15, ease: [0.77, 0, 0.18, 1] }}
                className={`font-playfair font-bold leading-[0.9] text-6xl md:text-8xl ${i === 1 ? 'text-[#D4AF37]' : 'text-white'}`}
              >
                {line}
              </motion.h1>
            </div>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-7 text-white/60 text-lg max-w-xl mx-auto"
          >
            From intimate gatherings to grand celebrations — we have the services, the team, and the space to make it extraordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="gold-gradient text-[#7A0F19] px-8 py-4 rounded-full font-bold hover-glow transition-all duration-300"
            >
              Explore Services
            </motion.a>
            <motion.a
              href="#packages"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-300"
            >
              View Packages
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── INTERACTIVE SERVICE EXPLORER ── */}
      <section id="services" className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-[#D4AF37] text-xs font-bold tracking-[0.35em] uppercase mb-3">What We Offer</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-[#D4AF37]">Services</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg">Select a service to explore what's included — each one crafted to exceed expectations.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left — Tab list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4 space-y-2"
            >
              {services.map((s, i) => (
                <ServicePanel key={s.id} service={s} isActive={i === activeIdx} onClick={() => setActiveIdx(i)} />
              ))}
            </motion.div>

            {/* Right — Active panel */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 30, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="rounded-2xl overflow-hidden border border-white/10"
                >
                  {/* Image */}
                  <div className="relative h-56 md:h-72 overflow-hidden">
                    <motion.img
                      key={active.image}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6 }}
                      src={active.image}
                      alt={active.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 text-[#D4AF37] text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">
                      {active.label}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-[#0d0d0d] p-8">
                    <h3 className="font-playfair text-3xl font-bold text-white mb-1">{active.label}</h3>
                    <p className="text-[#D4AF37] text-sm mb-5">{active.tagline}</p>
                    <p className="text-gray-400 leading-relaxed mb-8">{active.description}</p>

                    {/* Features grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                      {active.features.map((f, i) => (
                        <motion.div
                          key={f}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2.5"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                          <span className="text-gray-300 text-xs">{f}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.a
                      href={`${WA_BASE}${encodeURIComponent(active.label)}`}
                      target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 gold-gradient text-[#7A0F19] px-7 py-3.5 rounded-full font-bold hover-glow transition-all duration-300"
                    >
                      Book {active.label} <ArrowUpRight size={15} />
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── AMENITIES — Hover cards ── */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-[#D4AF37] text-xs font-bold tracking-[0.35em] uppercase mb-3">Included in Every Event</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">World-Class <span className="text-[#D4AF37]">Amenities</span></h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {amenities.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5, borderColor: 'rgba(212,175,55,0.5)' }}
                className="relative bg-[#050505] border border-white/10 rounded-2xl p-6 group overflow-hidden cursor-default transition-all duration-300"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/5 transition-colors duration-500 rounded-2xl" />
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} className="text-[#D4AF37]" />
                </div>
                <h3 className="text-white font-semibold mb-1.5">{label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-[#D4AF37] text-xs font-bold tracking-[0.35em] uppercase mb-3">Pricing</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">Flexible <span className="text-[#D4AF37]">Packages</span></h2>
            <p className="text-gray-500 mt-3">Transparent pricing — no hidden fees, no surprises.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => <PackageCard key={pkg.name} pkg={pkg} i={i} />)}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-gray-600 text-sm mt-8"
          >
            All packages are fully customisable. <a href="/contact" className="text-[#D4AF37] hover:underline">Contact us</a> for a bespoke quote.
          </motion.p>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="relative py-24 overflow-hidden bg-[#0a0a0a]">
        {/* Animated gradient bg */}
        <motion.div
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ backgroundSize: '200% 200%' }}
          className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#1a1200] to-[#050505]"
        />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGhhbGx8ZW58MHx8MHx8fDA%3D')` }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-2xl mx-auto px-6"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5">
            Let's Create Your <span className="text-[#D4AF37]">Perfect Event</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Contact us today for a personalised consultation. We'll tailor every detail to your vision and budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href={WA_BASE + 'an%20event'}
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="gold-gradient text-[#7A0F19] px-9 py-4 rounded-full font-bold text-base hover-glow transition-all duration-300 flex items-center gap-2"
            >
              Get Custom Quote <ArrowUpRight size={16} />
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="border-2 border-white/20 text-white px-9 py-4 rounded-full font-bold text-base hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-300"
            >
              Schedule a Visit
            </motion.a>
          </div>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
