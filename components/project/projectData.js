export const projectEntries = [
  {
    id: 1,
    slug: "seed-workspace",
    title: "Space Palette Workspace",
    location: "Chennai",
    studio: "Space Palette Studio",
    type: "Design & Build",
    year: "2025",
    size: "3200 sq.ft",

    heroImage: "/assets/project/spacepalette-1.png",
    introVideo: "/assets/intro.mp4",

    coverImage: "/assets/project/spacepalette-1.png",
    fullImage: "/assets/project/spacepalette-8.png",

    stackImages: [
      "/assets/project/spacepalette-1.png",
      "/assets/project/spacepalette-2.png",
    ],

    images: [
      "/assets/project/spacepalette-3.png",
      "/assets/project/spacepalette-4.png",
      "/assets/project/spacepalette-5.png",
      "/assets/project/spacepalette-6.png",
      "/assets/project/spacepalette-7.png",
      "/assets/project/spacepalette-8.png",
    ],

    gallery: [
      {
        image: "/assets/project/spacepalette-3.png",
        className: "md:col-start-1 md:row-start-1 md:mt-0",
      },
      {
        image: "/assets/project/spacepalette-4.png",
        className: "md:col-start-2 md:row-start-1 md:mt-28",
      },
      {
        image: "/assets/project/spacepalette-5.png",
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
    id: 2,
    slug: "dfmc",
    title: "DFMC",
    location: "Chennai",
    studio: "Space Palette Studio",
    type: "Design & Build",
    year: "2025",
    size: "Not specified",

    heroImage: "/assets/project/dfmc-1.png",
    introVideo: "/assets/intro.mp4",

    coverImage: "/assets/project/dfmc-1.png",
    fullImage: "/assets/project/dfmc-9.png",

    stackImages: [
      "/assets/project/dfmc-1.png",
      "/assets/project/dfmc-2.png",
    ],

    images: [
      "/assets/project/dfmc-3.png",
      "/assets/project/dfmc-4.png",
      "/assets/project/dfmc-5.png",
      "/assets/project/dfmc-6.png",
      "/assets/project/dfmc-7.png",
      "/assets/project/dfmc-8.png",
      "/assets/project/dfmc-9.png",
    ],

    gallery: [
      {
        image: "/assets/project/dfmc-3.png",
        className: "md:col-start-1 md:row-start-1 md:mt-0",
      },
      {
        image: "/assets/project/dfmc-4.png",
        className: "md:col-start-2 md:row-start-1 md:mt-28",
      },
      {
        image: "/assets/project/dfmc-5.png",
        className: "md:col-start-3 md:row-start-1 md:mt-48",
      },
    ],

    leftText: "Crafted Commercial Spaces",
    rightText: "Chennai",

    description: [
      "DFMC is shaped as a refined commercial environment where clarity, comfort, and function work together. The design balances focused planning with expressive material moments, creating a space that feels composed, efficient, and welcoming.",
      "Layered lighting, warm finishes, and carefully organized movement paths define the experience. Each zone is planned to support daily operations while maintaining a polished visual language.",
      "The project reflects Space Palette's integrated approach to design and build, bringing together spatial planning, execution detail, and a cohesive atmosphere.",
    ],

    details: [
      ["Client", "DFMC"],
      ["Location", "Chennai"],
      ["Year", "2025"],
      ["Size", "Not specified"],
      ["Type", "Design & Build"],
    ],
  },

  {
    id: 3,
    slug: "vrx-terrace",
    title: "VRX Terrace",
    location: "Chennai",
    studio: "Space Palette Studio",
    type: "Terrace Design",
    year: "2025",
    size: "Not specified",

    heroImage: "/assets/project/vrx-terrace.png",
    introVideo: "/assets/intro.mp4",

    coverImage: "/assets/project/vrx-terrace.png",
    fullImage: "/assets/project/vrx-terrace-8.png",

    stackImages: [
      "/assets/project/vrx-terrace.png",
      "/assets/project/vrx-terrace-1.png",
    ],

    images: [
      "/assets/project/vrx-terrace-2.png",
      "/assets/project/vrx-terrace-3.png",
      "/assets/project/vrx-terrace-4.png",
      "/assets/project/vrx-terrace-5.png",
      "/assets/project/vrx-terrace-6.png",
      "/assets/project/vrx-terrace-7.png",
      "/assets/project/vrx-terrace-8.png",
    ],

    gallery: [
      {
        image: "/assets/project/vrx-terrace-2.png",
        className: "md:col-start-1 md:row-start-1 md:mt-0",
      },
      {
        image: "/assets/project/vrx-terrace-3.png",
        className: "md:col-start-2 md:row-start-1 md:mt-28",
      },
      {
        image: "/assets/project/vrx-terrace-4.png",
        className: "md:col-start-3 md:row-start-1 md:mt-48",
      },
    ],

    leftText: "Elevated Outdoor Living",
    rightText: "Chennai",

    description: [
      "VRX Terrace is designed as an elevated outdoor extension that blends leisure, greenery, and refined spatial comfort. The terrace is planned to feel open and relaxed while still carrying a clear design identity.",
      "Thoughtful seating, material rhythm, lighting, and landscape elements create a layered environment for gathering, pause, and everyday use.",
      "The project brings together exterior styling and practical detailing, turning the terrace into a calm, usable, and memorable part of the home.",
    ],

    details: [
      ["Client", "VRX Terrace"],
      ["Location", "Chennai"],
      ["Year", "2025"],
      ["Size", "Not specified"],
      ["Type", "Terrace Design"],
    ],
  },
];

export function getProjectBySlug(slug) {
  return projectEntries.find((project) => project.slug === slug);
}

export function getNextProject(slug) {
  const currentIndex = projectEntries.findIndex((project) => project.slug === slug);

  if (currentIndex === -1 || projectEntries.length <= 1) {
    return null;
  }

  return projectEntries[(currentIndex + 1) % projectEntries.length];
}
