import { motion } from "framer-motion";
import { FaDatabase, FaBrain, FaLayerGroup } from "react-icons/fa";
import "../styles/components/_about.scss";

export default function About() {
  const HIGHLIGHTS = [
    {
      icon: FaLayerGroup,
      title: "Full-Stack",
      description: "Backend, frontend, APIs, billing, auth — I build the entire product, not just one layer.",
      variant: "design"
    },
    {
      icon: FaBrain,
      title: "AI/ML",
      description: "LLMs, XGBoost, LSTM, RAG pipelines — ML that ships to production, not just notebooks.",
      variant: "ai"
    },
    {
      icon: FaDatabase,
      title: "Data Systems",
      description: "Async pipelines processing 1M+ records. SEC EDGAR scraping, enrichment, and real-time search.",
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
            I'm the kind of engineer who can't just use a tool — <span className="highlight">I have to build one</span>.
          </p>
          <p>
            I sit at the intersection of <strong>AI/ML and full-stack engineering</strong>. I can train
            an XGBoost model in the morning, build the FastAPI endpoint to serve it in the afternoon,
            and push the React frontend that displays it by evening. Most people specialize in one
            lane — I connect all three.
          </p>
          <p>
            My biggest project, <strong>SubTrack</strong>, processes 1.19M+ corporate subsidiary records
            across 22K+ public companies. I built the entire thing from scratch: async data pipeline,
            AI enrichment engine, 3D network visualizations, real-time streaming search, Stripe billing.
            The classification system hits 94% accuracy.
          </p>
          <p>
            Currently finishing my MS in Computer Science at UCF, working on a research paper
            targeting ICAIF 2026, and looking for a team that ships fast and thinks big.
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
