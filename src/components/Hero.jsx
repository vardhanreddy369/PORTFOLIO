import { motion } from "framer-motion";
import "../styles/components/_hero.scss";
import { HERO_CONTENT, RESUME_PATH, SOCIAL_LINKS } from "../data/content";

export default function Hero() {
  const scrollToSection = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = (event, id) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <motion.figure
          className="hero-photo"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="hero-photo__frame">
            <img
              src="/assets/Profie2.png"
              alt="Sri Vardhan Reddy Gutta portrait"
              loading="lazy"
            />
          </div>
        </motion.figure>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="hero-kicker"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {HERO_CONTENT.title}
          </motion.span>
          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Hi, I'm{" "}
            <span className="hero-heading__name">{HERO_CONTENT.name}</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {HERO_CONTENT.subtitle}
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={event => handleScroll(event, "projects")}
            >
              View My Work
            </a>
            <a href={RESUME_PATH} className="btn btn-download" download>
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={event => handleScroll(event, "contact")}
            >
              Get In Touch
            </a>
          </motion.div>
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
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
      </div>
    </section>
  );
}
