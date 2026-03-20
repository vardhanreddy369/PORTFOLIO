import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/components/_skills.scss";
import { SKILL_CATEGORIES } from "../data/content";

const INTENSITY_LEVELS = [1, 2, 3, 4];

function getIntensity(skillIndex, totalSkills) {
  // Earlier skills in the list = higher proficiency = darker
  const ratio = 1 - skillIndex / totalSkills;
  if (ratio > 0.75) return 4;
  if (ratio > 0.5) return 3;
  if (ratio > 0.25) return 2;
  return 1;
}

export default function Skills() {
  const [tooltip, setTooltip] = useState({ visible: false, text: "", x: 0, y: 0 });

  const handleCellEnter = (e, skillName) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      text: skillName,
      x: rect.left + rect.width / 2,
      y: rect.top - 8
    });
  };

  const handleCellLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <section className="section skills" id="skills">
      <h2>Skills & Technologies</h2>
      <motion.div
        className="heatmap-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title} className="heatmap-row">
            <span className="heatmap-label">{category.title}</span>
            <div className="heatmap-cells">
              {category.skills.map((skill, i) => (
                <div
                  key={skill}
                  className={`heatmap-cell level-${getIntensity(i, category.skills.length)}`}
                  onMouseEnter={(e) => handleCellEnter(e, skill)}
                  onMouseLeave={handleCellLeave}
                />
              ))}
            </div>
          </div>
        ))}
        {tooltip.visible && (
          <div
            className="heatmap-tooltip"
            style={{
              left: tooltip.x,
              top: tooltip.y,
              transform: "translate(-50%, -100%)"
            }}
          >
            {tooltip.text}
          </div>
        )}
      </motion.div>
    </section>
  );
}
