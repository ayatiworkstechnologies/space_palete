"use client";

import { ArrowRight } from "lucide-react";

export default function PurposeSection() {
  return (
    <section className="relative min-h-[58vh] overflow-hidden bg-black px-6 py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(ellipse_at_10%_10%,transparent_0%,transparent_18%,rgba(255,255,255,0.12)_18.2%,transparent_18.5%,transparent_26%,rgba(255,255,255,0.09)_26.2%,transparent_26.5%,transparent_34%,rgba(255,255,255,0.08)_34.2%,transparent_34.5%),radial-gradient(ellipse_at_72%_0%,transparent_0%,transparent_24%,rgba(255,255,255,0.13)_24.2%,transparent_24.5%,transparent_30%,rgba(255,255,255,0.1)_30.2%,transparent_30.5%,transparent_36%,rgba(255,255,255,0.08)_36.2%,transparent_36.5%,transparent_42%,rgba(255,255,255,0.07)_42.2%,transparent_42.5%,transparent_48%,rgba(255,255,255,0.06)_48.2%,transparent_48.5%),radial-gradient(ellipse_at_32%_100%,transparent_0%,transparent_20%,rgba(255,255,255,0.12)_20.2%,transparent_20.5%,transparent_27%,rgba(255,255,255,0.09)_27.2%,transparent_27.5%,transparent_34%,rgba(255,255,255,0.07)_34.2%,transparent_34.5%)] [background-size:130%_110%] md:opacity-45 md:[background-size:100%_100%]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <h2 className="text-3xl font-medium leading-tight md:text-5xl">
          Designing{" "}
          <span className="inline-flex items-center gap-2 text-[#f47a3c]">
            <span className="text-[#f47a3c]/70">[</span>
            Spaces
            <span className="text-[#f47a3c]/70">]</span>
          </span>{" "}
          With Purpose
        </h2>

        <p className="mt-8 max-w-3xl text-xs leading-5 text-white/70 md:mt-10 md:text-sm md:leading-6">
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
