import { useEffect, useRef } from "react";

const BLOBS = [
  {
    x: 0.3,
    y: 0.3,
    radius: 400,
    color: "rgba(193, 95, 60, 0.06)",
    speedX: 0.0003,
    speedY: 0.0004,
    phaseX: 0,
    phaseY: 0.5,
    driftX: 0.15,
    driftY: 0.12,
  },
  {
    x: 0.7,
    y: 0.6,
    radius: 450,
    color: "rgba(88, 166, 255, 0.04)",
    speedX: 0.00025,
    speedY: 0.00035,
    phaseX: 1.2,
    phaseY: 2.1,
    driftX: 0.18,
    driftY: 0.14,
  },
  {
    x: 0.5,
    y: 0.2,
    radius: 380,
    color: "rgba(130, 80, 200, 0.03)",
    speedX: 0.00035,
    speedY: 0.0002,
    phaseX: 2.5,
    phaseY: 0.8,
    driftX: 0.12,
    driftY: 0.16,
  },
  {
    x: 0.2,
    y: 0.7,
    radius: 420,
    color: "rgba(193, 95, 60, 0.04)",
    speedX: 0.0002,
    speedY: 0.0003,
    phaseX: 3.8,
    phaseY: 1.5,
    driftX: 0.14,
    driftY: 0.1,
  },
  {
    x: 0.8,
    y: 0.3,
    radius: 360,
    color: "rgba(88, 166, 255, 0.03)",
    speedX: 0.00028,
    speedY: 0.00022,
    phaseX: 0.7,
    phaseY: 3.2,
    driftX: 0.16,
    driftY: 0.13,
  },
];

export default function GradientMesh() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width, height;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    function draw(time) {
      ctx.clearRect(0, 0, width, height);

      for (const blob of BLOBS) {
        const cx =
          blob.x * width +
          Math.sin(time * blob.speedX + blob.phaseX) * width * blob.driftX;
        const cy =
          blob.y * height +
          Math.cos(time * blob.speedY + blob.phaseY) * height * blob.driftY;

        // Scale radius with viewport for consistency
        const r = blob.radius * (Math.min(width, height) / 1000);

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          width: "100%",
          height: "100%",
        }}
      />
      {/* Film grain noise overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </>
  );
}
