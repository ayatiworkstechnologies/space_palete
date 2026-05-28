"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import DotPattern from "@/components/DotPattern";

export default function ProjectDetailsIntro({ project }) {
  const [highlightWord, ...restTitle] = project.title.split(" ");

  return (
    <section className="relative overflow-hidden bg-black px-6 py-14 text-white md:px-12 md:py-20 lg:px-20">
      <DotPattern variant="oval" density="normal" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_0.82fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            {highlightWord}{" "}
            <span className="text-[#f47a3c]">
              {restTitle.join(" ") || "Project"}
            </span>
          </h2>

          <div className="mt-8 max-w-xl space-y-6 text-lg leading-8 tracking-[0.08em] text-white md:text-xl md:leading-9">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 max-w-[460px]">
            {project.details.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[0.7fr_1fr] border-b border-white/12 py-4 text-[13px] tracking-[0.2em]"
              >
                <span className="text-white">{label}</span>
                <span className="text-white">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 55, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ delay: 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative ml-auto h-[420px] w-full max-w-[430px] overflow-hidden md:h-[560px]"
        >
          <Image
            src={project.coverImage}
            alt={`${project.title} interior`}
            fill
            className="object-cover transition duration-700 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}
