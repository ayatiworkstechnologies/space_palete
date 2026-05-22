import ExpertiseSection from "@/components/home/ExpertiseSection";
import Hero from "@/components/home/hero";
import ProjectProfileSection from "@/components/home/ProjectProfileSection";
import PurposeSection from "@/components/home/PurposeSection";
import TrustSection from "@/components/home/TrustSection";
import VisualStorySection from "@/components/home/VisualStorySection";
import FaqSection from "@/components/home/FaqSection";
import ScrollMotion from "@/components/home/ScrollMotion";

export default function Home() {
  return (
    <main className="home-page">
      <ScrollMotion />
      <Hero />
      <PurposeSection />
      <ExpertiseSection />
      <TrustSection />
      <VisualStorySection />
      <ProjectProfileSection />
      <FaqSection />
    </main>
  );
}
