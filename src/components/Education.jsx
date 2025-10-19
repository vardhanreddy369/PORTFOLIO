import { motion } from "framer-motion";
import { FaCalendarAlt, FaAward } from "react-icons/fa";
import "../styles/components/_education.scss";
import { EDUCATION, CERTIFICATIONS } from "../data/content";

export default function Education() {
  return (
    <section className="section education" id="education">
      <h2>Education</h2>

      <div className="education-timeline">
        {EDUCATION.map((edu, idx) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={idx}
              className="education-card"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card-icon">{Icon && <Icon />}</div>
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
                  {edu.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="certifications"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3><FaAward /> Certifications & Training</h3>
        <div className="cert-grid">
          {CERTIFICATIONS.map((cert, idx) => (
            <span key={idx} className="cert-tag">{cert}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
