import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import templeHero from "@/assets/temple-hero.jpg";
import { GoldParticles } from "./GoldParticles";
import { GopuramSilhouette, Ornament } from "./Ornament";

export function Hero() {
  const [stage, setStage] = useState<"shloka" | "curtain" | "anniversary" | "reveal">("shloka");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setStage("curtain"), 3400);
    // show a large anniversary message between curtain and full reveal
    const t2 = setTimeout(() => setStage("anniversary"), 5400);
    // then reveal the full title after the anniversary animation
    // keep the anniversary stage a bit longer so we can animate 25 then ANNIVERSARY
    const t3 = setTimeout(() => setStage("reveal"), 11000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100svh] w-full overflow-hidden bg-[#050505]">
      {/* Temple revealed */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={stage === "reveal" ? { scale: 1, opacity: 1 } : { scale: 1.15, opacity: 0 }}
        transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={templeHero}
          alt="South Indian temple gopuram at dawn"
          className="h-full w-full object-cover"
          width={1536}
          height={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-transparent opacity-80" />
        {/* light rays */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse at 70% 20%, rgba(245,200,120,0.35), transparent 50%)",
          }}
        />
      </motion.div>

      <GoldParticles density={80} className="z-10" />

      {/* Velvet curtains */}
      <AnimatePresence>
        {stage !== "reveal" && (
          <>
            <motion.div
              key="left"
              initial={{ x: 0 }}
              animate={stage === "curtain" ? { x: "-102%" } : { x: 0 }}
              exit={{ x: "-102%" }}
              transition={{ duration: 2.2, ease: [0.83, 0, 0.17, 1] }}
              className="absolute inset-y-0 left-0 z-20 w-1/2"
              style={{
                background:
                  "linear-gradient(90deg, #1a0207 0%, #3a0a14 60%, #5A1322 100%)",
                boxShadow: "inset -40px 0 80px rgba(0,0,0,0.6)",
              }}
            >
              <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-b from-[#D4AF37]/40 via-[#D4AF37]/80 to-[#D4AF37]/40" />
            </motion.div>
            <motion.div
              key="right"
              initial={{ x: 0 }}
              animate={stage === "curtain" ? { x: "102%" } : { x: 0 }}
              exit={{ x: "102%" }}
              transition={{ duration: 2.2, ease: [0.83, 0, 0.17, 1] }}
              className="absolute inset-y-0 right-0 z-20 w-1/2"
              style={{
                background:
                  "linear-gradient(-90deg, #1a0207 0%, #3a0a14 60%, #5A1322 100%)",
                boxShadow: "inset 40px 0 80px rgba(0,0,0,0.6)",
              }}
            >
              <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-[#D4AF37]/40 via-[#D4AF37]/80 to-[#D4AF37]/40" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sanskrit shloka */}
      <AnimatePresence>
        {stage === "shloka" && (
          <motion.div
            key="shloka"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 z-30 flex items-center justify-center"
          >
            <div className="text-center px-6">
              <p className="font-tamil text-2xl md:text-4xl text-gold-foil leading-relaxed">
                ॥ ॐ सह नाववतु ॥
              </p>
              <p className="mt-6 font-serif italic text-sm md:text-base text-champagne/70 tracking-[0.3em] uppercase">
                May we be protected together
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Anniversary highlight */}
      <AnimatePresence>
        {stage === "anniversary" && (
          <motion.div
            key="anniversary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
          >
            <div className="relative flex items-center justify-center w-full px-6">
              {/* Giant 25 (shows first, then fades out) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 1.02] }}
                transition={{ duration: 5.6, times: [0, 0.15, 0.6, 1], ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <h2 className="font-display text-[8rem] sm:text-[12rem] md:text-[20rem] lg:text-[24rem] leading-none text-gold-foil drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                  25
                  <sup className="ml-2 align-super text-[2.4rem] sm:text-[3.6rem] md:text-[4.8rem] lg:text-[5.6rem] font-display" style={{ lineHeight: 1 }}>
                    th
                  </sup>
                </h2>
              </motion.div>

              {/* Overlapping ANNIVERSARY (appears after 25 fades) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.98, 0.98, 1, 1, 1] }}
                transition={{ duration: 5.6, times: [0, 0.45, 0.6, 0.95, 1], ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <h3 className="font-display text-3xl sm:text-5xl md:text-8xl lg:text-9xl text-gold-foil leading-none tracking-widest opacity-95">
                  ANNIVERSARY
                </h3>
              </motion.div>

              {/* Decorative ornament in front */}
              <div className="absolute bottom-28 w-full flex justify-center pointer-events-none">
                <Ornament className="h-4 w-60 opacity-80" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gopuram silhouette overlay */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={stage === "reveal" ? { y: 0, opacity: 0.35 } : {}}
        transition={{ duration: 3, delay: 0.6 }}
        className="absolute bottom-0 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <GopuramSilhouette className="h-[80vh] w-auto" />
      </motion.div>

      {/* Title */}
      <AnimatePresence>
        {stage === "reveal" && (
          <motion.div
            key="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.4, delay: 1.2 }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.6, delay: 1.6 }}
              className="font-display text-xs tracking-[0.7em] text-champagne/70 uppercase"
            >
              The Silver Jubilee Of
            </motion.p>

            <Ornament className="my-6 h-4 w-60 opacity-80" />

            <motion.h1
              initial={{ y: 30, opacity: 0, letterSpacing: "0.4em" }}
              animate={{ y: 0, opacity: 1, letterSpacing: "0.15em" }}
              transition={{ duration: 2.4, delay: 2 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-gold-foil"
            >
              GANESAN
            </motion.h1>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 2.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="my-3 text-2xl text-[#D4AF37]"
            >
              ❦
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0, letterSpacing: "0.4em" }}
              animate={{ y: 0, opacity: 1, letterSpacing: "0.15em" }}
              transition={{ duration: 2.4, delay: 3 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-gold-foil"
            >
              USHA
            </motion.h1>

            <Ornament className="my-6 h-4 w-60 opacity-80" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 3.6 }}
              className="font-serif italic text-base md:text-lg text-ivory/80"
            >
              Twenty‑five years of togetherness
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 4 }}
              className="mt-2 font-display text-[0.7rem] tracking-[0.5em] text-champagne/60 uppercase"
            >
              XII · July · MMXXVI
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={stage === "reveal" ? { opacity: 1 } : {}}
        transition={{ delay: 5, duration: 1.4 }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-center"
      >
        <div className="mx-auto h-12 w-px bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />
        <p className="mt-3 font-display text-[0.6rem] tracking-[0.5em] text-champagne/60 uppercase">
          Scroll
        </p>
      </motion.div>
    </section>
  );
}
