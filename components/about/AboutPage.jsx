"use client";

import BackgroundVectors from "@/components/layouts/BackgroundVectors";
import AboutHero from "./AboutHero";
import AboutIntro from "./AboutIntro";
import FoundersSection from "./FoundersSection";
import TeamSection from "./TeamSection";
import ServicesProcess from "./ServicesProcess";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <BackgroundVectors />
      <div className="relative z-10">
        <AboutHero />
        <AboutIntro />
        <FoundersSection />
        <TeamSection />
        <ServicesProcess />
      </div>
    </main>
  );
}
