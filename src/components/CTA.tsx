"use client";
import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";

export function CTA() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const fd = new FormData(e.currentTarget);
    const data = {
      name:    fd.get("name")    as string,
      email:   fd.get("email")   as string,
      brand:   fd.get("brand")   as string,
      message: fd.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Error al enviar");
      setSent(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error al enviar");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacto" className="relative overflow-hidden py-40 grain">
      <div className="absolute inset-0 opacity-90" style={{ background: "var(--grad-social)" }} />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[700px] w-[1000px] rounded-full opacity-30 blur-[180px] animate-pulse-glow" style={{ background: "var(--grad-warm)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12" style={{ background: "var(--grad-warm)" }} />
            <span className="text-xs uppercase tracking-[0.4em] text-white">Conversemos</span>
          </div>
          <h2 className="font-display text-[clamp(2.2rem,8.5vw,7.5rem)] leading-[0.88] tracking-tight max-w-5xl">
            Tu marca no necesita<br />
            más contenido.<br />
            <span className="text-grad italic">Necesita dirección.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10 items-end">
          {/* Goat */}
          <Reveal className="md:col-span-5 order-2 md:order-1" delay={200}>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full opacity-40 blur-3xl scale-90 animate-pulse-glow" style={{ background: "oklch(0.88 0.18 95 / 0.4)" }} />
              <Image
                src="/goat-cta.png"
                alt="Cabra KVRAS con actitud y chaqueta naranja"
                width={480}
                height={480}
                className="relative w-full max-w-md mx-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
                loading="lazy"
              />
              <span className="absolute top-6 -left-2 rotate-[-8deg] rounded-full px-5 py-2 font-display text-xl text-[oklch(0.13_0.06_320)]" style={{ background: "var(--grad-warm)", boxShadow: "var(--shadow-glow)" }}>¡Hola!</span>
              <span className="absolute bottom-12 -right-2 rotate-[6deg] rounded-full border-2 border-white bg-[oklch(0.13_0.06_320/0.9)] px-4 py-2 font-display text-base">Es actitud ✦</span>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="md:col-span-7 order-1 md:order-2" delay={400}>
            <div className="rounded-3xl border-2 border-white/20 bg-[oklch(0.13_0.06_320/0.8)] p-6 md:p-10 backdrop-blur-xl" style={{ boxShadow: "var(--shadow-glow)" }}>
              <p className="text-xs uppercase tracking-[0.4em] text-[oklch(0.72_0.04_320)]">Cuéntanos</p>
              <p className="mt-2 font-display text-3xl md:text-4xl tracking-wide">
                Diseñemos la ruta <span className="text-grad">juntas.</span>
              </p>

              {sent ? (
                <div className="mt-8 rounded-2xl border border-[oklch(0.88_0.18_95/0.3)] bg-[oklch(0.88_0.18_95/0.1)] p-8 text-center">
                  <p className="font-display text-3xl text-[oklch(0.88_0.18_95)]">¡Listo! ✦</p>
                  <p className="mt-2 text-sm text-[oklch(0.72_0.04_320)]">Recibimos tu mensaje. Te contactamos pronto.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="mt-8">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <Field label="Nombre"          name="name"    placeholder="Tu nombre"          required maxLength={80} />
                    <Field label="Email"            name="email"   placeholder="hola@tumarca.com"   required type="email" maxLength={160} />
                    <Field label="Marca / Proyecto" name="brand"   placeholder="Opcional"           className="md:col-span-2" maxLength={80} />
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-[oklch(0.72_0.04_320)]">¿Qué necesitas?</label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        maxLength={800}
                        placeholder="Hablanos de tu marca y hacia dónde quieres escalar…"
                        className="w-full resize-none rounded-xl border border-[oklch(0.3_0.08_320/0.5)] bg-[oklch(0.17_0.08_320/0.6)] px-4 py-3 text-sm text-white placeholder:text-[oklch(0.72_0.04_320/0.6)] outline-none transition focus:border-[oklch(0.88_0.18_95)] focus:ring-2 focus:ring-[oklch(0.88_0.18_95/0.3)]"
                      />
                    </div>
                  </div>

                  {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

                  <div className="mt-8 flex justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest text-[oklch(0.13_0.06_320)] transition hover:scale-[1.02] disabled:opacity-60"
                      style={{ background: "var(--grad-warm)", boxShadow: "var(--shadow-glow)" }}
                    >
                      {loading ? "Enviando…" : "Atrévete a escalar →"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className={className}>
      <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-[oklch(0.72_0.04_320)]">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-[oklch(0.3_0.08_320/0.5)] bg-[oklch(0.17_0.08_320/0.6)] px-4 py-3 text-sm text-white placeholder:text-[oklch(0.72_0.04_320/0.6)] outline-none transition focus:border-[oklch(0.88_0.18_95)] focus:ring-2 focus:ring-[oklch(0.88_0.18_95/0.3)]"
      />
    </div>
  );
}
