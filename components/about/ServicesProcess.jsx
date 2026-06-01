"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import DotPattern from "@/components/DotPattern";

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
    <div
      ref={ref}
      className={`grid items-center gap-12 py-10 md:grid-cols-2 md:py-14 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="text-[70px] font-light leading-none tracking-[0.14em] md:text-[92px]">
          {step.number}
        </h3>

        <h4 className="mt-8 max-w-[300px] text-[34px] font-light leading-[1.1] tracking-[0.22em] md:text-[44px]">
          {step.title}
        </h4>

        <div className="mt-8 h-px w-full max-w-[520px] bg-white/18" />

        <p className="mt-6 max-w-[520px] text-lg leading-8 tracking-[0.08em] text-white md:text-xl md:leading-9">
          {step.text}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.9, delay: 0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          style={{ y: smoothY, scale: smoothScale }}
          className="relative mx-auto h-[260px] w-full max-w-[360px] overflow-hidden md:h-[330px]"
        >
          <Image
            src={step.image}
            alt={step.title}
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function ServicesProcess() {
  return (
    <section id="services" className="relative bg-black px-6 py-12 text-white md:px-12 lg:px-20">
      <DotPattern variant="stardust" density="low" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            Services
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 tracking-[0.08em] text-white md:text-xl md:leading-9">
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
