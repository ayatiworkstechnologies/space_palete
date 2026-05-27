"use client";

import BackgroundVectors from "@/components/layouts/BackgroundVectors";
import ProjectHero from "./ProjectHero";
import ProjectList from "./ProjectList";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundVectors />
      <div className="relative z-10">
        <ProjectHero title="Projects" image="/assets/project/projects-hero.png" />
        <ProjectList />
      </div>
    </main>
  );
}
