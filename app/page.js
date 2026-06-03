import Hero from "@/components/home/hero";
import ProjectProfileSection from "@/components/home/ProjectProfileSection";
import PurposeSection from "@/components/home/PurposeSection";
import TrustSection from "@/components/home/TrustSection";
import VisualStorySection from "@/components/home/VisualStorySection";
import ScrollMotion from "@/components/home/ScrollMotion";
import HbaStylePage from "@/components/home/HbaStylePage";
import BackgroundVectors from "@/components/layouts/BackgroundVectors";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesignService",
  name: "Space Palette",
  url: "https://spacepalette.net",
  email: "uma@spacepalette.net",
  telephone: "+91 7338811688",
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
    <main className="relative overflow-clip text-white">
      <BackgroundVectors />
      <ScrollMotion />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <div className="relative z-10">
        <Hero />
        <PurposeSection />
        <HbaStylePage />
        <TrustSection />
        <VisualStorySection />
        <ProjectProfileSection />
      </div>
    </main>
  );
}
