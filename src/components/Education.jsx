import { motion } from "framer-motion";
import "../styles/components/_education.scss";
import { EDUCATION } from "../data/content";

export default function Education() {
  return (
    <section className="section education" id="education">
      <h2>Education</h2>

      <div className="education-timeline">
        <div className="timeline-line" />

        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={edu.school}
            className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot" />

            <div className="education-card">
              <div className="card-header">
                <img
                  className="card-logo"
                  src={edu.logo}
                  alt={`${edu.school} logo`}
                  loading="lazy"
                />
                <div>
                  <h3 className="degree">{edu.degree}</h3>
                  <p className="school">{edu.school}</p>
                </div>
              </div>

              <div className="card-meta">
                <span className="location">{edu.location}</span>
                <span className="separator">·</span>
                <span className="period">{edu.period}</span>
              </div>

              <ul className="highlights">
                {edu.highlights.map((highlight) => (
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
