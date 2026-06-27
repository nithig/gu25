import { motion } from "framer-motion";
import couplePortrait from "@/assets/gallery-1.jpg";
import { Ornament } from "./Ornament";

const chapters = [
  { year: "2001", title: "First Vow", body: "Beneath the temple lamps of Madurai, two lives were entwined in sacred fire." },
  { year: "2006", title: "A Family Blooms", body: "Laughter filled the home; little footsteps wrote a new chapter of joy." },
  { year: "2012", title: "Pilgrimage", body: "A quiet walk to the seven hills; gratitude in every grain of camphor." },
  { year: "2018", title: "Silver Beginnings", body: "Through every storm, the lamp between them never wavered." },
  { year: "2026", title: "Silver Jubilee", body: "Twenty‑five years — engraved in gold, blessed by the heavens." },
];

export function Story() {
  return (
    <section id="story" className="relative bg-[#050505] py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center">
          <p className="font-display text-[0.55rem] md:text-[0.65rem] tracking-[0.6em] text-[#D4AF37]/80 uppercase">
            Chapter One
          </p>
          <h2 className="mt-6 font-editorial text-4xl md:text-6xl text-ivory">
            A Quarter Century, <em className="font-serif italic">told softly.</em>
          </h2>
          <Ornament className="mx-auto mt-10 h-4 w-72 opacity-70" />
        </div>

        <div className="mt-24 grid gap-20 lg:grid-cols-[1fr_1.2fr] lg:gap-32 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="frame-gold relative aspect-[5/4] overflow-hidden">
              <img
                src={couplePortrait}
                alt="Ganesan and Usha — portrait"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1024}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>
            <div className="mt-8 text-center">
              <p className="font-display text-xs tracking-[0.5em] text-champagne/60 uppercase">
                Ganesan & Usha
              </p>
              <p className="mt-2 font-serif italic text-sm text-ivory/60">
                Photographed in the <span className="font-bold italic text-[#B87333]">Pallikonda Ranganadha Perumal</span> Mandapam
              </p>
            </div>
          </motion.div>

          <ol className="relative">
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
            {chapters.map((c, i) => (
              <motion.li
                key={c.year}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 pb-20 last:pb-0"
              >
                <span className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_18px_#D4AF37]" />
                <p className="font-display text-xs tracking-[0.6em] text-[#D4AF37] uppercase">
                  {c.year}
                </p>
                <h3 className="mt-3 font-editorial text-3xl md:text-4xl text-ivory">{c.title}</h3>
                <p className="mt-4 max-w-md font-serif text-base md:text-lg leading-relaxed text-ivory/70">
                  {c.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
