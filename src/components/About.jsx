import { motion } from "framer-motion";
import { FaDatabase, FaBrain, FaLayerGroup } from "react-icons/fa";
import "../styles/components/_about.scss";

const METRICS = [
  { value: "1.19M+", label: "Records Processed" },
  { value: "94%", label: "Classification Accuracy" },
  { value: "4 Live Demos", label: "Production Projects" }
];

const HIGHLIGHTS = [
  {
    icon: FaLayerGroup,
    title: "Full-Stack",
    description:
      "Backend, frontend, APIs, billing, auth — I build the entire product, not just one layer.",
    variant: "design"
  },
  {
    icon: FaBrain,
    title: "AI/ML",
    description:
      "LLMs, XGBoost, LSTM, RAG pipelines — ML that ships to production, not just notebooks.",
    variant: "ai"
  },
  {
    icon: FaDatabase,
    title: "Data Systems",
    description:
      "Async pipelines processing 1M+ records. SEC EDGAR scraping, enrichment, and real-time search.",
    variant: "modern"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" }
  })
};

export default function About() {
  return (
    <section className="section section--warm about" id="about">
      <motion.div
        className="about-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="about-section-title">About Me</h2>

        <div className="about-content">
          {/* Left column – quote + paragraphs */}
          <div className="about-text">
            <motion.blockquote className="about-quote" variants={fadeUp}>
              "I'm the kind of engineer who can't just use a tool —{" "}
              <span className="highlight">I have to build one</span>."
            </motion.blockquote>

            <motion.p variants={fadeUp} custom={1}>
              I sit at the intersection of{" "}
              <strong>AI/ML and full-stack engineering</strong>. I can train an
              XGBoost model in the morning, build the FastAPI endpoint to serve
              it in the afternoon, and push the React frontend that displays it
              by evening. Most people specialize in one lane — I connect all
              three.
            </motion.p>

            <motion.p variants={fadeUp} custom={2}>
              My biggest project, <strong>SubTrack</strong>, processes 1.19M+
              corporate subsidiary records across 22K+ public companies. I built
              the entire thing from scratch: async data pipeline, AI enrichment
              engine, 3D network visualizations, real-time streaming search,
              Stripe billing. The classification system hits 94% accuracy.
            </motion.p>

            <motion.p variants={fadeUp} custom={3}>
              Currently finishing my MS in Computer Science at UCF, working on a
              research paper targeting ICAIF 2026, and looking for a team that
              ships fast and thinks big.
            </motion.p>
          </div>

          {/* Right column – metric cards */}
          <div className="about-metrics">
            {METRICS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                className="metric-card"
                variants={fadeUp}
                custom={i}
              >
                <span className="metric-value">{value}</span>
                <span className="metric-label">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom row – highlight cards */}
        <div className="highlights">
          {HIGHLIGHTS.map(({ icon: Icon, title, description, variant }, i) => (
            <motion.div
              key={title}
              className="highlight-item"
              data-variant={variant}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
            >
              <span className="highlight-icon" aria-hidden="true">
                <Icon />
              </span>
              <div className="highlight-copy">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
