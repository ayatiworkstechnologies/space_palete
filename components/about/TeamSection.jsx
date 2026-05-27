"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-14 text-white md:px-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-6xl text-center"
      >
        <h2 className="text-[30px] font-light tracking-[-0.03em] md:text-[42px]">
          About the <span className="text-[#f47a3c]">Team</span>
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-[12px] leading-6 tracking-[0.2em] text-white/65 md:text-[13px]">
          A collaborative team of architects, designers, and project specialists
          drives every project with precision and attention to detail.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-12 h-[260px] max-w-5xl md:h-[360px]"
        >
          <Image
            src="/assets/about/teams.png"
            alt="Space Palette Team"
            fill
            className="object-contain object-bottom"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}