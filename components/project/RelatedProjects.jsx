"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import DotPattern from "@/components/DotPattern";
import { projectEntries } from "./projectData";

export default function RelatedProjects({ currentSlug }) {
  const relatedProjects = projectEntries.filter(
    (project) => project.slug !== currentSlug
  );

  return (
    <section className="relative bg-black px-6 py-6 text-white md:px-12 md:py-8 lg:px-20 overflow-hidden">
      <DotPattern variant="wave" density="low" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-white">
            Explore Next
          </p>

          <h2 className="text-[38px] font-light tracking-[-0.04em] md:text-[64px]">
            Relevant Projects
          </h2>
        </motion.div>

        {relatedProjects.length > 0 ? (
          <div className="grid gap-10 md:grid-cols-2">
            {relatedProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group"
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative h-[360px] overflow-hidden md:h-[480px]">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                      className="object-cover transition duration-[1200ms] group-hover:scale-105"
                    />
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
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="border border-white/10 px-6 py-12 text-center md:px-10"
          >
            <p className="text-lg leading-8 text-white md:text-xl">
              More projects will appear here as new work is added.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
