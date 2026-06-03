"use client";

import ProjectHero from "./ProjectHero";
import ProjectList from "./ProjectList";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="relative z-10">
        <ProjectHero title="Projects" image="/assets/project/projects-hero.png" />
        <ProjectList />
      </div>
    </main>
  );
}
