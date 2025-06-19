export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
  researchGateUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Tridib Das",
  title: "B.Tech, Computer Science and Engineering Student",
  institution: "Vellore Institute of Technology, Amaravati",
  description:
    "Aspiring developer and researcher with a passion for AI, Web3, and building impactful solutions. Finalist at Technova Hackathon, IEEE-published author, and contributor to open source. Skilled in Python, Java, Solidity, TensorFlow, React, and more. Open to collaboration and new opportunities!",
  email: "tridibplaystore@gmail.com",
  imageUrl:
    "https://i.postimg.cc/3wVKtf8V/IMG-20250221-162030555-EDIT-magicstudio-vo9igzb6ysp.png",
  researchGateUrl: "https://www.researchgate.net/profile/Tridib-Das-5",
  githubUsername: "tridibcodes-ctrl",
  linkedinUsername: "tridib-das-a85104283",
  blogUrl: "https://",
  cvUrl: "https://",
  // altName: "",
  // secretDescription: "I like dogs.",
};
