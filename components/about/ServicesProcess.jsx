"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

function ServiceIcon({ active }) {
  return (
    <div className={`relative h-12 w-12 transition duration-500 ${active ? "scale-110" : ""}`}>
      <div className={`absolute bottom-0 left-0 h-1 w-full transition-colors duration-500 ${active ? "bg-[#f47a3c]" : "bg-white"}`} />
      <div className={`absolute bottom-0 left-0 h-full w-1 transition-colors duration-500 ${active ? "bg-[#f47a3c]" : "bg-white"}`} />
      <div className={`absolute bottom-0 right-0 h-full w-1 transition-colors duration-500 ${active ? "bg-[#f47a3c]" : "bg-white"}`} />
      <div className={`absolute left-1/2 top-2 h-8 w-8 -translate-x-1/2 border-4 border-t-0 transition-colors duration-500 ${active ? "border-[#f47a3c]" : "border-white"}`}>
        <div className={`absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 border-l-4 border-t-4 transition-colors duration-500 ${active ? "border-[#f47a3c]" : "border-white"}`} />
        <div className={`absolute bottom-0 left-1/2 h-4 w-2 -translate-x-1/2 transition-colors duration-500 ${active ? "bg-[#f47a3c]" : "bg-white"}`} />
      </div>
      {Array.from({ length: 6 }).map((_, index) => (
        <span
          key={index}
          className="absolute bottom-0 h-2 w-1 bg-black"
          style={{ left: `${8 + index * 6}px` }}
        />
      ))}
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className="absolute left-0 h-1 w-2 bg-black"
          style={{ top: `${8 + index * 7}px` }}
        />
      ))}
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

function ServiceTile({ title, index, active }) {
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
      }`}
    >
      <div className="flex items-start justify-between">
        <span className={`select-none text-[56px] font-bold leading-none tracking-[-0.12em] transition-colors duration-500 sm:text-[72px] ${active ? "text-[#f47a3c]/80" : "text-white/35"}`}>
          {number}
        </span>
        <ServiceIcon active={active} />
      </div>
      <h3 className={`text-center text-[17px] font-semibold leading-7 tracking-[0.24em] transition-colors duration-500 sm:text-[19px] ${active ? "text-[#f47a3c]" : "text-white"}`}>
        {title}
      </h3>
      {index < 4 && <Connector position="top" active={active} />}
      {index > 4 && <Connector position="bottom" active={active} />}
    </motion.article>
  );
}

export default function ServicesProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % services.length);
    }, 1400);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="services" className="relative overflow-hidden bg-black px-6 py-16 text-white md:px-12 lg:px-20">
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
          {services.slice(0, 5).map((service, index) => (
            <ServiceTile
              key={service}
              title={service}
              index={index}
              active={index === activeIndex}
            />
          ))}
        </div>

        <div className="relative mx-auto mt-5 grid max-w-[784px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(5).map((service, index) => {
            const visualIndex = services.length - index - 1;

            return (
              <ServiceTile
                key={service}
                title={service}
                index={visualIndex}
                active={visualIndex === activeIndex}
              />
            );
          })}
        </div>

        <div className={`pointer-events-none absolute right-[7.6%] top-[49%] hidden h-[160px] w-[46px] rounded-r-lg border-y border-r transition-colors duration-500 lg:block ${activeIndex >= 4 && activeIndex <= 5 ? "border-[#f47a3c]" : "border-white/70"}`} />
      </div>
    </section>
  );
}
