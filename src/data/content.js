import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const RESUME_PATH = "/assets/Vardhan_Resume.pdf";

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
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
    href: "https://www.linkedin.com/in/sri-vardhan-reddy-gutta-09474522a/",
    Icon: FaLinkedin
  },
  {
    label: "Email",
    handle: "srivardhanreddygutta.us@gmail.com",
    href: "mailto:srivardhanreddygutta.us@gmail.com",
    Icon: FaEnvelope
  }
];

export const HERO_CONTENT = {
  name: "Sri Vardhan Reddy Gutta",
  title: "Software Engineer & Web Developer",
  subtitle: "Crafting beautiful, performant web experiences with modern technologies"
};

export const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "Framer Motion"
    ]
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "RESTful APIs",
      "Socket.io"
    ]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "NLP",
      "Computer Vision",
      "LLMs",
      "Generative AI"
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Postman",
      "Docker",
      "AWS",
      "Vercel"
    ]
  },
  {
    title: "Programming",
    skills: ["Python", "Java", "C++", "SQL", "Data Structures", "Algorithms"]
  }
];

export const PROJECTS = [
  {
    title: "Codeflix",
    desc: "A full-stack streaming platform built with React and Node.js featuring user authentication, video streaming, and a unique random content discovery feature.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com/vardhanreddy369",
    live: "#"
  },
  {
    title: "ConvoSphere",
    desc: "Real-time chat application with Socket.io enabling instant messaging, group chats, online status indicators, and message history stored in MongoDB.",
    tech: ["Socket.io", "React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/vardhanreddy369",
    live: "#"
  },
  {
    title: "Portfolio Website",
    desc: "A modern, animated portfolio showcasing my work with glassmorphism design, smooth Framer Motion animations, and fully responsive layout.",
    tech: ["React", "Framer Motion", "SCSS", "JavaScript"],
    github: "https://github.com/vardhanreddy369",
    live: "#"
  },
  {
    title: "Task Manager Pro",
    desc: "Productivity app with drag-and-drop functionality, task categorization, deadline tracking, and progress analytics for efficient project management.",
    tech: ["React", "TypeScript", "Firebase", "Material-UI"],
    github: "https://github.com/vardhanreddy369",
    live: "#"
  },
  {
    title: "Weather Dashboard",
    desc: "Interactive weather application with real-time data, 7-day forecasts, location search, and beautiful visualizations using Chart.js.",
    tech: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    github: "https://github.com/vardhanreddy369",
    live: "#"
  },
  {
    title: "E-Commerce Store",
    desc: "Full-featured online store with product catalog, shopping cart, checkout system, payment integration, and admin dashboard for inventory management.",
    tech: ["React", "Node.js", "Stripe", "PostgreSQL", "Redux"],
    github: "https://github.com/vardhanreddy369",
    live: "#"
  }
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Central Florida (UCF)",
    location: "Orlando, Florida",
    period: "Expected Fall 2027",
    logo: "/assets/UCF_Logo.png",
    highlights: [
      "Focus on Software Engineering and AI/Machine Learning",
      "Advanced coursework in Data Structures and Algorithms",
      "Research in Deep Learning and Neural Networks",
      "Active participation in research projects"
    ]
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "KL University",
    location: "Vijayawada, India",
    period: "2020 - 2024",
    logo: "/assets/klu-logo.png",
    highlights: [
      "Strong foundation in Programming and Software Development",
      "Specialized in Web Technologies and Full-Stack Development",
      "Multiple project-based learning experiences",
      "Leadership roles in technical clubs and hackathons"
    ]
  }
];

export const CERTIFICATIONS = [
  "Full Stack Web Development",
  "Machine Learning Specialization",
  "React & Modern JavaScript",
  "Cloud Computing Fundamentals"
];

export const CONTACT_EMAIL = "srivardhanreddygutta.us@gmail.com";
