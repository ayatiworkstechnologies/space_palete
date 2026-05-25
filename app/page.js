import ExpertiseSection from "@/components/home/ExpertiseSection";
import Hero from "@/components/home/hero";
import ProjectProfileSection from "@/components/home/ProjectProfileSection";
import PurposeSection from "@/components/home/PurposeSection";
import TrustSection from "@/components/home/TrustSection";
import VisualStorySection from "@/components/home/VisualStorySection";
import FaqSection from "@/components/home/FaqSection";

export default function Home() {
  return (
    <main className="overflow-clip bg-black text-white">
      <Hero />
      <PurposeSection />
      <ExpertiseSection />
      <TrustSection />
      <VisualStorySection />
      <ProjectProfileSection />
      {/* <FaqSection /> */}
    </main>
  );
}
