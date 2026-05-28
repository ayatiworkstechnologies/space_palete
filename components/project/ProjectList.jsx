"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { projectEntries } from "./projectData";

export default function ProjectList() {
  const [isHovered, setIsHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 50); // offset by half width (100px / 2)
      cursorY.set(e.clientY - 50);
    };
    
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <section className="bg-black px-6 py-20 text-white md:px-12 md:py-28 lg:px-20 relative">
      
      {/* Custom Cursor Follower */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-[11px] font-semibold uppercase tracking-[0.2em] text-white"
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

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-white">
            Selected Works
          </p>

          <h2 className="text-[42px] font-light tracking-[-0.04em] md:text-[72px]">
            Projects
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
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
              <Link href={`/projects/${project.slug}`} className="cursor-none">
                <div className="relative h-[360px] overflow-hidden md:h-[520px]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-[1200ms] group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/28" />
                </div>

                <div className="flex items-end justify-between border-b border-white/12 py-5">
                  <div>
                    <h3 className="text-2xl font-light tracking-[-0.03em] md:text-3xl">
                      {project.title}
                    </h3>
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
  );
}
