"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectHero({
  title = "Project",
  image = "/project/hero.jpg",
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.8, 0]);

  const smoothScale = useSpring(scale, { stiffness: 80, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 30 });

  return (
    <section ref={ref} className="relative h-[72vh] overflow-hidden bg-black md:h-screen">
      <motion.div
        style={{ scale: smoothScale, y: smoothY, opacity }}
        initial={{ clipPath: "inset(0 0 100% 0)", y: 36, opacity: 0 }}
        animate={{ clipPath: "inset(0 0 0% 0)", y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 42, letterSpacing: "0.4em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.24em" }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-[42px] font-light tracking-[0.24em] text-white md:text-[68px] lg:text-[82px]">
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
