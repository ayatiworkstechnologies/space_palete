"use client";

import { Quote } from "lucide-react";

const stories = [
  {
    id: 1,
    text: "From concept to completion, the experience was seamless and highly professional. The final outcome exceeded our expectations in every way.",
    name: "Luxury Apartment Client",
    active: false,
  },
  {
    id: 2,
    text: "Space Palette transformed our home into a sophisticated and functional masterpiece. Every detail was executed with remarkable precision and creativity.",
    name: "Homeowner, Chennai",
    active: true,
  },
  {
    id: 3,
    text: "Their attention to detail, material selection, and execution quality were exceptional. Our interiors now truly reflect our lifestyle.",
    name: "Villa Owner, OMR",
    active: false,
  },
];

export default function VisualStorySection() {
  return (
    <section className="relative min-h-[75vh] overflow-hidden bg-black px-6 py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:120px_120px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)] md:[background-size:180px_180px]" />

      {/* Soft Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Title */}
        <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
          Stories Behind{" "}
          <span className="inline-flex items-center gap-2 text-[#f47a3c]">
            <span className="text-[#f47a3c]/70">[</span>
            Spaces
            <span className="text-[#f47a3c]/70">]</span>
          </span>
        </h2>

        {/* Stories */}
        <div className="mt-14 space-y-0">
          {stories.map((story, index) => (
            <article
              key={story.id}
              className={`relative mx-auto border-y border-white/10 py-7 transition-all duration-700 ${
                story.active
                  ? "max-w-3xl opacity-100 before:absolute before:bottom-[-1px] before:left-[8%] before:right-[8%] before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(244,122,60,0.7),transparent)] before:content-[''] after:absolute after:-bottom-5 after:left-[15%] after:right-[15%] after:h-9 after:rounded-full after:bg-white/10 after:blur-2xl after:content-['']"
                  : "max-w-2xl opacity-20"
              }`}
            >
              {story.active && (
                <>
                  <Quote className="absolute -left-2 top-7 h-10 w-10 fill-white text-white md:-left-10 md:h-12 md:w-12" />
                  <Quote className="absolute -right-2 bottom-7 h-10 w-10 rotate-180 fill-white text-white md:-right-10 md:h-12 md:w-12" />
                </>
              )}

              <p
                className={`mx-auto leading-8 ${
                  story.active
                    ? "max-w-2xl text-lg text-white md:text-xl"
                    : "max-w-xl text-sm text-white/40 md:text-base"
                }`}
              >
                {story.active ? (
                  <>
                    <strong>Space Palette</strong> transformed our home into a
                    sophisticated and <strong>functional</strong> masterpiece.
                    Every detail was executed with remarkable{" "}
                    <strong>precision</strong> and <strong>creativity.</strong>
                  </>
                ) : (
                  story.text
                )}
              </p>

              {story.active && (
                <h3 className="mt-4 text-xl font-bold text-[#f47a3c] md:text-2xl">
                  {story.name}
                </h3>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
