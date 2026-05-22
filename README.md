# KVRAS — Central Creativa

Sitio web de KVRAS, agencia creativa chilena. Construido con **Next.js 14**, **TypeScript** y **Tailwind CSS**.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + CSS Variables
- **CRM**: HubSpot (formulario de contacto)
- **Email**: Resend
- **Hosting**: Vercel
- **DNS/CDN/WAF**: Cloudflare

---

## Desarrollo local

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus API keys

# 3. Correr servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

---

## Deploy en Vercel

### 1. Subir a GitHub
```bash
git init
git add .
git commit -m "feat: sitio KVRAS inicial"
git remote add origin https://github.com/somoskvras-hub/kvras-route-creator.git
git push -u origin main
```

### 2. Conectar a Vercel
1. Ve a [vercel.com](https://vercel.com) → New Project
2. Importa el repo `somoskvras-hub/kvras-route-creator`
3. Framework: **Next.js** (autodetectado)
4. Agrega las variables de entorno:
   - `HUBSPOT_API_KEY`
   - `RESEND_API_KEY`
5. Click **Deploy**

### 3. Dominio kvras.cl
1. En Vercel → Settings → Domains → agrega `kvras.cl`
2. En Cloudflare → DNS → agrega CNAME: `kvras.cl → cname.vercel-dns.com`
3. Activa **Proxy** (nube naranja) para CDN + WAF

---

## Variables de entorno

| Variable | Descripción | Dónde obtenerla |
|----------|-------------|-----------------|
| `HUBSPOT_API_KEY` | API key de HubSpot CRM | app.hubspot.com/api-key |
| `RESEND_API_KEY` | API key de Resend para emails | resend.com/api-keys |

---

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz + metadata SEO
│   ├── page.tsx            # Página principal
│   ├── globals.css         # Tokens de color y animaciones
│   └── api/
│       └── contact/
│           └── route.ts    # API endpoint formulario → HubSpot + Resend
├── components/
│   ├── Nav.tsx             # Navegación fija con scroll effect
│   ├── Hero.tsx            # Hero section con cabra polaroid
│   ├── Manifesto.tsx       # "KVRAS no sigue caminos. Los crea."
│   ├── Services.tsx        # Grid de 6 servicios
│   ├── RouteSection.tsx    # Los 5 pasos del método
│   ├── GoatVideo.tsx       # Sección de video
│   ├── CTA.tsx             # Formulario de contacto
│   ├── Footer.tsx          # Footer
│   └── Reveal.tsx          # Componente de scroll animation
public/
├── logo.png
├── goat-pink.png
├── goat-selfie.png
├── goat-cta.png
└── goat-white.png
```
