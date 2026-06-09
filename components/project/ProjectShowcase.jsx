"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState, ViewTransition } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { getImagePanelSize, getNextProject } from "./projectData";

function uniqueImages(images) {
  return [...new Set(images.filter(Boolean))];
}

function MobileProjectImage({ image, title, index, priority = false }) {
  const panel = getImagePanelSize(image);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${panel.width} / ${panel.height}` }}
    >
      <Image
        src={image}
        alt={`${title} project image ${index + 1}`}
        fill
        priority={priority}
        sizes="100vw"
        quality={100}
        unoptimized
        className={panel.imageClassName}
      />
    </motion.figure>
  );
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
  const firstGalleryPanel = galleryImages[0]
    ? getImagePanelSize(galleryImages[0])
    : null;
  const nextProjectPanel = nextProject
    ? getImagePanelSize(nextProject.coverImage)
    : null;

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

        <div className="block px-5 pb-16 pt-28 md:hidden">
          <section className="border-b border-white/12 pb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#E16E38]">
              {project.type}
            </span>
            <ViewTransition
              name={`project-title-mobile-${project.slug}`}
              share="project-title-morph"
            >
              <h1 className="mt-4 text-[38px] font-light leading-[1.02] text-white">
                {project.title}
              </h1>
            </ViewTransition>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-white/50">
              <span>{project.location}</span>
              <span>{project.year}</span>
              <span>{project.size}</span>
            </div>
          </section>

          <section className="space-y-5 py-8 text-[15px] font-light leading-8 text-white/72">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <dl className="grid grid-cols-2 border-y border-white/12 text-[11px]">
            {project.details.map(([label, value]) => (
              <div
                key={label}
                className="border-b border-white/10 px-3 py-4 odd:border-r last:border-b-0 [&:nth-last-child(2)]:border-b-0"
              >
                <dt className="mb-2 uppercase tracking-[0.22em] text-white/40">
                  {label}
                </dt>
                <dd className="font-medium leading-5 text-white/82">{value}</dd>
              </div>
            ))}
          </dl>

          <section className="space-y-6 py-8">
            {galleryImages.map((image, index) => (
              <MobileProjectImage
                key={`${project.slug}-mobile-${image}`}
                image={image}
                title={project.title}
                index={index}
                priority={index === 0}
              />
            ))}
          </section>

          {nextProject && nextProjectPanel && (
            <section className="border-t border-white/12 pt-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#E16E38]">
                Next Project
              </span>
              <h2 className="mt-3 text-[32px] font-light leading-tight text-white">
                {nextProject.title}
              </h2>
              <Link
                href={`/projects/${nextProject.slug}`}
                transitionTypes={["project-forward"]}
                className="mt-6 block"
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    aspectRatio: `${nextProjectPanel.width} / ${nextProjectPanel.height}`,
                  }}
                >
                  <Image
                    src={nextProject.coverImage}
                    alt={`${nextProject.title} preview`}
                    fill
                    sizes="100vw"
                    quality={100}
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <span className="mt-5 inline-flex border border-white/20 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                  View Next Project
                </span>
              </Link>
            </section>
          )}
        </div>

        <div ref={targetRef} className="relative hidden h-[400vh] bg-black md:block">
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
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
                      <h1 className="mb-8 text-5xl font-light leading-none tracking-wide text-white md:text-6xl">
                        {project.title}
                      </h1>
                    </ViewTransition>
                    <div className="space-y-6 text-justify text-[16px] font-light leading-[1.8] text-white/64 md:text-[17px]">
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

              {galleryImages[0] && firstGalleryPanel && (
                <section className="group relative inline-flex h-[80vh] items-center align-middle">
                  <motion.div
                    initial={{ scale: 1.05, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className={`relative overflow-hidden ${firstGalleryPanel.className}`}
                    style={firstGalleryPanel.style}
                  >
                    <ViewTransition
                      name={`project-image-${project.slug}`}
                      share="project-morph"
                    >
                      <div className="relative h-full w-full">
                        <Image
                          src={galleryImages[0]}
                          alt={`${project.title} exterior view`}
                          fill
                          priority
                          sizes={firstGalleryPanel.sizes}
                          quality={100}
                          unoptimized
                          className={firstGalleryPanel.imageClassName}
                        />
                      </div>
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
                    className="inline-flex h-[80vh] items-center align-middle"
                  >
                    <div
                      className={`group relative overflow-hidden ${panelSize.className}`}
                      style={panelSize.style}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} interior view ${index + 1}`}
                        fill
                        sizes={panelSize.sizes}
                        quality={100}
                        unoptimized
                        className={panelSize.imageClassName}
                      />
                    </div>
                  </section>
                );
              })}

              {nextProject && (
                <section className="ml-6 inline-grid h-[80vh] w-[88vw] select-none grid-cols-[220px_minmax(0,1fr)] gap-6 border-l border-white/15 pl-6 whitespace-normal align-middle md:ml-10 md:w-[78vw] md:grid-cols-[300px_minmax(0,1fr)] md:gap-8 md:pl-10 lg:w-[76vw] lg:grid-cols-[320px_minmax(0,1fr)]">
                  <div className="flex h-full min-w-0 flex-col justify-between py-12">
                    <div>
                      <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.26em] text-[#E16E38]">
                        Next Project
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-white/40">
                        {nextProject.type}
                      </span>
                      <h2 className="mt-2 text-5xl font-light tracking-wide text-white transition-colors">
                        {nextProject.title}
                      </h2>
                      <Link
                        href={`/projects/${nextProject.slug}`}
                        transitionTypes={["project-forward"]}
                        onMouseEnter={() => setCursorTipText("Click")}
                        onMouseLeave={() => setCursorTipText("Scroll")}
                        className="mt-8 inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:border-[#E16E38] hover:text-[#E16E38]"
                      >
                        View Next Project
                        <span aria-hidden="true">→</span>
                      </Link>
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
                    className="group relative h-full w-full cursor-pointer overflow-hidden bg-neutral-900"
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
                        sizes="(max-width: 768px) calc(88vw - 220px), 52vw"
                        quality={100}
                        className="object-cover"
                      />
                      <div className="pointer-events-none absolute bottom-6 right-6 border border-white/20 bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                        Open Project
                      </div>
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
