import { useEffect, useRef, useState } from "react";

// Tiny inline-synthesized soft chime using Web Audio so we don't need assets.
function playChime(volume = 0.06) {
  try {
    const Ctx = (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext);
    const ctx = new Ctx();
    const now = ctx.currentTime;
    [523.25, 659.25, 783.99].forEach((f, i) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = f;
      g.gain.setValueAtTime(0, now + i * 0.12);
      g.gain.linearRampToValueAtTime(volume, now + i * 0.12 + 0.05);
      g.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.12 + 2.4);
      o.connect(g).connect(ctx.destination);
      o.start(now + i * 0.12);
      o.stop(now + i * 0.12 + 2.5);
    });
    setTimeout(() => ctx.close(), 3500);
  } catch {
    // ignore
  }
}

export function AudioToggle() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const stopRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    return () => {
      stopRef.current?.();
      ctxRef.current?.close();
    };
  }, []);

  const start = () => {
    try {
      const Ctx = (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext);
      const ctx = new Ctx();
      ctxRef.current = ctx;
      const master = ctx.createGain();
      master.gain.value = 0.04;
      master.connect(ctx.destination);

      // soft drone resembling veena pad
      const freqs = [196, 246.94, 293.66, 392];
      const oscs = freqs.map((f) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "sine";
        o.frequency.value = f;
        g.gain.value = 0.25;
        o.connect(g).connect(master);
        o.start();
        return { o, g };
      });

      // periodic chime
      const chimeInterval = setInterval(() => playChime(0.03), 9000);

      stopRef.current = () => {
        clearInterval(chimeInterval);
        oscs.forEach(({ o, g }) => {
          g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
          o.stop(ctx.currentTime + 0.7);
        });
      };
      playChime(0.04);
    } catch {
      // ignore
    }
  };

  const toggle = () => {
    if (on) {
      stopRef.current?.();
      ctxRef.current?.close();
      ctxRef.current = null;
      stopRef.current = null;
    } else {
      start();
    }
    setOn(!on);
  };

  return (
    <button
      data-hover
      onClick={toggle}
      aria-label={on ? "Mute ambience" : "Play ambience"}
      className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full border border-[#D4AF37]/40 bg-[#050505]/70 backdrop-blur-md flex items-center justify-center group cursor-none hover:border-[#D4AF37] transition-all duration-500"
    >
      <span className="absolute inset-0 rounded-full"
        style={{ boxShadow: on ? "0 0 30px -5px rgba(212,175,55,0.6)" : "none", transition: "box-shadow .6s" }}
      />
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#D4AF37" strokeWidth="1.2">
        {on ? (
          <>
            <path d="M3 10v4h4l5 4V6L7 10H3z" />
            <path d="M16 8c1.5 1 2.5 2.5 2.5 4s-1 3-2.5 4" />
            <path d="M19 5c2.5 2 4 4.2 4 7s-1.5 5-4 7" />
          </>
        ) : (
          <>
            <path d="M3 10v4h4l5 4V6L7 10H3z" />
            <path d="M16 9l6 6M22 9l-6 6" />
          </>
        )}
      </svg>
    </button>
  );
}
