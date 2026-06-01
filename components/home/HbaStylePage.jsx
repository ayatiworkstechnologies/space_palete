"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { projectEntries } from "@/components/project/projectData";
import CommonButton from "@/components/CommonButton";

function ProjectShowcaseCard({ project, index }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /*
    IMPORTANT:
    Add stackImages in projectData like this:

    stackImages: [
      "/projects/project-1-img-1.jpg",
      "/projects/project-1-img-2.jpg",
    ]

    If stackImages not available, coverImage will be used.
  */
  const firstImage = project.stackImages?.[0] || project.coverImage;
  const secondImage = project.stackImages?.[1] || project.coverImage;

  // Main section entrance / exit
  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.82, 1],
    [0, 1, 1, 0]
  );

  const bgScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.75, 1],
    [1.16, 1, 1.04, 1.12]
  );

  const smoothBgScale = useSpring(bgScale, {
    stiffness: 70,
    damping: 30,
    mass: 0.8,
  });

  // Image 1 animation
  const imageOneY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45, 0.62],
    ["6%", "0%", "-8%", "-100%"]
  );

  const imageOneScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.62],
    [1.12, 1, 1.08]
  );

  const imageOneOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.48, 0.62],
    [0, 1, 1, 0]
  );

  // Image 2 animation
  const imageTwoY = useTransform(
    scrollYProgress,
    [0.38, 0.58, 0.82, 1],
    ["100%", "0%", "0%", "-8%"]
  );

  const imageTwoScale = useTransform(
    scrollYProgress,
    [0.38, 0.62, 1],
    [1.12, 1, 1.08]
  );

  const imageTwoOpacity = useTransform(
    scrollYProgress,
    [0.38, 0.52, 0.86, 1],
    [0, 1, 1, 0]
  );

  // Bottom card sticky animation
  const cardY = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [80, 0, 0, -70]
  );

  const cardOpacity = useTransform(
    scrollYProgress,
    [0, 0.14, 0.84, 1],
    [0, 1, 1, 0]
  );

  // Number animation
  const numberY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.82, 1],
    [60, 0, 0, -50]
  );

  const numberOpacity = useTransform(
    scrollYProgress,
    [0, 0.14, 0.84, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[230vh] bg-black"
      style={{ zIndex: projectEntries.length - index }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-black text-white">
        {/* Full Screen Stack Background Images */}
        <motion.div
          style={{
            opacity: bgOpacity,
            scale: smoothBgScale,
          }}
          className="absolute inset-0"
        >
          {/* Image 1 */}
          <motion.div
            style={{
              y: imageOneY,
              scale: imageOneScale,
              opacity: imageOneOpacity,
            }}
            className="absolute inset-0"
          >
            <Image
              src={firstImage}
              alt={`${project.title} image 1`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            style={{
              y: imageTwoY,
              scale: imageTwoScale,
              opacity: imageTwoOpacity,
            }}
            className="absolute inset-0"
          >
            <Image
              src={secondImage}
              alt={`${project.title} image 2`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Premium Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-x-0 top-0 h-[32%] bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Small Blinking Particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className={`absolute block rounded-full ${i % 3 === 0
                ? "dot-blink-glow bg-[#f47a3c]/45"
                : "dot-blink-soft bg-white/35"
                }`}
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

        {/* Bottom Sticky Project Card */}
        <motion.div
          style={{
            y: cardY,
            opacity: cardOpacity,
          }}
          className="
            absolute bottom-0 left-0 z-30 w-full
            px-5 pb-7
            md:px-10 md:pb-10
            lg:px-14 lg:pb-12
          "
        >
          <div
            className="
              mx-auto flex w-full max-w-[1500px] flex-col gap-7
              border-t border-white/25 pt-6
              md:grid md:grid-cols-[1.05fr_1.4fr]
              md:items-end md:gap-10
            "
          >
            {/* Left Content */}
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.36em] text-white/80">
                Selected Project
              </p>

              <h2
                className="
                  max-w-[11ch] text-[42px] font-light leading-[0.9]
                  tracking-[-0.06em] text-white
                  sm:text-[54px]
                  md:text-[74px]
                  lg:text-[96px]
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
            </div>

            {/* Right Project Details */}
            <div
              className="
                grid gap-5 text-[11px] font-semibold uppercase
                tracking-[0.16em] text-white
                sm:grid-cols-2
                md:grid-cols-4 md:pb-2
              "
            >
              <div>
                <p className="mb-2 text-[9px] tracking-[0.3em] text-white/55">
                  Studio
                </p>
                <p>{project.studio}</p>
              </div>

              <div>
                <p className="mb-2 text-[9px] tracking-[0.3em] text-white/55">
                  Type
                </p>
                <p>{project.type}</p>
              </div>

              <div>
                <p className="mb-2 text-[9px] tracking-[0.3em] text-white/55">
                  Location
                </p>
                <p>{project.location}</p>
              </div>

              <div>
                <p className="mb-2 text-[9px] tracking-[0.3em] text-white/55">
                  Year
                </p>
                <p>{project.year}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Right Number */}
        <motion.div
          style={{
            y: numberY,
            opacity: numberOpacity,
          }}
          className="
            pointer-events-none absolute bottom-6 right-5 z-20
            text-[82px] font-light leading-none tracking-[-0.08em]
            text-white/20
            sm:text-[110px]
            md:bottom-8 md:right-10 md:text-[160px]
            lg:bottom-9 lg:right-14 lg:text-[210px]
          "
        >
          {String(index + 1).padStart(2, "0")}
        </motion.div>
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