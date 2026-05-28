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

  const getScale = (position) => {
    const distance = Math.abs(position);

    if (distance === 0) return "var(--expertise-active-scale)";
    if (distance === 1) return "var(--expertise-near-scale)";
    return "var(--expertise-far-scale)";
  };

  const getOpacityClass = (position, isActive) => {
    const distance = Math.abs(position);

    if (isActive) return "opacity-100";
    if (distance === 1) return "opacity-65";
    return "opacity-28";
  };

  return (
    <section id="projects" className="relative overflow-hidden bg-black py-16 text-white md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-[58%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f47a3c]/8 blur-[110px]" />

      <div className="relative z-10 mx-auto w-full max-w-none">
        {/* Title */}
        <div className="mb-12 text-center md:mb-14">
          <h2 className="text-3xl font-normal leading-tight text-white md:text-5xl">
            Design &amp; Expertise{" "}
            <span className="text-[#f47a3c]">Spaces</span>
          </h2>
        </div>

        {/* Carousel Area */}
        <div className="relative mx-auto h-[350px] w-full max-w-full overflow-hidden [--expertise-active-scale:1.12] [--expertise-near-scale:0.86] [--expertise-far-scale:0.64] [--expertise-step:clamp(120px,33vw,165px)] sm:h-[410px] sm:[--expertise-step:clamp(168px,29vw,230px)] md:h-[470px] md:[--expertise-active-scale:1.1] md:[--expertise-near-scale:0.82] md:[--expertise-far-scale:0.6] md:[--expertise-step:clamp(245px,21vw,330px)] lg:[--expertise-step:clamp(290px,22vw,390px)]">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            suppressHydrationWarning
            className="absolute left-3 top-1/2 z-30 -translate-y-1/2 text-white transition hover:text-[#f47a3c] md:left-8"
          >
            <ChevronLeft size={16} strokeWidth={1.7} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            suppressHydrationWarning
            className="absolute right-3 top-1/2 z-30 -translate-y-1/2 text-white transition hover:text-[#f47a3c] md:right-8"
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
                  className={`absolute h-[280px] w-[clamp(180px,50vw,230px)] cursor-pointer rounded-[26px] border bg-black p-2 shadow-[0_12px_32px_rgba(0,0,0,0.72)] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] after:absolute after:inset-x-7 after:-bottom-4 after:h-9 after:rounded-full after:bg-white/15 after:opacity-0 after:blur-2xl after:transition-opacity after:duration-700 sm:h-[340px] sm:w-[clamp(220px,29vw,285px)] md:h-[380px] md:w-[285px] lg:h-[400px] lg:w-[300px] ${
                    isActive
                      ? "z-30 border-white shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_22px_55px_rgba(0,0,0,0.9)] after:opacity-100"
                      : "z-10 border-white/30"
                  } ${getOpacityClass(position, isActive)} ${
                    Math.abs(position) === 1 ? "z-20" : ""
                  } ${!isVisible ? "pointer-events-none opacity-0" : ""}`}
                  style={{
                    transform: `
                      translateX(calc(${position} * var(--expertise-step)))
                      scale(${getScale(position)})
                    `,
                  }}
                  >
                  {/* Number */}
                  <div
                    className={`absolute right-2 top-2 z-30 rounded-bl-[22px] rounded-tr-[20px] bg-black px-4 py-3 text-xl font-bold leading-none tracking-wide transition-colors duration-700 md:text-2xl ${
                      isActive ? "text-white" : "text-white"
                    }`}
                  >
                    {index + 1} / {total}
                  </div>

                  {/* Image */}
                  <div className="relative h-full w-full overflow-hidden rounded-[20px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5" />

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 z-20 w-full px-3 pb-3">
                      <h3
                        className={`text-lg font-bold leading-tight transition-colors duration-700 md:text-2xl ${
                          isActive ? "text-white" : "text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
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
