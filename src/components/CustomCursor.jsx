import React, { useEffect, useRef, useCallback } from "react";
import "../styles/components/_cursor.scss";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);
  const hoverState = useRef("default"); // "default" | "link" | "text"

  const lerp = (a, b, n) => a + (b - a) * n;

  const animate = useCallback(() => {
    // Smooth ring follow with lerp
    ring.current.x = lerp(ring.current.x, mouse.current.x, 0.15);
    ring.current.y = lerp(ring.current.y, mouse.current.y, 0.15);

    const dot = dotRef.current;
    const r = ringRef.current;
    if (dot && r) {
      // Dot follows mouse precisely
      dot.style.transform = `translate(${mouse.current.x - 4}px, ${mouse.current.y - 4}px)`;
      // Ring follows with delay
      r.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px)`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Check for coarse pointer (mobile)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseOver = (e) => {
      const target = e.target;
      const isLink =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hover-target");

      const isText =
        !isLink &&
        (target.tagName === "P" ||
          target.tagName === "SPAN" ||
          target.tagName === "H1" ||
          target.tagName === "H2" ||
          target.tagName === "H3" ||
          target.tagName === "H4" ||
          target.tagName === "LI" ||
          target.tagName === "LABEL");

      if (isLink) {
        hoverState.current = "link";
        ringRef.current?.classList.add("cursor-ring--link");
        ringRef.current?.classList.remove("cursor-ring--text");
        dotRef.current?.classList.add("cursor-dot--hidden");
      } else if (isText) {
        hoverState.current = "text";
        ringRef.current?.classList.add("cursor-ring--text");
        ringRef.current?.classList.remove("cursor-ring--link");
        dotRef.current?.classList.remove("cursor-dot--hidden");
      } else {
        hoverState.current = "default";
        ringRef.current?.classList.remove("cursor-ring--link", "cursor-ring--text");
        dotRef.current?.classList.remove("cursor-dot--hidden");
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
