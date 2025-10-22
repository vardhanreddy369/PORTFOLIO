import { motion } from "framer-motion";
import { FaPaintBrush, FaBolt, FaRocket } from "react-icons/fa";
import "../styles/components/_about.scss";

export default function About() {
  const HIGHLIGHTS = [
    {
      icon: FaPaintBrush,
      title: "Design-First",
      description: "Crafting interfaces that feel intuitive, delightful, and unmistakably polished.",
      variant: "design"
    },
    {
      icon: FaBolt,
      title: "AI-Driven",
      description: "Rapid prototypes with generative AI, intelligent automation, and data storytelling.",
      variant: "ai"
    },
    {
      icon: FaRocket,
      title: "Modern Stack",
      description: "Lean on cutting-edge tooling and best practices to build for the future.",
      variant: "modern"
    }
  ];

  return (
    <section className="section about" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <div className="about-content">
          <p className="intro">
            I'm a passionate <span className="highlight">Software Engineer</span> 
            specializing in creating beautiful, performant web applications that users love.
          </p>
          <p>
            With expertise in modern web technologies like <strong>React, Node.js, and MongoDB</strong>, 
            I blend technical proficiency with design thinking to build products that are both 
            visually stunning and functionally robust.
          </p>
          <p>
            On the AI front, I'm actively exploring <strong>LLMs, computer vision, and generative AI</strong> to 
            ship assistants that accelerate workflows. Whether it's tuning prompts, wiring up vector search, 
            or deploying real-time inference pipelines, I love turning fuzzy ideas into useful agents.
          </p>
          <p>
            Beyond the code editor you'll find me mentoring peers, co-organizing hackathons, and writing 
            deep-dive breakdowns on my build process. I thrive in collaborative teams, love obsessing over 
            details that matter, and stay relentlessly curious about what's next in tech.
          </p>
          <div className="highlights">
            {HIGHLIGHTS.map(({ icon: Icon, title, description, variant }) => (
              <motion.div
                key={title}
                className="highlight-item"
                data-variant={variant}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
              >
                <span className="highlight-icon" aria-hidden="true">
                  <Icon />
                </span>
                <div className="highlight-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <span className="highlight-orbit" aria-hidden="true" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
