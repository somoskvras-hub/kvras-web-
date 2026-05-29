"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const MARQUEE_ITEMS = [
  { text: "Creatividad con dirección", color: "text-[oklch(0.88_0.18_95)]" },
  { text: "Atrévete a escalar",         color: "text-[oklch(0.82_0.10_350)]" },
  { text: "Central Creativa",           color: "text-[oklch(0.75_0.19_50)]"  },
  { text: "KVRAS",                      color: "text-[oklch(0.88_0.18_95)]" },
  { text: "Diseñamos la ruta",          color: "text-[oklch(0.82_0.10_350)]" },
  { text: "Es actitud",                 color: "text-[oklch(0.75_0.19_50)]"  },
];

export function Hero() {
  const [y, setY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden grain flex items-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-grad-social" />
      <div className="absolute -top-40 -left-40 -z-10 h-[600px] w-[600px] rounded-full bg-[oklch(0.78_0.16_350/0.4)] blur-[140px] animate-pulse-glow" />
      <div className="absolute -bottom-40 -right-40 -z-10 h-[700px] w-[700px] rounded-full bg-[oklch(0.22_0.13_320)] blur-[160px] opacity-70" />

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20 grid grid-cols-1 md:grid-cols-12 items-center gap-10">

        {/* Text */}
        <div className="md:col-span-7">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-12 bg-[oklch(0.88_0.18_95)]" />
            <span className="text-xs uppercase tracking-[0.4em] text-white">Central Creativa</span>
          </div>

          <h1 className="font-display leading-[0.82] tracking-tight">
            <span className="block text-[clamp(3.5rem,13vw,9rem)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">ES</span>
            <span className="block text-[clamp(3.5rem,13vw,9rem)] text-[oklch(0.88_0.18_95)] italic anim-pulse-txt">ACTITUD</span>
            <span className="mt-3 block font-body text-xs uppercase tracking-[0.6em] text-white">· Central Creativa ·</span>
          </h1>

          <p className="mt-8 max-w-md text-base md:text-lg text-white/85">
            No es falta de ideas. Es falta de dirección.<br />
            Convertimos marcas en experiencias que conectan.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest text-[oklch(0.13_0.06_320)] transition hover:scale-[1.03]"
              style={{ background: "var(--grad-warm)", boxShadow: "var(--shadow-glow)" }}
            >
              Atrévete a escalar
            </a>
            <a href="#manifiesto" className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest text-white">
              <span className="border-b-2 border-white/50 pb-1 group-hover:border-white transition">Conoce más</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Goat polaroid */}
        <div
          className="relative md:col-span-5 flex justify-center md:justify-end"
          style={{ transform: mounted ? `translateY(${y * -0.08}px)` : undefined }}
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-[oklch(0.82_0.10_350/0.5)] blur-3xl scale-90 animate-pulse-glow" />
            <div className="absolute -inset-6 -z-10 rotate-[-6deg] rounded-[2.5rem] bg-[oklch(0.75_0.19_50/0.8)] mix-blend-multiply" />
            <div className="absolute -inset-3 -z-10 rotate-[3deg] rounded-[2rem] border-2 border-white/70" />

            <div className="relative rotate-[-3deg] bg-white/95 p-3 pb-12 shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
              <div className="relative overflow-hidden">
                <Image src="/goat-pink.png" alt="KVRAS — cabra rosa con actitud" width={260} height={340} className="w-[260px] object-cover" />
                <span className="absolute -top-3 left-6 h-6 w-20 rotate-[-12deg] bg-[oklch(0.88_0.18_95/0.8)] mix-blend-screen" />
                <span className="absolute -top-3 right-8 h-6 w-16 rotate-[8deg] bg-[oklch(0.82_0.10_350/0.8)] mix-blend-screen" />
              </div>
              <p className="mt-3 font-display text-center text-sm tracking-[0.3em] text-black/70">KVRAS · ROLL 001</p>
            </div>

            <span className="absolute -top-4 right-2 z-10 rotate-[10deg] rounded-full bg-[oklch(0.82_0.10_350)] px-4 py-2 font-display text-lg tracking-wider shadow-[var(--shadow-glow)]">¡HOLA!</span>
            <span className="absolute bottom-4 -right-6 z-10 rotate-[-6deg] border-2 border-white bg-[oklch(0.13_0.06_320/0.95)] px-3 py-1 font-display text-xs tracking-[0.3em]">EST · MMXXIV</span>

            <div className="absolute -bottom-8 -left-10 hidden md:block h-32 w-32 animate-spin-slow">
              <svg viewBox="0 0 120 120" className="h-full w-full">
                <defs>
                  <path id="kc" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                </defs>
                <circle cx="60" cy="60" r="56" fill="oklch(0.88 0.18 95 / 0.95)" />
                <text fontFamily="'Bebas Neue', sans-serif" fill="oklch(0.13 0.06 320)" fontSize="13" letterSpacing="4">
                  <textPath href="#kc">CENTRAL · CREATIVA · KVRAS · CENTRAL · CREATIVA · </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-white/20 bg-[oklch(0.22_0.13_320/0.6)] backdrop-blur py-3">
        <div className="flex whitespace-nowrap animate-marquee font-display text-lg tracking-wider">
          {[0, 1].map((i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 pr-8">
              {MARQUEE_ITEMS.map((item, j) => (
                <span key={j} className="flex items-center gap-8">
                  <span className={item.color}>✦</span>
                  <span>{item.text}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
