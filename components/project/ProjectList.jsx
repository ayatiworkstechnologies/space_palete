"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, ViewTransition } from "react";
import { projectEntries } from "./projectData";

const projectCardImages = {
  "seed-workspace": "/assets/project/spacepalette-3.png",
  dfmc: "/assets/project/dfmc-3.png",
  "vrx-terrace": "/assets/project/vrx-terrace-1.png",
};

export default function ProjectList() {
  const [isHovered, setIsHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 28, stiffness: 220, mass: 0.45 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX + 18);
      cursorY.set(e.clientY + 18);
    };
    
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

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
    <section className="relative bg-black px-6 py-12 text-white md:px-12 md:py-16 lg:px-20">
      
      {/* Custom Cursor Follower */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.4,
        }}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.4 }}
        transition={{ duration: 0.3 }}
      >
        View
      </motion.div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-white/80">
            Selected Works
          </p>

          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            Projects
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {projectEntries.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link
                href={`/projects/${project.slug}`}
                transitionTypes={["project-forward"]}
                className="md:cursor-none"
              >
                <div className="relative h-[420px] overflow-hidden md:h-[560px] lg:h-[580px]">
                  <ViewTransition
                    name={`project-image-${project.slug}`}
                    share="project-morph"
                  >
                    <Image
                      src={projectCardImages[project.slug] || project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition duration-[1200ms] group-hover:scale-110"
                    />
                  </ViewTransition>

                  <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/28" />
                </div>

                <div className="flex items-end justify-between border-b border-white/12 py-5">
                  <div>
                    <ViewTransition
                      name={`project-title-${project.slug}`}
                      share="project-title-morph"
                    >
                      <h3 className="text-2xl font-light tracking-[-0.03em] md:text-3xl">
                        {project.title}
                      </h3>
                    </ViewTransition>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.26em] text-white">
                      {project.location}
                    </p>
                  </div>

                  <span className="text-[12px] uppercase tracking-[0.22em] text-[#f47a3c]">
                    View
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
    </ViewTransition>
  );
}
