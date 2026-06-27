import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SmoothScroll } from "@/components/anniversary/SmoothScroll";
import { Cursor } from "@/components/anniversary/Cursor";
import { Hero } from "@/components/anniversary/Hero";
import { Reveal } from "@/components/anniversary/Reveal";
import { Story } from "@/components/anniversary/Story";
import { Gallery } from "@/components/anniversary/Gallery";
import { Invitation } from "@/components/anniversary/Invitation";
import { Countdown } from "@/components/anniversary/Countdown";
import { Venue } from "@/components/anniversary/Venue";
import { Blessings } from "@/components/anniversary/Blessings";
import { ThankYou } from "@/components/anniversary/ThankYou";
import { AudioToggle } from "@/components/anniversary/AudioToggle";
import gu from "@/assets/GU.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ganesan ❦ Usha — 25 Years of Togetherness" },
      {
        name: "description",
        content:
          "A cinematic celebration of Ganesan and Usha's silver jubilee — 25 years of togetherness, honoured on 12 July 2026 at Madurai.",
      },
      { property: "og:title", content: "Ganesan ❦ Usha — Silver Jubilee" },
      {
        property: "og:description",
        content:
          "A South Indian royal heritage celebration of twenty‑five years of devotion.",
      },
    ],
  }),
  component: Index,
});

const links = [
  { href: "#story", label: "Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#invitation", label: "Invitation" },
  { href: "#countdown", label: "Countdown" },
  { href: "#venue", label: "Venue" },
  { href: "#blessings", label: "Blessings" },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative flex h-5 w-7 flex-col items-center justify-center gap-[6px]">
      <motion.span
        className="block h-px w-7 bg-champagne"
        animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="block h-px w-7 bg-champagne"
        animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the menu automatically if the viewport grows to desktop width
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handle = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 mix-blend-difference md:px-12 md:py-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <a href="#top" data-hover className="font-display text-xs tracking-[0.5em] text-champagne uppercase cursor-none">
            <img src={gu} alt="Ganesan and Usha's Silver Jubilee" className="ml-1 h-12 w-12 rounded-full md:h-16 md:w-16" />
          </a>
          <p className="hidden font-display text-[0.55rem] tracking-[0.4em] text-champagne/70 uppercase sm:block sm:text-xs md:text-[0.65rem]">
            12 · 07 · 2026
          </p>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                data-hover
                href={l.href}
                className="font-display text-xs md:text-[0.65rem] tracking-[0.4em] text-champagne/70 uppercase cursor-none transition-colors duration-500 hover:text-[#D4AF37]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          data-hover
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 items-center justify-center cursor-none md:hidden"
        >
          <HamburgerIcon open={open} />
        </button>
      </div>

      {/* Mobile full-screen menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#050505] md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                data-hover
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * i, ease: "easeOut" }}
                className="font-display text-sm tracking-[0.4em] text-champagne/80 uppercase cursor-none transition-colors duration-500 hover:text-[#D4AF37]"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.08 * links.length }}
              className="mt-6 font-display text-[0.6rem] tracking-[0.4em] text-champagne/40 uppercase"
            >
              12 · 07 · 2026
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Index() {
  return (
    <SmoothScroll>
      <Cursor />
      <div id="top" />
      <Nav />
      <main>
        <Hero />
        <Reveal />
        <Story />
        <Gallery />
        <Invitation />
        <Countdown />
        <Venue />
        <Blessings />
        <ThankYou />
      </main>
      <AudioToggle />

      <footer className="border-t border-[#D4AF37]/10 bg-[#050505] py-10 text-center">
        <p className="font-display text-[0.5rem] md:text-[0.6rem] tracking-[0.5em] text-champagne/40 uppercase">
          With gratitude · The TPG's Family
        </p>
      </footer>
    </SmoothScroll>
  );
}