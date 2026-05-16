'use client';

import { motion } from 'framer-motion';
import { Users, Building, Utensils, Car, Wind, Camera } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  const features = [
    {
      icon: <Users size={48} />,
      title: "Spacious Hall",
      description: "Accommodate up to 500 guests with comfortable seating and elegant ambiance",
      image: "https://content.jdmagicbox.com/v2/comp/chennai/u6/044pxx44.xx44.220224150559.d9u6/catalogue/olive-and-orchard-kodambakkam-chennai-banquet-halls-mqf5exf5nl.jpg"
    },
    {
      icon: <Building size={48} />,
      title: "Luxury Interiors",
      description: "Premium décor with modern amenities and sophisticated design elements",
      image: "https://cdn.venuelook.com/uploads/space_38868/1715169309_595x400.png"
    },
    {
      icon: <Utensils size={48} />,
      title: "Catering Support",
      description: "Full catering services with customizable menu options for all occasions",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033"
    },
    {
      icon: <Car size={48} />,
      title: "Parking Facility",
      description: "Ample parking space for 200+ vehicles with valet service available",
      image: "https://img.mandap.com/photos/pictures/009/086/413/new_large/unnamed-2025-11-07T151837.867.webp"
    },
    {
      icon: <Wind size={48} />,
      title: "AC Hall",
      description: "Climate-controlled environment with advanced air conditioning system",
      image: "https://subhikshaa.com/board/uploads/venues/824a1.jpg"
    },
    {
      icon: <Camera size={48} />,
      title: "Photography Friendly",
      description: "Perfect lighting and picturesque spots for memorable photographs",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a"
    }
  ];

  const testimonials = [
    {
      name: "Priya & Rajesh",
      event: "Wedding Reception",
      rating: 5,
      testimonial: "Olive & Orchard made our wedding reception absolutely magical. The venue was stunning, the service was impeccable, and our guests are still talking about how beautiful everything was. Truly a dream venue!"
    },
    {
      name: "Michael Chen",
      event: "Corporate Gala",
      rating: 5,
      testimonial: "We hosted our annual corporate gala at Olive & Orchard and it exceeded all expectations. The professional staff handled everything flawlessly. Highly recommend for any corporate event."
    },
    {
      name: "Sarah Johnson",
      event: "Sweet 16 Birthday",
      rating: 5,
      testimonial: "My daughter's sweet 16 birthday was perfect thanks to Olive & Orchard. The team went above and beyond to make it special. The venue was beautiful and the service was outstanding!"
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero logo="/olive-logo.png" />
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Why Choose <span className="text-[#D4AF37]">Olive & Orchard</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience luxury and elegance with our world-class facilities and exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ServiceCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37]/20 blur-3xl"></div>
                <img
                  src="https://imgcdn.bookmywed.in/UploadImages/venue/1b65f645-c7c4-4d7d-8a2e-4febab243580-gallery.jpg"
                  alt="Luxury Banquet Hall"
                  className="rounded-2xl shadow-2xl relative z-10"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
                Creating <span className="text-[#D4AF37]">Timeless</span> Memories
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                At Olive & Orchard Banquet Hall, we understand that every celebration is unique. 
                With over a decade of excellence in hosting memorable events, we've perfected the 
                art of creating magical experiences that last a lifetime.
              </p>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our commitment to excellence, attention to detail, and personalized service ensures 
                that your special day exceeds all expectations. From intimate gatherings to grand 
                celebrations, we're here to make your dreams come true.
              </p>

              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block gold-gradient text-[#7A0F19] px-8 py-3 rounded-full font-semibold hover-glow transition-all duration-300"
              >
                Learn More About Us
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Our <span className="text-[#D4AF37]">Beautiful</span> Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Take a glimpse at the magical moments we've helped create
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://oliveandorchards.netlify.app/photos/19.jpeg",
              "https://oliveandorchards.netlify.app/photos/18.jpeg",
              "https://oliveandorchards.netlify.app/photos/20.jpeg",
              "https://oliveandorchards.netlify.app/photos/7.jpeg"
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Event ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.a
              href="/gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-[#7A0F19] transition-all duration-300"
            >
              View Full Gallery
            </motion.a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              What Our <span className="text-[#D4AF37]">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our happy clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
