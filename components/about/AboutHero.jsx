"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function AboutHero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.82, 1], [1, 0.9, 0.08]);

  const smoothScale = useSpring(scale, {
    stiffness: 80,
    damping: 28,
  });

  const smoothY = useSpring(y, {
    stiffness: 80,
    damping: 28,
  });

  return (
    <section ref={ref} className="relative h-[75vh] overflow-hidden bg-black md:h-screen">
      <motion.div
        style={{ scale: smoothScale, y: smoothY, opacity }}
        className="absolute inset-0"
      >
        <Image
          src="/assets/about/about-hero.png"
          alt="About Space Palette"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-black/5" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 45, letterSpacing: "0.35em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.22em" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 className="text-[42px] font-light tracking-[0.22em] md:text-[62px] lg:text-[78px]">
            About
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
