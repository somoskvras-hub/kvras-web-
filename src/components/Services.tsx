import { Reveal } from "./Reveal";

const SERVICES = [
  { n: "01", t: "Estrategia de marca",        d: "Posicionamiento, propósito y arquitectura para marcas con intención." },
  { n: "02", t: "Branding",                   d: "Identidad visual y verbal que se siente, no que se explica." },
  { n: "03", t: "Redes sociales",             d: "Contenido con dirección, no por llenar el feed." },
  { n: "04", t: "Campañas creativas",         d: "Concepto, narrativa y ejecución que mueven aguja." },
  { n: "05", t: "Producción de experiencias", d: "Eventos, activaciones y momentos que se quedan." },
  { n: "06", t: "Dirección creativa",         d: "Una mirada que articula todo lo que tu marca toca." },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12" style={{ background: "var(--grad-warm)" }} />
            <span className="text-xs uppercase tracking-[0.4em] text-[oklch(0.72_0.04_320)]">Servicios</span>
          </div>
          <h2 className="font-display text-[clamp(2.2rem,7vw,6rem)] leading-[0.9] tracking-tight max-w-4xl">
            Lo que <span className="text-grad">construimos</span> contigo.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-px bg-[oklch(0.3_0.08_320/0.5)] md:grid-cols-2 lg:grid-cols-3 overflow-hidden rounded-3xl border border-[oklch(0.3_0.08_320/0.5)]">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <article className="group relative h-full bg-[oklch(0.13_0.06_320)] p-8 md:p-10 transition duration-500 hover:bg-[oklch(0.17_0.08_320)] overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"
                     style={{ background: i % 3 === 0 ? "linear-gradient(135deg,oklch(0.75 0.19 50/0.3),transparent)" : i % 3 === 1 ? "linear-gradient(135deg,oklch(0.82 0.10 350/0.3),transparent)" : "linear-gradient(135deg,oklch(0.88 0.18 95/0.3),transparent)" }} />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-[oklch(0.72_0.04_320)] group-hover:text-grad transition">{s.n}</span>
                    <span className="text-xl opacity-0 transition group-hover:opacity-100 group-hover:translate-x-1">→</span>
                  </div>
                  <h3 className="mt-12 font-display text-3xl md:text-4xl tracking-wide leading-tight">{s.t}</h3>
                  <p className="mt-4 text-[oklch(0.72_0.04_320)] text-sm leading-relaxed">{s.d}</p>
                  <div className="mt-12 h-px w-12 transition-all duration-500 group-hover:w-full" style={{ background: "var(--grad-warm)" }} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
