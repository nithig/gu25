import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ornament } from "./Ornament";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import couple from "@/assets/couple-portrait.jpg";
import deepam from "@/assets/deepam.jpg";

const photos = [
  { src: g3, alt: "The first vow", h: "tall" },
  { src: g2, alt: "Laughter across years", h: "wide" },
  { src: deepam, alt: "Sacred lamps", h: "tall" },
  { src: g4, alt: "Hands and garlands", h: "wide" },
  { src: g1, alt: "The family", h: "wide" },
  { src: g5, alt: "Kolam at dawn", h: "tall" },
  { src: couple, alt: "Portrait", h: "tall" },
  { src: g6, alt: "Temple bells", h: "wide" },
  { src: g7, alt: "Sankalpam", h: "tall" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative bg-[#050505] py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center">
          <p className="font-display text-[0.55rem] md:text-[0.65rem] tracking-[0.6em] text-[#D4AF37]/80 uppercase">
            Chapter Two
          </p>
          <h2 className="mt-6 font-editorial text-4xl md:text-6xl text-ivory">
            Moments, <em className="italic">held in light.</em>
          </h2>
          <Ornament className="mx-auto mt-10 h-4 w-72 opacity-70" />
          <p className="mx-auto mt-8 max-w-xl font-serif text-base text-ivory/60 leading-relaxed">
            A floating gallery of memories — drift through twenty‑five years of quiet
            grace, laughter, and devotion.
          </p>
        </div>

        <div className="mt-20 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {photos.map((p, i) => (
            <motion.button
              key={i}
              data-hover
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-sm frame-gold cursor-none"
              style={{ transform: `perspective(1200px)` }}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className={`w-full object-cover transition-all duration-1000 group-hover:scale-105 ${
                  p.h === "tall" ? "aspect-[4/5]" : "aspect-[5/4]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-[0.5rem] md:text-[0.6rem] tracking-[0.4em] text-champagne uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-700">
                  {p.alt}
                </p>
              </div>
              <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(212,175,55,0.15), transparent 50%)" }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/95 backdrop-blur-2xl p-6"
          >
            <motion.img
              key={active}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              src={photos[active].src}
              alt={photos[active].alt}
              className="max-h-[88vh] max-w-[92vw] object-contain frame-gold"
            />
            <button
              data-hover
              onClick={(e) => {
                e.stopPropagation();
                setActive(null);
              }}
              className="absolute top-8 right-8 font-display text-xs tracking-[0.4em] text-champagne uppercase cursor-none"
            >
              Close ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
