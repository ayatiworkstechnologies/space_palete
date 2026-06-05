"use client";

import { motion } from "framer-motion";

export default function ContactMapSection() {
  return (
    <section className="px-6 pb-10 md:px-12 md:pb-14 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-6">
          <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-[#E16E38]">
            Studio Map
          </p>
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            Visit Our <span className="text-[#E16E38]">Chennai Studio</span>
          </h2>
        </div>

        <div className="overflow-hidden rounded border border-white/10">
          <iframe
            title="Space Palette Headquarters Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.090288433109!2d80.2470228!3d12.9660741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dc59fa73829%3A0x3b819ec17a867e8d!2sSpace%20Palette!5e0!3m2!1sen!2sin!4v1779949372561!5m2!1sen!2sin"
            className="h-[320px] w-full md:h-[420px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
}
