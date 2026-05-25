"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/82 shadow-[0_1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl"
          : "bg-white/55 shadow-[0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-md"
      }`}
    >
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24">
        <a
          href="/"
          className="inline-flex w-fit items-center justify-center"
        >
          <Image
            src="/space-logo.svg"
            alt="Space Palette Logo"
            width={180}
            height={80}
            priority
            className="h-auto w-[66px] transition duration-500 md:w-[86px]"
          />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-12 text-base font-semibold text-black/75 md:flex">
          <a href="#about" className="transition hover:text-[#f47a3c]">
            About
          </a>
          <a href="#projects" className="transition hover:text-[#f47a3c]">
            Projects
          </a>
        </nav>

        <div className="flex items-center justify-end">
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-black/35 px-4 py-2 text-xs font-semibold text-black/80 transition duration-300 hover:border-[#f47a3c] hover:bg-[#f47a3c] hover:text-white md:px-6 md:py-3 md:text-sm"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
