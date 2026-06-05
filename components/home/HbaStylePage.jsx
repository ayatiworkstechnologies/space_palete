"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectEntries } from "@/components/project/projectData";
import CommonButton from "@/components/CommonButton";

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

  const yImage2 = useTransform(scrollYProgress, [0, 0.5, 1], ["60vh", "-5vh", "-50vh"]);
  const opacityImage2 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
            quality={100}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative flex h-full w-full max-w-[1500px] flex-col items-center justify-center gap-8 px-6 md:flex-row md:gap-14 lg:gap-20">
            <motion.div
              style={{ y: yImage1, opacity: opacityImage1 }}
              className="pointer-events-auto relative h-[320px] w-[min(88vw,620px)] overflow-hidden rounded-sm border border-white/5 shadow-2xl will-change-transform md:h-[480px] md:w-[620px] lg:w-[760px]"
            >
              <Image
                src={firstImage}
                alt={`${project.title} sequence 1`}
                fill
                sizes="(max-width: 768px) 88vw, (max-width: 1024px) 620px, 760px"
                quality={100}
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover"
              />
            </motion.div>

            <motion.div
              style={{ y: yImage2, opacity: opacityImage2 }}
              className="pointer-events-auto relative h-[270px] w-[min(82vw,540px)] overflow-hidden rounded-sm border border-white/5 shadow-2xl will-change-transform md:h-[410px] md:w-[540px] lg:w-[640px]"
            >
              <Image
                src={secondImage}
                alt={`${project.title} sequence 2`}
                fill
                sizes="(max-width: 768px) 82vw, (max-width: 1024px) 540px, 640px"
                quality={100}
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          style={{ opacity: textOpacity }}
          className="z-20 mt-auto w-full bg-gradient-to-t from-black via-black/80 to-transparent px-8 pb-8 pt-32 will-change-transform"
        >
          <div className="mx-auto grid w-full max-w-[1600px] gap-8 border-b border-white/10 pb-6 md:grid-cols-12 md:items-end md:gap-10">
            <div className="flex flex-col gap-8 md:col-span-4 lg:gap-10">
              <h2 className="max-w-[9ch] text-[34px] font-light leading-[0.98] tracking-tight md:text-[46px] lg:text-[54px]">
                {project.title}
              </h2>
              <CommonButton
                as={Link}
                href={`/projects/${project.slug}`}
                transitionTypes={["project-forward"]}
                variant="outline"
                className="!h-12 !w-[220px] !px-6 !py-0 !text-[10px] md:!w-[240px] lg:!w-[260px]"
                iconSize={15}
              >
                View Project
              </CommonButton>
            </div>

            <div className="grid grid-cols-2 items-start gap-x-6 gap-y-5 text-[11px] font-medium tracking-[0.08em] text-white/72 sm:grid-cols-3 md:col-span-8 md:grid-cols-[minmax(220px,1.45fr)_repeat(4,minmax(96px,1fr))] md:gap-x-8 md:text-[12px] lg:grid-cols-[minmax(300px,1.55fr)_repeat(4,minmax(124px,1fr))]">
              {project.details.map(([label, value]) => (
                <div key={label} className="min-w-0 space-y-3">
                  <span className="block text-[9px] uppercase tracking-[0.18em] text-white/36">
                    {label}
                  </span>
                  <p className="min-h-[42px] max-w-[24ch] break-words leading-[1.45]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
