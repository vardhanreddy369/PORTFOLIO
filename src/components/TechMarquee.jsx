import React from "react";
import "../styles/components/_marquee.scss";

const ROW_1 = ["Python", "FastAPI", "React", "PyTorch", "XGBoost", "TypeScript", "Next.js", "Docker"];
const ROW_2 = ["Google Gemini", "SEC EDGAR", "SQLite", "Streamlit", "LLMs", "RAG", "Stripe", "MongoDB"];

function MarqueeRow({ items, reverse }) {
  // Duplicate items so the loop is seamless
  const doubled = [...items, ...items];
  return (
    <div className={`marquee-track${reverse ? " marquee-track--reverse" : ""}`}>
      {doubled.map((item, i) => (
        <span className="marquee-item" key={i}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="marquee-section">
      <MarqueeRow items={ROW_1} />
      <MarqueeRow items={ROW_2} reverse />
    </section>
  );
}
