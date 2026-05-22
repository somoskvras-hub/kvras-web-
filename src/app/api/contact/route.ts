import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Nombre muy corto").max(80),
  email: z.string().trim().email("Email inválido").max(160),
  brand: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Mensaje muy corto").max(800),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Datos inválidos" },
        { status: 400 }
      );
    }

    const { name, email, brand, message } = parsed.data;

    // ── 1. HubSpot CRM ──────────────────────────────────────────
    if (process.env.HUBSPOT_API_KEY) {
      await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
        },
        body: JSON.stringify({
          properties: {
            firstname: name,
            email,
            company: brand || "",
            message,
          },
        }),
      });
    }

    // ── 2. Email de notificación (Resend) ────────────────────────
    if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "KVRAS Web <noreply@kvras.cl>",
          to: ["hola@kvras.cl"],
          subject: `Nuevo contacto: ${name}${brand ? ` — ${brand}` : ""}`,
          html: `
            <h2>Nuevo mensaje desde kvras.cl</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${brand ? `<p><strong>Marca:</strong> ${brand}</p>` : ""}
            <p><strong>Mensaje:</strong></p>
            <p>${message.replace(/\n/g, "<br/>")}</p>
          `,
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}
