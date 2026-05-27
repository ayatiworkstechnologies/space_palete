"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectEntries } from "@/components/project/projectData";

function ProjectShowcaseCard({ project, index }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Upgraded cinematic scroll animation
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.22, 0.58, 1],
    [1.26, 1.08, 1, 0.94]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.32, 0.72, 1],
    [190, 0, -45, -170]
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.78, 1],
    [1, 1, 1, 0]
  );

  const imageRadius = useTransform(
    scrollYProgress,
    [0, 0.34, 0.85],
    [54, 18, 0]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.28, 0.78, 1],
    [130, 0, -20, -120]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.75, 1],
    [0, 1, 1, 0]
  );

  const metaY = useTransform(
    scrollYProgress,
    [0.1, 0.38, 0.82, 1],
    [90, 0, -20, -95]
  );

  const metaOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.32, 0.76, 1],
    [0, 1, 1, 0]
  );

  // Smooth spring settings
  const smoothImageScale = useSpring(imageScale, {
    stiffness: 65,
    damping: 32,
    mass: 1,
  });

  const smoothImageY = useSpring(imageY, {
    stiffness: 65,
    damping: 34,
    mass: 1,
  });

  const smoothContentY = useSpring(contentY, {
    stiffness: 75,
    damping: 30,
    mass: 0.9,
  });

  const smoothMetaY = useSpring(metaY, {
    stiffness: 75,
    damping: 30,
    mass: 0.9,
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[175vh] bg-black"
      style={{ zIndex: projectEntries.length - index }}
    >
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-black">
        {/* Project Number */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="pointer-events-none absolute right-5 top-20 z-0 text-[90px] font-light leading-none tracking-[-0.08em] text-white/6 md:right-10 md:text-[180px] lg:text-[230px]"
        >
          0{index + 1}
        </motion.div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1500px] gap-8 px-5 py-20 md:px-10 lg:px-14">
          {/* Image */}
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)", y: 40, opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0% 0)", y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              scale: smoothImageScale,
              y: smoothImageY,
              opacity: imageOpacity,
              borderRadius: imageRadius,
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
              style={{
                y: smoothContentY,
                opacity: contentOpacity,
              }}
            >
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.34em] text-white/50">
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

              <Link
                href={`/projects/${project.slug}`}
                className="
                  mt-7 inline-flex items-center rounded-full
                  border border-white/75 px-7 py-3
                  text-xs font-semibold uppercase tracking-[0.18em]
                  text-white transition duration-300
                  hover:bg-white hover:text-black
                "
              >
                View Project
              </Link>
            </motion.div>

            <motion.div
              style={{
                y: smoothMetaY,
                opacity: metaOpacity,
              }}
              className="
                grid gap-5 border-t border-white/15 pt-6
                text-xs font-semibold uppercase tracking-[0.14em]
                text-white/82 md:grid-cols-4 md:border-t-0 md:pt-0
              "
            >
              <div>
                <p className="mb-2 text-[10px] tracking-[0.28em] text-white/38">
                  Studio
                </p>
                <p>{project.studio}</p>
              </div>

              <div>
                <p className="mb-2 text-[10px] tracking-[0.28em] text-white/38">
                  Type
                </p>
                <p>{project.type}</p>
              </div>

              <div>
                <p className="mb-2 text-[10px] tracking-[0.28em] text-white/38">
                  Location
                </p>
                <p>{project.location}</p>
              </div>

              <div>
                <p className="mb-2 text-[10px] tracking-[0.28em] text-white/38">
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
  const { scrollYProgress } = useScroll();

  const progressScale = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 26,
    mass: 0.75,
  });

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* Thin top scroll progress line */}
      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed left-0 top-0 z-[999] h-px w-full origin-left bg-white/75"
      />

      <section className="relative bg-black">
        {projectEntries.map((project, index) => (
          <ProjectShowcaseCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </section>
    </main>
  );
}
