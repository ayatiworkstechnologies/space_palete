"use client";

import BackgroundVectors from "@/components/layouts/BackgroundVectors";
import ContactHero from "./ContactHero";
import ContactFormSection from "./ContactFormSection";
import ContactMapSection from "./ContactMapSection";
import DotPattern from "@/components/DotPattern";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white pt-24">
      <BackgroundVectors />
      <DotPattern variant="scatter" density="low" accent />
      <div className="relative z-10">
        <ContactHero />
        <ContactFormSection />
        <ContactMapSection />
      </div>
    </main>
  );
}
