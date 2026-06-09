"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutIntro() {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [55, -55]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1, 1.05]);
  const smoothY = useSpring(imageY, { stiffness: 80, damping: 30 });
  const smoothScale = useSpring(imageScale, { stiffness: 80, damping: 30 });

  return (
    <section className="relative overflow-hidden bg-black px-6 pb-12 pt-32 text-white md:px-12 md:pb-16 md:pt-36 lg:px-20 lg:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-12 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <h2 className="max-w-[420px] text-[31px] font-medium leading-[1.12] text-white md:text-[44px] lg:text-[48px]">
            About{" "}
            <span className="inline-block text-[#E16E38]">
              Space Palette
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-[15px] font-normal leading-8 tracking-[0.02em] text-white/90 md:text-[17px] md:leading-9 md:tracking-[0.035em]">
            Space Palette is a multidisciplinary design studio creating
            thoughtful spaces that balance functionality, identity, and
            experience. Every environment is shaped with clarity, precision, and
            a deep understanding of how people interact with space.
          </p>
        </motion.div>

        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: 55, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[360px] w-full overflow-hidden md:col-span-7 md:h-[520px] lg:h-[620px]"
        >
          <motion.div style={{ y: smoothY, scale: smoothScale }} className="absolute inset-0">
            <Image
              src="/assets/about/about-intro.png"
              alt="Space Palette Studio"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
