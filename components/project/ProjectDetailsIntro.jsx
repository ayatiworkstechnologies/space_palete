"use client";

import { motion } from "framer-motion";
import DotPattern from "@/components/DotPattern";

export default function ProjectDetailsIntro({ project }) {
  const [highlightWord, ...restTitle] = project.title.split(" ");

  return (
    <section className="relative overflow-hidden bg-black px-6 py-12 text-white md:px-12 md:py-16 lg:px-20">
      <DotPattern variant="oval" density="normal" />
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Top grid: Title/Description and Video */}
        <div className="grid gap-10 md:grid-cols-[1fr_0.82fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              {highlightWord}{" "}
              <span className="text-[#E16E38]">
                {restTitle.join(" ") || "Project"}
              </span>
            </h2>

            <div className="mt-7 max-w-xl space-y-5 text-[16px] leading-8 tracking-[0.035em] text-white/90 md:text-[17px] md:leading-9">
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 55, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ delay: 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative ml-auto h-[520px] w-full max-w-[460px] overflow-hidden md:h-[650px]"
          >
            <video
              key={project.introVideo}
              src={project.introVideo}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </motion.div>
        </div>

        {/* Bottom row: Details laid out horizontally */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-b border-white/12 py-8 md:grid-cols-5"
        >
          {project.details.map(([label, value]) => (
            <div key={label} className="flex flex-col gap-2.5 font-secondary">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                {label}
              </span>
              <span className="text-[15px] font-bold tracking-[0.08em] text-white">
                {value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
