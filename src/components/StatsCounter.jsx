import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/components/_stats.scss";

const STATS = [
  { value: 1190000, suffix: "+", label: "Records Processed", format: "1.19M" },
  { value: 94, suffix: "%", label: "Classification Accuracy", format: null },
  { value: 22000, suffix: "+", label: "Companies Analyzed", format: "22K" },
  { value: 4, suffix: "", label: "Live Demos Shipped", format: null }
];

function AnimatedNumber({ value, suffix, format, inView }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * value));

      if (current >= steps) {
        setCount(value);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  const displayValue = format
    ? (count >= value ? format : formatNumber(count, value, format))
    : count;

  return (
    <span className="stats-number">
      {displayValue}{suffix}
    </span>
  );
}

function formatNumber(current, target, format) {
  if (format === "1.19M") {
    const m = current / 1000000;
    return m.toFixed(2) + "M";
  }
  if (format === "22K") {
    const k = current / 1000;
    return Math.floor(k) + "K";
  }
  return current;
}

export default function StatsCounter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-grid">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="stats-item"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <AnimatedNumber
              value={stat.value}
              suffix={stat.suffix}
              format={stat.format}
              inView={inView}
            />
            <span className="stats-label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
