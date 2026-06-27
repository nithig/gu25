import { motion } from "framer-motion";
import { Ornament } from "./Ornament";

const blessings = [
  { from: "Amma & Appa", words: "May your hearts continue to walk in the same rhythm, as they have for twenty‑five blessed years." },
  { from: "Our Children", words: "You taught us love, patience and the quiet music of devotion. We carry your light." },
  { from: "Anna & Akka", words: "From the day you placed the garlands, our family has glowed a little brighter." },
  { from: "The Grandchildren", words: "Thatha and Paati — your laughter is the warmest lamp in our home." },
  { from: "Our Friends", words: "Twenty‑five years of grace, and not a single chapter unworthy of celebration." },
  { from: "Family Elders", words: "May Sri Meenakshi bless you with countless more sunrises, side by side." },
];

export function Blessings() {
  return (
    <section id="blessings" className="relative bg-[#050505] py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center">
          <p className="font-display text-[0.55rem] md:text-[0.65rem] tracking-[0.6em] text-[#D4AF37]/80 uppercase">
            Chapter Six
          </p>
          <h2 className="mt-6 font-editorial text-4xl md:text-6xl text-ivory">
            Blessings, <em className="italic">whispered in gold.</em>
          </h2>
          <Ornament className="mx-auto mt-10 h-4 w-72 opacity-70" />
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blessings.map((b, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-10 frame-gold bg-gradient-to-b from-[#0a0805] to-[#050505] group"
            >
              <span className="absolute top-4 left-6 font-editorial text-6xl text-[#D4AF37]/30 leading-none">
                "
              </span>
              <blockquote className="relative font-serif italic text-lg text-ivory/85 leading-relaxed">
                {b.words}
              </blockquote>
              <Ornament className="my-6 h-3 w-32 opacity-50" />
              <figcaption className="font-display text-[0.5rem] md:text-[0.6rem] tracking-[0.5em] text-[#D4AF37] uppercase">
                — {b.from}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
