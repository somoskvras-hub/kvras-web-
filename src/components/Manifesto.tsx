import Image from "next/image";
import { Reveal } from "./Reveal";

export function Manifesto() {
  return (
    <section id="manifiesto" className="relative py-32 md:py-48">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-20 blur-[160px]"
           style={{ background: "var(--grad-glow)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-grad-warm" style={{ background: "var(--grad-warm)" }} />
            <span className="text-xs uppercase tracking-[0.4em] text-[oklch(0.72_0.04_320)]">Manifiesto</span>
          </div>
        </Reveal>

        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-7">
            <h2 className="font-display text-[clamp(2.2rem,8vw,7rem)] leading-[0.9] tracking-tight">
              KVRAS no sigue<br />
              <span className="italic font-normal opacity-60">caminos.</span><br />
              Los <span className="text-grad">crea</span>.
            </h2>
          </Reveal>

          <Reveal className="md:col-span-5" delay={300}>
            <div className="relative">
              {/* Speech bubble */}
              <div className="absolute -top-6 -left-4 z-10 max-w-[220px] rounded-2xl border-2 border-[oklch(0.88_0.18_95)] bg-[oklch(0.13_0.06_320/0.95)] p-4 rotate-[-4deg]"
                   style={{ boxShadow: "var(--shadow-glow)" }}>
                <p className="font-display text-lg leading-tight">
                  Amigas, mi marca <span className="text-[oklch(0.82_0.10_350)]">necesita</span> dirección urgente <span className="text-[oklch(0.88_0.18_95)]">✦</span>
                </p>
                <span className="absolute -bottom-3 left-10 h-0 w-0 border-x-[12px] border-t-[14px] border-x-transparent border-t-[oklch(0.88_0.18_95)]" />
              </div>

              <div className="relative rounded-3xl overflow-hidden" style={{ background: "var(--grad-yp)" }}>
                <Image src="/goat-selfie.png" alt="Cabra KVRAS tomándose una selfie" width={480} height={460} className="relative mx-auto max-h-[460px] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)]" />
              </div>
            </div>

            <p className="mt-6 text-sm text-[oklch(0.72_0.04_320)] leading-relaxed">
              No vendemos posts. Vendemos dirección estratégica para marcas que quieren llegar a otro lugar.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-xs uppercase tracking-widest">
              <div className="flex items-center gap-3"><span className="h-px w-6 bg-[oklch(0.88_0.18_95)]" />Creatividad con dirección</div>
              <div className="flex items-center gap-3"><span className="h-px w-6 bg-[oklch(0.75_0.19_50)]" />Rutas estratégicas</div>
              <div className="flex items-center gap-3"><span className="h-px w-6 bg-[oklch(0.82_0.10_350)]" />Ideas en resultados</div>
            </div>
          </Reveal>
        </div>

        {/* Cards */}
        <Reveal delay={200}>
          <div className="mt-32 grid gap-8 md:grid-cols-3">
            {[
              { num: "01", title: "Atrévete",    desc: "a escalar tus objetivos sin pedir permiso." },
              { num: "02", title: "Si no existe", desc: "el camino, lo diseñamos juntas." },
              { num: "03", title: "Tu marca",     desc: "no necesita más contenido. Necesita dirección." },
            ].map((c) => (
              <div key={c.num} className="rounded-2xl border border-[oklch(0.3_0.08_320/0.5)] bg-[oklch(0.17_0.08_320/0.5)] p-8 transition hover:border-[oklch(0.75_0.19_50/0.5)]">
                <div className="font-display text-6xl text-grad">{c.num}</div>
                <div className="mt-6 font-display text-3xl tracking-wide">{c.title}</div>
                <p className="mt-2 text-sm text-[oklch(0.72_0.04_320)]">{c.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
