import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KVRAS — Central Creativa | Creatividad con dirección",
  description:
    "KVRAS es una central creativa que diseña rutas estratégicas para marcas con intención. Branding, dirección creativa, campañas y experiencias.",
  keywords: ["agencia creativa", "branding", "estrategia de marca", "dirección creativa", "Chile", "KVRAS"],
  authors: [{ name: "KVRAS Central Creativa" }],
  openGraph: {
    title: "KVRAS — Central Creativa",
    description: "No es falta de ideas. Es falta de dirección.",
    url: "https://kvras.cl",
    siteName: "KVRAS",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KVRAS — Central Creativa",
    description: "No es falta de ideas. Es falta de dirección.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://kvras.cl"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
