import { notFound } from "next/navigation";
import ProjectInnerPage from "@/components/project/ProjectInnerPage";
import {
  getProjectBySlug,
  projectEntries,
} from "@/components/project/projectData";

export function generateStaticParams() {
  return projectEntries.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: `${project.title} by Space Palette, a ${project.type.toLowerCase()} project in ${project.location}.`,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Space Palette`,
      description: `${project.title} by Space Palette, a ${project.type.toLowerCase()} project in ${project.location}.`,
      url: `/projects/${project.slug}`,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Space Palette`,
      description: `${project.title} by Space Palette, a ${project.type.toLowerCase()} project in ${project.location}.`,
      images: [project.coverImage],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectInnerPage project={project} />;
}
