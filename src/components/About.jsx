import { motion } from "framer-motion";
import "../styles/components/_about.scss";

export default function About() {
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
            My approach combines clean code practices, user-centered design, and the latest 
            web development trends to deliver exceptional digital experiences. I'm constantly 
            learning and exploring new technologies to stay at the forefront of web development.
          </p>
          <div className="highlights">
            <div className="highlight-item">
              <h3>🎨 Design-First</h3>
              <p>User experience is at the heart of everything I build</p>
            </div>
            <div className="highlight-item">
              <h3>⚡ Performance</h3>
              <p>Optimized, fast-loading applications are my standard</p>
            </div>
            <div className="highlight-item">
              <h3>🚀 Modern Stack</h3>
              <p>Leveraging cutting-edge technologies and best practices</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
