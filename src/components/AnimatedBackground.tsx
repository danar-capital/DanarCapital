"use client";

import { useEffect, useRef, memo } from "react";

/* Lightweight canvas-based particle system — 60fps optimized */
const ParticleCanvas = memo(function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    type Particle = {
      x: number; y: number; r: number;
      vx: number; vy: number; alpha: number;
      color: string;
    };

    const colors = [
      "rgba(201,162,39,",
      "rgba(27,58,107,",
      "rgba(255,255,255,",
    ];

    const PARTICLE_COUNT = Math.min(35, Math.floor((W * H) / 30000));
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
      alpha: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.001;

        if (p.y < -10 || p.alpha <= 0) {
          p.x = Math.random() * W;
          p.y = H + 10;
          p.alpha = Math.random() * 0.5 + 0.1;
          p.vy = -Math.random() * 0.4 - 0.1;
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
});

export default function AnimatedBackground() {
  return (
    <>
      {/* Deep space base */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: "radial-gradient(ellipse 120% 80% at 50% -10%, #0d1f3c 0%, #070B15 60%)" }}
        aria-hidden="true"
      />

      {/* Floating orb — blue primary — top left */}
      <div
        className="pointer-events-none fixed z-0 animate-float-a"
        style={{
          top: "-10%",
          left: "-15%",
          width: "55vw",
          height: "55vw",
          maxWidth: 480,
          maxHeight: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27,58,107,0.35) 0%, rgba(27,58,107,0.08) 55%, transparent 70%)",
          filter: "blur(2px)",
        }}
        aria-hidden="true"
      />

      {/* Floating orb — gold accent — top right */}
      <div
        className="pointer-events-none fixed z-0 animate-float-b"
        style={{
          top: "5%",
          right: "-20%",
          width: "45vw",
          height: "45vw",
          maxWidth: 380,
          maxHeight: 380,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,162,39,0.2) 0%, rgba(201,162,39,0.05) 55%, transparent 70%)",
          filter: "blur(2px)",
        }}
        aria-hidden="true"
      />

      {/* Floating orb — mid — bottom center */}
      <div
        className="pointer-events-none fixed z-0 animate-float-c"
        style={{
          bottom: "-5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60vw",
          height: "60vw",
          maxWidth: 520,
          maxHeight: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27,58,107,0.18) 0%, rgba(27,58,107,0.03) 55%, transparent 70%)",
          filter: "blur(3px)",
        }}
        aria-hidden="true"
      />

      {/* Subtle mesh gradient overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(201,162,39,0.06) 0%, transparent 50%), radial-gradient(ellipse 50% 60% at 80% 20%, rgba(27,58,107,0.1) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* Very subtle scan line — adds depth */}
      <div
        className="pointer-events-none fixed left-0 right-0 z-0 animate-scan"
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(201,162,39,0.08) 30%, rgba(201,162,39,0.12) 50%, rgba(201,162,39,0.08) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Particles */}
      <ParticleCanvas />

      {/* Fine noise texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "128px",
        }}
        aria-hidden="true"
      />
    </>
  );
}
