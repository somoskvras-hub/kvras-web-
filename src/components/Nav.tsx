"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#manifiesto", label: "Manifiesto" },
    { href: "#servicios",  label: "Servicios"  },
    { href: "#ruta",       label: "Ruta"       },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-[oklch(0.13_0.06_320/0.75)] border-b border-white/10" : ""
        }`}
      >
        <a href="#top" className="flex items-center">
          <Image src="/logo.webp" alt="KVRAS — Central Creativa" width={160} height={60} className="h-12 w-auto" priority />
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.15em] text-white hover:opacity-70 transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:shadow-[0_0_80px_oklch(0.75_0.19_50/0.35)]"
            style={{ background: "var(--grad-warm)" }}
          >
            Conversemos
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-grad-social md:hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <Image src="/logo.webp" alt="KVRAS" width={120} height={45} className="h-10 w-auto" />
            <button aria-label="Cerrar" onClick={() => setOpen(false)} className="p-2 text-3xl text-white">×</button>
          </div>
          <nav className="flex flex-col gap-6 px-8 pt-16">
            {[...links, { href: "#contacto", label: "Conversemos" }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl tracking-wide text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
