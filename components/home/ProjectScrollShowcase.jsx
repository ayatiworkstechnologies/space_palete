"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectEntries } from "@/components/project/projectData";
import CommonButton from "@/components/CommonButton";

export default function ProjectScrollShowcase() {
  return (
    <section className="w-full bg-black text-white">
      {projectEntries.map((project, index) => (
        <ProjectScene
          key={project.slug}
          project={project}
          index={index}
          total={projectEntries.length}
        />
      ))}
    </section>
  );
}

function ProjectScene({ project, index, total }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Background Image scale zoom-out parallax
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.05, 1.0]
  );

  // Background Image opacity (fades out at the end)
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.76, 1],
    [1, 1, 0.4]
  );

  // Background overlay (darkens as scroll reaches the end)
  const darkOverlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.76, 1],
    [0.4, 0.4, 0.85]
  );

  // Project Content y and opacity (Hidden -> Slides Up -> Fixed -> Exits Up)
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.22, 0.52, 0.78, 1],
    [120, 120, 0, 0, -80]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.22, 0.52, 0.78, 1],
    [0, 0, 1, 1, 0]
  );

  // Next Project full-screen slide up
  const nextImageY = useTransform(
    scrollYProgress,
    [0.62, 1],
    ["100%", "0%"]
  );

  const nextImageScale = useTransform(
    scrollYProgress,
    [0.62, 1],
    [1.08, 1.0]
  );

  return (
    <div ref={sectionRef} className="relative h-[220vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black text-white">
        {/* Main Background Image */}
        <motion.div
          style={{
            scale: imageScale,
            opacity: imageOpacity,
          }}
          className="absolute inset-0 z-0 h-full w-full"
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Dynamic Dark Overlay for contrast and fade out */}
        <motion.div
          style={{ opacity: darkOverlayOpacity }}
          className="absolute inset-0 bg-black z-10"
        />

        {/* Top gradient for Header readability */}
        <div className="absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-black/50 to-transparent z-10" />

        {/* Small Blinking Particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className={`absolute block rounded-full ${i % 3 === 0
                ? "dot-blink-glow bg-[#f47a3c]/45"
                : "dot-blink-soft bg-white/35"
                }`}
              style={{
                left: `${(i * 29 + 13) % 100}%`,
                top: `${(i * 23 + 17) % 100}%`,
                width: i % 4 === 0 ? 4 : 2,
                height: i % 4 === 0 ? 4 : 2,
                animationDuration: `${3.2 + (i % 5) * 0.75}s`,
                animationDelay: `${i * 0.22}s`,
              }}
            />
          ))}
        </div>

        {/* Project Content Card */}
        <motion.div
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
          className="absolute bottom-0 left-0 z-35 w-full px-5 pb-8 sm:px-6 sm:pb-12 md:px-12 md:pb-16 lg:px-20"
        >
          <div className="mx-auto max-w-6xl border-t border-white/20 pt-6 md:pt-8">
            <div className="flex flex-col gap-6 md:grid md:grid-cols-[1.1fr_1.3fr] md:items-end md:gap-10">
              {/* Left Column: Title & Link */}
              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#f47a3c]">
                  Selected Project
                </p>

                <h2
                  className="
                    max-w-[12ch] text-[36px] font-light leading-[0.92]
                    tracking-[-0.05em] text-white
                    sm:text-[48px]
                    md:text-[62px]
                    lg:text-[76px]
                  "
                >
                  {project.title}
                </h2>

                <CommonButton
                  as={Link}
                  href={`/projects/${project.slug}`}
                  className="mt-6 !px-6 !py-3"
                >
                  View Project
                </CommonButton>
              </div>

              {/* Right Column: Meta Info */}
              <div
                className="
                  grid grid-cols-2 gap-x-6 gap-y-4 text-[10px] sm:text-[11px] font-semibold uppercase
                  tracking-[0.16em] text-white/95 sm:grid-cols-4 md:pb-2
                "
              >
                <div>
                  <p className="mb-2 text-[9px] tracking-[0.25em] text-white/50">
                    Studio
                  </p>
                  <p className="font-secondary text-white/90 text-[12px]">{project.studio}</p>
                </div>

                <div>
                  <p className="mb-2 text-[9px] tracking-[0.25em] text-white/50">
                    Type
                  </p>
                  <p className="font-secondary text-white/90 text-[12px]">{project.type}</p>
                </div>

                <div>
                  <p className="mb-2 text-[9px] tracking-[0.25em] text-white/50">
                    Location
                  </p>
                  <p className="font-secondary text-white/90 text-[12px]">{project.location}</p>
                </div>

                <div>
                  <p className="mb-2 text-[9px] tracking-[0.25em] text-white/50">
                    Year
                  </p>
                  <p className="font-secondary text-white/90 text-[12px]">{project.year}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Next Project Background Image Slides Up */}
        {index < total - 1 && (
          <motion.div
            style={{
              y: nextImageY,
              scale: nextImageScale,
            }}
            className="absolute inset-0 z-20 h-full w-full overflow-hidden"
          >
            <Image
              src={projectEntries[index + 1].coverImage}
              alt={projectEntries[index + 1].title}
              fill
              sizes="100vw"
              className="object-cover"
            />
            {/* Transition overlay for readability */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-black/50 to-transparent z-10" />
          </motion.div>
        )}
      </div>
    </div>
  );
}