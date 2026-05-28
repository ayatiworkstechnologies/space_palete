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

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0]);

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
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/10" />

      {/* Small dotted particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 22 }).map((_, index) => (
          <span
            key={index}
            className="about-dot absolute block rounded-full bg-white"
            style={{
              left: `${(index * 23) % 100}%`,
              top: `${(index * 31) % 100}%`,
              width: index % 4 === 0 ? 3 : 2,
              height: index % 4 === 0 ? 3 : 2,
              animationDelay: `${index * 0.18}s`,
            }}
          />
        ))}
      </div>

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

          <p className="mt-28 text-[10px] tracking-[0.18em] text-white md:mt-36">
            Reveal the Elegance
          </p>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.45, duration: 0.8 }}
        className="absolute left-8 top-1/2 z-10 max-w-[120px] text-[12px] tracking-[0.22em] text-white"
      >
        Crafted Living Spaces
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55, duration: 0.8 }}
        className="absolute right-8 top-1/2 z-10 text-[12px] tracking-[0.22em] text-white"
      >
        Chennai
      </motion.p>

      <style>{`
        @keyframes aboutDotBlink {
          0% {
            transform: translate3d(0, 0, 0) scale(0.7);
            opacity: 0.16;
          }
          50% {
            transform: translate3d(10px, -12px, 0) scale(1.2);
            opacity: 0.9;
          }
          100% {
            transform: translate3d(-8px, 10px, 0) scale(0.75);
            opacity: 0.12;
          }
        }

        .about-dot {
          animation: aboutDotBlink 4s ease-in-out infinite alternate;
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
}