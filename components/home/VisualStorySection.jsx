"use client";

import { ChevronDown, ChevronUp, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stories = [
  {
    id: 1,
    text: "From concept to completion, the experience was seamless and highly professional. The final outcome exceeded our expectations in every way.",
    name: "Luxury Apartment Client",
  },
  {
    id: 2,
    text: "Space Palette transformed our home into a sophisticated and functional masterpiece. Every detail was executed with remarkable precision and creativity.",
    name: "Homeowner, Chennai",
  },
  {
    id: 3,
    text: "Their attention to detail, material selection, and execution quality were exceptional. Our interiors now truly reflect our lifestyle.",
    name: "Villa Owner, OMR",
  },
];

export default function VisualStorySection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const total = stories.length;

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(showNext, 3200);

    return () => clearInterval(timer);
  }, [isPaused]);

  const getPosition = (index) => {
    let position = index - activeIndex;

    if (position > total / 2) position -= total;
    if (position < -total / 2) position += total;

    return position;
  };

  return (
    <section className="relative min-h-[75vh] overflow-hidden bg-black px-6 py-6 text-white md:py-10">
      {/* Moving dotted background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          {Array.from({ length: 42 }).map((_, index) => (
            <span
              key={index}
              className="story-dot absolute block rounded-full bg-white/45"
              style={{
                left: `${(index * 19) % 100}%`,
                top: `${(index * 31) % 100}%`,
                width: `${index % 3 === 0 ? 4 : 2}px`,
                height: `${index % 3 === 0 ? 4 : 2}px`,
                animationDelay: `${index * 0.17}s`,
                animationDuration: `${3.5 + (index % 5) * 0.7}s`,
              }}
            />
          ))}
        </div>

        {/* Soft dark mask */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.22)_40%,rgba(0,0,0,0.88)_100%)]" />
      </div>

      {/* Soft Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f47a3c]/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-6xl text-center"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="text-3xl font-medium tracking-tight md:text-5xl"
        >
          Stories Behind <span className="text-[#f47a3c]">Spaces</span>
        </motion.h2>

        {/* Stories */}
        <motion.div
          initial={{ opacity: 0, y: 55, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-10 h-[430px] max-w-5xl overflow-hidden md:mt-12 md:h-[480px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous story"
            suppressHydrationWarning
            className="absolute left-1/2 top-0 z-30 -translate-x-1/2 text-white transition duration-300 hover:-translate-y-0.5 hover:text-[#f47a3c]"
          >
            <ChevronUp size={18} strokeWidth={1.6} />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next story"
            suppressHydrationWarning
            className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2 text-white transition duration-300 hover:translate-y-0.5 hover:text-[#f47a3c]"
          >
            <ChevronDown size={18} strokeWidth={1.6} />
          </button>

          <div className="absolute inset-x-0 top-1/2 h-[340px] -translate-y-1/2 md:h-[380px]">
            {stories.map((story, index) => {
              const position = getPosition(index);
              const isActive = position === 0;

              return (
                <article
                  key={story.id}
                  className={`absolute left-0 right-0 top-1/2 mx-auto w-[min(100%,900px)] border-y border-white/10 px-8 py-8 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:px-28 ${
                    isActive
                      ? "z-20 max-w-4xl opacity-100 before:absolute before:bottom-[-1px] before:left-[10%] before:right-[10%] before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(244,122,60,0.75),transparent)] before:content-[''] after:absolute after:-bottom-5 after:left-[18%] after:right-[18%] after:h-9 after:rounded-full after:bg-[#f47a3c]/15 after:blur-2xl after:content-['']"
                      : "z-10 max-w-3xl opacity-20 blur-[0.4px]"
                  }`}
                  style={{
                    transform: `translateY(calc(-50% + ${
                      position * 165
                    }px)) scale(${isActive ? 1 : 0.92})`,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  {isActive && (
                    <>
                      <Quote className="absolute left-3 top-1/2 h-9 w-9 -translate-y-1/2 fill-white text-white md:left-8 md:h-14 md:w-14" />
                      <Quote className="absolute bottom-1/2 right-3 h-9 w-9 translate-y-1/2 rotate-180 fill-white text-white md:right-8 md:h-14 md:w-14" />
                    </>
                  )}

                  <p
                    className={`mx-auto leading-8 ${
                      isActive
                        ? "max-w-2xl text-lg text-white md:text-xl md:leading-9"
                        : "max-w-2xl text-lg text-white md:text-xl md:leading-9"
                    }`}
                  >
                    {isActive && story.id === 2 ? (
                      <>
                        <strong>Space Palette</strong> transformed our home into
                        a sophisticated and <strong>functional</strong>{" "}
                        masterpiece. Every detail was executed with remarkable{" "}
                        <strong>precision</strong> and{" "}
                        <strong>creativity.</strong>
                      </>
                    ) : (
                      story.text
                    )}
                  </p>

                  {isActive && (
                    <h3 className="mt-4 text-xl font-bold text-[#f47a3c] md:text-2xl">
                      {story.name}
                    </h3>
                  )}
                </article>
              );
            })}
          </div>

          <div
            className={`pointer-events-none absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-[#f47a3c] to-transparent transition-opacity duration-500 ${
              isPaused ? "opacity-0" : "opacity-60"
            }`}
          />

          <div
            className={`pointer-events-none absolute bottom-0 left-1/2 h-10 w-px -translate-x-1/2 bg-gradient-to-t from-[#f47a3c] to-transparent transition-opacity duration-500 ${
              isPaused ? "opacity-0" : "opacity-60"
            }`}
          />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes storyDotMove {
          0% {
            transform: translate3d(0, 0, 0) scale(0.8);
            opacity: 0.15;
          }

          35% {
            opacity: 0.75;
          }

          50% {
            transform: translate3d(18px, -24px, 0) scale(1.2);
            opacity: 1;
          }

          100% {
            transform: translate3d(-12px, 20px, 0) scale(0.75);
            opacity: 0.12;
          }
        }

        .story-dot {
          animation-name: storyDotMove;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
}
