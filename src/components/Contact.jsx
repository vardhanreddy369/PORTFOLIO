import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/components/_contact.scss";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2>Let's Connect</h2>
      <p className="contact-intro">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>
      
      <div className="contact-container">
        <div className="contact-main">
          <h3>Get in Touch</h3>
          <a href="mailto:srivardhanreddygutta.us@gmail.com" className="contact-link email-link">
            <FaEnvelope className="icon" />
            <div className="contact-info">
              <span className="label">Email me at</span>
              <span className="value">srivardhanreddygutta.us@gmail.com</span>
            </div>
          </a>
        </div>

        <div className="social-links">
          <h4>Follow Me</h4>
          <div className="social-grid">
            <a href="https://github.com/vardhanreddy369" target="_blank" rel="noopener noreferrer" className="social-item">
              <FaGithub className="social-icon" />
              <span className="social-text">
                <span className="social-label">GitHub</span>
                <span className="social-handle">@vardhanreddy369</span>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/sri-vardhan-reddy-gutta-09474522a/" target="_blank" rel="noopener noreferrer" className="social-item">
              <FaLinkedin className="social-icon" />
              <span className="social-text">
                <span className="social-label">LinkedIn</span>
                <span className="social-handle">Sri Vardhan Reddy Gutta</span>
              </span>
            </a>
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
