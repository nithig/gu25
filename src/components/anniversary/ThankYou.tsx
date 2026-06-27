import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Ornament } from "./Ornament";
import { GoldParticles } from "./GoldParticles";

export function ThankYou() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    type Part = { x: number; y: number; vx: number; vy: number; life: number; max: number; color: string; size: number };
    const parts: Part[] = [];
    const colors = ["#D4AF37", "#F5E6C8", "#FFF9F0", "#E8A87C", "#FFD27A"];

    const burst = () => {
      const cx = Math.random() * w;
      const cy = h * (0.2 + Math.random() * 0.4);
      const n = 80;
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2;
        const v = 2 + Math.random() * 3;
        parts.push({
          x: cx, y: cy,
          vx: Math.cos(a) * v, vy: Math.sin(a) * v,
          life: 0, max: 70 + Math.random() * 40,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 1 + Math.random() * 2,
        });
      }
    };

    let visible = false;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    }, { threshold: 0.2 });
    io.observe(canvas);

    let last = 0;
    let raf = 0;
    const tick = (t: number) => {
      if (visible && t - last > 1100) {
        burst();
        last = t;
      }
      ctx.clearRect(0, 0, w, h);
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.vx *= 0.99;
        const alpha = 1 - p.life / p.max;
        if (alpha <= 0) { parts.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      io.disconnect();
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="thanks" className="relative h-[100svh] overflow-hidden bg-[#050505]">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, #2a1408 0%, #0a0604 40%, #050505 80%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <GoldParticles density={50} />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.8em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.6em" }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="font-display text-[0.55rem] md:text-[0.65rem] text-[#D4AF37] uppercase"
        >
          The Grand Finale
        </motion.p>

        <Ornament className="my-8 h-4 w-72 opacity-80" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="font-editorial text-4xl md:text-6xl lg:text-7xl text-gold-foil max-w-4xl leading-tight"
        >
          Thank you for being part of our journey.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.6 }}
          className="mt-10 max-w-xl font-serif italic text-ivory/70 text-lg leading-relaxed"
        >
          With every prayer, every lamp lit in your honour, and every blessing
          carried across twenty‑five years — we are deeply grateful.
        </motion.p>

        <Ornament className="my-12 h-4 w-72 opacity-60" />

        <p className="font-display text-xs tracking-[0.5em] text-champagne/70 uppercase">
          Ganesan ❦ Usha
        </p>
        <p className="mt-3 font-serif italic text-sm text-white">
          12 · 07 · 2026 · TPG's Nivas ,EdiyarPalayam
        </p>
      </div>
    </section>
  );
}
