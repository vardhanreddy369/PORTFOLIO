import { motion } from "framer-motion";
import "../styles/components/_skills.scss";
import { SKILL_CATEGORIES } from "../data/content";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section skills" id="skills">
      <h2>Skills & Technologies</h2>
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div key={idx} className="skill-category" variants={itemVariants}>
            <h3>{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map(skill => (
                <span key={skill} className="skill">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
