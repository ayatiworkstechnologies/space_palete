"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState, ViewTransition } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { getNextProject } from "./projectData";
import ScatteredDotsBackground from "@/components/ScatteredDotsBackground";

function uniqueImages(images) {
  return [...new Set(images.filter(Boolean))];
}

function getImagePanelSize(image) {
  const fileName = image.split("/").pop();
  const wideImages = new Set([
    "project-1.png",
    "project-2.png",
    "project-hero.png",
    "projects-hero.png",
    "spacepalette-1.png",
    "spacepalette-2.png",
    "spacepalette-5.png",
    "spacepalette-6.png",
    "dfmc-1.png",
    "dfmc-2.png",
    "vrx-terrace.png",
    "vrx-terrace-2.png",
    "vrx-terrace-4.png",
    "vrx-terrace-5.png",
  ]);
  const portraitImages = new Set([
    "project-1-1.png",
    "project-1-2.png",
    "project-1-3.png",
    "project-intro.png",
    "spacepalette-3.png",
    "spacepalette-4.png",
    "spacepalette-7.png",
    "spacepalette-8.png",
    "vrx-terrace-1.png",
    "vrx-terrace-6.png",
  ]);

  if (wideImages.has(fileName)) {
    return {
      className: "w-[86vw] md:w-[76vw]",
      sizes: "(max-width: 768px) 86vw, 76vw",
    };
  }

  if (portraitImages.has(fileName)) {
    return {
      className: "w-[58vw] md:w-[34vw]",
      sizes: "(max-width: 768px) 58vw, 34vw",
    };
  }

  return {
    className: "w-[70vw] md:w-[46vw]",
    sizes: "(max-width: 768px) 70vw, 46vw",
  };
}

