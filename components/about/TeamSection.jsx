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
        <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
          About the <span className="text-[#f47a3c]">Team</span>
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 tracking-[0.08em] text-white md:text-xl md:leading-9">
          A collaborative team of architects, designers, and project specialists
          drives every project with precision and attention to detail.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[360px] max-w-5xl md:h-[440px]"
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
