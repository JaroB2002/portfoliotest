export type Project = {
  slug: string;
  title: string;
  label: string;
  image: string;
  blurb: string;
  brief: string;
  insight: string;
  idea: string;
};

export const projects: Project[] = [
  {
    slug: "masked-giant",
    title: "The Masked Giant",
    label: "Concept / campaign",
    image: "/work/masked-giant.webp",
    blurb:
      "A giant burger costume hides a Belgian icon on The Masked Singer.",
    brief:
      "Quick wants to keep the Giant burger iconic for younger generations.",
    insight:
      "The Masked Singer pulls over a million Belgian viewers — perfect for icons.",
    idea:
      "Hide Jean-Marie Pfaff in a Giant costume. Clues turn every episode into brand theatre.",
  },
  {
    slug: "missing-kidt",
    title: "The Missing Kid(t)",
    label: "Social impact",
    image: "/work/missing-kidt.webp",
    blurb:
      "Football jerseys carry missing children’s names and days gone.",
    brief:
      "Child Focus needs awareness for long-term missing children in Belgium.",
    insight: "Football is where Belgium already pays attention.",
    idea:
      "Shirt numbers show how many days each child has been missing.",
  },
  {
    slug: "naperol",
    title: "Naperol",
    label: "Activation / brand",
    image: "/work/naperol.webp",
    blurb: "Festival days are long — Aperol becomes the stylish recharge.",
    brief: "Make Aperol more visible at festivals through social experiences.",
    insight: "People need a moment to recharge before the night hits.",
    idea:
      "Naperol Spritz zone — citrus lounge with orange cushions to rest and refresh.",
  },
  {
    slug: "aging-murals",
    title: "Aging Murals",
    label: "OOH / concept",
    image: "/work/aging-murals.webp",
    blurb:
      "Murals of missing children age each year where they were last seen.",
    brief: "Long-term missing children fade from public awareness.",
    insight: "People engage when reminded in the street, not only in a feed.",
    idea:
      "Age-progressed murals updated yearly so the kids grow with the city.",
  },
];

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
