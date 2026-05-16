'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, Play } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

/* ── SVG Ring Counter ── */
function RingCounter({ value, label, color = '#D4AF37' }: { value: string; label: string; color?: string }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
          <motion.circle
            cx="60" cy="60" r={r} fill="none"
            stroke={color} strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ * 0.1 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-white font-bold text-2xl font-playfair leading-none">{value}</span>
        </div>
      </div>
      <span className="text-gray-500 text-xs tracking-[0.25em] uppercase">{label}</span>
    </motion.div>
  );
}



/* ── Accordion item ── */
function AccordionItem({ num, title, body, isOpen, onClick }: {
  num: string; title: string; body: string; isOpen: boolean; onClick: () => void;
}) {
  return (
    <div className={`border-b transition-colors duration-300 ${isOpen ? 'border-[#D4AF37]/40' : 'border-white/10'}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <div className="flex items-center gap-5">
          <span className="text-[#D4AF37]/40 font-playfair text-sm font-bold">{num}</span>
          <span className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-[#D4AF37]' : 'text-white group-hover:text-[#D4AF37]'}`}>
            {title}
          </span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
          <Plus size={18} className={`transition-colors duration-300 ${isOpen ? 'text-[#D4AF37]' : 'text-gray-500'}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 leading-relaxed pb-6 pl-12 text-sm">{body}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Horizontal auto-scroll image strip ── */
const images = [
  'https://oliveandorchards.netlify.app/photos/1.jpeg',
  'https://oliveandorchards.netlify.app/photos/4.jpeg',
  'https://oliveandorchards.netlify.app/photos/9.jpeg',
'https://oliveandorchards.netlify.app/photos/20.jpeg',
'https://oliveandorchards.netlify.app/photos/21.jpeg',
'https://oliveandorchards.netlify.app/photos/22.jpeg'


];

function ImageStrip() {
  return (
    <div className="overflow-hidden py-10">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="flex gap-4 w-max"
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="w-64 h-44 rounded-xl overflow-hidden flex-shrink-0 relative group">
            <img src={src} alt={`Event ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Main ── */
export default function About() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imageX = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const textX = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const accordion = [
    { title: 'Luxury is our standard, not our exception', body: 'From the moment your guests walk in, every detail — lighting, florals, linens, service — reflects a commitment to premium quality that sets Olive & Orchard apart.' },
    { title: 'We listen before we plan', body: 'No two events are alike. We spend time understanding your vision, your story, and your expectations before a single detail is decided.' },
    { title: 'Our team makes the difference', body: 'Our experienced coordinators, chefs, and hospitality staff have collectively managed thousands of events. That experience means we anticipate problems before they happen.' },
    { title: 'Transparent pricing, zero surprises', body: 'We believe trust is built on honesty. Our packages are clear, customisable, and always transparent — so you can plan with confidence.' },
    { title: 'We celebrate every culture', body: 'From traditional ceremonies to modern celebrations, we are experienced in hosting diverse events that honour your heritage and personal style.' },
  ];

  const milestones = [
    { year: '2021', event: 'Founded' },
    { year: '2022', event: 'Expanded' },
    { year: '2023', event: 'Award Won' },
    { year: '2024', event: 'Digital Launch' },
    { year: '2025', event: 'Legacy Continues' },
  ];

  /* ── Clip-path wipe reveal ── */
  const wipe: Variants = {
    hidden: { clipPath: 'inset(0% 100% 0% 0%)' },
    visible: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 0.9, ease: [0.77, 0, 0.18, 1] } },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO — Split Screen ── */}
      <section ref={heroRef} className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* Left — Text */}
        <motion.div
          style={{ x: textX }}
          className="flex flex-col justify-center items-start px-10 lg:px-20 pt-32 pb-20 bg-[#050505] relative z-10"
        >
          {/* Huge background number */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold text-white/[0.02] font-playfair select-none leading-none pointer-events-none">
            5
          </div>

          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#D4AF37] text-xs font-bold tracking-[0.4em] uppercase mb-6 block"
          >
            About Olive & Orchard
          </motion.span>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.77, 0, 0.18, 1] }}
              className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9]"
            >
              More Than
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.77, 0, 0.18, 1] }}
              className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-[#D4AF37] leading-[0.9]"
            >
              a Venue.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-gray-400 text-lg leading-relaxed max-w-md mb-10"
          >
            For 5 years, Olive & Orchard has been the backdrop for the most cherished moments in thousands of lives. We are not in the events business — we are in the memories business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-6"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="gold-gradient text-[#7A0F19] px-8 py-4 rounded-full font-bold flex items-center gap-2 hover-glow transition-all duration-300"
            >
              Plan Your Event <ArrowUpRight size={16} />
            </motion.a>
            <motion.a
              href="/gallery"
              whileHover={{ x: 4 }}
              className="text-gray-400 hover:text-[#D4AF37] font-medium flex items-center gap-2 transition-colors duration-300"
            >
              <Play size={14} fill="currentColor" /> View Gallery
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right — Image */}
        <motion.div style={{ x: imageX }} className="relative hidden lg:block">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519167758251-7e84e2e8d7d6')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1, type: 'spring', stiffness: 150 }}
            className="absolute bottom-16 left-8 bg-[#D4AF37] text-[#7A0F19] px-6 py-4 rounded-2xl shadow-2xl"
          >
            <div className="font-playfair text-4xl font-bold leading-none">5K+</div>
            <div className="text-xs font-bold tracking-widest uppercase mt-1">Events Hosted</div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── HORIZONTAL MILESTONE STRIP ── */}
      <section className="py-16 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-0">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`flex-1 min-w-[140px] text-center px-6 py-6 relative
                  ${i < milestones.length - 1 ? 'border-r border-white/10' : ''}`}
              >
                <div className="font-playfair text-3xl font-bold text-[#D4AF37]">{m.year}</div>
                <div className="text-gray-500 text-xs tracking-widest uppercase mt-1">{m.event}</div>
                {/* Connecting dot */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50" />
              </motion.div>
            ))}
          </div>
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ originX: 0 }}
            className="h-px bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent mt-0"
          />
        </div>
      </section>

      {/* ── STATS — SVG Rings ── */}
      <section className="py-28 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            variants={wipe}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white">
              Our <span className="text-[#D4AF37]">Numbers</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl">Each ring represents a promise kept and a milestone earned over 5 years of dedication.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <RingCounter value="5K+" label="Events" />
            <RingCounter value="50K+" label="Guests" color="#C0A060" />
            <RingCounter value="5+" label="Years" color="#E8D5A3" />
            <RingCounter value="100%" label="Satisfaction" />
          </div>
        </div>
      </section>

      {/* ── IMAGE STRIP ── */}
      <section className="bg-[#0a0a0a] border-y border-white/5">
        <ImageStrip />
      </section>

      {/* ── STORY — Big text + aside ── */}
      <section className="py-28 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — large text */}
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-[#D4AF37] text-xs font-bold tracking-[0.4em] uppercase mb-8 block"
              >
                The Story
              </motion.p>

              {/* Clip-path reveal on each line */}
              {['In 2021, our founders stood', 'in an empty hall and saw', 'what others could not —', 'a place where magic lives.'].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    initial={{ y: '100%' }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.12, ease: [0.77, 0, 0.18, 1] }}
                    className="font-playfair text-4xl md:text-5xl font-bold text-white leading-tight"
                  >
                    {line}
                  </motion.h2>
                </div>
              ))}

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ originX: 0 }}
                className="h-px bg-[#D4AF37]/40 my-8 max-w-xs"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-gray-400 leading-relaxed text-lg max-w-lg"
              >
                Half a decade on, that vision has hosted 5,000+ events — weddings, anniversaries, corporate galas, milestone birthdays. We've been the canvas for every cherished chapter.
              </motion.p>
            </div>

            {/* Right — Masonry-style image collage */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 mt-8">
                <div className="relative overflow-hidden rounded-2xl h-64">
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                    src="https://oliveandorchards.netlify.app/photos/18.jpeg"
                    alt="Event at Olive & Orchard"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-[10px] text-[#D4AF37] font-bold tracking-widest uppercase">Est. 2021</div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl h-48">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src="https://oliveandorchards.netlify.app/photos/20.jpeg"
                    alt="Banquet Setup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl h-48">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src="https://oliveandorchards.netlify.app/photos/14.jpeg"
                    alt="Reception"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl h-64">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src="https://oliveandorchards.netlify.app/photos/5.jpeg"
                    alt="Celebration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-28 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Founder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <p className="text-[#D4AF37] text-xs font-bold tracking-[0.4em] uppercase mb-4">Leadership</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
                Mr. SANTHAKUMAR
              </h2>
              <p className="text-[#D4AF37] font-medium text-lg mb-8 tracking-wide">
                Founder
              </p>
              
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  Mr. SANTHAKUMAR became a builder with nothing but 5+ years of experience from his father Mr. Thangaraj Nadar, a tycoon in real estate in the 70's. Since then, he has built the company up from ground with nothing but diligence and meticulous leadership.
                </p>
                <p>
                  His hard work and dedication and an urge to learn made him stand amidst all storms the industry has seen over the years. He is a man of outbound knowledge and importance, acquired over the years. Rather than focusing on building a brand value he has acquired an undeniably everlasting face value for the company through him.
                </p>
                <p>
                  His business has grown only along with all his clients who trust him and his word and the friendly faces he has gained over the years in the field with his unreal charm. He is beyond proud to have passed on the company to his son and his counsel has, is, and will always be the strong pillar of Anush foundations.
                </p>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-[#050505] flex items-center justify-center group border border-[#D4AF37]/20">
                <div className="absolute inset-0 bg-gradient-to-tl from-[#D4AF37]/10 to-transparent opacity-50" />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="https://anushfoundations.com/wp-content/uploads/2024/06/SANTHAKUMAR.webp"
                  alt="Mr. Santhakumar - Founder"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
            </motion.div>
          </div>

          {/* Managing Director */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-[#050505] flex items-center justify-center group border border-[#D4AF37]/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent opacity-50" />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="https://anushfoundations.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-04-13-at-13.36.16-removebg-preview.png"
                  alt="Mr. Anush Kumar - Managing Director"
                  className="w-[85%] h-auto object-contain relative z-10 pt-10"
                />
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-[#D4AF37] text-xs font-bold tracking-[0.4em] uppercase mb-4">Leadership</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
                Mr. ANUSH KUMAR
              </h2>
              <p className="text-[#D4AF37] font-medium text-lg mb-8 tracking-wide">
                B.E., MBA — Managing Director
              </p>
              
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  Mr. ANUSH KUMAR, an MBA graduate and a third-generation developer, completed his Civil Engineering in an Anna University affiliated college. He joined work in a construction firm totally alienated from his forerunners to gain immense experience before joining work with his father.
                </p>
                <p>
                  He possesses great attention to detail and keeps a sharp eye when it comes to planning and execution of the construction. He is an avid hard worker and a perfectionist who is very passionate towards his business and in creating a new name.
                </p>
                <p>
                  He brings in meticulous leadership and a pioneering dream for his companies, bringing in a whole new perspective and potential. He has successfully created 3 brands in his late 20's. He also tries to be an active participant in the YMCA and other clubs and is known to be a socialite.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ACCORDION VALUES ── */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Sticky heading */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="lg:sticky lg:top-24"
              >
                <p className="text-[#D4AF37] text-xs font-bold tracking-[0.4em] uppercase mb-4">Our Philosophy</p>
                <h2 className="font-playfair text-4xl font-bold text-white leading-tight">
                  What We <span className="text-[#D4AF37]">Believe</span> In
                </h2>
                <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                  These principles shape every decision — from how we greet guests to how we design each space.
                </p>
              </motion.div>
            </div>

            {/* Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3 border-t border-white/10"
            >
              {accordion.map((item, i) => (
                <AccordionItem
                  key={i}
                  num={`0${i + 1}`}
                  title={item.title}
                  body={item.body}
                  isOpen={openIdx === i}
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DIAGONAL CTA ── */}
      <section className="relative py-28 overflow-hidden bg-[#050505]">
        {/* Diagonal gold slash */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-10 md:-left-20 top-0 bottom-0 w-[80%] md:w-[60%] bg-[#D4AF37] skew-x-[-10deg] origin-top-left" />
        </div>

        <div className="relative z-10 container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Gold side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:pr-10"
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#7A0F19] leading-tight">
                Ready to Create Something Beautiful?
              </h2>
              <p className="text-[#7A0F19] mt-4 text-lg font-medium">Your dream event is one conversation away.</p>
            </motion.div>

            {/* Dark side — buttons */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex flex-col sm:flex-row gap-4 md:justify-end"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#7A0F19] text-white px-9 py-4 rounded-full font-bold flex items-center gap-2 justify-center hover:bg-[#A81824] transition-colors duration-300"
              >
                Book Now <ArrowUpRight size={16} />
              </motion.a>
              <motion.a
                href="/gallery"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-white/20 text-white px-9 py-4 rounded-full font-bold flex items-center gap-2 justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
              >
                View Gallery
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
