"use client";

import { useState } from "react";
import BracketSpaces from "@/components/BracketSpaces";

const faqs = [
  {
    question: "What types of interior design services do you offer?",
    answer:
      "We specialize in residential interiors, modular kitchens, wardrobes, commercial interiors, and complete turnkey design and execution solutions.",
  },
  {
    question: "Do you provide end-to-end turnkey solutions?",
    answer:
      "Yes. From concept planning and 3D visualization to material selection, execution, and final handover, we manage the complete interior journey.",
  },
  {
    question: "How long does an interior design project take?",
    answer:
      "Timelines depend on the size and scope of the project. A standard residential interior project usually takes 45 to 90 days after design approval.",
  },
  {
    question: "Can you customize the design according to our preferences?",
    answer:
      "Absolutely. Every Space Palette project is customized based on your lifestyle, functional needs, material preferences, and visual direction.",
  },
  {
    question: "Do you help with material and finish selection?",
    answer:
      "Yes. We guide you through finishes, laminates, fabrics, lighting, hardware, colors, and premium materials to create a cohesive design language.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative min-h-[82vh] overflow-hidden bg-black px-6 py-20 text-white md:py-32">
      {/* Background Fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-white/[0.03] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#f47a3c]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-medium leading-[0.95] text-white md:text-7xl">
            Answers
            <br />
            for
            <br />
            Inspired
            <br />
            <BracketSpaces className="mt-5" />
          </h2>

          <p className="mt-10 max-w-sm text-lg leading-7 text-white/65 md:text-xl md:leading-8">
            Find clear answers to common questions about our design process,
            timelines, materials, and turnkey execution. We believe every
            successful project begins with transparency, thoughtful planning, and
            a shared vision.
          </p>
        </div>

        {/* Right FAQs */}
        <div>
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                suppressHydrationWarning
                className={`group relative w-full border-b border-white/10 py-6 text-left transition-all duration-500 md:py-7 ${
                  isActive ? "opacity-100" : "opacity-25 hover:opacity-60"
                }`}
              >
                <h3
                  className={`text-lg font-semibold transition duration-300 md:text-xl ${
                    isActive ? "text-white" : "text-white/70"
                  }`}
                >
                  {index + 1}. {faq.question}
                </h3>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isActive
                      ? "grid-rows-[1fr] pt-6 opacity-100"
                      : "grid-rows-[0fr] pt-0 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl text-lg leading-7 text-white/72 md:text-xl md:leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {isActive && (
                  <div className="mt-6 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(244,122,60,0.45),transparent)] shadow-[0_14px_38px_rgba(244,122,60,0.25)]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