export default function ProjectShowcase({ project }) {
  const targetRef = useRef(null);
  const [showCursorTip, setShowCursorTip] = useState(false);
  const [cursorTipText, setCursorTipText] = useState("Scroll");
  const nextProject = getNextProject(project.slug);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothCursorX = useSpring(cursorX, { stiffness: 420, damping: 34 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 420, damping: 34 });

  const galleryImages = useMemo(
    () =>
      uniqueImages([
        project.coverImage,
        project.heroImage,
        ...(project.images || []),
        ...(project.gallery || []).map((item) => item.image),
        project.fullImage,
      ]),
    [project]
  );

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  const handleMouseMove = (event) => {
    cursorX.set(event.clientX + 18);
    cursorY.set(event.clientY + 18);
  };

  return (
    <ViewTransition
      enter={{
        "project-forward": "project-forward",
        default: "none",
      }}
      exit={{
        "project-forward": "project-forward",
        default: "none",
      }}
      default="none"
    >
      <main
        className="bg-black font-sans text-white antialiased selection:bg-white/20"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowCursorTip(true)}
        onMouseLeave={() => {
          setShowCursorTip(false);
          setCursorTipText("Scroll");
        }}
      >
        <motion.div
          style={{ x: smoothCursorX, y: smoothCursorY }}
          animate={{
            opacity: showCursorTip ? 1 : 0,
            scale: showCursorTip ? 1 : 0.94,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="pointer-events-none fixed left-0 top-0 z-[80] hidden rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md md:block"
        >
          {cursorTipText}
        </motion.div>
        <div ref={targetRef} className="relative h-[400vh] bg-black">
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <ScatteredDotsBackground color="rgba(255, 255, 255, 0.25)" maxDotSize={1.5} density={0.0004} speed={0.2} />
            <motion.div
              style={{ x }}
              className="flex h-full items-center gap-6 whitespace-nowrap pl-6 pr-[20vw] will-change-transform md:pl-12"
            >
              <section className="inline-flex h-[80vh] select-none items-start gap-10 whitespace-normal align-middle md:gap-16">
                <div className="flex h-full w-[180px] flex-col justify-between pt-12 md:w-[220px]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/45">
                      {project.type}
                    </span>
                  </div>

                  <div className="whitespace-pre-line text-xs leading-relaxed tracking-wider text-white/55">
                    {project.location}
                    {"\n"}
                    {project.year}
                  </div>
                </div>

                <div className="flex h-full w-[760px] flex-col justify-between pt-24">
                  <div className="max-w-[680px]">
                    <ViewTransition
                      name={`project-title-${project.slug}`}
                      share="project-title-morph"
                    >
                      <h1 className="mb-8 text-6xl font-light leading-none tracking-wide text-white md:text-7xl">
                        {project.title}
                      </h1>
                    </ViewTransition>
                    <div className="space-y-6 text-justify text-[13px] font-light leading-relaxed text-white/58">
                      {project.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <dl className="grid w-full grid-cols-5 border-y border-white/15">
                    {project.details.map(([label, value]) => (
                      <div
                        key={label}
                        className="border-r border-white/15 px-5 py-4 text-xs tracking-wider last:border-r-0"
                      >
                        <dt className="mb-4 uppercase text-white/40">{label}</dt>
                        <dd className="font-medium text-white/80">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </section>

              {galleryImages[0] && (
                <section className="group relative inline-block h-[80vh] w-[80vw] overflow-hidden bg-neutral-900 align-middle">
                  <motion.div
                    initial={{ scale: 1.05, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative h-full w-full"
                  >
                    <ViewTransition
                      name={`project-image-${project.slug}`}
                      share="project-morph"
                    >
                      <Image
                        src={galleryImages[0]}
                        alt={`${project.title} exterior view`}
                        fill
                        priority
                        sizes="80vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </ViewTransition>
                  </motion.div>
                  <div className="pointer-events-none absolute bottom-6 right-6 rounded-full bg-black/10 px-3 py-1.5 text-[10px] uppercase tracking-widest text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                    Scroll
                  </div>
                </section>
              )}

              {galleryImages.slice(1).map((image, index) => {
                const panelSize = getImagePanelSize(image);

                return (
                  <section
                    key={`${image}-${index}`}
                    className="inline-flex h-[80vh] align-middle"
                  >
                    <div className={`group relative h-full overflow-hidden bg-neutral-900 ${panelSize.className}`}>
                      <Image
                        src={image}
                        alt={`${project.title} interior view ${index + 1}`}
                        fill
                        sizes={panelSize.sizes}
                        className="object-cover grayscale-[15%] transition-all duration-700 group-hover:grayscale-0"
                      />
                    </div>
                  </section>
                );
              })}

              {nextProject && (
                <section className="ml-10 inline-flex h-[80vh] w-[100vw] select-none items-start justify-between gap-8 whitespace-normal align-middle pr-10 md:ml-16 md:gap-12 md:pr-16">
                  <div className="flex h-full w-[250px] shrink-0 flex-col justify-between pt-12 md:w-[310px]">
                    <div>
                      <span className="mb-1 block text-xs font-semibold tracking-widest text-white/45">
                        Next Project
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-white/40">
                        {nextProject.type}
                      </span>
                      <h2 className="mt-2 text-5xl font-light tracking-wide text-white transition-colors">
                        {nextProject.title}
                      </h2>
                    </div>
                    <div className="text-xs tracking-wider text-white/45">
                      {nextProject.location}
                    </div>
                  </div>

                  <Link
                    href={`/projects/${nextProject.slug}`}
                    transitionTypes={["project-forward"]}
                    onMouseEnter={() => setCursorTipText("Click")}
                    onMouseLeave={() => setCursorTipText("Scroll")}
                    className="group relative h-full w-[calc(100vw-330px)] cursor-pointer overflow-hidden bg-neutral-900 md:w-[58vw]"
                  >
                    <div className="absolute inset-0 z-10 bg-neutral-950/0 transition-colors duration-500 group-hover:bg-neutral-950/10" />
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={nextProject.coverImage}
                        alt={`${nextProject.title} preview`}
                        fill
                        sizes="(max-width: 768px) calc(100vw - 330px), 58vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </Link>
                </section>
              )}
            </motion.div>
          </div>
        </div>
      </main>
    </ViewTransition>
  );
}
