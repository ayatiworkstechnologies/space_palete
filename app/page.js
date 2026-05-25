import ExpertiseSection from "@/components/home/ExpertiseSection";
import DesignExpertiseShowcase from "@/components/home/DesignExpertiseShowcase";
import Hero from "@/components/home/hero";
import ProjectProfileSection from "@/components/home/ProjectProfileSection";
import PurposeSection from "@/components/home/PurposeSection";
import TrustSection from "@/components/home/TrustSection";
import VisualStorySection from "@/components/home/VisualStorySection";
import FaqSection from "@/components/home/FaqSection";
import ScrollMotion from "@/components/home/ScrollMotion";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesignService",
  name: "Space Palette",
  url: "https://spacepalette.net",
  email: "uma@spacepalette.net",
  telephone: "+91 8688098077",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "No.46, 3rd Floor, GSquare Building, Rajiv Gandhi Salai, OMR, Kandanchavadi",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600096",
    addressCountry: "IN",
  },
  areaServed: ["Chennai", "Bangalore", "Hyderabad", "Coimbatore"],
  description:
    "Luxury interior design studio crafting refined residential interiors, commercial interiors, modular kitchens, and turnkey design solutions.",
  image: "https://spacepalette.net/1.png",
  sameAs: [
    "https://www.facebook.com/spacepalette22/",
    "https://www.instagram.com/spacepalette_urban/",
    "https://www.threads.com/@spacepalette_urban",
    "https://x.com/offPaletteSpace",
    "https://www.youtube.com/@Spacepalette-designs",
    "https://www.linkedin.com/company/space-palette-india",
    "https://in.pinterest.com/spacepalettedesigns/",
  ],
};

export default function Home() {
  return (
    <main className="overflow-clip bg-black text-white">
      <ScrollMotion />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <Hero />
      <PurposeSection />
      <DesignExpertiseShowcase />
      <ExpertiseSection />
      <TrustSection />
      <VisualStorySection />
      <ProjectProfileSection />
      {/* <FaqSection /> */}
    </main>
  );
}
