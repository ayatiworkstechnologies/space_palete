"use client";

import BackgroundVectors from "@/components/layouts/BackgroundVectors";
import ScatteredDotsBackground from "@/components/ScatteredDotsBackground";
import ProjectHero from "./ProjectHero";
import ProjectList from "./ProjectList";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* <BackgroundVectors /> */}
      {/* <ScatteredDotsBackground color="rgba(255, 255, 255, 0.25)" maxDotSize={1.5} density={0.0004} speed={0.2} /> */}
      <div className="relative z-10">
        <ProjectHero title="Projects" image="/assets/project/projects-hero.png" />
        <ProjectList />
      </div>
    </main>
  );
}
