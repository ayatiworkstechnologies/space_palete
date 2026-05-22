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
    <section className="relative overflow-hidden bg-black px-4 py-24 text-white md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[58%] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f47a3c]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl">
            Design &amp; Expertise{" "}
            <span className="inline-flex items-center gap-2 text-[#f47a3c]">
              <span className="text-[#f47a3c]/70">[</span>
              Spaces
              <span className="text-[#f47a3c]/70">]</span>
            </span>
          </h2>
        </div>

        {/* Carousel Area */}
        <div className="relative mx-auto h-[360px] max-w-7xl overflow-hidden md:h-[390px]">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 z-30 -translate-y-1/2 text-white/60 transition hover:text-[#f47a3c]"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-0 top-1/2 z-30 -translate-y-1/2 text-white/60 transition hover:text-[#f47a3c]"
          >
            <ChevronRight size={26} />
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
                  className={`expertise-card-pure absolute cursor-pointer overflow-hidden rounded-[22px] border bg-[#090909] transition-all duration-700 ease-out ${
                    isActive
                      ? "z-20 border-white/80 opacity-100"
                      : "z-10 border-white/25 opacity-35"
                  } ${!isVisible ? "pointer-events-none opacity-0" : ""}`}
                  style={{
                    transform: `
                      translateX(${position * 215}px)
                      scale(${isActive ? 1.12 : 0.88})
                    `,
                  }}
                >
                  {/* Number */}
                  <div
                    className={`absolute right-3 top-3 z-20 rounded-bl-2xl rounded-tr-[18px] bg-black/80 px-4 py-2 text-lg font-bold tracking-widest ${
                      isActive ? "text-white" : "text-white/45"
                    }`}
                  >
                    {index + 1} / {total}
                  </div>

                  {/* Image */}
                  <div className="relative h-[285px] w-full overflow-hidden rounded-[18px] md:h-[305px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 z-20 w-full p-4">
                    <h3
                      className={`text-sm font-semibold md:text-base ${
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