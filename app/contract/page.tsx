'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Contract() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-[#D4AF37] font-playfair"
          >
            Venue Contract & Terms
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Please review the agreement details carefully before confirming your booking. Our transparent policies ensure a seamless and unforgettable experience.
          </motion.p>
        </div>
      </section>

      {/* Contract Content */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-gray-200"
          >
            <h2 className="text-3xl font-semibold text-white">1. Booking & Payment</h2>
            <p>• A non‑refundable deposit of 30% is required to secure the date.<br />• Full payment must be received 14 days before the event.<br />• Accepted payment methods: credit card, bank transfer, or cash.</p>
            <h2 className="text-3xl font-semibold text-white">2. Cancellation Policy</h2>
            <p>• Cancellations made more than 30 days prior receive a 50% refund of the deposit.<br />• Cancellations within 30 days are non‑refundable.<br />• In case of force‑majeure, a full refund will be considered on a case‑by‑case basis.</p>
            <h2 className="text-3xl font-semibold text-white">3. Venue Usage</h2>
            <p>• Access to the venue is granted from 8:00 AM until 11:00 PM on the event day.<br />• Any alterations to the layout must be approved in writing.
              <br />• External vendors must be pre‑approved and provide proof of insurance.</p>
            <h2 className="text-3xl font-semibold text-white">4. Liability & Insurance</h2>
            <p>• The client is responsible for any damage caused during the event.<br />• A security deposit of $500 will be collected and refunded after inspection.
              <br />• The venue holds liability insurance covering up to $1,000,000.</p>
            <h2 className="text-3xl font-semibold text-white">5. Governing Law</h2>
            <p>This agreement shall be governed by the laws of the jurisdiction where Olive & Orchard is located.</p>
            <p className="mt-8 text-gray-400 text-sm">
              By confirming your booking, you acknowledge that you have read and agreed to the terms outlined above.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
