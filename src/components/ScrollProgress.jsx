import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "var(--accent)",
        transformOrigin: "0%",
        zIndex: 9999,
        boxShadow: "0 0 8px var(--accent), 0 0 20px var(--accent-soft)"
      }}
    />
  );
}
