import { motion } from "framer-motion";
import "../styles/components/_contact.scss";
import { SOCIAL_LINKS, CONTACT_EMAIL } from "../data/content";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Let's build something.</h2>
        <p className="contact-subtitle">
          If you're solving hard problems, I want in.
        </p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email">
          {CONTACT_EMAIL}
        </a>
        <div className="contact-socials">
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
      </motion.div>
    </section>
  );
}
