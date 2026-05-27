"use client";

import { motion } from "framer-motion";
import CommonButton from "@/components/CommonButton";

export default function ContactFormSection() {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-20 mb-20">
      <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        
        {/* Contact Details Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="text-[28px] font-light tracking-[-0.03em] md:text-[38px] mb-8">
              Studio Locations
            </h2>
            
            <div className="space-y-10">
              {/* Chennai Studio */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#f47a3c] mb-2">
                  Chennai (HQ)
                </p>
                <p className="text-[13px] leading-7 tracking-[0.1em] text-white/80 max-w-[280px]">
                  123 Design Avenue, 4th Floor,<br />
                  Besant Nagar, Chennai 600090
                </p>
              </div>

              {/* Hyderabad Studio */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-2">
                  Hyderabad
                </p>
                <p className="text-[13px] leading-7 tracking-[0.1em] text-white/80 max-w-[280px]">
                  45 Jubilee Hills Road No. 36,<br />
                  Hyderabad, Telangana 500033
                </p>
              </div>

              {/* Bangalore Studio */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-2">
                  Bangalore
                </p>
                <p className="text-[13px] leading-7 tracking-[0.1em] text-white/80 max-w-[280px]">
                  89 Indiranagar 100ft Road,<br />
                  Bengaluru, Karnataka 560038
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-2">
                  Direct Contact
                </p>
                <p className="text-[14px] tracking-[0.1em] text-white/80">
                  <a href="mailto:hello@spacepalette.net" className="hover:text-[#f47a3c] transition-colors block mb-1">
                    hello@spacepalette.net
                  </a>
                  <a href="tel:+919876543210" className="hover:text-[#f47a3c] transition-colors">
                    +91 98765 43210
                  </a>
                </p>
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
          <div className="bg-white/[0.03] border border-white/10 p-8 md:p-12 backdrop-blur-md">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-2 text-[14px] text-white placeholder-white/20 focus:border-[#f47a3c] focus:outline-none transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-white/20 py-2 text-[14px] text-white placeholder-white/20 focus:border-[#f47a3c] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-transparent border-b border-white/20 py-2 text-[14px] text-white placeholder-white/20 focus:border-[#f47a3c] focus:outline-none transition-colors"
                  placeholder="+91"
                />
              </div>

              <div className="relative">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">Project Details *</label>
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
