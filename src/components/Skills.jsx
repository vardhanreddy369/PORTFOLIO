import { motion } from "framer-motion";
import "../styles/components/_skills.scss";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs", "Socket.io"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "LLMs", "Generative AI"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Docker", "AWS", "Vercel"]
    },
    {
      title: "Programming",
      skills: ["Python", "Java", "C++", "SQL", "Data Structures", "Algorithms"]
    }
  ];

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
        {skillCategories.map((category, idx) => (
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
