"use client";

import { ArrowRight } from "lucide-react";
import BracketSpaces from "@/components/BracketSpaces";

export default function PurposeSection() {
  return (
    <section id="about" className="relative min-h-[58vh] overflow-hidden bg-black px-6 py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[url('/line.png')] bg-cover bg-center bg-no-repeat opacity-35 md:opacity-45" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <h2 className="text-3xl font-medium leading-tight md:text-5xl">
          Designing{" "}
          <BracketSpaces />
          {" "}
          With Purpose
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-7 text-white/70 md:mt-10 md:text-xl md:leading-8">
          Space Palette is a luxury interior design studio crafting refined
          residential and commercial spaces with elegance, functionality, and
          timeless detail. We bring together thoughtful planning, premium
          materials, and skilled craftsmanship to transform every vision into a
          beautifully curated space.
        </p>

        <a
          href="#projects"
          className="group mt-8 inline-flex items-center gap-4 border border-white/55 px-4 py-2.5 text-[11px] font-medium text-white transition duration-300 hover:border-[#f47a3c] hover:bg-[#f47a3c] hover:text-black"
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
