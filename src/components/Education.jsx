import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward } from "react-icons/fa";
import "../styles/components/_education.scss";

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Central Florida (UCF)",
      location: "Orlando, Florida",
      period: "Expected Fall 2027",
      icon: <FaGraduationCap />,
      logo: "ucf",
      highlights: [
        "Focus on Software Engineering and AI/Machine Learning",
        "Advanced coursework in Data Structures and Algorithms",
        "Research in Deep Learning and Neural Networks",
        "Active participation in research projects"
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "KL University",
      location: "Vijayawada, India",
      period: "2020 - 2024",
      icon: <FaUniversity />,
      logo: "klu",
      highlights: [
        "Strong foundation in Programming and Software Development",
        "Specialized in Web Technologies and Full-Stack Development",
        "Multiple project-based learning experiences",
        "Leadership roles in technical clubs and hackathons"
      ]
    }
  ];

  const certifications = [
    "Full Stack Web Development",
    "Machine Learning Specialization",
    "React & Modern JavaScript",
    "Cloud Computing Fundamentals"
  ];

  return (
    <section className="section education" id="education">
      <h2>Education</h2>
      
      <div className="education-timeline">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            className="education-card"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-icon">{edu.icon}</div>
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
        ))}
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
          {certifications.map((cert, idx) => (
            <span key={idx} className="cert-tag">{cert}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
