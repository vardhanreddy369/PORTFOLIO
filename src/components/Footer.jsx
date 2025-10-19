import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa";
import "../styles/components/_footer.scss";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sri Vardhan Reddy Gutta</h3>
          <p>Software Engineer & Web Developer passionate about creating innovative solutions.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a href="https://github.com/vardhanreddy369" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sri-vardhan-reddy-gutta-09474522a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:srivardhanreddygutta.us@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sri Vardhan Reddy Gutta. All rights reserved.</p>
        <p className="made-with">
          Made with <FaHeart className="heart-icon" /> using React, Framer Motion & SCSS
        </p>
      </div>

      <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </button>
    </footer>
  );
}
