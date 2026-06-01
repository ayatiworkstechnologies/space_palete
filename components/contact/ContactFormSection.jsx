"use client";

import { motion } from "framer-motion";
import CommonButton from "@/components/CommonButton";

export default function ContactFormSection() {
  return (
    <section className="mb-6 px-6 py-8 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">

        {/* Contact Details Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="mb-6 text-[24px] font-medium tracking-tight md:text-[30px]">
              Contact Our Studio
            </h2>

            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#f47a3c] mb-2 font-bold">
                  Head Quarters
                </p>
                <p className="max-w-[320px] text-[14px] leading-relaxed text-white/95 font-secondary">
                  No.46, 3rd Floor, GSquare Building,
                  <br />
                  Rajiv Gandhi Salai, OMR,
                  <br />
                  Kandanchavadi, Chennai, Tamil Nadu 600096.
                </p>

              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-2 font-bold">
                  Other Locations
                </p>
                <p className="max-w-[320px] text-[14px] leading-relaxed text-white/95 font-secondary">
                  Bangalore, Hyderabad, Coimbatore.
                </p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-2 font-bold">
                  Email
                </p>
                <a
                  href="mailto:uma@spacepalette.net"
                  className="block text-[15px] font-medium text-white transition-colors hover:text-[#f47a3c]"
                >
                  uma@spacepalette.net
                </a>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-2 font-bold">
                  Phone
                </p>
                <a
                  href="tel:+917338811688"
                  className="block text-[15px] font-medium text-white transition-colors hover:text-[#f47a3c]"
                >
                  +91 7338811688
                </a>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Contact Form Column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md md:p-8">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-white mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 py-2 text-[14px] text-white placeholder-white/20 focus:border-[#f47a3c] focus:outline-none transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-white mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-white/20 py-2 text-[14px] text-white placeholder-white/20 focus:border-[#f47a3c] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-white/20 py-2 text-[14px] text-white placeholder-white/20 focus:border-[#f47a3c] focus:outline-none transition-colors"
                  placeholder="+91"
                />
              </div>

              <div className="relative">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white mb-2">Project Details *</label>
                <textarea
                  rows="4"
                  className="w-full bg-transparent border-b border-white/20 py-2 text-[14px] text-white placeholder-white/20 focus:border-[#f47a3c] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your space, requirements, and vision..."
                  required
                ></textarea>
              </div>

              <CommonButton
                type="submit"
                className="w-full md:w-auto"
                showIcon={false}
              >
                Submit Inquiry
              </CommonButton>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
