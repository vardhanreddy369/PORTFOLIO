import { FaHeart, FaArrowUp } from "react-icons/fa";
import "../styles/components/_footer.scss";
import { NAV_LINKS, SOCIAL_LINKS } from "../data/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAnchorClick = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-socials">
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
