"use client";

import { ChevronDown, ChevronUp, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stories = [
  {
    id: 1,
    text: "It’s very hard to fi nd interior design & execution company who dedicate their thoughts and creativity into each and every project they work on. Space Palette is one company who is great at doing it. The result supersedes the design always. Keep your good work team ✨",
    name: "Umesh - Ncompass & Residence",
  },
  {
    id: 2,
    text: "Working with Space Palette was a great experience. They are a team of both young and experienced professionals who bring a keen eye for detail and innovative designs to every project. Their ability to blend creativity with exceptional execution ensured that our project was delivered seamlessly. We highly appreciate their commitment to quality and would highly recommend them for any interior design needs.",
    name: "Balaji - TVS",
  },
  {
    id: 3,
    text: "Execution was carried out precisely as per the previously shared 3D image with no deviations. Additionally, the quality standards have been met 100% and completed the 15k sqft in 60 days with no deviations.We are highly satisfi ed with the work delivered and appreciate the SP professionalism and dedication.",
    name: "Giri - TVS",
  },
  {
    id: 4,
    text: "Space Palette delivered a truly one of a kind design for our WorkLife Experience Centre in Chennai. Their team was highly approachable throughout the process, making collaboration seamless. Every element felt carefully curated, with thoughtful concepts and designs that perfectly balanced creativity, functionality, and user experience. Their ability to translate ideas into meaningful spaces resulted in an environment that has exceeded our expectations.",
    name: "Moumitha, Chairé Studio",
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
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E16E38]/10 blur-[120px]" />

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
          Stories Behind <span className="text-[#E16E38]">Spaces</span>
        </motion.h2>

        {/* Stories */}
        <motion.div
          initial={{ opacity: 0, y: 55, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-10 h-[480px] max-w-5xl overflow-hidden md:mt-12 md:h-[480px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous story"
            suppressHydrationWarning
            className="absolute left-1/2 top-0 z-30 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full text-white transition duration-300 hover:bg-white/10 hover:text-[#E16E38]"
          >
            <ChevronUp size={28} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next story"
            suppressHydrationWarning
            className="absolute bottom-0 left-1/2 z-30 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full text-white transition duration-300 hover:bg-white/10 hover:text-[#E16E38]"
          >
            <ChevronDown size={28} strokeWidth={1.5} />
          </button>

          <div className="absolute inset-x-0 top-1/2 h-[400px] -translate-y-1/2 md:h-[380px]">
            {stories.map((story, index) => {
              const position = getPosition(index);
              const isActive = position === 0;

              return (
                <article
                  key={story.id}
                  className={`absolute left-0 right-0 top-1/2 mx-auto w-[min(100%,900px)] border-y border-white/10 px-5 py-6 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:px-28 md:py-8 ${isActive
                    ? "z-20 max-w-4xl bg-black opacity-100 before:absolute before:bottom-[-1px] before:left-[10%] before:right-[10%] before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(244,122,60,0.75),transparent)] before:content-[''] after:absolute after:-bottom-5 after:left-[18%] after:right-[18%] after:h-9 after:rounded-full after:bg-[#E16E38]/15 after:blur-2xl after:content-['']"
                    : "z-10 max-w-3xl opacity-30"
                    }`}
                  style={{
                    transform: `translateY(calc(-50% + ${position * 165
                      }px)) scale(${isActive ? 1 : 0.92})`,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  {isActive && (
                    <>
                      <Quote className="absolute left-3 top-3 h-5 w-5 fill-white/50 text-white md:left-6 md:top-6 md:h-12 md:w-12" />
                      <Quote className="absolute bottom-3 right-3 h-5 w-5 rotate-180 fill-white/50 text-white md:bottom-6 md:right-6 md:h-12 md:w-12" />
                    </>
                  )}

                  <p
                    className={`mx-auto leading-relaxed md:leading-8 ${isActive
                      ? "max-w-2xl text-[14px] text-white md:text-xl md:leading-9"
                      : "max-w-2xl text-[14px] text-white md:text-xl md:leading-9"
                      }`}
                  >
                    {story.text}
                  </p>

                  {isActive && (
                    <h3 className="mt-4 text-sm font-bold text-[#E16E38] md:mt-6 md:text-2xl">
                      {story.name}
                    </h3>
                  )}
                </article>
              );
            })}
          </div>

          <div
            className={`pointer-events-none absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-[#E16E38] to-transparent transition-opacity duration-500 ${isPaused ? "opacity-0" : "opacity-60"
              }`}
          />

          <div
            className={`pointer-events-none absolute bottom-0 left-1/2 h-10 w-px -translate-x-1/2 bg-gradient-to-t from-[#E16E38] to-transparent transition-opacity duration-500 ${isPaused ? "opacity-0" : "opacity-60"
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
