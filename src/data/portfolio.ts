export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Fake News Detection Web App",
    description: "Real-time fake news detection using Flask, TensorFlow, and Google Gemini API. Achieved 99.8% training, 99.5% validation, and 100% test accuracy. Integrated AI-driven contextual analysis and fact-checking.",
    technologies: ["Flask", "TensorFlow", "Bootstrap", "Google Gemini API"],
    codeUrl: "https://github.com/tridibcodes-ctrl/fake-news-detection",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwBrzhVkLvindwXoZ9cQUvetXqfcB2oxBFQ&s",
  },
  {
    title: "HashChat – Decentralized Chat Platform",
    description: "Ethereum-based decentralized chat app with end-to-end encryption, 10,000+ on-chain messages, and 75% gas optimization. Top 8 Finalist at Technova Hackathon 2025.",
    technologies: ["Solidity", "React", "Next.js", "Hardhat", "Ethers.js", "MetaMask"],
    codeUrl: "https://github.com/tridibcodes-ctrl/hashchat",
    imageUrl: "https://bitflyer.com/a/7d051c8574d3e7ea5df6de7b54821c75.png",
  },
  {
    title: "NyayAI – AI-Powered Legal Assistant",
    description: "Chatbot trained on Indian law documents using RAG, FAISS, and sentence-transformers. Modular pipeline for PDF embedding, prompt engineering, and Streamlit UI.",
    technologies: ["Python", "LangChain", "Streamlit", "Hugging Face", "FAISS"],
    codeUrl: "https://github.com/tridibcodes-ctrl/nyayai",
    imageUrl: "https://www.bennett.edu.in/wp-content/uploads/2024/07/The-Indian-Legal-System-Needs-Revamp.-An-Analysis.jpg",
  },
];
