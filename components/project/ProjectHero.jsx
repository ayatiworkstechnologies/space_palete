"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectHero({
  title = "Project",
  image = "/project/hero.jpg",
  leftText = "Crafted Living Spaces",
  rightText = "Chennai",
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
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Animated dots */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 26 }).map((_, index) => (
          <span
            key={index}
            className="project-dot absolute block rounded-full bg-white/70"
            style={{
              left: `${(index * 21) % 100}%`,
              top: `${(index * 33) % 100}%`,
              width: index % 4 === 0 ? 3 : 2,
              height: index % 4 === 0 ? 3 : 2,
              animationDelay: `${index * 0.16}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 42, letterSpacing: "0.4em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.24em" }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-[42px] font-light tracking-[0.24em] text-white md:text-[68px] lg:text-[82px]">
            {title}
          </h1>

          <p className="mt-28 text-[10px] tracking-[0.18em] text-white/80 md:mt-36">
            Reveal the Elegance
          </p>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, x: -28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.45, duration: 0.75 }}
        className="absolute left-8 top-1/2 z-10 max-w-[130px] text-[12px] leading-5 tracking-[0.22em] text-white"
      >
        {leftText}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55, duration: 0.75 }}
        className="absolute right-8 top-1/2 z-10 text-[12px] tracking-[0.22em] text-white"
      >
        {rightText}
      </motion.p>

      <style>{`
        @keyframes projectDotMove {
          0% {
            transform: translate3d(0, 0, 0) scale(0.75);
            opacity: 0.18;
          }

          50% {
            transform: translate3d(10px, -14px, 0) scale(1.15);
            opacity: 0.85;
          }

          100% {
            transform: translate3d(-8px, 12px, 0) scale(0.75);
            opacity: 0.15;
          }
        }

        .project-dot {
          animation: projectDotMove 4s ease-in-out infinite alternate;
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
}
