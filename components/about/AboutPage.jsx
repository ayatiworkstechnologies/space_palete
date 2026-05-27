"use client";

import AboutHero from "./AboutHero";
import AboutIntro from "./AboutIntro";
import FoundersSection from "./FoundersSection";
import TeamSection from "./TeamSection";
import ServicesProcess from "./ServicesProcess";
import AboutFooter from "./AboutFooter";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <AboutHero />
      <AboutIntro />
      <FoundersSection />
      <TeamSection />
      <ServicesProcess />
      <AboutFooter />
    </main>
  );
}