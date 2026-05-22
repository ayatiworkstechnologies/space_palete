"use client";

import { ArrowRight } from "lucide-react";

export default function PurposeSection() {
  return (
    <section className="purpose-section relative overflow-hidden bg-black px-6 py-28 text-white md:py-36">
      {/* Background Line Pattern */}
      <div className="purpose-lines pointer-events-none absolute inset-0 opacity-45" />

      {/* Soft Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute right-20 top-10 h-96 w-96 rounded-full bg-[#f47a3c]/5 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <h2 className="fade-up purpose-title text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          Designing{" "}
          <span className="purpose-word">
            <span className="corner-mark left-mark">[</span>
            Spaces
            <span className="corner-mark right-mark">]</span>
          </span>{" "}
          With Purpose
        </h2>

        <p className="fade-up delay-1 mt-10 max-w-3xl text-sm leading-6 text-white/72 md:text-base md:leading-7">
          Space Palette is a luxury interior design studio crafting refined
          residential and commercial spaces with elegance, functionality, and
          timeless detail. We bring together thoughtful planning, premium
          materials, and skilled craftsmanship to transform every vision into a
          beautifully curated space.
        </p>

        <a
          href="#projects"
          className="fade-up delay-2 group mt-9 inline-flex items-center gap-5 border border-white/60 px-5 py-3 text-xs font-medium text-white transition duration-300 hover:border-[#f47a3c] hover:bg-[#f47a3c] hover:text-black"
        >
          Discover Creations
          <ArrowRight
            size={17}
            className="transition duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
}