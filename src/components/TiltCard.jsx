import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({ children, className = "", tiltMax = 15, scaleAmount = 1.05 }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [tiltMax, -tiltMax]);
  const rotateY = useTransform(x, [-100, 100], [-tiltMax, tiltMax]);
  const glareX = useTransform(x, [-100, 100], [0, 100]);
  const glareY = useTransform(y, [-100, 100], [0, 100]);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springScale = useSpring(isHovered ? scaleAmount : 1, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: "preserve-3d",
        rotateX: springRotateX,
        rotateY: springRotateY,
        scale: springScale,
      }}
    >
      {/* Glare effect */}
      {isHovered && (
        <div
          className="tilt-glare"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%)`,
            pointerEvents: "none",
            borderRadius: "inherit",
            zIndex: 10,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
