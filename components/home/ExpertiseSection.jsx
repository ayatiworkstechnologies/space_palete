"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const expertiseItems = [
  {
    id: 1,
    title: "Custom Design",
    image: "/1.png",
  },
  {
    id: 2,
    title: "Residential Interiors",
    image: "/2.png",
  },
  {
    id: 3,
    title: "Commercial Interiors",
    image: "/3.png",
  },
  {
    id: 4,
    title: "Modular Kitchens",
    image: "/4.png",
  },
  {
    id: 5,
    title: "Kids Room",
    image: "/5.png",
  },
  {
    id: 6,
    title: "Luxury Bedrooms",
    image: "/1.png",
  },
  {
    id: 7,
    title: "Living Spaces",
    image: "/2.png",
  },
  {
    id: 8,
    title: "Office Spaces",
    image: "/3.png",
  },
];

export default function ExpertiseSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  const total = expertiseItems.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  const getPosition = (index) => {
    let diff = index - activeIndex;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  return (
    <section className="expertise-section relative overflow-hidden bg-black px-3 py-16 text-white md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-[58%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f47a3c]/8 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Title */}
        <div className="mb-8 text-center md:mb-10">
          <h2 className="text-xl font-normal tracking-normal text-white md:text-2xl">
            Design &amp; Expertise{" "}
            <span className="inline-flex items-center gap-1.5 text-[#f47a3c]">
              <span className="text-[#f47a3c]/70">[</span>
              Spaces
              <span className="text-[#f47a3c]/70">]</span>
            </span>
          </h2>
        </div>

        {/* Carousel Area */}
        <div className="expertise-carousel relative mx-auto overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            suppressHydrationWarning
            className="absolute left-0 top-1/2 z-30 -translate-y-1/2 text-white/60 transition hover:text-[#f47a3c] md:left-2"
          >
            <ChevronLeft size={16} strokeWidth={1.7} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            suppressHydrationWarning
            className="absolute right-0 top-1/2 z-30 -translate-y-1/2 text-white/60 transition hover:text-[#f47a3c] md:right-2"
          >
            <ChevronRight size={16} strokeWidth={1.7} />
          </button>

          {/* Cards */}
          <div className="relative flex h-full items-center justify-center">
            {expertiseItems.map((item, index) => {
              const position = getPosition(index);
              const isActive = position === 0;

              const isVisible = Math.abs(position) <= 2;

              return (
                <article
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`expertise-card-pure absolute cursor-pointer overflow-hidden rounded-lg border bg-[#090909] transition-all duration-700 ease-out ${
                    isActive
                      ? "z-20 border-white/80 opacity-100"
                      : "z-10 border-white/25 opacity-35"
                  } ${!isVisible ? "pointer-events-none opacity-0" : ""}`}
                  style={{
                    transform: `
                      translateX(calc(${position} * var(--expertise-step)))
                      scale(${isActive ? "var(--expertise-active-scale)" : "var(--expertise-side-scale)"})
                    `,
                  }}
                >
                  {/* Number */}
                  <div
                    className={`absolute right-0 top-0 z-20 rounded-bl-lg rounded-tr-lg bg-black/85 px-2.5 py-1.5 text-[10px] font-semibold leading-none tracking-widest ${
                      isActive ? "text-white" : "text-white/45"
                    }`}
                  >
                    {index + 1} / {total}
                  </div>

                  {/* Image */}
                  <div className="relative h-full w-full overflow-hidden rounded-md">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 z-20 w-full px-2.5 pb-2.5">
                    <h3
                      className={`text-[10px] font-normal leading-tight md:text-xs ${
                        isActive ? "text-white" : "text-white/60"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
