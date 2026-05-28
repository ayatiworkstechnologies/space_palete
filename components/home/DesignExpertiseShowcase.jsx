"use client";

import CommonButton from "@/components/CommonButton";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Commercial Interiors",
    description:
      "Refined office and retail environments that elevate brand identity and enhance user experience.",
    mainImage: "/3.png",
    topImage: "/1.png",
    bottomImage: "/5.png",
  },
  {
    number: "02",
    title: "Residential Interiors",
    description:
      "Layered homes shaped around comfort, material warmth, and everyday rituals.",
    mainImage: "/2.png",
    topImage: "/4.png",
    bottomImage: "/1.png",
  },
  {
    number: "03",
    title: "Modular Kitchens",
    description:
      "Efficient kitchen systems with refined finishes, ergonomic storage, and lasting detail.",
    mainImage: "/4.png",
    topImage: "/3.png",
    bottomImage: "/2.png",
  },
  {
    number: "04",
    title: "Custom Design",
    description:
      "Bespoke spatial concepts crafted for unique tastes, constraints, and ambitions.",
    mainImage: "/1.png",
    topImage: "/5.png",
    bottomImage: "/3.png",
  },
];

export default function DesignExpertiseShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const activeService = services[activeIndex];

  useEffect(() => {
    const updateActiveService = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;

      if (scrollableDistance <= 0) return;

      const progress = Math.min(
        Math.max(-rect.top / scrollableDistance, 0),
        0.999,
      );

      setActiveIndex(Math.floor(progress * services.length));
    };

    updateActiveService();
    window.addEventListener("scroll", updateActiveService, { passive: true });
    window.addEventListener("resize", updateActiveService);

    return () => {
      window.removeEventListener("scroll", updateActiveService);
      window.removeEventListener("resize", updateActiveService);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[260vh] overflow-visible bg-black text-white md:min-h-[320vh]"
    >
      <div className="sticky top-0 min-h-screen overflow-hidden px-6 py-20 md:px-10 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[url('/line.png')] bg-cover bg-center opacity-25" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/70" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1fr_0.72fr] lg:items-center">
          <div>
            <div className="mb-6 flex items-center gap-4 text-white lg:hidden">
              <span className="h-px w-10 bg-white/25" />
              <span className="font-secondary text-xs uppercase tracking-[0.35em]">
                Chapter 02
              </span>
            </div>

            <h2 className="max-w-sm text-5xl font-normal leading-[0.92] text-white md:text-7xl">
              Design
              <br />
              &amp; Expertise
            </h2>

            <div className="mt-10 divide-y divide-white/12 border-b border-white/12">
              {services.map((service, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={service.number}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group block w-full py-4 text-left"
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`text-lg transition duration-500 ${
                          isActive ? "text-[#f47a3c]" : "text-white"
                        }`}
                      >
                        {service.number}
                      </span>
                      <h3
                        className={`text-xl font-medium transition duration-500 ${
                          isActive ? "text-white" : "text-white"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div
                      className={`grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-11 mt-5 max-w-sm">
                          <p className="text-lg leading-7 text-white md:text-xl md:leading-8">
                            {service.description}
                          </p>
                          <CommonButton
                            as="span"
                            className="mt-7 border-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-transparent hover:text-[#f47a3c] group-hover:border-[#f47a3c] group-hover:text-[#f47a3c]"
                            iconSize={16}
                          >
                            Discover Creations
                          </CommonButton>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl overflow-hidden">
            <img
              key={activeService.mainImage}
              src={activeService.mainImage}
              alt={`${activeService.title} by Space Palette`}
              className="aspect-[4/5] w-full object-cover opacity-0 transition duration-700 ease-out [animation:fadeInImage_700ms_ease-out_forwards]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>

          <div className="grid gap-6">
            <img
              key={activeService.topImage}
              src={activeService.topImage}
              alt={`${activeService.title} detail`}
              className="aspect-[16/9] w-full object-cover opacity-0 transition duration-700 ease-out [animation:fadeInImage_700ms_ease-out_forwards]"
            />
            <img
              key={activeService.bottomImage}
              src={activeService.bottomImage}
              alt={`${activeService.title} concept`}
              className="aspect-[16/9] w-full object-cover opacity-0 transition duration-700 ease-out [animation:fadeInImage_700ms_ease-out_120ms_forwards]"
            />
            <p className="max-w-sm text-lg leading-7 text-white md:text-xl md:leading-8">
              Exceptional design solutions crafted with precision, creativity,
              and purpose.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInImage {
          from {
            opacity: 0;
            transform: translateY(14px) scale(1.03);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
