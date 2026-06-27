import { createFileRoute } from "@tanstack/react-router";
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

function Nav() {
  const links = [
    { href: "#story", label: "Story" },
    { href: "#gallery", label: "Gallery" },
    { href: "#invitation", label: "Invitation" },
    { href: "#countdown", label: "Countdown" },
    { href: "#venue", label: "Venue" },
    { href: "#blessings", label: "Blessings" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference">
      <a href="#top" data-hover className="font-display text-xs tracking-[0.5em] text-champagne uppercase cursor-none">
        
        <img src={gu} alt="Ganesan and Usha's Silver Jubilee" className="inline-block h-16 w-16 ml-2 rounded-full" />
      </a>
          <ul className="hidden md:flex items-center gap-8">
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
      <p className="hidden md:block font-display text-xs md:text-[0.65rem] tracking-[0.4em] text-champagne/70 uppercase">
        12 · 07 · 2026
      </p>
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
