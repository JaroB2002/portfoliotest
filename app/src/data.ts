export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  disciplines: string[];
  blurb: string;
  image: string;
  caseUrl: string;
};

export const projects: Project[] = [
  {
    slug: "masked-giant",
    title: "The Masked Giant",
    client: "Personal concept",
    year: "2025",
    disciplines: ["Concept", "Campaign", "Story"],
    blurb:
      "A giant burger costume hides a Belgian icon — mystery and national pride as cult-status fuel.",
    image: "/work/masked-giant.webp",
    caseUrl: "https://jarobrichau.be/work/themaskedgiant.html",
  },
  {
    slug: "missing-kidt",
    title: "The Missing Kid(t)",
    client: "Child Focus",
    year: "2025",
    disciplines: ["Social impact", "Idea", "Craft"],
    blurb:
      "A concept built to stick — turning attention into action for missing children.",
    image: "/work/missing-kidt.webp",
    caseUrl: "https://jarobrichau.be/work/themissingkidt.html",
  },
  {
    slug: "naperol",
    title: "Naperol",
    client: "Aperol Spritz",
    year: "2025",
    disciplines: ["Activation", "Brand", "Social"],
    blurb: "Aperol energy, louder. A bright, shareable hit for the Spritz crowd.",
    image: "/work/naperol.webp",
    caseUrl: "https://jarobrichau.be/work/naperol.html",
  },
  {
    slug: "aging-murals",
    title: "Aging Murals",
    client: "Child Focus",
    year: "2025",
    disciplines: ["OOH", "Concept", "Impact"],
    blurb:
      "Murals that age with the issue — public space as a slow, unavoidable reminder.",
    image: "/work/aging-murals.webp",
    caseUrl: "https://jarobrichau.be/work/agingmurals.html",
  },
];

export const disciplines = [
  { label: "Creative concepts", note: "Campaigns & ideas that land" },
  { label: "Digital marketing", note: "Performance, SEO, SEA, social" },
  { label: "UX / UI", note: "Research, flows, prototypes" },
  { label: "Brand & design", note: "Identity, web, experiences" },
  { label: "Frontend craft", note: "Build what you design" },
  { label: "AI in the workflow", note: "Faster from brief to ship" },
];

export const timeline = [
  {
    year: "Now",
    title: "Digital Marketing Consultant",
    place: "DIDIOM — Antwerp",
    detail:
      "In-house digital marketing support: strategy, channels and creative execution at the client’s desk.",
  },
  {
    year: "2026",
    title: "Digital Communication & AI",
    place: "Thomas More · magna cum laude",
    detail: "Performance marketing, SEO/SEA, video and AI-backed creative production.",
  },
  {
    year: "2026",
    title: "Internship",
    place: "Fightclub — Antwerp",
    detail: "Performance marketing, design and brand systems — data meeting craft.",
  },
  {
    year: "2025",
    title: "Creative Belgium School",
    place: "Thomas More · postgraduate",
    detail: "Advertising craft under pressure. 3rd place YoungDogs Belgium.",
  },
  {
    year: "2025",
    title: "Internship",
    place: "Berlin Creative Studio",
    detail: "Concepts for HelloFresh, C&A, Champion, MultiPharma and more.",
  },
  {
    year: "2024",
    title: "Digital Experience Design",
    place: "Thomas More · bachelor",
    detail: "UX/UI, branding and interactive foundations — plus internship at Strarex.",
  },
];
