import { useState, useEffect, useRef } from "react";
import { NAV_LINKS, RESUME_PATH } from "../data/content";
import "../styles/components/_navbar.scss";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Show/hide navbar on scroll
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      if (y <= 0 || y < lastScrollY.current - 8) {
        setIsVisible(true);
      } else if (y > lastScrollY.current + 8) {
        setIsVisible(false);
        setMenuOpen(false);
      }
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isVisible ? "navbar--visible" : "navbar--hidden"}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <button
          className="navbar-logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
          aria-label="Scroll to top"
        >
          SV
        </button>

        {/* Center nav links — desktop */}
        <ul className="navbar-links">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                className={`nav-link ${activeSection === id ? "nav-link--active" : ""}`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume — desktop */}
        <a href={RESUME_PATH} download className="navbar-resume">
          Resume
        </a>

        {/* Hamburger — mobile */}
        <button
          className={`navbar-hamburger ${menuOpen ? "navbar-hamburger--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile overlay */}
      <div className={`navbar-mobile ${menuOpen ? "navbar-mobile--open" : ""}`}>
        <ul className="navbar-mobile__links">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                className={`nav-link ${activeSection === id ? "nav-link--active" : ""}`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <a href={RESUME_PATH} download className="navbar-resume navbar-resume--mobile">
          Resume
        </a>
      </div>
    </nav>
  );
}
