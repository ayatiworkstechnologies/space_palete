"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const services = [
  "Architecture",
  "Construction",
  "Interior Design",
  "Project management",
  "Landscape Design",
  "Sustainability",
  "Cost Consultancy",
  "MEP Design",
  "Structural Design",
];

const topRow = services.slice(0, 5);
const bottomRow = [
  { title: "Sustainability", index: 8 },
  { title: "Cost Consultancy", index: 7 },
  { title: "MEP Design", index: 6 },
  { title: "Structural Design", index: 5 },
];

function ServiceIcon({ active, iconNumber }) {
  return (
    <div
      className={`relative h-12 w-12 transition duration-500 ${
        active ? "scale-110 drop-shadow-[0_0_14px_rgba(244,122,60,0.45)]" : "opacity-95"
      }`}
    >
      <Image
        src={`/assets/icons/${iconNumber}.png`}
        alt=""
        fill
        sizes="48px"
        className="object-contain"
      />
    </div>
  );
}

function Connector({ position, active }) {
  return (
    <div
      className={`pointer-events-none hidden transition-colors duration-500 lg:block ${
        position === "top"
          ? "absolute left-full top-[55%] h-px w-7 border-t"
          : "absolute right-full top-[55%] h-px w-7 border-t"
      } ${active ? "border-[#f47a3c]" : "border-white/70"}`}
    />
  );
}

function ServiceTile({ title, index, active, className = "" }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{
        scale: active ? 1.045 : 1,
        backgroundColor: active ? "rgba(244, 122, 60, 0.08)" : "rgba(0, 0, 0, 0)",
      }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        opacity: { duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        backgroundColor: { duration: 0.45 },
      }}
      className={`relative flex h-36 flex-col justify-between border px-4 py-4 transition-colors duration-500 sm:h-40 sm:px-5 ${
        active ? "border-[#f47a3c] shadow-[0_0_34px_rgba(244,122,60,0.12)]" : "border-white/10"
      } ${className}`}
    >
      <div className="flex items-start justify-between">
        <span className={`select-none text-[56px] font-bold leading-none tracking-[-0.12em] transition-colors duration-500 sm:text-[72px] ${active ? "text-[#f47a3c]/80" : "text-white/35"}`}>
          {number}
        </span>
        <ServiceIcon active={active} iconNumber={index + 1} />
      </div>
      <h3 className={`text-center text-[17px] font-semibold leading-7 tracking-[0.24em] transition-colors duration-500 sm:text-[19px] ${active ? "text-[#f47a3c]" : "text-white"}`}>
        {title}
      </h3>
      {index < 4 && <Connector position="top" active={active} />}
      {index > 4 && index < 8 && <Connector position="bottom" active={active} />}
    </motion.article>
  );
}

export default function ServicesProcess() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let visible = false;
    const interval = window.setInterval(() => {
      if (!visible) return;
      setActiveIndex((currentIndex) => (currentIndex + 1) % services.length);
    }, 1400);

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => {
      window.clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-16 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Services
          </h2>
          <p className="mt-7 text-sm leading-7 tracking-[0.28em] text-white/85 md:text-base">
            Space Palette delivers end-to-end turnkey solutions, managing
            design, execution, and final delivery through one integrated
            process. The result is a seamless experience with spaces completed
            to the finest detail.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-12 grid max-w-[1000px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {topRow.map((service, index) => (
            <ServiceTile
              key={service}
              title={service}
              index={index}
              active={index === activeIndex}
            />
          ))}

          {bottomRow.map((service, index) => (
            <ServiceTile
              key={service.title}
              title={service.title}
              index={service.index}
              active={service.index === activeIndex}
              className={index === 0 ? "lg:col-start-2" : ""}
            />
          ))}

          <div
            className={`pointer-events-none hidden rounded-r-lg border-y border-r transition-colors duration-500 lg:absolute lg:bottom-[70px] lg:right-[-46px] lg:block lg:h-[164px] lg:w-[46px] ${
              activeIndex >= 4 && activeIndex <= 5 ? "border-[#f47a3c]" : "border-white/70"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
