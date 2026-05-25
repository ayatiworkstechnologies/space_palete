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
          ? "bg-black/45 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-24 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6">
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
            className="h-auto w-[78px] drop-shadow-[0_18px_35px_rgba(0,0,0,0.45)] transition duration-500 md:w-[92px]"
          />
        </a>

        <nav className="hidden items-center gap-10 text-sm font-medium text-white/85 md:flex">
          <a href="#about" className="transition hover:text-[#f47a3c]">
            About
          </a>
          <a href="#projects" className="transition hover:text-[#f47a3c]">
            Projects
          </a>
        </nav>

        <div className="flex justify-end">
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-white/55 px-4 py-2 text-xs font-semibold text-white transition duration-300 hover:border-[#f47a3c] hover:bg-[#f47a3c] hover:text-black md:px-5 md:py-2.5"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
