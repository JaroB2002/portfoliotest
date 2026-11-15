export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  tag: string;
  blurb: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "masked-giant",
    title: "The Masked Giant",
    client: "Personal / The Masked Singer",
    year: "2025",
    tag: "Campaign concept",
    blurb:
      "A giant burger costume hides a Belgian icon — mystery and national pride as cult-status fuel.",
    image: "/work/masked-giant.webp",
  },
  {
    slug: "missing-kidt",
    title: "The Missing Kid(t)",
    client: "Child Focus",
    year: "2025",
    tag: "Social impact",
    blurb:
      "A concept built to stick — turning attention into action for missing children.",
    image: "/work/missing-kidt.webp",
  },
  {
    slug: "naperol",
    title: "Naperol",
    client: "Aperol Spritz",
    year: "2025",
    tag: "Brand activation",
    blurb:
      "Aperol energy, louder. A bright, shareable hit for the Spritz crowd.",
    image: "/work/naperol.webp",
  },
  {
    slug: "aging-murals",
    title: "Aging Murals",
    client: "Child Focus",
    year: "2025",
    tag: "Outdoor / idea",
    blurb:
      "Murals that age with the issue — public space as a slow, unavoidable reminder.",
    image: "/work/aging-murals.webp",
  },
];

export const capabilities = [
  "Creative concepts",
  "Campaign thinking",
  "UX / UI",
  "Brand systems",
  "Prototyping",
  "Frontend craft",
  "Storytelling",
  "Interactive experiences",
];
