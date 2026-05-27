"use client";

import BackgroundVectors from "@/components/layouts/BackgroundVectors";
import ProjectHero from "./ProjectHero";
import ProjectDetailsIntro from "./ProjectDetailsIntro";
import ProjectFloatingGallery from "./ProjectFloatingGallery";
import ProjectFullImage from "./ProjectFullImage";
import RelatedProjects from "./RelatedProjects";

export default function ProjectInnerPage({ project }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundVectors />
      <div className="relative z-10">
        <ProjectHero
          title={project.title}
          image={project.heroImage}
          leftText={project.leftText}
          rightText={project.rightText}
        />
        <ProjectDetailsIntro project={project} />
        <ProjectFloatingGallery gallery={project.gallery} title={project.title} />
        <ProjectFullImage image={project.fullImage} title={project.title} />
        <RelatedProjects currentSlug={project.slug} />
      </div>
    </main>
  );
}
