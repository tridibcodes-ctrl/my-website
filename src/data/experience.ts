export interface Achievement {
  date: string;
  title: string;
  company: string;
  description?: string;
}

export const achievementData: Achievement[] = [
  {
    date: "2025",
    title: "Finalist (Top 8)",
    company: "Technova Hackathon (HashChat)",
    description: "Developed a decentralized chat platform; reached Top 8 in national hackathon.",
  },
  {
    date: "2025",
    title: "Paper Presented & Published",
    company: "AutoDim at IEEE SETCOM 2025, Gandhinagar (IEEE Xplore)",
    description: "Presented and published research on intelligent headlight beam controller.",
  },
  {
    date: "2024",
    title: "Contributor (Season 4)",
    company: "Social Summer Of Code",
    description: "Contributed to open source projects as part of a national coding initiative.",
  },
];
