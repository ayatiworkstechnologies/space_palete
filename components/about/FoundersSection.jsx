"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import DotPattern from "@/components/DotPattern";

const founders = [
  {
    name: "Riya",
    role: "Founder of Space Palette",
    image: "/assets/about/member-1.png",
  },
  {
    name: "Rahul",
    role: "CEO of Space Palette",
    image: "/assets/about/member-2.png",
  },
];

export default function FoundersSection() {
  return (
    <section className="relative bg-black px-6 py-12 text-white md:px-12 md:py-20">
      {/* <DotPattern variant="radial" density="low" accent /> */}
      <motion.div
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-5xl text-center"
      >
        <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
          About <span className="text-[#f47a3c]">Founders</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 tracking-[0.08em] text-white md:text-xl md:leading-9">
          The founders bring together creative vision and executional expertise,
          creating a seamless balance between design intent and delivery.
        </p>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 items-end gap-10">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group text-center"
            >
              <div className="relative mx-auto h-[210px] w-full max-w-[210px] overflow-hidden md:h-[280px] md:max-w-[260px]">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-contain object-bottom transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="border-t border-white/10 pt-4">
                <h3 className="text-lg font-semibold text-white">
                  {founder.name}
                </h3>
                <p className="mt-2 text-sm tracking-[0.2em] text-white">
                  {founder.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
