import { FaEnvelope } from "react-icons/fa";
import "../styles/components/_contact.scss";
import { SOCIAL_LINKS, CONTACT_EMAIL } from "../data/content";

export default function Contact() {
  const socialProfiles = SOCIAL_LINKS.filter(link => link.label !== "Email");
  const emailLink = SOCIAL_LINKS.find(link => link.label === "Email");

  return (
    <section className="section contact" id="contact">
      <h2>Let's Connect</h2>
      <p className="contact-intro">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>

      <div className="contact-container">
        <div className="contact-main">
          <h3>Get in Touch</h3>
          <a
            href={emailLink?.href ?? `mailto:${CONTACT_EMAIL}`}
            className="contact-link email-link"
          >
            <FaEnvelope className="icon" />
            <div className="contact-info">
              <span className="label">Email me at</span>
              <span className="value">{CONTACT_EMAIL}</span>
            </div>
          </a>
        </div>

        <div className="social-links">
          <h4>Follow Me</h4>
          <div className="social-grid">
            {socialProfiles.map(({ label, handle, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-item"
              >
                <Icon className="social-icon" />
                <span className="social-text">
                  <span className="social-label">{label}</span>
                  <span className="social-handle">{handle}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="message-section">
        <h3>Send Me a Message</h3>
        <p>Drop me a message and I'll get back to you as soon as possible!</p>
        <form className="contact-form" action="mailto:srivardhanreddygutta.us@gmail.com" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-submit">
            <FaEnvelope />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
