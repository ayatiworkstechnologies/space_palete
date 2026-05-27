"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative px-6 py-12 md:px-12 md:py-20 lg:px-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl"
      >
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.34em] text-[#f47a3c]">
          Get in Touch
        </p>

        <h1 className="text-[42px] font-light leading-[0.92] tracking-[-0.04em] md:text-[68px] lg:text-[86px]">
          Let&apos;s build <br className="hidden md:block" />
          <span className="text-white/60">something beautiful.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-[13px] leading-7 tracking-[0.18em] text-white/70 md:text-[14px]">
          Whether you have a specific project in mind or just want to explore the
          possibilities, our team is ready to listen, design, and deliver spaces
          that exceed your expectations.
        </p>
      </motion.div>
    </section>
  );
}
