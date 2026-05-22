"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = Math.min(scrollY / 500, 1);

  return (
    <section className="relative h-[180vh] bg-black">
      {/* Sticky Hero */}
      <div className="sticky top-0 h-screen overflow-hidden bg-black">

        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            opacity: progress,
            transform: `scale(${1.18 - progress * 0.18})`,
          }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0 bg-black transition-opacity duration-300"
          style={{
            opacity: 0.85 - progress * 0.45,
          }}
        />

        {/* Subtle diagonal lines */}
        <div className="absolute inset-0 opacity-20">
          <span className="absolute -top-20 left-[45%] h-[130vh] w-[2px] rotate-[-42deg] bg-white/30" />
          <span className="absolute -top-10 left-[60%] h-[130vh] w-[2px] rotate-[-42deg] bg-white/20" />
        </div>

        {/* Main Logo Mark */}
        <div className="relative z-10 flex h-full items-center justify-center px-5">
          <div
            className="spaces-title-wrap"
            style={{
              opacity: Math.max(1 - progress * 0.88, 0),
              transform: `translateY(${-progress * 36}vh) scale(${
                1.08 - progress * 0.58
              })`,
            }}
          >
            <div className="corner corner-left-top" />
            <div className="corner corner-left-bottom" />
            <div className="corner corner-right-top" />
            <div className="corner corner-right-bottom" />

            <Image
              src="/space-logo.svg"
              alt="Space Palette"
              width={360}
              height={160}
              priority
              className="hero-logo-mark"
            />
          </div>
        </div>

        {/* Content Comes After Scroll */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center"
          style={{
            opacity: Math.max((progress - 0.45) / 0.55, 0),
            transform: `translateY(${40 - progress * 40}px)`,
            pointerEvents: progress > 0.7 ? "auto" : "none",
          }}
        >
          <div className="max-w-5xl">
            <span className="mb-5 inline-block text-sm uppercase tracking-[0.45em] text-[#f47a3c]">
              Space Palette
            </span>

            <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
              Designing Calm, Elegant & Timeless Interiors
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              We shape residential and commercial spaces with refined material
              palettes, thoughtful planning, and a premium design language.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-[#f47a3c] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-white"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-[#f47a3c] hover:text-[#f47a3c]"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Text */}
        <div
          className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-center"
          style={{
            opacity: 1 - progress * 1.4,
          }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">
            Scroll
          </p>
          <div className="mx-auto mt-3 h-10 w-[1px] overflow-hidden bg-white/20">
            <span className="block h-5 w-full animate-scrollLine bg-[#f47a3c]" />
          </div>
        </div>
      </div>
    </section>
  );
}
