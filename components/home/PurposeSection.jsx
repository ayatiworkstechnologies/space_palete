"use client";

import CommonButton from "@/components/CommonButton";
import { motion } from "framer-motion";

export default function PurposeSection() {
  return (
    <section id="about" className="relative flex min-h-[600px] md:min-h-[650px] py-16 md:py-24 w-full flex-col items-center justify-center overflow-hidden bg-black px-6 text-white">
      {/* Static Background Image with Sweeping Light Effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          WebkitMaskImage: "url('/line.png')",
          WebkitMaskSize: "auto 100%",
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          maskImage: "url('/line.png')",
          maskSize: "auto 100%",
          maskPosition: "center",
          maskRepeat: "no-repeat"
        }}
      >
        {/* Baseline subtle visibility of lines */}
        <div className="absolute inset-0 bg-white/20" />

        {/* Moving light beam */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-4xl font-light tracking-[0.05em] md:text-6xl"
        >
          Who We Are
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center mt-8 max-w-3xl text-lg leading-loose text-white/90 md:mt-12 md:text-2xl md:leading-relaxed font-light"
        >
          Space Palette is a multidisciplinary design studio creating thoughtful
          spaces that balance functionality, identity, and experience. Every
          environment is shaped with clarity, precision, and a deep
          understanding of how people interact with space.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center w-full"
        >
          <CommonButton
            href="/about"
            className="mt-12"
          >
            Discover Our Story
          </CommonButton>
        </motion.div>
      </div>
    </section>
  );
}
