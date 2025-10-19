import { motion } from "framer-motion";
import "../styles/components/_hero.scss";
import {
  HERO_CONTENT,
  NAV_LINKS,
  SOCIAL_LINKS,
  RESUME_PATH
} from "../data/content";

export default function Hero() {
  const scrollToSection = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAnchorClick = (event, id) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-text">SVR</span>
          </div>
          <ul className="nav-links">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={event => handleAnchorClick(event, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="resume-right">
            <a href={RESUME_PATH} className="btn btn-resume-nav" download>
              Download Resume
            </a>
          </div>
        </div>
      </nav>
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="greeting"
          >
            <span className="greeting-text">
              <span className="bracket">&lt;</span>
              <span className="hello">Hello</span>
              <span className="bracket">/&gt;</span>
            </span>
            <span className="im">I'm</span>
          </motion.div>
          <h1 className="hero-name">
            <span className="name">{HERO_CONTENT.name}</span>
          </h1>
          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="highlight">{HERO_CONTENT.title}</span>
          </motion.p>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {HERO_CONTENT.subtitle}
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={event => handleAnchorClick(event, "projects")}
            >
              View My Work
            </a>
            <a href={RESUME_PATH} className="btn btn-download" download>
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={event => handleAnchorClick(event, "contact")}
            >
              Get In Touch
            </a>
          </motion.div>
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
