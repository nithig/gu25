import { useEffect, useRef } from "react";

export function Kolam({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const paths = svg.querySelectorAll<SVGPathElement | SVGCircleElement>("[data-draw]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            paths.forEach((p, i) => {
              const len = (p as SVGPathElement).getTotalLength?.() ?? 200;
              p.style.strokeDasharray = `${len}`;
              p.style.strokeDashoffset = `${len}`;
              p.style.transition = `stroke-dashoffset 2.4s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.08}s, opacity .8s ease ${i * 0.08}s`;
              requestAnimationFrame(() => {
                p.style.strokeDashoffset = "0";
                p.style.opacity = "1";
              });
            });
            io.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(svg);
    return () => io.disconnect();
  }, []);

  return (
    <svg ref={ref} viewBox="0 0 400 400" className={className} fill="none" aria-hidden>
      <g stroke="#D4AF37" strokeWidth="0.8" strokeLinecap="round" style={{ opacity: 0 }}>
        {/* center dot grid implied */}
        <circle data-draw cx="200" cy="200" r="14" style={{ opacity: 0 }} />
        <circle data-draw cx="200" cy="200" r="40" style={{ opacity: 0 }} />
        <circle data-draw cx="200" cy="200" r="80" style={{ opacity: 0 }} />
        <circle data-draw cx="200" cy="200" r="130" style={{ opacity: 0 }} />
        <circle data-draw cx="200" cy="200" r="180" style={{ opacity: 0 }} />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          const x1 = 200 + Math.cos(a) * 40;
          const y1 = 200 + Math.sin(a) * 40;
          const x2 = 200 + Math.cos(a) * 180;
          const y2 = 200 + Math.sin(a) * 180;
          return <path key={i} data-draw d={`M${x1} ${y1} L${x2} ${y2}`} style={{ opacity: 0 }} />;
        })}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4 + Math.PI / 8;
          const cx = 200 + Math.cos(a) * 110;
          const cy = 200 + Math.sin(a) * 110;
          return (
            <path
              key={`pl${i}`}
              data-draw
              d={`M${cx} ${cy} m-22 0 a22 30 0 1 0 44 0 a22 30 0 1 0 -44 0Z`}
              style={{ opacity: 0 }}
            />
          );
        })}
      </g>
    </svg>
  );
}
