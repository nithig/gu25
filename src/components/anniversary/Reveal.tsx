import { motion } from "framer-motion";
import couplePortrait from "@/assets/couple-portrait.jpg";
import { Ornament } from "./Ornament";
import { Scene3D } from "./Scene3D";

export function Reveal() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050505] py-32 md:py-44">
      {/* atmospheric backdrop */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(ellipse at center, #1a1208 0%, #0a0604 50%, #050505 100%)",
        }}
      />
      <Scene3D className="absolute inset-0 h-full w-full" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "1em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.6em" }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="font-display text-[0.55rem] md:text-[0.65rem] text-[#D4AF37]/80 uppercase"
        >
          The Celebration Awaits
        </motion.p>

        <Ornament className="mx-auto my-8 h-4 w-72 opacity-80" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          /* CHANGED: Breaks out of the container on desktop to span edge-to-edge */
          className="mx-auto w-full max-w-md md:relative md:left-1/2 md:max-w-none md:w-[100vw] md:-translate-x-1/2 md:h-[85vh]"
        >
          {/* CHANGED: Removes the strict 16:9 constraint on desktop so it can fill the height */}
          <div className="frame-gold relative h-full w-full overflow-hidden aspect-[16/9] md:aspect-auto">
            <img
              src={couplePortrait}
              alt="Ganesan and Usha"
              loading="lazy"
              /* CHANGED: Added object-cover to prevent the image from stretching */
              className="h-full w-full object-cover object-center"
              width={1024}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            {/* glass reflection */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 30%, transparent 70%, rgba(212,175,55,0.08) 100%)",
              }}
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.4 }}
          className="mt-14 font-display text-4xl md:text-6xl text-gold-foil tracking-[0.18em]"
        >
          GANESAN
        </motion.h2>
        <p className="my-2 text-2xl text-[#D4AF37]">❦</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.5 }}
          className="font-display text-4xl md:text-6xl text-gold-foil tracking-[0.18em]"
        >
          USHA
        </motion.h2>

        <p className="mt-8 font-serif italic text-lg text-lg text-[#B87333] md:text-xl">
          Celebrating twenty‑five years of togetherness.
        </p>
        <Ornament className="mx-auto mt-10 h-4 w-72 opacity-60" />
      </div>
    </section>
  );
}