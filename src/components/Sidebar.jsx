import "../styles/components/_sidebar.scss";
import { NAV_LINKS, SOCIAL_LINKS, RESUME_PATH } from "../data/content";

export default function Sidebar() {
  const scrollToSection = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAnchorClick = (event, id) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__logo">SVR</div>
        <p className="sidebar__role">Web Developer</p>
      </div>
      <nav className="sidebar__nav">
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
      </nav>
      <div className="sidebar__footer">
        <div className="sidebar__socials">
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
        <a href={RESUME_PATH} className="sidebar__resume" download>
          Download Resume
        </a>
      </div>
    </aside>
  );
}
