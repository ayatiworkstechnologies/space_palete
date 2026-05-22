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
    <section className="stories-section relative overflow-hidden bg-black px-6 py-24 text-white md:py-32">
      {/* Grid Background */}
      <div className="stories-grid pointer-events-none absolute inset-0" />

      {/* Soft Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Title */}
        <h2 className="story-reveal text-3xl font-medium tracking-tight md:text-5xl">
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
              className={`story-card relative mx-auto border-y border-white/10 py-7 transition-all duration-700 ${
                story.active
                  ? "active-story max-w-3xl opacity-100"
                  : "max-w-2xl opacity-20"
              }`}
              style={{
                animationDelay: `${index * 0.16}s`,
              }}
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