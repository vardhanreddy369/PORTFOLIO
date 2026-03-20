import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/components/_projects.scss";
import { PROJECTS } from "../data/content";
import TiltCard from "./TiltCard";

export default function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section projects" id="projects">
      <h2>Featured Projects</h2>
      <div className="bento-grid">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`bento-card${idx === 0 ? " bento-card--hero" : ""}`}
          >
            <TiltCard className="bento-card-inner" tiltMax={12} scaleAmount={1.01}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="tech-tags">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span className="live-dot" />
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
