"use client";

import BracketSpaces from "@/components/BracketSpaces";
import { motion } from "framer-motion";

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
  const marqueeLogos = [...trustLogos, ...trustLogos, ...trustLogos];

  return (
    <section className="relative -mt-px overflow-hidden bg-black px-0 py-24 text-white md:px-6 md:py-32">
      {/* Smooth top blending from previous section */}

      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        {/* Title */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-medium tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Trust Across{" "}
            <BracketSpaces />
          </motion.h2>
        </div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
          className="
            relative mx-auto mt-16 w-full max-w-full overflow-hidden
            [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]
            md:mt-24
          "
        >
          <div
            className="
              flex w-max items-center gap-12 py-8
              will-change-transform
              [animation:trust-marquee_32s_linear_infinite]
              md:gap-28 md:py-10
            "
          >
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="
                  group flex h-24 w-[230px] shrink-0 items-center justify-center
                  opacity-90 transition duration-500 hover:opacity-100
                  sm:w-[280px]
                  md:h-32 md:w-[380px]
                  lg:w-[440px]
                "
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="
                    max-h-16 max-w-[210px] object-contain
                    grayscale brightness-0 invert
                    transition duration-700 ease-out
                    group-hover:scale-110 group-hover:grayscale-0
                    sm:max-h-20 sm:max-w-[260px]
                    md:max-h-24 md:max-w-[340px]
                    lg:max-h-28 lg:max-w-[400px]
                  "
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom blending */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black to-transparent" />

      <style>{`
        @keyframes trust-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
