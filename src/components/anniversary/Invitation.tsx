import { motion } from "framer-motion";
import { Ornament, LotusIcon } from "./Ornament";
import { Kolam } from "./Kolam";
import gu from "@/assets/GU.png";

export function Invitation() {
  return (
    <section id="invitation" className="relative bg-[#050505] py-20 md:py-48 overflow-hidden">
      <Kolam className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] opacity-10" />
      <Kolam className="pointer-events-none absolute -left-40 bottom-20 h-[500px] w-[500px] opacity-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-12">
        <div className="text-center">
          <p className="font-display text-[0.5rem] md:text-[0.65rem] tracking-[0.4em] md:tracking-[0.6em] text-[#D4AF37]/80 uppercase">
            Chapter Three
          </p>
          <h2 className="mt-6 font-editorial text-3xl md:text-6xl text-ivory">
            The <em className="italic">Invitation.</em>
          </h2>
          <Ornament className="mx-auto mt-10 h-4 w-56 sm:w-72 opacity-70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-24 mx-auto max-w-2xl pb-12 md:pb-0"
          style={{ perspective: 1400 }}
        >
          <div
            className="relative aspect-[3/4] sm:aspect-[3/4] frame-gold overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse at top, #1a1208 0%, #0a0604 70%, #050505 100%)",
              boxShadow:
                "0 50px 150px -30px rgba(212,175,55,0.25), inset 0 0 0 1px rgba(212,175,55,0.2)",
            }}
          >
            {/* corner ornaments — smaller on mobile so they don't crowd the content */}
            {([
              "top-2 left-2 sm:top-4 sm:left-4",
              "top-2 right-2 sm:top-4 sm:right-4 rotate-90",
              "bottom-2 left-2 sm:bottom-4 sm:left-4 -rotate-90",
              "bottom-2 right-2 sm:bottom-4 sm:right-4 rotate-180",
            ] as const).map((pos, i) => (
              <svg
                key={i}
                viewBox="0 0 100 100"
                className={`absolute h-14 w-14 sm:h-24 sm:w-24 md:h-32 md:w-32 opacity-90 ${pos}`}
              >
                <g stroke="#D4AF37" fill="none">
                  {/* 1. Outer Frame Cascades */}
                  <path d="M 2 98 Q 2 2 98 2" strokeWidth="2" />
                  <path d="M 8 98 Q 8 8 98 8" strokeWidth="1" opacity="0.8" />
                  <path d="M 14 98 Q 14 14 98 14" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.6" />

                  {/* 2. Sweeping Filigree Curves */}
                  <path d="M 2 65 C 35 65 45 45 45 2 C 45 25 65 35 98 35" strokeWidth="1.2" />
                  <path d="M 8 45 C 25 45 35 35 35 8" strokeWidth="0.8" opacity="0.8" />

                  {/* 3. Central Floral Cluster (Petals) */}
                  <g fill="#D4AF37" stroke="none">
                    {/* Main diagonal petal */}
                    <path d="M 24 24 Q 45 10 50 24 Q 35 35 24 24" opacity="0.9" />
                    {/* Left dropping petal */}
                    <path d="M 20 28 Q 25 50 12 55 Q 8 40 20 28" opacity="0.7" />
                    {/* Top stretching petal */}
                    <path d="M 28 20 Q 50 25 55 12 Q 40 8 28 20" opacity="0.7" />
                    {/* Corner anchor diamond */}
                    <path d="M 35 35 L 37 31 L 41 33 L 37 35 L 35 39 L 33 35 Z" opacity="0.8" />
                  </g>

                  {/* 4. Golden Beads & Drops */}
                  <g fill="#D4AF37" stroke="none">
                    <circle cx="24" cy="24" r="2.5" />
                    <circle cx="42" cy="18" r="1.5" opacity="0.8" />
                    <circle cx="18" cy="42" r="1.5" opacity="0.8" />
                    <circle cx="58" cy="14" r="1.2" opacity="0.6" />
                    <circle cx="14" cy="58" r="1.2" opacity="0.6" />
                    {/* End caps */}
                    <circle cx="2" cy="98" r="2" />
                    <circle cx="98" cy="2" r="2" />
                  </g>
                </g>
              </svg>
            ))}

            <div className="flex h-full flex-col items-center justify-center px-5 sm:px-8 py-12 sm:py-16 text-center">
              <LotusIcon className="h-8 w-8 sm:h-10 sm:w-10 opacity-80" />
              <p className="mt-10 sm:mt-12 font-display text-[0.7rem] sm:text-[0.6rem] tracking-[0.6em] sm:tracking-[0.6em] text-champagne/70 uppercase">
                With the blessings of family and the divine
              </p>
              <Ornament className="my-2 sm:my-6 h-3 w-36 sm:w-48 opacity-70" />
              <img
                src={gu}
                alt="Ganesan and Usha's Silver Jubilee"
                className="mb-4 relative h-[110px] w-[110px] sm:h-[150px] sm:w-[150px] object-cover mix-blend-screen opacity-90 rounded-full"
              />
              <p className="font-serif italic text-sm sm:text-base text-ivory/70">
                You are graciously invited to celebrate
              </p>

              {/* Names: smaller, tighter tracking, and wrap-safe on narrow screens */}
              <h3 className="mt-5 sm:mt-6 font-display text-2xl sm:text-3xl md:text-5xl text-gold-foil tracking-[0.08em] sm:tracking-[0.15em] break-words">
                GANESAN
              </h3>
              <span className="my-2 text-lg sm:text-xl text-[#D4AF37]">❦</span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-5xl text-gold-foil tracking-[0.08em] sm:tracking-[0.15em] break-words">
                USHA
              </h3>

              <p className="mt-6 sm:mt-8 font-serif italic text-base sm:text-lg text-ivory/80">
                on their Silver Jubilee
              </p>
              <p className="mt-2 font-display text-[0.6rem] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-champagne/70 uppercase">
                25 Years of Togetherness
              </p>

              {/* Date / Time: tighter gap + smaller text so it never forces overflow at 360-375px */}
              <div className="my-8 sm:my-10 grid grid-cols-2 gap-6 sm:gap-12 text-center">
                <div>
                  <p className="font-display text-[0.5rem] sm:text-[0.55rem] tracking-[0.3em] sm:tracking-[0.5em] text-[#D4AF37] uppercase">
                    Date
                  </p>
                  <p className="mt-2 sm:mt-3 font-editorial text-lg sm:text-2xl text-ivory whitespace-nowrap">
                    12 July 2026
                  </p>
                </div>
                <div>
                  <p className="font-display text-[0.5rem] sm:text-[0.55rem] tracking-[0.3em] sm:tracking-[0.5em] text-[#D4AF37] uppercase">
                    Time
                  </p>
                  <p className="mt-2 sm:mt-3 font-editorial text-lg sm:text-2xl text-ivory whitespace-nowrap">
                    11 : 00 AM
                  </p>
                </div>
              </div>

              <Ornament className="my-2 h-3 w-36 sm:w-48 opacity-70" />

              {/* wax seal: pulled inward on mobile so it stays inside the card
                  instead of bleeding off the edge and getting clipped */}
              <motion.div
                initial={{ scale: 0, rotate: -45, opacity: 0 }}
                whileInView={{ scale: 1, rotate: -15, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.6 }}
                className="absolute bottom-2 right-2 sm:-bottom-10 sm:right-6 md:-bottom-12 md:-right-8 drop-shadow-2xl z-20"
              >
                <div className="relative h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32">
                  {/* 1. Outer rim (The melted, irregular edge) */}
                  <div
                    className="absolute inset-0"
                    style={{
                      borderRadius: "48% 52% 53% 47% / 54% 48% 52% 46%",
                      background:
                        "radial-gradient(circle at 30% 30%, #a22437 0%, #6f1625 45%, #3e0712 100%)",
                      boxShadow:
                        "0 10px 25px -5px rgba(0,0,0,0.8), inset 0 3px 6px rgba(255,255,255,0.2), inset 0 -4px 8px rgba(0,0,0,0.7)",
                    }}
                  />

                  {/* 2. Inner impression (Where the metal stamp pressed down) */}
                  <div
                    className="absolute inset-[12%] rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 40% 40%, #761626 0%, #4b0a16 100%)",
                      boxShadow: "inset 0 4px 10px rgba(0,0,0,0.8), 0 1px 2px rgba(255,255,255,0.3)",
                    }}
                  >
                    {/* 3. Engraved Gold Details */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pt-1">
                      <span
                        className="font-editorial text-xl sm:text-2xl md:text-3xl tracking-wide text-[#D4AF37]"
                        style={{
                          textShadow:
                            "0px -1px 1px rgba(0,0,0,0.8), 0px 1px 1px rgba(255,255,255,0.3)",
                        }}
                      >
                        G<span className="text-base sm:text-lg text-[#D4AF37]/80 mx-1">❦</span>U
                      </span>

                      <span
                        className="mt-1 font-display text-[0.4rem] sm:text-[0.45rem] md:text-[0.55rem] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#D4AF37]/80"
                        style={{
                          textShadow:
                            "0px -1px 1px rgba(0,0,0,0.8), 0px 1px 1px rgba(255,255,255,0.2)",
                        }}
                      >
                        25 Years
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}