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
      className={`site-header fixed left-0 top-0 z-50 w-full ${
        isScrolled ? "site-header-scrolled" : ""
      }`}
    >
      <div className="flex h-24 items-center justify-center px-6">
        <a href="/" className="site-header-logo inline-flex items-center justify-center">
          <Image
            src="/space-logo.svg"
            alt="Space Palette Logo"
            width={180}
            height={80}
            priority
            className="h-auto w-[86px] md:w-[92px]"
          />
        </a>
      </div>
    </header>
  );
}
