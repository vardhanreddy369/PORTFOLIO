import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/components/_hero.scss";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-text">SVR</span>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="resume-right">
            <a href="/assets/Vardhan_Resume.pdf" className="btn btn-resume-nav" download>Download Resume</a>
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
          <h1 style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="name">Sri Vardhan Reddy Gutta</span>
          </h1>
          <motion.p 
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="highlight">Software Engineer</span> & <span className="highlight">Web Developer</span>
          </motion.p>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Crafting beautiful, performant web experiences with modern technologies
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
              View My Work
            </a>
            <a href="/assets/Vardhan_Resume.pdf" className="btn btn-download" download>Download Resume</a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Get In Touch
            </a>
          </motion.div>
          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <a href="https://github.com/vardhanreddy369" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sri-vardhan-reddy-gutta-09474522a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:srivardhanreddygutta.us@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
