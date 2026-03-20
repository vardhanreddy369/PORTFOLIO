import { useEffect, useRef } from "react";

// Nodes positioned at bottom of hero section so they don't clash with text
const NODES = [
  { x: 0.05, y: 0.82, label: "Data", r: 22 },
  { x: 0.25, y: 0.88, label: "Pipeline", r: 22 },
  { x: 0.50, y: 0.78, label: "ML Model", r: 26 },
  { x: 0.75, y: 0.88, label: "API", r: 22 },
  { x: 0.95, y: 0.82, label: "UI", r: 22 }
];

const ACCENT = [193, 95, 60];

export default function AIPipeline() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let w, h;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    function getNodePos(node) {
      return { x: node.x * w, y: node.y * h };
    }

    function spawnParticle() {
      const edgeIdx = Math.floor(Math.random() * (NODES.length - 1));
      return {
        edge: edgeIdx,
        t: 0,
        speed: 0.002 + Math.random() * 0.003,
        size: 2 + Math.random() * 2.5,
        opacity: 0.5 + Math.random() * 0.5
      };
    }

    particlesRef.current = Array.from({ length: 50 }, () => {
      const p = spawnParticle();
      p.t = Math.random();
      return p;
    });

    function draw() {
      frameRef.current++;
      ctx.clearRect(0, 0, w, h);
      const time = frameRef.current * 0.015;

      // Draw connecting lines with dashes
      for (let i = 0; i < NODES.length - 1; i++) {
        const a = getNodePos(NODES[i]);
        const b = getNodePos(NODES[i + 1]);
        const cx = (a.x + b.x) / 2;
        const cy = Math.min(a.y, b.y) - 40;

        // Solid subtle line
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(cx, cy, b.x, b.y);
        ctx.strokeStyle = `rgba(${ACCENT[0]}, ${ACCENT[1]}, ${ACCENT[2]}, 0.18)`;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([]);
        ctx.stroke();

        // Animated dashed overlay
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(cx, cy, b.x, b.y);
        ctx.strokeStyle = `rgba(${ACCENT[0]}, ${ACCENT[1]}, ${ACCENT[2]}, 0.35)`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.lineDashOffset = -frameRef.current * 0.5;
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw flowing particles
      particlesRef.current.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) {
          p.t = 0;
          p.edge = (p.edge + 1) % (NODES.length - 1);
        }

        const a = getNodePos(NODES[p.edge]);
        const b = getNodePos(NODES[p.edge + 1]);
        const cx = (a.x + b.x) / 2;
        const cy = Math.min(a.y, b.y) - 40;

        const t = p.t;
        const mt = 1 - t;
        const px = mt * mt * a.x + 2 * mt * t * cx + t * t * b.x;
        const py = mt * mt * a.y + 2 * mt * t * cy + t * t * b.y;

        // Particle core
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT[0]}, ${ACCENT[1]}, ${ACCENT[2]}, ${p.opacity})`;
        ctx.fill();

        // Glow trail
        ctx.beginPath();
        ctx.arc(px, py, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT[0]}, ${ACCENT[1]}, ${ACCENT[2]}, ${p.opacity * 0.12})`;
        ctx.fill();
      });

      // Draw nodes
      NODES.forEach((node, i) => {
        const pos = getNodePos(node);
        const pulse = Math.sin(time + i * 1.4) * 0.25 + 0.75;

        // Large outer glow
        const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, node.r * 3);
        grad.addColorStop(0, `rgba(${ACCENT[0]}, ${ACCENT[1]}, ${ACCENT[2]}, ${0.2 * pulse})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, node.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Node filled circle
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT[0]}, ${ACCENT[1]}, ${ACCENT[2]}, ${0.12 * pulse})`;
        ctx.fill();

        // Node border
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, node.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${ACCENT[0]}, ${ACCENT[1]}, ${ACCENT[2]}, ${0.45 * pulse})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner dot
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT[0]}, ${ACCENT[1]}, ${ACCENT[2]}, ${0.8 * pulse})`;
        ctx.fill();

        // Label below node
        ctx.fillStyle = `rgba(${ACCENT[0]}, ${ACCENT[1]}, ${ACCENT[2]}, ${0.55 * pulse})`;
        ctx.font = "600 12px 'SF Mono', 'Fira Code', monospace";
        ctx.textAlign = "center";
        ctx.fillText(node.label, pos.x, pos.y + node.r + 20);
      });

      // Arrow indicators between nodes (→)
      for (let i = 0; i < NODES.length - 1; i++) {
        const a = getNodePos(NODES[i]);
        const b = getNodePos(NODES[i + 1]);
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2 - 15;
        ctx.fillStyle = `rgba(${ACCENT[0]}, ${ACCENT[1]}, ${ACCENT[2]}, 0.3)`;
        ctx.font = "16px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("→", mx, my);
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.85
      }}
    />
  );
}
