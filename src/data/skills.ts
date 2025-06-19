export type SkillCategory = {
  title: string;
  description?: string;
  skills: string[];
};

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "Java", "R", "Solidity"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Streamlit"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "AI/ML/GenAI",
    skills: [
      "TensorFlow",
      "scikit-learn",
      "HuggingFace",
      "LangChain",
      "OpenAI API",
      "Gemini",
      "Ollama",
      "spaCy",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Web3",
    skills: ["Solidity", "Hardhat", "MetaMask", "Ethers.js"],
  },
  {
    title: "Tools/DevOps",
    skills: ["Git", "Jupyter", "MATLAB", "LaTeX", "Figma", "VS Code", "Postman"],
  },
]; 