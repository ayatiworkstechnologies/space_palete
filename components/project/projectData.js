export const projectEntries = [
  {
    slug: "seed-workspace",
    title: "Space Palette Workspace",
    location: "Chennai",
    studio: "Space Palette Studio",
    type: "Design & Build",
    year: "2025",
    size: "3200 sq.ft",
    heroImage: "/assets/project/project-hero.png",
    introVideo: "/assets/intro.mp4",
    coverImage: "/assets/project/project-1.png",
    fullImage: "/assets/project/project-1-4.png",
    gallery: [
      {
        image: "/assets/project/project-1-1.png",
        className: "md:col-start-1 md:row-start-1 md:mt-0",
      },
      {
        image: "/assets/project/project-1-2.png",
        className: "md:col-start-2 md:row-start-1 md:mt-28",
      },
      {
        image: "/assets/project/project-1-3.png",
        className: "md:col-start-3 md:row-start-1 md:mt-48",
      },
    ],
    leftText: "Crafted Living Spaces",
    rightText: "Chennai",
    description: [
      "SEED is conceived as a living workspace shaped through collaboration, craft, and constant evolution. Designed as both a threshold and a creative environment, the space balances warmth with clarity through muted tones, natural textures, soft lighting, and thoughtful spatial flow.",
      "The entrance, marked by a bold orange portal, creates a moment of pause, welcoming visitors into an atmosphere of calm focus and quiet exchange. Grounded materials, greenery, writable surfaces, and acoustically softened passages transform the workplace into a space that feels intuitive, peaceful, and deeply human.",
      "Rather than a finished statement, SEED reflects an evolving process, growing continuously through the people, conversations, and work it holds.",
    ],
    details: [
      ["Client", "Space Palette"],
      ["Location", "Chennai"],
      ["Year", "2025"],
      ["Size", "3200 sq.ft"],
      ["Type", "Design & Build"],
    ],
  },
  {
    slug: "seed-workspace-1",
    title: "Space Palette Workspace 1",
    location: "Chennai",
    studio: "Space Palette Studio",
    type: "Design & Build",
    year: "2025",
    size: "3200 sq.ft",
    heroImage: "/assets/project/project-hero.png",
    introVideo: "/assets/intro.mp4",
    coverImage: "/assets/project/project-2.png",
    fullImage: "/assets/project/project-1-4.png",
    gallery: [
      {
        image: "/assets/project/project-1-1.png",
        className: "md:col-start-1 md:row-start-1 md:mt-0",
      },
      {
        image: "/assets/project/project-1-2.png",
        className: "md:col-start-2 md:row-start-1 md:mt-28",
      },
      {
        image: "/assets/project/project-1-3.png",
        className: "md:col-start-3 md:row-start-1 md:mt-48",
      },
    ],
    leftText: "Crafted Living Spaces",
    rightText: "Chennai",
    description: [
      "SEED is conceived as a living workspace shaped through collaboration, craft, and constant evolution. Designed as both a threshold and a creative environment, the space balances warmth with clarity through muted tones, natural textures, soft lighting, and thoughtful spatial flow.",
      "The entrance, marked by a bold orange portal, creates a moment of pause, welcoming visitors into an atmosphere of calm focus and quiet exchange. Grounded materials, greenery, writable surfaces, and acoustically softened passages transform the workplace into a space that feels intuitive, peaceful, and deeply human.",
      "Rather than a finished statement, SEED reflects an evolving process, growing continuously through the people, conversations, and work it holds.",
    ],
    details: [
      ["Client", "Space Palette"],
      ["Location", "Chennai"],
      ["Year", "2025"],
      ["Size", "3200 sq.ft"],
      ["Type", "Design & Build"],
    ],
  },
];

export function getProjectBySlug(slug) {
  return projectEntries.find((project) => project.slug === slug);
}
