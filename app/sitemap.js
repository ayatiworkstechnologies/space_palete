import { projectEntries } from "@/components/project/projectData";

export const dynamic = 'force-static';

export default function sitemap() {
  const projectUrls = projectEntries.map((project) => ({
    url: `https://spacepalette.net/projects/${project.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://spacepalette.net",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://spacepalette.net/about-us/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://spacepalette.net/projects/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://spacepalette.net/contact-us/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    ...projectUrls,
  ];
}
