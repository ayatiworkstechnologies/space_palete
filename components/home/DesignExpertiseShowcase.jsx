"use client";

import CommonButton from "@/components/CommonButton";
import { projectEntries } from "@/components/project/projectData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const projectShowcaseItems = projectEntries.map((project, index) => {
  const galleryImages = (project.gallery || []).map((item) => item.image);
  const images = [
    ...(project.stackImages || []),
    ...(project.images || []),
    ...galleryImages,
    project.fullImage,
    project.coverImage,
  ].filter(Boolean);
  const uniqueImages = [...new Set(images)];

  return {
    ...project,
    number: String(index + 1).padStart(2, "0"),
    description:
      project.description?.[0] ||
      `${project.title} is a ${project.type.toLowerCase()} project in ${project.location}.`,
    mainImage: project.coverImage || project.heroImage,
    topImage: uniqueImages[1] || uniqueImages[0] || project.coverImage,
    bottomImage: uniqueImages[2] || uniqueImages[1] || uniqueImages[0] || project.coverImage,
  };
});

export default function DesignExpertiseShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const activeProject = projectShowcaseItems[activeIndex] || projectShowcaseItems[0];

  useEffect(() => {
    const updateActiveService = () => {
      if (!sectionRef.current || projectShowcaseItems.length === 0) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;

      if (scrollableDistance <= 0) return;

      const progress = Math.min(
        Math.max(-rect.top / scrollableDistance, 0),
        0.999,
      );

      setActiveIndex(Math.floor(progress * projectShowcaseItems.length));
    };

    updateActiveService();
    window.addEventListener("scroll", updateActiveService, { passive: true });
    window.addEventListener("resize", updateActiveService);

    return () => {
      window.removeEventListener("scroll", updateActiveService);
      window.removeEventListener("resize", updateActiveService);
    };
  }, []);

  if (!activeProject) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible bg-black text-white"
      style={{ minHeight: `${Math.max(projectShowcaseItems.length, 1) * 105}vh` }}
    >
      <div className="sticky top-0 min-h-screen overflow-hidden px-6 py-20 md:px-10 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[url('/line.png')] bg-cover bg-center opacity-25" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/70" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1fr_0.72fr] lg:items-center">
          <div>
            <div className="mb-6 flex items-center gap-4 text-white lg:hidden">
              <span className="h-px w-10 bg-white/25" />
              <span className="font-secondary text-[10px] uppercase tracking-[0.28em]">
                Chapter 02
              </span>
            </div>

            <h2 className="max-w-sm text-3xl font-medium leading-tight tracking-tight text-white md:text-5xl">
              Design
              <br />
              &amp; Expertise
            </h2>

            <div className="mt-10 divide-y divide-white/12 border-b border-white/12">
              {projectShowcaseItems.map((project, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={project.slug}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group block w-full py-4 text-left"
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`text-base transition duration-500 ${
                          isActive ? "text-[#f47a3c]" : "text-white"
                        }`}
                      >
                        {project.number}
                      </span>
                      <h3
                        className={`text-base font-medium transition duration-500 md:text-lg ${
                          isActive ? "text-white" : "text-white"
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <div
                      className={`grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-11 mt-5 max-w-sm">
                          <p className="text-base leading-7 text-white/90 md:text-lg md:leading-8">
                            {project.description}
                          </p>
                          <CommonButton
                            as={Link}
                            href={`/projects/${project.slug}`}
                            transitionTypes={["project-forward"]}
                            variant="outline"
                            className="mt-7 !px-5 !py-3 !text-[11px] group-hover:border-[#f47a3c]"
                            iconSize={16}
                          >
                            View Project
                          </CommonButton>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl overflow-hidden">
            <div className="relative aspect-[4/5] w-full opacity-0 transition duration-700 ease-out [animation:fadeInImage_700ms_ease-out_forwards]">
              <Image
                key={activeProject.mainImage}
                src={activeProject.mainImage}
                alt={`${activeProject.title} by Space Palette`}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>

          <div className="grid gap-6">
            <div className="relative aspect-[16/9] w-full opacity-0 transition duration-700 ease-out [animation:fadeInImage_700ms_ease-out_forwards]">
              <Image
                key={activeProject.topImage}
                src={activeProject.topImage}
                alt={`${activeProject.title} detail`}
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/9] w-full opacity-0 transition duration-700 ease-out [animation:fadeInImage_700ms_ease-out_120ms_forwards]">
              <Image
                key={activeProject.bottomImage}
                src={activeProject.bottomImage}
                alt={`${activeProject.title} concept`}
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover"
              />
            </div>
            <p className="max-w-sm text-base leading-7 text-white/90 md:text-lg md:leading-8">
              {activeProject.type} in {activeProject.location}, shaped with
              precision, clarity, and purpose.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInImage {
          from {
            opacity: 0;
            transform: translateY(14px) scale(1.03);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
