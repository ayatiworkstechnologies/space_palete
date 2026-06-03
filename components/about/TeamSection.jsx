"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import ScatteredDotsBackground from "@/components/ScatteredDotsBackground";

export default function TeamSection() {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [22, -22]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.03, 1]);
  const smoothY = useSpring(imageY, { stiffness: 80, damping: 28 });
  const smoothScale = useSpring(imageScale, { stiffness: 80, damping: 28 });

  return (
    <section className="relative overflow-hidden bg-black px-6 py-8 text-white md:px-12 md:py-12">
      <ScatteredDotsBackground color="rgba(255, 255, 255, 0.25)" maxDotSize={2.5} />
      <motion.div
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-12 lg:gap-12"
      >
        <motion.div
          initial={{ opacity: 0, x: -42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.08, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            About the <span className="text-[#f47a3c]">Team</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/90 md:text-lg md:leading-8">
            A collaborative team of architects, designers, and project specialists
            drives every project with precision and attention to detail.
          </p>

        </motion.div>

        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[300px] overflow-hidden md:col-span-7 md:h-[360px] lg:h-[400px]"
        >
          <motion.div style={{ y: smoothY, scale: smoothScale }} className="absolute inset-0">
            <Image
              src="/assets/about/team.png"
              alt="Space Palette Team"
              fill
              sizes="(max-width: 768px) 100vw, 62vw"
              className="object-contain object-center"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
