"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import DotPattern from "@/components/DotPattern";

export default function AboutIntro() {
  return (
    <section className="relative bg-black px-6 py-20 text-white md:px-12 md:py-28 lg:px-20">
      <DotPattern variant="scatter" density="low" accent />
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1fr_0.75fr]">
        <motion.div
          initial={{ opacity: 0, x: -55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[30px] font-light tracking-[-0.03em] md:text-[42px]">
            About <span className="text-[#f47a3c]">Space palette</span>
          </h2>

          <p className="mt-8 max-w-xl text-[13px] leading-7 tracking-[0.18em] text-white/70 md:text-[14px]">
            Space Palette is a multidisciplinary design studio creating
            thoughtful spaces that balance functionality, identity, and
            experience. Every environment is shaped with clarity, precision, and
            a deep understanding of how people interact with space.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 55, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative ml-auto h-[330px] w-full max-w-[380px] overflow-hidden md:h-[420px]"
        >
          <Image
            src="/assets/about/about-intro.png"
            alt="Space Palette Studio"
            fill
            className="object-cover transition duration-700 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}