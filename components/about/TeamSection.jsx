"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gridCells = [
  // Row 1
  { type: "image", id: 1 },
  { type: "image", id: 2 },
  { type: "image", id: 3 },
  { type: "image", id: 4 },
  { type: "image", id: 5 },
  { type: "image", id: 6 },
  
  // Row 2
  { type: "empty" },
  { type: "image", id: 7 },
  { type: "image", id: 8 },
  { type: "image", id: 9 },
  { type: "empty" },
  { type: "image", id: 10 },
  
  // Row 3
  { type: "image", id: 11 },
  { type: "empty" },
  { type: "image", id: 12 },
  { type: "image", id: 13 },
  { type: "image", id: 14 },
  { type: "image", id: 15 },
  
  // Row 4
  { type: "image", id: 16 },
  { type: "image", id: 17 },
  { type: "empty" },
  { type: "image", id: 18 },
  { type: "empty" },
  { type: "image", id: 19 },
  
  // Row 5
  { type: "image", id: 20 },
  { type: "empty" },
  { type: "image", id: 21 },
  { type: "image", id: 22 },
  { type: "empty" },
  { type: "image", id: 23 },
];

const teamImages = gridCells.filter((cell) => cell.type === "image");

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-16 text-white md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          
          {/* Left Column: Title and Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <h2 className="text-[34px] font-medium leading-[1.05] tracking-normal text-[#E16E38] md:text-[40px] uppercase font-secondary">
              Meet
              <br />
              Our Team
            </h2>

            <p className="font-secondary mt-6 text-[15px] font-normal text-white/70 text-justify md:text-[16px]">
              Our team brings together expertise in Interior Design, Workplace
              Strategy, Project Coordination and Turnkey execution to craft
              environments that balance aesthetics with business functionality,
              Every project is approaches collaboratively, ensuring precision,
              innovation and seamless delivery at every stage.
            </p>
          </motion.div>

          {/* Right Column: Photos Grid */}
          <div className="lg:col-span-8 w-full">
            
            {/* Desktop View: 6 Columns with exact spacers to match client's layout */}
            <div className="hidden lg:grid grid-cols-6 gap-3 w-full">
              {gridCells.map((cell, index) => {
                if (cell.type === "empty") {
                  return <div key={`empty-${index}`} className="aspect-[312/344] bg-transparent" />;
                }

                return (
                  <motion.div
                    key={`desktop-team-${cell.id}`}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (index % 6) * 0.05 }}
                    className="relative aspect-[312/344] overflow-hidden bg-neutral-900 border border-white/5"
                  >
                    <Image
                      src={`/assets/teams/${cell.id}.png`}
                      alt={`Space Palette team member ${cell.id}`}
                      fill
                      sizes="(max-width: 1024px) 16vw, 12vw"
                      className="object-contain object-center grayscale"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile/Tablet View: Fluid grid with no gaps */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:hidden w-full">
              {teamImages.map((cell, index) => (
                <motion.div
                  key={`mobile-team-${cell.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: Math.min(index * 0.03, 0.15) }}
                  className="relative aspect-[312/344] overflow-hidden bg-neutral-900 border border-white/5"
                >
                  <Image
                    src={`/assets/teams/${cell.id}.png`}
                    alt={`Space Palette team member ${cell.id}`}
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw"
                    className="object-contain object-center grayscale"
                  />
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
