import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/components/_projects.scss";
import { PROJECTS } from "../data/content";

export default function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const profileImage =
    "https://avatars.githubusercontent.com/u/91843112?s=400&u=7fedcf458ed7684bf5c1578f41ad8fd79721062a&v=4";

  return (
    <section className="section projects" id="projects">
      <div className="project-shell">
        <header className="project-header">
          <h2>Featured Projects</h2>
        </header>
        <aside className="profile-badge" aria-hidden="true">
          <div className="profile-ring">
            <img src={profileImage} alt="GitHub profile" />
          </div>
          <span className="profile-label">vardhanreddy369</span>
        </aside>
        <div className="project-carousel" aria-label="Project showcase">
          <div className="project-track">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                className="card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="tech-stack">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
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
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
