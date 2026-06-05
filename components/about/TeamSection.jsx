"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamPortraits = Array.from({ length: 26 }, (_, index) => ({
  id: index + 1,
  src: `/assets/teams/${index + 1}.png`,
}));

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-black px-7 py-12 text-white md:px-10 md:py-16 lg:px-14">
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 pb-12 md:grid-cols-[0.7fr_1fr] md:items-start md:gap-16 lg:pb-20"
        >
          <h2 className="max-w-[220px] text-[30px] font-medium leading-[0.95] tracking-normal text-white md:text-[38px]">
            Meet
            <br />
            Our Team
          </h2>

          <p className="max-w-[790px] text-[12px] font-medium uppercase leading-[1.75] tracking-[0.28em] text-white/72 md:text-[13px]">
            Our team brings together expertise in Interior Design, Workplace
            Strategy, Project Coordination and Turnkey execution to craft
            environments that balance aesthetics with business functionality,
            Every project is approached collaboratively, ensuring precision,
            innovation and seamless delivery at every stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-7 md:grid-cols-3 md:gap-y-10 lg:grid-cols-4 lg:gap-x-9 lg:gap-y-12">
          {teamPortraits.map((portrait, index) => (
            <motion.div
              key={portrait.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.025 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.7,
                delay: Math.min(index * 0.025, 0.18),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative aspect-[0.9] overflow-hidden rounded-[14px] bg-neutral-100 shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition-shadow duration-500 hover:shadow-[0_28px_70px_rgba(225,110,56,0.16)]"
            >
              <Image
                src={portrait.src}
                alt={`Space Palette team member ${portrait.id}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-center grayscale transition duration-700 ease-out group-hover:scale-[1.06] group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
