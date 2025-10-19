import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/components/_projects.scss";
import { PROJECTS } from "../data/content";

export default function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section projects" id="projects">
      <h2>Featured Projects</h2>
      <div className="project-cards">
        {PROJECTS.map((project, idx) => (
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
