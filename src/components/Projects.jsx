import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/components/_projects.scss";

export default function Projects() {
  const projects = [
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section projects" id="projects">
      <h2>Featured Projects</h2>
      <div className="project-cards">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.title} 
            className="card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tech-stack">
              {project.tech.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> Code
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
