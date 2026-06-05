"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
    <section className="relative bg-black px-6 py-10 text-white md:px-12 md:py-16">
      {/* <DotPattern variant="radial" density="low" accent /> */}
      <motion.div
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-12 lg:gap-14"
      >
        <motion.div
          initial={{ opacity: 0, x: -48, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[340px] overflow-hidden md:col-span-7 md:h-[500px]"
        >
          <Image
            src="/assets/about/founder.png"
            alt="Space Palette founders"
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-contain object-bottom transition duration-700 hover:scale-[1.02]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            About <span className="text-[#E16E38]">Founders</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/90 md:text-lg md:leading-8">
            The founders bring together creative vision and executional expertise,
            creating a seamless balance between design intent and delivery.
          </p>

          <div className="mt-9 divide-y divide-white/10 border-y border-white/10">
            {founders.map((founder) => (
              <div key={founder.name} className="py-5">
                <h3 className="text-xl font-semibold text-white">
                  {founder.name}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/80">
                  {founder.role}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
