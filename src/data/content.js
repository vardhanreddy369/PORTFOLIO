import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ASSET_BASE = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "";

export const RESUME_PATH = `${ASSET_BASE}/assets/Gutta_SriVardhanReddy.pdf`;
export const HERO_PHOTO = `${ASSET_BASE}/assets/Profie2.png`;

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" }
];

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    handle: "@vardhanreddy369",
    href: "https://github.com/vardhanreddy369",
    Icon: FaGithub
  },
  {
    label: "LinkedIn",
    handle: "Sri Vardhan Reddy Gutta",
    href: "https://www.linkedin.com/in/sri-vardhan-reddy-gutta/",
    Icon: FaLinkedin
  },
  {
    label: "Email",
    handle: "vardhanreddy2003@gmail.com",
    href: "mailto:vardhanreddy2003@gmail.com",
    Icon: FaEnvelope
  }
];

export const HERO_CONTENT = {
  name: "Sri Vardhan Reddy Gutta",
  title: "AI Systems Engineer",
  subtitle: "I build full-stack AI products from scratch — every project has a live demo"
};

export const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C++"]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "PyTorch",
      "XGBoost",
      "LSTM",
      "FinBERT",
      "RAG Pipelines",
      "LLMs",
      "Google Gemini",
      "scikit-learn"
    ]
  },
  {
    title: "Backend & Data",
    skills: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "SQLite",
      "MongoDB",
      "SEC EDGAR API",
      "REST APIs",
      "Async Pipelines"
    ]
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Chart.js",
      "Streamlit",
      "SCSS",
      "Framer Motion"
    ]
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "Git", "Linux", "GCP", "Vercel", "Stripe", "GitHub Actions"]
  }
];

export const PROJECTS = [
  {
    title: "SubTrack",
    desc: "AI platform mapping 1.19M+ corporate subsidiaries across 22K+ public companies using SEC filings. Three-tier AI enrichment pipeline with 94% classification accuracy. Full SaaS: auth, billing, real-time search, 3D visualizations.",
    tech: ["FastAPI", "Google Gemini", "SQLite", "JavaScript", "SSE", "Stripe"],
    github: "https://github.com/vardhanreddy369/subsidiary-tracker",
    live: "https://subsidiary-tracker.onrender.com"
  },
  {
    title: "ResuMorph",
    desc: "Open-source resume tailoring engine that runs entirely in the browser. Smart keyword matching with 150+ skills, ATS compatibility scoring, weak verb replacement. Zero data collection — your resume never leaves your machine.",
    tech: ["TypeScript", "Next.js", "Vercel"],
    github: "https://github.com/vardhanreddy369/resumorph",
    live: "https://resumorph.vercel.app"
  },
  {
    title: "StockVision AI",
    desc: "Stock analysis platform using LSTM neural networks for price prediction, gradient boosting for directional signals, backtesting engine with buy-and-hold comparison, and portfolio analytics. 46/46 tests passing.",
    tech: ["Python", "PyTorch", "Streamlit", "scikit-learn"],
    github: "https://github.com/vardhanreddy369/stockvision-ai",
    live: "https://stockvision-ai-hglrftaeu7t3wxxis5hyjs.streamlit.app"
  },
  {
    title: "AI Code Review Assistant",
    desc: "Intelligent code review system powered by fine-tuned LLMs. Real-time PR analysis via webhooks for GitHub, GitLab, and Bitbucket. Team dashboard with metrics visualization and security vulnerability detection.",
    tech: ["FastAPI", "PyTorch", "React", "TypeScript", "Docker"],
    github: "https://github.com/vardhanreddy369/AI-code-review-assistant",
    live: null
  }
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Central Florida (UCF)",
    location: "Orlando, Florida",
    period: "Expected Fall 2027",
    logo: `${ASSET_BASE}/assets/UCF_Logo.png`,
    highlights: [
      "Graduate Research Assistant — building SubTrack under Professors Pirinsky, Gatchev, and Ndum",
      "Research paper targeting ICAIF 2026 (XGBoost + FinBERT classifier)",
      "Focus on AI/ML systems, data engineering, and production software",
      "Processing 1.19M+ SEC filing records as part of research"
    ]
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "KL University",
    location: "Vijayawada, India",
    period: "2021 - 2025",
    logo: `${ASSET_BASE}/assets/klu-logo.png`,
    highlights: [
      "GPA: 9.3/10",
      "Strong foundation in DSA, system design, and full-stack development",
      "Built SpendWise financial wellness platform (team project)",
      "10 certifications including Azure AI Fundamentals and Advanced Automation"
    ]
  }
];

export const CONTACT_EMAIL = "vardhanreddy2003@gmail.com";
