export type Project = {
  slug: string;
  title: string;
  role: string;
  year?: string;
  client?: string;
  info: string[];
  image?: string;
  imagePosition?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "goldieblox",
    title: "GOLDIEBLOX",
    role: "Co-Founder",
    info: [
      "The award winning children's multimedia company challenging gender stereotypes with the world's first girl engineer character.",
      "Winning toy of the year, app of the year, and selling over 1 million toys worldwide — with viral growth that disrupted the pink aisle.",
    ],
    image: "/framer-ref/usabf0mbi6Y4BsxFsan0o1vY.jpg",
  },
  {
    slug: "crunchlabs",
    title: "CRUNCHLABS",
    role: "PRODUCER",
    info: [
      "Free STEM education curriculum and activities that kids actually want in public schools nationwide with Mark Rober and CrunchLabs.",
      "Mark is known as The Willy Wonka of Engineering and CrunchLabs is his real-life factory of creativity.",
    ],
    image: "/photos/crunchlabs.webp",
  },
  {
    slug: "rhyme-combinator",
    title: "RHYME COMBINATOR",
    role: "Co-Founder & CEO",
    info: [
      "Media company championing positive entrepreneurial culture through rap and technology. Pushing the boundaries of content creation with A.I., projection, and live performance.",
      "Creating and distributing content that explain A.I., blockchain, and other complex concepts in easily retained and shared viral formats — including live events, performances, and social media with creator and influencer networks.",
    ],
    image: "/photos/hero-background.jpg",
  },
  {
    slug: "2020-election",
    title: "MEME2020",
    role: "PRODUCER",
    info: [
      "Persuaded voters in pivot counties away from Donald Trump contributing to Biden's victory in 2020 with the first ever at-scale mass tested meme persuasion campaign.",
    ],
    image: "/photos/NYTimes-2.jpg",
  },
  {
    slug: "searchandmaps",
    title: "Zillow",
    role: "Program Manager",
    info: [
      "Led Search & Maps team. Unified user experience across all product departments during early high-growth launch and viral user adoption.",
    ],
    image: "/photos/zillow.png",
  },
  {
    slug: "windowsslideshow",
    title: "Microsoft",
    role: "Program Manager",
    info: [
      "Brought videos to slideshow & screensaver for the first time ever in Windows, by using early accelerated GPU's and hacking \"photostory\" to make music videos.",
    ],
    image: "/photos/Nvidia-graphics.webp",
  },
];

export function adjacentProjects(slug: string) {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? PROJECTS[i - 1] : null,
    next: i < PROJECTS.length - 1 ? PROJECTS[i + 1] : null,
  };
}
