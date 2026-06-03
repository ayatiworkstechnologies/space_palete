"use client";

import BackgroundVectors from "@/components/layouts/BackgroundVectors";
import ContactHero from "./ContactHero";
import ContactFormSection from "./ContactFormSection";
import ContactMapSection from "./ContactMapSection";
import ScatteredDotsBackground from "@/components/ScatteredDotsBackground";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white pt-24">
      {/* <BackgroundVectors /> */}
      {/* <ScatteredDotsBackground color="rgba(255, 255, 255, 0.15)" maxDotSize={1.2} density={0.0003} speed={0.1} /> */}
      <div className="relative z-10">
        <ContactHero />
        <ContactFormSection />
        <ContactMapSection />
      </div>
    </main>
  );
}
