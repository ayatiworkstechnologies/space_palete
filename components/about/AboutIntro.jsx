"use client";

import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pb-12 pt-32 text-white md:px-12 md:pb-16 md:pt-36 lg:px-20 lg:pt-40">
      <div className="mx-auto flex max-w-4xl items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl font-medium tracking-tight text-white md:text-5xl"
          >
            About{" "}
            <span className="inline-block text-[#E16E38]">
              Space Palette
            </span>
          </motion.h2>

          <p className="text-center mt-8 max-w-3xl text-lg leading-loose text-white/90 md:mt-12 md:leading-relaxed font-light">
            Space Palette is a multidisciplinary design studio creating
            thoughtful spaces that balance functionality, identity, and
            experience. Every environment is shaped with clarity, precision, and
            a deep understanding of how people interact with space.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
