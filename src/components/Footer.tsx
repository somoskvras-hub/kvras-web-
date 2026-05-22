import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative border-t border-[oklch(0.3_0.08_320/0.5)] bg-[oklch(0.13_0.06_320)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="mb-6">
              <Image src="/logo.png" alt="KVRAS" width={160} height={60} className="h-12 w-auto" />
            </div>
            <p className="font-display text-[clamp(22px,3vw,28px)] leading-tight max-w-md">
              Creatividad <span className="text-grad">con dirección.</span>
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[oklch(0.72_0.04_320)] mb-4">Síguenos</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li><a href="#" className="hover:text-[oklch(0.88_0.18_95)] transition">Instagram</a></li>
              <li><a href="#" className="hover:text-[oklch(0.88_0.18_95)] transition">TikTok</a></li>
              <li><a href="#" className="hover:text-[oklch(0.88_0.18_95)] transition">LinkedIn</a></li>
            </ul>
            <a
              href="#contacto"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white hover:opacity-70 transition"
            >
              Conversemos →
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-[oklch(0.3_0.08_320/0.5)] pt-8 text-xs uppercase tracking-widest text-[oklch(0.72_0.04_320)] md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} KVRAS — Central Creativa</span>
          <span>Donde otros ven límites, nosotras creamos la ruta.</span>
        </div>
      </div>
    </footer>
  );
}
