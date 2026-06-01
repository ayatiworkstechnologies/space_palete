"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative px-6 py-10 md:px-12 md:py-16 lg:px-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl"
      >
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.34em] text-[#f47a3c]">
          Get in Touch
        </p>

        <h1 className="text-3xl font-medium tracking-tight md:text-5xl">
          Let&apos;s build <br className="hidden md:block" />
          <span className="text-white">something beautiful.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 tracking-[0.08em] text-white md:text-lg md:leading-8">
          Whether you have a specific project in mind or just want to explore the
          possibilities, our team is ready to listen, design, and deliver spaces
          that exceed your expectations.
        </p>
      </motion.div>
    </section>
  );
}
