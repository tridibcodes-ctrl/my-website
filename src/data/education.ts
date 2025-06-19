export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "Aug 2023 – Present",
    institution: "Vellore Institute of Technology, Amaravati",
    degree: "B.Tech, Computer Science and Engineering – CGPA: 8.92",
  },
  {
    year: "May 2023",
    institution: "Delhi Public School, Jorhat",
    degree: "CBSE (Science) – 88%",
  },
  {
    year: "July 2021",
    institution: "Don Bosco High School, Jorhat",
    degree: "Assam Board – 94.8%",
  },
];
