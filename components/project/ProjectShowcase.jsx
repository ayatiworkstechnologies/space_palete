"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projectImages = [
  "/projects/project-1.jpg",
  "/projects/project-2.jpg",
  "/projects/project-3.jpg",
  "/projects/project-4.jpg",
];

export default function ProjectShowcase() {
  const galleryRef = useRef(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.35], [1.08, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [80, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const scrollGallery = (direction) => {
    if (!galleryRef.current) return;

    galleryRef.current.scrollBy({
      left: direction === "next" ? window.innerWidth * 0.75 : -window.innerWidth * 0.75,
      behavior: "smooth",
    });
  };

  return (
    <main ref={sectionRef} className="relative min-h-screen bg-white text-black">
      {/* Header */}
      

      {/* Intro Split Section */}
      <section className="grid min-h-screen grid-cols-1 pt-28 md:grid-cols-[58%_42%] md:pt-0">
        {/* Left Content */}
        <div className="flex items-center px-6 py-16 md:px-24 lg:px-40">
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="max-w-[780px]"
          >
            <p className="mb-1 text-lg font-semibold uppercase tracking-[-0.04em] text-neutral-400">
              Residential
            </p>

            <h1 className="mb-4 text-6xl font-black uppercase leading-[0.85] tracking-[-0.08em] md:text-8xl">
              Zoha
            </h1>

            <div className="space-y-5 text-[15px] leading-[1.15] tracking-[-0.04em] text-neutral-500 md:text-[17px]">
              <p>
                Zoha, a residence in Kotakkal, seamlessly blends art, crafts, and
                architecture, unfolding poetry with every step. The dramatic roof
                positioning and integration of built and unbuilt spaces initiate a
                dialogue between nature and architecture.
              </p>

              <p>
                The design articulates spaces through courtyards and corridors,
                inducing curiosity and a sensual connection. Craftsmanship shines,
                revealing a high-end collection of artisanal elements.
              </p>

              <p>
                Zoha’s narrative unfolds a rich story of generations, travel,
                material quality, and craftsmanship. The material palette features
                sustainable materials and carefully selected interiors.
              </p>
            </div>

            <div className="mt-8 text-[17px] leading-[1.1] tracking-[-0.05em] text-neutral-500">
              <p>Kottakkal</p>
              <p>2026</p>
            </div>
          </motion.div>
        </div>

        {/* Right Hero Image */}
        <div className="relative min-h-[70vh] overflow-hidden md:min-h-screen">
          <motion.div style={{ scale: imageScale }} className="absolute inset-0">
            <Image
              src="/projects/hero.jpg"
              alt="Project Hero"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Horizontal Gallery */}
      <section className="relative min-h-screen bg-white py-28">
        {/* Left Arrow */}
        <button
          onClick={() => scrollGallery("prev")}
          className="fixed left-5 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition hover:bg-black"
          aria-label="Previous image"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scrollGallery("next")}
          className="fixed right-5 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition hover:bg-black"
          aria-label="Next image"
        >
          <ChevronRight size={22} />
        </button>

        <div
          ref={galleryRef}
          className="hide-scrollbar flex snap-x snap-mandatory gap-24 overflow-x-auto scroll-smooth px-6 md:px-16"
        >
          {projectImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96, y: 80 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[72vh] min-w-[86vw] snap-center overflow-hidden bg-neutral-100 md:h-[82vh] md:min-w-[76vw]"
            >
              <Image
                src={img}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next Project */}
      <section className="grid min-h-screen grid-cols-1 bg-white md:grid-cols-[45%_55%]">
        <div className="flex flex-col items-center justify-center px-6 text-center">
          <p className="mb-40 text-xl font-semibold tracking-[-0.06em]">
            Next Project
          </p>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg font-semibold uppercase tracking-[-0.04em] text-neutral-400">
              Residential
            </p>

            <h2 className="text-6xl font-black uppercase leading-[0.85] tracking-[-0.08em] md:text-8xl">
              Niyathi
            </h2>

            <p className="mt-2 text-lg tracking-[-0.05em] text-neutral-500">
              Thrissur
            </p>
          </motion.div>
        </div>

        <Link href="#" className="group relative min-h-[80vh] overflow-hidden md:min-h-screen">
          <Image
            src="/projects/next-project.jpg"
            alt="Next Project"
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

          <span className="absolute left-1/2 top-1/2 rounded-full bg-white px-4 py-1 text-sm font-medium tracking-[-0.04em] text-black opacity-0 shadow-md transition group-hover:opacity-100">
            open
          </span>
        </Link>
      </section>

      
    </main>
  );
}