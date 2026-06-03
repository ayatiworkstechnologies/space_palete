"use client";

import ContactHero from "./ContactHero";
import ContactFormSection from "./ContactFormSection";
import ContactMapSection from "./ContactMapSection";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white pt-24">
      <div className="relative z-10">
        <ContactHero />
        <ContactFormSection />
        <ContactMapSection />
      </div>
    </main>
  );
}
