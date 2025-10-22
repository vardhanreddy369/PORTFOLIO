import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import "../styles/components/_education.scss";
import { EDUCATION } from "../data/content";

export default function Education() {
  return (
    <section className="section education" id="education">
      <h2>Education</h2>

      <div className="education-timeline">
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={edu.school}
            className="education-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            data-school={edu.school.toLowerCase().includes("kl") ? "klh" : "ucf"}
          >
            <div className="card-branding">
              <motion.div
                className="card-logo"
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + idx * 0.1, type: "spring", stiffness: 220, damping: 18 }}
                viewport={{ once: true }}
              >
                <img src={edu.logo} alt={`${edu.school} logo`} loading="lazy" />
              </motion.div>
              <motion.span
                className="card-glow"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.15, 0.45, 0.15] }}
                transition={{ repeat: Infinity, duration: 6, delay: idx * 0.6 }}
              />
            </div>
            <div className="card-content">
              <h3>{edu.degree}</h3>
              <div className="school-info">
                <h4>{edu.school}</h4>
                <p className="location">{edu.location}</p>
              </div>
              <div className="period">
                <FaCalendarAlt /> {edu.period}
              </div>
              <ul className="highlights">
                {edu.highlights.map(highlight => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
