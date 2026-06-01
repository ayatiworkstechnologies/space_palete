"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectEntries } from "@/components/project/projectData";

function getProjectSequenceImages(project) {
  const images = [
    ...(project.stackImages || []),
    ...(project.images || []),
    ...(project.gallery || []).map((item) => item.image),
    project.fullImage,
    project.coverImage,
  ].filter(Boolean);

  const uniqueImages = [...new Set(images)];

  return {
    bgImage: project.heroImage || project.coverImage,
    firstImage: uniqueImages[0] || project.coverImage,
    secondImage: uniqueImages[1] || uniqueImages[0] || project.coverImage,
  };
}

export default function HbaStylePage() {
  return (
    <main className="min-h-screen bg-[#050a09] text-white antialiased selection:bg-white selection:text-black">
      <div className="relative">
        {projectEntries.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}

function ProjectCard({ project, index }) {
  const containerRef = useRef(null);
  const { bgImage, firstImage, secondImage } = getProjectSequenceImages(project);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.03, 1, 0.97]);
  const bgOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  const yImage1 = useTransform(scrollYProgress, [0, 0.5, 1], ["60vh", "-5vh", "-50vh"]);
  const opacityImage1 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const yImage2 = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], ["90vh", "35vh", "-10vh", "-45vh"]);
  const opacityImage2 = useTransform(scrollYProgress, [0.3, 0.5, 0.9, 1], [0, 1, 1, 0]);

  const textOpacity = useTransform(scrollYProgress, [0.85, 0.98], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh] w-full"
      style={{ zIndex: index + 1 }}
    >
      <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden">
        <motion.div
          style={{ scale: bgScale, opacity: bgOpacity }}
          className="absolute inset-0 -z-20 h-full w-full will-change-transform"
        >
          <Image
            src={bgImage}
            alt={`${project.title} background`}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative flex h-full w-full max-w-5xl flex-col items-center justify-center gap-8 px-8 md:flex-row md:gap-24">
            <motion.div
              style={{ y: yImage1, opacity: opacityImage1 }}
              className="pointer-events-auto relative h-[340px] w-[260px] overflow-hidden rounded-sm border border-white/5 shadow-2xl will-change-transform md:h-[440px] md:w-[320px]"
            >
              <Image
                src={firstImage}
                alt={`${project.title} sequence 1`}
                fill
                sizes="(max-width: 768px) 260px, 320px"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              style={{ y: yImage2, opacity: opacityImage2 }}
              className="pointer-events-auto relative h-[280px] w-[220px] overflow-hidden rounded-sm border border-white/5 shadow-2xl will-change-transform md:mt-32 md:h-[380px] md:w-[280px]"
            >
              <Image
                src={secondImage}
                alt={`${project.title} sequence 2`}
                fill
                sizes="(max-width: 768px) 220px, 280px"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          style={{ opacity: textOpacity }}
          className="z-20 mt-auto w-full bg-gradient-to-t from-black via-black/80 to-transparent px-8 pb-8 pt-32 will-change-transform"
        >
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-b border-white/10 pb-6 md:flex-row md:items-end">
            <div className="space-y-4">
              <h2 className="max-w-xl text-3xl font-light tracking-wide md:text-5xl">
                {project.title}
              </h2>
              <Link
                href={`/projects/${project.slug}`}
                transitionTypes={["project-forward"]}
                className="group flex w-fit items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-[10px] uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black"
              >
                View Project
                <span className="transition-transform group-hover:translate-x-1">-&gt;</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6 text-[10px] font-medium tracking-widest text-white/60 sm:grid-cols-4 md:gap-12 md:text-xs">
              <div className="space-y-1">
                <span className="block text-[8px] uppercase text-white/30 md:text-[9px]">
                  Direction
                </span>
                <p className="leading-relaxed">{project.studio}</p>
              </div>
              <div className="space-y-1">
                <span className="block text-[8px] uppercase text-white/30 md:text-[9px]">
                  Typology
                </span>
                <p>{project.type}</p>
              </div>
              <div className="space-y-1">
                <span className="block text-[8px] uppercase text-white/30 md:text-[9px]">
                  Location
                </span>
                <p>{project.location}</p>
              </div>
              <div className="space-y-1">
                <span className="block text-[8px] uppercase text-white/30 md:text-[9px]">
                  Timeline
                </span>
                <p>{project.year}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
