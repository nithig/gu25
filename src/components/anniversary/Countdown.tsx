import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Ornament } from "./Ornament";

const TARGET = new Date("2026-07-12T11:00:00+05:30").getTime();

function useCountdown() {
  const [t, setT] = useState(() => Math.max(0, TARGET - Date.now()));
  useEffect(() => {
    const i = setInterval(() => setT(Math.max(0, TARGET - Date.now())), 1000);
    return () => clearInterval(i);
  }, []);
  const d = Math.floor(t / 86400000);
  const h = Math.floor((t % 86400000) / 3600000);
  const m = Math.floor((t % 3600000) / 60000);
  const s = Math.floor((t % 60000) / 1000);
  return { d, h, m, s };
}

const Unit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="relative">
      <motion.div
        key={value}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-editorial text-6xl md:text-8xl text-gold-foil tabular-nums"
      >
        {String(value).padStart(2, "0")}
      </motion.div>
    </div>
    <div className="mt-4 hairline w-16" />
      <p className="mt-4 font-display text-[0.5rem] md:text-[0.6rem] tracking-[0.5em] text-champagne/60 uppercase">
      {label}
    </p>
  </div>
);

export function Countdown() {
  const { d, h, m, s } = useCountdown();
  return (
    <section id="countdown" className="relative bg-[#050505] py-32 md:py-44">
      <div className="mx-auto max-w-5xl px-6 md:px-12 text-center">
        <p className="font-display text-[0.55rem] md:text-[0.65rem] tracking-[0.6em] text-[#D4AF37]/80 uppercase">
          Chapter Four
        </p>
        <h2 className="mt-6 font-editorial text-4xl md:text-6xl text-ivory">
          The auspicious hour <em className="italic">approaches.</em>
        </h2>
        <Ornament className="mx-auto mt-10 h-4 w-72 opacity-70" />

        <div className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-4">
          <Unit value={d} label="Days" />
          <Unit value={h} label="Hours" />
          <Unit value={m} label="Minutes" />
          <Unit value={s} label="Seconds" />
        </div>

        <p className="mt-16 font-serif italic text-ivory/60">
          Until the lamps are lit on the twelfth of July.
        </p>
      </div>
    </section>
  );
}
