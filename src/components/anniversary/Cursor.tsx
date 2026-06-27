import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) {
      document.documentElement.style.cursor = "auto";
      return;
    }
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
      }
      if (spotRef.current) {
        spotRef.current.style.transform = `translate3d(${mx - 300}px, ${my - 300}px, 0)`;
      }
      // spawn particle occasionally
      if (Math.random() > 0.78) {
        const p = document.createElement("span");
        p.className = "cursor-particle";
        p.style.left = `${mx}px`;
        p.style.top = `${my}px`;
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 900);
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-hover]")) {
        ringRef.current?.classList.add("is-hover");
      } else {
        ringRef.current?.classList.remove("is-hover");
      }
    };
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{`
        .cursor-dot, .cursor-ring, .cursor-spot { position: fixed; top:0; left:0; pointer-events:none; z-index: 9999; will-change: transform; }
        .cursor-dot { width: 8px; height: 8px; border-radius: 9999px; background: var(--gold); box-shadow: 0 0 16px var(--gold); }
        .cursor-ring { width: 36px; height: 36px; border-radius: 9999px; border: 1px solid color-mix(in oklab, var(--gold) 70%, transparent); transition: width .3s, height .3s, border-color .3s, opacity .3s; mix-blend-mode: difference; }
        .cursor-ring.is-hover { width: 64px; height: 64px; border-color: var(--gold); }
        .cursor-spot { width: 600px; height: 600px; border-radius: 9999px; background: radial-gradient(circle, rgba(212,175,55,0.08), transparent 60%); mix-blend-mode: screen; filter: blur(20px); }
        .cursor-particle { position: fixed; width: 4px; height: 4px; border-radius: 9999px; background: var(--gold); box-shadow: 0 0 8px var(--gold); pointer-events:none; z-index:9998; animation: cursorFloat .9s ease-out forwards; }
        @keyframes cursorFloat { 0% { opacity:1; transform: translate(-50%,-50%) scale(1);} 100% { opacity:0; transform: translate(-50%, calc(-50% - 30px)) scale(0.2);} }
        @media (pointer: coarse) { .cursor-dot, .cursor-ring, .cursor-spot { display:none; } }
      `}</style>
      <div ref={spotRef} className="cursor-spot" />
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
