import { motion } from "framer-motion";
import { Ornament } from "./Ornament";
import mandapam from "@/assets/mandapam.jpg";

const ADDRESS = "TPG's Nivas ,EdiyarPalayam, Vellore, Tamil Nadu, India";
const MAPS_URL = "https://maps.app.goo.gl/Sbn3JHe6LHf97Yzh6";
const EMBED = "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d8492.12048410646!2d78.92243756745849!3d12.886917945270467!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1782551135633!5m2!1sen!2sin";
const QR = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&bgcolor=050505&color=D4AF37&data=${encodeURIComponent(MAPS_URL)}`;

export function Venue() {
  return (
    <section id="venue" className="relative bg-[#050505] py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center">
          <p className="font-display text-[0.55rem] md:text-[0.65rem] tracking-[0.6em] text-[#D4AF37]/80 uppercase">
            Chapter Five
          </p>
          <h2 className="mt-6 font-editorial text-4xl md:text-6xl text-ivory">
            The <em className="italic">Venue.</em>
          </h2>
          <Ornament className="mx-auto mt-10 h-4 w-72 opacity-70" />
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="frame-gold relative aspect-[4/3] overflow-hidden"
          >
            <img
              src={mandapam}
              alt="The mandapam venue"
              loading="lazy"
              className="h-full w-full object-cover"
              width={1920}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-xs tracking-[0.5em] text-[#B87333] uppercase">
              Join Us At Home
            </p>
            <h3 className="mt-4 font-editorial text-3xl md:text-5xl text-[#D4AF37]">
              TPG's Nivas
            </h3>
            <p className="mt-4 font-serif text-lg text-ivory/70">
              EdiyarPalayam · Tamil Nadu · India
            </p>
            <p className="mt-8 font-serif text-base text-ivory/60 leading-relaxed max-w-md">
              A sanctum of carved stone and golden lamps — the perfect canopy
              beneath which to honour twenty‑five years of devotion.
            </p>

            <div className="mt-10 flex items-center gap-8">
              <div className="frame-gold bg-[#050505] p-2 sm:p-3">
                <img src={QR} alt="QR code to venue location" className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32" />
              </div>
              <div>
                <p className="font-display text-[0.5rem] md:text-[0.6rem] tracking-[0.5em] text-champagne/60 uppercase">
                  Scan to navigate
                </p>
                <a
                  data-hover
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxe mt-4 inline-flex cursor-none hover:btn-luxe-hover"
                >
                  Open in Maps →
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4 }}
          className="mt-20 frame-gold overflow-hidden aspect-[16/7]"
        >
          <iframe
            title="Venue map"
            src={EMBED}
            className="h-full w-full"
            style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(0.4) brightness(0.85)" }}
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
