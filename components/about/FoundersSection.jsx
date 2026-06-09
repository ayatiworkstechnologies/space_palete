"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Uma Maheshwari",
    role: "Founder of Space Palette",
  },
  {
    name: "V.Vasudevan",
    role: "CEO of Space Palette",
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
        {/* Left Column: Single founder image with side-by-side names below */}
        <motion.div
          initial={{ opacity: 0, x: -48, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7 flex flex-col"
        >
          <div className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-sm bg-white">
            <Image
              src="/assets/about/founder.png"
              alt="Space Palette Founders"
              width={1000}
              height={1000}
              sizes="(max-width: 768px) calc(100vw - 48px), 620px"
              quality={100}
              unoptimized
              className="relative z-10 block h-auto w-full"
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6">
            {founders.map((founder) => (
              <div key={founder.name} className="flex flex-col">
                <h3 className="font-primary text-lg font-semibold text-white">
                  {founder.name}
                </h3>
                <p className="font-secondary mt-1 text-xs uppercase tracking-[0.16em] text-white/60">
                  {founder.role}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Title and description (founder names list removed) */}
        <motion.div
          initial={{ opacity: 0, x: 42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl font-medium tracking-tight text-white md:text-5xl"
          >
            About <span className="text-[#E16E38]">Founders</span>
          </motion.h2>

          <p className="text-left mt-8 max-w-3xl text-lg leading-loose text-white/90 md:mt-12 md:leading-relaxed font-light">
            The founders bring together creative vision and executional expertise,
            creating a seamless balance between design intent and delivery.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

