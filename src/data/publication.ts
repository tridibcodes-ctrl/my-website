export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2025",
    conference: "1st IEEE SETCOM Conference, Gandhinagar",
    title: "AutoDim – Intelligent Headlight Beam Controller",
    authors: "Tridib Das",
    paperUrl: "https://ieeexplore.ieee.org/document/12345678",
    tldr: "ML-driven glare detection system for automatic headlight dimming. Deployed lightweight CNN on Raspberry Pi Zero W; 95% accuracy, 0.3s response time. Designed for smart city/V2V expansion.",
    award: "Published in IEEE Xplore",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7SxHoj7GDO17w_dTX0NjXeKLyKu77yIQUQ&s",
  },
];
