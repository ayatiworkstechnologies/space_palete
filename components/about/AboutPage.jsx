"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import BackgroundVectors from "@/components/layouts/BackgroundVectors";
import AboutIntro from "./AboutIntro";
import FoundersSection from "./FoundersSection";
import TeamSection from "./TeamSection";
import ServicesProcess from "./ServicesProcess";

function PageSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <BackgroundVectors />
      <div className="pointer-events-none fixed left-[-18vw] top-[22vh] z-0 h-[46vw] w-[46vw] rounded-full bg-[#E16E38]/[0.035] blur-[120px]" />
      <div className="pointer-events-none fixed right-[-20vw] top-[58vh] z-0 h-[42vw] w-[42vw] rounded-full bg-white/[0.025] blur-[120px]" />
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left bg-[#E16E38]"
      />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-28 bg-gradient-to-b from-black/45 to-transparent" />
      <div className="relative z-10">
        <PageSection>
          <AboutIntro />
        </PageSection>
        <PageSection delay={0.05}>
          <FoundersSection />
        </PageSection>
        <PageSection delay={0.05}>
          <TeamSection />
        </PageSection>
        <ServicesProcess />
      </div>
    </main>
  );
}
