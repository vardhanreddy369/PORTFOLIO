import { useState, useEffect, useRef } from "react";
import { RESUME_PATH } from "../data/content";
import "../styles/components/_navbar.scss";

export default function Navbar() {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" }
  ];

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAtTop = currentScrollY <= 0;
      const scrolledDown = currentScrollY > lastScrollY.current + 12;
      const scrolledUp = currentScrollY < lastScrollY.current - 12;

      if (isAtTop || scrolledUp) {
        setIsVisible(true);
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
          scrollTimeout.current = null;
        }
      } else if (scrolledDown) {
        setIsVisible(false);
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        scrollTimeout.current = setTimeout(() => {
          setIsVisible(true);
          scrollTimeout.current = null;
        }, 180);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = null;
      }
    };
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navbarClassName = `navbar ${isVisible ? "navbar--visible" : "navbar--hidden"}`;

  return (
    <nav className={navbarClassName}>
      <div className="navbar-container">
        {/* Logo */}
        <div
          className="navbar-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          SV
        </div>

        {/* Nav Links */}
        <div className="navbar-links">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleScroll(id)}
              className="nav-link"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Resume Button */}
        <a href={RESUME_PATH} download className="navbar-resume">
          Resume
        </a>
      </div>
    </nav>
  );
}
