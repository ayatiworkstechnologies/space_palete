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

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -38]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.92, 0.6]);

  const smoothScale = useSpring(scale, { stiffness: 80, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 30 });

  return (
    <section ref={ref} className="relative h-[300px] overflow-hidden bg-black">
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

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-6 pt-16 text-center md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 26, letterSpacing: "0.22em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.12em" }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-[34px] font-light uppercase leading-none tracking-[0.12em] text-white md:text-[46px] lg:text-[56px]">
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
