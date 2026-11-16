export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  label: string;
  disciplines: string[];
  blurb: string;
  image: string;
  role: string;
  brief: string;
  insight: string;
  idea: string;
  impact: string;
};

export const projects: Project[] = [
  {
    slug: "masked-giant",
    title: "The Masked Giant",
    client: "Personal concept · Quick",
    year: "2025",
    label: "Concept / campaign",
    disciplines: ["Concept", "Campaign", "TV culture"],
    blurb:
      "A giant burger costume hides a Belgian icon on The Masked Singer — mystery and national pride as cult-status fuel.",
    image: "/work/masked-giant.webp",
    role: "Concept & creative direction",
    brief:
      "Quick wants to keep the Giant burger iconic and appeal to younger generations while strengthening its cult status.",
    insight:
      "The Masked Singer is one of Belgium’s most-watched TV shows, attracting over a million viewers — a perfect stage for Belgian icons.",
    idea:
      "Create a Giant-themed costume hiding Jean-Marie Pfaff. Cryptic clues across episodes turn every reveal into brand theatre.",
    impact:
      "Entertainment as advertising — TV suspense borrowed for burger cult status without a classic ad break.",
  },
  {
    slug: "missing-kidt",
    title: "The Missing Kid(t)",
    client: "Child Focus",
    year: "2025",
    label: "Social impact",
    disciplines: ["Social impact", "Idea", "Sports"],
    blurb:
      "Football jerseys carry missing children’s names — shirt numbers show how many days they’ve been gone.",
    image: "/work/missing-kidt.webp",
    role: "Concept",
    brief:
      "Child Focus aims to raise awareness about long-term missing children in Belgium and push people to share missing-person reports.",
    insight:
      "Every day children go missing, but society underestimates the scale. Football is where Belgium already pays attention.",
    idea:
      "Players wear jerseys with missing children’s first names. Shirt numbers show how many days each child has been missing.",
    impact:
      "Match day becomes a national reminder — attention that can travel from stadium to feed to tip.",
  },
  {
    slug: "naperol",
    title: "Naperol",
    client: "Aperol Spritz",
    year: "2025",
    label: "Activation / brand",
    disciplines: ["Activation", "Brand", "Festival"],
    blurb:
      "Festival days are long — so Aperol becomes the excuse for a stylish recharge. Meet Naperol.",
    image: "/work/naperol.webp",
    role: "Concept & activation idea",
    brief:
      "Make Aperol more visible at festivals by linking it to social experiences, music and bars.",
    insight:
      "Festival days are loooooong. People need a moment to recharge before the night hits.",
    idea:
      "The Naperol Spritz zone — a citrus-scented outdoor lounge with big orange cushions where visitors rest and refresh.",
    impact:
      "Brand presence people feel with their body, not only see on a screen — rest as the product demo.",
  },
  {
    slug: "aging-murals",
    title: "Aging Murals",
    client: "Child Focus",
    year: "2025",
    label: "OOH / concept",
    disciplines: ["OOH", "Concept", "Impact"],
    blurb:
      "Murals of missing children age each year — placed where they were last seen, so the search stays alive.",
    image: "/work/aging-murals.webp",
    role: "Concept",
    brief:
      "Long-term missing children fade from public awareness over time, making the search even harder.",
    insight:
      "People engage more when reminded in a personal, visible and emotional way — in the street, not only in a feed.",
    idea:
      "Evolving street murals across Belgium with age-progressed portraits, updated yearly so the kids grow with the city.",
    impact:
      "Public space as a living casefile — memory that refuses to stay frozen in time.",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const stats = [
  {
    label: "Services",
    value: "Creative concepts, digital marketing &\nUX / brand craft",
  },
  { label: "Role", value: "Digital Marketing Consultant @ DIDIOM" },
  { label: "Timezone", value: "ANT" },
  { label: "Availability", value: "Open for collaborations alongside DIDIOM" },
  { label: "Highlight", value: "3rd · YoungDogs Belgium" },
];

export const timeline = [
  {
    year: "Now",
    title: "Digital Marketing Consultant",
    place: "DIDIOM — Antwerp",
    detail:
      "In-house digital marketing support: strategy, channels and creative execution with clients on-site.",
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

export const disciplines = [
  { label: "Creative concepts", note: "Campaign thinking, insights, ideas that stick." },
  { label: "Digital marketing", note: "Performance, SEO, SEA, social — at DIDIOM." },
  { label: "UX / UI", note: "Research, flows, prototypes, interfaces that behave." },
  { label: "Brand & design", note: "Identity systems, web, interactive experiences." },
  { label: "Frontend craft", note: "Design it and ship a working slice." },
  { label: "AI in the workflow", note: "Faster from brief to concept to production." },
];
