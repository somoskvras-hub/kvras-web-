import { Reveal } from "./Reveal";

const VIDEO_URL = "/goat-video.mp4";

export function GoatVideo() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 opacity-60" style={{ background: "var(--grad-social)" }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12" style={{ background: "var(--grad-warm)" }} />
            <span className="text-xs uppercase tracking-[0.4em] text-[oklch(0.72_0.04_320)]">Detrás de la cabra</span>
          </div>
          <h2 className="font-display text-[clamp(2.2rem,7vw,6rem)] leading-[0.9] tracking-tight max-w-4xl">
            Diseñamos con <span className="text-grad">actitud</span>.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-[oklch(0.3_0.08_320/0.5)]">
            <div className="absolute -inset-1 -z-10 rounded-3xl blur-2xl opacity-40" style={{ background: "var(--grad-warm)" }} />
            <video
              src={VIDEO_URL}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover max-h-[600px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
