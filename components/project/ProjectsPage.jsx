"use client";

import ProjectList from "./ProjectList";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="relative z-10">
        <ProjectList />
      </div>
    </main>
  );
}
