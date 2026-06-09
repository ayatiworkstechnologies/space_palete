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
          <h2 className="mx-auto max-w-[680px] text-[31px] font-medium leading-[1.12] text-white md:text-[44px] lg:text-[48px]">
            About{" "}
            <span className="inline-block text-[#E16E38]">
              Space Palette
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-[15px] font-normal leading-8 tracking-[0.02em] text-white/90 md:text-[17px] md:leading-9 md:tracking-[0.035em]">
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
