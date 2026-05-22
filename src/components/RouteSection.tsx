import { Reveal } from "./Reveal";

const STEPS = [
  { n: "01", t: "Entendemos",        d: "Escuchamos tu marca, tu mercado y lo que está pasando dentro." },
  { n: "02", t: "Diseccionamos",     d: "Encontramos la fricción real, no la que se asume." },
  { n: "03", t: "Diseñamos la ruta", d: "Trazamos una dirección clara, no una lista de tareas." },
  { n: "04", t: "Ejecutamos",        d: "Con criterio creativo y obsesión por el detalle." },
  { n: "05", t: "Escalamos",         d: "Iteramos sobre lo que mueve aguja. El resto se descarta." },
];

export function RouteSection() {
  return (
    <section id="ruta" className="relative overflow-hidden py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12" style={{ background: "var(--grad-warm)" }} />
            <span className="text-xs uppercase tracking-[0.4em] text-[oklch(0.72_0.04_320)]">El método</span>
          </div>
          <h2 className="font-display text-[clamp(2.2rem,7vw,6rem)] leading-[0.9] tracking-tight max-w-4xl">
            Cómo trabaja <span className="text-grad">KVRAS</span>.
          </h2>
        </Reveal>

        <div className="relative mt-24">
          {/* Connecting wave */}
          <svg className="absolute inset-x-0 top-10 -z-10 hidden h-32 w-full md:block" preserveAspectRatio="none" viewBox="0 0 1200 100">
            <defs>
              <linearGradient id="rg" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="oklch(0.35 0.18 320)" />
                <stop offset="50%" stopColor="oklch(0.75 0.19 50)" />
                <stop offset="100%" stopColor="oklch(0.88 0.18 95)" />
              </linearGradient>
            </defs>
            <path d="M0 50 C 300 0,400 100,600 50 S 900 0,1200 50" stroke="url(#rg)" strokeWidth="2" fill="none" strokeDasharray="4 8" />
          </svg>

          <div className="grid gap-12 md:grid-cols-5 md:gap-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="group text-center md:text-left">
                  <div className="relative mx-auto mb-6 h-20 w-20">
                    <div className="absolute inset-0 rounded-full opacity-30 blur-xl group-hover:opacity-60 transition" style={{ background: "var(--grad-warm)" }} />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[oklch(0.3_0.08_320/0.5)] bg-[oklch(0.13_0.06_320)] font-display text-2xl">
                      {s.n}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl tracking-wide">{s.t}</h3>
                  <p className="mt-2 text-sm text-[oklch(0.72_0.04_320)] leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
