"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectEntries } from "@/components/project/projectData";
import CommonButton from "@/components/CommonButton";

function ProjectShowcaseCard({ project, index }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Scroll-driven dramatic growth animation
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    [0.35, 1, 0.85]
  );

  const imageRadius = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    [150, 12, 40]
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35],
    [0, 0.5, 1]
  );

  const smoothImageScale = useSpring(imageScale, {
    stiffness: 65,
    damping: 32,
    mass: 1,
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[130vh] bg-black"
      style={{ zIndex: projectEntries.length - index }}
    >
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-black">
        {/* Blinking dot particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className={`absolute block rounded-full ${i % 3 === 0 ? "dot-blink-glow bg-[#f47a3c]/50" : "dot-blink-soft bg-white/40"}`}
              style={{
                left: `${(i * 29 + 7) % 100}%`,
                top: `${(i * 37 + 13) % 100}%`,
                width: i % 4 === 0 ? 4 : 2,
                height: i % 4 === 0 ? 4 : 2,
                animationDuration: `${3 + (i % 5) * 0.8}s`,
                animationDelay: `${i * 0.22}s`,
              }}
            />
          ))}
        </div>

        {/* Project Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute right-5 top-20 z-0 text-[90px] font-light leading-none tracking-[-0.08em] text-white/6 md:right-10 md:text-[180px] lg:text-[230px]"
        >
          0{index + 1}
        </motion.div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1500px] gap-8 px-5 py-20 md:px-10 lg:px-14">
          {/* Image */}
          <motion.div
            style={{
              scale: smoothImageScale,
              borderRadius: imageRadius,
              opacity: imageOpacity,
            }}
            className="
              relative mx-auto h-[350px] w-full overflow-hidden
              md:h-[560px] md:w-[88%]
              lg:h-[630px] lg:w-[84%]
            "
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 84vw"
              className="object-cover"
            />
          </motion.div>

          {/* Bottom Content */}
          <div className="grid items-end gap-8 md:grid-cols-[1.15fr_1.35fr]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.34em] text-white">
                Selected Project
              </p>

              <h2
                className="
                  max-w-[12ch] text-[42px] font-light leading-[0.92]
                  tracking-[-0.06em] text-white
                  md:text-[68px] lg:text-[86px]
                "
              >
                {project.title}
              </h2>

              <CommonButton
                as={Link}
                href={`/projects/${project.slug}`}
                className="mt-7 !px-7 !py-3"
              >
                View Project
              </CommonButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                grid gap-5 border-t border-white/15 pt-6
                text-xs font-semibold uppercase tracking-[0.14em]
                text-white md:grid-cols-4 md:border-t-0 md:pt-0
              "
            >
              <div>
                <p className="mb-2 text-[10px] tracking-[0.28em] text-white">
                  Studio
                </p>
                <p>{project.studio}</p>
              </div>

              <div>
                <p className="mb-2 text-[10px] tracking-[0.28em] text-white">
                  Type
                </p>
                <p>{project.type}</p>
              </div>

              <div>
                <p className="mb-2 text-[10px] tracking-[0.28em] text-white">
                  Location
                </p>
                <p>{project.location}</p>
              </div>

              <div>
                <p className="mb-2 text-[10px] tracking-[0.28em] text-white">
                  Year
                </p>
                <p>{project.year}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HbaStylePage() {
  return (
    <div className="overflow-x-hidden bg-black text-white">
      <section className="relative bg-black">
        {projectEntries.map((project, index) => (
          <ProjectShowcaseCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </section>
    </div>
  );
}
