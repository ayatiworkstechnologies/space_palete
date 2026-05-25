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
      <div className="flex h-24 items-center justify-center px-6">
        <a
          href="/"
          className={`relative inline-flex h-[68px] w-[132px] items-center justify-center border transition-all duration-500 ${
            isScrolled
              ? "scale-100 border-white/10 bg-black/35 opacity-100"
              : "scale-90 border-transparent bg-transparent opacity-0"
          }`}
        >
          <Image
            src="/space-logo.svg"
            alt="Space Palette Logo"
            width={180}
            height={80}
            priority
            className="h-auto w-[86px] drop-shadow-[0_18px_35px_rgba(0,0,0,0.35)] md:w-[92px]"
          />
        </a>
      </div>
    </header>
  );
}
