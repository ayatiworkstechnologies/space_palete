"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discover & Define",
    text: "We begin by understanding your lifestyle, preferences, functional needs, and design aspirations to establish a clear creative direction.",
    image: "/assets/about/about-1.png",
  },
  {
    number: "02",
    title: "Design & Curate",
    text: "Our team develops layouts, concepts, and carefully selected materials and finishes that bring your vision to life.",
    image: "/assets/about/about-2.png",
  },
  {
    number: "03",
    title: "Build & Execute",
    text: "Skilled craftsmen and project managers execute every detail with precision, quality, and seamless coordination.",
    image: "/assets/about/about-3.png",
  },
  {
    number: "04",
    title: "Style & Deliver",
    text: "Final styling and quality checks ensure your space is completed to perfection and ready to be experienced.",
    image: "/assets/about/about-4.png",
  },
];

function ProcessStep({ step, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.05]);

  const smoothY = useSpring(imageY, {
    stiffness: 80,
    damping: 28,
  });

  const smoothScale = useSpring(imageScale, {
    stiffness: 80,
    damping: 28,
  });

  const reverse = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`grid items-center gap-12 py-14 md:grid-cols-2 md:py-20 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <h3 className="text-[70px] font-light leading-none tracking-[0.14em] md:text-[92px]">
          {step.number}
        </h3>

        <h4 className="mt-8 max-w-[300px] text-[34px] font-light leading-[1.1] tracking-[0.22em] md:text-[44px]">
          {step.title}
        </h4>

        <div className="mt-8 h-px w-full max-w-[520px] bg-white/18" />

        <p className="mt-6 max-w-[520px] text-[12px] leading-6 tracking-[0.2em] text-white/65 md:text-[13px]">
          {step.text}
        </p>
      </div>

      <motion.div
        style={{ y: smoothY, scale: smoothScale }}
        className="relative mx-auto h-[260px] w-full max-w-[360px] overflow-hidden md:h-[330px]"
      >
        <Image
          src={step.image}
          alt={step.title}
          fill
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

export default function ServicesProcess() {
  return (
    <section id="services" className="relative bg-black px-6 py-16 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[34px] font-light tracking-[-0.03em] md:text-[46px]">
            Services
          </h2>

          <p className="mt-6 max-w-4xl text-[12px] leading-6 tracking-[0.2em] text-white/65 md:text-[13px]">
            Space Palette delivers end-to-end turnkey solutions, managing
            design, execution, and final delivery through one integrated
            process.
          </p>
        </motion.div>

        <div className="mt-12">
          {steps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}