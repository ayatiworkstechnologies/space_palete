"use client";

import CommonButton from "@/components/CommonButton";
import DotPattern from "@/components/DotPattern";

export default function PurposeSection() {
  return (
    <section id="about" className="relative min-h-[58vh] overflow-hidden bg-black px-6 py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[url('/line.png')] bg-cover bg-center bg-no-repeat opacity-35 md:opacity-45" />
      <DotPattern variant="radial" density="low" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
          Who We Are
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-7 text-white md:mt-10 md:text-xl md:leading-8">
          Space Palette is a multidisciplinary design studio creating thoughtful
          spaces that balance functionality, identity, and experience. Every
          environment is shaped with clarity, precision, and a deep
          understanding of how people interact with space.
        </p>

        <CommonButton
          href="/about"
          className="mt-8"
        >
          Discover Our Story
        </CommonButton>
      </div>
    </section>
  );
}
