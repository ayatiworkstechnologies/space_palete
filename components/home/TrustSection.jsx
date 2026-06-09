"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_SLIDE_MS = 1800;
const SLIDE_DURATION_MS = 650;
const MANUAL_PAUSE_MS = 900;

const getLogoStep = (el) => {
  const firstLogo = el.firstElementChild;
  if (!firstLogo) return 260;

  const styles = window.getComputedStyle(el);
  const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
  return firstLogo.getBoundingClientRect().width + gap;
};

const trustLogos = [
  {
    id: 1,
    name: "NCompass",
    image: "/logo-1.png",
  },
  {
    id: 2,
    name: "Pinnacle Studio",
    image: "/logo-2.png",
  },
  {
    id: 3,
    name: "Purva Somerset",
    image: "/logo-3.png",
  },
  {
    id: 4,
    name: "NCompass",
    image: "/logo-1.png",
  },
  {
    id: 5,
    name: "Pinnacle Studio",
    image: "/logo-2.png",
  },
  {
    id: 6,
    name: "Purva Somerset",
    image: "/logo-3.png",
  },
];

export default function TrustSection() {
  const scrollRef = useRef(null);
  const pauseUntilRef = useRef(0);
  const marqueeLogos = [...trustLogos, ...trustLogos, ...trustLogos, ...trustLogos];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let normalizeTimeout;

    const getLoopWidth = () => el.scrollWidth / 2;
    const normalizeScroll = (direction = "right") => {
      const loopWidth = getLoopWidth();
      if (!loopWidth) return;

      if (direction === "right" && el.scrollLeft >= loopWidth) {
        el.scrollLeft -= loopWidth;
      } else if (direction === "left" && el.scrollLeft <= 0) {
        el.scrollLeft += loopWidth;
      }
    };

    const slide = () => {
      if (document.hidden || performance.now() < pauseUntilRef.current) return;

      normalizeScroll("right");
      el.scrollBy({ left: getLogoStep(el), behavior: "smooth" });

      window.clearTimeout(normalizeTimeout);
      normalizeTimeout = window.setTimeout(() => normalizeScroll("right"), SLIDE_DURATION_MS);
    };

    normalizeTimeout = window.setTimeout(slide, 500);
    const intervalId = window.setInterval(slide, AUTO_SLIDE_MS);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(normalizeTimeout);
    };
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const loopWidth = el.scrollWidth / 2;
    if (loopWidth && el.scrollLeft >= loopWidth) {
      el.scrollLeft -= loopWidth;
    }

    const logoStep = getLogoStep(el);

    if (loopWidth && el.scrollLeft <= logoStep && direction === "left") {
      el.scrollLeft += loopWidth;
    }

    const offset = direction === "left" ? -logoStep : logoStep;
    pauseUntilRef.current = performance.now() + MANUAL_PAUSE_MS;
    el.scrollBy({ left: offset, behavior: "smooth" });

    window.setTimeout(() => {
      if (direction === "right" && loopWidth && el.scrollLeft >= loopWidth) {
        el.scrollLeft -= loopWidth;
      }
    }, SLIDE_DURATION_MS);
  };

  return (
    <section className="relative -mt-px overflow-hidden bg-black px-0 py-6 text-white md:px-6 md:py-10">
      {/* Blinking dot particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className={`absolute block rounded-full ${i % 4 === 0 ? "dot-blink-glow bg-[#E16E38]/40" : "dot-blink-drift bg-white/35"}`}
              style={{
                left: `${(i * 23 + 5) % 100}%`,
                top: `${(i * 31 + 9) % 100}%`,
                width: i % 5 === 0 ? 4 : i % 3 === 0 ? 3 : 2,
                height: i % 5 === 0 ? 4 : i % 3 === 0 ? 3 : 2,
                animationDuration: `${3.5 + (i % 6) * 0.6}s`,
                animationDelay: `${i * 0.19}s`,
              }}
            />
          ))}
        </div>
        {/* Soft dark mask */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto w-full max-w-[1400px]"
      >
        {/* Title */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl font-medium tracking-tight text-white md:text-5xl"
          >
            Trust Across <span className="text-[#E16E38]">Spaces</span>
          </motion.h2>
        </div>

        {/* Logos Slider Wrapper with Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto mt-4 w-full flex items-center justify-center px-10 md:mt-8 md:px-14"
        >
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-1 md:left-2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition duration-300 hover:bg-[#E16E38] hover:border-[#E16E38] hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
            aria-label="Previous logos"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Scrolling Logos Container */}
          <div
            ref={scrollRef}
            className="
              flex w-full overflow-x-auto scrollbar-none gap-8 py-6
              scroll-smooth select-none cursor-grab active:cursor-grabbing
              [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]
              md:gap-12 md:py-8
            "
          >
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="
                  group flex h-20 w-[150px] shrink-0 items-center justify-center
                  opacity-90 transition duration-500 hover:opacity-100
                  sm:w-[190px]
                  md:h-28 md:w-[240px]
                  lg:w-[280px]
                "
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="
                    max-h-12 max-w-[130px] object-contain
                    grayscale brightness-0 invert
                    transition duration-700 ease-out
                    group-hover:scale-110 group-hover:grayscale-0
                    sm:max-h-16 sm:max-w-[160px]
                    md:max-h-20 md:max-w-[200px]
                    lg:max-h-24 lg:max-w-[240px]
                  "
                />
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-1 md:right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition duration-300 hover:bg-[#E16E38] hover:border-[#E16E38] hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
            aria-label="Next logos"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </motion.div>

      {/* Bottom blending */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
